import React from 'react';
import './Loading.css';


const Loading = props => {
    return (
            props.show ? 
                (
                    <div className={"lds-facebook"}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )
            : null
    )
}


export default Loading;