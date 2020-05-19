import React from 'react'

const Button = props => {
    return (
        <div>
            <button onClick={()=>props.clicked(props.listenData)} style={styles.buttonStyle}>{props.children}</button>
        </div>
    )
}

const styles = {
    buttonStyle : {
        backgroundColor : "#007bff",
        border : "none",
        borderRadius : "3px",
        padding : "8px 15px",
        color : "white",
        margin : "0 5px"
    }
}

export default Button;
