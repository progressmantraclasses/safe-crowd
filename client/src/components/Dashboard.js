import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Dashboard = () => {
  const [reports, setReports] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await fetch("https://safecrowd.onrender.com/api/emergency");
      const data = await response.json();
      setReports(data);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  };

  const deleteReport = async (id) => {
    try {
      const response = await fetch(`https://safecrowd.onrender.com/api/emergency/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setReports(reports.filter(report => report._id !== id));
        alert("Report deleted successfully");
      } else {
        alert("Failed to delete report");
      }
    } catch (error) {
      console.error("Error deleting report:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
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
      
      <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Total Reports: {reports.length}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Contact</th>
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">File</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report._id} className="text-center border">
                  <td className="p-2 border">{report.contactNumber}</td>
                  <td className="p-2 border">{report.emergencyType}</td>
                  <td className="p-2 border">{report.description}</td>
                  <td className="p-2 border">
                  <img
                    src={`https://safecrowd.onrender.com/${report.filePath}`}
                      alt="Emergency"
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-2 border">
                    <button onClick={() => deleteReport(report._id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
