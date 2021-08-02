import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";

function TeacherRoute(props) {
  const history = useHistory();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      history.push("/sign-in");
    }

    const sendToken = `Bearer ${token}`;

    fetch("http://localhost:5000/API/authenticate", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: { Authorization: sendToken },
    }).then((res) => {
      console.log(res);
    });
  });

  function Render(props) {
    if (props.children) {
      if (auth) {
        return props.children;
      } else {
        return props.children;
      }
    } else {
      return null;
    }
  }

  return <Render children={props.children} />;
}

export default TeacherRoute;
