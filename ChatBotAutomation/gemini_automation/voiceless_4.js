// === 10 New Cinematic Hinglish 4-Frame Infinite Loop Stories ===
let storiesData = [
  [ // Story 1: Lost Ball
    { line: "Ek ball barish mein sadak par giri hai.", background: "a red ball lying on a rainy street under neon lights at night, 9:16 vertical" },
    { line: "Pani ball ke aas paas behta hai.", background: "rainwater flowing around the red ball on the wet street, cinematic reflections" },
    { line: "Ek gadi paas se guzarti hai.", background: "car passing by splashing water near the red ball, neon lights reflecting" },
    { line: "Ball wahi padhi rehti hai.", background: "red ball still lying on the wet street after the car passes, cinematic rain" }
  ],
  [ // Story 2: Lantern in Alley
    { line: "Ek lantern andheri gali mein jal rahi hai.", background: "old lantern glowing in a dark rainy alley with mist and neon reflections" },
    { line: "Hawa lantern ko hila deti hai.", background: "wind making the lantern sway under light rain in the alley" },
    { line: "Bijli chamakti hai.", background: "lightning illuminating the alley with the swaying lantern, rain falling" },
    { line: "Lantern phir se shaant ho jaata hai.", background: "lantern glowing calmly in the dark alley after lightning, cinematic rain" }
  ],
  [ // Story 3: Foggy Tracks
    { line: "Railway track par kohra chhaya hai.", background: "fog covering empty railway tracks at dawn, soft cinematic lighting" },
    { line: "Door ek light dikhai deti hai.", background: "a faint light at the end of the foggy railway tracks" },
    { line: "Ek train aati hai.", background: "train approaching slowly on the foggy tracks with headlights cutting through mist" },
    { line: "Track phir se khali ho jaata hai.", background: "train gone, empty foggy tracks under soft dawn light" }
  ],
  [ // Story 4: Clock Tower
    { line: "Ek purana clock tower barish mein bheeg raha hai.", background: "old clock tower under heavy rain at night with lightning in the background" },
    { line: "Bijli chamakti hai.", background: "lightning illuminating the clock tower during heavy rain" },
    { line: "Ghadi ki sui hilti hai.", background: "clock hand moving slowly on the old tower under rain" },
    { line: "Barish ruk jaati hai.", background: "rain stops, clock tower reflecting neon puddles on the ground" }
  ],
  [ // Story 5: Billi Lantern
    { line: "Ek billi lantern ke paas baithi hai.", background: "black cat sitting near a glowing lantern in a dark rainy alley, mist around" },
    { line: "Lantern ki roshni us par padti hai.", background: "warm lantern light illuminating the cat in the rain" },
    { line: "Barish tez ho jaati hai.", background: "heavy rain falling around the cat and lantern, cinematic lighting" },
    { line: "Billi wahan se uth jaati hai.", background: "cat walks away, leaving the lantern glowing in the rain" }
  ],
  [ // Story 6: Bridge Steps
    { line: "Ek pul par barish gir rahi hai.", background: "rain falling on a quiet bridge at night with neon reflections" },
    { line: "Ek admi ke kadam ki awaaz aati hai.", background: "hooded figure walking on the wet bridge, footsteps visible in puddles" },
    { line: "Bijli chamakti hai.", background: "lightning illuminating the bridge with the figure walking" },
    { line: "Pul phir se khali ho jaata hai.", background: "empty wet bridge with reflections after the figure leaves, cinematic rain" }
  ],
  [ // Story 7: Newspaper
    { line: "Ek akhbaar sadak par pada hai.", background: "old newspaper lying on a rainy street with neon reflections at night" },
    { line: "Hawa akhbaar ko uda deti hai.", background: "wind blowing the newspaper on the wet street under rain" },
    { line: "Barish tez ho jaati hai.", background: "heavy rain falling on the flying newspaper in the street" },
    { line: "Akhbaar phir se gir jaata hai.", background: "newspaper landing back on the wet street, rain still falling" }
  ],
  [ // Story 8: Shadow Reflection
    { line: "Ek parchai paani mein aks dekhti hai.", background: "hooded shadow looking at its reflection in a puddle on a neon-lit rainy street" },
    { line: "Pani mein aks hilta hai.", background: "reflection rippling in the puddle under rain, cinematic lighting" },
    { line: "Bijli chamakti hai.", background: "lightning reflecting in the puddle with the shadow" },
    { line: "Pani phir shaant ho jaata hai.", background: "puddle becomes still again with clear reflection of the shadow under neon lights" }
  ],
  [ // Story 9: Old Radio
    { line: "Ek purana radio barish mein pada hai.", background: "old radio lying on a rainy street under neon lights, puddles around" },
    { line: "Barish girti rehti hai.", background: "raindrops falling on the old radio, cinematic reflections" },
    { line: "Radio se halki awaaz aati hai.", background: "radio emitting faint light and static sound under rain" },
    { line: "Radio phir chup ho jaata hai.", background: "radio silent again under rain with neon reflections on the street" }
  ],
  [ // Story 10: Rooftop Lightning
    { line: "Ek chhat par barish gir rahi hai.", background: "rain falling on a rooftop at night with a dim light, cinematic feel" },
    { line: "Bijli chamakti hai.", background: "lightning illuminating the rooftop during heavy rain" },
    { line: "Pani chhat se girta hai.", background: "water dripping from the rooftop edges under rain, cinematic lighting" },
    { line: "Bijli phir chamakti hai.", background: "lightning flashing again, illuminating the rooftop and rain" }
  ]
];

