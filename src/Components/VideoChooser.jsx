import React from 'react';

function VideoChooser({ onVideoSelect }) {
  // Function to handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0]; // Get the selected file
    onVideoSelect(file); // Callback to parent component with the selected file
  };

  return (
    <div className='VideoChooser'>
      <input className='input-box'
        type="file"
        accept="video/*" // Accept only video files
        onChange={handleFileSelect} // Call handleFileSelect function when a file is selected
      />
    </div>
  );
}

export default VideoChooser;
