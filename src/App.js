import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>

    {/* Navbar is component , title and about is */}
      <Navbar title="TextUtils" about="About Us" />

      <TextForm/>

    </>
  );
}

export default App;
