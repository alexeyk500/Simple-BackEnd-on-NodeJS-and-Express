import Post from "./Post.js";

class PostService {
  async create(post) {
    const newPost = await Post.create(post)
    return newPost
  }

  async getAll() {
    const posts = await Post.find()
    return posts
  }

  async getOne(id) {
    if (!id) {
      throw new Error('post Id not specified')
    }
    const post = await Post.findById(id)
    return post
  }

  async update(post) {
    if (!post._id) {
      throw new Error('post Id not specified')
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
    return updatedPost
  }

  async delete(id) {
    if (!id) {
      throw new Error('post Id not specified')
    }
    const deletedPost = await Post.findByIdAndDelete(id)
    return deletedPost
  }

}

export default new PostService()