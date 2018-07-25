import React from 'react'

const Row1 = props => {
    return(
        <div className='row1-wrapper'>
            <div>
                <div className="flex-start">
                    <h3 className="title">
                        {props.user.displayName}
                    </h3>
                    <button className="add-button">
                        Add Contact
                    </button>
                </div>
                <p className="headline">
                    {props.user.headline}
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