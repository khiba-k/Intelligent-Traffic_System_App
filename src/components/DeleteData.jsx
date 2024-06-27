import React from "react";
import remove from "../assets/deleteIcon.png"

function DeleteData() {
    return(
        <>  
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp; */}
            <button style={{ border: "none", borderRadius: "100%", backgroundColor: "#D9D9D9"}}><img src={remove} alt="Delete Data" /></button>
        </>
    )
    
}
export default DeleteData;