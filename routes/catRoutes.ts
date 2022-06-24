import express from 'express'
const router: express.Router = express.Router();

import { addCat, getCats, getCatsByAge } from '../controllers/catsCtrl';

router.get('/get-cats', getCats);
router.post('/add-cat', addCat);
router.patch('/get-cats-age', getCatsByAge);

export default router;