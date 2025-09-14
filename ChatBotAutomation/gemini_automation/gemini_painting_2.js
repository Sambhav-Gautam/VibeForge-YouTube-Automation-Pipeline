// ===== CONFIG ===== //
const PAINTING_PROMPTS = [
  "Generate a 9:16 vertical image of a lone wolf howling in a twilight savanna under a vibrant, textured sky, surrounded by whispering grasses. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a serene beach at sunset with gentle waves lapping at the shore and a colorful sky. Paint it in oil with bold brushstrokes, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a sleek modern frame.",
  "Generate a 9:16 vertical image of a vibrant cityscape at dusk with glowing skyscraper lights and bustling streets. Paint it in acrylic with dynamic textures, emphasizing pop art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a minimalist metal frame.",
  "Generate a 9:16 vertical image of a majestic mountain range under a starry night sky with soft clouds. Paint it in watercolor with delicate gradients, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a classic ornate frame.",
  "Generate a 9:16 vertical image of an abstract composition with swirling colors and bold shapes, evoking emotional depth. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a simple black frame.",
  "Generate a 9:16 vertical image of a cozy dog curled up by a fireplace in a warm living room. Paint it in oil with rich textures, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a tranquil forest with sunlight filtering through tall trees. Paint it in acrylic with vibrant colors, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a natural wood frame.",
  "Generate a 9:16 vertical image of a playful cat lounging on a sunlit windowsill with flowers. Paint it in watercolor with soft details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a delicate white frame.",
  "Generate a 9:16 vertical image of a semi-abstract ocean wave crashing against rocks under a stormy sky. Paint it in oil with bold strokes, emphasizing modern art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a sleek silver frame.",
  "Generate a 9:16 vertical image of a colorful flower garden in full bloom under a bright blue sky. Paint it in acrylic with lively textures, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a vintage gold frame.",
  "Generate a 9:16 vertical image of a lone sailboat on a calm sea at sunrise with pastel hues. Paint it in oil with smooth blending, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a nautical blue frame.",
  "Generate a 9:16 vertical image of an urban street scene with neon signs and reflections after rain. Paint it in acrylic with vivid colors, emphasizing pop art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a bold red frame.",
  "Generate a 9:16 vertical image of a peaceful countryside with rolling hills and grazing sheep. Paint it in watercolor with soft gradients, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic barnwood frame.",
  "Generate a 9:16 vertical image of an abstract geometric pattern with vibrant reds and blues. Paint it in acrylic with sharp edges, emphasizing modern art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a minimalist black frame.",
  "Generate a 9:16 vertical image of a majestic lion resting in the savanna under a golden sunset. Paint it in oil with rich textures, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a luxurious gold frame.",
  "Generate a 9:16 vertical image of a misty lake surrounded by autumn trees in vibrant hues. Paint it in acrylic with bold strokes, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a warm oak frame.",
  "Generate a 9:16 vertical image of a bustling farmers market with colorful stalls and people. Paint it in watercolor with lively details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a cheerful yellow frame.",
  "Generate a 9:16 vertical image of a semi-abstract city skyline with vibrant lights and shapes. Paint it in acrylic with dynamic textures, emphasizing modern art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a sleek chrome frame.",
  "Generate a 9:16 vertical image of a serene meadow with wildflowers under a soft morning sky. Paint it in oil with delicate blending, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a natural pine frame.",
  "Generate a 9:16 vertical image of a playful puppy chasing a butterfly in a sunny field. Paint it in acrylic with vibrant colors, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a charming white frame.",
  "Generate a 9:16 vertical image of a dramatic seascape with crashing waves and stormy clouds. Paint it in oil with bold textures, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a dark navy frame.",
  "Generate a 9:16 vertical image of an abstract composition with flowing lines and warm tones. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a simple black frame.",
  "Generate a 9:16 vertical image of a tranquil river winding through a lush forest. Paint it in watercolor with soft gradients, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a natural wood frame.",
  "Generate a 9:16 vertical image of a vibrant sunset over a desert with cacti and dunes. Paint it in oil with rich colors, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a cozy coffee shop interior with warm lighting and patrons. Paint it in acrylic with lively textures, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a modern black frame.",
  "Generate a 9:16 vertical image of a semi-abstract forest with glowing light filtering through trees. Paint it in acrylic with bold strokes, emphasizing modern art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a sleek silver frame.",
  "Generate a 9:16 vertical image of a charming village street with cobblestones and flowers. Paint it in watercolor with delicate details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a vintage white frame.",
  "Generate a 9:16 vertical image of a powerful stallion galloping across a misty plain. Paint it in oil with dynamic textures, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a classic black frame.",
  "Generate a 9:16 vertical image of an abstract composition with bold geometric shapes and vibrant colors. Paint it in acrylic with sharp edges, emphasizing pop art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a bright red frame.",
  "Generate a 9:16 vertical image of a peaceful harbor with boats and a colorful sunset. Paint it in oil with smooth blending, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a nautical blue frame.",
  "Generate a 9:16 vertical image of a vibrant still life with fruits and flowers on a table. Paint it in acrylic with rich textures, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a classic gold frame.",
  "Generate a 9:16 vertical image of a bustling city street with colorful signs and crowds. Paint it in watercolor with lively details, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a modern chrome frame.",
  "Generate a 9:16 vertical image of a serene mountain lake with clear reflections and soft clouds. Paint it in oil with delicate blending, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a natural oak frame.",
  "Generate a 9:16 vertical image of an abstract swirl of colors evoking a stormy sea. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a sleek black frame.",
  "Generate a 9:16 vertical image of a cheerful dog running through a sunny park. Paint it in watercolor with vibrant details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a playful white frame.",
  "Generate a 9:16 vertical image of a tranquil beach with palm trees and gentle waves. Paint it in oil with rich colors, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a tropical green frame.",
  "Generate a 9:16 vertical image of a vibrant urban mural with bold graffiti and colors. Paint it in acrylic with dynamic textures, emphasizing pop art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a bold yellow frame.",
  "Generate a 9:16 vertical image of a quiet forest path with dappled sunlight. Paint it in watercolor with soft gradients, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a natural pine frame.",
  "Generate a 9:16 vertical image of a majestic eagle soaring over a rugged mountain. Paint it in oil with bold textures, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an abstract composition with soft pastels and flowing shapes. Paint it in acrylic with smooth textures, emphasizing modern art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a minimalist white frame.",
  "Generate a 9:16 vertical image of a cozy cabin in a snowy forest under a starry sky. Paint it in oil with rich details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a warm oak frame.",
  "Generate a 9:16 vertical image of a vibrant market scene with colorful spices and textiles. Paint it in acrylic with lively textures, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a bright orange frame.",
  "Generate a 9:16 vertical image of a semi-abstract sunset with bold colors and fluid shapes. Paint it in acrylic with dynamic strokes, emphasizing modern art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a sleek silver frame.",
  "Generate a 9:16 vertical image of a peaceful riverbank with willows and soft sunlight. Paint it in watercolor with delicate details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a natural wood frame.",
  "Generate a 9:16 vertical image of a playful kitten with a ball of yarn in a cozy room. Paint it in oil with rich textures, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a charming white frame.",
  "Generate a 9:16 vertical image of a dramatic cityscape with towering skyscrapers at night. Paint it in acrylic with bold contrasts, emphasizing pop art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a modern black frame.",
  "Generate a 9:16 vertical image of a serene meadow with grazing deer under a soft sky. Paint it in watercolor with gentle gradients, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic pine frame.",
  "Generate a 9:16 vertical image of an abstract composition with vibrant greens and blues. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a simple black frame.",
  "Generate a 9:16 vertical image of a vibrant seascape with dolphins leaping from waves. Paint it in oil with dynamic textures, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a nautical blue frame.",
  "Generate a 9:16 vertical image of a cozy bookstore interior with warm lighting and bookshelves. Paint it in acrylic with rich details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a classic mahogany frame.",
  "Generate a 9:16 vertical image of a semi-abstract mountain range with bold colors and shapes. Paint it in acrylic with dynamic strokes, emphasizing modern art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a sleek chrome frame.",
  "Generate a 9:16 vertical image of a vibrant autumn forest with falling leaves. Paint it in oil with rich colors, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a warm oak frame.",
  "Generate a 9:16 vertical image of a bustling harbor with colorful boats and reflections. Paint it in watercolor with lively details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a nautical white frame.",
  "Generate a 9:16 vertical image of an abstract composition with bold reds and yellows. Paint it in acrylic with sharp textures, emphasizing pop art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a vibrant red frame.",
  "Generate a 9:16 vertical image of a serene countryside with a windmill and golden fields. Paint it in oil with soft blending, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic barnwood frame.",
  "Generate a 9:16 vertical image of a playful dog fetching a ball in a sunny park. Paint it in watercolor with vibrant details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a cheerful yellow frame.",
  "Generate a 9:16 vertical image of a dramatic sunset over a calm ocean with soft clouds. Paint it in acrylic with bold strokes, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a sleek silver frame.",
  "Generate a 9:16 vertical image of a vibrant urban scene with street musicians and crowds. Paint it in acrylic with lively textures, emphasizing pop art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a bold black frame.",
  "Generate a 9:16 vertical image of a tranquil lake with lotus flowers and soft sunlight. Paint it in watercolor with delicate gradients, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a natural pine frame.",
  "Generate a 9:16 vertical image of a majestic tiger stalking through a lush jungle. Paint it in oil with rich textures, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a luxurious gold frame.",
  "Generate a 9:16 vertical image of an abstract composition with soft blues and flowing lines. Paint it in acrylic with smooth textures, emphasizing modern art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a minimalist white frame.",
  "Generate a 9:16 vertical image of a cozy village square with a fountain and flowers. Paint it in watercolor with lively details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a vintage white frame.",
  "Generate a 9:16 vertical image of a vibrant still life with a vase of sunflowers. Paint it in oil with rich colors, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a classic gold frame.",
  "Generate a 9:16 vertical image of a semi-abstract cityscape with neon lights and reflections. Paint it in acrylic with bold contrasts, emphasizing pop art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a modern chrome frame.",
  "Generate a 9:16 vertical image of a peaceful meadow with a single tree under a soft sky. Paint it in watercolor with gentle gradients, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a natural oak frame.",
  "Generate a 9:16 vertical image of a playful cat napping in a sunny garden. Paint it in oil with rich details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a charming white frame.",
  "Generate a 9:16 vertical image of a dramatic seascape with a lighthouse and stormy waves. Paint it in acrylic with bold textures, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a dark navy frame.",
  "Generate a 9:16 vertical image of an abstract composition with vibrant oranges and purples. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a simple black frame.",
  "Generate a 9:16 vertical image of a tranquil forest stream with mossy rocks. Paint it in watercolor with soft details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a natural wood frame.",
  "Generate a 9:16 vertical image of a vibrant desert oasis with palm trees and a sunset. Paint it in oil with rich colors, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a cozy café scene with patrons and warm lighting. Paint it in acrylic with lively textures, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a modern black frame.",
  "Generate a 9:16 vertical image of a semi-abstract ocean wave with vibrant blues and whites. Paint it in acrylic with dynamic strokes, emphasizing modern art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a sleek silver frame.",
  "Generate a 9:16 vertical image of a vibrant flower market with colorful stalls. Paint it in watercolor with lively details, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a bright orange frame.",
  "Generate a 9:16 vertical image of a majestic bear fishing in a rushing river. Paint it in oil with bold textures, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an abstract composition with bold yellows and greens. Paint it in acrylic with sharp textures, emphasizing pop art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a vibrant yellow frame.",
  "Generate a 9:16 vertical image of a serene coastal village with colorful houses. Paint it in watercolor with delicate details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a nautical white frame.",
  "Generate a 9:16 vertical image of a vibrant sunrise over a rolling vineyard. Paint it in oil with rich colors, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a classic gold frame.",
  "Generate a 9:16 vertical image of a bustling city park with joggers and trees. Paint it in acrylic with lively textures, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a modern green frame.",
  "Generate a 9:16 vertical image of a semi-abstract forest with vibrant greens and yellows. Paint it in acrylic with bold strokes, emphasizing modern art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a sleek chrome frame.",
  "Generate a 9:16 vertical image of a tranquil beach with seashells and gentle waves. Paint it in watercolor with soft gradients, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a tropical blue frame.",
  "Generate a 9:16 vertical image of a playful puppy in a sunny meadow with flowers. Paint it in oil with rich details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a cheerful white frame.",
  "Generate a 9:16 vertical image of a dramatic mountain peak with snow and a vibrant sky. Paint it in acrylic with bold textures, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic pine frame.",
  "Generate a 9:16 vertical image of an abstract composition with flowing reds and blues. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a simple black frame.",
  "Generate a 9:16 vertical image of a cozy farm scene with a barn and grazing cows. Paint it in watercolor with soft details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic barnwood frame.",
  "Generate a 9:16 vertical image of a vibrant urban skyline with colorful lights at dusk. Paint it in acrylic with dynamic contrasts, emphasizing pop art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a bold red frame.",
  "Generate a 9:16 vertical image of a serene lake with a dock and soft morning mist. Paint it in oil with delicate blending, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a natural oak frame.",
  "Generate a 9:16 vertical image of a playful cat chasing a feather in a cozy room. Paint it in watercolor with vibrant details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a charming white frame.",
  "Generate a 9:16 vertical image of a dramatic seascape with a stormy sky and crashing waves. Paint it in oil with bold textures, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a dark navy frame.",
  "Generate a 9:16 vertical image of an abstract composition with vibrant purples and yellows. Paint it in acrylic with sharp textures, emphasizing pop art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a vibrant yellow frame.",
  "Generate a 9:16 vertical image of a tranquil forest clearing with a deer and soft light. Paint it in watercolor with gentle gradients, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a natural pine frame.",
  "Generate a 9:16 vertical image of a majestic wolf pack in a snowy forest at twilight. Paint it in oil with rich textures, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a vibrant still life with a bowl of tropical fruits. Paint it in acrylic with lively textures, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a classic gold frame.",
  "Generate a 9:16 vertical image of a semi-abstract cityscape with glowing lights and shapes. Paint it in acrylic with bold contrasts, emphasizing modern art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a sleek chrome frame.",
  "Generate a 9:16 vertical image of a peaceful countryside with a winding road and fields. Paint it in watercolor with soft details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic barnwood frame.",
  "Generate a 9:16 vertical image of a vibrant sunset over a tropical island with palm trees. Paint it in oil with rich colors, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a tropical green frame.",
  "Generate a 9:16 vertical image of a bustling street market with colorful vendors. Paint it in acrylic with lively textures, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a bright orange frame.",
  "Generate a 9:16 vertical image of a serene mountain valley with a river and soft clouds. Paint it in watercolor with delicate gradients, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a natural oak frame.",
  "Generate a 9:16 vertical image of an abstract composition with bold greens and blues. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a simple black frame.",
  "Generate a 9:16 vertical image of a playful dog splashing in a sunny lake. Paint it in oil with vibrant details, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a cheerful white frame.",
  "Generate a 9:16 vertical image of a dramatic seascape with a ship in a stormy sea. Paint it in acrylic with bold textures, emphasizing impressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a dark navy frame.",
  "Generate a 9:16 vertical image of a vibrant urban scene with a neon-lit diner at night. Paint it in acrylic with dynamic contrasts, emphasizing pop art. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a bold red frame.",
  "Generate a 9:16 vertical image of a tranquil forest with a waterfall and soft mist. Paint it in watercolor with gentle gradients, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a natural pine frame.",
  "Generate a 9:16 vertical image of a majestic elephant in a lush savanna at sunset. Paint it in oil with rich textures, emphasizing realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a luxurious gold frame.",
];

