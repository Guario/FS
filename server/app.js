//let wr = require('./wr');

let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let fs = require('fs');


app.use(bodyParser.json({type: 'application/*+json'}));


app.get("/data", function (req, res) {

    let content = fs.readFileSync("data.json");
    let fsdata = JSON.parse(content);
    res.send(fsdata);
});

app.get("/data/:name", function (req, res) {

    let name = decodeURIComponent(req.params.name);

    let content = fs.readFileSync("data.json");
    let fsdata = JSON.parse(content);
    let obj = null;

    for (let i = 0; i < fsdata.length; i++) {
        if (fsdata[i].name === name) {
            obj = fsdata[i];
            break;
        }
    }

    if (obj) {
        res.send(obj);
    }
    else {
        res.status(404).send();
    }
});

app.post("/data", function (req, res) {
    if (!req.body) return res.sendStatus(400);

    let obj = {name: req.body.name, type: req.body.type, parentName: req.body.parentName};

    let data = fs.readFileSync("data.json");
    let fsdata = JSON.parse(data);

    let parent = fsdata;
    if (obj.parentName) {
        for (let i = 0; i < fsdata.length; i++) {
            let _node = fsdata[i];
            if (_node.type === 'folder' && _node.name === obj.parentName) {
                parent = _node.children;
                break;
            }
        }
    }

    parent.push(obj);
    fs.writeFileSync("data.json", fsdata);

    res.send(fsdata);
});
/*
app.post("/createFolder", function (req, res) {
    if (!req.body.nameFolder) return res.sendStatus(400);
    console.log(req.body.nameFolder);
});

app.post("/createFile", function (req, res) {
    if (!req.body.nameFile) return res.sendStatus(400);
    console.log(req.body.nameFile);
});
*/

app.listen(3000);
