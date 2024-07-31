import { useState } from 'react';
import Item from '../components/Item';

const items = [
  { name: 'Crucifix', tiers: ['/images/crucifix/t1.webp', '/images/crucifix/t2.webp', '/images/crucifix/t3.webp'] },
  { name: 'D.O.T.S. Projector', tiers: ['/images/dots/t1.webp', '/images/dots/t2.webp', '/images/dots/t3.webp'] },
  { name: 'EMF Reader', tiers: ['/images/emf/t1.webp', '/images/emf/t2.webp', '/images/emf/t3.webp'] },
  { name: 'Spirit Box', tiers: ['/images/box/t1.webp', '/images/box/t2.webp', '/images/box/t3.webp'] },

];

export default function Home() {
  const [randomizedItems, setRandomizedItems] = useState(items.map(item => ({ ...item, currentTier: null })));
  const [disableArrows, setDisableArrows] = useState(false);

  const randomizeTiers = () => {
    setRandomizedItems(randomizedItems.map(item => ({
      ...item,
      currentTier: Math.floor(Math.random() * 3)
    })));
  };

  return (
    <div>
      <h1>RandomPhobia | V0.1.0</h1>
      <button onClick={randomizeTiers}>Randomize!</button>
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
