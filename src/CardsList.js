import React, { useState } from 'react';

import './CardList.css'



const CardsList = (props) => {
    console.log(props.props)

    return (
        <div className="card_list" >
            {
                props.list.map((card, index) => {
                    return (<div key={index}>
                        <>{card}</>
                    </div>)
                })
            }
        </div>
    )
}



export default CardsList;