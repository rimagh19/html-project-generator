 
import * as fsPromises from 'node:fs/promises';
import { existsSync } from 'node:fs';
const Generate = function(name, files, images, data) {
    // 1- CREATE PROJECT
    const folderName = `../${name}`;
    const fileExists = existsSync(folderName);
    try {
        if (!fileExists) {
            fsPromises.mkdir(folderName);
        }
      } catch (err) {
        console.error(err);
      }
    // 2- CREATE FILES
    if(files){
        if(files.includes("html")){
            fsPromises.copyFile("./templates/index.html",`${folderName}/index.html`)
        }
        if(files.includes("css")){
            fsPromises.copyFile("./templates/style.css",`${folderName}/style.css`)
        }
        if(files.includes("css")){
            fsPromises.copyFile("./templates/script.js",`${folderName}/script.js`)
        }
    }
    if(images){
        fsPromises.mkdir(`${folderName}/images`);
    }
    if(data){
        fsPromises.mkdir(`${folderName}/data`);
    }
}

  
export default Generate;