import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>  
    {/* Navbar is component , title and about is */}
      <Navbar title="TextUtils" about="About Us" />
      <Navbar/>
    </>
  );
}

export default App;
