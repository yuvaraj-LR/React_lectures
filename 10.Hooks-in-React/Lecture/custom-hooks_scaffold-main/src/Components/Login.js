import { useEffect, useState } from "react";
import  useLocalStorage  from "./useLocalStorage";


export default function Login(){
  const [password, setPassword] = useState("");  

  const {email, setEmail} = useLocalStorage();
  
  // const [email,setEmail] = useState("");
  //  useEffect(() => {
  //   let email = localStorage.getItem("email");

  //   if(email) {
  //     setEmail(localStorage.getItem("email"));
  //   }
  // }, [])

  //  useEffect(() => {
  //   localStorage.setItem("email", email)
  //  }, [email])

    return(
        <>
        <h1>Login to the Portal!</h1>
        <h3>Login</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          console.log("Form submitted")
        }}
      >
        Submit
      </button>
      <br />
        </>
    )
}