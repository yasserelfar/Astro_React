import "./Home.css";
import './Res.css'
import f1 from './img/fe/f1.png';
import f2 from './img/fe/f2.png';
import f3 from './img/fe/f3.png';
import f4 from './img/fe/f4.png';
import f5 from './img/fe/f5.png';
import f6 from './img/fe/f6.png';

function Hero() {
    return (
        <>
            <section id="hero">
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>On all products</h1>
                <p>Save more with coupons & up to 70% off!</p>
                <button onClick={() => { window.location.href = '/Display' }}>Shop Now</button>
            </section>
            <section className="section-p1" id="feature">
                <div className="fe-box">
                    <img src={f1} alt="" />
                    <h6>Free Shipping</h6>
                </div>
                <div className="fe-box">
                    <img src={f2} alt="" />
                    <h6>Online Order</h6>
                </div>
                <div className="fe-box">
                    <img src={f3} alt="" />
                    <h6>Save Money</h6>
                </div>
                <div className="fe-box">
                    <img src={f4} alt="" />
                    <h6>Promotions</h6>
                </div>
                <div className="fe-box">
                    <img src={f5} alt="" />
                    <h6>Happy Sell</h6>
                </div>
                <div className="fe-box">
                    <img src={f6} alt="" />
                    <h6>F24/7Support</h6>
                </div>
            </section>
            <section id="banner">
                <h1 style={{ color: 'white' }}>Summar Sale</h1>
                <h2>Up to <span>70% off</span> - All t-Shirts</h2>
                <button className="normal" onClick={() => { window.location.href = '/Display' }}>Explore More</button>
            </section>
        </>
    );
}

export default Hero;
