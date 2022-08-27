import StepBox from './components/step-box/StepBox';
import BtnIcon from './components/btn-icon/BtnIcon';

import step1 from './assets/images/steps/step-1.png'
import step2 from './assets/images/steps/step-2.png'

function App() {
  return (
    <div className="App">
      <div className="container my-5">
        <div className="d-flex">
          <StepBox img={step1} title="Holi" text="Adios" className="text-info" />
          <StepBox img={step2} title="Pepa" text="Pig" />
        </div>

        <BtnIcon icon="user" className="me-1">@prado</BtnIcon>
        <BtnIcon icon="alert" mode="danger" small={true} className="me-1">@prado</BtnIcon>
        <BtnIcon icon="warning" mode="warning">Movies!</BtnIcon>
      </div>
    </div>
  );
}

export default App;
