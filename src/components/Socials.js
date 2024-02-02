import React, {useContext} from 'react';
// import socials
import {ImFacebook,  ImInstagram,ImLinkedin} from 'react-icons/im';
import {CursorContext} from '../context/CursorContext';


const Socials = () => {
  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext);

  return (
  <div
  onMouseEnter={mouseEnterHandler}
  onMouseLeave={mouseLeaveHandler}
   className='hidden  xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href='http://www.facebook.com' target='-blank'>
          <ImFacebook/>
        </a>
      </li>
      <li>
        <a href='http://www.linkedin.com' target='-blank'>
          <ImLinkedin/>
        </a>
      </li>
      <li>
        <a href='http://www.instagram.com' target='-blank'>
          <ImInstagram/>
        </a>
      </li>
    </ul>
  </div>
  );
};

export default Socials;
