import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';
function App() {
  return (
<>
    <Navbar title="rishav anand"/>
    <div>
    <TextForm heading="enter the text"/>
    </div>
    <About/>
</>

  );
}

export default App;
