(function(){

  const data = {
    t: "heading",
    d: 1,
    p: { lines: [0, 1] },
    v: "Proyecto Fullstack Javascript",
    c: [
      {
        t: "heading",
        d: 2,
        p: { lines: [1, 2] },
        v: "Frontend",
        c: [
          {
            t: "heading",
            d: 3,
            p: { lines: [2, 3] },
            v: "VueJS",
            c: [
              { t: "heading", d: 4, p: { lines: [3, 4] }, v: "M-V-VM" },
              { t: "heading", d: 4, p: { lines: [4, 5] }, v: "Render Engine" },
              { t: "heading", d: 4, p: { lines: [5, 6] }, v: "Virtual DOM" },
            ],
          },
          {
            t: "heading",
            d: 3,
            p: { lines: [6, 7] },
            v: "Vue-CLI",
            c: [
              { t: "heading", d: 4, p: { lines: [7, 8] }, v: "Webpack" },
              { t: "heading", d: 4, p: { lines: [8, 9] }, v: "Babel" },
              { t: "heading", d: 4, p: { lines: [9, 10] }, v: "Webpack Dev-Server (HMR)" },
              { t: "heading", d: 4, p: { lines: [10, 11] }, v: "SFC" },
            ],
          },
          { t: "heading", d: 3, p: { lines: [11, 12] }, v: "Vuetify", c: [{ t: "heading", d: 4, p: { lines: [12, 13] }, v: "Materialize guidelines" }] },
          { t: "heading", d: 3, p: { lines: [13, 14] }, v: "Vuex", c: [{ t: "heading", d: 4, p: { lines: [14, 15] }, v: "State Management Pattern Library" }] },
          { t: "heading", d: 3, p: { lines: [15, 16] }, v: "Router", c: [{ t: "heading", d: 4, p: { lines: [16, 17] }, v: "SPA with Routes and Chunks" }] },
          { t: "heading", d: 3, p: { lines: [17, 18] }, v: "Firebase", c: [{ t: "heading", d: 4, p: { lines: [18, 19] }, v: "Cloud Services" }] },
          {
            t: "heading",
            d: 3,
            p: { lines: [19, 20] },
            v: "Code Quality",
            c: [
              { t: "heading", d: 4, p: { lines: [20, 21] }, v: "Cypress" },
              { t: "heading", d: 4, p: { lines: [21, 22] }, v: "ESlint" },
              { t: "heading", d: 4, p: { lines: [22, 23] }, v: "Jest" },
            ],
          },
        ],
      },
      {
        t: "heading",
        d: 2,
        p: { lines: [23, 24] },
        v: "Backend",
        c: [
          {
            t: "heading",
            d: 3,
            p: { lines: [24, 25] },
            v: "NodeJS",
            c: [
              {
                t: "heading",
                d: 4,
                p: { lines: [25, 26] },
                v: "Express",
                c: [
                  { t: "heading", d: 5, p: { lines: [26, 27] }, v: "Business Logic Services" },
                  { t: "heading", d: 5, p: { lines: [27, 28] }, v: "Endpoints &amp; Middlewares" },
                ],
              },
            ],
          },
          {
            t: "heading",
            d: 3,
            p: { lines: [28, 29] },
            v: "Postgres",
            c: [
              { t: "heading", d: 4, p: { lines: [29, 30] }, v: "Migraciones &amp; Seeds" },
              { t: "heading", d: 4, p: { lines: [30, 31] }, v: "Sequelize ORM" },
            ],
          },
          { t: "heading", d: 3, p: { lines: [31, 32] }, v: "Firebase", c: [{ t: "heading", d: 4, p: { lines: [32, 33] }, v: "Cloud Services" }] },
          {
            t: "heading",
            d: 3,
            p: { lines: [33, 34] },
            v: "Code Quality",
            c: [
              { t: "heading", d: 4, p: { lines: [34, 35] }, v: "Jest" },
              { t: "heading", d: 4, p: { lines: [35, 36] }, v: "ESLint" },
            ],
          },
        ],
      },
      {
        t: "heading",
        d: 2,
        p: { lines: [36, 37] },
        v: "Deployment",
        c: [
          {
            t: "heading",
            d: 3,
            p: { lines: [37, 38] },
            v: "GitHub Actions",
            c: [
              { t: "heading", d: 4, p: { lines: [38, 39] }, v: "Build process" },
              { t: "heading", d: 4, p: { lines: [39, 40] }, v: "Env variables" },
              { t: "heading", d: 4, p: { lines: [40, 41] }, v: "App Secrets" },
            ],
          },
          {
            t: "heading",
            d: 3,
            p: { lines: [41, 42] },
            v: "Heroku",
            c: [
              { t: "heading", d: 4, p: { lines: [42, 43] }, v: "Build process" },
              { t: "heading", d: 4, p: { lines: [43, 44] }, v: "Env variables" },
              { t: "heading", d: 4, p: { lines: [44, 45] }, v: "App Secrets" },
            ],
          },
        ],
      },
    ],
  };
  
  const { Markmap } = window.markmap;
  
  
  window.mm = Markmap.create('svg#mindmap', null, data);
  
  const click = new MouseEvent('click')
  const circles = document.querySelectorAll('circle')
  circles.forEach((circle) => circle.dispatchEvent(click))
  mm.fit()
  
  setTimeout(() => {
    const { markmap, mm } = window;
    const toolbar = new markmap.Toolbar();
    toolbar.attach(mm);
    const el = toolbar.render();
    const container = document.getElementById('mindmap-controls')
    container.append(el);
  })
  
})()