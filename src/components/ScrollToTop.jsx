import {useState, useEffect} from 'react';
import {BsFillArrowUpSquareFill} from 'react-icons/bs';
import './scrollToTop.css';

export const ScrollToTop = () => {
  const [showScrollTopButtom, setShowScrollTopButtom] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1000) {
        setShowScrollTopButtom(true);
      } else {
        setShowScrollTopButtom(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {showScrollTopButtom && (
        <BsFillArrowUpSquareFill
          className="top_btn_position top_btn_style"
          onClick={scrollTop}
        />
      )}
    </div>
  );
};
