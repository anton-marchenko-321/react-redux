import React from "react";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import './components/chat.css'


function App() {

    return (
        <div className="container pt-3">
            <div className="chat-block">

                <Posts />

            </div>

            <div className="row mt-5">
                <div className="col mt-5">
                    <PostForm/>
                </div>
            </div>

        </div>
    );
}

export default App;

