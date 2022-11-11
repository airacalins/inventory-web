import React from 'react';
import PrimaryButton from '../components/buttons/PrimaryButton';
import SecondayButton from '../components/buttons/SecondaryButton';
import Header1 from '../components/typography/Header1';
import Header2 from '../components/typography/Header2';
import Header3 from '../components/typography/Header3';
import Header4 from '../components/typography/Header4';
import Header5 from '../components/typography/Header5';
import Paragraph from '../components/typography/Paragraph';
import Small from '../components/typography/Small';

function App() {
  return (
    <>
      <PrimaryButton label={'Hello'} onClick={() => console.log('Hello')} />
      <SecondayButton label={'Hello'} onClick={() => console.log('Hello')} />
      <Header1 text='Hayes Valley Studio' />
      <Header2 text='Hayes Valley Studio' />
      <Header3 text='Hayes Valley Studio' />
      <Header4 text='Hayes Valley Studio' />
      <Header5 text='Hayes Valley Studio' />
      <Paragraph text='Paragraph' />
      <Small text='Small' />
    </>
  );
}

export default App;
