import React from 'react'

const Row1 = props => {
    return(
        <div className='row1-wrapper'>
            <div>
                <h3 className="title">
                    {props.heading}
                </h3>
                <p>
                    Rediscovering the Martial Arts of Renaissance Europe
                </p>
            </div>
            <div className="random-quote">
                <p>
                    The bound may flee whither he chooses, but of this you should be 
                </p>
                <p>
                    admonished. Wherever the Bound flees, you should follow him.
                </p>
                <p>
                    I33
                </p>
            </div>
        </div>
    )
}

export default Row1