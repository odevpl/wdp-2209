const getResVersion = () => {
  if (window.innerWidth <= 500) {
    return 'mobile';
  } else if (window.innerWidth <= 900) {
    return 'tablet';
  } else return 'desktop';
};

export default getResVersion;
