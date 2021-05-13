import React, { useState } from 'react';
import Card from './Card'
import './CardList.css'



const CardsList = (props) => {
    const data = props.projects

    const listOfCards = data.map((card, index) => {
        return (<li key={index}><Card card={card} /></li>)

    });
    return (<>
        <div className="header_content">
            <hr className="left_top_line" /><div className="title_top">Projects for Fun</div> <hr className="right_top_line" /></div>
        <ul className="card_list" >{listOfCards}</ul>
    </>
    )
}



export default CardsList;