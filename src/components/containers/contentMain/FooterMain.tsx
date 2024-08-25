import React from "react";

const FooterMain = () => {
  return (
    <footer className="bg-[#134E4A] text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} COSCO. Todos los derechos reservados.</p>
        {/* <div className="mt-4 flex justify-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default FooterMain;
