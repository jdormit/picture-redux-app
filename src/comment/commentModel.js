import mongoose from 'Mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const commentSchema = Schema({
  text: String,
  datePosted: Date,
  postedBy: String,
  _picture: {type: ObjectId, ref: 'Picture'}
});

export default mongoose.model('Comment', commentSchema);