// === Automation Logic ===
let storyIndex = 0, lineIndex = 0, delay = 30000; // adjust delay as needed

function getPrompt(sIndex, lIndex) {
  const item = storiesData[sIndex][lIndex];
  return `Create a 9:16 vertical cinematic image. **Compulsorily include the following text in bold yellow font, clearly visible and integrated into the scene: "${item.line}"**. Do not omit or alter the text under any circumstances.

Scene: ${item.background}

Make the prompt fully self-contained with no context assumed between frames. No visible human faces. Use cinematic emotional lighting with rain, fog, neon or storm as suitable. Ensure it is designed for a voiceless YouTube Shorts infinite loop aesthetic. If text overlays are not possible, embed them within the image naturally.`;
}

function pastePromptAutom(promptText) {
  const sel = [
    'div.ql-editor.textarea.new-input-ui',
    'div[contenteditable="true"]',
    'textarea',
    '[role="textbox"]',
    'div[contenteditable]',
    '.ProseMirror'
  ];
  const input = sel.map(s => document.querySelector(s)).find(Boolean);
  if (!input) {
    console.error("❌ Input field not found, retrying...");
    return false;
  }
  input.textContent = promptText;
  ['input', 'change', 'keyup', 'paste'].forEach(e => input.dispatchEvent(new Event(e, { bubbles: true, cancelable: true })));
  input.focus();
  input.dispatchEvent(new FocusEvent('focus', { bubbles: true }));
  console.log("✅ Prompt pasted.");
  return true;
}

function submitPrompt() {
  if (storyIndex >= storiesData.length) {
    console.log("🎉 All 10 stories (40 frames) submitted!");
    return;
  }

  const prompt = getPrompt(storyIndex, lineIndex);
  if (!pastePromptAutom(prompt)) {
    console.log("⚠️ Retrying paste in 5s...");
    setTimeout(submitPrompt, 5000);
    return;
  }

  setTimeout(() => {
    const btnSel = [
      'button.send-button',
      'button[aria-label="Send"]',
      'button[type="submit"]',
      '[data-testid="send-button"]'
    ];
    const btn = btnSel.map(s => document.querySelector(s)).find(Boolean);
    if (btn && !btn.disabled) {
      btn.click();
      console.log(`✅ Submitted: Story ${storyIndex + 1}, Frame ${lineIndex + 1}`);
      console.log(`📝 Prompt:\n${prompt}`);
    } else {
      console.log("⚠️ Send button not found or disabled, retrying...");
    }
    lineIndex++;
    if (lineIndex >= 4) { // 4-frame loop structure
      lineIndex = 0;
      storyIndex++;
    }
    setTimeout(submitPrompt, delay);
  }, 3000);
}

console.log("🚀 Starting automated generation of 10 new 4-frame Hinglish infinite loop stories for Gemini / ChatGPT pipeline...");
submitPrompt();
