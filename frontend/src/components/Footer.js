import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Style from '../css/Styles.module.css'
import '../css/footer.css';
import { logocanagoldImg } from '../img';


const Footer = () => {
  return (
    <footer>
      <div class="body">
        <div class='container-fluid'>
    <div class="cardfooter">
        <div class="heading text-center">
            <div class="head1 ticolor">Just Scratching the Surface</div>
            <p class="bdr"></p>
        </div>
        <div class="card-body">
            <div class="row m-0 pt-5">
                <div class="cardfooter col-12 col-md-3">
                    <div class="card-content"> <img src={logocanagoldImg} alt="logo" class="logo"/>
                     
                        <p class="text2"><small>With the company’s history dating 10 years back, we always felt desire to tell some kind of complete story with our clothes. So the original style mixed with an androgynous feel of a modern day makes us what we actually are.</small></p>
                        <p class="text">From 9:00 AM to 7:00 PM (GMT-8) <br/> <br/>
                          Los Angeles, California</p>
                    </div>
                </div>
                <div class="cardfooter col-12 col-md-3">
                    <div class="card-content"> <i class="far fa-handshake fa-3x"></i>
                        <div class="card-title"> ACCEPT ELECTRONIC CHECK </div>
                        <p><small>Save customers' cards for future phone orders</small></p>
                        <div class="learn-more">
                            <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                        </div>
                    </div>
                </div>
                <div class="cardfooter col-12 col-md-3">
                    <div class="card-content"> <i class="fas fa-mobile-alt fa-3x"></i>
                        <div class="card-title"> STREAMLINE PHONE PAYMENTS </div>
                        <p><small>Save customers' cards for future phone orders</small></p>
                        <div class="learn-more">
                            <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                        </div>
                    </div>
                </div>
                <div class="cardfooter col-12 col-md-3">
                    <div class="card-content"> <i class="fas fa-user-secret fa-3x"></i>
                        <div class="card-title"> STAY<br /> SECURE </div>
                        <p><small>Save customers' cards for future phone orders</small></p>
                        <div class="learn-more">
                            <p> <small> LEARN MORE <label><i class="fas fa-angle-right"></i></label> </small> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="bdr2"></p>
        <div class="card-footer row m-0">
            <p class="ticolor"> <label> <i class="fas fa-phone fa-rotate-90 phcolor "></i> </label> 18888-465-324</p>
            <div>
              <p class="copyright">
              ©CANAGOLD All rights reserved. Website <a href="https://www.fixlsolutions.com" class="fixl"> @FIXLSOLUTIONS</a>
              </p>
            </div>
            <div>
                <p> <small class="follow-text ticolor">FOLLOW US ON SOCIAL MEDIA</small> <label class="footer-right"> <i class="fab fa-instagram icocolor"></i> <i class="fab fa-facebook-square icocolor"></i> <i class="fab fa-linkedin icocolor"></i> <i class="fab fa-twitter-square icocolor"></i> </label> </p>
            </div>
        </div>
    </div>
</div>    </div>
      
    </footer>
  )
}

export default Footer
