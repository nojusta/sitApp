import React from 'react';
import './Sidebar.css'; // Import the CSS file for the sidebar

const Sidebar = ({ isOpen, onClose, selectedMarker, address, /*onGetDirections*/ }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      {selectedMarker ? (
        <div>
          <h2>Marker Information</h2>
          <p><strong>Name:</strong> {selectedMarker.name}</p>
          <p><strong>Details:</strong> {selectedMarker.details}</p>
          <p><strong>Address:</strong> {address}</p>
          {/*<button onClick={onGetDirections}>Go</button>*/}
        </div>
      ) : (
        <div>
          <h2>Home</h2>
          <p>No place like home!</p>
        </div>
      )}
      <img src="src/components/sitv2.png" alt="sitapp-logo" className="sidebar-img" />
    </div>
  );
};

export default Sidebar;