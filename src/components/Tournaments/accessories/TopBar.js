import React from 'react'

class TopBar extends React.Component {
    passToParent(fx) {
        this.props[fx].call();
    }
    render() {
        return (
            <div className="tournament__flex-navbar">
                <div>
                    <h2 className="tournaments__event-headings tournaments__event-headings--padded">
                        {this.props.title}
                    </h2>
                </div>
                <div>
                    {this.props.buttons.map( x => {
                        return(
                            <a href={x.link ? x.link : null}>
                                <button 
                                        style={{background: x.bgColor ? x.bgColor : '',
                                             color: x.txtColor ? x.txtColor : ''}} 
                                        className="tournaments__description-button" 
                                        onClick={x.fx ? this.passToParent.bind(this, x.fx) : x.link}>
                                        {x.text}
                                </button>
                            </a>
                    )
                    })}
                </div>
            </div>
        )
    }
}

export default TopBar