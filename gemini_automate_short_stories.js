// === Realistic 5-Line Hinglish Stories ===
let stories = [
  // 1. Roadside Dog Becomes Hero
  [
    "Ek chhota sa kutta sadak ke kone par barish mein bheeg raha tha.",
    "Har din log usse dekhar nikal jaate, par ek ladki ne usse roti di.",
    "Ladki har din aati thi, vo kutta bhi uska intezaar karta tha.",
    "Ek din us ladki ko chakkar aaya aur vo gir gayi sadak par.",
    "Kutte ne chillakar logon ko bulaya... us din sabne use hero kaha."
  ],

  // 2. Skinny Dog Becomes Bodybuilder
  [
    "Gali ke sabse kamzor kutte ko sab log 'sukha' bulate the.",
    "Bade kutte use roz dhamkate aur uska khana cheen lete.",
    "Ek din vo chupchaap gym ke paas rehne laga.",
    "Teen mahine mein uska body ban gaya, sab hairaan reh gaye.",
    "Usne bully ko sirf dekha... aur vo bhaag gaya bina kuch kahe."
  ],

  // 3. Monkey Saves Orphan
  [
    "Ek chhota bacha mela mein kho gaya aur jungle tak pahunch gaya.",
    "Jungle mein use ek bandar mila, jo chupchaap use dekhta raha.",
    "Bacha ro raha tha, bandar ne uske haath mein aam rakh diya.",
    "Fir usne bache ka haath pakda aur jungle se bahar chhod aaya.",
    "Log hairaan reh gaye... kisi ne us bandar ko pehli baar salam kiya."
  ],

  // 4. Goat Wins a Race
  [
    "Gaon ke bacchon ne mazaak mein ek bakri ko race mein daal diya.",
    "Sab hans rahe the, lekin bakri ne bhaagna shuru kiya.",
    "Vo itni tez daudi ki sab kutte peeche reh gaye.",
    "Ant mein sab chillaye – 'Bakri champion hai!'",
    "Us din se gaon ke school ka mascot ban gaya – ek teekhi bakri."
  ],

  // 5. Cow Waits for Its Owner
  [
    "Har din ek budha aadmi mandir jaata tha, uski gaay gate par rukti thi.",
    "Log kehte the gaay samajhti hai mandir ka samay.",
    "Ek din budha aadmi nahi aaya... log sochne lage kuch hua kya.",
    "Gaay ne raat bhar mandir ke gate pe intezaar kiya.",
    "Agli subah log use dekh ke ro pade – wafadar ka matlab samajh aaya."
  ],

  // 6. Cat Who Paints
  [
    "Ek artist ki billi hamesha uske canvas ke paas soti thi.",
    "Ek din artist ne paint gira diya, billi ne pair se ghuma diya.",
    "Wo design itna accha tha ki artist ne use frame kar diya.",
    "Har din billi kuch na kuch naya banane lagi.",
    "Ab dono Instagram par viral hain – 'Cat the Creator'."
  ],

  // 7. Owl Saves Night Hiker
  [
    "Ek ladka jungle trail mein gum ho gaya, raat ho chuki thi.",
    "Use kuch samajh nahi aaya, sirf ek ullu ki awaaz aa rahi thi.",
    "Vo awaaz ke peeche chala... ek patli si raah mili.",
    "Us raaste ne usse highway tak pahucha diya.",
    "Vo samajh gaya – har ullu bewakoof nahi hota."
  ],

  // 8. Dog in a Police Station
  [
    "Ek bhooka kutta police station ke bahar ghus gaya.",
    "Sab log use bhagane lage, lekin ek inspector ne use roka.",
    "Kutte ne ek bag par bhonkna shuru kiya jo bench par pada tha.",
    "Bag ke andar bomb tha – sab shocked ho gaye.",
    "Us din us kutte ko medal mila – 'Sniffer by Fate'."
  ],

  // 9. Crow Who Returned a Wallet
  [
    "Ek aadmi ka wallet garden mein gir gaya, use pata bhi nahi chala.",
    "Ek kaala kauwa us wallet ke paas baith gaya.",
    "Kisi ne us kauwe ko daana diya, aur usne wallet utha liya.",
    "Kauwa ne seedha chhat par jaake wallet gira diya – wahi aadmi ka ghar tha.",
    "Usne khidki se dekha aur bola – 'Tu to asli chhupa rustam nikla!'"
  ],

  // 10. Penguin at the Mall
  [
    "Ek mall ke freezer section mein logon ne ek penguin dekha.",
    "Sab soch rahe the yeh kaise aaya... koi prank to nahi?",
    "Penguin sirf ek spot par khada tha, jaha fish fingers rakhe the.",
    "Ek bachha aaya aur bola – 'Mumma, yeh to mere cartoon jaisa hai!'",
    "Mall ne us penguin ko adopt kar liya – 'Icey the Mascot'."
  ]
];


