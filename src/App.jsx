import Header from "./components/Header";
import { Main } from "./components/Main";
import News from "./components/news";
import Question from "./components/question";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <News />
      <Question />
      <Footer />
    </div>
  );
}

export default App;
