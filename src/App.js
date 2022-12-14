import "./App.css";
import { Outlet, Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";

// compoenets
import Navbar from "./components/Navbar/Navbar";

// pages
import Home from "./pages/Home/Home";
import SignUp from "./pages/Sign/SignUp";
import Main from "./pages/Main/Main";
import ObjectDetection from "./pages/Camera/ObjectDetection";
import NearMarketList from "./pages/NearMarket/NearMartList";
import PriceHistoryGraph from "./pages/Camera/PriceHistoryGraph";
const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
};

function App() {
  // console.log(
  //   "REACT_APP_SERVER_PORT/PORT = ",
  //   process.env.REACT_APP_SERVER_PORT
  // );
  console.log(
    "REACT_APP_DJANGO_SERVER_PORT/PORT = ",
    process.env.REACT_APP_DJANGO_SERVER_PORT
  );
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="main" element={<Main />} />
              <Route path="near_market_list" element={<NearMarketList />} />
              <Route
                path="price_history_graph"
                element={<PriceHistoryGraph />}
              />
            </Route>
            <Route index element={<Home />} />
            <Route path="object_detection" element={<ObjectDetection />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
