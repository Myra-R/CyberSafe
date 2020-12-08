// import React, { useState, useEffect } from "react";
// import './profile.css';
// import Popup from '../popup'
// // import FooterPage from "../footer";
// import { score, positives, negatives } from "../login/index";
// import API from "../../utils/API";
// import { useHistory } from "react-router-dom";


// function Profile() {
//     console.log(score, positives, negatives)
//     const history = useHistory();
//     const [formObject, setFormObject] = useState({})

//     function handleInputChange(event) {
//         const { name, value } = event.target;
//         setFormObject({ ...formObject, [name]: value })
//     };

//     function handleFormSubmit(event) {
//         event.preventDefault();
//         if (formObject.firstName && formObject.lastName && formObject.company) {
//             // Update the score, add/subtract based off criteria
//             // Post that back to the DB
//             API.saveUserScore({
//                 score: score,
//                 negatives: negatives,
//                 positives: positives
//             });
//             let path = "/results";
//             history.push(path);
//         }
//         if (formObject.firstName === "Jim"){
//             score += 20;
//             positives.push("Your name is jim!")
//         }
//         else {
//             negatives.push("your name is not Jim.")
//         }
//     }

//     return (
//         <div>
//             {<Popup />}

//             <form id="profile">
//                 <h3>Profile Section</h3>

//                 <div id="form-firstName">
//                 <div className="form-label"><label className="form-text">First Name</label></div>
//                     <input type="text" className="form-control" placeholder="First name"
//                     onChange={handleInputChange}
//                     name="first name" /> <br></br>
//                 </div>

//                 <div id="form-lastName">
//                     <label>Last name</label>
//                     <input type="text" className="form-control" placeholder="Last name" />
//                 </div>

//                 <div id="form-company">
//                     <label>What company are you applying with?</label>
//                     <input type="email" className="form-control" placeholder="Company Name" />
//                 </div>

//                 <div id="form-city">
//                     <label>What City were you born in?</label>
//                     <input type="password" className="form-control" placeholder="Enter City" />
//                 </div>

//                 <div id="form-question">
//                     <label>Other Random Questions....</label>
//                     <input type="password" className="form-control" placeholder="Random Answer" />
//                 </div>
//                 <button onClick={handleFormSubmit} className="btn btn-dark mt-3 mb-2" id="loginBtn">
//                     Submit
//                 </button>
              
//             </form>

//         </div>

//     );
// }
// export default Profile; 
