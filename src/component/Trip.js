import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/t1.jpg";
import Trip2 from "../assets/t2.jpeg";
import Trip3 from "../assets/t4.jpg";
function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover Unique destination using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip in Indonesia"
                text="
                Indonesia is a nation of staggering statistics; as the fourth most populous country in the world, it’s made up of 8,000 inhabited islands (more than 17,000 across the entire archipelago) and over 300 different native languages spoken across them. The end result is an enchanting melting pot of cultures, cuisines and dramatic landscapes."
                />
                <TripData
                image={Trip2}
                heading="Trip in Malaysia"
                text="
                Malaysia, a member of the Commonwealth, represents the political marriage of territories that were formerly under British rule. When it was established on September 16, 1963, Malaysia comprised the territories of Malaya (now Peninsular Malaysia), the island of Singapore, and the colonies of Sarawak and Sabah in northern Borneo. In August 1965 Singapore seceded from the federation and became an independent republic."
                />
                <TripData
                image={Trip3}
                heading="Trip in France"
                text="
                France is among the globe’s oldest nations, the product of an alliance of duchies and principalities under a single ruler in the Middle Ages. Today, as in that era, central authority is vested in the state, even though a measure of autonomy has been granted to the country’s régions in recent decades."
                />
            </div>
        </div>
    );
}
export default Trip;