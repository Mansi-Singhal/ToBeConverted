import React from 'react';
import {AiOutlineGlobal} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {FaPhoneSquareAlt} from 'react-icons/fa';



function Footer() {
  return (
    <div className="Footer">
      <div className="footercontainer">
        <div className="footeritem">
          <FaPhoneSquareAlt className="social"/>
          Toll free <b>1800 200 1234</b>
        </div>
        <div className="footeritem">
          <BsFacebook className="social"/>
          www.facebook.com/cripumps
        </div>
        <div className="footeritem">
          <AiOutlineGlobal className="social"/>
          www.crigroups.com
        </div>
      </div>
    </div>
  )
}

export default Footer
