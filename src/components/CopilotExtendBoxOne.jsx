import React from 'react';
import "./css/CopilotExtendBoxOne.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

function CopilotExtendBoxOne() {
  let warnings=["High Trafic Alert: Trafic Volume Exceeded Threshold on","Error Rate Alert: Error Frequency Surpassed Threshold on"]
  return (
    <div className='CopilotExtendBoxOne'>
      
        {
          warnings.map((warn)=>{
            return(
              <section className='warning_msg'>
                <FontAwesomeIcon icon={faTriangleExclamation} style={{color: "#ff7300"}} />
                <p>{warn}</p>
                <span>nexust-frontend</span>
                <span><FontAwesomeIcon icon={faCircleChevronRight} style={{marginRight:"0.3dvw"}} />08:50AM</span>
              </section>
            )
          })
        }
      
    </div>
  )
}

export default CopilotExtendBoxOne