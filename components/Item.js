import { useState, useEffect } from 'react';

// Item component definition
export default function Item({ item, disableArrows }) {
  // State to keep track of the selected tier
  const [selectedTier, setSelectedTier] = useState(0);

  // Effect to set the selected tier based on the randomization result
  useEffect(() => {
    if (item.randomizationResult !== null) {
      setSelectedTier(item.randomizationResult);
    }
  }, [item.randomizationResult]);

  // Handler to move to the next tier
  const handleNext = () => {
    setSelectedTier((prevTier) => (prevTier + 1) % 3);
  };

  // Handler to move to the previous tier
  const handlePrevious = () => {
    setSelectedTier((prevTier) => (prevTier + 2) % 3);
  };

  return (
    <div className="item">
      {/* Display the item name */}
      <h2>{item.name}</h2>
      <div className="tiers">
        {/* Left arrow to move to the previous tier, hidden if arrows are disabled */}
        {!disableArrows && <span className="arrow left" onClick={handlePrevious}>&#9664;</span>}
        {/* Display the image of the selected tier */}
        <img
          src={item.tiers[selectedTier]}
          alt={`Tier ${selectedTier + 1}`}
          className="selected"
        />
        {/* Right arrow to move to the next tier, hidden if arrows are disabled */}
        {!disableArrows && <span className="arrow right" onClick={handleNext}>&#9654;</span>}
      </div>
      {/* Display a message if there is a randomization result */}
      {item.randomizationResult !== null && (
        <p className="result-message">
          You have to take the tier {item.randomizationResult + 1},<br></br> don't cheat!
        </p>
      )}
    </div>
  );
}