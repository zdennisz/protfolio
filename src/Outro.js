import React, {
    useState
} from 'react';
import './Outro.css'

const Outro = () => {

    return (
        <div className="outro">
            <div className="title_top">Keep in Touch</div>
            <div className="line_top"></div>
            <div className="portrait"></div>
            <div className="content_container_outro">
                <div className="ContentOutro"></div>
                <div className="ButtonsContainerMiddle">
                    <div className="EmailButton"></div>
                    <div className="LinkenInButton"></div>
                    <div className="GithubButton"></div>
                </div>
            </div>
          
        </div>
    )

}

export default Outro;