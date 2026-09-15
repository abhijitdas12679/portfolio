const si = require('react-icons/si');
const keys = Object.keys(si);

const search = ['amazon', 'aws', 'azure', 'powerbi', 'tableau', 'sqlserver', 'microsoftsqlserver'];
search.forEach(s => {
  const matches = keys.filter(k => k.toLowerCase().includes(s));
  console.log(`Matches for ${s}:`, matches);
});
