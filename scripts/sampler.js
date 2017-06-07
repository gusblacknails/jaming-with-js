//-----------the sampler for each drum sound---------------//
var kickSampler = new Tone.MultiPlayer({
    urls: {
        
        "k1": "./samples/kickPunch.mp3",
        "k2": "./samples/kickRadiant.mp3",
        "k3": "./samples/kickFutura.mp3",
    },
    volume: -3,
    fadeOut: 0.1,
}).toMaster();
var snareSampler = new Tone.MultiPlayer({
    urls: {
        "sS": "./samples/snareSeismic.mp3",
        "sR": "./samples/snareRadiant.mp3",
        "sP": "./samples/snarePunch.mp3",
    },
    volume: -3,
    fadeOut: 0.1,
}).toMaster();
var hihatSampler = new Tone.MultiPlayer({
    urls: {
       
        "hh": "./samples/hihat.mp3",
        "hR": "./samples/hihatRadiant.mp3",
        "hS": "./samples/hihatSeismic.mp3",
    },
    volume: -3,
    fadeOut: 0.1,
}).toMaster();
var fxSampler = new Tone.MultiPlayer({
    urls: {
        "fC": "./samples/fxClap.mp3",
        "f2": "./samples/fxSound2.mp3",
        "f3": "./samples/fxSound3.mp3",
    },
    volume: -3,
    fadeOut: 0.1,
}).toMaster();

//the notes will play each sampler
var drumSound = ["k1", "k2", "k3", "sP", "sR", "sS", "hh", "hR", "hS", "fC", "f2", "f3"];
var kickSound = ["k1", "k2", "k3"];
var snareSound = ["sP", "sR", "sS"];
var hihatSound = ["hh", "hR", "hS"];
var fxSound = ["fC", "f2", "f3"];


var kickSelect = kickSound[0]
var snareSelect= snareSound[0]
var hihatSelect= hihatSound[0]
var fxSelect= fxSound[0]