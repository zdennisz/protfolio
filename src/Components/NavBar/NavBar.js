import React, {
    useState
} from 'react';



const NavBar = (props) => {

    const handleHomeNav = () => {
        if (props) {
            props.navHome();
        }

    }

    const handleProjectsNav = () => {
        if (props) {
            props.navProjects();
        }
    }
    const handleContactNav = () => {
        if (props) {
            props.navContact();
        }
    }

    return (
        <div className="NavBarContainer">
            <div className="ButtonHome" onClick={handleHomeNav} />
            <div className="Buttonprojects" onClick={handleProjectsNav} />
            <div className="ButtonContact" onClick={handleContactNav} />
        </div>
    )

}



export default NavBar;