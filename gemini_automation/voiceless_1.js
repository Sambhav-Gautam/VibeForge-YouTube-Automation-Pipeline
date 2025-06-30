// === 10 Unique Voiceless, Hinglish 4-Frame Stories with Backgrounds ===
let storiesData = [
  [ // Story 1: Shadow Walker
    { line: "Ek akela aadmi neon gali se guzarta hai.", background: "a hooded silhouette walking through a rainy neon-lit cyberpunk alley, reflections on wet street, cinematic lighting" },
    { line: "Vo ek jungle ke raste par badh raha hai.", background: "hooded figure walking through a misty dark forest with red lanterns, moonlight breaking through trees" },
    { line: "Vo registan mein ek chamakte darwaze ki taraf chalta hai.", background: "silhouette walking in a desert night under stars towards a glowing portal in the sand" },
    { line: "Vo barfili gali mein wapas laut aata hai.", background: "hooded figure walking in a snowy alley under a dim streetlight, snowfall, footsteps visible" }
  ],
  [ // Story 2: Rainy Dog Loop
    { line: "Ek kutta barish mein sadak par baitha hai.", background: "lonely dog sitting on a wet empty street at night with rain falling under streetlights" },
    { line: "Vo dheere se sadak par aage badhta hai.", background: "the same dog walking forward on a rain-soaked street, cinematic reflections" },
    { line: "Vo ek chai ki tapri ke neeche rukta hai.", background: "dog sitting under a small tea stall shade while rain falls, warm steam rising" },
    { line: "Barish rukti hai, vo wapas mudta hai.", background: "rain stopping, dog turning back and walking down the same wet street" }
  ],
  [ // Story 3: Cycle Boy
    { line: "Ek ladka purani cycle lekar nikalta hai.", background: "boy riding an old bicycle on an empty street in the morning fog" },
    { line: "Barish mein pani ke chhapak bante hai.", background: "bicycle wheels making water splashes while riding in rain, cinematic reflections" },
    { line: "Vo purane pul ke neeche rukta hai.", background: "boy stopping under an old railway bridge looking at rain" },
    { line: "Barish rukti hai, vo phir se nikal padta hai.", background: "rain stops, boy cycling away on wet reflective road" }
  ],
  [ // Story 4: Rooftop Girl
    { line: "Ek ladki chhat par khadi hai.", background: "girl standing on a rooftop at dusk with city lights in the background, wind blowing" },
    { line: "Vo sheher ki roshni dekhti hai.", background: "girl resting hands on the rooftop railing, looking at distant city lights" },
    { line: "Barish ki boondein girne lagti hai.", background: "light rain begins to fall on rooftop, wind moving the girl's hair" },
    { line: "Vo palat kar chale jaati hai.", background: "girl walking away, leaving the empty rooftop under drizzle" }
  ],
  [ // Story 5: Black Cat
    { line: "Ek kaali billi barish mein baithi hai.", background: "black cat sitting on a rainy rooftop at night under soft streetlight, water drops around" },
    { line: "Bijli chamakti hai, billi palak jhapakti hai.", background: "lightning flashing, briefly illuminating the black cat on the wet rooftop" },
    { line: "Barish tez ho jaati hai.", background: "heavy rain falling on the black cat as it stays still, cinematic atmosphere" },
    { line: "Bijli ruk jaati hai, billi fir baithi rehti hai.", background: "lightning ends, cat remains in the same position on the rooftop" }
  ],
  [ // Story 6: Sadhu and Dog
    { line: "Ek sadhu aag sek raha hai.", background: "sadhu warming hands over a small fire on the roadside at night, smoke rising" },
    { line: "Thandi hawa chalti hai.", background: "cold wind blowing as flames flicker in the dark street" },
    { line: "Ek kutta aag ke paas so jaata hai.", background: "a stray dog lying near the small fire, warming itself" },
    { line: "Sadhu uth jaata hai, kutta wahi rehta hai.", background: "the sadhu leaves while the dog remains sleeping near the fire" }
  ],
  [ // Story 7: Portal Walk
    { line: "Ek aadmi ek chamakte darwaze ki taraf chalta hai.", background: "hooded figure walking toward a glowing sci-fi portal in a dark alley" },
    { line: "Darwaza chamakta rehta hai.", background: "glowing portal emitting blue light with rain falling around, cinematic atmosphere" },
    { line: "Vo darwaze ke andar ghusta hai.", background: "hooded figure partially entering the glowing portal, mist around" },
    { line: "Darwaza band hota hai.", background: "glowing portal closing, empty wet alley left behind" }
  ],
  [ // Story 8: Lonely Lantern
    { line: "Ek purani gali mein ek lantern jal raha hai.", background: "old rusty lantern glowing on a dark foggy street, puddles reflecting light" },
    { line: "Hawa lantern ko hilati hai.", background: "wind blowing making the lantern sway softly, cinematic lighting" },
    { line: "Barish shuru ho jaati hai.", background: "rain falling in the narrow alley, lantern light shimmering" },
    { line: "Barish ruk jaati hai, roshni jalti rehti hai.", background: "rain stops, lantern still glowing in the misty street" }
  ],
  [ // Story 9: Mirror Alley
    { line: "Ek ladka barish mein gali se guzarta hai.", background: "boy walking through a narrow rainy alley at night, reflections on wet street" },
    { line: "Uska aks pani mein dikhai deta hai.", background: "reflection of the boy in a water puddle, streetlights around" },
    { line: "Bijli chamakti hai.", background: "lightning flashing above the alley, illuminating the scene" },
    { line: "Aks fir se andhere mein kho jaata hai.", background: "reflection fades as darkness returns, boy continues walking" }
  ],
  [ // Story 10: Time Loop
    { line: "Ghadi ki sui ek par ruk jaati hai.", background: "close-up of an old pocket watch in rain, hands stuck at one o'clock, cinematic depth" },
    { line: "Pani ki boondein girti rehti hai.", background: "raindrops falling on the pocket watch on a wet street, soft reflections" },
    { line: "Bijli chamakti hai, par waqt ruk gaya hai.", background: "lightning illuminating the watch while its hands remain frozen" },
    { line: "Ghadi fir wahi par chalti rehti hai.", background: "watch remains at one o'clock as rain continues, cinematic moody lighting" }
  ]
];

