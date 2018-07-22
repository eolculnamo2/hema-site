import React from 'react'

const Admin = () => {
    return(
        <div>
            <form action='/posts/new-article' method='POST'>
                <h4>Title</h4>
                <input name='title' />
                <h4>Author</h4>
                <input name='author' />
                <h4>Image URL</h4>
                <input name='imgUrl' />
                <h4>Body(New Paragraphs separated by **P**)</h4>
                <textarea name='body' />
                <br/>
                <button type="submit">
                 Create Article
                </button>
            </form>
        </div>
    )
}

export default Admin