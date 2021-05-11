import React, {
    useEffect,
} from 'react';
import './Card.css'


const Card = (props) => {

    const data = props.card

    const backgroundImageStyle = {
        // backgroundImage: 'url('+props.imageBackground+')',
        backgroundColor: 'white',
        height: '20%',
        width: '100%',
    };

    const listOfProps = data.description.map((item) => {

        return (<li>{item}</li>)
    })

    const listOfButtons = data.buttons.map((item) => {

        let buttonClass = 'basic_button';
        let link;
        let buttonContent
        if (item.hasOwnProperty('github')) {
            buttonClass += ' github_button';
            link = item.github;
            buttonContent="Github";
        } else if (item.hasOwnProperty('website')) {
            buttonClass += ' website_button';
            link = item.website;
            buttonContent="Website";
        } else if (item.hasOwnProperty('googleplay')) {
            buttonClass += ' googleplay_button'
            link = item.googleplay;
            buttonContent="Google Play";
        }

        if (link === "") {
            return (<></>)
        } else {
            return (<a href={link} className={buttonClass}>{buttonContent}</a>)
        }

    })
    return (
        <div className="card_container">
            <div style={backgroundImageStyle}></div>
            <div className="title_top">{data.title}</div>
            <ul className="card_content">{listOfProps}</ul>
            <div className="links">{listOfButtons}</div>
        </div>
    )

};

export default Card;