import React from "react";
import { Menu, X, Users, Shield, Camera, Mail } from 'lucide-react';
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Heatmap = () => {
     const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const crowdLocations = [
    { lat: 28.7041, lng: 77.1025, density: 50 }, // Delhi Example
    { lat: 19.0760, lng: 72.8777, density: 80 }, // Mumbai Example
  ];

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

    <MapContainer center={[28.7041, 77.1025]} zoom={5} className="h-96 w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {crowdLocations.map((location, index) => (
        <Circle
          key={index}
          center={[location.lat, location.lng]}
          radius={location.density * 100}
          fillColor="red"
          color="red"
          fillOpacity={0.5}
        />
      ))}
    </MapContainer>
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

export default Heatmap;
