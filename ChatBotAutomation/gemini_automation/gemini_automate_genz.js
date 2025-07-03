// ===== CONFIG ===== //
// ===== CONFIG ===== //
const YOUR_QUOTES = [
  "Me in bed trying to fix my entire life mentally",
  "When the group chat goes silent and so does my soul",
  "People: it’s not that deep. My brain: bet.",
  "I wish ‘seen at 2:34am’ had a therapy mode",
  "My dreams are more social than real life",
  "Being told to ‘just let it go’ like I’m Elsa",
  "Me rereading messages to find hidden meanings",
  "That one emoji reply that changed my mood",
  "Saying ‘lol’ with tears in my eyes",
  "My camera roll is just memes and breakdowns",
  "Overthinking a typo like I ruined everything",
  "Wishing I was the person I pretend to be",
  "When Spotify shuffle understands your trauma",
  "Laughing at pain so it doesn’t win",
  "Me checking if the wifi’s down or I’m being ignored",
  "Missing people who never actually knew me",
  "That fake ‘I’m happy for you’ smile",
  "When comfort zones feel like prisons",
  "Pretending I’m okay to avoid questions",
  "That one song that triggers 7 memories",
  "Posting a story hoping someone notices",
  "The fear of being misunderstood is exhausting",
  "I’m not quiet, I’m just busy fighting my thoughts",
  "Healing slowly like buffering on 2G"
];

const YOUR_BACKGROUNDS = [
  "a bed with a mind map drawn on the wall above",
  "an empty group chat screen glowing in darkness",
  "a brain icon with ‘diving deep’ animation",
  "a chat screen with a timestamp and no reply",
  "a dreamy scene of a person socializing with ghosts",
  "an Elsa silhouette in the snow crying",
  "a message thread full of re-read receipts",
  "a giant emoji floating in a dark room",
  "a phone with ‘lol’ typed and face half-lit",
  "a phone gallery with memes and sad selfies",
  "a person staring at a typo with panic on their face",
  "a mask of confidence slowly cracking",
  "a Spotify screen glowing, with tears on cheeks",
  "a person laughing while surrounded by chaos",
  "a Wi-Fi icon blinking over a sad face",
  "a person reaching for someone transparent",
  "a close-up of a smile with sad eyes",
  "a person staring at a door they can’t exit",
  "a character hiding behind a smiley mask",
  "a ghost note floating out of headphones",
  "a story notification with heart eyes in background",
  "a person tangled in misunderstanding symbols",
  "a person holding their head in silence",
  "a loading symbol slowly rotating over a heart"
];

const MAX_SUBMISSIONS = YOUR_QUOTES.length;// or adjust as needed
const DELAY_BETWEEN_SUBMISSIONS_MS = 30000; // 30 sec

// ===== ENGINE ===== //
let submissionCount = 0;

function generatePrompt(index) {
  const quote = YOUR_QUOTES[index];
  const background = YOUR_BACKGROUNDS[index];
  
  return `Generate a dark, cinematic 9:16 image that visually represents the quote: "${quote}". Use high contrast, shadow-heavy lighting, and make it emotionally evocative. Scene: ${background}. Add the quote text in bold white or yellow font. Keep the tone emotionally intense and visually dramatic.`;
}

function submitPrompt() {
  if (submissionCount >= MAX_SUBMISSIONS || submissionCount >= YOUR_QUOTES.length) {
    console.log("✅ Automation complete");
    return;
  }

  const prompt = generatePrompt(submissionCount);
  const inputElement = document.querySelector('div.ql-editor.textarea.new-input-ui');

  if (!inputElement) {
    console.error("❌ Could not find input element");
    return;
  }

  // Inject prompt
  inputElement.focus();
  document.execCommand("selectAll", false, null);
  document.execCommand("delete", false, null);
  document.execCommand("insertText", false, prompt);

  // Submit
  setTimeout(() => {
    const submitButton = document.querySelector('button.send-button');

    if (submitButton && !submitButton.disabled) {
      submitButton.click();
      console.log(`📩 Submitted prompt #${submissionCount + 1}: ${prompt.slice(0, 50)}...`);
    } else {
      console.warn("⚠️ Submit button unavailable");
    }

    submissionCount++;
    setTimeout(submitPrompt, DELAY_BETWEEN_SUBMISSIONS_MS);
  }, 1000);
}

// ===== START ===== //
submitPrompt();