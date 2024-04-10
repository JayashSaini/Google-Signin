import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Layout.jsx";
import Home from './Components/Home.jsx';
import LoginSuccess from './Components/LoginSuccess.jsx';
import LoginFailed from './Components/LoginFailed.jsx';
import Profile from './Components/Profile.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/user/profile/:accessToken/:refreshToken" element={<Profile />} />
          <Route path="/login/success" element={<LoginSuccess />} />
          <Route path="/login/failed" element={<LoginFailed />} />
        </Route>
        {/* Add more routes as needed */}
        <Route path="*" element={() => <h1>404 Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
