"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _electron = require("electron");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainWindow = function MainWindow() {
    var _this = this;

    _classCallCheck(this, MainWindow);

    this.window = new _electron.BrowserWindow({ width: 800, height: 600 });
    this.window.loadURL('file://${__dirname}/../../index.html');
    this.window.on("closed", function () {
        _this.window = null;
    });
};

function createMainWindow() {
    return new MainWindow();
}

exports.default = createMainWindow;