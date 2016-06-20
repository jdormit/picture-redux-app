import express from 'express';
import Picture from './PictureModel';
import multer from 'multer';

const upload = multer();
const router = express.Router();

router.get('/', (req, res, next) => {
  Picture.find((err, pictures) => {
    if (err) return res.setStatus(500).send(err);
    res.send(pictures);
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  Picture.find({_id: id.toObjectId()}, (err, picture) => {
    if (err) return res.setStatus(500).send(err);
    res.send(picture);
  });
});

router.post('/', upload.array(), (req, res, next) => {
  let picture = new Picture(req.body);
  picture.save((err, picture) => {
    if (err) return res.setStatus(500).send(err);
    res.send(picture);
  });
});

router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  Picture.update({_id: id.toObjectId()}, req.body.update, (err, picture) => {
    if (err) return res.setStatus(500).send(err);
    res.send(picture);
  });
});

router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  Picture.remove((err, result) => {
    if (err) return res.setStatus(500).send(err);
    res.send(result);
  });
});

export default router;
