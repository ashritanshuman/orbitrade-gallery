import { Product } from '@/store/useStore';
import moonDustImg from '@/assets/products/moon-dust.jpg';
import alienTechImg from '@/assets/products/alien-tech.jpg';
import cosmicCloakImg from '@/assets/products/cosmic-cloak.jpg';
import asteroidStoneImg from '@/assets/products/asteroid-stone.jpg';
import spaceShoesImg from '@/assets/products/space-shoes.jpg';
import stardustImg from '@/assets/products/stardust.jpg';
import energyCellImg from '@/assets/products/energy-cell.jpg';
import spaceHelmetImg from '@/assets/products/space-helmet.jpg';
import cosmicJewelryImg from '@/assets/products/cosmic-jewelry.jpg';
import dataPadImg from '@/assets/products/data-pad.jpg';
import rocketGadgetImg from '@/assets/products/rocket-gadget.jpg';
import plasmaWeaponImg from '@/assets/products/plasma-weapon.jpg';
import spacePodImg from '@/assets/products/space-pod.jpg';
import robotButlerImg from '@/assets/products/robot-butler.jpg';
import alienArtifactImg from '@/assets/products/alien-artifact.jpg';
import oxygenGeneratorImg from '@/assets/products/oxygen-generator.jpg';
import nebulaEssenceImg from '@/assets/products/nebula-essence.jpg';
import gravityToolkitImg from '@/assets/products/gravity-toolkit.jpg';

