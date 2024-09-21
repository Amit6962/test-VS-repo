import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [childData, setChildData] = useState();
  const [posts, setPosts] = useState();

  const url = "https://jsonplaceholder.typicode.com/posts";

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setPosts(json))
  //     .catch((e) => {
  //       console.log("e", e);
  //     });
  // }, []);

  const handleChildData = (data) => {
    setChildData(data);
  };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     body: JSON.stringify(childData),
  //     headers: {
  //       "content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => setPosts(json));
  // }, []);

  const updatePostsVal = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div>
      {/* <ul>
        {posts.map((pst) => {
          return (
            <>
              <li>{pst.id}</li>
              <li>{pst.title}</li>
              <li>{pst.body}</li>
              <li>{pst.userId}</li>
            </>
          );
        })}
      </ul> */}
      {/* <h2>{title}</h2>
      <h2>{body}</h2>
      <h2>{userId}</h2>
      <h2>{id}</h2> */}
      <button onClick={updatePostsVal}>Update Posts</button>
    </div>
  );
};

export default FetchApi;
