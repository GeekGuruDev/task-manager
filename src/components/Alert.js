const Alert = ({ children, type }) => {
  return <p className={`alert ${type}`}>{children}</p>;
};

export default Alert;
