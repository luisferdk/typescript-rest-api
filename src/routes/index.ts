import { Router } from 'express';
import { getAll } from '../controllers/index';
const router = Router();

router.route('/').get(getAll);

export default router;
