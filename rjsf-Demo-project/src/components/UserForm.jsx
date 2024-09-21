import React, { useState } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import Bootstrap4Theme from "@rjsf/bootstrap-4";
import { withTheme } from "@rjsf/core";

const schema = {
  //   title: "User Information",
  //   type: "object",
  //   required: ["name", "email", "age"],
  //   properties: {
  //     name: { type: "string", title: "name" },
  //     email: { type: "string", title: "Email" },
  //     age: { type: "integer", title: "Aage" },
  //   },

  title: "A registration form",
  description: "A simple form example.",
  type: "object",
  required: ["firstName", "lastName"],
  properties: {
    firstName: {
      type: "string",
      title: "First name",
      default: "Amit",
    },
    lastName: {
      type: "string",
      title: "Last name",
    },
    age: {
      type: "integer",
      title: "Age",
    },
    bio: {
      type: "string",
      title: "Bio",
    },
    password: {
      type: "string",
      title: "Password",
      minLength: 3,
    },
    telephone: {
      type: "string",
      title: "Telephone",
      minLength: 10,
    },
  },
};

const uiSchema = {
  // age: {
  //   "ui:widget": "updown",
  // },
  // email: {
  //   "ui:widget": "email",
  // },
  firstName: {
    "ui:autofocus": true,
    "ui:emptyValue": "",
    "ui:placeholder":
      "ui:emptyValue causes this field to always be valid despite being required",
    "ui:autocomplete": "family-name",
    "ui:enableMarkdownInDescription": true,
    "ui:description":
      "Make text **bold** or *italic*. Take a look at other options [here](https://markdown-to-jsx.quantizor.dev/).",
  },
  lastName: {
    "ui:autocomplete": "given-name",
    "ui:enableMarkdownInDescription": true,
    "ui:description":
      "Make things **bold** or *italic*. Embed snippets of `code`. <small>And this is a small texts.</small> ",
  },
  age: {
    "ui:widget": "updown",
    "ui:title": "Age of person",
    "ui:description": "(earth year)",
  },
  bio: {
    "ui:widget": "textarea",
  },
  password: {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!",
  },
  telephone: {
    "ui:options": {
      inputType: "tel",
    },
  },
};

// Use the Bootstrap 4 theme
const FormWithBootstrap = withTheme(Bootstrap4Theme);

const UserForm = () => {
  const [formData, setFormData] = useState(null);

  const onSubmit = ({ formData }) => {
    setFormData(formData);
    console.log("formData", formData);
  };

  return (
    <div>
      <h1>User Form</h1>
      <FormWithBootstrap
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
        onSubmit={onSubmit}
      />
      {/* <Form
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
        onSubmit={onSubmit}
      /> */}
      {/* {formData && (
        <div>
          <h2>Submitted Data</h2>
          <p>
            <strong>Name:</strong>
            {formData.name}
          </p>
          <p>
            <strong>Email:</strong>
            {formData.email}
          </p>
          <p>
            <strong>Age:</strong>
            {formData.age}
          </p>
        </div>
      )} */}
    </div>
  );
};

export default UserForm;
