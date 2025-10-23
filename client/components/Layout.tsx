import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-transparent border-b border-border/50 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline">
              PerfumeArt
            </span>
          </Link>

          <nav className="flex items-center gap-6 sm:gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur text-white mt-16 border-t border-border/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="font-bold text-lg">PerfumeArt</span>
              </div>
              <p className="text-sm text-white/70">
                Handcrafted perfumes made with love and care.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-primary transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Connect With Us</h4>
              <p className="text-sm text-white/70 mb-3">
                Follow our Instagram for new designs and updates
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Visit Instagram
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-sm text-white/60">
              © 2024 PerfumeArt. All rights reserved. Empowering artisans through
              beautiful fragrances.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
