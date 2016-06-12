// miscellaneous configuration tasks
import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.ObjectId;

String.prototype.toObjectId = function() {
  return new ObjectId(this.toString());
}
