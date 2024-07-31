import { useState, useEffect } from 'react';

export default function Item({ item, disableArrows }) {
  const [selectedTier, setSelectedTier] = useState(0);

  useEffect(() => {
    if (item.currentTier !== null) {
      setSelectedTier(item.currentTier);
    }
  }, [item.currentTier]);

  const handleNext = () => {
    setSelectedTier((prevTier) => (prevTier + 1) % 3);
  };

  const handlePrevious = () => {
    setSelectedTier((prevTier) => (prevTier + 2) % 3);
  };

  return (
    <div className="item">
      <h2>{item.name}</h2>
      <div className="tiers">
        {!disableArrows && <span className="arrow left" onClick={handlePrevious}>&#9664;</span>}
        <img
          src={item.tiers[selectedTier]}
          alt={`Tier ${selectedTier + 1}`}
          className="selected"
        />
        {!disableArrows && <span className="arrow right" onClick={handleNext}>&#9654;</span>}
      </div>
      {item.currentTier !== null && (
        <p className="selected-tier">Current tier: {item.currentTier + 1}</p>
      )}
    </div>
  );
}
