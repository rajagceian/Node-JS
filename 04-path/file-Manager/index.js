//File organizer — Downloads folder ke files ko extension ke hisaab se subfolders mein move kare
const path = require("path");
const os = require("os"); // Downloads ko search karne ke liye
const fs = require("fs"); // files access karne ke liye

const dir = path.join(os.homedir(),"Downloads"); // Downloads folder ka absolute path
const files = fs.readdirSync(dir);

const fileManager = {};
files.forEach((file)=>{
    const ext = path.extname(file).slice(1); // slice(1) => dot(.pdf) ko remove karne ke liye
    //--- For JSON -------
    if(!(ext in fileManager)){
        fileManager[ext] = [file];
    }else{
        fileManager[ext].push(file);
    }
    //----- For Actual Organization ---
    const newFolder = path.join(dir,ext);
    if(!fs.existsSync(newFolder)){
        fs.mkdirSync(newFolder);
    }
    //--- move files -------(from  ,   to)
    fs.renameSync(path.join(dir,file),path.join(newFolder,file));
});
fs.writeFileSync("fileManager.json",JSON.stringify(fileManager));
console.log("Files are organized and Folder structure is prepared successfully");