// === Full Automation Logic ===
let storyIndex = 0, lineIndex = 0, delay = 30000;

function getPrompt(sIndex, lIndex) {
  const item = storiesData[sIndex][lIndex];
  return `Create a 9:16 vertical cinematic image. **Compulsorily include the following text in bold yellow font, clearly visible and integrated into the scene: "${item.line}"**. Do not omit or alter the text under any circumstances.

Scene: ${item.background}

Make each prompt fully self-contained with no context assumed. No human faces. Use emotional cinematic lighting. Ensure it is designed for a voiceless YouTube Shorts infinite loop aesthetic. If you are unable to add text overlays, please add them as quotes within the image composition itself.`;
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
  if (storyIndex >= storiesData.length) return console.log("🎉 All 10 stories with 4 frames submitted!");
  const prompt = getPrompt(storyIndex, lineIndex);
  if (!pastePromptAutom(prompt)) return setTimeout(submitPrompt, 5000);
  setTimeout(() => {
    const btn = ['button.send-button', 'button[aria-label="Send"]', 'button[type="submit"]', '[data-testid="send-button"]'].map(s => document.querySelector(s)).find(Boolean);
    if (btn && !btn.disabled) btn.click();
    console.log(`✅ Submitted: Story ${storyIndex + 1}, Frame ${lineIndex + 1}`);
    console.log(`📝 Prompt: ${prompt}`);
    lineIndex++;
    if (lineIndex >= 4) { // 4-frame loop structure
      lineIndex = 0;
      storyIndex++;
    }
    setTimeout(submitPrompt, delay);
  }, 3000);
}

console.log("🚀 Starting automated 10-story, 4-frame dark emotional Hinglish visual prompt generation for Gemini / ChatGPT...");
submitPrompt();