// ===== CONFIG ===== //
const PAINTING_PROMPTS = [
  "Generate a 9:16 vertical image of a woman standing gracefully in a moonlit garden, her flowing dress blending with the shadows of roses. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman gazing out a window at a stormy sea, her face reflecting quiet strength. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman dancing barefoot in a field of wildflowers under a golden sunset. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting pensively on a weathered bench in an autumn forest, leaves falling around her. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman walking through a misty city street at dawn, her silhouette softened by fog. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman reading a book under a willow tree by a serene lake. Paint it in acrylic with expressive palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing on a cliff overlooking a turbulent ocean, her hair whipped by the wind. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman weaving a tapestry in a dimly lit room, surrounded by vibrant threads. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman playing a violin in a candlelit attic, her face illuminated by soft light. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a desert under a star-filled sky, her eyes reflecting the cosmos. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sketching in a bustling marketplace, surrounded by vibrant colors and chaos. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a snowy forest, her breath visible in the cold air. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman tending to a garden of glowing flowers under a twilight sky. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman holding a lantern in a foggy moor, her figure partially shrouded in mist. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman painting on a canvas in a vibrant studio filled with colorful splatters. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a rain-soaked alley, her reflection shimmering in puddles. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting on a rooftop, gazing at a city skyline at dusk. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman walking through a field of lavender under a vibrant sunrise. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing by a river, her reflection blending with the water’s ripples. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a café, lost in thought with a steaming cup of coffee. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman dancing in a vibrant festival, surrounded by swirling colors. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a golden wheat field, her dress flowing in the breeze. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting on a dock, her feet dangling over calm waters at twilight. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman holding a bouquet of wildflowers in a sunlit meadow. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant jungle, surrounded by lush foliage and exotic birds. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting by a fireplace, her face glowing with warmth. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman walking along a coastal path, waves crashing below her. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant market, surrounded by colorful spices and fabrics. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting on a balcony, overlooking a bustling city at night. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vineyard, holding a glass of wine under a setting sun. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a quiet library, surrounded by towering bookshelves. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman dancing under a canopy of cherry blossoms in spring. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing on a bridge, watching a river flow beneath a starry sky. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a meadow, weaving a crown of daisies. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a bustling train station, her face calm amidst the chaos. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting on a swing in a dreamy forest, surrounded by fireflies. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant festival, holding a glowing lantern. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman walking through a snowy village, her scarf trailing in the wind. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting by a pond, feeding swans under a golden sky. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant orchard, surrounded by blooming apple trees. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a cozy attic, writing in a journal by candlelight. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing on a rooftop, watching a meteor shower. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman dancing in a vibrant ballroom, her dress swirling with color. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting on a cliff, watching a sunrise over a vast valley. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant plaza, surrounded by street musicians. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman walking through a misty forest, her figure glowing softly. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a vibrant studio, sculpting clay with focused intensity. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a golden desert, her silhouette against a vibrant sunset. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting by a window, sewing a vibrant quilt in soft light. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant harbor, watching ships sail under a stormy sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman dancing in a vibrant meadow, surrounded by butterflies. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting on a park bench, sketching a vibrant cityscape. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant temple, surrounded by glowing candles. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman walking through a vibrant carnival, holding a glowing sparkler. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a vibrant greenhouse, surrounded by exotic plants. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing on a vibrant pier, watching a sunset over the ocean. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a vibrant café, writing poetry in a notebook. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant forest, surrounded by glowing mushrooms. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman dancing in a vibrant studio, surrounded by colorful fabrics. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant meadow, holding a kite in the wind. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting by a vibrant river, painting a watercolor landscape. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant city square, surrounded by pigeons. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a vibrant park, playing a flute under a tree. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant desert, holding a glowing crystal. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a vibrant attic, surrounded by old photographs. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant meadow, surrounded by glowing fireflies. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman dancing in a vibrant plaza, surrounded by colorful banners. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting on a vibrant rooftop, watching a vibrant festival below. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant forest, holding a glowing lantern. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a vibrant garden, surrounded by blooming roses. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant harbor, watching a storm approach. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a vibrant studio, weaving a colorful tapestry. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant meadow, surrounded by wild horses. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a vibrant café, sketching a portrait. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant plaza, holding a vibrant umbrella. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a vibrant park, reading a novel under a tree. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant forest, surrounded by autumn leaves. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman dancing in a vibrant studio, surrounded by colorful paints. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting on a vibrant dock, watching a vibrant sunset. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant city, surrounded by neon lights. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a vibrant garden, surrounded by butterflies. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant meadow, holding a glowing flower. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman dancing in a vibrant forest, surrounded by fireflies. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a vibrant studio, playing a guitar. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant plaza, surrounded by colorful balloons. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a vibrant café, sipping tea under soft light. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant forest, holding a glowing crystal. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a vibrant meadow, surrounded by wildflowers. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman dancing in a vibrant plaza, surrounded by colorful lights. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant harbor, watching a vibrant sunrise. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a vibrant studio, painting a vibrant portrait. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant meadow, surrounded by vibrant poppies. Paint it in acrylic with bold palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman sitting in a vibrant park, watching children play. Paint it in acrylic with textured palette knife work, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman standing in a vibrant city, surrounded by vibrant murals. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a woman dancing in a vibrant studio, surrounded by vibrant mirrors. Paint it in acrylic with dynamic palette knife strokes, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight, using a rustic wooden frame."
];

