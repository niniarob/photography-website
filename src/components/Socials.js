import React from 'react';
// import socials
import {ImFacebook, ImTwitter, ImPinterest, ImInstagram,ImYoutube} from 'react-icons/im';

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href='http://www.facebook.com' target='-blank'>
          <ImFacebook/>
        </a>
      </li>
      <li>
        <a href='http://www.twitter.com' target='-blank'>
          <ImTwitter/>
        </a>
      </li>
      <li>
        <a href='http://www.youtube.com' target='-blank'>
          <ImYoutube/>
        </a>
      </li>
      <li>
        <a href='http://www.pinterest.com' target='-blank'>
          <ImPinterest/>
        </a>
      </li>
      <li>
        <a href='http://www.instagram.com' target='-blank'>
          <ImInstagram/>
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
