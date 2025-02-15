import React from "react";
import { Menu, X, Users, Shield, Camera, Mail } from 'lucide-react';
import CCTVFeed from "./CCTVFeed";
import Heatmap from "./Heatmap";
const Dashboard = () => {
     const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
                    <nav className="bg-black shadow-md text-white py-4 px-6 flex justify-between items-center">
                      <h1 className="text-xl font-bold">CrowdSafe</h1>
                      <div className="hidden md:flex space-x-6">
                        <a href="/" className="hover:text-gray-300">Home</a>
                        <a href="/admin" className="hover:text-gray-300">Admin</a>
                        <a href="/heatmap" className="hover:text-gray-300">Heatmaps</a>
                        <a href="/cctv" className="hover:text-gray-300">CCTV</a>
                        <a href="/contact" className="hover:text-gray-300">Contact</a>
                      </div>
                      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                      </button>
                    </nav>
    <div className="p-5">
      <h1 className="text-3xl font-bold">Crowd Security Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <CCTVFeed />
        <Heatmap />
      </div>
    </div>
     {/* Footer */}
     <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Leading provider of crowd management solutions for safer public spaces.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: info@crowdsafe.com</li>
                <li className="text-gray-400">Phone: (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg w-full text-gray-900"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 CrowdSafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
