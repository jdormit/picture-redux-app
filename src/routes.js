import express from 'express';
import pictureRouter from './picture/pictureRoute';
import commentRouter from './comment/commentRoute';
const router = express.Router();

router.use('/picture', pictureRouter);
router.use('/comment', commentRouter);

export default router;
