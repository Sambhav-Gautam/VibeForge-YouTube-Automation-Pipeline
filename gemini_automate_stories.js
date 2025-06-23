// === Realistic 5-Line Hinglish Stories ===
let stories = [
  [
    "Ek chhota sa kutta sadak ke kone par barish mein bheeg raha tha.",
    "Har din log usse dekhar nikal jaate, par ek ladki ne usse roti di.",
    "Ladki har din aati thi, vo kutta bhi uska intezaar karta tha.",
    "Ek din us ladki ko chakkar aaya aur vo gir gayi sadak par.",
    "Kutte ne chillakar logon ko bulaya... us din sabne use hero kaha."
  ]
];

// === Matching Backgrounds for Each Line ===
let backgrounds = [
  "a lonely puppy sitting in heavy rain at a roadside under a broken streetlight, with puddles and moving traffic nearby",
  "a young girl in school uniform offering food to the same puppy near a tea stall, early morning fog",
  "the puppy happily wagging its tail waiting at the same spot next day, bright sunlight and light traffic",
  "the girl fainting on a quiet road while crossing, with the puppy alert and barking loudly",
  "a group of people surrounding the girl with the heroic puppy by her side, emotional sunlight falling on them"
];

// === Config ===
let storyIndex = 0;
let lineIndex = 0;
let delay = 20000; // 20 seconds between prompts

// === Gemini-Compatible Prompt Generator ===
function getPrompt(storyIndex, lineIndex) {
  const line = stories[storyIndex][lineIndex];
  const background = backgrounds[storyIndex * 5 + lineIndex]; // flatten backgrounds for multiple stories

  const prompt = `Create a 9:16 vertical cinematic image with the following quote clearly written in bold, legible white or red text: "${line}". 

The scene should depict: ${background}. 

Characters should be silhouetted, hooded, or turned away (no visible faces). Use emotional lighting to match the tone. Center the text clearly. Do not forget to include the quote in the image.`;

  console.log(`📝 Generated Prompt (Story ${storyIndex + 1}, Frame ${lineIndex + 1}):\n${prompt}`);
  return prompt;
}

// === Paste Prompt Automatically ===
function pastePromptAutomatically(promptText) {
  const selectors = [
    'div.ql-editor.textarea.new-input-ui',
    'div[contenteditable="true"]',
    'textarea',
    '[role="textbox"]',
    'div[contenteditable]',
    '.ProseMirror'
  ];

  let inputDiv = null;
  for (const selector of selectors) {
    inputDiv = document.querySelector(selector);
    if (inputDiv) break;
  }

  if (!inputDiv) {
    console.error("❌ Input box not found. Tried selectors:", selectors);
    return false;
  }

  try {
    inputDiv.textContent = '';
    inputDiv.textContent = promptText;

    const events = ['input', 'change', 'keyup', 'paste'];
    events.forEach(eventType => {
      const event = new Event(eventType, { bubbles: true, cancelable: true });
      inputDiv.dispatchEvent(event);
    });

    inputDiv.focus();
    inputDiv.dispatchEvent(new FocusEvent('focus', { bubbles: true }));

    console.log("✅ Prompt pasted successfully.");
    return true;
  } catch (error) {
    console.error("❌ Error pasting prompt:", error);
    return false;
  }
}

// === Submit Prompt Loop ===
function submitPrompt() {
  if (storyIndex >= stories.length) {
    console.log("🎉 All stories submitted!");
    return;
  }

  const promptText = getPrompt(storyIndex, lineIndex);
  const success = pastePromptAutomatically(promptText);

  if (!success) {
    console.warn("⚠️ Paste failed, retrying in 5 seconds...");
    setTimeout(submitPrompt, 5000);
    return;
  }

  setTimeout(() => {
    const buttonSelectors = [
      'button.send-button',
      'button[aria-label="Send"]',
      'button[type="submit"]',
      '[role="button"] svg[aria-label="Send"]',
      'button:has(svg)',
      '[data-testid="send-button"]'
    ];

    let sendButton = null;
    for (const selector of buttonSelectors) {
      sendButton = document.querySelector(selector);
      if (sendButton) break;
    }

    if (sendButton && !sendButton.disabled) {
      sendButton.click();
      console.log(`✅ Submitted: Story ${storyIndex + 1}, Frame ${lineIndex + 1}`);
    } else {
      console.warn("⚠️ Send button not found or disabled.");
    }

    lineIndex++;
    if (lineIndex >= 5) {
      lineIndex = 0;
      storyIndex++;
    }

    setTimeout(submitPrompt, delay);
  }, 3000);
}

// === Start Automation ===
console.log("🚀 Starting 5-image story automation...");
submitPrompt();
