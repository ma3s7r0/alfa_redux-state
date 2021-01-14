import React from 'react';
import { connect } from 'react-redux'

function Ausgabe(props) {
    return (
        <div>
            <p>Vorname: {props.vorname}</p>
            <p>Nachname:  {props.nachname}</p>
        </div>
    );
}

function mapStateToProps(state, props) {
    return {
        ...props,
        ...state
    }
}

export default connect(mapStateToProps) (Ausgabe);