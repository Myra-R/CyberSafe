import React from "react";
import errorImage from "./404-image.jpg"

function OurError() {
    return (
        <div>
            <p class= "container">
                We apologize for this, something appears to have broken. We are working with the gremlins to correct this error.
            </p>
            <figure className="container col-md-4">
                <img src= {errorImage} className="img-thumbnail" alt="404" />
            </figure>
            <footer>
            <a href='https://www.freepik.com/vectors/background'>Background vector created by freepik - www.freepik.com</a>
            </footer>
        </div>
    )
}

export default OurError;