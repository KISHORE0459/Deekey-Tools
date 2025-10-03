const AppImage = ({ src, alt = "image", styles = {}, className = "" }) => {
  return <img src={src} alt={alt} style={styles} className={className} />;
};

export default AppImage;
