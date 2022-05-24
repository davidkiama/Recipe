import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav">
          <Link to={"/"} className="logo">
            <GiKnifeFork />
            Recipes
          </Link>
        </div>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
