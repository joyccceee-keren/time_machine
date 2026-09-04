/**
 * CHRONOS-X QUANTUM TIME MACHINE
 * Comprehensive Master Temporal Destinations & Era Database
 */

const ERAS_DATA = [
  {
    id: "prehistoric",
    name: "Cretaceous Dawn",
    shortName: "65M BC Dinosaur",
    badge: "EPOCH: -65,000,000 BCE",
    tagline: "Primeval jungles, mega-fauna, and looming cosmic impact.",
    year: -65000000,
    displayYear: "65,000,000",
    month: 5, // June
    day: 12,
    era: "BC",
    climate: "Hyper-Tropical (1200 ppm CO2)",
    population: "0 (Millions of Dinosaurs)",
    tech: "Biological Pre-Stone Age",
    hazard: "CRITICAL (Level 5)",
    description: "Towering redwoods and prehistoric fern forests carpet the supercontinents. Giant Tyrannosaurs and herds of Triceratops rule the ecosystem while the impending Chicxulub asteroid enters high solar orbit.",
    colorTheme: "#ff4400",
    particleTheme: "ember",
    artifacts: [
      {
        id: "amber-mosquito",
        icon: "🦟",
        name: "Petrified Amber Mosquito",
        desc: "Ancient fossilized insect preserved in tree resin containing pristine Mesozoic genomic DNA fragments.",
        origin: "65,000,000 BCE - Cretaceous Basin",
        significance: "Crucial biological genetic benchmark before the catastrophic mass extinction."
      },
      {
        id: "meteorite-shard",
        icon: "☄️",
        name: "Iridium Impact Shard",
        desc: "Extraterrestrial chondrite fragment rich in rare iridium isotopes from the approaching Chicxulub bolide.",
        origin: "Mesozoic High Orbit",
        significance: "Forewarning cosmic artifact of the end of the reptilian reign."
      }
    ],
    scenarios: [
      {
        id: "save-trex",
        title: "Rescue a breeding pair of Velociraptors to 2026",
        divergence: 78.4,
        type: "danger",
        cascade: [
          "Microbial contamination immediately introduces Mesozoic airborne pathogens.",
          "Modern biological quarantine fails, causing global biodiversity rewiring.",
          "Dinosaurs are domesticated as apex cyber-guardians in the 22nd century."
        ]
      },
      {
        id: "deflect-asteroid",
        title: "Fire quantum laser to deflect the Chicxulub asteroid",
        divergence: 99.8,
        type: "danger",
        cascade: [
          "Dinosaur species never go extinct and develop reptilian cognitive dominance.",
          "Mammalian evolutionary explosion never occurs.",
          "Humanity is entirely erased from the prime timeline."
        ]
      }
    ]
  },
  {
    id: "egypt",
    name: "Ancient Old Kingdom",
    shortName: "2560 BC Egypt",
    badge: "EPOCH: 2560 BCE",
    tagline: "Golden sands, stellar alignments, and pyramid construction.",
    year: -2560,
    displayYear: "2560",
    month: 3, // April
    day: 20,
    era: "BC",
    climate: "Arid Desert / Lush Nile Floodplain",
    population: "~1.5 Million (Egypt)",
    tech: "Bronze Age Megalithic Engineering",
    hazard: "HIGH (Level 4)",
    description: "Pharaoh Khufu oversees the zenith of Old Kingdom Egypt. Thousands of master stone masons and astronomers align the Great Pyramid of Giza precisely with Orion's Belt under shimmering desert skies.",
    colorTheme: "#ffaa00",
    particleTheme: "gold-sand",
    artifacts: [
      {
        id: "golden-ankh",
        icon: "☥",
        name: "Solar Electrum Ankh",
        desc: "A ceremonial talisman forged from electrum alloy symbolizing eternal breath and solar balance.",
        origin: "2560 BCE - Giza Royal Treasury",
        significance: "Sacred instrument used in coronation rituals during the Fourth Dynasty."
      },
      {
        id: "star-chart-papyrus",
        icon: "📜",
        name: "Astronomer's Orion Papyrus",
        desc: "Hand-drawn stellar mapping calculating precession of Sirius and the Thuban pole star.",
        origin: "2560 BCE - Heliopolis Observatory",
        significance: "Reveals advanced celestial architecture alignments before modern optics."
      }
    ],
    scenarios: [
      {
        id: "leave-titanium-tools",
        title: "Gift modern titanium power tools to Giza stonemasons",
        divergence: 64.2,
        type: "warning",
        cascade: [
          "Pyramids are completed in 3 months instead of 20 years.",
          "Egyptians decipher metallurgy early and enter an Industrial Bronze Age in 2000 BC.",
          "The Library of Alexandria develops steam-driven printing presses 3,000 years early."
        ]
      },
      {
        id: "reveal-future-map",
        title: "Provide a global world map to Pharaoh Khufu",
        divergence: 82.1,
        type: "danger",
        cascade: [
          "Egyptian solar navy sets sail across the Atlantic 3,500 years before Columbus.",
          "Nile colonies are founded across the Americas, altering global linguistics.",
          "Hieroglyphs become the dominant script of modern computer operating systems."
        ]
      }
    ]
  },
  {
    id: "rome",
    name: "Imperial Roman Forum",
    shortName: "44 BC Rome",
    badge: "EPOCH: 44 BCE",
    tagline: "Marble basilicas, legionary banners, and the Ides of March.",
    year: -44,
    displayYear: "44",
    month: 2, // March
    day: 15,
    era: "BC",
    climate: "Mediterranean Sunny",
    population: "~1.0 Million (Rome)",
    tech: "Roman Aqueduct & Concrete Engineering",
    hazard: "HIGH (Level 4)",
    description: "The Roman Republic stands on the precipice of empire. Julius Caesar enters the Curia of Pompey as senators conspire in the shadows. Chariot wheels rattle along the stone-paved Via Appia.",
    colorTheme: "#e63946",
    particleTheme: "crimson-banner",
    artifacts: [
      {
        id: "laurel-crown",
        icon: "🌿",
        name: "Gilded Laurel Corona",
        desc: "Handcrafted golden laurel wreath signifying imperium and triumph awarded to Roman generals.",
        origin: "44 BCE - Roman Senate",
        significance: "Symbolic catalyst for the transition from Republic to Empire."
      },
      {
        id: "denarius-caesar",
        icon: "🪙",
        name: "Silver Caesar Denarius",
        desc: "Minted silver coin bearing the portrait of Dictator Perpetuo Julius Caesar.",
        origin: "44 BCE - Temple of Juno Moneta",
        significance: "First Roman coinage to feature a living Roman leader."
      }
    ],
    scenarios: [
      {
        id: "warn-caesar",
        title: "Deliver written warning note to Julius Caesar on March 15",
        divergence: 89.4,
        type: "danger",
        cascade: [
          "Caesar intercepts the assassination plot and purges the conspirators.",
          "The Roman Empire launches early expeditions to Northern Europe and Asia.",
          "Latin remains the undisputed universal global language into the 21st century."
        ]
      }
    ]
  },
  {
    id: "renaissance",
    name: "Renaissance Florence",
    shortName: "1503 AD Florence",
    badge: "EPOCH: 1503 CE",
    tagline: "Flourishing art, clandestine anatomy studies, and Da Vinci's workshop.",
    year: 1503,
    displayYear: "1503",
    month: 9, // October
    day: 18,
    era: "AD",
    climate: "Mediterranean Temperate",
    population: "~55,000 (Florence)",
    tech: "Early Printing Press & Mechanical Innovation",
    hazard: "MODERATE (Level 3)",
    description: "The Tuscan autumn envelops Florence. Leonardo da Vinci puts brushstrokes on the Mona Lisa while drafting sketches for human flying wings and mechanical knights in his secret studio along the Arno River.",
    colorTheme: "#b87333",
    particleTheme: "sepia-sparks",
    artifacts: [
      {
        id: "flying-machine-sketch",
        icon: "📐",
        name: "Da Vinci Aerial Screw Codex",
        desc: "Original parchment sketch in mirror handwriting outlining an early helical rotor flying machine.",
        origin: "1503 CE - Da Vinci Bottega, Florence",
        significance: "The primordial conceptual blueprint for modern rotorcraft."
      },
      {
        id: "medici-florin",
        icon: "🪙",
        name: "1503 Gold Florin",
        desc: "Pure gold trade coin stamped with the Florentine Lily, accepted across all European merchant guilds.",
        origin: "1503 CE - Republic of Florence Mint",
        significance: "Standard currency driving the banking and artistic revolution."
      }
    ],
    scenarios: [
      {
        id: "give-davinci-laptop",
        title: "Show Leonardo da Vinci a modern quantum tablet with CAD software",
        divergence: 91.5,
        type: "danger",
        cascade: [
          "Da Vinci invents internal combustion engines and electrical grids in 1515.",
          "Spaceflight is achieved during the Elizabethan era (1588).",
          "Mars is colonized before the year 1700."
        ]
      },
      {
        id: "prevent-florence-plague",
        title: "Introduce penicillin to Italian apothecary guilds",
        divergence: 45.0,
        type: "success",
        cascade: [
          "European population triples by 1600.",
          "Scientific enlightenment accelerates by two centuries.",
          "Antibiotic resistance is discovered and solved far earlier."
        ]
      }
    ]
  },
  {
    id: "victorian",
    name: "Victorian Steampunk London",
    shortName: "1889 AD London",
    badge: "EPOCH: 1889 CE",
    tagline: "Coal smog, gaslight lamps, Eiffel Tower opening, and Babbage engines.",
    year: 1889,
    displayYear: "1889",
    month: 4, // May
    day: 6,
    era: "AD",
    climate: "Temperate Industrial Smog (295 ppm CO2)",
    population: "~5.5 Million (London)",
    tech: "Steam Power & Telegraphy",
    hazard: "LOW-MODERATE (Level 2)",
    description: "The Paris Exposition Universelle inaugurates the Eiffel Tower while London's cobbled streets echo with steam locomotives, telegraph tickers, and the analytical engine experiments of early mathematicians.",
    colorTheme: "#cd7f32",
    particleTheme: "steam-smoke",
    artifacts: [
      {
        id: "babbage-punch-card",
        icon: "🎫",
        name: "Analytical Engine Punch Card",
        desc: "Jacquard-style punched wooden card programmed with Ada Lovelace's Bernoulli number algorithm.",
        origin: "1889 CE - London Mechanical Laboratory",
        significance: "First documented computer program in human civilization."
      },
      {
        id: "brass-pocket-chronometer",
        icon: "⏱️",
        name: "Master Railway Pocket Watch",
        desc: "Precision brass chronometer calibrated to Greenwich Mean Time to coordinate rail traffic.",
        origin: "1889 CE - Royal Observatory, Greenwich",
        significance: "Standardized global synchronized timekeeping."
      }
    ],
    scenarios: [
      {
        id: "share-solar-panel",
        title: "Hand Nikola Tesla blueprints for photovoltaic silicon solar cells",
        divergence: 58.7,
        type: "success",
        cascade: [
          "The 20th century bypasses fossil fuel dependency completely.",
          "Zero-carbon atmospheric stabilization achieved globally by 1950.",
          "Global warming is averted before it ever began."
        ]
      }
    ]
  },
  {
    id: "apollo",
    name: "Apollo 11 Tranquility Base",
    shortName: "1969 AD Moon Landing",
    badge: "EPOCH: 1969 CE",
    tagline: "One small step for man, one giant leap for mankind.",
    year: 1969,
    displayYear: "1969",
    month: 6, // July
    day: 20,
    era: "AD",
    climate: "Lunar Vacuum (0 atm)",
    population: "2 Astronauts on Lunar Surface",
    tech: "Saturn V Rocketry & AGC Core Rope Memory",
    hazard: "HIGH ENVIRONMENT (Level 4)",
    description: "The Eagle lunar module settles into the Sea of Tranquility. Neil Armstrong and Buzz Aldrin deploy the American flag and seismometers while the world watches on black-and-white television screens 384,000 km away.",
    colorTheme: "#3a86ff",
    particleTheme: "lunar-dust",
    artifacts: [
      {
        id: "lunar-rock",
        icon: "🪨",
        name: "Basalt Lunar Sample #10017",
        desc: "Volcanic lunar basalt rock containing ilmenite and pyroxene crystallized 3.7 billion years ago.",
        origin: "1969 CE - Mare Tranquillitatis",
        significance: "First direct physical planetary material returned from another celestial body."
      },
      {
        id: "apollo-flight-manual",
        icon: "📋",
        name: "LM Lunar Surface Checklist",
        desc: "Laminated checklist used by Apollo astronauts during the historic EVA operations.",
        origin: "1969 CE - Lunar Module Eagle",
        significance: "Blueprint of humanity's maiden extraterrestrial expedition."
      }
    ],
    scenarios: [
      {
        id: "leave-quantum-satellite",
        title: "Deploy a deep-space quantum communications relay on lunar south pole",
        divergence: 74.0,
        type: "warning",
        cascade: [
          "Lunar base is permanently inhabited by 1975.",
          "Manned Mars landings occur in 1982.",
          "Orbital manufacturing eliminates heavy terrestrial industrial pollution."
        ]
      }
    ]
  },
  {
    id: "synthwave",
    name: "The Neon 80s & Microcomputer Dawn",
    shortName: "1985 AD Synthwave",
    badge: "EPOCH: 1985 CE",
    tagline: "Birth of personal computing, synth-pop, and the DeLorean dream.",
    year: 1985,
    displayYear: "1985",
    month: 9, // October
    day: 26,
    era: "AD",
    climate: "Temperate (346 ppm CO2)",
    population: "~4.85 Billion",
    tech: "8-bit Microprocessors & Silicon Boom",
    hazard: "CONTROLLED (Level 1)",
    description: "Neon arcade signs illuminate twin pines malls. FM synthesizers dominate billboard charts while hobbyists assemble early home computers in Silicon Valley garages, dreaming of flux capacitors and digital frontiers.",
    colorTheme: "#00f0ff",
    particleTheme: "synthwave-grid",
    artifacts: [
      {
        id: "floppy-disk",
        icon: "💾",
        name: "5.25-inch Magnetic Floppy Disk",
        desc: "Magnetic storage containing 360 KB of raw 6502 assembly source code and video game binaries.",
        origin: "1985 CE - Silicon Valley Lab",
        significance: "The physical medium that ignited the home computing revolution."
      },
      {
        id: "cassette-tape",
        icon: "📼",
        name: "Synthwave Mixtape Cassette",
        desc: "Chromium dioxide magnetic cassette containing analog synth recordings of 1980s electronic tracks.",
        origin: "1985 CE - Tokyo Audio Studio",
        significance: "The sonic hallmark of analog frequency modulation music."
      }
    ],
    scenarios: [
      {
        id: "leave-sports-almanac",
        title: "Leave a 50-year Grays Sports Almanac in 1985 Hill Valley",
        divergence: 88.0,
        type: "danger",
        cascade: [
          "Corrupt gambling syndicates seize economic control of regional municipalities.",
          "Dystopian alternate timeline forms with massive casino monopolies.",
          "Requires emergency paradox correction jump to 1955."
        ]
      },
      {
        id: "introduce-internet-early",
        title: "Connect 1985 universities with broadband fiber optic protocols",
        divergence: 62.4,
        type: "warning",
        cascade: [
          "The World Wide Web goes global in 1987 instead of the mid-90s.",
          "Mobile smartphones appear in 1993 with monochrome touchscreens.",
          "Artificial intelligence singularity triggers before Y2K."
        ]
      }
    ]
  },
  {
    id: "cyberpunk",
    name: "Neo-Tokyo Cyberpunk Metropolis",
    shortName: "2099 AD Cyberpunk",
    badge: "EPOCH: 2099 CE",
    tagline: "Towering megastructures, cybernetic augmentation, and holographic rain.",
    year: 2099,
    displayYear: "2099",
    month: 10, // November
    day: 14,
    era: "AD",
    climate: "Synthetic Microclimate / Acid Rain Shield",
    population: "~11.2 Billion (Planetary)",
    tech: "Neural Wetware & Fusion Drive",
    hazard: "HIGH (Level 4)",
    description: "Multilevel skyscraper canyons pierce the neon smog. Flying spinners navigate designated sky-lanes while cybernetically enhanced citizens interface directly with quantum data streams.",
    colorTheme: "#bd00ff",
    particleTheme: "neon-rain",
    artifacts: [
      {
        id: "neural-shard",
        icon: "🔮",
        name: "Subdermal Quantum Neural Shard",
        desc: "Graphene-optic chip capable of direct neural interfacing with exabyte memory storage.",
        origin: "2099 CE - Arasaka Sky-Tower, Neo-Tokyo",
        significance: "Bridge technology merging organic human consciousness with machine networks."
      },
      {
        id: "fusion-battery",
        icon: "🔋",
        name: "Micro-Tokamak Fusion Battery",
        desc: "Pencil-sized magnetic confinement cell generating continuous clean gigawatt power.",
        origin: "2099 CE - Orbital Heavy Industries",
        significance: "Portable limitless clean power source powering cybernetic limbs and hover engines."
      }
    ],
    scenarios: [
      {
        id: "shut-down-ai-core",
        title: "Disable the Central Planetary AI Infrastructure",
        divergence: 85.0,
        type: "danger",
        cascade: [
          "Megacity energy grids and orbital elevators lose automated balance.",
          "Global telecommunications revert to decentralised radio mesh nodes.",
          "Humanity rediscovers agrarian self-sufficiency with advanced technology."
        ]
      }
    ]
  },
  {
    id: "singularity",
    name: "Cosmic Singularity & Dyson Swarm",
    shortName: "3050 AD Singularity",
    badge: "EPOCH: 3050 CE",
    tagline: "Post-biological consciousness, stellar engineering, and trans-dimensional portals.",
    year: 3050,
    displayYear: "3050",
    month: 0, // January
    day: 1,
    era: "AD",
    climate: "Geo-Engineered Stellar Equilibrium",
    population: "Trillions (Distributed Swarm)",
    tech: "Type II Civilization / Kardashev Scale",
    hazard: "EXTREME (Level 5)",
    description: "A megastructure swarm encases the Sun, harvesting complete solar luminosity. Minds transcend physical biological vessels to inhabit stellar hyper-computers that manipulate spacetime geometry itself.",
    colorTheme: "#00ffaa",
    particleTheme: "cosmic-nebula",
    artifacts: [
      {
        id: "zero-point-core",
        icon: "✨",
        name: "Zero-Point Metric Distorter",
        desc: "A localized spacetime folding device that extracts energy directly from the quantum vacuum.",
        origin: "3050 CE - Dyson Swarm Node 0xFA9",
        significance: "Infinite energy creation without entropy degradation."
      },
      {
        id: "multiverse-prism",
        icon: "💎",
        name: "Chronal Holographic Prism",
        desc: "Crystal matrix storing the recorded histories of 10,000 parallel alternate timelines.",
        origin: "3050 CE - Temporal Archive, Jupiter Orbit",
        significance: "Ultimate repository of all potential timelines and possibilities."
      }
    ],
    scenarios: [
      {
        id: "collapse-dyson-node",
        title: "Trigger controlled tachyon resonance in Dyson Node 1",
        divergence: 95.2,
        type: "danger",
        cascade: [
          "Spacetime rift expands across the Sol system.",
          "Timeline merges with 5 adjacent parallel universes simultaneously.",
          "Linear causality ceases; past, present, and future coexist."
        ]
      }
    ]
  }
];

// Helper to look up era by ID or Year
function getEraById(id) {
  return ERAS_DATA.find(e => e.id === id) || ERAS_DATA[6]; // default 1985 Synthwave
}

function findClosestEra(year, era) {
  const targetYear = (era === "BC" || era === "BCE") ? -Math.abs(year) : Math.abs(year);
  
  let closest = ERAS_DATA[0];
  let minDiff = Math.abs(targetYear - closest.year);
  
  for (const item of ERAS_DATA) {
    const diff = Math.abs(targetYear - item.year);
    if (diff < minDiff) {
      minDiff = diff;
      closest = item;
    }
  }
  return closest;
}
