import React, { useState, useRef } from 'react';
import thumb from '/public/Logo.jpg';

function VideoPlayer({ selectedFile }) {
    // State to manage whether to show thumbnail or not
    const [showThumbnail, setShowThumbnail] = useState(false);
    // Reference to the video element
    const videoRef = useRef(null);

    // Event handler for when the video pauses
    const handleVideoPause = () => {
        setShowThumbnail(true);
    };

    // Event handler for when the thumbnail is clicked
    const handleThumbnailClick = () => {
        setShowThumbnail(false);
    };

    // Event handler for when the video starts playing
    const handleVideoPlay = () => {
        setShowThumbnail(false);
    };

    // Event handler for double-clicking the video to play/pause
    const handleVideoDoubleClick = () => {
        const video = videoRef.current;
        if (video) {
            video.paused ? video.play() : video.pause();
        }
    };

    return (
        <div className="container">
            <div className="video-wrapper">
                {/* Display message if no file is selected */}
                {!selectedFile ? (
                    <h1>No File Chosen</h1>
                ) : (
                    <div >
                        {/* Display selected file name */}
                        <h2 className='fileName'>Selected Video : {selectedFile.name}</h2>
                        {/* Display video player if file is selected */}
                        {selectedFile && (
                            <video controls onDoubleClick={handleVideoDoubleClick}
                                onPause={handleVideoPause} // Event handler for when the video pauses
                                onPlay={handleVideoPlay} // Event handler for when the video starts playing
                                className="video"
                                poster={thumb}
                                ref={videoRef}
                            >
                                <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} />
                            </video>
                        )}
                    </div>
                )}
                {/* Display thumbnail if showThumbnail state is true */}
                {showThumbnail && (
                    <img
                        src={thumb}
                        alt="Thumbnail"
                        className="thumbnail"
                        onClick={handleThumbnailClick} // Click event handler for the thumbnail
                    />
                )}
            </div>
        </div>
    );
}

export default VideoPlayer;
