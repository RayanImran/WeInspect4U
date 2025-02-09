import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-yellow-400">AutoInspectors</h4>
          <p className="text-lg">
            Your trusted partner for car inspections in Winnipeg, MB.
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} WeInspect4U. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold text-yellow-400 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/inspection"
                className="hover:text-yellow-400 transition duration-300"
              >
                Book an Inspection
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="hover:text-yellow-400 transition duration-300"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-yellow-400 transition duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="hover:text-yellow-400 transition duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-yellow-400">Contact Us</h4>
          <p className="flex items-center space-x-2">
            <MapPin className="text-yellow-400" />
            <span>Winnipeg, MB, Canada</span>
          </p>
          <p className="flex items-center space-x-2">
            <Mail className="text-yellow-400" />
            <span>Email: info@weinspect4u.com</span>
          </p>
          <p className="flex items-center space-x-2">
            <Phone className="text-yellow-400" />
            <span>Phone: (204) 123-4567</span>
          </p>
          <p className="flex items-center space-x-2">
            <span className="font-semibold">Hours:</span>
            <span>Mon-Fri 9:00 am - 5:00 pm</span>
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition duration-300"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition duration-300"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-yellow-400 transition duration-300"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
