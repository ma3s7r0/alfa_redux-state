import React from 'react';
import { connect } from 'react-redux'

function Reset(props) {
    return (
        <div>
            <button onClick={() => props.changeNames("", "")}>Reset</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        ...props,
        changeNames: (first, last) => {
            dispatch( { type: "CHANGE_NAME", first: first, last: last } )
        }
    }
}

export default connect(null, mapDispatchToProps) (Reset);