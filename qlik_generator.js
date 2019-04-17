/**
 *  DECLARE REQUIRED LIBRARY 
*/
const path = require('path');
const os = require('os');
const fs = require('fs');
const cpy = require('cpy');
const pkg = require('./package.json');

/**
 *  DECLARE  PATH
*/
const qdirpath = ['Documents', 'Qlik', 'Sense', 'Extensions', qname];
if (os.platform() === 'win32') {
    qdirpath.splice(1, 0, 'Documents');
}
  
const src = path.resolve(__dirname, 'src');
const output = path.resolve(__dirname, 'dist');
const qlik = path.resolve(...qdirpath);

const qext = {  
    name: pkg.name,
    description: pkg.description,
    author: pkg.author,
    type: 'visualization',
    version: pkg.version,
    preview: 'assets/preview.png',
    homepage: pkg.homepage,
}


class ExtensionBuilder {  

    createQext() {
        if (!fs.existsSync(output)) {
            fs.mkdirSync(output);
        }
        fs.writeFileSync(path.resolve(output, `${pkg.name}.qext`), JSON.stringify(qext, null, 2));
    }

    buid(){
        cpy(
            [`${pkg.name}.qext`,'*.wbl','assets/*.PNG','css/*.ttf',], output, {cwd: src,parents: true,}
            ).then(() => {
                cpy(
                    ['./**/*.*'], qlik, {cwd: output,parents: true,}
                );
        });
    }
}

export {ExtensionBuilder};  