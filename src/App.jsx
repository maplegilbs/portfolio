import './App.css';
// import { Outlet } from 'react-router-dom';
import { PrimaryHeader } from './components/PrimaryHeader';
import { PrimaryFooter } from './components/PrimaryFooter';

function App() {
  return (
    <div className="App">
      <div className='page--wrapper'>
        <PrimaryHeader />
        {/* <Outlet /> */}
        <>Testing.....</>
        <PrimaryFooter />
      </div>
    </div>
  );
}

export default App;