const PAINTING_CONTEXT = [
  "Her solitude in the garden reflects a quiet strength, embracing the night’s embrace.",
  "Her gaze captures the untamed power of the sea, a mirror to her inner resilience.",
  "Her dance embodies freedom, moving in harmony with the rhythms of nature.",
  "Her pensive mood blends with the falling leaves, a moment of quiet reflection.",
  "Her silhouette in the fog carries a story of mystery and quiet determination.",
  "Her reading is a journey into dreams, the lake a mirror to her thoughts.",
  "Her defiance against the wind speaks of courage in the face of nature’s fury.",
  "Her weaving is a tapestry of dreams, each thread a story of her life.",
  "Her music fills the attic with emotion, a melody of solitude and passion.",
  "Her gaze into the stars reflects a longing for connection with the infinite.",
  "Her sketching captures the chaos of life, finding beauty in the vibrant crowd.",
  "Her breath in the cold air tells a story of resilience in the face of winter.",
  "Her tending to glowing flowers reflects a nurturing spirit under the twilight.",
  "Her lantern lights her path, a symbol of hope in the shrouded moor.",
  "Her painting is an explosion of creativity, capturing the chaos of her studio.",
  "Her reflection in the rain speaks of resilience and beauty in fleeting moments.",
  "Her gaze over the city reflects dreams woven into the fabric of the night.",
  "Her walk through lavender fields embodies serenity and connection with nature.",
  "Her reflection in the river tells a story of unity with the flowing world.",
  "Her thoughts over coffee weave stories of quiet introspection in a busy world.",
  "Her dance in the festival is a celebration of life, vibrant and unapologetic.",
  "Her presence in the wheat field radiates freedom and harmony with the earth.",
  "Her moment by the water is one of peace, connected to the rhythm of the lake.",
  "Her bouquet symbolizes hope and beauty, gathered from the heart of the meadow.",
  "Her presence in the jungle is a dance with the wild, vibrant and untamed.",
  "Her warmth by the fire reflects a heart full of stories and quiet strength.",
  "Her walk along the coast embodies resilience against the crashing waves.",
  "Her presence in the market is a celebration of life’s vibrant chaos.",
  "Her view from the balcony captures dreams woven into the city’s heartbeat.",
  "Her moment with wine is a quiet celebration of life’s simple pleasures.",
  "Her solitude in the library is a journey through the pages of history.",
  "Her dance among blossoms is a fleeting moment of joy in the spring air.",
  "Her presence on the bridge connects her soul to the stars above.",
  "Her daisy crown weaves a story of innocence and connection with nature.",
  "Her calm amidst the chaos reflects a serene strength in the bustling station.",
  "Her swing in the forest is a moment of whimsy, surrounded by glowing fireflies.",
  "Her lantern in the festival lights up her dreams in a vibrant celebration.",
  "Her walk through the snow tells a story of quiet resilience in the cold.",
  "Her feeding of swans is a moment of grace, connected to the golden sky.",
  "Her presence in the orchard radiates life, surrounded by blooming vitality.",
  "Her writing in the attic is a quiet exploration of her innermost thoughts.",
  "Her gaze at the meteor shower reflects a longing for the wonders of the cosmos.",
  "Her dance in the ballroom is a swirl of elegance and vibrant emotion.",
  "Her sunrise watch is a moment of hope, embracing the dawn of a new day.",
  "Her presence among musicians is a celebration of life’s vibrant rhythms.",
  "Her glow in the misty forest reflects a quiet, ethereal strength.",
  "Her sculpting is a testament to her focus, shaping beauty from raw clay.",
  "Her silhouette in the desert speaks of resilience against the vast unknown.",
  "Her sewing is a labor of love, stitching stories into the vibrant quilt.",
  "Her watch over the harbor reflects strength in the face of an approaching storm.",
  "Her dance among butterflies is a celebration of freedom and vibrant life.",
  "Her sketching of the cityscape captures the pulse of urban vitality.",
  "Her presence among candles radiates warmth and spiritual serenity.",
  "Her sparkler in the carnival lights up her joy in the vibrant chaos.",
  "Her time in the greenhouse is a nurturing dance with nature’s vibrant life.",
  "Her watch over the sunset reflects a quiet connection with the ocean’s rhythm.",
  "Her poetry weaves dreams into words, capturing the essence of quiet moments.",
  "Her presence among glowing mushrooms reflects a magical connection with nature.",
  "Her dance among fabrics is a vibrant expression of creativity and freedom.",
  "Her kite in the wind symbolizes freedom, soaring above the vibrant meadow.",
  "Her watercolor painting captures the serene flow of the river’s beauty.",
  "Her presence among pigeons reflects calm amidst the vibrant city’s chaos.",
  "Her flute’s melody weaves a story of serenity under the park’s vibrant canopy.",
  "Her crystal in the desert glows with her inner strength and vibrant spirit.",
  "Her time with photographs is a quiet reflection on memories and stories.",
  "Her presence among fireflies radiates a magical connection with the night.",
  "Her dance among banners is a vibrant celebration of life’s joyful moments.",
  "Her watch over the festival reflects dreams woven into the vibrant chaos.",
  "Her lantern in the forest lights up her path, a symbol of hope and strength.",
  "Her time among roses is a nurturing moment, surrounded by vibrant beauty.",
  "Her watch over the storm reflects resilience and strength in vibrant chaos.",
  "Her tapestry weaves stories of vibrant life, created with focused passion.",
  "Her presence among horses radiates freedom and connection with the wild.",
  "Her portrait sketching captures the essence of life in vibrant strokes.",
  "Her umbrella in the plaza shields her dreams in the vibrant city’s chaos.",
  "Her reading in the park is a quiet escape into the world of vibrant stories.",
  "Her presence among autumn leaves reflects a serene connection with nature.",
  "Her dance among paints is a vibrant explosion of creativity and freedom.",
  "Her watch over the sunset reflects a quiet connection with the vibrant world.",
  "Her presence among neon lights radiates strength in the vibrant city’s pulse.",
  "Her time among butterflies is a vibrant dance with nature’s fleeting beauty.",
  "Her glowing flower radiates hope and beauty in the vibrant meadow.",
  "Her dance among fireflies is a magical celebration of vibrant life.",
  "Her guitar’s melody weaves stories of passion in the vibrant studio.",
  "Her balloons in the plaza lift her dreams into the vibrant sky.",
  "Her tea in the café is a quiet moment of reflection in vibrant light.",
  "Her crystal in the forest glows with her vibrant spirit and strength.",
  "Her time among wildflowers is a vibrant celebration of nature’s beauty.",
  "Her dance among lights is a vibrant expression of joy and freedom.",
  "Her watch over the sunrise reflects hope in the vibrant harbor’s rhythm.",
  "Her portrait painting captures the vibrant essence of life’s stories.",
  "Her presence among poppies radiates vibrant beauty and quiet strength.",
  "Her watch over children reflects warmth in the vibrant park’s energy.",
  "Her presence among murals radiates creativity in the vibrant city’s pulse.",
  "Her dance among mirrors is a vibrant reflection of her inner strength."
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