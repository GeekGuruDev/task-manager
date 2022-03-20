const Button = ({ children, className = "", onClick, type }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
export default Button;
