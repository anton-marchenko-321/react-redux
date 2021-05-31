import React from "react";

export default ({ post }) => {
    return (
        <div className='card mt-2 p-2'>
                <p>
                    {post.title}: {post.content}
                </p>
        </div>
    )
}