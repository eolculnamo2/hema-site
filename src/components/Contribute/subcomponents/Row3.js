import React from 'react'
class Row3 extends React.Component {
    constructor(){
        super()
        this.state = {
            sending: false,
            sent: false
        }
    }
    makeSubmission(){
        this.setState({sending: true})

        let payload = {
            title: document.getElementById('title').value,
            email: document.getElementById('email').value,
            author: document.getElementById('author').value,
            image: document.getElementById('image').value,
            body: document.getElementById('body').value,
            captcha: document.getElementsByName('g-recaptcha-response')[0].value
        }
        fetch('/posts/process-submission',{
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin"
        })
        .then( res => res.json())
        .then( data => {
            this.setState({sending: false, sent: data.data === "sent" ? true : false})
        })
    }
    render(){
        return(
            <div className="submission-box">
                <form>
                <h4 className="subtitle">
                    Article Submission
                </h4>
                <em>
                    Please read contributor guidelines before submission.
                </em>
                <div className="flex-submission-inputs">    
                    <div>
                        <label>
                            Title
                        </label>
                        <input id="title" className="sp-input" />
                    </div>
                    <div>
                        <label>
                            Email
                        </label>
                        <input id="email" className="sp-input" />
                    </div>
                </div>
                <div className="flex-submission-inputs">
                    <div>
                        <label>
                            Your Name
                        </label>
                        <input id="author" className="sp-input" />
                    </div>
                    <div>
                        <label>
                            Image Source URL
                        </label>
                        <input id="image" className="sp-input" />
                    </div>
                </div>
                <div>
                    <label>
                        Body
                    </label>
                    <textarea id="body" />
                </div>
                <div class="g-recaptcha" data-sitekey="6Lexs2UUAAAAAOCNpqiw_2MBMpWa2JxQ_fU8SCDa"></div>
                <button style={{display: this.state.sent ? 'none' : 'block'}} onClick={this.makeSubmission.bind(this)}
                        type="button"
                        className={this.state.sending ? "submissions-button submissions-button--sending" : "submissions-button"}>
                    Submit Article
                </button>
                <em style={{display: this.state.sent ? 'block' : 'none'}}>
                    Thank you for your submission! We will be in contact upon review of your post.
                </em>
                </form>
            </div>
        )
    }
}

export default Row3