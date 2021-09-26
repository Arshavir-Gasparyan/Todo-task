import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./LogIn.module.css";

export default function LogIn() {
  const [loginInfo, setLoginInfo] = useState("");
  const [passwordInfo, setPasswordInfo] = useState("");
  const [isValid, setValid] = useState({
    isValidUserInfo: true,
    isValidPasswordInfo: true,
  });
  const userInfo = [
    { user: "John Smith", username: "user1", password: "password1" },
    { user: "Robert Johnson", username: "user2", password: "password2" },
  ];
  const handleUsername = (event) => {
    setLoginInfo(event.target.value);
  };
  const handlePassword = (event) => {
    setPasswordInfo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const currentUser = userInfo.filter(
      (el) => el.username === loginInfo && el.password === passwordInfo
    );
    if (currentUser.length) {
      setValid({
        isValidLoginInfo: true,
        isValidPasswordInfo: true,
      });
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      const isValidUserInfo = userInfo.find(
        (user) => user.username === loginInfo
      );
      const isValidPasswordInfo = userInfo.find(
        (user) => user.password === passwordInfo
      );
      if (!!isValidPasswordInfo && !!isValidUserInfo) {
        setValid({
          isValidUserInfo: false,
          isValidPasswordInfo: false,
        });
      } else
        setValid({
          isValidLoginInfo: !!isValidUserInfo,
          isValidPasswordInfo: !!isValidPasswordInfo,
        });
    }
  };
  return (
    <div className={styles.logIn}>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>Username</label>
        <Input onChange={handleUsername} value={loginInfo} />
        {isValid.isValidUserInfo ? null : (
          <p style={{ color: "crimson", textAlign: "left" }}>
            Please enter valid username
          </p>
        )}
        <label className={styles.label}>Password</label>
        <Input onChange={handlePassword} value={passwordInfo} />
        {isValid.isValidPasswordInfo ? null : (
          <p style={{ color: "crimson", textAlign: "left" }}>
            Please enter valid password
          </p>
        )}
        <Button />
      </form>
    </div>
  );
}
