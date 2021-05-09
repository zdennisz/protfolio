import React, { useState } from 'react';

import './CardList.css'



const CardsList = (props) => {
    console.log(props.props)

    return (<>
        <div className="header_content">
        <hr className="left_top_line"/><div className="title_top">Projects for Fun</div> <hr className="right_top_line"/></div>
        <div className="card_list" >
            {
                props.list.map((card, index) => {
                    return (<div key={index}>
                        <>{card}</>
                    </div>)
                })
            }
        </div>
        </>
    )
}



export default CardsList;