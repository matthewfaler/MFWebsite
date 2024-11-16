import Header from './Header/Header';
import text from './Body/text.json';
import Body from './Body/Body';
import SkillDiv from './SkillDiv/SkillDiv';
import Footer from './Footer';
import './App.css'

function App() {
  return (
    <>
      <Header text="MatthewFaler.dev" />
      <Body text={text.paragraph1} />
      <Body text={text.paragraph2} />
      <Body text={text.paragraph3} />
      <Body text={text.paragraph4} />
      <Body text={text.paragraph5} />
      <SkillDiv />
      <Footer />
    </>  
  );
}

export default App
