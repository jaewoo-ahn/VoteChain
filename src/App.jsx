import {Route, Routes} from "react-router-dom";
import {Nav, Page1, Page2, Page3, Footer} from "./pages";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
