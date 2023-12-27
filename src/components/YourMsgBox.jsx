import React from 'react';
import "./css/YourMsgBox.css";

function YourMsgBox(props) {
  return (
    <div className='YourMsgBox'>
        <div className="details">
            <span>Just Now</span><span>You</span><img src="/images/profile-pic.png" alt="profile-pic..." />
        </div>
        <div className="msg">
            <p>{props.msg}</p>
        </div>
    </div>
  )
}

export default YourMsgBox