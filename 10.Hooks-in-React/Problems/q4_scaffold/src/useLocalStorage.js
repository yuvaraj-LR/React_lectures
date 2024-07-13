import {useState, useEffect} from "react";

const useLocalStorage = (key, defaultValue) => {
  // Add the state and effect here
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    let name = localStorage.getItem("name");
    let age = localStorage.getItem("age");

    if(name && age) {
      setName(localStorage.getItem("name"));
      setAge(localStorage.getItem("age"));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
  }, [name, age]);

  return {name, setName, age, setAge};
};

export default useLocalStorage;