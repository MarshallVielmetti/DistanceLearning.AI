import React, { useState, useEffect } from "react";
import { useHistory, withRouter, Route } from "react-router-dom";

import GetPayload from "Components/Protected Route/GetPayload";

const ProtectedRoute = (props) => {
  const history = useHistory();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    async function doAuth() {
      let token = sessionStorage.getItem("token");
      if (!token) {
        history.push("/sign-in");
      }
      let sendToken = `Bearer ${token}`;

      let res = await fetch("http://localhost:5000/API/authenticate", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: { Authorization: sendToken },
      });

      let status = res.status;
      let accountType = GetPayload(token).accountType;
      if (status === 200 && accountType === props.accountType) {
        return true;
      } else {
        sessionStorage.removeItem("token");
        history.push("/sign-in");
        return false;
      }
    }

    setAuth(doAuth());
  }, [history, props.accountType]);

  const Render = (props) => {
    if (auth) {
      return <Route exact path={props.path} component={props.component} />;
    } else {
      return <div>Something went seriously wrong....</div>;
    }
  };

  return <Render path={props.path} component={props.component} />;
};

export default ProtectedRoute;
