import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
    <div className="container my-5">
    <footer
            className="text-center text-lg-start text-white"
            style={{backgroundColor:" #3e4551"}}
            >
      <div className="container p-4 pb-0 pt-0">
        <section className="">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
              <h5 className="text-uppercase heading">Swiggy</h5>
  
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae modi cum ipsam ad, illo possimus laborum ut
                reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque?
                Reiciendis assumenda iusto sapiente inventore animi?
              </p>
            </div>
  
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase heading">Company</h5>
  
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">About</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Careers</a>
                </li>
                <li>
                  <a href="#!" className="text-white ">Swiggy One</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Swiggy Genie</a>
                </li>
              </ul>
            </div>
  
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase heading">Legal</h5>
  
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Cookie Policy</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Privacy Policy</a>
                </li>
              </ul>
            </div>
  
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase heading">Contact Us</h5>
  
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">Help and Support</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Partner with us</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Ride with us</a>
                </li>
              </ul>
            </div>
  
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase heading">We deliver to:</h5>
  
              <ul className="list-unstyled mb-0">
              <li>
                  <a href="#!" className="text-white">Delhi</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Mumbai</a>
                </li>
                <li>
                  <a href="#!" className="text-white">Bangalore</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
  
        <hr className="mb-4" />
  
        {/* <section className="">
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">Register for free</span>
            <button type="button" className="btn btn-outline-light btn-rounded">
              Sign up!
            </button>
          </p>
        </section>
   */}
        {/* <hr className="mb-4" /> */}
  
        <section className="mb-4 text-center">
          <a
             className="btn btn-outline-light btn-floating m-1"
             href="#!"
             role="button"
             ><i className="fab fa-facebook-f"></i
            ></a>
  
          <a
             className="btn btn-outline-light btn-floating m-1"
             href="#!"
             role="button"
             ><i className="fab fa-twitter"></i
            ></a>
  
          <a
             className="btn btn-outline-light btn-floating m-1"
             href="#!"
             role="button"
             ><i className="fab fa-google"></i
            ></a>
  
          <a
             className="btn btn-outline-light btn-floating m-1"
             href="#!"
             role="button"
             ><i className="fab fa-instagram"></i
            ></a>
  
          <a
             className="btn btn-outline-light btn-floating m-1"
             href="#!"
             role="button"
             ><i className="fab fa-linkedin-in"></i
            ></a>
  
          <a
             className="btn btn-outline-light btn-floating m-1"
             href="#!"
             role="button"
             ><i className="fab fa-github"></i
            ></a>
        </section>
      </div>
{/*   
      <div
           className="text-center p-3"
           style={{"backgroundColor: rgba(0, 0, 0, 0.2)"}}
           >
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/"
           >MDBootstrap.com</a
          >
      </div> */}
    </footer>
  </div>
  </div>
  )
}

export default Footer