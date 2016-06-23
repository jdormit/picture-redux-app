import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const pictureSchema = Schema({
  url: String,
  title: String,
  caption: String,
  postedBy: String,
  datePosted: Date,
  height: Number,
  width: Number
});

export default mongoose.model('Picture', pictureSchema);
