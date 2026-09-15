const si = require('react-icons/si');
const keys = Object.keys(si);
const searchStrings = ['aws', 'amazon', 'azure', 'power', 'tableau', 'sql', 'microsoft'];

searchStrings.forEach(s => {
  console.log(`--- ${s} ---`);
  console.log(keys.filter(k => k.toLowerCase().includes(s)));
});
