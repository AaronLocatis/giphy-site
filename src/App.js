
import './App.css';
import Menu from "./component/Menu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./component/LoginPage";
import RegisterPage from "./component/RegisterPage";
import SearchPage from "./component/SearchPage";
import FavoritesPage from "./component/FavoritesPage";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
          <Route path="/*" element={<Navigate to="/login" />}></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
