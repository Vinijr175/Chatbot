import * as React from 'react';
import ChatComponent from './components/chatcomponent';

const App: React.FunctionComponent = () => {
  return(
    <div className="max-w-lg mt-20 mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden"></div>

      <ChatComponent />
    </div>  ) ;
};

export default App;