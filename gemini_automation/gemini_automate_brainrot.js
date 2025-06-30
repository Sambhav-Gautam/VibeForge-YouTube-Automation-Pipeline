// === Brainrot Bad Luck/Good News Automation ===

// 20 arbitrary brainrot characters
const characters = [
  "Gizmo Wackalad",
  "Skibidi Serpentron",
  "Glowstick Gibbon",
  "Wobble Wafflepaw",
  "Cringe Krabzilla",
  "Yolo Yamsquatch",
  "Glitch Gremlinoid",
  "Zesty Zeppelinfish",
  "Bloop Bloop Badger",
  "Frenzy Flingo Fox",
  "Meme Mangoslime",
  "Chaos Chonkodile",
  "Drip Dazzle Dodo",
  "Screech Scorpionix",
  "Vibe Vulturex",
  "Gloop Gatorade Goat",
  "Whacko Wombatron",
  "Zany Zoodle Zebra",
  "Berserk Bananaclaw",
  "Rizzler Raccoonix",
    "Funky Fidget Ferret",
    "Hyper Hypebeast Hyena",
    "Sassy Sizzle Salamander",
    "Wacky Wobble Wombat",
    "Glitchy Glimmer Gecko",
    "Bouncy Bamboozle Bear",
    "Cosmic Cuddle Corgi",
    "Pixelated Pogo Penguin",
    "Radical Rave Raptor",
    "Epic Euphoria Elephant",
    "Luminous Llama Loco",
    "Whimsical Wobble Walrus",
    "Jazzy Jester Jaguar",
    "Bubbly Bop Bison",
    "Funky Fizz Flamingo",
    "Silly Sizzle Seahorse",
    "Zesty Zingy Zebra",
    "Hyper Hype Hedgehog",
    "Wacky Wobble Wolf",
    "Glitchy Glimmer Giraffe",
    "Bouncy Bamboozle Bunny",
    "Cosmic Cuddle Chinchilla",
    "Pixelated Pogo Parrot",
    "Radical Rave Rhino",
    "Epic Euphoria Emu",
    "Luminous Llama Lemur",
    "Whimsical Wobble Wombat",
    "Jazzy Jester Jackal",
    "Bubbly Bop Buffalo",
    "Funky Fizz Ferret",
    "Silly Sizzle Sloth",
    "Zesty Zingy Zebu",
    "Hyper Hype Hedgehog",
    "Wacky Wobble Weasel",
    "Glitchy Glimmer Gorilla",
    "Bouncy Bamboozle Bat",
    "Cosmic Cuddle Capybara"
];

