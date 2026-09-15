const si = require('react-icons/si');
const keys = Object.keys(si);
const searchStrings = ['spark', 'snowflake', 'kubernetes', 'docker', 'jenkins', 'terraform', 'hadoop', 'kafka', 'fastapi'];

searchStrings.forEach(s => {
  console.log(`--- ${s} ---`);
  console.log(keys.filter(k => k.toLowerCase().includes(s)));
});
