import React, { useState } from "react";
import {Link} from '@reach/router'
import {
  Visibilityoff,
  Visibilityon,
  Google,
  Facebook,
  Two,
  Message,
  Arrow,
  Dollar,
  Thumbs,
} from "../svgs";
const Login = () => {
  return (
    <div className="login-cont">
      <div className="login-left">
        <Title />
        <div className="left-body">
          <FormTitle />
          <SignIn />
          <LoginButtons />
        </div>
        <div />
      </div>
      <div className="login-right">
        <div className="image">
          <Two height="200" width="400" />
        </div>
        <ul>
          <li style={{ color: "white" }}>
            <Message height="13" width="15" /> Fully Automated Comment
            Moderation
          </li>
          <li style={{ color: "white" }}>
            <Arrow height="13" width="15" /> Take a backseat while we automate
            your repo
          </li>
          <li style={{ color: "white" }}>
            <Dollar height="13" width="15" /> Start with a free trial
          </li>
          <li style={{ color: "white" }}>
            <Thumbs height="13" width="15" /> Beat SAAS in the industry
          </li>
        </ul>
      </div>
    </div>
  );
};

const Title = () => {
  return (
    <div className="title-cont">
      <h3 className="title">
        Rep<span>suite</span>.
      </h3>
    </div>
  );
};
const FormTitle = () => {
  return (
    <>
      <div className="form-title">
        <h1>Hey There 👋</h1>
        <p>
          Welcome back To Rep<span>suite</span>.
        </p>
      </div>
      <FormBody />
    </>
  );
};

const FormBody = () => {
  const [visibility, setvisibility] = useState(false);
  return (
    <div className="form-body">
      <div>
        <p>Email</p>
        <div style={{ marginBottom: "1.5rem" }}>
          <input type="email" placeholder="Enter email... "></input>
        </div>
      </div>
      <div>
        <p>Password</p>
        <div>
          <input
            type={`${!visibility && "password"}`}
            placeholder="Password..."
          ></input>
          <button
            className="visibility"
            onClick={() => {
              setvisibility(!visibility);
            }}
          >
            {!visibility ? <Visibilityoff /> : <Visibilityon />}
          </button>
        </div>
        <p className="lower">
          Use 8 or more characters to make a strong password
        </p>
      </div>
    </div>
  );
};
const SignIn = () => {
  return (
    <div className="signin-cont">
      <Link to="/dashboard">
        <div>Signin</div>
      </Link>
      <p>
        New User? <span>Signup instead</span>
      </p>
    </div>
  );
};
const LoginButtons = () => {
  return (
    <div className="loginbuttons">
      <div className="contwith">
        <div className="line" />
        <span>or continue with</span>
        <div className="line" />
      </div>
      <div className="button-group">
        <div>
          <Google height="34" width="34" />
        </div>
        <div>
          <Facebook height="34" width="34" />
        </div>
      </div>
    </div>
  );
};
export default Login;
