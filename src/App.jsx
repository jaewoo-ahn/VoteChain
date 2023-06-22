import {Route, Routes} from "react-router-dom";
import {Nav, Main, Page2, Page3, Footer} from "./pages";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
