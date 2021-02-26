import { Fragment } from 'react';

import Navbar from './components/nav/Navbar';
import Section from './components/section/Section';
import Footer from './components/footer/Footer';
import Button from './components/button/Button';

import './App.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container pt-5">
        <Section title="Stateless Components">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6">
            <div className="col mb-1"><Button label="Simple button"></Button></div>
            <div className="col mb-1"><Button label="Icon button" icon="send"></Button></div>
            <div className="col mb-1"><Button label="Sized button" size="lg"></Button></div>
            <div className="col mb-1"><Button label="Colored button" type="warning" icon="warning"></Button></div>
            <div className="col mb-1"><Button label="Mixed button" type="danger" icon="exclamation" size="sm"></Button></div>
          </div>
        </Section>
        <Section title="State Components">
          <div className="row ow-cols-2 row-cols-md-3 row-cols-lg-6">
            <div className="col"><Counter /></div>
            <div className="col"><Counter min={0} /></div>
          </div>
        </Section>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
