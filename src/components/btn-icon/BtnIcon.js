
function BtnIcon({ mode, children, icon, small, className }) {
  const smallCss = small ? 'btn-sm' : '';
  return (
    <button className={`btn btn-${mode} ${smallCss} ${className}`}>
      <i className={`fa fa-${icon} me-1`} />
      {children}
    </button>
  );
}

BtnIcon.defaultProps = {
  mode: 'primary',
  small: false,
  className: ''
}

export default BtnIcon;