import mongoose from 'mongoose';

const snippetSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  tags: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Snippet = mongoose.model('Snippet', snippetSchema);

export default Snippet;
