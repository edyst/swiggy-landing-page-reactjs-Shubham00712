// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import mapMarker from './images/mapmarker.png'

function Form() {
    return (<div className="input-section" style={{ margin: '5% 0',display:"flex"}}>
        <div style={{display:"flex",width:"100%"}}>
        <input style={{ padding: "2% 0% 2% 5%",width:"100%",fontSize: "18px", fontWeight: "500" }} type="text" placeholder="Enter your delivery location" />
        <div className="locate-me" style={{padding:"0 5%", position: "relative",width:"20%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <img width="30%" src={mapMarker}/>
            {/* <FontAwesomeIcon icon={faMapMarkerAlt} /> */}
            <a href="#" style={{marginLeft:"10%",fontWeight: "500", fontSize: "14px" }}>Locate me</a>
        </div>
        </div>
        <button className="find-food" style={{
            width: "30%", padding: "2% 5%", fontSize: "16px", fontWeight: "700",
            backgroundColor: "#fc8019", border: "none", color: "#fff",
            boxShadow: "0 1px 3px 0 rgb(0 0 0 / 12%)"
        }}><a href="#">FIND FOOD</a></button>
    </div>)
}
export default Form;