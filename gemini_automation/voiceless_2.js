// === 10 New Unique Voiceless, Hinglish 4-Frame Stories ===
let storiesData = [
  [ // Story 1: Shadow Portals
    { line: "Ek parchai sheher ki gali se guzarti hai.", background: "hooded shadow figure walking in a foggy alley with neon signs and rain" },
    { line: "Vo ek chamakte portal tak pahunchti hai.", background: "silhouette reaching a glowing sci-fi portal under heavy rain, puddle reflections" },
    { line: "Parchai portal ke andar ghus jaati hai.", background: "shadow stepping halfway into the portal, mist swirling around" },
    { line: "Vo ek aur gali mein nikal aati hai.", background: "the portal opening into another dark rainy alley with neon reflections" }
  ],
  [ // Story 2: Fog Dog
    { line: "Ek kutta kohra mein bhatak raha hai.", background: "lone dog walking in heavy fog on an empty street at dawn" },
    { line: "Kutte ki saans se dhund banti hai.", background: "close shot of dog's breath forming mist in cold air" },
    { line: "Ek streetlight dhund mein jalti hai.", background: "a single streetlight glowing in thick fog, soft orange light" },
    { line: "Kutta us roshni ki taraf badhta hai.", background: "dog slowly walking toward the glowing streetlight in fog" }
  ],
  [ // Story 3: Abandoned Toy
    { line: "Ek teddy bear sadak par pada hai.", background: "wet teddy bear lying on a rainy street, puddles around, night lights" },
    { line: "Barish us par girti rehti hai.", background: "rain falling on the teddy bear, cinematic reflections" },
    { line: "Ek cycle uske paas se guzarti hai.", background: "old bicycle riding past the teddy bear on wet street, leaving ripples" },
    { line: "Teddy fir wahi pada rehta hai.", background: "the teddy bear remains in the same spot on the rainy street" }
  ],
  [ // Story 4: Billi aur Andhera
    { line: "Ek billi andhere mein baithi hai.", background: "black cat sitting in a dark alley under a dim flickering light" },
    { line: "Bijli chamakti hai.", background: "lightning illuminating the cat in the dark alley" },
    { line: "Billi ki aankhein chamakti hai.", background: "close shot of cat's eyes glowing in darkness" },
    { line: "Andhera wapas aa jaata hai.", background: "the alley returns to darkness, cat barely visible" }
  ],
  [ // Story 5: Train Platform Loop
    { line: "Ek khali platform par ek admi khada hai.", background: "hooded figure standing alone on an empty railway platform at night" },
    { line: "Dur se train ki awaaz aati hai.", background: "empty platform with distant headlight of a train in the fog" },
    { line: "Train platform se guzarti hai.", background: "train passing through the platform with motion blur and rain" },
    { line: "Platform phir khali ho jaata hai.", background: "train gone, empty wet platform under dim lights" }
  ],
  [ // Story 6: Gali Lights
    { line: "Purani gali mein light jal rahi hai.", background: "old streetlight glowing on a wet empty street at night, reflections" },
    { line: "Hawa se light hilti hai.", background: "wind moving the streetlight, light flickering in the fog" },
    { line: "Barish girti hai, light chamakti hai.", background: "rain falling under the flickering streetlight" },
    { line: "Light phir se shant ho jaati hai.", background: "streetlight stabilizing, glowing softly on wet street" }
  ],
  [ // Story 7: Lantern Watcher
    { line: "Ek admi lantern ke paas khada hai.", background: "hooded figure standing near a glowing lantern on a misty street" },
    { line: "Lantern ki roshni us par padti hai.", background: "warm lantern light illuminating the figure from the side" },
    { line: "Barish tez ho jaati hai.", background: "heavy rain falling around the lantern and the figure" },
    { line: "Admi chala jaata hai, lantern jalti rehti hai.", background: "the figure leaves while the lantern keeps glowing" }
  ],
  [ // Story 8: Desert Mirage
    { line: "Ek aadmi registan se guzarta hai.", background: "hooded silhouette walking in a dark desert under starry sky" },
    { line: "Ek door mirage chamak raha hai.", background: "glowing mirage in the desert, blue light, sand swirling" },
    { line: "Admi mirage ki taraf badhta hai.", background: "silhouette approaching the glowing mirage in the dark desert" },
    { line: "Mirage gayab ho jaata hai.", background: "mirage disappears, leaving the desert dark and empty" }
  ],
  [ // Story 9: Rainy Chai
    { line: "Ek chai ki tapri par barish gir rahi hai.", background: "small tea stall with steam and heavy rain falling around" },
    { line: "Ek cup se bhap nikal rahi hai.", background: "close-up of a steaming tea cup under rain droplets" },
    { line: "Barish aur tez ho jaati hai.", background: "heavy rain around the tea stall, steam mixing with raindrops" },
    { line: "Barish rukti hai, cup khali hota hai.", background: "rain stops, empty tea cup on the stall counter, steam gone" }
  ],
  [ // Story 10: Rusty Clock
    { line: "Ek purani ghadi barish mein padhi hai.", background: "rusty old pocket watch lying on wet ground in rain, reflections" },
    { line: "Pani ki boondein ghadi par girti hai.", background: "close-up of raindrops hitting the pocket watch, ripples forming" },
    { line: "Ghadi ki sui hilti hai.", background: "watch hand moving slightly under rain, cinematic focus" },
    { line: "Phir se wahi waqt dikhata hai.", background: "watch hands stop again, showing the same time under rain" }
  ]
];

