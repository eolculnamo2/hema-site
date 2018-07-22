import React from 'react'

class Admin extends React.Component {
    submitSubmissionApproval(){
        let x = prompt('Enter Administrator Password')
    
        let payload = {
            test: x,
            title: document.getElementById('title').value,
            author: document.getElementById('author').value,
            image: document.getElementById('imgUrl').value,
            body: document.getElementById('body').value
        }
        fetch('/posts/new-article',{
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" }
            })
            .then( res => res.json())
            .then( data => alert(data.data))
    }

    render(){
        return(
            <div>
                <form action='#'>
                    <h4>Title</h4>
                    <input id='title' />
                    <h4>Author</h4>
                    <input id='author' />
                    <h4>Image URL</h4>
                    <input id='imgUrl' />
                    <h4>Body(New Paragraphs separated by **P**)</h4>
                    <textarea id='body' />
                    <br/>
                    <button type="button" onClick={this.submitSubmissionApproval.bind(this)}>
                    Create Article
                    </button>
                </form>
            </div>
        )
}
}

export default Admin