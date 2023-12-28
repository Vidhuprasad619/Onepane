import React from 'react';
import "./css/CopilotExtendBoxTwo.css";


function CopilotExtendBoxTwo() {
  let data=[{changes:"nexus-frontend-deployment",by:"deployed by",image:"/images/a_logo.avif"},
  { changes:"vnet-nexussaas-prod-eastus-prod",by:"configuration updated by",image:"/images/github.webp"}]

  return (
    <div className='CopilotExtendBoxTwo'>
      {
        data.map((data)=>{
          return(
            <div className="changes_box">
              <span className='logo_adjust'><img src="/images/snowflake.png" alt="snowflate_icon..." />{data.changes}</span>
              <span>{data.by}</span>
              <span className='logo_adjust'><img src="/images/ai-generated.webp" alt="profile-pic..." /> Jaya Krishnan</span>
              <span className='logo_adjust'><img src={data.image} alt="icon..." /> 07:58 AM</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default CopilotExtendBoxTwo