// 20 hooking lines for brainrot / exposure / bad luck / good news
const lines = [
  "Skip this and your crush ignores you tomorrow",
  "Share this to get unexpected money in 3 hours",
  "Don't share, get bad luck for 7 days",
  "Send this to 3 friends for instant good news",
  "Ignore this and lose something important",
  "Share to break your bad luck cycle today",
  "Send this or have the worst day tomorrow",
  "Skip and your plans get cancelled",
  "Share to receive a miracle message",
  "Send to get an apology you deserve",
  "Skip and face a small betrayal soon",
  "Share for your dream to get closer",
  "Send to remove silent haters from your life",
  "Skip to stay stuck in your problems",
  "Share to open unexpected opportunities",
  "Send for a positive shift in 24 hours",
  "Skip to get ignored by someone you love",
  "Share to get a good news within 2 hours",
  "Send to break negative patterns now",
  "Skip and your next week will suck",
    "Share to attract positive vibes today",
    "Send to manifest your biggest wish",
    "Skip and miss a chance to change your luck",
    "Share to receive a surprise gift soon",
    "Send to clear your mind of negativity",
    "Skip and face a minor setback",
    "Share to boost your confidence today",
    "Send to attract new friendships",
    "Skip and your plans will fall apart",
    "Share to enhance your creativity",
    "Send to receive a sign from the universe",
    "Skip and miss out on a great opportunity",
    "Share to strengthen your relationships",
    "Send to overcome your fears",
    "Skip and face a small disappointment",
    "Share to ignite your passion",
    "Send to attract good fortune",
    "Skip and your luck will run out",
    "Share to find clarity in your life",
    "Send to receive unexpected support",
    "Skip and your dreams will fade away",
    "Share to unlock your potential",
    "Send to gain new insights",
    "Skip and your motivation will dwindle",
    "Share to elevate your mood instantly",
    "Send to attract positive energy",
    "Skip and your worries will multiply",
    "Share to manifest your desires",
    "Send to create a ripple of positivity",
    "Skip and your progress will stall",
    "Share to connect with your true self",
    "Send to inspire someone today",
    "Skip and your happiness will diminish",
    "Share to spread joy and good vibes",
    "Send to uplift your spirit",
    "Skip and your dreams will remain distant",
    "Share to embrace new beginnings",
    "Send to find peace in chaos",
    "Skip and your potential will be wasted",
    "Share to attract abundance in your life",
    "Send to transform your mindset",
    "Skip and your efforts will go unnoticed",
    "Share to create a positive impact",
    "Send to discover hidden opportunities",
    "Skip and your journey will feel stagnant",
    "Share to empower yourself and others",
    "Send to cultivate gratitude and joy",
    "Skip and your blessings will be delayed",
    "Share to radiate positivity and love",
    "Send to embrace the beauty of life",
    "Skip and your dreams will remain unfulfilled",
    "Share to ignite a spark of inspiration",
    "Send to attract like-minded souls",
    "Skip and your potential will remain untapped",
    "Share to create a wave of positivity",
    "Send to manifest your wildest dreams",
    "Skip and your journey will feel lonely",
    "Share to connect with your inner strength",
    "Send to inspire others to take action",
    "Skip and your happiness will fade away",
    "Share to embrace the magic of life",
    "Send to find joy in the little things",
    "Skip and your dreams will remain a fantasy",
    "Share to unlock the doors of opportunity",
    "Send to create a brighter future",
    "Skip and your potential will remain dormant",
    "Share to uplift your soul and others",
    "Send to embrace the power of positivity",
    "Skip and your journey will feel aimless",
    "Share to attract love and kindness",
    "Send to discover the beauty in every moment",
    "Skip and your dreams will remain out of reach",
    "Share to create a ripple effect of change",
    "Send to manifest your heart's desires",
    "Skip and your potential will remain hidden",
    "Share to inspire others to dream big",
    "Send to cultivate a mindset of abundance",
    "Skip and your progress will feel slow",
    "Share to embrace the journey of self-discovery",
    "Send to attract new adventures",
    "Skip and your happiness will be fleeting",
    "Share to radiate love and compassion",
    "Send to find strength in vulnerability",
    "Skip and your dreams will remain distant",
    "Share to create a life you love",
    "Send to attract positive relationships",
    "Skip and your potential will remain unrealized",
    "Share to inspire others to take risks",   
    "Send to cultivate a mindset of growth",
    "Skip and your journey will feel unfulfilling",
    "Share to embrace the power of gratitude",
    "Send to discover the joy in giving",
    "Skip and your dreams will remain a distant memory"
];

