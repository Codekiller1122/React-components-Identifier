import fs from 'fs';
import path from 'path';

const directoryPath = path.join(process.cwd(), 'src'); // Adjust if your files are in a different directory

function findJsxFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(findJsxFiles(filePath));
        } else if (file.endsWith('.jsx')) {
            results.push(filePath);
        }
    });
    return results;
}

const jsxFiles = findJsxFiles(directoryPath);
console.log('JSX files found:');
jsxFiles.forEach(file => console.log(file));
