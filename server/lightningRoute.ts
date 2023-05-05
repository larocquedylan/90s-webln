import express, { Router } from 'express';
import { hello } from './lightningController';

const router: Router = express.Router();

router.use(express.json());

router.get('/', hello);
// router.get('/:id', getSongById);
// router.get('/download/:songId', downloadSong);
// router.get('/stream/:songId', streamSong);

export default router;
