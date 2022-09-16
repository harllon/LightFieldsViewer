const fs = require('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const utilFunctions = require('../util/utilFunctions')


const greekController = async (req, res) => {
    console.log("here");
    var folder = './src/public/greek';
    var imgSrc = './public/greek';
    await readdir(folder).then(files => {
        var data = utilFunctions.createObject(files, imgSrc);
        res.status(200).json(data);
    }).catch(err => {
        console.log(err);
        res.status(500).send({message: 'There was a problem in the server'});
    });
    
   // res.status(200).json(data);
}

const sideboardController = async (req, res) => {
    var folder = './src/public/sideboard';
    var imgSrc = './public/sideboard';
    await readdir(folder).then(files => {
        var data = utilFunctions.createObject(files, imgSrc);
        res.status(200).json(data);
    }).catch(err => {
        console.log(err);
        res.status(500).send({message: 'There was a problem in the server'});
    });
}

const bikesController = async (req, res) => {
    var folder = './src/public/bikesResized';
    var imgSrc = './public/bikesResized';
    await readdir(folder).then(files => {
        var data = utilFunctions.createObject(files, imgSrc);
        res.status(200).json(data);
    }).catch(err => {
        console.log(err);
        res.status(500).send({message: 'There was a problem in the server'});
    });
}

const tarotController = async (req, res) => {
    var folder = './src/public/tarotResized';
    var imgSrc = './public/tarotResized';
    await readdir(folder).then(files => {
        var data = utilFunctions.createObject(files, imgSrc);
        res.status(200).json(data);
    }).catch(err => {
        console.log(err);
        res.status(500).send({message: 'There was a problem in the server'});
    });
}

module.exports = {
    greekController,
    sideboardController,
    bikesController,
    tarotController
}