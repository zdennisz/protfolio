import React, {
    useState
} from 'react';
import './Outro.css'

const Outro = () => {

const handleEmailButtonClick=()=>{

}
const handleGitButtonClick=()=>{
    
}
const handleLinkeninButtonClick=()=>{
    
}

    return (<>
        <div className="footer_content">
        <hr className="left_top_line" /><div className="title_top">Keep In Touch</div> <hr className="right_top_line" />
    </div>
        <div className="outro">
         

            <div className="content_container_outro">
                <div className="content_outro">
                    <div className="content_something">
                        <div className="end_message">Thanks for reaching out!<br/> Feel free to leave a message or contact me via</div>          
                    <div className="buttons_container">
                        <div className="button button_email" onClick={handleEmailButtonClick}></div>
                        <div className="button button_linkenin"  onClick={handleLinkeninButtonClick}></div>
                        <div className="button button_git"  onClick={handleGitButtonClick}></div> 
                    </div>
                    </div>
                </div>
                <div className="portrait"></div>

            </div>

        </div>
        </>
    )

}

export default Outro;