const PAINTING_CONTEXT = [
  "The wolf’s howl embodies primal solitude, a cry echoing through the vastness of the wild.",
  "The beach at sunset evokes a sense of calm and relaxation, capturing the beauty of fleeting moments.",
  "The bustling cityscape reflects the vibrant energy and dynamic pulse of urban life.",
  "The mountain range under stars inspires awe and a connection to the timeless grandeur of nature.",
  "The swirling abstract forms invite viewers to explore their own emotions and interpretations.",
  "The cozy dog by the fireplace conveys warmth, loyalty, and the comfort of home.",
  "The tranquil forest with sunlight evokes serenity and a deep connection to nature’s beauty.",
  "The playful cat on the windowsill captures a moment of quiet joy and domestic bliss.",
  "The crashing ocean wave under a stormy sky conveys the raw power and drama of nature.",
  "The flower garden in bloom radiates joy and the vibrant energy of life in full color.",
  "The lone sailboat at sunrise evokes solitude, hope, and the promise of new beginnings.",
  "The urban street after rain captures the reflective beauty and vibrancy of city life.",
  "The peaceful countryside with sheep conveys a timeless sense of calm and simplicity.",
  "The geometric abstract pattern evokes energy and modernity, sparking visual intrigue.",
  "The lion in the savanna embodies strength, majesty, and the wild spirit of nature.",
  "The misty autumn lake evokes nostalgia and the quiet beauty of seasonal change.",
  "The farmers market scene radiates community, color, and the vibrancy of daily life.",
  "The semi-abstract skyline captures the dynamic essence of urban dreams and ambitions.",
  "The serene meadow with wildflowers evokes peace and the simple beauty of nature.",
  "The playful puppy chasing a butterfly conveys joy, innocence, and carefree moments.",
  "The dramatic seascape with waves embodies the untamed power and mystery of the ocean.",
  "The abstract swirl of colors conveys emotional depth and the freedom of expression.",
  "The winding river through the forest evokes tranquility and the flow of life.",
  "The desert sunset with cacti captures the stark beauty and solitude of the arid wild.",
  "The cozy coffee shop radiates warmth, community, and the comfort of shared spaces.",
  "The semi-abstract glowing forest evokes mystery and the magic of natural light.",
  "The charming village street conveys nostalgia and the warmth of small-town life.",
  "The galloping stallion embodies freedom, power, and the untamed spirit of the wild.",
  "The bold geometric abstract evokes energy, modernity, and vibrant visual impact.",
  "The peaceful harbor at sunset conveys calm, reflection, and the beauty of endings.",
  "The vibrant still life with fruits radiates abundance, color, and the joy of simplicity.",
  "The bustling city street captures the lively energy and diversity of urban life.",
  "The serene mountain lake evokes clarity, peace, and the beauty of untouched nature.",
  "The abstract stormy sea conveys emotional intensity and the power of natural forces.",
  "The cheerful dog in the park radiates joy, playfulness, and the spirit of adventure.",
  "The tranquil beach with palms evokes relaxation and the allure of tropical escape.",
  "The vibrant urban mural captures the bold creativity and energy of city culture.",
  "The quiet forest path evokes serenity, introspection, and a connection to nature.",
  "The soaring eagle embodies freedom, strength, and the majesty of the wild.",
  "The soft abstract pastels convey calm, introspection, and emotional subtlety.",
  "The snowy cabin in the forest evokes coziness, solitude, and winter’s quiet beauty.",
  "The vibrant market scene radiates energy, community, and the richness of culture.",
  "The semi-abstract sunset evokes emotional warmth and the beauty of fleeting moments.",
  "The peaceful riverbank with willows conveys tranquility and the flow of time.",
  "The playful kitten with yarn captures domestic joy and the charm of simple moments.",
  "The dramatic cityscape at night radiates the vibrant energy of urban dreams.",
  "The serene meadow with deer evokes peace, grace, and harmony with nature.",
  "The vibrant abstract greens evoke energy, growth, and the spirit of renewal.",
  "The dolphins leaping from waves convey freedom, joy, and the playfulness of nature.",
  "The cozy bookstore radiates warmth, knowledge, and the joy of discovery.",
  "The semi-abstract mountains capture the grandeur and mystery of rugged landscapes.",
  "The vibrant autumn forest evokes nostalgia and the fleeting beauty of fall.",
  "The bustling harbor with boats conveys community, adventure, and coastal charm.",
  "The bold abstract reds evoke passion, energy, and the power of visual impact.",
  "The serene countryside with windmill conveys simplicity, peace, and rural charm.",
  "The playful dog fetching a ball radiates joy, loyalty, and carefree fun.",
  "The dramatic ocean sunset evokes awe, tranquility, and the beauty of endings.",
  "The vibrant urban musicians capture the lively spirit and diversity of city life.",
  "The tranquil lotus lake evokes serenity, beauty, and spiritual calm.",
  "The majestic tiger in the jungle embodies strength, mystery, and wild beauty.",
  "The soft abstract blues convey calm, introspection, and emotional depth.",
  "The cozy village square radiates community, charm, and the warmth of tradition.",
  "The vibrant sunflower still life conveys joy, abundance, and the beauty of nature.",
  "The semi-abstract neon cityscape captures the vibrant energy of urban nights.",
  "The peaceful meadow with a tree evokes simplicity, calm, and natural beauty.",
  "The playful cat in the garden radiates charm, serenity, and domestic joy.",
  "The dramatic lighthouse seascape conveys resilience, hope, and nature’s power.",
  "The vibrant abstract purples evoke creativity, energy, and emotional intensity.",
  "The tranquil forest stream evokes peace, clarity, and the flow of nature.",
  "The vibrant desert oasis conveys hope, beauty, and the allure of the arid wild.",
  "The cozy café scene radiates warmth, connection, and the joy of shared moments.",
  "The semi-abstract ocean wave captures the dynamic energy and beauty of the sea.",
  "The vibrant flower market radiates color, community, and cultural richness.",
  "The majestic bear fishing conveys strength, harmony, and the beauty of nature.",
  "The bold abstract yellows evoke energy, optimism, and vibrant visual impact.",
  "The serene coastal village radiates charm, peace, and the allure of seaside life.",
  "The vibrant vineyard sunrise evokes hope, beauty, and the promise of new days.",
  "The bustling city park conveys energy, community, and the vibrancy of urban life.",
  "The semi-abstract glowing forest captures the magic and mystery of natural light.",
  "The tranquil beach with seashells evokes relaxation and the beauty of simplicity.",
  "The playful puppy in the meadow radiates joy, innocence, and carefree moments.",
  "The dramatic snowy mountain peak conveys awe, resilience, and natural grandeur.",
  "The vibrant abstract reds convey passion, intensity, and emotional depth.",
  "The cozy farm with a barn evokes simplicity, peace, and rural charm.",
  "The vibrant urban skyline captures the dynamic energy and allure of city life.",
  "The serene lake with a dock conveys tranquility, reflection, and natural beauty.",
  "The playful cat with a feather radiates charm, playfulness, and domestic joy.",
  "The dramatic stormy seascape evokes power, mystery, and the force of nature.",
  "The vibrant abstract purples convey creativity, energy, and visual impact.",
  "The tranquil forest clearing with deer evokes grace, peace, and harmony.",
  "The majestic wolf pack in snow conveys unity, strength, and wild beauty.",
  "The vibrant tropical fruit still life radiates abundance, color, and joy.",
  "The semi-abstract glowing cityscape captures the vibrant energy of urban dreams.",
  "The peaceful countryside with a road evokes simplicity, calm, and timeless beauty.",
  "The vibrant tropical sunset conveys warmth, escape, and the allure of paradise.",
  "The bustling street market radiates energy, community, and cultural vibrancy.",
  "The serene mountain valley evokes peace, grandeur, and the beauty of nature.",
  "The vibrant abstract greens convey growth, energy, and the spirit of renewal.",
  "The playful dog in the lake radiates joy, adventure, and carefree fun.",
  "The dramatic stormy ship conveys resilience, adventure, and nature’s power.",
  "The vibrant neon diner captures the nostalgic energy and allure of urban nights.",
  "The tranquil forest waterfall evokes serenity, beauty, and the flow of nature.",
  "The majestic elephant at sunset embodies strength, grace, and the wild spirit.",
];

