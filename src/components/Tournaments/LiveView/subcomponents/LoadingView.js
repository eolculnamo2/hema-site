import React from 'react'

const LoadingView = () => {
    return (
        <div>
            <div className="Loading-view-center">
                <div id="sword" className="Loading-view-sword-wrap">
                    <div className="Loading-view-pommel">
                    </div>
                    <div className="Loading-view-handle">
                    </div>
                    <div className="Loading-view-cross">
                    </div>
                    <div className="Loading-view-blade">
                    </div>
                </div>
                
                <div id="sword2" className="Loading-view-sword-wrap Loading-view-sword2">
                    <div className="Loading-view-pommel">
                    </div>
                    <div className="Loading-view-handle">
                    </div>
                    <div className="Loading-view-cross">
                    </div>
                    <div className="Loading-view-blade">
                    </div>
                </div>
            </div>
            <h1 className="Loading-view-loading-text">Loading</h1>
        </div>
    )
}

export default LoadingView;