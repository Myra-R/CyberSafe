import React from "react";
import Terms from "./terms"


function Dropdown() {
    return (


            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Terms and Conditions
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Terms/>
                </div>
            </div>
    );
}
export default Dropdown; 