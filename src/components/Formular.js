import React from 'react';
import { connect } from 'react-redux'

function Formular(props) {
    return (
        <div>
            Vorname: <input type="text" value={props.vorname} 
            onChange={event => props.changeNames(event.target.value, props.nachname)} /><br />
            Nachname: <input type="text" value={props.nachname} 
            onChange={event => props.changeNames(props.vorname, event.target.value)} />
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        ...props,
        /* alle Eigenschaften des State: */
        ...state

        /* nur eine Eigenschaft des State:
        vorname : state.vorname
        */
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        ...props,
        changeNames: (first, last) => {
            dispatch( { type: "CHANGE_NAME", first: first, last: last } )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Formular);