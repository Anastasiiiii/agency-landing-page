import './App.css';
import Header from './components/Header';
import Image from './components/Image';
import bgImage from "./images/desktop/image-transform.jpg";
import bgImage2 from "./images/desktop/image-stand-out.jpg";


function App() {
  //const bgImage = "./images/desktop/image-transform.jpg";
  return (
    <div className="App">
      <Header />
      <Image className="right-image" bgImage={bgImage} />
      <Image bgImage={bgImage2} />
    </div>
  );
}

export default App;
