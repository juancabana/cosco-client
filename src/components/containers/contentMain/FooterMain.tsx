import React from "react";
import Face from '@/assets/facebook-brands-solid.svg'
import Insta from '@/assets/instagram-brands-solid.svg'
import Lin from '@/assets/linkedin-brands-solid.svg'
import Twit from '@/assets/x-twitter-brands-solid.svg'

const FooterMain = () => {
  return (
    <footer className="bg-[#134E4A] text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} COSCO. Todos los derechos reservados.</p>
        <ul className="flex justify-center gap-4 mt-5">
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={Face} alt="Facebook" className="w-5"/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Insta} alt="Instagram" className="w-5"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={Lin} alt="LinkedIn" className="w-5"/>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={Twit} alt="Twitter" className="w-5"/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterMain;
