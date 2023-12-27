import React from 'react';
import "./css/CopilotMsgBox.css";

function CopilotMsgBox(props) {
  return (
    <div className='CopilotMsgBox'>
        <div className="details">
            <img src="/images/copilot-logo.png" alt="Copilot-pic..." /><span>Copilot</span><span>Just Now</span>
        </div>
        <div className="rply">
            <p>{props.rply}</p>
        </div>
    </div>
  )
}

export default CopilotMsgBox