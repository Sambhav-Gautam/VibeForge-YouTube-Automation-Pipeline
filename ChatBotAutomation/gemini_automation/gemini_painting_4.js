// ===== CONFIG ===== //
const PAINTING_PROMPTS = [
  "Generate a 9:16 vertical image of a serene Buddhist monk meditating under a Bodhi tree at dawn, surrounded by soft mist and lotus flowers. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a majestic cathedral with towering spires under a stormy sky, illuminated by a single ray of sunlight breaking through clouds. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Hindu goddess Durga riding a lion, surrounded by vibrant festival colors and sacred flames. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a tranquil Islamic garden with a flowing fountain and intricate tile patterns under a crescent moon. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Jewish menorah glowing brightly in a dimly lit room, casting warm reflections on ancient stone walls. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sikh guru seated in a golden temple, surrounded by vibrant prayer flags and serene waters. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Shinto shrine nestled in a misty forest, with red torii gates glowing under soft sunlight. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Jain tirthankara in deep meditation, surrounded by intricate marble carvings and soft light. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Taoist sage standing on a misty mountain peak, holding a scroll under a crimson sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Native American spiritual ceremony with a sacred fire and swirling smoke under a starry sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an ancient Egyptian ankh glowing in a temple, surrounded by hieroglyphs and golden sands. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Christian cross on a hill at sunrise, with soft clouds and radiant light. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sufi dervish whirling in a desert under a golden sunset, surrounded by swirling sands. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Buddhist stupa surrounded by prayer wheels and Himalayan peaks at twilight. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Hindu temple festival with vibrant rangoli patterns and glowing oil lamps. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a mosque’s minaret piercing a starry night sky, with calligraphy glowing softly. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Torah scroll unrolled in a synagogue, with Hebrew letters glowing in golden light. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sikh warrior praying at a sacred lake, with mountains reflecting in the water. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Shinto priest performing a ritual under a sacred cherry blossom tree. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Jain temple with intricate carvings glowing under a golden sunrise. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Taoist temple in a misty valley, with incense smoke curling upward. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Native American dreamcatcher glowing under a full moon, with feathers swaying in the wind. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an ancient Egyptian temple with a glowing obelisk under a starry desert sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Christian angel with radiant wings standing in a glowing celestial light. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sufi poet writing under a crescent moon, surrounded by swirling desert winds. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Buddhist mandala glowing with intricate patterns under soft candlelight. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Hindu deity Ganesha surrounded by marigold flowers and glowing lamps. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an Islamic prayer rug under a starry sky, with a glowing lantern nearby. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Jewish Star of David glowing in a sacred temple, with soft candlelight. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sikh temple with golden domes reflecting in a serene lake at dawn. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Shinto waterfall with sacred ropes and lanterns glowing in the mist. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Jain monk walking a path of non-violence, surrounded by glowing flowers. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Taoist yin-yang symbol glowing in a misty bamboo forest. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Native American eagle soaring over a sacred mountain at sunrise. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an ancient Egyptian scarab glowing under a desert moonlit sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Christian dove carrying an olive branch under a radiant sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sufi shrine with glowing candles and intricate tile work at twilight. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Buddhist prayer flag fluttering in a Himalayan breeze under a golden sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Hindu deity Krishna playing a flute under a vibrant peacock sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an Islamic crescent moon glowing over a desert oasis at night. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Jewish shofar being blown in a sacred valley at sunrise. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sikh sword glowing in a temple, surrounded by sacred flames. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Shinto kami spirit emerging from a sacred forest at dawn. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Jain symbol of ahimsa glowing in a temple under soft light. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Taoist dragon soaring through a misty sky at sunrise. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Native American totem pole glowing under a vibrant sunset. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an ancient Egyptian deity Anubis standing in a glowing temple. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Christian stained glass window glowing in a cathedral at dusk. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sufi mystic meditating under a starry desert sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Buddhist lotus flower blooming under a radiant moon. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Hindu deity Shiva meditating on a Himalayan peak. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an Islamic dome glowing under a twilight sky with intricate patterns. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Jewish prayer shawl glowing in a sacred temple at dawn. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sikh prayer book open under a golden canopy at sunrise. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Shinto sacred rock glowing in a misty forest at twilight. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused entlang: a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Jain temple dome glowing under a vibrant sunset. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Taoist monk meditating in a bamboo grove under a full moon. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Native American medicine wheel glowing under a starry sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an ancient Egyptian lotus flower glowing in a temple pool. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Christian chalice glowing in a cathedral under soft light. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sufi rose garden glowing under a crescent moon. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Buddhist temple bell ringing in a misty valley at dawn. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Hindu deity Vishnu reclining on a cosmic serpent. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an Islamic mihrab glowing in a mosque under soft candlelight. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Jewish ark of the covenant glowing in a sacred temple. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sikh guru’s turban glowing under a radiant sunrise. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Shinto sacred bridge glowing in a misty valley at dawn. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Jain swastika symbol glowing in a temple at twilight. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Taoist crane flying over a misty lake at sunrise. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Native American sacred pipe glowing under a starry sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an ancient Egyptian sphinx glowing under a desert sunset. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Christian rosary glowing in a quiet chapel at dusk. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sufi whirling dervish under a glowing desert moon. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Buddhist prayer wheel spinning in a Himalayan temple. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Hindu deity Saraswati playing a veena under a radiant sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an Islamic calligraphy scroll glowing in a mosque at night. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Jewish candelabrum glowing in a synagogue at twilight. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sikh sacred pool reflecting a golden temple at dawn. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Shinto sacred lantern glowing in a forest at twilight. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Jain monk’s robe glowing in a temple under soft light. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism晚: Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Taoist temple gate glowing under a crimson sunrise. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Native American sacred drum glowing under a starry sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an ancient Egyptian pyramid glowing under a desert moon. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Christian halo glowing around a sacred figure at dawn. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sufi shrine’s dome glowing under a starry desert sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Buddhist monk’s robe glowing in a temple at twilight. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Hindu temple spire piercing a vibrant sunset sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an Islamic lantern glowing in a courtyard at night. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Jewish Torah ark glowing in a synagogue at dawn. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sikh prayer flag glowing under a radiant sunrise. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Shinto sacred tree glowing in a misty forest at dawn. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Jain temple pillar glowing under a vibrant sunset. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Taoist lotus pond glowing under a full moon. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Native American sacred fire glowing under a starry sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an ancient Egyptian temple gate glowing under a desert moon. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Christian sacred heart glowing in a chapel at twilight. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sufi poet’s scroll glowing under a desert starry sky. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Buddhist temple gate glowing under a vibrant sunrise. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Hindu deity Lakshmi surrounded by glowing lotus flowers. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of an Islamic archway glowing in a mosque at twilight. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Jewish sacred scroll glowing in a synagogue at night. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 vertical image of a Sikh sacred flame glowing in a temple at dawn. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame."
];

