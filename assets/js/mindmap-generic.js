
const data = {"t":"heading","d":1,"p":{"lines":[0,1]},"v":"Proyecto Fullstack Javascript","c":[{"t":"heading","d":2,"p":{"lines":[1,2]},"v":"Frontend","c":[{"t":"heading","d":3,"p":{"lines":[2,3]},"v":"Frontend Frameworks","c":[{"t":"heading","d":4,"p":{"lines":[3,4]},"v":"Angular"},{"t":"heading","d":4,"p":{"lines":[4,5]},"v":"React"},{"t":"heading","d":4,"p":{"lines":[5,6]},"v":"Vue"},{"t":"heading","d":4,"p":{"lines":[6,7]},"v":"Backbone"},{"t":"heading","d":4,"p":{"lines":[7,8]},"v":"Svelte"}]},{"t":"heading","d":3,"p":{"lines":[8,9]},"v":"Tooling","c":[{"t":"heading","d":4,"p":{"lines":[9,10]},"v":"Webpack"},{"t":"heading","d":4,"p":{"lines":[10,11]},"v":"Babel"},{"t":"heading","d":4,"p":{"lines":[11,12]},"v":"Webpack Dev-Server(HMR)"},{"t":"heading","d":4,"p":{"lines":[12,13]},"v":"Others (TS, JSX, SFC, etc)"}]},{"t":"heading","d":3,"p":{"lines":[13,14]},"v":"UI Framework","c":[{"t":"heading","d":4,"p":{"lines":[14,15]},"v":"Elementor"},{"t":"heading","d":4,"p":{"lines":[15,16]},"v":"Material Design"},{"t":"heading","d":4,"p":{"lines":[16,17]},"v":"Semantic UI"}]},{"t":"heading","d":3,"p":{"lines":[17,18]},"v":"State Management Solution","c":[{"t":"heading","d":4,"p":{"lines":[18,19]},"v":"NGRX"},{"t":"heading","d":4,"p":{"lines":[19,20]},"v":"Flux"},{"t":"heading","d":4,"p":{"lines":[20,21]},"v":"Context"},{"t":"heading","d":4,"p":{"lines":[21,22]},"v":"Vuex"}]},{"t":"heading","d":3,"p":{"lines":[22,23]},"v":"SPA/Router"},{"t":"heading","d":3,"p":{"lines":[23,24]},"v":"Cloud Services","c":[{"t":"heading","d":4,"p":{"lines":[24,25]},"v":"Firebase"},{"t":"heading","d":4,"p":{"lines":[25,26]},"v":"Amplify"}]},{"t":"heading","d":3,"p":{"lines":[26,27]},"v":"Code Quality","c":[{"t":"heading","d":4,"p":{"lines":[27,28]},"v":"Test E2E"},{"t":"heading","d":4,"p":{"lines":[28,29]},"v":"Unit Tests"},{"t":"heading","d":4,"p":{"lines":[29,30]},"v":"Linters"}]}]},{"t":"heading","d":2,"p":{"lines":[30,31]},"v":"Backend","c":[{"t":"heading","d":3,"p":{"lines":[31,32]},"v":"JS Runtime","c":[{"t":"heading","d":4,"p":{"lines":[32,33]},"v":"Web Framework","c":[{"t":"heading","d":5,"p":{"lines":[33,34]},"v":"Endpoints"},{"t":"heading","d":5,"p":{"lines":[34,35]},"v":"Business Logic Services"},{"t":"heading","d":5,"p":{"lines":[35,36]},"v":"Middleware"}]},{"t":"heading","d":4,"p":{"lines":[36,37]},"v":"Database","c":[{"t":"heading","d":5,"p":{"lines":[37,38]},"v":"SQL"},{"t":"heading","d":5,"p":{"lines":[38,39]},"v":"NoSQL"}]}]}]},{"t":"heading","d":2,"p":{"lines":[39,40]},"v":"Deployment","c":[{"t":"heading","d":3,"p":{"lines":[40,41]},"v":"Build Process","c":[{"t":"heading","d":4,"p":{"lines":[41,42]},"v":"Code Optimization"},{"t":"heading","d":4,"p":{"lines":[42,43]},"v":"Env Variables &amp; App Secrets"}]},{"t":"heading","d":3,"p":{"lines":[43,44]},"v":"Deployment Process","c":[{"t":"heading","d":4,"p":{"lines":[44,45]},"v":"Version manager"},{"t":"heading","d":4,"p":{"lines":[45,46]},"v":"Rollbacks"},{"t":"heading","d":4,"p":{"lines":[46,47]},"v":"Env Variables &amp; App Secrets"}]}]}]}

const { Markmap } = window.markmap;

window.mm = Markmap.create('svg#mindmap-generic', null, data);

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
