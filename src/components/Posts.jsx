import React from "react";
import {connect} from 'react-redux'
import Post from "./Post";

const Posts = ({ syncPosts }) => {
    if(!syncPosts.length) {
        return <h4 className='text-center mt-5'>Сообщений нет</h4>
    }

    return syncPosts.map(post => <Post post={post} key={post.id}/>)

}

const mapStateToProps = state => {
    return ({
        syncPosts: state.posts
    })
}

export  default connect(mapStateToProps) (Posts)