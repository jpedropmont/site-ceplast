import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#010066] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-center md:text-right">
              <p>
                &copy; {new Date().getFullYear()} CEPLAST INDUSTRIA E COMERCIO
                DE EMBALAGENS A VACUO LTDA. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
