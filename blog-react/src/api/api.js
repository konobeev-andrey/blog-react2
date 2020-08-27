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
        return instansce.get('posts/' + postId)
    },
    setPost({title, body, id, userId}){
        return instansce.post('posts',{title, body, id, userId})
    }

}

export const commentsApi = {
    getCommentPost(postId) {
        return instansce.get('posts/' + postId + '/comments')
    }
}