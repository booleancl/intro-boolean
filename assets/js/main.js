
const booleanSlidesModule = {
  revealOptions: {
    controls: true,
    progress: true,
    history: true,
    center: true,
    plugins: [RevealMarkdown],
    theme: 'simple', // https://revealjs.com/themes/
    transition: 'none', // https://revealjs.com/transitions/,
    disableLayout: true
  },
  handleSlide(event) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    const { indexh } = event;
    const isFirstSlide = Reveal.isFirstSlide();

    if (isFirstSlide) {
      document.body.classList.remove('slide-global')
    } else {
      document.body.classList.add('slide-global')
    }
  },
  initialize() {
    // Full list of configuration options available here:
    // https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize(this.revealOptions);
    Reveal.on('ready', this.handleSlide);
    Reveal.on('slidechanged', this.handleSlide);
  }
};

booleanSlidesModule.initialize();
