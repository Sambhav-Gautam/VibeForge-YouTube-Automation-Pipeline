// ===== CONFIG ===== //
const PAINTING_PROMPTS = [
  "Generate a 9:16 vertical image of a lone wolf howling in a twilight savanna under a vibrant, textured sky, surrounded by whispering grasses. Paint it in acrylic with heavy palette knife textures, emphasizing abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Create a 9:16 image of an elephant mourning beside a withered acacia in a twilight savanna under a vibrant, textured sky. Use thick acrylic impasto and abstract symbolism to convey grief. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Generate a hyper-realistic 9:16 image of a soaring eagle clutching a broken arrow in a twilight savanna under a vibrant, textured sky, with distant thunderclouds. Render it as an acrylic painting with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Design a 9:16 surreal image of a whale swimming through a twilight savanna under a vibrant, textured sky, trailing glowing plankton that form constellations. Paint it in pastel acrylics with layered brushwork in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Create a 9:16 image of a tiger’s face dissolving into vibrant vines and flowers in a twilight savanna under a vibrant, textured sky, with dew-kissed petals. Use acrylic and gouache with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Generate a 9:16 image of a polar bear drifting on a melting ice floe in a twilight savanna under a vibrant, textured sky, with fiery aurora accents. Paint it in acrylic with bold impasto strokes and abstract realism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Create a 9:16 ultra-detailed image of a flock of flamingos standing in a reflective salt lake in a twilight savanna under a vibrant, textured sky, their shadows forming human silhouettes. Render it in acrylic with palette knife abstraction. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Generate a 9:16 image of a lion cub chasing a butterfly across a twilight savanna under a vibrant, textured sky, with golden grasses swaying. Paint it in warm-toned acrylics with textured brushwork in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Design a 9:16 surreal image of a rhinoceros standing in a field of shattered glass in a twilight savanna under a vibrant, textured sky, reflecting fractured light. Use acrylic mixed media with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Create a 9:16 image of a sea turtle swimming through a coral reef made of glowing crystals in a twilight savanna under a vibrant, textured sky. Render it in acrylic with pastel tones and palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Generate a 9:16 image of a cheetah sprinting after a fading mirage in a twilight savanna under a vibrant, textured sky, with dust trails swirling. Paint it in acrylic with dynamic palette knife strokes in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Create a 9:16 surreal image of a giraffe with its neck entwined with blooming orchids in a twilight savanna under a vibrant, textured sky. Use acrylic and gouache with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 image of a leopard crouching in tall grasses in a twilight savanna under a vibrant, textured sky, its eyes glowing with intent. Paint it in acrylic with heavy impasto in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Design a 9:16 image of a herd of wildebeest stampeding through a twilight savanna under a vibrant, textured sky, their shadows merging into a single form. Render it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Create a 9:16 image of an owl perched on a twisted baobab branch in a twilight savanna under a vibrant, textured sky, with stars in its feathers. Paint it in acrylic with layered brushwork in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Generate a 9:16 surreal image of a crocodile emerging from a pool of molten gold in a twilight savanna under a vibrant, textured sky. Use acrylic mixed media with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Create a 9:16 image of a hyena laughing under a crescent moon in a twilight savanna under a vibrant, textured sky, with eerie mist rising. Paint it in acrylic with bold impasto in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Generate a 9:16 image of a zebra dissolving into black and white stripes that form a labyrinth in a twilight savanna under a vibrant, textured sky. Render it in acrylic with palette knife abstraction in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Design a 9:16 image of a vulture circling above a skeletal tree in a twilight savanna under a vibrant, textured sky, with crimson clouds. Paint it in acrylic with heavy palette knife textures in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Create a 9:16 surreal image of a pangolin unrolling into a spiral of shimmering scales in a twilight savanna under a vibrant, textured sky. Use acrylic and gouache with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 image of a lioness stalking through a twilight savanna under a vibrant, textured sky, her mane glowing with embers. Paint it in acrylic with bold impasto strokes in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Create a 9:16 image of a flock of parrots bursting into colorful feathers like fireworks in a twilight savanna under a vibrant, textured sky. Render it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Generate a 9:16 surreal image of a gorilla beating its chest as it transforms into stone in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with heavy palette knife textures in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Design a 9:16 image of a meerkat standing sentinel on a rock in a twilight savanna under a vibrant, textured sky, with a halo of light. Use acrylic with layered brushwork in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Create a 9:16 image of a hippopotamus rising from a shimmering pool in a twilight savanna under a vibrant, textured sky, with water droplets glowing. Paint it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Generate a 9:16 surreal image of a cheetah’s spots morphing into falling stars in a twilight savanna under a vibrant, textured sky. Use acrylic and gouache with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Create a 9:16 image of a buffalo charging through a dust storm in a twilight savanna under a vibrant, textured sky, with glowing horns. Paint it in acrylic with bold impasto in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Generate a 9:16 image of a crane dancing in a reflective pool in a twilight savanna under a vibrant, textured sky, with ripples forming patterns. Render it in acrylic with palette knife abstraction in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Design a 9:16 surreal image of a snake coiling into a spiral galaxy in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with layered brushwork in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Create a 9:16 image of a pack of wild dogs hunting under a twilight savanna under a vibrant, textured sky, their eyes like lanterns. Use acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Generate a 9:16 image of an antelope leaping over glowing embers in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with heavy impasto in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Create a 9:16 surreal image of a bat swarm forming a crescent moon in a twilight savanna under a vibrant, textured sky. Use acrylic mixed media with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 image of a rhinoceros with horns carved like ancient runes in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with bold palette knife strokes in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Create a 9:16 image of a flock of ibises flying in a V-shape across a twilight savanna under a vibrant, textured sky, their wings trailing light. Render it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Design a 9:16 surreal image of a tortoise carrying a miniature forest on its shell in a twilight savanna under a vibrant, textured sky. Paint it in acrylic and gouache with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Generate a 9:16 image of a hyrax basking on a glowing rock in a twilight savanna under a vibrant, textured sky, with ethereal mist. Paint it in acrylic with layered brushwork in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Create a 9:16 image of a jackal scavenging among scattered bones in a twilight savanna under a vibrant, textured sky. Use acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Generate a 9:16 surreal image of an ostrich with feathers dissolving into a sandstorm in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with palette knife abstraction in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Create a 9:16 image of a warthog rooting in glowing soil in a twilight savanna under a vibrant, textured sky, with sparks flying. Paint it in acrylic with bold impasto in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Design a 9:16 image of a marabou stork standing over a reflective pool in a twilight savanna under a vibrant, textured sky, its reflection twisted. Render it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 surreal image of a chameleon blending into a kaleidoscope of colors in a twilight savanna under a vibrant, textured sky. Use acrylic and gouache with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Create a 9:16 image of a herd of gazelles leaping in unison in a twilight savanna under a vibrant, textured sky, their hooves sparking light. Paint it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Generate a 9:16 image of a lion roaring as its mane ignites into flames in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with bold impasto strokes in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Create a 9:16 surreal image of a crocodile’s jaws forming a gateway to stars in a twilight savanna under a vibrant, textured sky. Use acrylic mixed media with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 image of an eagle owl with eyes like glowing moons in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Design a 9:16 image of a herd of elephants bathing in a shimmering river in a twilight savanna under a vibrant, textured sky. Render it in acrylic with layered brushwork in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Create a 9:16 surreal image of a leopard’s spots turning into floating lanterns in a twilight savanna under a vibrant, textured sky. Use acrylic and gouache with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Generate a 9:16 image of a giraffe grazing on a glowing tree in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with bold impasto in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Create a 9:16 image of a vulture perched on a cracked skull in a twilight savanna under a vibrant, textured sky, with a blood-red horizon. Paint it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Generate a 9:16 surreal image of a zebra’s stripes unraveling into a ribbon of light in a twilight savanna under a vibrant, textured sky. Use acrylic with palette knife abstraction in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Create a 9:16 image of a lioness cradling her cub in a twilight savanna under a vibrant, textured sky, with a protective aura. Paint it in acrylic with layered brushwork in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Generate a 9:16 image of a cheetah resting on a glowing boulder in a twilight savanna under a vibrant, textured sky, with ethereal mist. Paint it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Create a 9:16 surreal image of a hippopotamus submerged in a pool of liquid silver in a twilight savanna under a vibrant, textured sky. Use acrylic mixed media with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Generate a 9:16 image of a flock of pelicans skimming a reflective lake in a twilight savanna under a vibrant, textured sky, their wings glowing. Render it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Design a 9:16 image of a hyena with a crown of thorns in a twilight savanna under a vibrant, textured sky, with a blood-red glow. Paint it in acrylic with bold impasto in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Create a 9:16 surreal image of a snake shedding its skin into a spiral of stars in a twilight savanna under a vibrant, textured sky. Use acrylic and gouache with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 image of a buffalo grazing under a twilight savanna under a vibrant, textured sky, with a halo of fireflies. Paint it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Create a 9:16 image of a crane standing in a shimmering pool in a twilight savanna under a vibrant, textured sky, with ripples forming eyes. Render it in acrylic with palette knife abstraction in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Generate a 9:16 surreal image of a warthog with tusks glowing like crescent moons in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with bold impasto in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Create a 9:16 image of a meerkat family huddling under a twilight savanna under a vibrant, textured sky, with glowing eyes. Paint it in acrylic with layered brushwork in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 image of an antelope with horns forming a constellation in a twilight savanna under a vibrant, textured sky. Use acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Create a 9:16 surreal image of a bat hanging upside down as its wings form a starry night in a twilight savanna under a vibrant, textured sky. Use acrylic mixed media with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Generate a 9:16 image of a lion’s mane blending into a sunset in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with bold impasto strokes in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Create a 9:16 image of a giraffe’s silhouette against a glowing horizon in a twilight savanna under a vibrant, textured sky. Render it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 surreal image of a crocodile’s scales turning into a mosaic of stars in a twilight savanna under a vibrant, textured sky. Use acrylic and gouache with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Create a 9:16 image of an eagle soaring with wings that bleed into the sky in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Generate a 9:16 image of a leopard stalking through glowing grass in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with bold impasto in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Create a 9:16 surreal image of a zebra’s stripes forming a maze of light in a twilight savanna under a vibrant, textured sky. Use acrylic with palette knife abstraction in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 image of a lion cub playing with a glowing orb in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with layered brushwork in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Create a 9:16 image of a rhinoceros charging through a field of glowing thorns in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Generate a 9:16 surreal image of a tortoise with a shell that reflects the cosmos in a twilight savanna under a vibrant, textured sky. Use acrylic and gouache with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Create a 9:16 image of a flock of starlings forming a swirling vortex in a twilight savanna under a vibrant, textured sky. Render it in acrylic with palette knife abstraction in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 image of a hyena prowling with a trail of glowing footprints in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with bold impasto in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Create a 9:16 surreal image of a snake’s scales dissolving into a river of stars in a twilight savanna under a vibrant, textured sky. Use acrylic mixed media with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Generate a 9:16 image of a buffalo standing against a glowing storm in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Create a 9:16 image of a crane performing a ritual dance in a twilight savanna under a vibrant, textured sky, with glowing feathers. Render it in acrylic with layered brushwork in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 surreal image of a warthog with tusks that form a glowing arch in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Design a 9:16 image of a meerkat gazing at a falling star in a twilight savanna under a vibrant, textured sky. Use acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Create a 9:16 image of an antelope running with a trail of glowing dust in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with bold impasto in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Generate a 9:16 surreal image of a bat swarm creating a silhouette of a tree in a twilight savanna under a vibrant, textured sky. Use acrylic mixed media with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Create a 9:16 image of a lion resting on a glowing rock in a twilight savanna under a vibrant, textured sky, with a fiery mane. Paint it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Generate a 9:16 image of a giraffe with a neck that stretches into the clouds in a twilight savanna under a vibrant, textured sky. Render it in acrylic with layered brushwork in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Create a 9:16 surreal image of a crocodile emerging from a pool of glowing embers in a twilight savanna under a vibrant, textured sky. Use acrylic and gouache with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Generate a 9:16 image of an eagle with wings that form a glowing arc in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Create a 9:16 image of a leopard climbing a glowing tree in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with bold impasto in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Generate a 9:16 surreal image of a zebra with stripes that form a glowing spiral in a twilight savanna under a vibrant, textured sky. Use acrylic with palette knife abstraction in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Create a 9:16 image of a lion cub sleeping under a glowing acacia in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with layered brushwork in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Generate a 9:16 image of a rhinoceros with a horn that glows like a beacon in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Create a 9:16 surreal image of a tortoise with a shell that forms a glowing labyrinth in a twilight savanna under a vibrant, textured sky. Use acrylic and gouache with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Generate a 9:16 image of a flock of starlings creating a wave of light in a twilight savanna under a vibrant, textured sky. Render it in acrylic with palette knife abstraction in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame.",
  "Design a 9:16 image of a hyena with a glowing skull in its jaws in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with bold impasto in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a gold frame.",
  "Create a 9:16 surreal image of a snake coiling around a glowing orb in a twilight savanna under a vibrant, textured sky. Use acrylic mixed media with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a rustic wooden frame.",
  "Generate a 9:16 image of a buffalo with horns that form a glowing crown in a twilight savanna under a vibrant, textured sky. Paint it in acrylic with palette knife texture in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a black frame.",
  "Create a 9:16 image of a crane with wings that reflect the twilight in a twilight savanna under a vibrant, textured sky. Render it in acrylic with layered brushwork in abstract expressionism. Display it as a framed handmade painting on a pure black gallery wall with a single soft white spotlight focused on the artwork, using a silver frame."
];

