import React, { useState, useEffect } from 'react';

const VoltarAoTopo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 200); // exibe o botão quando a rolagem é maior que 200 pixels
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      style={{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        opacity: isVisible ? 1 : 0,
        backgroundColor: "black",
        color: "white",
        borderRadius: "25px",
        width: "50px",
        height: "50px",
        cursor: "pointer",
        border: "2px solid #FFFFFF",
        fontSize: "30px",
        paddingBottom: "5px"
      }}
      title='Voltar ao Topo'
    >
        ↑
    </button>
  );
};

export default VoltarAoTopo;
