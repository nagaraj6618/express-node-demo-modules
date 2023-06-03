const path=require('path')
console.log(path.sep);
const pathName=path.join('nagaraj','mernFullStack','express')
console.log(pathName);
const baseName=path.basename(pathName)
console.log(baseName);
console.log(path.resolve(__filename));
