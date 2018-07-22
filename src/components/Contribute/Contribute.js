import React from 'react'
import Row1 from './subcomponents/Row1'
import Row2 from './subcomponents/Row2'
import Row3 from './subcomponents/Row3'


class Contribute extends React.Component {
    render() {  
        return(
            <div>
                <Row1 />
                <Row2 />
                <Row3 />
            </div>
        )
    }
}

export default Contribute