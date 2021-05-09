import React, { useState } from 'react';

import './CardList.css'



const CardsList = (props) => {
    const data=props.projects

    return (<>
        <div className="header_content">
        <hr className="left_top_line"/><div className="title_top">Projects for Fun</div> <hr className="right_top_line"/></div>
       
        <div className="card_list" >
            {
                data.map((card) => {
                    console.log(card)
                    return (<div key={card.id}>
                        <>{card.title}</>
                    </div>)
                })
            }

        </div>
        </>
    )
}



export default CardsList;