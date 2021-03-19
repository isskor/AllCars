import { useState } from 'react';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
function ScrollToTopBtn() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  const style = {
    position: 'fixed',
    right: '20px',
    bottom: '60px',
    height: '20px',
    cursor: 'pointer',
    height: 40,
    display: showScroll ? 'flex' : 'none',
    background: '#363636f2',
    opacity: 0.8,
    padding: '0.5em',
    borderRadius: '50%',
  };

  return (
    <div onClick={scrollTop} style={style}>
      <VerticalAlignTopOutlined />
    </div>
  );
}

export default ScrollToTopBtn;
