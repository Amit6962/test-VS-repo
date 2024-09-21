import "./App.css";
import { useEffect, useState } from "react";
import FetchApi from "./components/fetchApi";
import SampleForm from "./components/sampleForm";
import CustomerDetails from "./components/CustomerDetails";

function App() {
  // const [childData, setChildData] = useState();
  // const [posts, setPosts] = useState();
  // const { id, title, body, userId } = posts;

  // const handleFormData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     body: JSON.stringify(childData),
  //     headers: {
  //       "content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => setPosts(json));
  // };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     body: JSON.stringify(childData),
  //     headers: {
  //       "content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => setPosts(json), console.log(posts));
  // }, [childData]);

  // const handleChildData = (data) => {
  //   console.log("childData", data);
  //   setChildData(data);
  // };

  return (
    <>
      <h1>Amit</h1>
      <CustomerDetails />
      {/* <FetchApi />
      <SampleForm onData={handleChildData} />
      <button onClick={handleFormData}>save Form data</button>
      <h2>{id}</h2>
      <h2>{title}</h2>
      <h2>{body}</h2>
      <h2>{userId}</h2> */}
    </>
  );
}

export default App;
