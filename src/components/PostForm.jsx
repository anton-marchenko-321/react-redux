import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {createPost} from "../redux/actions";
import {reduxForm, Field} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {postsRequested} from "../redux/slices/posts";


const LoginForm = props => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.collection)

    useEffect(() => {
        dispatch(postsRequested())
    }, [])

    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field className='form-control mt-4' name='login' placeholder="Username" component='input' type='text'/>
            </div>
            <div>
                <Field className='form-control mt-3' name='message' placeholder="Press message" component='input' type='text'/>
            </div>
            <div>
                <button className='btn btn-success mt-3'>Send message</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginForm)

const PostForm = props => {
    return <div>
        <h3>Комментарий</h3>
        <LoginReduxForm />
    </div>
}


const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps) (PostForm)