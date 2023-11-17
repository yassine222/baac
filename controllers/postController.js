const Post = require("../models/Post");


module.exports = {
    createPost: async (req, res) => {
        const newPost = new Post(req.body);

        try {
            const savedPost = await newPost.save();
            const { __v, updatedAt, ...newPostInfo } = savedPost._doc;
            res.status(200).json(newPostInfo)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updatePost: async (req, res) => {
        try {
          const updatedPost = await Post.findByIdAndUpdate(
            req.params.postId,
            { $set: req.body },
            { new: true }
          );
          const { __v,updatedAt, ...post } = updatedPost._doc;
          res.status(200).json(post);
        } catch (error) {
          res.status(500).json(error);
        }
      },
    
    
      deletePost: async (req, res) => {
        try {
          await Post.findByIdAndDelete(req.params.postId);
          res.status(200).json({ message: 'Post deleted successfully.' });
        } catch (error) {
          res.status(500).json(error);
        }
      },
    
      getAllPosts: async (req, res) => {
        try {
          const posts = await Post.find();
          res.status(200).json(posts);
        } catch (error) {
          res.status(500).json(error);
        }
      },
    
      getPostById: async (req, res) => {
        try {
          const post = await Post.findById(req.params.postId);
          if (!post) {
            return res.status(404).json({ message: 'Post not found.' });
          }
          const { __v, updatedAt, ...postInfo } = post._doc;
          res.status(200).json(postInfo);
        } catch (error) {
          res.status(500).json(error);
        }
      },
    }