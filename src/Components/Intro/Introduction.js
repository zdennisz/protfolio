import React, {
    useState
} from 'react';
import NavBar from "../NavBar/NavBar"
import './Introduction.css'


const Introduction = (props) => {


    return (
        <>
            <div className="intro">
                {props.isMobile ?
                    <NavBar /> : ""}
                <div className="intro_title">Hi there! My name is Dennis, I'm a software engineer who is always pushing the boundries of preformance! I'm passionate about challenging my coding skills as well as my gym workouts & never afraid to push my limits.
                </div>

            </div>
        </>
    )
}







export default Introduction;