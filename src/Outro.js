import React, {
    useState
} from 'react';
import './Outro.css'

const Outro = () => {


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
                        <a href="mailto:zdennisz@gmail.com" className="button button_email" ></a>
                        <a href="https://www.linkedin.com/in/dennis-zabolotny-62802a149/" className="button button_linkenin" ></a>
                        <a href="https://github.com/zdennisz" className="button button_git"></a> 
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