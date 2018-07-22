import React from 'react'
import Rule from './Rule'

let rules = ["Article submissions should be on the topic of Renaissance Martial Arts and associated topics.",
             "The recommended length for articles is between 500 and 10,000 words long. If you have more than 1000 words, it is recommended to send more than one image.",
             "Please do not include personal attacks or divisive content. Please do not use obscene or vulgar language.",
             "Site administration has the right to make changes to your submission. Changes, if any, will be kept minimal.",
             "Once an article has been submitted, it becomes the property of sword-point.com to use on this website.",
             "If you have an article submission, please fill out the form below in its entirety. Upon review, you will be notified when the article is posted."]

const Row2 = () => {
    return(
        <div className="row2-wrap">
            <img src='https://image.ibb.co/mrQgDd/teacher.jpg' />
            <div className="side2-wrap">
                <h4 className="subtitle">
                    Guidelines
                </h4>
                {rules.map((x,i) => {
                    return (<Rule index={i+1} text={x}/>)
                })}
            </div>
        </div>
    )
}

export default Row2