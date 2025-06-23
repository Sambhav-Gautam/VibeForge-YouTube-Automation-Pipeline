let stories = [
  // 1. Cheating Cat
  [
    "Ek din chupke se billi bandar ke saath coffee pe gayi.",
    "Usi billi ne next week mor ke saath jungle mein photo share kiya.",
    "Billa ne dekh ke bola, 'Yeh kya chal raha hai?'",
    "Billi ne innocent look de ke kaha, 'Bas dosti nibhayi thi.'",
    "Jungle ke animals sab hansne lage.",
    "Billa ne kaha, 'Next episode mein main bhi star banoonga.'",
    "Jungle mein sab bola, 'Story aur masaledaar hone wali hai!'"
  ],
  // 2. Cheating Bird
  [
    "Ek din parrot crow ke saath secret meeting mein gaya.",
    "Parrot aur crow milke farmer ke fields se dal chura rahe the.",
    "Ek din sparrow ne rooftop se unki photo le li.",
    "Parrot ne us photo par bola, 'Bas research kar raha tha!'",
    "Crow ne wink kiya, sparrow hairan ho gaya.",
    "Farmer ne photo share kiya, village mein viral ho gaya.",
    "Ab sparrow soch raha, 'Next time main bhi spy banunga!'"
  ],
  // 3. Bully Breaks Toy
  [
    "Bunty ro raha tha kyunki bully Rohan ne uska Easter egg tod diya.",
    "Bunty ka chacha bola, 'Seekh leta hai tu.'",
    "Bunty ne kachra se recycling karke naya toy banaya.",
    "Usne colourful patchwork toy school le gaya.",
    "Sab classmates impressed hue.",
    "Rohan ne chupchaap clap kiya.",
    "Bunty bola, 'Todna aasan hai… banana badi baat hai!'"
  ],
  // 4. Innocent Becomes Villain
  [
    "Gaon ka seedha ladka Vikas ek jhoot se badal gaya.",
    "Sab ne usko naam diya, 'Chhote Sher', kyunki usne dark gang join ki.",
    "Vikas ne apni identity badal kar Shadow ban gaya.",
    "Jab policemen ne Shadow ka poster lagaya, sab horror mein ho gaye.",
    "Ek raat Shadow jungle mein mission par gaya.",
    "Usne socha, 'Yeh power acchi hai.'",
    "Shadow ab seedha Vikas ke samne bhi dentist nahi jaata."
  ],
  // 5. Failure to IAS
  [
    "Arun ke ghar mein paise nahi the, fees adhoori thi.",
    "Ek raat lamp ke neeche usne apni mehnat ki shuruaat ki.",
    "Library mein raat din padhai karta raha.",
    "Result aaya, Arun ne top kiya!",
    "Village mein kaliyan khilengi, sabne milke welcome kiya.",
    "Ab wo IAS hai, sab ke dil mein garv hai.",
    "Arun bola, 'Mehnat ka show must go on!'"
  ],
  // 6. Skinny Dog -> Hero
  [
    "Street dog patla tha, tea stall ke paas rehta tha.",
    "Bullies roz use tang karte, khana cheente.",
    "Ek raat wo gym ke bahar so gaya, sapne mein body dekhi.",
    "Subah se usne tire kheenchna aur push-ups start kiye.",
    "Mahine guzre, wo muscular ho gaya, same torn collar pehenta.",
    "Bullies ko dekhte hi sab runway kar gaye.",
    "Patla kutta bola, 'Himmat se hero banta hai!'"
  ],
  // 7. Fat Bear Redemption
  [
    "Motu bhalu ko jungle mein sab tease karte the.",
    "Usne exercise shuru ki, rope swing aur log lift kiye.",
    "Ek crocodile ne pit organize kiya, sab bhaag gaye.",
    "Motu akela pit mein gaya aur jeet gaya.",
    "Sab cheering mein laut aaye.",
    "Motu bola, 'Fitness ka reply courtesy bhi doonga!'",
    "Jungle mein Motu ab hero tha."
  ],
  // 8. Goat Cheats
  [
    "Ek white goat ne mor ke saath dance kiya.",
    "Mor ne Instagram pe share kiya, sab grids me comments aaye.",
    "Goat ne billa se kaha, 'Bas mood tha.'",
    "Jungle influencers sab dance karo dance bola.",
    "Goat ne Crown pehna, sabne follow kiya.",
    "Sab bole, 'Style se karo, world dekh legi!'",
    "Goat ab jungle ki star thi."
  ],
  // 9. Owl Guides Bully
  [
    "Bully ladka Karan sad girl pe rubby missal mar raha tha.",
    "Ullu zor se hoot karke rasta dikhane laga.",
    "Karan helpline se raha gaya aur sorry bola.",
    "Girl muskurai, sab thankful hue.",
    "Karan samjha, sabka dil jeetna zaroori hai.",
    "Ullu swag mein ghoom raha hai jungle ke sheher mein.",
    "Sab bole, 'Ullu ne dil jeet liya!'"
  ],
  // 10. Tiger and Rabbit
  [
    "Ek rabbit jungle mein khush khana search karta tha.",
    "Tiger ne socha, 'Aaj giraffe nahi, rabbit khaunga.'",
    "Rabbit ne tiger ke saamne apna cute dance dikhaya.",
    "Tiger giggle karne laga, usne dance join kiya.",
    "Jungle mein dance party hogayi, sab replicate kar rahe the.",
    "Tiger bola, 'Kindness aur dance mein dum hai!'",
    "Rabbit aur tiger dost ban gaye."
  ]
];

