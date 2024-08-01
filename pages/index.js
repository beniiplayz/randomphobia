import { useState } from 'react';
import Item from '../components/Item';

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

const items = itemNames.map(name => ({
  name,
  tiers: [1, 2, 3].map(tier => `/images/${name.toLowerCase().replace(/ /g, '_')}/t${tier}.webp`)
}));

export default function Home() {
  const [randomizedItems, setRandomizedItems] = useState(items.map(item => ({ ...item, randomizationResult: null })));
  const [disableArrows, setDisableArrows] = useState(false);

  const randomizeTiers = () => {
    setRandomizedItems(randomizedItems.map(item => ({
      ...item,
      randomizationResult: Math.floor(Math.random() * 3)
    })));
  };

  return (
    <div>
      <h1>RandomPhobia | V0.1.11</h1>
      <button onClick={randomizeTiers}>Let's Randomize!</button>
      <label>
        <input
          type="checkbox"
          checked={disableArrows}
          onChange={() => setDisableArrows(!disableArrows)}
        />
        Disable Arrows
      </label>
      <div className="items-container">
        {randomizedItems.map(item => (
          <Item key={item.name} item={item} disableArrows={disableArrows} />
        ))}
      </div>
    </div>
  );
}
