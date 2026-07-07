export type KitItem = {
  name: string;
  description: string;
  image: string;
};

export const kitEssentials =
  "All swimmers should carry goggles, spare goggles and swim hat.";

export const kitNotes = [
  "Where possible, please mark personal kit with your name (in Sharpie).",
  "Periodically, please soak kit items in sterilising fluid (e.g. Milton). This is particularly important for snorkels.",
];

const img = (file: string) => `/images/kit/${file}.jpg`;

const smallKickBoard: KitItem = {
  name: "Small Kick Board",
  description:
    "A compact, buoyant board designed to help younger or less experienced swimmers develop leg strength and improve kicking technique. Ideal for shorter arms and smaller frames.",
  image: img("smallKickBoard"),
};

const pullBuoy: KitItem = {
  name: "Pull Buoy",
  description:
    "A foam buoy placed between the legs to lift the hips and legs in the water. Allows swimmers to focus on upper-body strength, stroke technique, and body alignment.",
  image: img("pullBuoy"),
};

const shortFins: KitItem = {
  name: "Short Fins",
  description:
    "Short-blade training fins that increase resistance while maintaining a fast kick tempo. Used to improve leg power, ankle flexibility, and overall kick efficiency. (not 'sprint' fins)",
  image: img("shortFins"),
};

const largeKickBoard: KitItem = {
  name: "Large Kick Board",
  description:
    "A full-size board used for kick sets to build lower-body strength, improve body position, and isolate the legs during training. Suitable for older or more advanced swimmers.",
  image: img("kickBoard"),
};

const snorkel: KitItem = {
  name: "Snorkel (front)",
  description:
    "A centre-mounted training snorkel that enables swimmers to focus on stroke technique, body alignment, and rotation without needing to turn their head to breathe.",
  image: img("swimmersSnorkle"),
};

const meshBag: KitItem = {
  name: "Mesh Bag",
  description:
    "A kit bag used to carry all training equipment poolside. Allows items to dry quickly and makes it easy to transport fins, kick boards, and other gear.",
  image: img("meshBag"),
};

const handPaddles: KitItem = {
  name: "Hand Paddles",
  description:
    "Flat plastic paddles worn on the hands to increase resistance in the water. Used to build arm strength, improve catch mechanics, and reinforce correct pulling technique. (strapless recommended)",
  image: img("straplessHandPaddles"),
};

const trainingKit = [pullBuoy, shortFins, largeKickBoard, snorkel, meshBag];
const competitiveKit = [...trainingKit.slice(0, 4), handPaddles, meshBag];

/** Required kit per squad, matching www2.busheyasc.org squad pages. */
export const squadKit: Record<string, KitItem[]> = {
  dolphins: [smallKickBoard],
  sharks: [smallKickBoard],
  development: trainingKit,
  improvement: trainingKit,
  challenge: competitiveKit,
  competitive: competitiveKit,
  performance: competitiveKit,
};
