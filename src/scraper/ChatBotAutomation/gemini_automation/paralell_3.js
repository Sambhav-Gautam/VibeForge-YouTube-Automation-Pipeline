let storiesData = [
  // 1. Fox invites Chicken for dinner
  [
    { line: "Fox ne chicken ko dinner pe bulaya", background: "fox smiling with candlelight dinner setup" },
    { line: "Chicken bola: ‘Kitna pyara gesture hai’", background: "chicken admiring dinner table in forest" },
    { line: "Fox bola: ‘Bas ek minute, soup laata hoon’", background: "fox in kitchen with boiling pot" },
    { line: "Chicken ko khushboo ajeeb lagi", background: "chicken sniffing suspicious aroma, worried" },
    { line: "Tab tak der ho chuki thi...", background: "fox licking lips, chicken missing from chair" },
    { line: "Sab bole: ‘Fox ne phir se kisi ko khaya’", background: "forest newspaper: 'Chicken Missing, Fox Suspect'" },
    { line: "Jungle mein ab koi bhi fox ke ghar nahi jaata", background: "fox alone at table with empty plates" }
  ],

  // 2. Lost Penguin & Desert Genie
  [
    { line: "Ek penguin desert mein bhatak gaya", background: "penguin crawling on sand, sun blazing" },
    { line: "Uska gala sookh gaya, woh gir gaya", background: "penguin collapsed, sandstorm approaching" },
    { line: "Tabhi ek paani ka bottle uske paas gira", background: "magical bottle appears beside him" },
    { line: "Ek genie nikla: ‘Paani chahiye?’", background: "genie with water aura, desert glow" },
    { line: "Genie ne use paani diya aur thanda kiya", background: "penguin drinking water, glowing with relief" },
    { line: "Phir genie ne bola: ‘Ghar jaana hai?’", background: "genie and penguin flying over snow mountains" },
    { line: "Woh apne family ke saath ro raha tha", background: "penguin hugging family near icy cave" }
  ],

  // 3. Squirrel's toy broken by bully
  [
    { line: "Squirrel ki ek hi khilona tha", background: "squirrel hugging small toy under tree" },
    { line: "Bully bear ne woh tod diya", background: "bear laughing with broken toy in paw" },
    { line: "Squirrel chupchaap chala gaya", background: "squirrel walking alone in dark rain" },
    { line: "Usne khud se naye khilone banaye", background: "squirrel working on toy designs with tools" },
    { line: "Ek din usne toy fair jeet liya", background: "squirrel with trophy and fancy toy" },
    { line: "Bully bola: ‘Mujhe maaf kar de’", background: "bear ashamed near repaired old toy" },
    { line: "Squirrel bola: ‘Toota tha, bhool gaya… par bana bhi toh khud hi’", background: "squirrel handing bear a toy version of himself" }
  ],

  // 4. Rat Mafia in the city
  [
    { line: "City ke gutter mein ek mafia chupta tha", background: "dark sewer, glowing red rat eyes" },
    { line: "Sab use ‘Don Chuha’ kehte the", background: "rat in suit with gold chain and bodyguards" },
    { line: "Jo mana karta, uska cheese chala jaata", background: "scared mice watching cheese vanish" },
    { line: "Ek naya chuha aya: ‘Main nahi darta’", background: "brave rat with blue hoodie, entering mafia den" },
    { line: "Usne don ka cheese chura liya", background: "don shocked, table empty" },
    { line: "Don ne bola: ‘Tu mera successor hai’", background: "don handing over ring to new rat" },
    { line: "Ab naye don ka naam hai: ‘Silent Squeak’", background: "rat in shadows on throne of cheese" }
  ],

  // 5. Ant vs Elephant
  [
    { line: "Haathi ne chhoti chinti ko kuchla", background: "elephant crushing anthill with foot" },
    { line: "Sab ne kaha: ‘Tu kuch nahi kar sakti’", background: "chinti lying hurt while others mock" },
    { line: "Chinti ne training shuru ki", background: "chinti lifting grain in dramatic light" },
    { line: "Usne dimaag aur taqat dono banaye", background: "blueprint and weights beside chinti" },
    { line: "Ek din usne haathi ke trunk me mirch daal diya", background: "elephant sneezing wildly, chaos" },
    { line: "Haathi ne jungle chhod diya", background: "elephant running away, bags packed" },
    { line: "Sab bole: ‘Size se nahi, plan se jeet hoti hai’", background: "chinti on podium with crown" }
  ],

  // 6. Billi cheats on Billa
  [
    { line: "Billi aur billa jungle ke cutest couple the", background: "billi and billa sharing milkshake" },
    { line: "Ek din billi late aayi, perfume alag tha", background: "billa sniffing suspiciously" },
    { line: "Billi bola: ‘Main sirf walk pe thi’", background: "billi pretending innocence under moonlight" },
    { line: "Billa ne billi ko tiger ke saath dekha", background: "billi laughing with tiger at waterfall" },
    { line: "Usne kuch nahi bola, chala gaya", background: "billa walking away in rainy jungle" },
    { line: "Ab billa ek lone biker ban gaya", background: "billa on bike, jungle behind, moon ahead" },
    { line: "Usne bola: ‘Wafa chhodi, khudi pakdi’", background: "billa smirking with shades on" }
  ],

  // 7. Buffalo saves jungle
  [
    { line: "Jungle mein fire aagayi thi", background: "animals panicking, forest in flames" },
    { line: "Sab bhaag rahe the, sirf ek rukha", background: "buffalo standing between fire and animals" },
    { line: "Usne lake se paani laana shuru kiya", background: "buffalo running with water barrel" },
    { line: "3 din tak bina rukke aag bujhayi", background: "buffalo tired but pouring water" },
    { line: "Sab animals wapas aaye", background: "animals returning, seeing forest safe" },
    { line: "Sab ne bola: ‘Ye toh jungle ka savior hai’", background: "buffalo with garland of leaves" },
    { line: "Buffalo bola: ‘Main bas jungle ka duty nibha raha tha’", background: "buffalo looking up at sunrise" }
  ],

  // 8. Parrot betrayed by brother
  [
    { line: "Do parrot bhai jungle mein sabse close the", background: "two parrots flying together, bright sky" },
    { line: "Ek din ek ne doosre ko hunter ke hawale kar diya", background: "hunter catching one parrot while other hides" },
    { line: "Jailed parrot ne chuppi saadhi", background: "sad parrot in cage with broken mirror" },
    { line: "5 saal baad usne jail toda", background: "parrot breaking cage with dramatic feathers" },
    { line: "Usne bhai ka samna kiya", background: "two parrots facing under stormy sky" },
    { line: "Bhai ro diya: ‘Mujhse galti ho gayi’", background: "guilty parrot with downturned beak" },
    { line: "Free parrot bola: ‘Aasman ab akela hi achha lagta hai’", background: "parrot flying solo into open sky" }
  ],

  // 9. Owl gaslights Squirrel
  [
    { line: "Squirrel bola: ‘Tu har raat mujhe dekh raha hota hai’", background: "owl staring from tree in moonlight" },
    { line: "Owl bola: ‘Ye sab tera imagination hai’", background: "squirrel confused looking in mirror" },
    { line: "Squirrel ne sabse pucha: ‘Kya woh owl tumhe dekhta hai?’", background: "animals ignoring squirrel, owl smiling in distance" },
    { line: "Ek din squirrel ne camera lagaya", background: "camera hidden under tree bark" },
    { line: "Footage mein owl uske aas paas hi tha", background: "squirrel watching shocking video at night" },
    { line: "Sab animals ko video dikhaya gaya", background: "forest screen showing owl stalking squirrel" },
    { line: "Owl bola: ‘Tu samajh gaya… ab shikaar start hoga’", background: "owl flying toward camera, red eyes glowing" }
  ],

  // 10. Lonely dog becomes jungle protector
  [
    { line: "Dog ko jungle mein koi pasand nahi karta tha", background: "dog sitting alone near riverbank" },
    { line: "Sab kehte: ‘Ye toh sirf bhonkta hai’", background: "monkey laughing, bird mocking" },
    { line: "Ek din cheetah jungle mein ghusa", background: "cheetah prowling, everyone hiding" },
    { line: "Dog ne sabse pehle confront kiya", background: "dog barking in front of cheetah, fearless" },
    { line: "Dog zakhmi ho gaya, par cheetah bhaag gaya", background: "dog bleeding but standing tall" },
    { line: "Sab animals usse dekhne aaye", background: "animals surrounding dog with respect" },
    { line: "Usne bola: ‘Main bhonka, kyunki sabse pehle dekha’", background: "dog sleeping peacefully under tree" }
  ]
];

// === Full Automation Logic ===
let storyIndex = 0, lineIndex = 0, delay = 30000;

function getPrompt(sIndex, lIndex) {
  const item = storiesData[sIndex][lIndex];
  return `Create a 9:16 vertical cinematic image. **Compulsorily include the following text in bold yellow font, clearly visible and integrated into the scene: "${item.line}"**. Do not omit or alter the text under any circumstances.\n\nScene: ${item.background}\n\nMake each prompt self-contained, no context assumed. No human faces. Use emotional cinematic lighting. Note: If you are unable to add text overlays please add them in images as quotes.`;
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
    console.log(`Submitted prompt for story ${storyIndex + 1}, line ${lineIndex + 1}`);
    console.log(`Current prompt: ${prompt}`);
    lineIndex++;
    if (lineIndex >= 7) {
      lineIndex = 0;
      storyIndex++;
    }
    setTimeout(submitPrompt, delay);
  }, 3000);
}

console.log("🚀 Starting 10 dark + emotional Hinglish visual story automations...");
submitPrompt();
