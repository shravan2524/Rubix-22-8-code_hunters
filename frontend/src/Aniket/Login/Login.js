import React,{useState} from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { createBrowserHistory } from 'history';

const Login = () => {
  let history = createBrowserHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  function login(){
    console.log(email, password);
    axios.post("http://localhost:5000/api/login", { email, password })
    .then((e) => {
        console.log(e.data);
        history.push('/');
        window.location.reload();
    })
    .catch((err) => console.log(err));
  }
  return (
    <div>
      <div>
        <input type="text"  value={email} onChange={(e)=>setemail(e.target.value)}  name="username" placeholder="Username/Email" />
      </div>
      <div>
        <input type="text"  value={password} onChange={(e)=>setpassword(e.target.value)}  name="password" placeholder="Password" />
      </div>
      <button type="submit" onClick={login}>Login</button>
      <hr />
      {/* <a href=""><img className={styles["google-logo"]} src="https://img.icons8.com/fluency/48/000000/google-logo.png"/></a> */}
      </div>
  );
};

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [name, setname] = useState("");
  
  function signup(){
    if(password === confirmpassword){
      axios.post("http://localhost:5000/api/signup", { email,name, password })
      .then((e) => {
          console.log(e.data);
      })
      .catch((err) => console.log(err));
    }
    else{
      alert("Password doesn't match");
    }
  }

  return (
    <div>
       <div>
        <input type="text"  value={name} onChange={(e)=>setname(e.target.value)} name="Full Name" placeholder="Full Name" />
      </div>
      <div>
        <input type="text"  value={email} onChange={(e)=>setemail(e.target.value)} name="email" placeholder="Email" />
      </div>
      <div>
        <input type="text"  value={password} onChange={(e)=>setpassword(e.target.value)} name="password" placeholder="Password" />
      </div>
      <div>
        <input type="text" value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)} name="password" placeholder="Confirm Password" />
      </div>
      <button type="submit" onClick={signup}>Sign up</button>
      <hr />
      {/* <a href=""><img className={styles["google-logo"]} src="https://img.icons8.com/fluency/48/000000/google-logo.png"/></a> */}
      </div>
  );
};

const LogPage = () => {
 const [wantLogin,setWantLogin]=useState(true)

  const wantLoginHandler=()=>{
    setWantLogin(true);
  }
  const wantSigninHandler=()=>{
    setWantLogin(false);
  }

  return (
    <React.Fragment>
      <div className={styles["main-container"]}>
        <div className={styles["login-container"]}>
          <nav className={styles["login-navbar"]}>
            <ul className={styles["login-navbar__list"]}>
              <li className={styles["login-navbar__list--itemlogin"]} onClick={wantLoginHandler} >Login</li>
              <li className={styles["login-navbar__list--item"]} onClick={wantSigninHandler}>Sign Up</li>
            </ul>
          </nav>
          <div className={styles["form-container"]}>
            {wantLogin&&<Login />}
            {!wantLogin && <Signup />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LogPage;
