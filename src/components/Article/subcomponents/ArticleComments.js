import React from 'react'

class ArticleComments extends React.Component {
    constructor(){
        super()
        this.state = {
            userProfile: {}
        }
    }
    componentWillMount(){
        fetch('/authenticate/getUserProfile',{
            method: "POST",
            body: null,
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin"
            })
            .then( res => res.json())
            .then( data => {
                if (data.data !== false) {
                    this.setState({userProfile: data.data})
                }
            })         
    }
    addComment() {
        if(this.state.userProfile.username) {
            this.buttonsEnabled(false)

            let payload = {
                idString: this.props.id,
                comment: document.getElementById('comment').value.trim(),
                name: this.state.userProfile.username
            }

            fetch('/posts/add-article-comment',{
                method: "POST",
                body: JSON.stringify(payload),
                headers: { "Content-Type": "application/json" }
                })
                .then( res => res.json())
                .then( data => {
                    if(data.status === "sent") {
                        alert('Comment Posted')
                        document.getElementById('comment').value = ''             
                    }
                    else {
                        alert("Something went wrong.")
                    }
                    this.props.update()
                    this.buttonsEnabled(true)
                })
        }
        else {
            alert("Must be logged in to post a comment.")
        }
    }


    buttonsEnabled(y) {
        let buttons = document.getElementsByTagName('button')

        Array.prototype.forEach.call(buttons, x => {
            if(y === false){
                x.style.background = '#efefef'
                x.disabled = true
            }
            else{
                x.style.background =  x.className === "submit" ? "#c0e8b2" : "#ffa3a3"
                x.disabled = false
            }
        })
    }
    render() {
        return(
            <div>
                <div className="comments-box">
                    <h3 className="title title--comments">
                        {"Comments ("+ this.props.comments.length+")"}
                    </h3>
                    <br/>
                    <textarea id="comment" />
                    <br/>
                    <button className='reset'
                    onClick={()=>{document.getElementById('comment').value = ''}}>
                        Reset
                    </button>
                    <button onClick={this.addComment.bind(this)} className='submit'>
                        Submit
                    </button>
                </div>
            <div className="existing-comments-box">
                {this.props.comments.map( x => {
                    //to-do: make articles pop instead of push
                    return (<div className="comment">
                                <p className="author">
                                    {x.author}
                                </p>
                                <div>
                                    {x.comment}
                                </div>
                            </div>)
                })}
                </div>
            </div>
        )
    }
}

export default ArticleComments