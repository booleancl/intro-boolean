
const booleanSlidesModule = {
  revealOptions: {
    controls: true,
    progress: true,
    history: true,
    center: true,
    plugins: [
      RevealMarkdown
    ],
    theme: 'simple', // https://revealjs.com/themes/
    transition: 'none', // https://revealjs.com/transitions/,
    disableLayout: true
  },
  handleWordMap() {
    const wordMaps = document.querySelectorAll('svg.wordmap');

    Array.from(
      wordMaps
    ).forEach((wordMap) => {
      wordMap.addEventListener('click', (event) => {
        
        const scaleTarget = wordMap.querySelector('circle.scale-target')
        
        scaleTarget.setAttribute('fill', 'rgb(155, 93, 100)')
        scaleTarget.innerHTML = `
          <animateTransform
            attributeName="transform"
            type="scale"
            additive="sum"
            from="1 1"
            to="2 2"
            begin="0s"
            dur="1s"
            repeatCount="30"
            ></animateTransform>
        `
      })
    })
  },
  handleSlide(event) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    const { indexh } = event;
    const isFirstSlide = Reveal.isFirstSlide();
  },
  
 
  initialize() {
    // Full list of configuration options available here:
    // https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize(this.revealOptions);
    Reveal.on('ready', (event) => {
      this.handleSlide(event);
      this.handleWordMap();
    });
    Reveal.on('slidechanged', (event) => this.handleSlide(event));
  }
};

booleanSlidesModule.initialize();

