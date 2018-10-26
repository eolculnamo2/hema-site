import React from 'react'

const ButtonsSection = () => {
        return(
            <div className="c-Judges-button-main-wrap">
                <div>
                    {/*Start Blue*/}
                    <div>
                        <button type="button" className="c-Judges-button c-Judges-button--blue">
                            +1
                        </button>
                        <button type="button" className="c-Judges-button c-Judges-button--blue">
                            +2
                        </button>
                        <button type="button" className="c-Judges-button c-Judges-button--blue">
                            +3
                        </button>
                    </div>
                    <div>
                        <button type="button" className="c-Judges-button c-Judges-button--blue">
                            -1
                        </button>
                        <button type="button" className="c-Judges-button c-Judges-button--blue">
                            -2
                        </button>
                        <button type="button" className="c-Judges-button c-Judges-button--blue">
                            -3
                        </button>
                    </div>
                    <div>
                        <button type="button" className="c-Judges-button c-Judges-button--blue">
                            +PENALTY
                        </button>
                        <button type="button" className="c-Judges-button c-Judges-button--blue">
                            -PENALTY
                        </button>
                    </div>
                </div>
                {/*Start Red*/}
                <div>
                    <div>
                        <button type="button" className="c-Judges-button c-Judges-button--red">
                            +1
                        </button>
                        <button type="button" className="c-Judges-button c-Judges-button--red">
                            +2
                        </button>
                        <button type="button" className="c-Judges-button c-Judges-button--red">
                            +3
                        </button>
                    </div>
                    <div>
                        <button type="button" className="c-Judges-button c-Judges-button--red">
                            -1
                        </button>
                        <button type="button" className="c-Judges-button c-Judges-button--red">
                            -2
                        </button>
                        <button type="button" className="c-Judges-button c-Judges-button--red">
                            -3
                        </button>
                    </div>
                    <div className="c-Judge-buttons-flex-end">
                        <button type="button" className="c-Judges-button c-Judges-button--red">
                            +PENALTY
                        </button>
                        <button type="button" className="c-Judges-button c-Judges-button--red">
                            -PENALTY
                        </button>
                    </div>
                </div>
            </div>
        )
}

export default ButtonsSection