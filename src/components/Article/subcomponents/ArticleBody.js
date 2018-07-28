import React from 'react'

class ArticleBody extends React.Component {
    componentDidMount(){
        if(this.props.type === "HTML"){
            document.getElementById('html-article').innerHTML=this.props.body
        }
    }
    render(){
        if(this.props.type === ""){
        return(
            <div>
                <a href={"https://www.sword-point.com/profile/"+this.props.username}>
                    <p className="author-link">
                    By: {this.props.author}
                    </p>
                </a>
                <img src={this.props.image} alt={this.props.title} />
                <div>
                    {this.props.body.map( x => {
                        return(<p>{x}</p>)
                    })}
                </div>
            </div>
        )
        }
        else if(this.props.type === "HTML"){
            return(
                <div>
                    <img src={this.props.image} alt={this.props.title}/>
                    <div id="html-article">
                    </div>
                </div>
            )
        }
    }
}

export default ArticleBody