export default [
  {
    id: 1,
    title: 'The Mermaid Pools',
    text:
      "This website was made to improve my CSS and Vue.js skills, especially regarding the creation of responsive websites. If you're on a computer, try resizing the window to see how the layout changes! I'm am very happy with how this turned out.",
    imagePath: require('../images/matapouri.png'),
    imagePathFullSize: require('../images/matapouri-large.png'),
    imageAlt: 'A girl standing on rocky cliff, sky in background. (Photograph)',
    info: 'August 23rd, 2019'
  },
  {
    id: 2,
    title: 'A Day at the Beach',
    text:
      'The Recent Posts and About Me pages each only took a couple minutes to make after I finished the CSS and components for the Home page. Really demonstrates how versatile your code is when written with modularity in mind.',
    imagePath: require('../images/tauranga.png'),
    imagePathFullSize: require('../images/tauranga-large.png'),
    imageAlt:
      'A girl in a red swimsuit walking in shallow water at the beach, an island in the distance. (Photograph)',
    info: 'August 17th, 2019'
  },
  {
    id: 3,
    title: 'Visiting Home',
    text:
      'The site used to have a terrible FOUT (flash of unstyled text). I largely fixed that by downloading the fonts and hosting them with the website. There is still a little bit of a FOUC (flash of unstyled content) though, so I might add a short loading screen for the whole thing.',
    imagePath: require('../images/whangateau.png'),
    imagePathFullSize: require('../images/whangateau-large.png'),
    imageAlt:
      'The sun setting over a landscape of grassy hills and trees. (Photograph)',
    info: 'August 8th, 2019'
  },
  {
    id: 4,
    title: 'Hole in the Rock',
    text:
      "For some reason I couldn't find an intuitive way to upload this vue project onto GitHub pages. The build files were showing a blank page in production. What I ended up doing was making a small change in vue.config.js, then I wrote a python script to build and rename the dist folder to be the docs folder.",
    imagePath: require('../images/russel.png'),
    imagePathFullSize: require('../images/russel-large.png'),
    imageAlt:
      'A rocky island with a tunnel-like hole underneath it large enough for boats to pass through. (Photograph)',
    info: 'July 29th, 2019'
  }
]
