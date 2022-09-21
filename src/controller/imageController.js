const fs = require('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const utilFunctions = require('../util/utilFunctions')


const greekController = async (req, res) => {
    var folder = './src/public/datasets/greek';
    var imgSrc = './public/datasets/greek';
    await readdir(folder).then(files => {
        var data = utilFunctions.createObject(files, imgSrc);
        res.status(200).json(data);
    }).catch(err => {
        console.log(err);
        res.status(500).send({message: 'There was a problem in the server'});
    });
}

const sideboardController = async (req, res) => {
    var folder = './src/public/datasets/sideboard';
    var imgSrc = './public/datasets/sideboard';
    await readdir(folder).then(files => {
        var data = utilFunctions.createObject(files, imgSrc);
        res.status(200).json(data);
    }).catch(err => {
        console.log(err);
        res.status(500).send({message: 'There was a problem in the server'});
    });
}

const bikesController = async (req, res) => {
    var folder = './src/public/datasets/bikesResized';
    var imgSrc = './public/datasets/bikesResized';
    await readdir(folder).then(files => {
        var data = utilFunctions.createObject(files, imgSrc);
        res.status(200).json(data);
    }).catch(err => {
        console.log(err);
        res.status(500).send({message: 'There was a problem in the server'});
    });
}

const tarotController = async (req, res) => {
    var folder = './src/public/datasets/tarotResized';
    var imgSrc = './public/datasets/tarotResized';
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