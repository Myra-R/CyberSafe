import React from "react";
import './footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <footer className="realFooter">
      <MDBFooter color="blue" className="footercontainers">
        <MDBContainer fluid id="footerContainer">
          <MDBRow>
            <MDBCol md="6">
              <h1 className="title">CyberSafe</h1>
              <p className="follow">
                Follow us on Social Media!
              </p>
            </MDBCol>
            <MDBCol md="6">
              {/* <h5 className="title1">Links</h5> */}
              <ul>
                <li className="socialmedia">
                <img src="https://www.flaticon.com/svg/static/icons/svg/123/123718.svg" alt="LinkedIn" className="socialMedia"/> <img src="https://www.flaticon.com/svg/static/icons/svg/123/123717.svg" alt="Facebook" className="socialMedia"/>
                <img src="https://www.flaticon.com/svg/static/icons/svg/2762/2762425.svg" alt="Slack" className="socialMedia"/> <img src="https://www.flaticon.com/svg/static/icons/svg/561/561127.svg" alt="Email" className="socialMedia"/>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://cybersafe1.herokuapp.com/"> CyberSafe.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
      </footer>
    );
  }
  
  export default FooterPage;
