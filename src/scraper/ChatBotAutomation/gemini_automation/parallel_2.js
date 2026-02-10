let storiesData = [
  // 1. Turtle gym revenge
  [
    { line: "Rabbit ne turtle ko race mein hara diya", background: "turtle panting at finish line, rabbit celebrating" },
    { line: "Sab bole: ‘Tu hamesha slow hi rahega’", background: "animals laughing at turtle in gym" },
    { line: "Turtle ne chhupke training start ki", background: "turtle lifting mini dumbbells, late night gym" },
    { line: "Usne running aur sprints seekh liya", background: "turtle on treadmill with sweat, spotlight" },
    { line: "Ek naye race mein, turtle rabbit ke saath tha", background: "turtle and rabbit side-by-side at start line" },
    { line: "Turtle ne us baar first aake sabko shock kar diya", background: "turtle finishing race ahead, animals shocked" },
    { line: "Wo bola: ‘Slow tha, lekin haar nahi maana’", background: "turtle smiling with medal in gym glow" }
  ],

  // 2. Fat Panda’s transformation
  [
    { line: "Panda ko sab ‘mota’ kehte the", background: "panda looking sad in front of mirror" },
    { line: "Ek din usne decide kiya: ‘Bas ab aur nahi’", background: "panda tying headband in front of gym mirror" },
    { line: "Usne daily push-ups aur pull-ups kiye", background: "panda sweating in intense gym session" },
    { line: "Sab maze le rahe the: ‘Tu kar nahi payega’", background: "other animals mocking panda lifting weights" },
    { line: "Ek mahine baad, panda ripped dikh raha tha", background: "fit panda flexing in spotlight" },
    { line: "Wo bola: ‘Size se nahi, willpower se farq padta hai’", background: "panda motivating younger animals in gym" },
    { line: "Ab sab usse ‘beast’ bulate hain", background: "panda on poster with fire and respect" }
  ],

  // 3. Giraffe with weak legs
  [
    { line: "Giraffe ke pair patle aur kamzor the", background: "giraffe struggling to stand in jungle gym" },
    { line: "Sab giraffe se kehte: ‘Tu kabhi strong nahi banega’", background: "other animals laughing at giraffe falling with dumbbells" },
    { line: "Usne training start ki, roz squats maare", background: "giraffe doing weighted squats under rain" },
    { line: "Apne lambe pair ko usne taqat mein badla", background: "giraffe sprinting with wind and dust behind" },
    { line: "Ab uska kick lion ko bhi gira deta hai", background: "lion shocked mid-air from giraffe’s kick" },
    { line: "Jungle mein sab kehte: ‘Giraffe strong hai’", background: "animals watching giraffe train others" },
    { line: "Usne bola: ‘Maza toh tab hai, jab badlaav dikhai de’", background: "giraffe posing under jungle gym lights" }
  ],

  // 4. Shy Monkey becomes gymnast
  [
    { line: "Monkey ko crowd se dar lagta tha", background: "monkey hiding behind tree during event" },
    { line: "Ek din usne gymnastic video dekha", background: "monkey watching flips on tablet in jungle" },
    { line: "Usne chhupke jungle mein practice start ki", background: "monkey swinging from tree to tree alone" },
    { line: "Flip maarna seekhne mein use ghav bhi lage", background: "bruised monkey still training at sunset" },
    { line: "Jungle competition mein sab shocked hue", background: "monkey flipping mid-air under spotlight" },
    { line: "Sab cheer kar rahe the: ‘Woh ud raha hai!’", background: "animals clapping, monkey bowing" },
    { line: "Monkey bola: ‘Dar ke aage hi jeet hai’", background: "monkey standing confident under night sky" }
  ]
];



// === Full Automation Logic ===
let storyIndex = 0, lineIndex = 0, delay = 30000;

function getPrompt(sIndex, lIndex) {
  const item = storiesData[sIndex][lIndex];
  return `Create a 9:16 vertical cinematic image. **Compulsorily include the following text in bold yellow font, clearly visible and integrated into the scene: "${item.line}"**. Do not omit or alter the text under any circumstances.\n\nScene: ${item.background}\n\nMake each prompt self-contained, no context assumed. No human faces. Use emotional cinematic lighting. Note : If you are unable to add text overlays please add them in images as quotes.`;
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

console.log("🚀 Starting new 10-story Hinglish visual automation...");
submitPrompt();
