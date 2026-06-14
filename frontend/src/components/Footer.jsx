import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-surface-alt border-t border-brand/15 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">

          <div>
            <h4 className="text-brand font-semibold text-xs tracking-[0.18em] mb-4 font-sans-ui">
              Disclosure
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/aicte" className="hover:text-brand">
                  AICTE
                </Link>
              </li>
              <li>
                <Link to="/vtu" className="hover:text-brand">
                  VTU
                </Link>
              </li>
              <li>
                <Link to="/naac" className="hover:text-brand">
                  NAAC
                </Link>
              </li>
              <li>
                <Link to="/nirf" className="hover:text-brand">
                  NIRF
                </Link>
              </li>
              <li>
                <Link to="/iqac" className="hover:text-brand">
                  IQAC
                </Link>
              </li>
              <li>
                <Link to="/governance" className="hover:text-brand">
                  Governance
                </Link>
              </li>
              <li>
                <Link to="/delnet" className="hover:text-brand">
                  DELNET
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand font-semibold text-xs tracking-[0.18em] mb-4 font-sans-ui">
              CONTACT US
            </h4>
            <ul className="space-y-2 text-sm text-[#3a3a3a]">
              <li>KLS VDIT, Haliyal</li>
              <li>Uttara Kannada, Karnataka 581 329</li>
              <li className="pt-1">08284 - 220 333</li>
              <li>08284 - 220 332</li>
              <li>info@klsvdit.edu.in</li>
            </ul>
          </div>

          <div>
            <button className="w-full bg-brand text-surface py-3 px-4 text-sm font-semibold rounded hover:bg-brand-dark transition-colors font-sans-ui">
              Subscribe to our newsletter
            </button>
            <div className="mt-5 flex gap-3 text-brand">
              <a href="#li" aria-label="LinkedIn" className="hover:scale-110 transition">
                <Linkedin size={22} />
              </a>
              <a href="#tw" aria-label="Twitter" className="hover:scale-110 transition">
                <Twitter size={22} />
              </a>
              <a href="#fb" aria-label="Facebook" className="hover:scale-110 transition">
                <Facebook size={22} />
              </a>
              <a href="#ig" aria-label="Instagram" className="hover:scale-110 transition">
                <Instagram size={22} />
              </a>
              <a href="#yt" aria-label="YouTube" className="hover:scale-110 transition">
                <Youtube size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brand/15 text-xs text-[#3a3a3a]/80 flex flex-col md:flex-row justify-between gap-3">
          <span>
            © 2026 KLS Vishwanathrao Deshpande Institute of Technology, Haliyal
          </span>
          <span>
            A Karnatak Law Society Initiative · Affiliated to VTU, Belagavi
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