const CONFIG = {
  INPUT_SELECTOR: 'div.ql-editor.textarea.new-input-ui',
  SUBMIT_BUTTON_SELECTOR: 'button.send-button',
  DELAY_BETWEEN_SUBMISSIONS_MS: 30000,
  MAX_RETRIES: 5,
  RETRY_DELAY_MS: 1000
};

const MAX_SUBMISSIONS = PAINTING_PROMPTS.length;

// ===== ENGINE ===== //
let submissionCount = 0;
let isPaused = false;

/**
 * Generates a formatted prompt combining painting description and context.
 * @param {number} index - The index of the prompt and context to use.
 * @returns {string} - The formatted prompt string.
 * @throws {Error} - If prompt or context at the index is invalid.
 */
function generatePrompt(index) {
  if (!PAINTING_PROMPTS[index] || !PAINTING_CONTEXT[index]) {
    throw new Error(`Invalid prompt or context at index ${index}`);
  }
  return `${PAINTING_PROMPTS[index]}\n\nStyle: abstract expressionism, acrylic, handmade, palette knife texture\n\nEmotion/Story: ${PAINTING_CONTEXT[index]}\n\nNegative prompt: Do not show any artist signature or watermark on the painting.`;
}

/**
 * Finds a DOM element with retries if not immediately available.
 * @param {string} selector - The CSS selector for the element.
 * @param {number} maxRetries - Maximum number of retries.
 * @param {number} retryDelay - Delay between retries in milliseconds.
 * @returns {Promise<Element>} - The found DOM element.
 * @throws {Error} - If element is not found after max retries.
 */