const PAINTING_CONTEXT = [
  "The wolf’s howl embodies primal solitude, a cry echoing through the vastness of the wild.",
  "The elephant’s grief mirrors the loss of nature’s vitality, a silent plea for a dying world.",
  "The eagle’s broken arrow symbolizes freedom scarred by conflict, soaring above turmoil.",
  "The whale in the sky merges ocean and cosmos, a surreal ode to boundless freedom.",
  "The tiger’s dissolving face reflects strength fading into fragility, a lament for nature’s beauty.",
  "The polar bear’s isolation on melting ice cries out against a warming planet’s betrayal.",
  "The flamingos’ human-like shadows weave wildlife with humanity, suggesting a shared soul.",
  "The lion cub’s chase captures innocence and fleeting joy in the wild’s endless expanse.",
  "The rhinoceros amidst glass stands resilient, a stark warning of environmental destruction.",
  "The sea turtle’s crystalline reef embodies hope and endurance in a transforming world.",
  "The cheetah’s pursuit of a mirage reflects the fleeting nature of desire in the wild.",
  "The giraffe entwined with orchids symbolizes grace blossoming amidst harsh realities.",
  "The leopard’s glowing eyes convey silent intensity, a predator’s soul in twilight’s embrace.",
  "The wildebeest herd’s merged shadows evoke unity and survival in the face of chaos.",
  "The owl with starry feathers embodies wisdom watching over the savanna’s secrets.",
  "The crocodile in molten gold symbolizes primal power emerging from opulent decay.",
  "The hyena’s laugh under a crescent moon captures eerie joy in the wild’s darkness.",
  "The zebra’s labyrinthine stripes reflect the complexity of identity in nature’s design.",
  "The vulture above a skeletal tree speaks of life’s cycle, stark and unyielding.",
  "The pangolin’s shimmering spiral evokes resilience and beauty in vulnerability.",
  "The lioness with an ember-like mane radiates fierce protection and fiery spirit.",
  "The parrots’ feather-fireworks burst with life’s vibrant chaos and fleeting splendor.",
  "The gorilla turning to stone embodies strength frozen in time, defying mortality.",
  "The meerkat sentinel under a halo stands vigilant, a symbol of loyalty and hope.",
  "The hippopotamus in glowing water merges power with serenity, a quiet giant’s grace.",
  "The cheetah’s starry spots connect earth to cosmos, a fleeting spark of eternity.",
  "The buffalo in a dust storm embodies raw power charging through nature’s trials.",
  "The crane’s dance in rippling patterns reflects harmony in motion, a ritual of life.",
  "The snake’s spiral galaxy weaves earth and stars, a symbol of eternal renewal.",
  "The wild dogs’ lantern-like eyes illuminate the hunt, a testament to unity in survival.",
  "The antelope’s leap over embers symbolizes courage defying danger’s glow.",
  "The bat swarm’s crescent moon evokes mystery shaping the night’s silent beauty.",
  "The rhinoceros with runic horns carries ancient wisdom through a modern wasteland.",
  "The ibises’ glowing wings trace paths of migration, a journey etched in light.",
  "The tortoise’s forested shell bears the weight of nature’s enduring sanctuary.",
  "The hyrax on a glowing rock radiates quiet resilience in the face of twilight.",
  "The jackal among bones reflects survival’s harsh truth in a world of remnants.",
  "The ostrich’s dissolving feathers blend speed with chaos, a dance with the storm.",
  "The warthog’s sparking tusks embody raw energy breaking through the earth’s heart.",
  "The marabou stork’s twisted reflection questions existence in the wild’s mirror.",
  "The chameleon’s kaleidoscope merges adaptation with beauty, a shifting masterpiece.",
  "The gazelles’ sparking hooves capture unity and grace in synchronized flight.",
  "The lion’s fiery mane roars of dominance and passion burning through twilight.",
  "The crocodile’s starry jaws open a portal to the cosmos, blending power with mystery.",
  "The eagle owl’s moonlit eyes guard the secrets of the night’s silent watch.",
  "The elephants’ bath in a shimmering river celebrates life’s quiet, communal joy.",
  "The leopard’s lantern-like spots light a path through nature’s hidden dangers.",
  "The giraffe’s glowing graze connects earth to sky, a gentle giant’s dream.",
  "The vulture on a skull speaks of death’s inevitability, stark yet poetic.",
  "The zebra’s unraveling stripes weave light into chaos, a symbol of freedom.",
  "The lioness cradling her cub radiates maternal love, fierce and eternal.",
  "The cheetah on a boulder exudes quiet strength, resting in twilight’s glow.",
  "The hippopotamus in liquid silver embodies power submerged in serene beauty.",
  "The pelicans’ glowing wings skim the line between earth and sky, a fleeting grace.",
  "The hyena’s thorny crown carries the burden of survival’s harsh judgment.",
  "The snake’s starry skin sheds earthly bounds, embracing cosmic renewal.",
  "The buffalo’s firefly halo glows with quiet strength in the face of night.",
  "The crane’s rippling eyes dance with life’s mystery, reflected in twilight.",
  "The warthog’s crescent tusks carve light into the savanna’s deepening dusk.",
  "The meerkat family’s glowing eyes shine with unity and unwavering vigilance.",
  "The antelope’s starry horns map the sky, a leap toward celestial freedom.",
  "The bat swarm’s tree silhouette shapes nature’s mystery in twilight’s embrace.",
  "The lion’s sunset mane blends power with the fleeting beauty of dusk.",
  "The giraffe’s cloudy neck reaches for dreams, grounded yet ethereal.",
  "The crocodile’s starry scales weave primal strength with cosmic wonder.",
  "The eagle’s glowing arc soars as a bridge between earth and infinity.",
  "The leopard in glowing grass stalks with silent grace, a shadow of power.",
  "The zebra’s glowing maze twists identity into light, a puzzle of existence.",
  "The lion cub’s glowing orb holds the promise of innocence in a vast wild.",
  "The rhinoceros’s beacon-like horn shines defiance through twilight’s haze.",
  "The tortoise’s cosmic shell carries the universe, a slow journey to eternity.",
  "The starlings’ vortex of light swirls with the chaos and beauty of unity.",
  "The hyena’s glowing skull bites into the heart of survival’s raw truth.",
  "The snake’s glowing orb coils life’s mystery into a radiant embrace.",
  "The buffalo’s glowing crown stands regal amidst the savanna’s wild heart.",
  "The crane’s reflective wings mirror the twilight, a dance of fleeting light.",
  "The warthog’s glowing arch carves a path through the savanna’s mystic dusk.",
  "The meerkat’s falling star evokes hope in the vastness of the wild night.",
  "The antelope’s glowing dust trails speed and light through twilight’s embrace.",
  "The bat swarm’s tree silhouette weaves night’s mystery into living art.",
  "The lion on a glowing rock radiates majesty, resting in twilight’s fire.",
  "The giraffe’s cloudy silhouette stretches toward the heavens, a quiet dream.",
  "The crocodile’s ember pool merges primal power with fiery rebirth.",
  "The eagle’s glowing arc bridges earth and sky, a soar toward eternity.",
  "The leopard’s glowing climb ascends nature’s challenges with silent grace.",
  "The zebra’s glowing spiral spins identity into a radiant cosmic dance.",
  "The lion cub’s glowing acacia cradles innocence under twilight’s shelter.",
  "The rhinoceros’s glowing horn pierces the dusk, a beacon of resilience.",
  "The tortoise’s glowing labyrinth holds the secrets of a wandering cosmos.",
  "The starlings’ wave of light surges with the pulse of collective life.",
  "The hyena’s glowing skull carries the weight of survival’s stark truth.",
  "The snake’s starry river flows from earth to sky, a path of renewal.",
  "The buffalo’s glowing crown reigns over the savanna’s twilight kingdom.",
  "The crane’s twilight wings reflect the dance of life in shimmering light."
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