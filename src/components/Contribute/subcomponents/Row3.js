import React from 'react'
class Row3 extends React.Component {
    constructor(){
        super()
        this.state = {
            sending: false,
            sent: false,
            addedElements: [],
            items: [1],
            currentElement: 'p',
            imageType: 'full',
            width: 100,
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
    makeSubmission(){
        if(this.state.userProfile.username) {
            this.setState({sending: true})
    
            let payload = {
                title: document.getElementById('title').value,
                email: this.state.userProfile.email,
                author: this.state.userProfile.displayName,
                username: this.state.userProfile.username,
                body: document.getElementsByClassName('preview__wrap')[0].innerHTML,
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
        else {
            alert("Must be logged in to make article submission.")
        }
    }
    addElement(el,value){
        let x = this.state.addedElements
        if(el !== 'li'){
            let content = value[0].value
            x.push({type: el, value: content, imageType: this.state.imageType, imageWidth: this.state.width})
        }
        else{
            let content = []
            Array.prototype.forEach.call(value, y => {
                content.push(y.value)
            })
            x.push({type: el, values: content})
        }
        this.setState({addedElements: x})
    }
    askDelete(i){
        let x = confirm("Do you want to delete this element?")
        if(x){
            let arr = this.state.addedElements
            arr.splice(i,1)
            this.setState({addedElements: arr})
        }
    }
    addOrDeleteListItem(add){
        let arr = this.state.items
        add ? arr.push(1) : arr.splice(arr.length-1,1)
        this.setState({items: arr})
    }
    showCurrentElement(){
        if(this.state.currentElement === 'p'){
            return(
            <div>
                <textarea class="new-p" />
                <button className="add-el-button" type="button" onClick={this.addElement.bind(this,'p',document.getElementsByClassName('new-p'))}>
                    Add Paragraph
                </button>
            </div>)
        }
        if(this.state.currentElement === 'h3'){
            return(
            <div>
                <input class="sp-input new-h" />
                <button className="add-el-button" type="button" onClick={this.addElement.bind(this,'h3',document.getElementsByClassName('new-h'))}>
                    Add Header
                </button>
            </div>)
        }
        else if(this.state.currentElement === 'img') {
            return( 
            <div>
                <p>
                    Image Type: {this.state.imageType === 'full' ? "Full"
                                    : this.state.imageType === 'float-right' ? "Float Right"
                                        : "Float Left"}
                </p>
                <p>
                    Image Width: {this.state.width + "%"} 
                </p>
                <input placeholder="Enter Image Url" className="sp-input new-img" /><br/>
                <input className="sp-input" placeholder={"width: "+this.state.width} id="adjust-width" type="number" min="0" max="100" />
                <button type="button" 
                        className="blue-option-buttons"
                        onClick={()=>{this.setState({width: parseInt(document.getElementById('adjust-width').value) !== NaN ? document.getElementById('adjust-width').value : 25})}}>
                    Set Width
                </button>
                <br/>
                <button type="button" 
                        className={this.state.imageType === 'full' ? 'blue-option-buttons submission__selected-option' : 'blue-option-buttons'}
                        onClick={()=>{this.setState({imageType: 'full'})}}>
                    Full
                </button>
                <button type="button" 
                        className={this.state.imageType === 'float-right' ? 'blue-option-buttons submission__selected-option' : 'blue-option-buttons'}
                        onClick={()=>{this.setState({imageType: 'float-right'})}}>
                    Float Right
                </button>
                <button type="button" 
                        className={this.state.imageType === 'float-left' ? 'blue-option-buttons submission__selected-option' : 'blue-option-buttons'}
                        onClick={()=>{this.setState({imageType: 'float-left'})}}>
                    Float Left
                </button>
                <button className="add-el-button" type="button" onClick={this.addElement.bind(this,'img',document.getElementsByClassName('new-img'))}>
                    Add Image
                </button>
            </div>)
        }
        else if(this.state.currentElement === 'li') {
            return( 
            <div>
                { this.state.items.map( x => {
                   return(<input className="sp-input new-li"/>)
                })}
                
                <button className="blue-option-buttons" 
                        type="button" 
                        onClick={this.addOrDeleteListItem.bind(this,true)}>
                    Add Item
                </button>
                <button type="button" 
                        className="blue-option-buttons"
                        onClick={this.addOrDeleteListItem.bind(this,false)}>
                    Delete Item
                </button>
                <button className="add-el-button" type="button" onClick={this.addElement.bind(this,'li',document.getElementsByClassName('new-li'))}>
                    Add List
                </button>
            </div>)
        }
    }
    previewUI(){
        return(
            <div className="preview__wrap"
                 style={{display: this.state.addedElements.length === 0 ? 'none' : 'block'}}>
            {this.state.addedElements.map( (x,i) => {
                if(x.type === 'img') {
                    return (<img onClick={this.askDelete.bind(this,i)}
                                style={{width: x.imageWidth+'%'}} 
                                className={x.imageType+' preview__item'} 
                                src={x.value}/>)
                }
                else if(x.type === 'p'){
                    return (<p className="preview__item"
                               onClick={this.askDelete.bind(this,i)}>{x.value}</p>)
                }
                else if(x.type === 'h3'){
                    return (<h3 className="preview__item"
                               onClick={this.askDelete.bind(this,i)}>{x.value}</h3>)
                }
                else if(x.type === 'li'){
                    return(
                    <ul className="preview__item"
                    onClick={this.askDelete.bind(this,i)}>
                        {x.values.map(y => {
                            return ( <li>{y}</li>)
                        })}
                    </ul>
                    )
                }
            })}
            </div>
        )
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
                <p> 
                    You can&nbsp;
                    <a className="underline" href="mailto:rbertram8@gmail.com">submit by email</a> 
                    &nbsp;or use the editor below.
                </p>
                <div className="flex-submission-inputs">    
                    <div>
                        <label>
                            Title
                        </label>
                        <input id="title" className="sp-input" />
                    </div>
                </div>
                <div className="submission__flex">
                    <button className={this.state.currentElement === 'h3' ? 'submission__selected-option el-option-button' : "el-option-button"}
                            type="button" 
                            onClick={()=>{this.setState({currentElement: 'h3'})}}>
                        Add Header
                    </button>
                    <button className={this.state.currentElement === 'p' ? 'submission__selected-option el-option-button' : "el-option-button"} 
                            type="button" 
                            onClick={()=>{this.setState({currentElement: 'p'})}}>
                        Add Paragraph
                    </button>
                    <button className={this.state.currentElement === 'img' ? 'submission__selected-option el-option-button' : "el-option-button"} 
                            type="button" 
                            onClick={()=>{this.setState({currentElement: 'img'})}}>
                        Add Image
                    </button>
                    <button className={this.state.currentElement === 'li' ? 'submission__selected-option el-option-button' : "el-option-button"} 
                            type="button" 
                            onClick={()=>{this.setState({currentElement: 'li'})}}>
                        Add List
                    </button>
                </div>

                {this.showCurrentElement()}
                {this.previewUI()}

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