import { useState } from 'react';
import Item from '../components/Item';

// List of item names
const itemNames = [
  'Crucifix',
  'D.O.T.S. Projector',
  'EMF Reader',
  'Firelight',
  'Flashlight',
  'Ghost Writing Book',
  'Head Gear',
  'Igniter',
  'Incense',
  'Motion Sensor',
  'Parabolic Microphone',
  'Photo Camera',
  'Salt',
  'Sanity Medication',
  'Spirit Box',
  'Thermometer',
  'Tripod',
  'UV Light',
  'Video Camera'
];

// Creates an array of items and paths to their corresponding tier images
const items = itemNames.map(name => ({
  name,
  tiers: [1, 2, 3].map(tier => `/images/${name.toLowerCase().replace(/ /g, '_')}/t${tier}.webp`)
}));

// Home component definition
export default function Home() {
  // State to keep track of randomized items
  const [randomizedItems, setRandomizedItems] = useState(items.map(item => ({ ...item, randomizationResult: null })));
  // State to control whether arrows are disabled
  const [disableArrows, setDisableArrows] = useState(false);

  // Function to randomize the tiers of items
  const randomizeTiers = () => {
    setRandomizedItems(randomizedItems.map(item => ({
      ...item,
      randomizationResult: Math.floor(Math.random() * 3)
    })));
  };

  return (
    <div>
      {/* Page title */}
      <h1>RandomPhobia | V0.1.12</h1>
      {/* Button to trigger randomization */}
      <button onClick={randomizeTiers}>Let's Randomize!</button>
      {/* Checkbox to toggle arrow visibility */}
      <input
          type="checkbox"
          checked={disableArrows}
          onChange={() => setDisableArrows(!disableArrows)}
          id="toggle" 
          class="checkbox"
      />
      <label for="toggle" class="switch"></label>
      <p>Disable arrows</p>
      {/* Container for item components */}
      <div className="items-container">
        {randomizedItems.map(item => (
          <Item key={item.name} item={item} disableArrows={disableArrows} />
        ))}
      </div>
    </div>
  );
}