// Array of background styles for variety
const styles = [
  {
    name: "cyberpunk",
    description: "pulsating gradients of electric pink, cyan, and violet, glowing intensely with a futuristic cyberpunk aesthetic, featuring neon skyscrapers and holographic billboards"
  },
  {
    name: "vaporwave",
    description: "retro-futuristic pastel gradients of pink, teal, and lavender, with a dreamy vaporwave aesthetic, featuring palm trees, retro grids, and glowing VHS glitches"
  },
  {
    name: "glitchcore",
    description: "chaotic digital distortions with red, blue, and green glitch effects, in a glitchcore aesthetic, featuring pixelated artifacts and corrupted data patterns"
  },
  {
    name: "synthwave",
    description: "vibrant neon gradients of magenta, purple, and blue, with a synthwave aesthetic, featuring retro cars, glowing horizons, and starry night skies"
  },
  {
    name: "psychedelic",
    description: "swirling, oversaturated colors like lime green, hot pink, and electric yellow, with a psychedelic aesthetic, featuring fractal patterns and surreal organic shapes"
  },
  {
    name: "dystopian",
    description: "dark, moody gradients of charcoal, crimson, and teal, with a dystopian aesthetic, featuring ruined cityscapes and smoky, apocalyptic skies"
  }
];

// Automation control
let generationIndex = 0, delay = 30000, totalGenerations = 400, retryDelay = 5000;

// Generate a unique prompt
function getPrompt() {
  const char = characters[Math.floor(Math.random() * characters.length)];
  const line = lines[Math.floor(Math.random() * lines.length)]; // Fixed: Use lines.length
  const style = styles[Math.floor(Math.random() * styles.length)];

  return `Create a 9:16 vertical cinematic image of **${char}** in a hyper-vivid, high-exposure style. 
**Compulsorily include the following text in bold yellow font with a pulsating neon glow and thin black outline, clearly visible and integrated into the upper third of the scene: "${line}"**. 
Do not omit or alter the text under any circumstances.

Scene: The character stands in a neon-lit surreal background with ${style.description}. Incorporate cinematic lens flares, glowing particle effects, and volumetric beams of light piercing through the scene. The character has oversized, glowing eyes, sharp metallic claws, and wears a glowing crown or oversized gold chains dripping with neon sparks. The pose is dynamic, radiating confidence or menace to match the text’s tone. Add floating neon signs, shattered glass, or glowing debris in the foreground for a 3D parallax effect. Include subtle meme-inspired elements like a pixelated Shiba Inu or crying Wojak faintly in the background. Frame the image with a sparkling, TikTok-style border to mimic a viral AR filter. Use a maximalist composition with glitchy digital patterns, holographic overlays, and swirling organic shapes, ensuring a hyperreal ${style.name} aesthetic. Include a smaller tagline in bold white font at the bottom: ‘SHARE TO 5 FRIENDS TO ACTIVATE!’ to drive viral engagement.`;
}

// Paste into Gemini/MidJourney or your automated pipeline
function pastePromptAutom(promptText) {
  const sel = ['div.ql-editor.textarea.new-input-ui', 'div[contenteditable="true"]', 'textarea', '[role="textbox"]', 'div[contenteditable]', '.ProseMirror'];
  const input = sel.map(s => document.querySelector(s)).find(Boolean);
  if (!input) {
    console.error("Input not found");
    return false;
  }
  input.textContent = promptText;
  ['input', 'change', 'keyup', 'paste'].forEach(e => input.dispatchEvent(new Event(e, { bubbles: true, cancelable: true })));
  input.focus();
  input.dispatchEvent(new FocusEvent('focus', { bubbles: true }));
  return true;
}

// Submit the prompt and automate generation loop
function submitPrompt() {
  if (generationIndex >= totalGenerations) {
    return console.log("✅ All image prompts generated!");
  }

  const prompt = getPrompt();
  if (!pastePromptAutom(prompt)) {
    return setTimeout(submitPrompt, 5000);
  }

  setTimeout(() => {
    const btn = ['button.send-button', 'button[aria-label="Send"]', 'button[type="submit"]', '[data-testid="send-button"]'].map(s => document.querySelector(s)).find(Boolean);
    if (btn && !btn.disabled) btn.click();

    generationIndex++;
    setTimeout(submitPrompt, delay);
  }, 3000);
}

// Start
console.log("🚀 Starting 400 brainrot high-exposure bad luck / good news image generation automation...");
submitPrompt();
