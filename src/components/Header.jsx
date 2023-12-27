import React from 'react';
import './css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className='Header'>
        <div className="company_logo">
            <img src="/images/copilot-logo.png" alt="copilot-logo..." />
            <h1>Copilot</h1>
        </div>
        <div className="close">
            <FontAwesomeIcon icon={faX} />
        </div>
    </div>
  )
}

export default Header