const PAINTING_CONTEXT = [
  "The monk’s meditation reflects inner peace and enlightenment, a moment of unity with the universe.",
  "The cathedral stands as a symbol of divine resilience amidst the chaos of nature.",
  "Durga’s fierce grace embodies divine protection and victory over evil.",
  "The Islamic garden represents paradise, a serene haven of reflection and beauty.",
  "The menorah’s light signifies hope and divine presence in the darkness.",
  "The Sikh guru’s presence evokes devotion and spiritual strength in a sacred space.",
  "The Shinto shrine embodies purity and harmony with nature’s spirits.",
  "The Jain tirthankara’s meditation reflects non-violence and spiritual liberation.",
  "The Taoist sage’s wisdom connects the earthly and the divine in serene balance.",
  "The Native American ceremony honors the sacred connection between earth and sky.",
  "The ankh symbolizes eternal life, glowing with ancient divine energy.",
  "The cross at sunrise represents redemption and the promise of a new beginning.",
  "The Sufi dervish’s dance is a mystical journey toward divine unity.",
  "The Buddhist stupa stands as a monument to enlightenment and peace.",
  "The Hindu festival radiates joy and devotion, celebrating divine blessings.",
  "The mosque’s minaret calls the faithful to prayer under the divine night sky.",
  "The Torah scroll embodies the sacred covenant and divine wisdom.",
  "The Sikh warrior’s prayer reflects courage and devotion to the divine path.",
  "The Shinto ritual honors the kami, connecting humanity with the divine.",
  "The Jain temple’s carvings symbolize purity and the path to liberation.",
  "The Taoist temple exudes serenity, a place of balance and spiritual harmony.",
  "The dreamcatcher weaves protection and spiritual guidance under the moon.",
  "The Egyptian obelisk stands as a beacon of divine power and eternity.",
  "The angel’s radiance embodies divine love and celestial protection.",
  "The Sufi poet’s words weave a tapestry of divine love and mysticism.",
  "The Buddhist mandala represents the universe, a sacred map of enlightenment.",
  "Ganesha’s presence brings wisdom and the removal of obstacles.",
  "The prayer rug is a sacred space for communion with the divine.",
  "The Star of David shines as a symbol of faith and divine protection.",
  "The Sikh temple’s reflection signifies purity and divine connection.",
  "The Shinto waterfall is a sacred site of purification and divine presence.",
  "The Jain path of non-violence radiates peace and spiritual purity.",
  "The yin-yang symbol embodies balance and the harmony of opposites.",
  "The eagle soars as a messenger between the earthly and the divine.",
  "The scarab represents transformation and divine renewal in the desert.",
  "The dove carries hope and peace, a divine promise of reconciliation.",
  "The Sufi shrine glows with the light of divine love and devotion.",
  "The prayer flag carries blessings into the world, connecting earth and sky.",
  "Krishna’s flute song weaves divine love and joy through the universe.",
  "The crescent moon symbolizes divine guidance in the stillness of night.",
  "The shofar’s call heralds divine awakening and spiritual renewal.",
  "The Sikh sword represents divine justice and spiritual strength.",
  "The kami spirit embodies the sacred essence of nature and divinity.",
  "The Jain ahimsa symbol radiates non-violence and spiritual purity.",
  "The Taoist dragon symbolizes power and harmony with the cosmos.",
  "The totem pole stands as a sacred connection to ancestors and spirits.",
  "Anubis guards the sacred passage to the afterlife with divine wisdom.",
  "The stained glass window radiates divine light and spiritual beauty.",
  "The Sufi mystic’s meditation is a journey toward divine unity.",
  "The lotus flower symbolizes purity and the path to enlightenment.",
  "Shiva’s meditation embodies cosmic balance and divine power.",
  "The Islamic dome represents the vault of heaven, a divine canopy.",
  "The prayer shawl wraps the faithful in divine protection and sanctity.",
  "The Sikh prayer book radiates divine wisdom and spiritual guidance.",
  "The Shinto sacred rock embodies the eternal presence of the divine.",
  "The Jain temple dome reflects spiritual purity and divine liberation.",
  "The Taoist monk’s meditation connects the soul with the eternal Tao.",
  "The medicine wheel symbolizes balance and the sacred cycle of life.",
  "The Egyptian lotus flower blooms with divine beauty and eternal life.",
  "The Christian chalice holds the sacred essence of divine communion.",
  "The Sufi rose garden blooms with the fragrance of divine love.",
  "The temple bell’s ring carries prayers to the divine realms.",
  "Vishnu’s cosmic rest symbolizes divine preservation and harmony.",
  "The mihrab guides the faithful toward divine connection and prayer.",
  "The ark of the covenant holds the sacred bond between God and humanity.",
  "The Sikh turban symbolizes honor and divine devotion.",
  "The Shinto bridge connects the earthly and divine realms in harmony.",
  "The Jain swastika radiates spiritual purity and eternal truth.",
  "The Taoist crane soars as a symbol of longevity and divine grace.",
  "The sacred pipe carries prayers to the divine through sacred smoke.",
  "The sphinx stands as a guardian of divine mysteries and wisdom.",
  "The rosary beads guide the faithful through divine contemplation.",
  "The whirling dervish spins in a dance of divine ecstasy and unity.",
  "The prayer wheel spins blessings into the universe, connecting all.",
  "Saraswati’s veena sings divine wisdom and creative inspiration.",
  "The calligraphy scroll radiates the beauty of divine words.",
  "The candelabrum’s light symbolizes divine presence and celebration.",
  "The sacred pool reflects divine purity and spiritual serenity.",
  "The Shinto lantern glows with the light of divine guidance.",
  "The Jain monk’s robe embodies simplicity and spiritual purity.",
  "The Taoist temple gate opens to divine harmony and balance.",
  "The sacred drum beats the rhythm of divine connection and life.",
  "The pyramid stands as a monument to divine eternity and power.",
  "The sacred heart radiates divine love and compassion.",
  "The Sufi scroll weaves divine poetry and spiritual insight.",
  "The temple gate opens to divine peace and enlightenment.",
  "Lakshmi’s lotus blooms with divine abundance and prosperity.",
  "The Islamic archway frames a sacred space for divine connection.",
  "The Torah ark holds the sacred words of divine wisdom.",
  "The sacred flame burns with divine strength and devotion.",
  "The Shinto sacred tree embodies the eternal spirit of the divine.",
  "The Jain pillar stands as a symbol of spiritual liberation.",
  "The Taoist lotus pond reflects divine harmony and serenity.",
  "The sacred fire burns with the divine connection to the cosmos.",
  "The temple gate opens to the divine mysteries of ancient wisdom.",
  "The sacred heart glows with divine compassion and love.",
  "The Sufi poet’s scroll radiates divine inspiration and mysticism.",
  "The temple gate opens to divine peace and spiritual awakening.",
  "Lakshmi’s presence brings divine prosperity and spiritual abundance.",
  "The Islamic archway frames a sacred path to divine connection.",
  "The Torah scroll radiates the divine light of sacred wisdom.",
  "The sacred flame burns with divine courage and spiritual strength."
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