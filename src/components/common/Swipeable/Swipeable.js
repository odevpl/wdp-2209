import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Swipeable = ({ children, leftAction, rightAction }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = e => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = e => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      leftAction();
    }

    if (isRightSwipe) {
      rightAction();
    }
  };

  return (
    <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipeable;
