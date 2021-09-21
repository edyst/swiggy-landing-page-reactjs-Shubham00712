import './Features.css';
import img1 from './images/feature1.png';
import img2 from './images/feature2.png';
import img3 from './images/feature3.png';

function Features(){
    return(
        <div className="features-container">
            <div style={{textAlign: "center",width:"20%",marginBottom: "5%"}}>
                <img width="40%" src={img1}/>
                <div className="feature-heading">No Minimum Order</div>
                <div className="feature-detail">Order in for yourself or for the group, with no restrictions on order value</div>
            </div>
            <div style={{textAlign: "center",width:"20%",marginBottom: "5%"}}>
                <img width="40%" src={img2}/>
                <div className="feature-heading">Live Order Tracking</div>
                <div className="feature-detail">Know where your order is at all times, from the restaurant to your doorstep</div>
            </div>
            <div style={{textAlign: "center",width:"20%",marginBottom: "5%"}}>
                <img width="48%" src={img3} />
                <div className="feature-heading">Lightning-Fast Delivery</div>
                <div className="feature-detail">Experience Swiggy's superfast delivery for food delivered fresh & on time</div>
            </div>
        </div>
    )
}
export default Features;