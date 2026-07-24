const Table = require("cli-table3"); // CLI display notes as Proper table format
const fs = require("fs");
//node app.js add --title="Shopping" --body="Milk, Bread, Eggs"
const arg = process.argv.slice(2);
const command = arg[0];
const title = arg[1]?.split("=")[1];
/*arg[1].split("=")[1]*
    args[1]
    ↓
    "--title=Shopping"

    .split("=")
    ↓
    ["--title", "Shopping"]

    [1]
    ↓
    "Shopping" 
*/
const body = arg[2]?.split("=")[1];
switch(command){
    case "add":
        addNotes(title,body);
        break;
    case "list":
        listNotes();
        break;
    case "read":
        readNote(title);
        break;
    case "remove":
        removeNotes(title);
        break;
    default:
        console.error("xxxxx >> Wrong command : Only Supports add,list,read,remove");
}

function addNotes(title,body){
    const newNotes={
        "date" : new Date(Date.now()),
        "title":title,
        "body":body
    }
    try{
        const notes = fs.readFileSync("./notes.json","utf-8");
        const data = JSON.parse(notes);
        data.push(newNotes);
        const json = JSON.stringify(data, null, 2);
        /*
            null → Don't filter or modify any properties.
            2 → Pretty-print with 2-space indentation.
        */
        fs.writeFileSync("./notes.json", json);
        console.log(">>> Notes Added Successfully!");
    } catch(err){
        console.log("Error : "+err.message);
    }
}

function listNotes(){
    try{
        const notes = fs.readFileSync("./notes.json","utf-8");
        const data = JSON.parse(notes);
        //Create table structure
        const table = new Table({
            head: ["#", "Date", "Title", "Body"],
            colWidths: [5, 28, 20, 35]
        });
        data.forEach((note,idx) => {
            // console.log(`Created At : ${note.date}, Title : ${note.title}, Body : ${note.body}`);
            table.push([
                idx+1,
                new Date(note.date).toLocaleString(),
                note.title,
                note.body,
            ]);
        });
        console.log(table.toString());
    } catch(err){
        console.log("Error : "+err.message);
    }
}

function readNote(title){
    try{
        const notes = fs.readFileSync("./notes.json","utf-8");
        const data = JSON.parse(notes);
        const res = data.filter(note => note.title.trim() === title.trim());
        console.log(res);
    } catch(err){
        console.log("Error : "+err.message);
    }
}

function removeNotes(title){
    try{
        const notes = fs.readFileSync("./notes.json","utf-8");
        const data = JSON.parse(notes);
        const newData = data.filter(note => note.title !== title);
        const json = JSON.stringify(newData, null, 2);
        fs.writeFileSync("./notes.json", json);
        console.log(">>> Notes deleted Successfully!");
    } catch(err){
        console.log("Error : "+err.message);
    }
}