import posts from "../data/posts";

const postReducer = function Posts(state = posts, action) {
    console.log(action.index)
    return state
}

export default postReducer
