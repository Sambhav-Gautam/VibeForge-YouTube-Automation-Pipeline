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

  // 6. Cow and blind puppy
  [
    { line: "Cow ne ek andha puppy road pe dekha", background: "cow looking at blind puppy crossing road" },
    { line: "Usne puppy ko apne saath le liya", background: "cow walking with puppy under her neck" },
    { line: "Daily usko grass ke paas le jaati thi", background: "cow guiding puppy to grass field" },
    { line: "Dogs usko chidhate: ‘Tu maa ban gayi?’", background: "dogs laughing while cow and puppy eat" },
    { line: "Cow chup thi, par uska pyaar bol raha tha", background: "cow licking puppy gently" },
    { line: "Ek din cow gayab thi, puppy akela tha", background: "puppy sniffing around sadly" },
    { line: "Us raat puppy ne cow ka naam cheekha", background: "puppy howling at moon" }
  ],

  // 7. Fish dreams of flying
  [
    { line: "Chhoti fish hamesha aasman dekh kar sapne leti thi", background: "small fish underwater looking at surface" },
    { line: "Wo bolti: ‘Main ek din udungi!’", background: "fish imagining wings underwater" },
    { line: "Sab haste the: ‘Pagal ho kya?’", background: "other sea creatures mocking her" },
    { line: "Ek storm aaya, fish surface pe aayi", background: "stormy ocean, fish jumping out" },
    { line: "Usne ek hawaa ki lehar par jump kiya", background: "fish mid-air with wind stream" },
    { line: "Ek eagle ne usko pakad liya...", background: "eagle catching fish gently mid-flight" },
    { line: "Aur hilltop lake mein chhod diya", background: "fish landing in serene mountaintop lake" }
  ],

  // 8. Crow learns empathy
  [
    { line: "Crow sirf chori karta tha, sab use chor kehte", background: "crow holding shiny object in beak" },
    { line: "Ek din usne injured dove dekha", background: "crow landing near hurt dove in grass" },
    { line: "Usne usko apne nest mein jagah di", background: "crow sheltering dove under wing" },
    { line: "Dove ne bola: ‘Tum bure nahi ho’", background: "dove smiling, weak but thankful" },
    { line: "Crow ne sab cheezen wapas kar di", background: "crow returning shiny objects to animals" },
    { line: "Sab ne bola: ‘Tu badal gaya’", background: "animals around crow with smiles" },
    { line: "Crow ne pehli baar khud pe garv mehsoos kiya", background: "crow flying high in sunrise" }
  ],

  // 9. Turtle left behind
  [
    { line: "Race hone waali thi, sab ready the", background: "animals lined up at jungle track" },
    { line: "Turtle peeche reh gaya, koi uska wait nahi kar raha", background: "turtle far behind, alone on path" },
    { line: "Usne bola: ‘Main bhi aaunga’", background: "turtle slowly moving with determination" },
    { line: "Sab finish kar chuke the, turtle chal raha tha", background: "animals celebrating, turtle still walking" },
    { line: "Usne raat tak finish line cross ki", background: "turtle under stars crossing finish" },
    { line: "Sabne uske liye clap kiya", background: "animals surrounding turtle with cheer" },
    { line: "Usne bola: ‘Main slow hoon, lekin rukta nahi’", background: "turtle smiling with jungle glow" }
  ],

  // 10. Goat loses her voice
  [
    { line: "Goat hamesha gaati thi, sab uski awaaz pasand karte the", background: "goat singing on hill with breeze" },
    { line: "Ek din uska gala chala gaya", background: "goat looking sad, unable to sing" },
    { line: "Sab bore hone lage, jungle suna ho gaya", background: "empty jungle with sad animals" },
    { line: "Goat chup thi, par usne likhna shuru kiya", background: "goat with chalk writing on stone" },
    { line: "Uske likhe lafzon ne sabko rula diya", background: "animals reading her poetry, emotional" },
    { line: "Sabne kaha: ‘Awaaz gayi hai, jazba nahi’", background: "animals clapping around goat" },
    { line: "Us raat jungle phir se jeevit ho gaya", background: "forest glowing under moonlight" }
  ]
];

// === Full Automation Logic ===
let storyIndex = 0, lineIndex = 0, delay = 23000;

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