async function findElement(selector, maxRetries = CONFIG.MAX_RETRIES, retryDelay = CONFIG.RETRY_DELAY_MS) {
  let retries = 0;
  return new Promise((resolve, reject) => {
    const attempt = () => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
      } else if (retries < maxRetries) {
        retries++;
        setTimeout(attempt, retryDelay);
      } else {
        reject(new Error(`Element not found: ${selector}`));
      }
    };
    attempt();
  });
}

/**
 * Logs the progress of submissions.
 */
function logProgress() {
  const progress = ((submissionCount / MAX_SUBMISSIONS) * 100).toFixed(2);
  console.log(`📊 Progress: ${submissionCount}/${MAX_SUBMISSIONS} (${progress}%)`);
}

/**
 * Submits a prompt to the input field and triggers the submit button.
 * @param {number} attempt - Current attempt number for retries.
 * @param {number} maxAttempts - Maximum number of retry attempts.
 */
async function submitPrompt(attempt = 1, maxAttempts = 3) {
  if (isPaused || submissionCount >= MAX_SUBMISSIONS) {
    if (submissionCount >= MAX_SUBMISSIONS) {
      console.log("✅ Painting prompt automation complete");
    }
    return;
  }

  try {
    const inputElement = await findElement(CONFIG.INPUT_SELECTOR);
    const prompt = generatePrompt(submissionCount);
    inputElement.innerText = prompt;
    inputElement.dispatchEvent(new Event('input', { bubbles: true }));

    setTimeout(async () => {
      try {
        const submitButton = await findElement(CONFIG.SUBMIT_BUTTON_SELECTOR);
        if (!submitButton.disabled) {
          submitButton.click();
          console.log(`🎨 Submitted painting prompt #${submissionCount + 1}: ${prompt.slice(0, 50)}...`);
          submissionCount++;
          logProgress();
          setTimeout(submitPrompt, CONFIG.DELAY_BETWEEN_SUBMISSIONS_MS);
        } else {
          console.warn("⚠️ Submit button disabled, retrying...");
          if (attempt < maxAttempts) {
            setTimeout(() => submitPrompt(attempt + 1, maxAttempts), CONFIG.RETRY_DELAY_MS * Math.pow(2, attempt));
          } else {
            console.error("❌ Max retry attempts reached");
          }
        }
      } catch (error) {
        console.error(`❌ Error submitting prompt: ${error.message}`);
        if (attempt < maxAttempts) {
          setTimeout(() => submitPrompt(attempt + 1, maxAttempts), CONFIG.RETRY_DELAY_MS * Math.pow(2, attempt));
        } else {
          console.error("❌ Max retry attempts reached");
        }
      }
    }, 1000);
  } catch (error) {
    console.error(`❌ Error finding input element: ${error.message}`);
    if (attempt < maxAttempts) {
      setTimeout(() => submitPrompt(attempt + 1, maxAttempts), CONFIG.RETRY_DELAY_MS * Math.pow(2, attempt));
    } else {
      console.error("❌ Max retry attempts reached");
    }
  }
}

/**
 * Pauses the automation script.
 */
function pauseAutomation() {
  isPaused = true;
  console.log("⏸️ Automation paused");
}

/**
 * Resumes the automation script if paused.
 */
function resumeAutomation() {
  if (isPaused) {
    isPaused = false;
    console.log("▶️ Automation resumed");
    submitPrompt();
  }
}

// Expose controls globally
window.pauseAutomation = pauseAutomation;
window.resumeAutomation = resumeAutomation;

// ===== START ===== //
submitPrompt();