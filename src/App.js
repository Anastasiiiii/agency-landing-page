import './App.css';
import './styles/Formulas.css';
import Header from './components/Header';
import Image from './components/Image';
import bgImage from "./images/desktop/image-transform.jpg";
import bgImage2 from "./images/desktop/image-stand-out.jpg";
import bgImage3 from "./images/desktop/image-graphic-design.jpg";
import bgImage4 from "./images/desktop/image-photography.jpg";
import TextBox from './components/TextBox';



function App() {
  //const bgImage = "./images/desktop/image-transform.jpg";

  const header1 = "Graphic Design";
  const passage1 = "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.";

  const header2 = "Photography";
  const passage2 = "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."

  const textColor1 = "var(--dark-desaturated-cyan)";
  const textColor2 = "var(--dark-blue)";

  return (
    <div className="App">
      <Header />
      <span className='first-two-images'>
        <TextBox header={header1} passage={passage1} />
        <Image className="right-image" bgImage={bgImage} />
      </span>
      <span className='second-two-images'>
        <Image bgImage={bgImage2} />
        <TextBox header={header1} passage={passage1} />
      </span>


      <span className='down-two-images'>
        <Image bgImage={bgImage3} header={header1} text={passage1} textColor={textColor1} />
        <Image bgImage={bgImage4} header={header2} text={passage2} textColor={textColor2} />
      </span>
    </div>
  );
}

export default App;