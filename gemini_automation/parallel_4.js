const storiesData = [
  // 1. Faceless thief betrayal
  [
    { line: "Faceless thief ne friend ke ghar chori ki", background: "A faceless man in black hoodie stealing gold in dim house lighting" },
    { line: "Woh friend usse bhai manta tha", background: "Faceless man with scar on neck hugging another faceless man under streetlamp" },
    { line: "Friend bola: ‘Tujhpe bharosa kiya tha’", background: "Faceless betrayed man standing in broken house, rain outside" },
    { line: "Thief bola: ‘Duniya ne mujhe kab pyar diya?’", background: "Faceless thief crying while holding loot bag" },
    { line: "Police ne thief ko pakad liya", background: "Faceless cop in brown trenchcoat putting cuffs on thief" },
    { line: "Friend ne bola: ‘Aansu bhi chori wale the’", background: "Faceless man looking away while thief gets into police van" },
    { line: "Thief sirf ek line chhod gaya: ‘Mujhe maaf mat karna’", background: "Empty jail cell, graffiti on wall with line in yellow text" }
  ],

  // 2. Crow Mafia
  [
    { line: "Ek kaala crow jungle ka mafia tha", background: "Black crow with red eyes wearing tiny leather jacket on a skull throne" },
    { line: "Sab usse ‘Don Kauwa’ bolte the", background: "Crows bowing to a single crow on powerline, city smog behind" },
    { line: "Ek nayi chidiya ne uska business bigaad diya", background: "Colorful bird in sunglasses stealing food from crow gang" },
    { line: "Crow bola: ‘Ab toh jung hogi’", background: "Don crow with claw raised in shadowy den" },
    { line: "Chidiya ready thi: ‘Main pyaar nahi, jung laayi hoon’", background: "Confident bird with tiny weapon on rooftop" },
    { line: "Aakhri fight mein crow haar gaya", background: "Crow falling off perch, blood moon in background" },
    { line: "Chidiya ab naye gang ki rani hai", background: "Bird with gold chain, crows saluting" }
  ],

  // 3. Faceless girl with dark past
  [
    { line: "Faceless ladki jungle ke kone mein rehti thi", background: "Faceless girl in tattered red hoodie sitting alone by fire" },
    { line: "Sab kehte: ‘Woh sabko dekhti rehti hai’", background: "Animals watching from behind trees as girl stares blankly" },
    { line: "Uski aankhon mein purani aag thi", background: "Faceless girl’s eyes glowing faint yellow under hood" },
    { line: "Ek din usne poore jungle ko jala diya", background: "Flames rising as girl walks away, no face visible" },
    { line: "Kisi ne nahi dekha kab usne kaha: ‘Mujhe yaad tha’", background: "Ashes forming words in air, girl gone" },
    { line: "Ek nayi jungle mein, woh phir dekhi gayi", background: "Girl watching new town from cliff, under clouds" },
    { line: "Sab dar rahe hain... kyunki abhi kuch baki hai", background: "Dark forest with faceless shadow in center" }
  ],

  // 4. Hacker Sloth
  [
    { line: "Sloth pura din sirf computer pe hota", background: "Sloth in glasses, fingers on keyboard, surrounded by green code" },
    { line: "Sab kehte: ‘Itna slow, kya karega ye?’", background: "Other animals laughing while sloth types slowly" },
    { line: "Par uske codes ne bank loot liya", background: "Sloth’s face lit by monitor, bank vaults exploding on screen" },
    { line: "Jungle cybercell ne investigation shuru ki", background: "Faceless squirrel in detective coat checking wires" },
    { line: "Sloth bola: ‘Mujhe mat underestimate karo’", background: "Sloth smirking, arms crossed, blue light behind" },
    { line: "Uska face kabhi CCTV mein nahi aaya", background: "Empty chair spinning, monitors blacked out" },
    { line: "Bas ek USB mila: naam likha tha ‘Lag’", background: "Closeup of USB plugged in with fire around" }
  ],

  // 5. Monkey stuntman
  [
    { line: "Monkey faceless tha, par daring tha", background: "Faceless monkey leaping through fire ring in circus" },
    { line: "Sab kehte: ‘Tu gira toh bachega nahi’", background: "Monkey on tightrope above sharp spikes" },
    { line: "Usne har stunt bina shikayat kiya", background: "Monkey flying mid-air with cape, spotlight on" },
    { line: "Ek din woh gira... sab chup ho gaye", background: "Monkey lying broken, mask half burnt" },
    { line: "Doctor bola: ‘Spine fracture... career khatam’", background: "Faceless doctor looking at x-ray in darkness" },
    { line: "Par monkey wapas aaya, crowd mein roar hua", background: "Monkey walking again on ramp slowly" },
    { line: "Usne bola: ‘Stunt nahi, zindagi meri pehchaan hai’", background: "Monkey silhouette in spotlight, fists up" }
  ],

  // 6. Black cat con artist
  [
    { line: "Ek kaali billi sabko trick karti thi", background: "Black cat with golden eyes and red scarf near fortune booth" },
    { line: "Sab ke paisa, future reading mein chala jata", background: "Forest animals giving gold to cat under mystic tent" },
    { line: "Fox bola: ‘Mujhe shak hai ispe’", background: "Fox watching from behind tree with binoculars" },
    { line: "Billi bola: ‘Sach dard deta hai’", background: "Cat with tarot cards scattered in wind" },
    { line: "Ek raat fox ne tent tod diya", background: "Fox standing among broken props and candles" },
    { line: "Andar koi nahi tha... bas ek note", background: "Note saying 'Tumhara time waste ho gaya'" },
    { line: "Tab se jungle mein sab ‘future’ se darte hain", background: "Black cat silhouette walking under eclipse" }
  ],

  // 7. Orphan boy turned sniper (faceless)
  [
    { line: "Ek faceless ladka orphan tha", background: "Faceless boy with hood sitting near rubble with broken toy" },
    { line: "Woh chupke shooting seekhta raha", background: "Boy using slingshot on bottles in alley" },
    { line: "Ek din jungle ke don ne use recruit kiya", background: "Boy shaking hands with shadowy figure" },
    { line: "Ab woh sniper ban gaya", background: "Boy aiming rifle from rooftop, faceless and focused" },
    { line: "Sab bolte: ‘Killer ka chehra nahi hota’", background: "Animals looking scared at distant shadow with scope glint" },
    { line: "Ek din usne orphanage wapas aake raksha ki", background: "Boy defending orphanage against attackers" },
    { line: "Usne bola: ‘Main sirf revenge nahi... purpose bhi hoon’", background: "Boy standing with sniper slung, sun behind" }
  ],

  // 8. Crocodile’s fake love trap
  [
    { line: "Crocodile ne jungle ki sabse cute frog ko propose kiya", background: "Stylish crocodile with rose and tux near lily pond" },
    { line: "Frog bola: ‘Pyaar dikhawa lagta hai’", background: "Innocent frog looking confused" },
    { line: "Croc bola: ‘Mujhe badalne ka moka de’", background: "Croc with fake tears under full moon" },
    { line: "Frog maan gaya... shaadi fix hui", background: "Jungle decorated with leaves, frog nervous" },
    { line: "Shaadi ke din crocodile usse kha gaya", background: "Frog missing, crocodile with wine glass" },
    { line: "Sab shocked the... crocodile hamesha smile karta hai", background: "Crocodile on throne, frog crown on table" },
    { line: "Sab kehte: ‘Pyaar se zyada darr karo smile se’", background: "Jungle sign board with 'Beware of charming crocodiles'" }
  ],

  // 9. Lame dog revenge
  [
    { line: "Dog ka ek pair weak tha", background: "Dog with bandaged leg looking at fast runners" },
    { line: "Sab kehte: ‘Race ka kya karega tu?’", background: "Other dogs laughing at start line" },
    { line: "Usne training ki... silence mein", background: "Dog running alone at night with moonlight" },
    { line: "Race din, sab shocked the", background: "Dog with metal brace leading race" },
    { line: "Dog jeet gaya", background: "Crowd cheering, medal on dog’s neck" },
    { line: "Ek bully bola: ‘Kaise kiya tu?’", background: "Bully panting behind dog" },
    { line: "Dog bola: ‘Taqat pair mein nahi, iraade mein thi’", background: "Dog smiling with medal under golden light" }
  ],

  // 10. Garbage man turns superhero (faceless)
  [
    { line: "Ek faceless garbage man sadak pe kaam karta tha", background: "Faceless man with glowing gloves picking trash at night" },
    { line: "Sab usse ignore karte the", background: "People walking past him, rain falling" },
    { line: "Ek din usne toxic chemical chhoo liya", background: "Barrel glowing green, garbage man falling back" },
    { line: "Uske haath se ab light nikalti thi", background: "Man discovering glowing energy in hands" },
    { line: "Usne sabki city clean kar di", background: "Skyline glowing, garbage gone, man flying" },
    { line: "Sab usse ‘Cleanup Ghost’ kehte hain", background: "Shadow of him projected in sky with moon behind" },
    { line: "Par koi nahi jaanta... uska chehra kaisa hai", background: "Closeup of mask left behind on garbage bin" }
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
