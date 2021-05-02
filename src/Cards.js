import React, {
    useEffect,
} from 'react';



const Cards = (props) => {

    return (
        <div className="CardContainer">
            <div className="ImageBackgroundTop">{props.imageBackground}</div>
            <div className="TitleTop">{props.titleTop}</div>
            <div className="ListMiddle">{props.listMiddle}</div>
            <div className="LinksContainerBottom">
                <div className="GitHubButton">{props.gitHubButton}</div>
                <div className="DestinationButton">{props.destinationButton}</div>
            </div>
        </div>
    )

};

export default Cards;