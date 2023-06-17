import Header from "./components/Header"
/**importando css */
import './assets/css/stile.css'
import Login from "./components/login";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
    {
      isAuthenticated ? (
        <> 
          <Header />
        </>
      ) : (
        <Login />
      )
    }
    </>
  )
}

export default App
