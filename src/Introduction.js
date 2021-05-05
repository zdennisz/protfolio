import React, {
    useState
} from 'react';
import NavBar from "./NavBar"



const Introduction = (props) => {


    return (
        <>
            {props.isMobile ?
                <NavBar /> : ""}
            <div className="IntroTitle">Itroduction Page</div>
            {/* <img className="TopImageBackground" src={props.image} alt="Background Image of Gym Equipment" /> */}
        </>
    )
}







export default Introduction;