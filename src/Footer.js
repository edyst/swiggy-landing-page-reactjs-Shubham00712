import './Footer.css'
import arr from './Cities.js';
import appstore from './images/appstore.png';
import googleplay from './images/googleplay.png';
import swiggy from './images/swiggyfooter.png';
import facebook from './images/facebook.png';
import pinterest from './images/pininterest.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';

function Footer() {
    return (
        <div className="footer-main">
            <div className="grid">
                <div>
                    <div className="head">COMPANY</div>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Swiggy Blog</a></li>
                        <li><a href="#">Bug Bounty</a></li>
                        <li><a href="#">Swiggy Super</a></li>
                        <li><a href="#">Swiggy Corporate</a></li>
                        <li><a href="#">Swiggy Instamart</a></li>
                    </ul>
                </div>
                <div>
                    <div className="head">CONTACT</div>
                    <ul>
                        <li><a href="#">Help & Support</a></li>
                        <li><a href="#">Partner with us</a></li>
                        <li><a href="#">Ride with us</a></li>
                    </ul>
                </div>
                <div>
                    <div className="head">LEGAL</div>
                    <ul>

                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Refund & Cancellation</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Offer Terms</a></li>
                        <li><a href="#">Phishing & Fraud</a></li>
                    </ul>
                </div>
                <div className="store-link-img">
                    <a href="https://web.archive.org/web/20210903174711/https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
                        <img width="80%" src={appstore} />
                    </a>
                    <a href="https://web.archive.org/web/20210903174711/https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader">
                        <img width="80%" src={googleplay} />
                    </a>
                </div>
            </div>
            <div style={{ marginTop: "2%" }}>
                <div className="head">WE DELIVER TO</div>
                <div className="cities">
                    <div className="city-list-container">
                        <ul className="city-list">
                            {
                                arr.slice(0, 5).map(i => {
                                    return (<li key={i}><a href="#">{i}</a></li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className="city-list-container">
                        <ul className="city-list">
                            {
                                arr.slice(5, 10).map(i => {
                                    return (<li key={i}><a href="#">{i}</a></li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className="city-list-container">
                        <ul className="city-list">
                            {
                                arr.slice(10, 15).map(i => {
                                    return (<li key={i}><a href="#">{i}</a></li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className="city-list-container">
                        <ul className="city-list">
                            {
                                arr.slice(15, 20).map(i => {
                                    return (<li key={i}><a href="#">{i}</a></li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright-footer">
                <a href="/web/20210903174711/https://www.swiggy.com/" >
                    <img width="50%" src={swiggy} />
                </a>
                <div style={{textAlign: "center", fontSize: "20px", color: "#fff", fontWeight: "300" }}>© 2021 Swiggy</div>
                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                    <a href="https://web.archive.org/web/20210903174711/https://www.facebook.com/swiggy.in">
                        <img width="50%" src={facebook} />
                    </a>
                    <a href="https://web.archive.org/web/20210903174711/https://pinterest.com/swiggyindia">
                        <img width="50%" src={pinterest} />
                    </a>
                    <a href="https://web.archive.org/web/20210903174711/https://instagram.com/swiggyindia/">
                        <img width="50%" src={instagram} />
                    </a>
                    <a href="https://web.archive.org/web/20210903174711/https://twitter.com/swiggy_in">
                        <img width="50%" src={twitter} />
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Footer;