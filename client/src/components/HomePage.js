import React from 'react';
import { Menu, X, Users, Shield, Camera, AlertTriangle, Globe, HelpCircle, Bell, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const features = [
    { title: "SOS Emergency Button", description: "Instantly sends live location and a live image on activation.", icon: <AlertTriangle className="w-6 h-6" /> },
    { title: "Face Recognition", description: "AI-powered face recognition for enhanced security.", icon: <Eye className="w-6 h-6" /> },
    { title: "Live People Detection", description: "Monitor and manage crowd density in real-time.", icon: <Users className="w-6 h-6" /> },
    { title: "Weapon Detection", description: "AI-driven detection of weapons like knives and guns from CCTV footage.", icon: <Shield className="w-6 h-6" /> },
    { title: "Heatmaps & Alerts", description: "Visualize crowded areas and receive automatic alerts.", icon: <Globe className="w-6 h-6" /> },
    { title: "AI Anomaly Detection", description: "Detect fights, unattended objects, and aggressive behavior.", icon: <HelpCircle className="w-6 h-6" /> },
    { title: "CCTV Integration", description: "Seamlessly connects with existing surveillance systems.", icon: <Camera className="w-6 h-6" /> },
    { title: "Emergency Report Form", description: "Users can report incidents instantly.", icon: <Bell className="w-6 h-6" /> },
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
      
      {/* Hero Section */}
      <div className="bg-white text-black py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
        <div className="max-w-lg md:flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Smart Crowd Management Solutions</h1>
          <p className="text-lg md:text-xl mb-6">Revolutionizing crowd safety with real-time monitoring and AI-powered analytics.</p>
          <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">Get Started</button>
        </div>
        <div className="flex-shrink-0 w-full md:w-[50%]">
          <img src="https://www.adiance.com/images/cc2.png" alt="crowd" className="w-full h-80 object-cover rounded-lg" />
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-[rgb(144,178,213)] py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
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

export default HomePage;
