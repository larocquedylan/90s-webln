"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lightningController_1 = require("./lightningController");
const router = express_1.default.Router();
router.use(express_1.default.json());
router.get('/', lightningController_1.hello);
// router.get('/:id', getSongById);
// router.get('/download/:songId', downloadSong);
// router.get('/stream/:songId', streamSong);
exports.default = router;
