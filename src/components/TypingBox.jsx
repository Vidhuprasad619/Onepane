import React from 'react';
import "./css/TypingBox.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function TypingBox() {
  return (
    <div className='TypingBox'>
        <section className='typingSection'>
            <div className="typingArea">
                <p>Show me more about changes on <span>nexus-fron</span>|</p>
                <FontAwesomeIcon icon={faChevronRight} style={{color: "#852cdd",}} />
            </div>
            <p>nexus-frontend-deplyment</p>
            <div className="more_details">
                <div className="star"></div>
                <sub>
                    <div className="sub_star"></div>
                </sub>
                <span>Show me more related incidents</span>
                <span>Show me related logs from nexus-front-end</span>
            </div>
        </section>
    </div>
  )
}

export default TypingBox