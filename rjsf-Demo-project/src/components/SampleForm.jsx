import React, { useState } from "react";

const SampleForm = ({ onData }) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [userId, setUserId] = useState();

  const sendDataToParent = () => {
    onData({ title, body, userId });
  };
  return (
    <div>
      sampleForm
      <hr />
      <input
        type="text"
        value={title}
        name="title"
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={body}
        name="body"
        onChange={(e) => setBody(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={userId}
        name="userId"
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={sendDataToParent}>Save User</button>
    </div>
  );
};

export default SampleForm;
