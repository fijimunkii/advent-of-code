// Day 2
const opfn = {
  [1]: (data, a, b, c) => { data[c] = data[a] + data[b]; },
  [2]: (data, a, b, c) => { data[c] = data[a] * data[b]; }
}
const runops = (data) => {
  for (let i=0; i<data.length;i+=4) {
    if (data[i] == 99) { break; }
    opfn[data[i]](data, data[i+1], data[i+2], data[i+3]);
  }
  return data;
};

const findInputs = output => {
  for (let n=0; n<=99; n++) {
    for (let v=0; v<=99; v++) {
      const data = cloneData();
      data[1]=n;
      data[2]=v;
      runops(data);
      if (data[0] == output) {
        return [n, v];
      }
    }
  }
};

const fs = require('fs');
const path = require('path');
const originalData = fs.readFileSync(path.join(__dirname,'02.txt'))
  .toString()
  .split(',')
  .map(d => +d);
const cloneData = () => originalData.slice(0);

// part 1
// restore gravity assist program
const dataPart1 = cloneData();
dataPart1[1] = 12;
dataPart1[2] = 2;
runops(dataPart1);
console.log(`Answer for part 1: ${dataPart1[0]}`);

// part 2
// enumerate to find inputs
const [noun,verb] = findInputs(19690720);
console.log(`Answer for part 2: ${(100 * noun) + verb}`);
