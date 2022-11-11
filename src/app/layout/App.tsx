import React from 'react';
import PrimaryButton from '../components/buttons/PrimaryButton';
import SecondayButton from '../components/buttons/SecondaryButton';
import Header1 from '../components/typography/Header1';
import Header2 from '../components/typography/Header2';

function App() {
  return (
    <>
      <PrimaryButton label={'Hello'} onClick={() => console.log('Hello')} />
      <SecondayButton label={'Hello'} onClick={() => console.log('Hello')} />
      <Header1 text='hi' />
      <Header2 text='hi' />
    </>
  );
}

export default App;
