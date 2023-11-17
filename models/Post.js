
const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
    user: {
      type: String, // Assuming user is identified by username
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model("Comment", commentSchema)

const PostSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: false },
        
        Content: { type: String, required: true },
    
        
       mideaUrl: {
            type: String,
            require: false
        },
        comments: [commentSchema], 
        likeCount: {
            type: Number,
            default: 0,
          },
          userImage: {
            type: String,
            required: true,
          },
        userId: {
            type: String,
            required: true,
        }
    }, { timestamps: true }
);
module.exports = mongoose.model("Post", PostSchema)