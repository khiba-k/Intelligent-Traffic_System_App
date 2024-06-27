import React from "react";
import remove from "../assets/deleteIcon.png"

function DeleteData() {
    return(
        <>  
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp; */}
            <button style={{ border: "none", Color: "#d9d9d9", backgroundColor: "#d9d9d9", boxShadow: "none"}}><img src={remove} alt="Delete Data" /></button>
        </>
    )
    
}
export default DeleteData;