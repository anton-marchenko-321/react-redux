import React from "react";
import {connect} from 'react-redux'
import {createPost} from "../redux/actions";



class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            loading: true,
            error: false
        }
    }

    submitHandler = event => {
        event.preventDefault();
        const {title} = this.state
        const {content} = this.state


        if( !title.trim() || !content.trim() ) {
            return
        }
        const newPost = {
            content, title, id: Date.now().toString(),
        }

        this.props.createPost(newPost)
        this.setState({title: ''})
        this.setState({content: ''})
    }


    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))
    }

    render() {
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Ваше имя'
                            id='title'
                            value={this.state.title}
                            name='title'
                            onChange={this.changeInputHandler}
                        />
                    </div>

                </form>

                <form onSubmit={this.submitHandler}>
                    <div className='form-group mt-3'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Сообщение'
                            id='content'
                            value={this.state.content}
                            name='content'
                            onChange={this.changeInputHandler}
                        />
                    </div>
                    <button className='btn btn-success mt-3 mb-2' type='submit'>Отправить</button>
                </form>
            </>


        )
    }
}



const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps) (PostForm)