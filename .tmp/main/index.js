"use strict";

var _electron = require("electron");

var _createMainWindow = require("./createMainWindow");

var _createMainWindow2 = _interopRequireDefault(_createMainWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainWindow = null;

_electron.app.on("ready", function () {
    mainWindow = (0, _createMainWindow2.default)();
});

_electron.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        _electron.app.quit();
    }
});

_electron.app.on("activate", function (_e, hasVisibleWindows) {
    if (!hasVisibleWindows) {
        mainWindow = (0, _createMainWindow2.default)();
    }
});