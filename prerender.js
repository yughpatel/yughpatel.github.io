// Bakes the JS-rendered sections (projects, skills, experience, credentials)
// into index.html so they are readable without JavaScript (crawlers, link
// previews, no-JS readers). Run after editing the data in script.js:
//   node prerender.js
const fs = require('fs');
const vm = require('vm');

const src = fs.readFileSync('script.js', 'utf8');
const ctx = vm.createContext({
  document: { addEventListener() {} },
  matchMedia: () => ({ matches: false }),
});
const m = vm.runInContext(
  src + '\n;({ PROJECTS, SKILLS, EXPERIENCE, CREDENTIALS, projectRowHTML, skillGroupHTML, changeEntryHTML, credRowHTML })',
  ctx
);

const blocks = {
  projects: m.PROJECTS.map(m.projectRowHTML),
  skills: m.SKILLS.map(m.skillGroupHTML),
  changelog: m.EXPERIENCE.map(m.changeEntryHTML),
  creds: m.CREDENTIALS.map(m.credRowHTML),
};

let html = fs.readFileSync('index.html', 'utf8');
for (const [key, items] of Object.entries(blocks)) {
  const re = new RegExp(`(<!--pr:${key}-->)[\\s\\S]*?(<!--/pr:${key}-->)`);
  if (!re.test(html)) throw new Error(`marker pr:${key} missing in index.html`);
  html = html.replace(re, (_, a, b) => a + items.join('') + b);
}
fs.writeFileSync('index.html', html);
console.log('prerendered:', Object.entries(blocks).map(([k, v]) => `${k}=${v.length}`).join(' '));
