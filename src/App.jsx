import Header from "./components/Header";
import { Main } from "./components/Main";
import News from "./components/news";
import Question from "./components/question";
import Footer from "./footer";
// import ScrollAnimation from "./scroll";
import Mobile from "./Mobile/index";
function App() {
  return (
    <div className="App">
      {/* <ScrollAnimation /> */}
      <Mobile />
      <Header />
      <Main />
      <News />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
