import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import VideoPlayer from './Components/VideoPlayer';
import VideoChooser from './Components/VideoChooser';
import './App.css';

function App() {
  // State to hold the selected video file
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle video selection
  const handleVideoSelect = (file) => {
    setSelectedFile(file); // Set the selected file in state
  };

  return (
    <div className='wrapper'>
      {/* Navigation bar */}
      <div className='NavBar'>
        <ul className='list'>
          {/* Navigation links */}
          <NavLink className="choseFile" to="/Choose_File">Choose Video</NavLink>
          <NavLink className="Player" to="/Video_Player">Play Video</NavLink>
        </ul>
      </div>

      {/* Container for components */}
      <div className='componentContainer'>
        {/* Routing setup */}
        <Routes>
          {/* Route for video player */}
          <Route path='/Video_Player' element={<VideoPlayer selectedFile={selectedFile} />} />
          {/* Route for video chooser */}
          <Route path='/Choose_File' element={<VideoChooser onVideoSelect={handleVideoSelect} />} />
          {/* Default route */}
          <Route index element={<VideoChooser onVideoSelect={handleVideoSelect} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
