let storiesData = [
  // 1. Frog's paper boat is stolen
  [
    { line: "Frog ne apne haathon se kagaz ki naav banayi", background: "pondside with frog holding paper boat, rainy evening" },
    { line: "Wo khush tha, usne naav ko paani mein chhoda", background: "small ripples as paper boat floats on water" },
    { line: "Ek crow aaya, aur naav le gaya", background: "black crow flying away with paper boat" },
    { line: "Frog chillata raha: 'Wapas de meri naav!'", background: "frog on edge of pond, arms stretched crying" },
    { line: "Sab log hans rahe the, par frog ro raha tha", background: "animals watching and laughing, frog crying alone" },
    { line: "Usne bola: ‘Woh sirf kagaz nahi tha’", background: "close-up of frog eyes with tear drop" },
    { line: "Wo us naav mein apne sapne le kar gaya tha", background: "dramatic scene of frog looking at empty pond" }
  ],

  // 2. Parrot warns others about fire
  [
    { line: "Parrot ne jungle mein dhuaan dekha", background: "jungle with smoke rising in distance, parrot on branch" },
    { line: "Usne cheekh kar sabko bataya: ‘Aag lag gayi!’", background: "parrot shouting, wings wide open" },
    { line: "Sab bole: ‘Tu hamesha drama karta hai’", background: "animals ignoring parrot's warning" },
    { line: "Fire pheli, sab bhaagne lage", background: "orange flames spreading in the jungle" },
    { line: "Parrot ne sabko safe zone dikhaya", background: "parrot flying above, guiding animals" },
    { line: "Bacchon ko parrot ne pehle nikala", background: "baby animals following parrot out of fire" },
    { line: "Jungle ne usko hero declare kiya", background: "animals cheering for parrot under the moon" }
  ],

  // 3. Lazy lion loses crown
  [
    { line: "Lion jungle ka raja tha, par ab sirf sota rehta tha", background: "lion sleeping on throne made of leaves" },
    { line: "Monkey bola: ‘Raja toh kaam kare!’", background: "monkey pointing finger at lazy lion" },
    { line: "Animals decide ki election hoga", background: "animals gathering in forest for voting" },
    { line: "Tortoise bola: ‘Main bhi khada hoon’", background: "tortoise with mini campaign board" },
    { line: "Lion ne bola: ‘Main hi sabse strong hoon’", background: "angry lion roaring at crowd" },
    { line: "Votes count hue, tortoise jeet gaya", background: "tortoise smiling on throne, confetti" },
    { line: "Jungle ne bola: ‘King hona = zimmedari’", background: "animals saluting tortoise, lion in background sad" }
  ],

  // 4. Snake saves the squirrel
  [
    { line: "Squirrel tree se girne waali thi", background: "squirrel slipping from tree branch, sunset" },
    { line: "Sab animals froze ho gaye", background: "animals staring in shock at falling squirrel" },
    { line: "Ek snake jhaadiyon se nikal kar gaya", background: "snake slithering urgently through grass" },
    { line: "Usne apne coil se squirrel ko pakda", background: "snake catching falling squirrel with body" },
    { line: "Sab shocked the: ‘Snake ne help ki?’", background: "animals whispering and surprised" },
    { line: "Snake bola: ‘Sabko jeene ka haq hai’", background: "snake coiled calmly, squirrel hugging it" },
    { line: "Jungle mein ek naya soch aaya us din", background: "peaceful jungle, all animals united" }
  ],

  // 5. Poor pig gets respect
  [
    { line: "Pig sadak ke paas rehne waala tha, sab ignore karte the", background: "lonely pig near muddy roadside" },
    { line: "Kids usko ‘ganda’ kehte the", background: "children pointing and teasing pig" },
    { line: "Ek din flood aaya, sab ghar doob gaye", background: "raging floodwaters entering animal homes" },
    { line: "Pig ne sabko apne pit mein jagah di", background: "pig leading animals to dry muddy pit" },
    { line: "Sab survive hue, sirf uski wajah se", background: "animals cuddled together in safe pit" },
    { line: "Kids ne usse maafi maangi", background: "children hugging pig with tears" },
    { line: "Us din pig ko pehli baar izzat mili", background: "pig smiling proudly in sunrise light" }
  ],
];

// === Full Automation Logic ===
let storyIndex = 0, lineIndex = 0, delay = 30000;

function getPrompt(sIndex, lIndex) {
  const item = storiesData[sIndex][lIndex];
  return `Create a 9:16 vertical cinematic image. **Compulsorily include the following text in bold yellow font, clearly visible and integrated into the scene: "${item.line}"**. Do not omit or alter the text under any circumstances.\n\nScene: ${item.background}\n\nMake each prompt self-contained, no context assumed. No human faces. Use emotional cinematic lighting.`;
}

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

function submitPrompt() {
  if (storyIndex >= storiesData.length) return console.log("All done!");
  const prompt = getPrompt(storyIndex, lineIndex);
  if (!pastePromptAutom(prompt)) return setTimeout(submitPrompt, 5000);
  setTimeout(() => {
    const btn = ['button.send-button', 'button[aria-label="Send"]', 'button[type="submit"]', '[data-testid="send-button"]'].map(s => document.querySelector(s)).find(Boolean);
    if (btn && !btn.disabled) btn.click();
    lineIndex++;
    if (lineIndex >= 7) {
      lineIndex = 0;
      storyIndex++;
    }
    setTimeout(submitPrompt, delay);
  }, 3000);
}

console.log("🚀 Starting new 10-story Hinglish visual automation...");
submitPrompt();
