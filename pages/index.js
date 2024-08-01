import { useState } from 'react';
import Item from '../components/Item';

const items = [
  { name: 'Crucifix', tiers: ['/images/crucifix/t1.webp', '/images/crucifix/t2.webp', '/images/crucifix/t3.webp'] },
  { name: 'D.O.T.S. Projector', tiers: ['/images/dots_projector/t1.webp', '/images/dots_projector/t2.webp', '/images/dots_projector/t3.webp'] },
  { name: 'EMF Reader', tiers: ['/images/emf_reader/t1.webp', '/images/emf_reader/t2.webp', '/images/emf_reader/t3.webp'] },
  { name: 'Firelight', tiers: ['/images/firelight/t1.webp', '/images/firelight/t2.webp', '/images/firelight/t3.webp'] },
  { name: 'Flashlight', tiers: ['/images/flashlight/t1.webp', '/images/flashlight/t2.webp', '/images/flashlight/t3.webp'] },
  { name: 'Ghost Writing Book', tiers: ['/images/ghost_writing_book/t1.webp', '/images/ghost_writing_book/t2.webp', '/images/ghost_writing_book/t3.webp'] },
  { name: 'Head Gear', tiers: ['/images/head_gear/t1.webp', '/images/head_gear/t2.webp', '/images/head_gear/t3.webp'] },
  { name: 'Igniter', tiers: ['/images/igniter/t1.webp', '/images/igniter/t2.webp', '/images/igniter/t3.webp'] },
  { name: 'Incense', tiers: ['/images/incense/t1.webp', '/images/incense/t2.webp', '/images/incense/t3.webp'] },
  { name: 'Motion Sensor', tiers: ['/images/motion_sensor/t1.webp', '/images/motion_sensor/t2.webp', '/images/motion_sensor/t3.webp'] },
  { name: 'Parabolic Microphone', tiers: ['/images/parabolic_microphone/t1.webp', '/images/parabolic_microphone/t2.webp', '/images/parabolic_microphone/t3.webp'] },
  { name: 'Photo Camera', tiers: ['/images/photo_camera/t1.webp', '/images/photo_camera/t2.webp', '/images/photo_camera/t3.webp'] },
  { name: 'Salt', tiers: ['/images/salt/t1.webp', '/images/salt/t2.webp', '/images/salt/t3.webp'] },
  { name: 'Sanity Medication', tiers: ['/images/sanity_medication/t1.webp', '/images/sanity_medication/t2.webp', '/images/sanity_medication/t3.webp'] },
  { name: 'Spirit Box', tiers: ['/images/spirit_box/t1.webp', '/images/spirit_box/t2.webp', '/images/spirit_box/t3.webp'] },
  { name: 'Thermometer', tiers: ['/images/thermometer/t1.webp', '/images/thermometer/t2.webp', '/images/thermometer/t3.webp'] },
  { name: 'Tripod', tiers: ['/images/tripod/t1.webp', '/images/tripod/t2.webp', '/images/tripod/t3.webp'] },
  { name: 'UV Light', tiers: ['/images/uv_light/t1.webp', '/images/uv_light/t2.webp', '/images/uv_light/t3.webp'] },
  { name: 'Video Camera', tiers: ['/images/video_camera/t1.webp', '/images/video_camera/t2.webp', '/images/video_camera/t3.webp'] },

];

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
      <h1>RandomPhobia | V0.1.1</h1>
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
