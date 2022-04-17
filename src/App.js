import logo from './logo.svg';
import './App.css';
import Homepage from './component/Homepage';
import CardDetail from './component/CardDetail';
import SignInPage from './component/SignInPage';
import SignUpPage from './component/SignUpPage';
import ForgotPasswordPage from './component/ForgotPasswordPage';

import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

// import Homepage from './mobileDevice.js/MobileHomepage';
// import CardDetail from './mobileDevice.js/MobileCard';
// import SignInPage from './mobileDevice.js/MobileSignIn';
// import SignUpPage from './mobileDevice.js/MobileSignUp';
// import ForgotPasswordPage from './mobileDevice.js/MobileForgot';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/carddetail" component={CardDetail}/>
      <Route exact path="/signinpage" component={SignInPage}/>
      <Route exact path="/signuppage" component={SignUpPage}/>
      <Route exact path="/forgotpasswordpage" component={ForgotPasswordPage}/>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
