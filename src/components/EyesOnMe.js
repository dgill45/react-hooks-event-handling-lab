// Code EyesOnMe Component Here
import React from "react"

function EyesOnMe() {
    
    function Blurred(){
        console.log('Hey! Eyes on me!')
    }

    function Focused(){
        console.log("Good!")
    }

return (
    <div>
        <button onBlur= {Blurred} onFocus ={Focused}>Eyes on me</button>
    </div>
    )
}

export default EyesOnMe;