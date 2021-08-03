import React from 'react';
import './Card.css'


const DescriptionItem = (props) => {
    const { val } = props
    return (<li>{val}</li>)
}

const ButtonItem = (props) => {
    const { item } = props
    let buttonClass = 'basic_button';
    let link;
    let buttonContent
    if (item.hasOwnProperty('github')) {
        buttonClass += ' github_button';
        link = item.github;
        buttonContent = "Github";
    } else if (item.hasOwnProperty('website')) {
        buttonClass += ' website_button';
        link = item.website;
        buttonContent = "Website";
    } else if (item.hasOwnProperty('googleplay')) {
        buttonClass += ' googleplay_button'
        link = item.googleplay;
        buttonContent = "Google Play";
    }

    if (link === "") {
        return (<></>)
    } else {
        return (<li className="li_single_item"><a href={link} className={buttonClass}>{buttonContent}</a></li>)
    }
}

const Card = (props) => {

    const { card } = props
    const listOfContentDescription = card.description.map((item, index) => {
        return <DescriptionItem key={index.toString()} val={item} />
    })

    const listOfButtons = card.buttons.map((item, index) => {

        return <ButtonItem key={index.toString()} item={item} />

    })

    return (
        <div className="card_container">
            <div className="image_container">
                <img className="image" src={card.image} alt="Card" />
            </div>
            <div className="title_top">{card.title}</div>
            <ul className="card_content">{listOfContentDescription}</ul>
            <ul className="links">{listOfButtons}</ul>
        </div>
    )

};

export default Card;