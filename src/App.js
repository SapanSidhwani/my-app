import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  return (
    <>

      {/* Navbar is component , title and about is */}
      <Navbar title="TextUtils" about="About Us" />

      <TextForm heading="Enter the text to analyze below" />

      {/* <About/> */}

    </>
  );
}

export default App;
