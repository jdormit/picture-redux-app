import express from 'express';
import Comment from './commentModel';

const router = express.Router();

router.get('/:picId', (req, res, next) => {
  let picId = req.params.picId;
  Comment.find({_picture: picId.toObjectId()}, (err, comments) => {
    if (err) return res.setStatus(500).send(err);
    res.send(comments);
  });
});

router.post('/', (req, res, next) => {
  let comment = new Comment(req.body.comment);
  comment.save((err, comment) => {
    if (err) return res.setStatus(500).send(err);
    res.send(comment);
  });
});

router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  Comment.update({_id: id.toObjectId()}, req.body.update, (err, comment) => {
    if (err) return res.setStatus(500).send(err);
    res.send(comment);
  });
});

router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  Comment.delete({_id: id.toObjectId()}, (err, comment) => {
    if (err) return res.setStatus(500).send(err);
    res.send(comment);
  });
});

export default router;
