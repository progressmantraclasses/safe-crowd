import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const CCTV = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [recognizedName, setRecognizedName] = useState("Scanning...");
  const [lastDetected, setLastDetected] = useState(null);

  useEffect(() => {
    // Access webcam
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });

    // Handle response from backend
    socket.on("response", (data) => {
      setRecognizedName(data.name);

      // Show alert when a face is detected and it's different from the last detected
      if (data.name !== "Unknown" && data.name !== lastDetected) {
        alert(`Face Detected: ${data.name}!`);
        setLastDetected(data.name); // Prevent multiple alerts for the same person
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [lastDetected]);

  // Send frames to backend
  const sendFrameToBackend = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (canvas && video) {
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL("image/jpeg");

      socket.emit("frame", imageData);
    }
  };

  // Capture frame every 100ms
  useEffect(() => {
    const interval = setInterval(sendFrameToBackend, 100);
    return () => clearInterval(interval);
  }, []);

  return (

    
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      
      <h1 className="text-2xl mb-4">Real-time Face Recognition</h1>
      <video ref={videoRef} autoPlay className="border-4 border-white rounded-lg w-96 h-72"></video>
      <canvas ref={canvasRef} className="hidden" width={640} height={480}></canvas>
      <p className="text-xl mt-4">
        Recognized: <span className="font-bold text-green-400">{recognizedName}</span>
      </p>
    </div>
  );
};

export default CCTV;
