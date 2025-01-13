import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#05070a] text-gray-300 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
            ArsenalKit
          </h3>
          <p className="text-sm">
            A comprehensive toolkit for cybersecurity professionals and ethical
            hackers.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/tools" className="hover:text-white">
                Tools
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a
              href="https://github.com/your-username/arsenalkit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} ArsenalKit. All rights reserved.
      </div>
    </footer>
  );
}
