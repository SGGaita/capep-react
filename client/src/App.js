import {useContext} from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import {Home,List,Login,New,Single} from "./pages"
import { productInputs, userInputs } from "./data/formSource";
import "./style/dark.scss"
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

function App() {
  
  const {darkMode} = useContext(DarkModeContext)

  const {currentUser} = useContext(AuthContext)

const RequireAuth = ({children})=>{
  return currentUser ? children : <Navigate to="/login" />
}

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route path="login" element={<Login />} />
            <Route index element={<RequireAuth><Home/></RequireAuth>} />
             <Route path="users">
              <Route index element={<RequireAuth><List /></RequireAuth>} />
              <Route path="new" element={<RequireAuth><New inputs={userInputs} title="Add New User"/></RequireAuth>} />
              <Route path=":userId" element={<RequireAuth><Single /></RequireAuth>} />
            </Route>
            <Route path="products">
              <Route index element={<RequireAuth><List /></RequireAuth>} />
              <Route path="new" element={<RequireAuth><New inputs={productInputs} title="Add New Product" /></RequireAuth>} />
              <Route path=":productId" element={<RequireAuth><Single /></RequireAuth>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
