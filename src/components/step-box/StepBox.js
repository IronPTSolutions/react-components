import './StepBox.css';

function StepBox(props) {
  const { img, title, text, className } = props;
  return (
    <div className={`step-box d-flex flex-column ${className}`}>
      <img src={img} alt={title} className="mb-1 align-self-start"/>
      <h3 className="m-0 fw-light">{title}</h3>
      <p className="text-muted">{text}</p>
    </div>
  );
}


StepBox.defaultProps = {
  className: ''
}

export default StepBox;