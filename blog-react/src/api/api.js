import * as axios from "axios";

const instansce = axios.create({
    withCredentials: true,
    baseURL:`https://jsonplaceholder.typicode.com/`
})
export const postsApi = {
    getPosts(){
        return instansce.get('posts')
    },
    getPost(postId){
        return instansce.get('posts/' + postId).catch(err => {
            if (err.response) {
                return {status: 404}
            }})
    },
    setPost({title, body, id, userId}){
        return instansce.post('posts',{title, body, id, userId})
    }

}

export const commentsApi = {
    getCommentPost(postId) {
        return instansce.get('posts/' + postId + '/comments')
    },
    addCommentPost(postId,id,name,email,body) {
        return instansce.post(`comments?postId=${postId}`, {postId,id,name,email,body})
    }
}
window.setCommentPost = commentsApi.setCommentPost;