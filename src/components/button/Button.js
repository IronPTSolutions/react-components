
function Button({ label, icon, size, onClick, className, type, disabled}) {
  return (
    <button className={`btn btn-${type} ${size && `btn-${size} ${className}`}`} onClick={onClick} disabled={disabled}>
      {icon && <i className={`fa fa-${icon} ${label && 'me-2'}`}/>}
      {label}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => { },
  className: '',
  type: 'primary',
  disabled: false
}

export default Button;