export const products: Product[] = [
  // WEARABLES COLLECTION - Tech & Fashion
  { sku: 'AT-042', name: 'Alien Tech Wristband', price: 249.0, originalPrice: 299.0, discount: 17, type: 'wearable', category: 'Tech Accessories', collection: 'Alien Technology', description: 'Advanced extraterrestrial technology in a sleek wristband. Features unknown capabilities waiting to be discovered.', color: '#00FF88', image: alienTechImg },
  { sku: 'CC-07', name: 'Cosmic Cloak', price: 129.0, type: 'clothing', category: 'Apparel', collection: 'Cosmic Fashion', description: 'Woven from stardust and nebula fragments. Provides protection from solar winds and makes you look mysteriously cool.', color: '#9370DB', image: cosmicCloakImg },
  { sku: 'HS-88', name: 'Holographic Space Shoes', price: 199.0, originalPrice: 249.0, discount: 20, type: 'footwear', category: 'Footwear', collection: 'Cosmic Fashion', description: 'Walk on air with anti-gravity soles and holographic projections. Perfect for moonwalking on any surface.', color: '#00BFFF', image: spaceShoesImg },
  { sku: 'SG-14', name: 'Solar Gloves', price: 89.0, type: 'wearable', category: 'Apparel', collection: 'Cosmic Fashion', description: 'Heat-resistant gloves made from solar panel fabric. Harvest energy while you work.', color: '#FFD700', image: cosmicCloakImg },
  { sku: 'NV-22', name: 'Nebula Visor', price: 179.0, originalPrice: 220.0, discount: 19, type: 'wearable', category: 'Tech Accessories', collection: 'Vision Tech', description: 'See across multiple spectrums with this advanced heads-up display visor.', color: '#FF1493', image: spaceHelmetImg },
  { sku: 'GB-31', name: 'Gravity Boots', price: 299.0, type: 'footwear', category: 'Footwear', collection: 'Cosmic Fashion', description: 'Walk on walls and ceilings with magnetic grip technology.', color: '#4169E1', image: spaceShoesImg },
  { sku: 'SC-45', name: 'Stellar Cape', price: 159.0, originalPrice: 199.0, discount: 20, type: 'clothing', category: 'Apparel', collection: 'Cosmic Fashion', description: 'A majestic cape that shimmers with the light of a thousand stars.', color: '#DDA0DD', image: cosmicCloakImg },
  { sku: 'QR-56', name: 'Quantum Ring', price: 399.0, type: 'wearable', category: 'Jewelry', collection: 'Quantum Series', description: 'A ring that exists in multiple dimensions simultaneously.', color: '#00CED1', image: cosmicJewelryImg },
  { sku: 'PB-67', name: 'Plasma Belt', price: 119.0, originalPrice: 149.0, discount: 20, type: 'wearable', category: 'Apparel', collection: 'Cosmic Fashion', description: 'Store items in pocket dimensions with this utility belt.', color: '#FF6347', image: cosmicCloakImg },
  { sku: 'TH-78', name: 'Telepathic Headband', price: 449.0, type: 'wearable', category: 'Tech Accessories', collection: 'Mind Tech', description: 'Read thoughts within a 10-meter radius. Use responsibly.', color: '#9932CC', image: alienTechImg },
  
  // GADGETS COLLECTION - Advanced Technology
  { sku: 'GT-23', name: 'Gravity Toolkit', price: 349.0, originalPrice: 449.0, discount: 22, type: 'gadget', category: 'Tools', collection: 'Engineering Essentials', description: 'Essential tools for manipulating gravitational fields. Includes micro black hole stabilizer and quantum wrench.', color: '#FFD700', image: gravityToolkitImg },
  { sku: 'QC-99', name: 'Quantum Communicator', price: 499.0, type: 'gadget', category: 'Communication', collection: 'Quantum Series', description: 'Instantaneous communication across any distance using quantum entanglement. No signal lag, ever.', color: '#4169E1', image: dataPadImg },
  { sku: 'HM-12', name: 'Hologram Maker', price: 279.0, originalPrice: 350.0, discount: 20, type: 'gadget', category: 'Entertainment', collection: 'Holo Tech', description: 'Project 3D holograms anywhere. Perfect for presentations or pranks.', color: '#00FFFF', image: dataPadImg },
  { sku: 'TW-34', name: 'Time Warp Watch', price: 899.0, type: 'gadget', category: 'Time Devices', collection: 'Temporal Tech', description: 'Bend time in a 5-meter radius. Warning: paradoxes may occur.', color: '#8B4513', image: alienTechImg },
  { sku: 'PM-45', name: 'Portable Matter Replicator', price: 1299.0, originalPrice: 1599.0, discount: 19, type: 'gadget', category: 'Manufacturing', collection: 'Replication Tech', description: 'Clone any small object instantly. Not recommended for living beings.', color: '#4682B4', image: gravityToolkitImg },
  { sku: 'ED-56', name: 'Energy Detector', price: 199.0, type: 'gadget', category: 'Sensors', collection: 'Detection Devices', description: 'Detect energy signatures from miles away.', color: '#32CD32', image: dataPadImg },
  { sku: 'FS-67', name: 'Force Shield Generator', price: 549.0, originalPrice: 699.0, discount: 21, type: 'gadget', category: 'Defense', collection: 'Protection Gear', description: 'Create an impenetrable energy shield around yourself.', color: '#1E90FF', image: energyCellImg },
  { sku: 'MR-78', name: 'Mind Reader 3000', price: 699.0, type: 'gadget', category: 'Mind Tech', collection: 'Mind Tech', description: 'Scan surface thoughts with 85% accuracy.', color: '#FF69B4', image: dataPadImg },
  { sku: 'TR-89', name: 'Teleportation Remote', price: 1499.0, originalPrice: 1999.0, discount: 25, type: 'gadget', category: 'Transportation', collection: 'Warp Tech', description: 'Teleport up to 100 kilometers instantly. Requires quantum battery.', color: '#FF4500', image: rocketGadgetImg },
  { sku: 'VR-90', name: 'Virtual Reality Orb', price: 399.0, type: 'gadget', category: 'Entertainment', collection: 'Holo Tech', description: 'Immerse yourself in any reality you can imagine.', color: '#BA55D3', image: energyCellImg },

  // MINERALS & COLLECTIBLES - Rare Materials
  { sku: 'AS-11', name: 'Asteroid Stone', price: 49.0, type: 'mineral', category: 'Raw Materials', collection: 'Space Minerals', description: 'A rare crystalline formation from the asteroid belt. Contains trace elements from the birth of our solar system.', color: '#8B4513', image: asteroidStoneImg },
  { sku: 'MD-001', name: 'Moon Dust Capsule', price: 9.99, originalPrice: 14.99, discount: 33, type: 'consumable', category: 'Collectibles', collection: 'Lunar Collection', description: 'Authentic moon dust collected from the Sea of Tranquility. Perfect for cosmic rituals and zero-gravity experiments.', color: '#C0C0C0', image: moonDustImg },
  { sku: 'MC-13', name: 'Martian Crystal', price: 79.0, type: 'mineral', category: 'Raw Materials', collection: 'Space Minerals', description: 'Rare red crystal from the Olympus Mons region of Mars.', color: '#CD5C5C', image: asteroidStoneImg },
  { sku: 'VG-24', name: 'Venus Gemstone', price: 149.0, originalPrice: 189.0, discount: 21, type: 'mineral', category: 'Gems', collection: 'Space Minerals', description: 'A heat-resistant gem formed under Venus\'s extreme pressure.', color: '#FFD700', image: cosmicJewelryImg },
  { sku: 'JO-35', name: 'Jupiter Ore', price: 99.0, type: 'mineral', category: 'Raw Materials', collection: 'Gas Giant Materials', description: 'Metallic hydrogen ore from Jupiter\'s atmosphere.', color: '#F4A460', image: asteroidStoneImg },
  { sku: 'SO-46', name: 'Saturn\'s Ice', price: 39.0, originalPrice: 59.0, discount: 34, type: 'mineral', category: 'Raw Materials', collection: 'Gas Giant Materials', description: 'Crystallized ring ice, billions of years old.', color: '#B0E0E6', image: moonDustImg },
  { sku: 'MF-57', name: 'Meteor Fragment', price: 129.0, type: 'mineral', category: 'Collectibles', collection: 'Space Minerals', description: 'Authentic piece of a meteor that survived atmospheric entry.', color: '#696969', image: asteroidStoneImg },
  { sku: 'CO-68', name: 'Comet Core Sample', price: 199.0, originalPrice: 249.0, discount: 20, type: 'mineral', category: 'Raw Materials', collection: 'Space Minerals', description: 'Frozen sample from a comet\'s nucleus.', color: '#ADD8E6', image: moonDustImg },
  { sku: 'NR-79', name: 'Neutron Star Dust', price: 899.0, type: 'mineral', category: 'Exotic Materials', collection: 'Stellar Remnants', description: 'Incredibly dense material from a collapsed star.', color: '#191970', image: stardustImg },
  { sku: 'BH-80', name: 'Black Hole Particle', price: 1999.0, originalPrice: 2499.0, discount: 20, type: 'mineral', category: 'Exotic Materials', collection: 'Stellar Remnants', description: 'Hawking radiation condensed into matter. Extremely rare.', color: '#000000', image: energyCellImg },

  // CONSUMABLES - Cosmic Substances
  { sku: 'NE-55', name: 'Nebula Essence', price: 79.0, type: 'consumable', category: 'Elixirs', collection: 'Cosmic Elixirs', description: 'Captured essence of the Orion Nebula. Rumored to grant visions of distant galaxies when consumed.', color: '#FF1493', image: nebulaEssenceImg },
  { sku: 'ST-15', name: 'Stardust Powder', price: 24.99, originalPrice: 34.99, discount: 29, type: 'consumable', category: 'Elixirs', collection: 'Cosmic Elixirs', description: 'Sprinkle this to make anything glow with stellar light.', color: '#FFD700', image: stardustImg },
  { sku: 'SN-26', name: 'Supernova Serum', price: 299.0, type: 'consumable', category: 'Elixirs', collection: 'Cosmic Elixirs', description: 'Bottled energy from a stellar explosion. Handle with care.', color: '#FF6347', image: nebulaEssenceImg },
  { sku: 'QE-37', name: 'Quantum Elixir', price: 199.0, originalPrice: 259.0, discount: 23, type: 'consumable', category: 'Elixirs', collection: 'Quantum Series', description: 'Exist in two places at once for 10 minutes.', color: '#9370DB', image: nebulaEssenceImg },
  { sku: 'AG-48', name: 'Anti-Gravity Serum', price: 149.0, type: 'consumable', category: 'Enhancements', collection: 'Enhancement Serums', description: 'Float for up to 2 hours. Warning: may cause dizziness.', color: '#87CEEB', image: moonDustImg },
  { sku: 'TS-59', name: 'Time-Slow Tonic', price: 399.0, originalPrice: 499.0, discount: 20, type: 'consumable', category: 'Elixirs', collection: 'Temporal Tech', description: 'Slow down your perception of time by 50%.', color: '#8B4513', image: nebulaEssenceImg },
  { sku: 'IB-60', name: 'Invisibility Brew', price: 449.0, type: 'consumable', category: 'Enhancements', collection: 'Enhancement Serums', description: 'Become invisible for up to 30 minutes.', color: '#F0F8FF', image: moonDustImg },
  { sku: 'SH-70', name: 'Strength Enhancer', price: 249.0, originalPrice: 319.0, discount: 22, type: 'consumable', category: 'Enhancements', collection: 'Enhancement Serums', description: 'Increase your strength by 300% for 1 hour.', color: '#DC143C', image: nebulaEssenceImg },
  { sku: 'TB-81', name: 'Telepathy Booster', price: 349.0, type: 'consumable', category: 'Enhancements', collection: 'Mind Tech', description: 'Enhance your mental communication abilities.', color: '#9932CC', image: nebulaEssenceImg },
  { sku: 'RS-82', name: 'Regeneration Serum', price: 599.0, originalPrice: 749.0, discount: 20, type: 'consumable', category: 'Enhancements', collection: 'Enhancement Serums', description: 'Heal any wound in minutes.', color: '#00FF00', image: nebulaEssenceImg },

  // SPACE VEHICLES - Transportation
  { sku: 'SP-16', name: 'Space Pod', price: 4999.0, type: 'vehicle', category: 'Vehicles', collection: 'Personal Transport', description: 'Personal single-seat spacecraft for short trips.', color: '#C0C0C0', image: spacePodImg },
  { sku: 'SC-27', name: 'Solar Cruiser', price: 12999.0, originalPrice: 15999.0, discount: 19, type: 'vehicle', category: 'Vehicles', collection: 'Personal Transport', description: 'Mid-range spacecraft with solar sails.', color: '#FFD700', image: spacePodImg },
  { sku: 'WD-38', name: 'Warp Drive Fighter', price: 29999.0, type: 'vehicle', category: 'Vehicles', collection: 'Military Grade', description: 'Fast attack ship with experimental warp capabilities.', color: '#4169E1', image: spacePodImg },
  { sku: 'CS-49', name: 'Cargo Shuttle', price: 19999.0, originalPrice: 24999.0, discount: 20, type: 'vehicle', category: 'Vehicles', collection: 'Commercial Fleet', description: 'Heavy-duty transport for goods and materials.', color: '#708090', image: spacePodImg },
  { sku: 'LX-61', name: 'Luxury Star Yacht', price: 99999.0, type: 'vehicle', category: 'Vehicles', collection: 'Luxury Collection', description: 'Travel the galaxy in style and comfort.', color: '#9370DB', image: spacePodImg },
  { sku: 'EX-71', name: 'Explorer Vessel', price: 49999.0, originalPrice: 59999.0, discount: 17, type: 'vehicle', category: 'Vehicles', collection: 'Exploration Series', description: 'Long-range ship designed for deep space missions.', color: '#2E8B57', image: spacePodImg },
  { sku: 'RC-83', name: 'Racing Comet', price: 39999.0, type: 'vehicle', category: 'Vehicles', collection: 'Sport Series', description: 'Built for speed in the annual Galactic Grand Prix.', color: '#FF4500', image: spacePodImg },
  { sku: 'MB-84', name: 'Mining Barge', price: 34999.0, originalPrice: 44999.0, discount: 22, type: 'vehicle', category: 'Vehicles', collection: 'Industrial Series', description: 'Extract resources from asteroids with ease.', color: '#8B4513', image: spacePodImg },

  // ALIEN ARTIFACTS - Mysterious Items
  { sku: 'AA-17', name: 'Alien Artifact Alpha', price: 599.0, type: 'artifact', category: 'Artifacts', collection: 'Alien Technology', description: 'Purpose unknown. Emits strange energy signatures.', color: '#00FF88', image: alienArtifactImg },
  { sku: 'AB-28', name: 'Alien Beacon', price: 399.0, originalPrice: 499.0, discount: 20, type: 'artifact', category: 'Artifacts', collection: 'Alien Technology', description: 'Appears to send signals to unknown coordinates.', color: '#FF1493', image: alienArtifactImg },
  { sku: 'AC-39', name: 'Alien Cipher Device', price: 799.0, type: 'artifact', category: 'Artifacts', collection: 'Alien Technology', description: 'Decodes ancient alien languages.', color: '#4169E1', image: dataPadImg },
  { sku: 'AD-50', name: 'Dimensional Key', price: 1299.0, originalPrice: 1599.0, discount: 19, type: 'artifact', category: 'Artifacts', collection: 'Dimensional Tech', description: 'Opens portals to parallel dimensions.', color: '#8A2BE2', image: alienArtifactImg },
  { sku: 'AE-62', name: 'Energy Orb', price: 899.0, type: 'artifact', category: 'Artifacts', collection: 'Alien Technology', description: 'Contains unlimited clean energy. Origin unknown.', color: '#00CED1', image: energyCellImg },
  { sku: 'AF-72', name: 'Memory Crystal', price: 699.0, originalPrice: 899.0, discount: 22, type: 'artifact', category: 'Artifacts', collection: 'Data Storage', description: 'Stores the entire history of a lost civilization.', color: '#9370DB', image: asteroidStoneImg },
  { sku: 'AG-85', name: 'Genetic Enhancer', price: 1499.0, type: 'artifact', category: 'Artifacts', collection: 'Bio Tech', description: 'Alien technology that can modify DNA safely.', color: '#32CD32', image: alienArtifactImg },

  // ROBOTS & AI - Synthetic Companions
  { sku: 'RB-18', name: 'Robot Butler', price: 2999.0, type: 'robot', category: 'Robots', collection: 'Service Bots', description: 'Your personal assistant for all household tasks.', color: '#C0C0C0', image: robotButlerImg },
  { sku: 'RC-29', name: 'Combat Drone', price: 4999.0, originalPrice: 5999.0, discount: 17, type: 'robot', category: 'Robots', collection: 'Military Grade', description: 'Autonomous defense system with AI targeting.', color: '#8B0000', image: robotButlerImg },
  { sku: 'RD-40', name: 'Repair Droid', price: 1999.0, type: 'robot', category: 'Robots', collection: 'Service Bots', description: 'Fix anything mechanical with precision tools.', color: '#FFD700', image: robotButlerImg },
  { sku: 'RE-51', name: 'Explorer Bot', price: 3499.0, originalPrice: 4299.0, discount: 19, type: 'robot', category: 'Robots', collection: 'Exploration Series', description: 'Scout dangerous terrain before you venture out.', color: '#2E8B57', image: robotButlerImg },
  { sku: 'RF-63', name: 'Medical Android', price: 7999.0, type: 'robot', category: 'Robots', collection: 'Medical Tech', description: 'Perform complex surgeries with perfect accuracy.', color: '#FFFFFF', image: robotButlerImg },
  { sku: 'RG-73', name: 'Teaching AI', price: 2499.0, originalPrice: 3199.0, discount: 22, type: 'robot', category: 'Robots', collection: 'Education Tech', description: 'Learn any subject from this patient instructor.', color: '#4169E1', image: robotButlerImg },
  { sku: 'RH-86', name: 'Entertainment Hologram', price: 1499.0, type: 'robot', category: 'Robots', collection: 'Entertainment', description: 'Holographic companion with thousands of personalities.', color: '#FF69B4', image: robotButlerImg },

  // ENERGY & POWER - Power Sources
  { sku: 'EP-19', name: 'Quantum Battery Pack', price: 399.0, type: 'energy', category: 'Power', collection: 'Energy Solutions', description: 'Never runs out. Powers any device indefinitely.', color: '#00CED1', image: energyCellImg },
  { sku: 'EQ-30', name: 'Solar Core Generator', price: 2999.0, originalPrice: 3799.0, discount: 21, type: 'energy', category: 'Power', collection: 'Energy Solutions', description: 'Miniature sun in a box. Handle with extreme care.', color: '#FFD700', image: energyCellImg },
  { sku: 'ER-41', name: 'Fusion Cell', price: 599.0, type: 'energy', category: 'Power', collection: 'Energy Solutions', description: 'Compact fusion reactor for portable power.', color: '#FF6347', image: energyCellImg },
  { sku: 'ES-52', name: 'Zero-Point Energy Module', price: 4999.0, originalPrice: 6499.0, discount: 23, type: 'energy', category: 'Power', collection: 'Advanced Energy', description: 'Tap into the vacuum energy of space itself.', color: '#4169E1', image: energyCellImg },
  { sku: 'ET-64', name: 'Antimatter Container', price: 9999.0, type: 'energy', category: 'Power', collection: 'Advanced Energy', description: 'Safely store antimatter for maximum energy output.', color: '#8B008B', image: energyCellImg },
  { sku: 'EU-74', name: 'Plasma Generator', price: 1999.0, originalPrice: 2499.0, discount: 20, type: 'energy', category: 'Power', collection: 'Energy Solutions', description: 'Convert matter directly into clean plasma energy.', color: '#FF1493', image: plasmaWeaponImg },
  { sku: 'EV-87', name: 'Cosmic Battery', price: 799.0, type: 'energy', category: 'Power', collection: 'Energy Solutions', description: 'Charged by cosmic radiation. Never needs replacement.', color: '#9370DB', image: energyCellImg },

  // SURVIVAL GEAR - Essential Equipment
  { sku: 'SG-20', name: 'Oxygen Generator', price: 499.0, type: 'survival', category: 'Life Support', collection: 'Survival Essentials', description: 'Create breathable air anywhere in the universe.', color: '#87CEEB', image: oxygenGeneratorImg },
  { sku: 'SH-31', name: 'Emergency Beacon', price: 149.0, originalPrice: 199.0, discount: 25, type: 'survival', category: 'Safety', collection: 'Survival Essentials', description: 'Send distress signals across light-years.', color: '#FF4500', image: rocketGadgetImg },
  { sku: 'SI-42', name: 'Radiation Shield', price: 899.0, type: 'survival', category: 'Protection', collection: 'Protection Gear', description: 'Personal force field against harmful radiation.', color: '#32CD32', image: energyCellImg },
  { sku: 'SJ-53', name: 'Universal Translator', price: 349.0, originalPrice: 449.0, discount: 22, type: 'survival', category: 'Communication', collection: 'Communication Tools', description: 'Communicate with any intelligent species.', color: '#4169E1', image: dataPadImg },
  { sku: 'SK-65', name: 'Survival Rations (30 days)', price: 199.0, type: 'survival', category: 'Food & Water', collection: 'Survival Essentials', description: 'Nutrient-packed meals that last for decades.', color: '#8B4513', image: moonDustImg },
  { sku: 'SL-75', name: 'Emergency Shelter Pod', price: 799.0, originalPrice: 999.0, discount: 20, type: 'survival', category: 'Shelter', collection: 'Survival Essentials', description: 'Deploys a protective dome in seconds.', color: '#708090', image: spacePodImg },
  { sku: 'SM-88', name: 'Multi-Tool 5000', price: 249.0, type: 'survival', category: 'Tools', collection: 'Survival Essentials', description: 'Swiss army knife of the cosmos. 500+ functions.', color: '#C0C0C0', image: gravityToolkitImg },
];

