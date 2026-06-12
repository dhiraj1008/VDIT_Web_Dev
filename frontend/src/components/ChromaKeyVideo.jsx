import React, { useEffect, useRef, useState } from "react";
import { Eye, EyeOff, Pause, Play, Volume2, VolumeX } from "lucide-react";

const ChromaKeyVideo = ({ src, className = "", ariaLabel = "Video" }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);
  const [volume, setVolume] = useState(0.75);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return undefined;

    const context = canvas.getContext("2d", { willReadFrequently: true });
    let frameId;

    const paintFrame = () => {
      if (video.readyState >= 2 && video.videoWidth && video.videoHeight) {
        if (canvas.width !== video.videoWidth) canvas.width = video.videoWidth;
        if (canvas.height !== video.videoHeight) canvas.height = video.videoHeight;

        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const frame = context.getImageData(0, 0, canvas.width, canvas.height);
        const data = frame.data;

        for (let i = 0; i < data.length; i += 4) {
          const red = data[i];
          const green = data[i + 1];
          const blue = data[i + 2];
          const greenDominance = green - Math.max(red, blue);

          if (green > 70 && greenDominance > 24) {
            const alpha = Math.max(0, 255 - greenDominance * 9);
            data[i + 3] = alpha;
          }
        }

        context.putImageData(frame, 0, 0);
      }

      frameId = requestAnimationFrame(paintFrame);
    };

    const start = () => {
      if (!isVisible) return;
      video.play().catch(() => {});
      paintFrame();
    };

    video.addEventListener("loadeddata", start);
    if (video.readyState >= 2) start();

    return () => {
      cancelAnimationFrame(frameId);
      video.removeEventListener("loadeddata", start);
    };
  }, [src, isVisible]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = volume;
    if (volume > 0 && video.muted) {
      video.muted = false;
      setIsMuted(false);
    }
  }, [volume]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  const showAvatar = () => {
    const video = videoRef.current;

    setIsVisible(true);
    setHasEnded(false);

    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const hideAvatar = () => {
    const video = videoRef.current;

    if (video) {
      video.pause();
    }

    setIsPlaying(false);
    setIsVisible(false);
  };

  const toggleAvatar = () => {
    if (isVisible) {
      hideAvatar();
      return;
    }

    showAvatar();
  };

  return (
    <div className={className} aria-label={ariaLabel}>
      {isVisible && (
        <>
          <video
            ref={videoRef}
            src={src}
            autoPlay
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => {
              setHasEnded(true);
              hideAvatar();
            }}
          />
          <canvas ref={canvasRef} role="img" aria-label={ariaLabel} />
          <div className="avatar-video-controls" aria-label="Avatar video controls">
            <div className="avatar-control-row">
              <button type="button" onClick={togglePlayback}>
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                <span>{isPlaying ? "Pause" : "Play"}</span>
              </button>
              <button type="button" onClick={() => setIsMuted((current) => !current)}>
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                <span>{isMuted ? "Unmute" : "Mute"}</span>
              </button>
            </div>
            <label>
              <span>Volume</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(event) => setVolume(Number(event.target.value))}
              />
            </label>
          </div>
        </>
      )}
      <button type="button" className="avatar-toggle-button" onClick={toggleAvatar}>
        {isVisible ? <EyeOff size={15} /> : <Eye size={15} />}
        <span>{isVisible ? "Hide Guide" : hasEnded ? "Replay Guide" : "Show Guide"}</span>
      </button>
    </div>
  );
};

export default ChromaKeyVideo;