let backgrounds = [
  // Story 1: Cheating Cat (Safe)
  "a grey cat and a red cat sitting on a velvet cushion in a living room with warm lamp light, red cat looking shocked as grey cat sips coffee with a monkey on a garden bench under twilight stars",
  "a stealthy grey cat sitting secretly with a mischievous monkey holding tiny coffee cups in a lush garden with fairy lights during evening glow",
  "a grey cat posing elegantly next to a colourful peacock in a golden-hour jungle clearing with soft mist and vibrant flowers",
  "a red cat confronting a grey cat dramatically in a cozy living room with bookshelf backdrop under warm golden lights",
  "a grey cat sitting innocently with folded paws under a dim spotlight in a living room with wooden floors and a crackling fireplace",
  "a grey cat and peacock in a jungle clearing with birds and monkeys in background, grey cat blushing and peacock flapping wings under sunset hues",
  "a red cat holding a tiny camera tripod in a cozy living room, planning a jungle vlog under soft lighting with a rustic table",

  // Story 2: Cheating Bird (Modified Line 2)
  "a bright green parrot whispering to a black crow beside a cornfield under early morning sun with golden rays filtering through stalks",
  "a parrot and crow collecting fallen corn cobs with farmer’s permission near a field edge under moonlight with a starry sky and rustling leaves",
  "a sparrow perched on a rooftop holding a tiny camera looking at parrot and crow meeting secretively in a farmyard at dawn",
  "indoor scene with the parrot looking innocent and the sparrow showing a photo, wooden floor and soft window light streaming through curtains",
  "parrot and crow acknowledging the sparrow while standing in a farm courtyard, soft sunset breeze with hay bales in background",
  "farmer showing village animals a printed photo of parrot and crow in the farm under evening lantern lights with a rustic barn",
  "sparrow dressed as a spy with a tiny trench coat perched on a fence in twilight with a village skyline in the distance",

  // Story 3: Bully Breaks Toy (Modified Line 1)
  "a small anthropomorphic bunny looking sad beside a broken Easter egg in a vibrant schoolyard with colorful swings and slides under bright daylight",
  "a wise old bunny uncle comforting a young bunny in a cozy burrow with wooden furniture and warm lantern light",
  "a young bunny crafting a patchwork toy from recycled materials in a sunny backyard with scattered tools and colorful scraps",
  "a young bunny proudly showing a colorful patchwork toy in a lively classroom with chalkboards and desks under soft sunlight",
  "classmate bunnies clapping for a young bunny in a cheerful school courtyard with balloons and streamers under a clear blue sky",
  "a rival bunny clapping quietly in a schoolyard with other bunnies cheering, soft evening light casting long shadows",
  "a young bunny standing tall in a vibrant schoolyard, holding a patchwork toy under golden sunset with proud classmates around",

  // Story 4: Innocent Becomes Villain (Modified Lines 2, 3, 5, 7)
  "a young fox in simple clothes standing in a quiet village square with mud houses and a setting sun casting long shadows",
  "a fox nicknamed 'Chhote Sher' walking with a group of adventurous friends in a misty jungle path under eerie moonlight",
  "a mysterious fox named Shadow in a hooded cloak standing in a quiet forest clearing with glowing fireflies and foggy air",
  "village animals staring at a poster of Shadow on a wooden board in a bustling market under harsh midday sun",
  "Shadow the fox exploring a dense jungle at night with glowing eyes of animals watching from the trees",
  "Shadow the fox standing confidently on a rocky cliff under stormy clouds with lightning illuminating its silhouette",
  "Shadow the fox planning in a cozy forest hideout with maps and lanterns, lit by a single candle's flickering flame",

  // Story 5: Failure to IAS (Safe, but clarify anthropomorphic for safety)
  "a young anthropomorphic mouse studying under a dim lamp in a small mud house with cracked walls and a starry night visible through a window",
  "a young mouse reading books late at night in a quiet village library with wooden shelves and soft moonlight streaming in",
  "a young mouse writing notes in a crowded library with other animal students, sunlight filtering through dusty windows",
  "a young mouse celebrating with a result paper in hand in a vibrant village square with colorful banners and cheering animal crowd",
  "village animals welcoming a young mouse with flower garlands in a festive village under golden evening light",
  "a proud mouse IAS officer in uniform standing in a village courtyard with smiling animals and blooming flowers",
  "a mouse IAS officer speaking to inspired animal kids in a sunny village schoolyard with chalkboards and green fields",

  // Story 6: Skinny Dog -> Hero (Modified Line 2)
  "a skinny dog curled up near a bustling tea stall with steaming kettles and colorful umbrellas under morning sun",
  "rival dogs playfully challenging a skinny dog near a tea stall with scattered food scraps and a busy street in the background",
  "a skinny dog dreaming of muscles while sleeping outside a gym under starry night with neon gym signs",
  "a skinny dog pulling tires and doing push-ups in a dusty alley with old crates and morning mist",
  "a muscular dog with a torn collar strutting in a busy market street under golden afternoon light",
  "rival dogs running away from a muscular dog in a lively street with vendors and colorful stalls",
  "a muscular dog standing proudly in a sunny market square with admiring street animals around",

  // Story 7: Fat Bear Redemption (Modified Line 4)
  "a chubby bear being teased in a jungle clearing with lush greenery and laughing animals under bright daylight",
  "a chubby bear swinging on a rope and lifting logs in a forest gym with vines and sunlight filtering through trees",
  "a crocodile announcing a friendly wrestling match in a swampy jungle with reeds and misty water under dramatic sunset",
  "a chubby bear competing bravely in a jungle wrestling arena with cheering animals and torchlight in the dark",
  "animals cheering for a chubby bear in a vibrant jungle clearing with colorful flowers and moonlight",
  "a fit bear flexing muscles in a forest gym with proud friends under golden morning light",
  "a hero bear leading a jungle fitness class in a sunny clearing with animals exercising and vines",

  // Story 8: Goat Cheats (Safe)
  "a white goat dancing with a peacock in a vibrant jungle meadow with colorful flowers and soft sunlight",
  "a peacock posting a dance video on a jungle tree platform with glowing screens and cheering animals",
  "a white goat talking to a cat in a cozy jungle hut with wooden floors and warm lantern light",
  "jungle animals dancing in a lively clearing with streamers and music under starry night",
  "a white goat wearing a crown in a festive jungle square with cheering animals and colorful banners",
  "a stylish goat posing in a jungle meadow with influencers filming under golden sunset",
  "a star goat strutting in a jungle runway with flashing lights and adoring fans",

  // Story 9: Owl Guides Bully (Modified Line 1)
  "a mischievous young owl playfully teasing a sad squirrel in a jungle schoolyard with tall trees and soft morning mist",
  "an owl hooting loudly from a tree branch in a moonlit jungle with glowing eyes and rustling leaves",
  "a young owl apologizing to a squirrel in a quiet jungle clearing with soft sunlight and blooming flowers",
  "a smiling squirrel with thankful animals in a vibrant jungle schoolyard with chalkboards and swings",
  "a reformed young owl helping others in a sunny jungle village with mud huts and green fields",
  "a cool owl strutting in a jungle city with neon lights and bustling animal crowds",
  "an owl being cheered by animals in a festive jungle square with lanterns and starry skies",

  // Story 10: Tiger and Rabbit (Safe)
  "a happy rabbit foraging in a lush jungle with colorful mushrooms and soft morning light",
  "a tiger stalking a rabbit in a dense jungle with shadows and sunlight filtering through tall trees",
  "a rabbit dancing cutely in a jungle clearing with a surprised tiger watching under golden sunlight",
  "a tiger laughing and joining a rabbit’s dance in a vibrant jungle clearing with colorful flowers",
  "a dance party with animals in a jungle square with music and glowing fireflies under starry night",
  "a tiger and rabbit posing together in a sunny jungle meadow with adoring animals around",
  "a tiger and rabbit leading a dance class in a lively jungle clearing with vines and cheering friends"
];

// === Full Automation Logic ===
let storyIndex = 0, lineIndex = 0, delay = 23000;

function getPrompt(sIndex, lIndex) {
  const line = stories[sIndex][lIndex];
  const background = backgrounds[sIndex * 7 + lIndex];
  return `Create a 9:16 vertical cinematic image. **Compulsorily include the following text in bold yellow font, clearly visible and integrated into the scene: "${line}"**. Do not omit or alter the text under any circumstances.\n\nScene: ${background}\n\nMake each prompt self-contained, no context assumed. No human faces. Use emotional cinematic lighting.`;
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
  if (storyIndex >= stories.length) return console.log("All done!");
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

console.log("🚀 Starting 10-story stateless Hinglish automation...");
submitPrompt();