export const categories = [
  'All',
  'Tech Accessories',
  'Apparel',
  'Footwear',
  'Jewelry',
  'Tools',
  'Communication',
  'Entertainment',
  'Time Devices',
  'Manufacturing',
  'Sensors',
  'Defense',
  'Mind Tech',
  'Transportation',
  'Raw Materials',
  'Collectibles',
  'Gems',
  'Gas Giant Materials',
  'Exotic Materials',
  'Elixirs',
  'Enhancements',
  'Vehicles',
  'Artifacts',
  'Robots',
  'Power',
  'Life Support',
  'Safety',
  'Protection',
  'Food & Water',
  'Shelter',
];

export const collections = [
  'All',
  'Alien Technology',
  'Cosmic Fashion',
  'Quantum Series',
  'Mind Tech',
  'Engineering Essentials',
  'Holo Tech',
  'Temporal Tech',
  'Replication Tech',
  'Detection Devices',
  'Protection Gear',
  'Warp Tech',
  'Space Minerals',
  'Lunar Collection',
  'Gas Giant Materials',
  'Stellar Remnants',
  'Cosmic Elixirs',
  'Enhancement Serums',
  'Personal Transport',
  'Military Grade',
  'Commercial Fleet',
  'Luxury Collection',
  'Exploration Series',
  'Sport Series',
  'Industrial Series',
  'Dimensional Tech',
  'Data Storage',
  'Bio Tech',
  'Service Bots',
  'Medical Tech',
  'Education Tech',
  'Energy Solutions',
  'Advanced Energy',
  'Survival Essentials',
  'Communication Tools',
];
