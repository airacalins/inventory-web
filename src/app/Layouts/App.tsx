import React from 'react';
import Tab from '../Components/Tabs/Tab';

function App() {
  return (
    <div className="d-flex mb-3">
      <Tab title={'Home'} isActive={false} />
      <Tab title={'Profile'} isActive={true} />
      <Tab title={'Contact'} isActive={false} />
    </div>
  );
}


export default App;
