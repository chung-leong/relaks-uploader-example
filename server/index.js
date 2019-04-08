const Express = require('express');
const BodyParser = require('body-parser');
const Multer = require('multer');
const Bluebird = require('bluebird');
const FS = Bluebird.promisifyAll(require('fs'));
const Crypto = Bluebird.promisifyAll(require('crypto'));

const serverPort = 8080;
const destinationFolder = `${__dirname/uploads}`;

let app = Express();
app.use(BodyParser.urlencoded({ extended: true }));
app.post('/stream', handleStream);
app.post('/upload', handleUpload);
app.listen(serverPort);

async function handleUpload(req, res) {

}

async function handleStream(req, res) {
    let file = req.file;
    let id = req.body.id;
    if (!id) {

    } else {
        id = generateRandomID();
    }
    res.json({ id, hash });
}
