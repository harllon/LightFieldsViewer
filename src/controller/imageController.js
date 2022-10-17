const fs = require('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const utilFunctions = require('../util/utilFunctions')

const airplaneController = async (req, res) => {
    var folder = './src/public/demo/airplane';
    var imgSrc = './public/demo/airplane';
    await readdir(folder).then(files => {
        var data = utilFunctions.createObject(files, imgSrc);
        res.status(200).json(data);
    }).catch(err => {
        console.log(err);
        res.status(500).send({message: 'There was a problem in the server'});
    });
}



module.exports = {
    airplaneController
}