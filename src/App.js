import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" component={<Explore />} />
          <Route path="/offers" component={<Offers />} />
          <Route path="/sign-in" component={<SignIn />} />
          <Route path="/sign-up" component={<SignUp />} />
          <Route path="/profile" component={<Profile />} />
          <Route path="/forgot-password" component={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
