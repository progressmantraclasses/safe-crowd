import React, { useEffect, useState } from "react";
import { Menu, X } from 'lucide-react';
import axios from "axios";

const EmergencyAdmin = () => {
  const [reports, setReports] = useState([]);
  const [reportCount, setReportCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Fetch emergency reports from backend
  const fetchReports = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/emergencyreports");
      setReports(response.data);
      setReportCount(response.data.length);
    } catch (error) {
      console.error("Error fetching emergency reports:", error);
    }
  };

  useEffect(() => {
    fetchReports();
    const interval = setInterval(fetchReports, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

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
             <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">🚨 Emergency Reports</h1>
      <p className="text-lg font-semibold">Total Messages Received: {reportCount}</p>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Latitude</th>
              <th className="py-2 px-4 border">Longitude</th>
              <th className="py-2 px-4 border">Image</th>
              <th className="py-2 px-4 border">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4 border">{report.latitude}</td>
                <td className="py-2 px-4 border">{report.longitude}</td>
                <td className="py-2 px-4 border">
                 
                    <img
                    src={`http://localhost:5000${report.imageUrl}`}
                      alt="Emergency"
                      className="h-16 w-16 object-cover rounded"
                    />
                 
                </td>
                <td className="py-2 px-4 border">{new Date(report.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default EmergencyAdmin;