// === Full Automation Logic ===
let storyIndex = 0, lineIndex = 0, delay = 30000; // adjust delay as needed

function getPrompt(sIndex, lIndex) {
  const item = storiesData[sIndex][lIndex];
  return `Create a 9:16 vertical cinematic image. **Compulsorily include the following text in bold yellow font, clearly visible and integrated into the scene: "${item.line}"**. Do not omit or alter the text under any circumstances.

Scene: ${item.background}

Make the prompt fully self-contained, with no context assumed between frames. No human faces. Use emotional cinematic lighting, rain, fog, or neon lighting if suitable for the scene. Design for a voiceless YouTube Shorts infinite loop aesthetic. If text overlays are not possible, embed them in the environment naturally within the image.`;
}

function pastePromptAutom(promptText) {
  const sel = ['div.ql-editor.textarea.new-input-ui', 'div[contenteditable="true"]', 'textarea', '[role="textbox"]', 'div[contenteditable]', '.ProseMirror'];
  const input = sel.map(s => document.querySelector(s)).find(Boolean);
  if (!input) {
    console.error("Input not found, retrying...");
    return false;
  }
  input.textContent = promptText;
  ['input', 'change', 'keyup', 'paste'].forEach(e => input.dispatchEvent(new Event(e, { bubbles: true, cancelable: true })));
  input.focus();
  input.dispatchEvent(new FocusEvent('focus', { bubbles: true }));
  return true;
}

function submitPrompt() {
  if (storyIndex >= storiesData.length) return console.log("🎉 All 10 stories (40 frames) submitted!");
  const prompt = getPrompt(storyIndex, lineIndex);
  if (!pastePromptAutom(prompt)) return setTimeout(submitPrompt, 5000);
  setTimeout(() => {
    const btn = ['button.send-button', 'button[aria-label="Send"]', 'button[type="submit"]', '[data-testid="send-button"]'].map(s => document.querySelector(s)).find(Boolean);
    if (btn && !btn.disabled) btn.click();
    console.log(`✅ Submitted: Story ${storyIndex + 1}, Frame ${lineIndex + 1}`);
    console.log(`📝 Prompt:\n${prompt}`);
    lineIndex++;
    if (lineIndex >= 4) { // Only 4 frames per story
      lineIndex = 0;
      storyIndex++;
    }
    setTimeout(submitPrompt, delay);
  }, 3000);
}

console.log("🚀 Starting automated 10 new story generation (4 frames each) for Gemini / ChatGPT pipeline...");
submitPrompt();