// === Matching Backgrounds for Each Line ===
let backgrounds = [
  // Story 1: Roadside Dog
  "a lonely puppy sitting in heavy rain at a roadside under a broken streetlight",
  "a girl in school uniform feeding the puppy near a tea stall in early morning fog",
  "puppy waiting happily on the same spot under bright sunlight",
  "the girl fainting while crossing the road, puppy barking loudly",
  "a crowd gathered, puppy by girl's side, warm emotional sunlight shining",

  // Story 2: Skinny Dog
  "a malnourished street dog hiding behind a dustbin as others bully him",
  "larger dogs snatching food while he watches silently",
  "the skinny dog watching a gym from outside with determination",
  "muscular dog in spotlight inside gym, others watching shocked",
  "dog staring down bully, who is nervously walking away",

  // Story 3: Monkey saves kid
  "a lost child in forest crying near a muddy trail at dusk",
  "a monkey watching curiously from a branch above",
  "the monkey offering a mango to the child",
  "the monkey holding child's hand leading out of jungle",
  "villagers seeing monkey and kid arrive together",

  // Story 4: Goat Race
  "children tying a ribbon on a goat at the village starting line",
  "goat running wildly ahead while dogs and kids follow behind",
  "villagers watching goat with shocked expressions",
  "goat crossing finish line made of colored cloth",
  "children lifting the goat and placing flower garland on it",

  // Story 5: Devoted Cow
  "an old man tying his cow outside a village temple at sunrise",
  "cow waiting calmly at temple gate as people walk by",
  "cow standing alone at night, looking toward temple gate",
  "villagers whispering as cow still waits next morning",
  "emotional crowd around cow, light filtering through trees",

  // Story 6: Artistic Cat
  "a fluffy cat sleeping next to a messy paint-covered canvas",
  "spilled paint on floor with cat's pawprints in colors",
  "cat pawing the canvas while artist watches surprised",
  "a framed abstract painting with cat on shelf below",
  "camera flash, people clicking pictures of cat-painter duo",

  // Story 7: Owl Guide
  "a teenager walking in forest at night with flashlight",
  "an owl on branch hooting with glowing eyes",
  "a narrow forest path illuminated by moonlight",
  "boy exiting forest trail to a highway road",
  "boy turning back to see owl fly away into darkness",

  // Story 8: Dog at Police Station
  "a hungry dog sitting at gate of police station",
  "officers chasing dog, but one stops them",
  "dog sniffing a suspicious bag left on bench",
  "bomb squad arriving after officer opens the bag",
  "dog getting medal from inspector in small ceremony",

  // Story 9: Wallet Crow
  "a leather wallet lying in the grass near park bench",
  "a black crow standing next to it watching people",
  "a child giving bread to the crow near the wallet",
  "crow flying with wallet and dropping it on a rooftop",
  "a man looking out window holding same wallet in shock",

  // Story 10: Penguin in Mall
  "a penguin standing in front of freezer shelves in supermarket",
  "shoppers staring at the penguin in disbelief",
  "penguin waddling to fish fingers section calmly",
  "a child pointing and laughing, holding a penguin plushie",
  "mall staff putting up a 'Welcome Icey' sign near entrance"
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
