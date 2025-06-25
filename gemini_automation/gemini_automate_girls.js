let girlTypes = [
  "A beautiful Indian girl with glowing brown skin and long black hair styled in waves",
  "A graceful Indian girl with dusky complexion and jasmine flowers in her braid",
  "A charming Indian girl wearing a bindi and elegant jhumkas with radiant smile",
  "A stunning Indian girl with expressive eyes and traditional nose ring",
  "A stylish Indian girl with henna-decorated hands and glossy straight hair",
  "A confident Indian girl with curly hair in a sleek modern bun"
];

let outfits = [
  "wearing a vibrant silk saree with golden embroidery and elegant drape",
  "in a pastel lehenga with mirror work and flowing dupatta caught in the breeze",
  "dressed in a cotton saree with minimal jewelry and a calm expression",
  "in a royal blue sharara with intricate detailing and modern jewelry",
  "wearing an off-shoulder summer dress with floral prints and ankle boots",
  "in a sleeveless crop top and long skirt with beach-side accessories",
  "wearing a modern indo-western fusion outfit with layered necklaces",
  "in a modestly styled two-piece beachwear set with a kimono wrap and sunhat",
  "in a lightweight one-piece dress with stylish heels and bold earrings",
  "in a sari-inspired gown with fashion-forward draping and bangles"
];

let backgrounds = [
  "walking near the Taj Mahal at sunrise with morning mist around",
  "on a traditional ghat beside the Ganges with diyas floating in water",
  "posing near Jaipur’s Hawa Mahal with warm golden sunlight",
  "standing on a rooftop in Varanasi during aarti with lamps glowing",
  "on a sandy beach in Goa with calm waves and palm trees",
  "walking through a flower market with marigolds and roses",
  "on a city terrace with fairy lights and a view of Diwali fireworks",
  "in a scenic Rajasthani desert with camels and soft sunset lighting"
];

let cinematicActions = [
  "adjusting her dupatta gently in the breeze",
  "smiling softly while tucking her hair behind one ear",
  "twirling playfully with the outfit flowing around her",
  "looking over her shoulder with a calm and composed gaze",
  "lifting her saree slightly while walking gracefully",
  "sitting on a stone ledge with a thoughtful expression and soft lighting",
  "gazing into the distance while light flares in the background",
  "standing confidently with hands on waist, eyes glimmering"
];

let maxCount = 100;
let count = 0;
let delay = 20000;

function getRandomPrompt() {
  let girl = girlTypes[Math.floor(Math.random() * girlTypes.length)];
  let outfit = outfits[Math.floor(Math.random() * outfits.length)];
  let bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  let action = cinematicActions[Math.floor(Math.random() * cinematicActions.length)];

  return `${girl}, ${outfit}, ${bg}, ${action} — high-resolution fashion editorial, cinematic mood, soft natural lighting, elegant and culturally rich, optimized for YouTube Shorts, 9:16 aspect ratio`;
}

function submitPrompt() {
  let prompt = getRandomPrompt();
  const inputDiv = document.querySelector('div.ql-editor.textarea.new-input-ui');

  if (!inputDiv) {
    console.error("❌ Input box not found.");
    return;
  }

  inputDiv.focus();

  document.execCommand("selectAll", false, null);
  document.execCommand("delete", false, null);
  document.execCommand("insertText", false, prompt);

  setTimeout(() => {
    const sendButton = document.querySelector('button.send-button');

    if (sendButton && !sendButton.disabled) {
      sendButton.click();
      console.log(`✅ Prompt #${count + 1} submitted:`, prompt);
    } else {
      console.warn("⚠️ Send button not found or disabled.");
    }

    count++;
    if (count < maxCount) {
      setTimeout(submitPrompt, delay);
    } else {
      console.log("🎉 Done submitting all prompts!");
    }

  }, 1000);
}

submitPrompt();
