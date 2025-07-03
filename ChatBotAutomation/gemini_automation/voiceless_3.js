// === 10 New Novel Hinglish 4-Frame Infinite Loop Stories ===
let storiesData = [
  [ // Story 1: Reflections
    { line: "Ek ladka pani mein apna aks dekhta hai.", background: "boy looking into a puddle reflecting neon lights on a rainy street at night, 9:16 vertical" },
    { line: "Barish tez ho jaati hai.", background: "heavy rain disturbing the puddle reflection with ripples under neon lights" },
    { line: "Aks hilne lagta hai.", background: "distorted reflection of the boy in the puddle with rain falling, cinematic lighting" },
    { line: "Pani shant ho jaata hai.", background: "rain slows, puddle reflection becomes clear again, neon glow on water" }
  ],
  [ // Story 2: Rain Window
    { line: "Ek ladki khidki se bahar dekhti hai.", background: "girl silhouette looking out a rain-soaked window with city lights outside, cinematic bokeh" },
    { line: "Barish ki boondein khidki par girti hai.", background: "raindrops sliding down a window with blurred city lights, soft focus" },
    { line: "Sheher ki roshni timtimaati hai.", background: "city lights flickering outside the rain-covered window at night" },
    { line: "Ladki phir dekhte rehti hai.", background: "silhouette of the girl still watching outside the rain-soaked window, cinematic mood" }
  ],
  [ // Story 3: Tunnel Shadow
    { line: "Ek parchai tunnel mein ghusti hai.", background: "hooded shadow entering a dark tunnel lit by a single light, cinematic rain outside" },
    { line: "Roshni door dikhai deti hai.", background: "faint light visible at the end of a dark tunnel, silhouette walking toward it" },
    { line: "Parchai roshni tak pahunchti hai.", background: "silhouette near the tunnel exit with light shining around them" },
    { line: "Vo tunnel se bahar nikalti hai.", background: "hooded shadow exiting into another rainy street, cinematic lighting" }
  ],
  [ // Story 4: Desert Storm
    { line: "Ek aadmi registan se guzarta hai.", background: "hooded figure walking in a dark desert under a starry sky, sand blowing" },
    { line: "Aandhi chalne lagti hai.", background: "sandstorm starting in the desert, swirling sand around the silhouette" },
    { line: "Bijli chamakti hai.", background: "lightning illuminating the desert during the storm, figure barely visible" },
    { line: "Aandhi ruk jaati hai.", background: "storm clears, revealing the silhouette under a starry sky in the desert" }
  ],
  [ // Story 5: Forgotten Guitar
    { line: "Ek purani guitar sadak par padhi hai.", background: "an old guitar lying on a rainy street under a dim streetlight, water around" },
    { line: "Barish girti rehti hai.", background: "raindrops falling on the guitar with cinematic reflections, night atmosphere" },
    { line: "Ek cycle paas se guzarti hai.", background: "bicycle riding past the guitar on the wet street, ripples in puddles" },
    { line: "Guitar wahi pada rehta hai.", background: "guitar remains on the wet street under the rain, cinematic lighting" }
  ],
  [ // Story 6: Bus Stop Rain
    { line: "Ek khali bus stop par barish gir rahi hai.", background: "empty bus stop at night with heavy rain falling, streetlights nearby" },
    { line: "Ek cycle door se guzarti hai.", background: "silhouette of a cyclist riding past the empty bus stop under rain" },
    { line: "Bijli chamakti hai.", background: "lightning illuminating the empty rainy bus stop" },
    { line: "Barish ruk jaati hai.", background: "rain stops, leaving puddles at the bus stop under the streetlight" }
  ],
  [ // Story 7: Lone Umbrella
    { line: "Ek chhata sadak par pada hai.", background: "lone black umbrella lying open on a wet street at night under soft rain" },
    { line: "Barish tez ho jaati hai.", background: "heavy rain falling on the umbrella, cinematic reflections forming" },
    { line: "Hawa chhata hila deti hai.", background: "wind blowing, making the umbrella move slightly on the wet street" },
    { line: "Chhata phir se shaant ho jaata hai.", background: "umbrella lying still again on the wet street after the wind, cinematic lighting" }
  ],
  [ // Story 8: Temple Rain
    { line: "Ek mandir par barish gir rahi hai.", background: "ancient temple in the rain with mist and soft yellow lights, night setting" },
    { line: "Ghanti ki awaaz sunai deti hai.", background: "rain falling while a temple bell rings, cinematic raindrops in foreground" },
    { line: "Bijli chamakti hai.", background: "lightning in the background of the temple during rain, dramatic lighting" },
    { line: "Mandir mein roshni jalti rehti hai.", background: "temple glowing softly under rain after lightning, mist around" }
  ],
  [ // Story 9: Lantern Ruins
    { line: "Ek lantern purane khandehar mein jal raha hai.", background: "old lantern glowing inside ancient ruins at night, rain falling outside" },
    { line: "Hawa lantern ko hilati hai.", background: "wind making the lantern sway softly, warm light in darkness" },
    { line: "Barish tez ho jaati hai.", background: "heavy rain falling, lantern light shimmering in the ruins" },
    { line: "Lantern jalta rehta hai.", background: "lantern continues glowing steadily in the dark ruins under light rain" }
  ],
  [ // Story 10: Broken Mirror
    { line: "Ek toda hua aaina sadak par pada hai.", background: "broken mirror lying on a rainy street reflecting neon lights, puddles around" },
    { line: "Barish mein aks bikhar jaata hai.", background: "raindrops hitting the broken mirror, scattering reflections under neon" },
    { line: "Bijli chamakti hai.", background: "lightning reflecting in the shards of the broken mirror on the wet street" },
    { line: "Barish ruk jaati hai.", background: "rain stops, mirror reflecting neon lights clearly in puddles" }
  ]
];

// === Automation Logic ===
let storyIndex = 0, lineIndex = 0, delay = 30000; // adjust delay as needed

function getPrompt(sIndex, lIndex) {
  const item = storiesData[sIndex][lIndex];
  return `Create a 9:16 vertical cinematic image. **Compulsorily include the following text in bold yellow font, clearly visible and integrated into the scene: "${item.line}"**. Do not omit or alter the text under any circumstances.

Scene: ${item.background}

Make this prompt fully self-contained with no context assumed between frames. No visible human faces. Use cinematic emotional lighting with rain, fog, neon or storm as suitable. Ensure it is designed for a voiceless YouTube Shorts infinite loop aesthetic. If text overlays are not possible, embed them within the image naturally.`;
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