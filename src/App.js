import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './componenet/Greeting';
import ClickCounter from './componenet/ClickCounter';
import DisplayProp from './componenet/DisplayProp';
import EffectLogger from './componenet/EffectLogger';
import SimpleForm from './componenet/SimpleForm';

function App() {
  return (
    <div>
      <Greeting />
      <ClickCounter />
      <DisplayProp message="This is a message passed as a prop!" />
      <EffectLogger />
      <SimpleForm />
    </div>
  );
}

export default App;
