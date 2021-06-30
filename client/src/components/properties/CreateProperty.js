import React from "react";
import { Form, Field } from "react-final-form";
import Styles from "./Styles";
import ImageUploader from "react-images-upload";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

const CreateProperty = () => {
  const { getAccessTokenSilently, user } = useAuth0();
  const history = useHistory();

  const onSubmit = async (values) => {
    const token = await getAccessTokenSilently();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    values.user = user.email;
    const body = JSON.stringify(values);
    await axios.post("/api/properties", body, config).then((res) => {
      return history.push("/properties");
    });
  };

  const onDrop = (picture) => {
    console.log(picture);
  };

  const required = (value) => (value ? undefined : "Required");

  const periodQuestion = (
    <Field name="period" validate={required}>
      {({ input, meta }) => (
        <div>
          <label>Payment Period</label>
          <select {...input} name="period">
            <option />
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      )}
    </Field>
  );

  return (
    <Styles>
      <h1>Create property</h1>
      <p>Lets add some property's information</p>

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="title" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Title</label>
                  <input {...input} type="text" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="location" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Location</label>
                  <input {...input} type="text" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="status" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Property status</label>
                  <select {...input} name="status">
                    <option />
                    <option value="Rent">For Rent</option>
                    <option value="Sell">For Sell</option>
                  </select>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="price" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Price</label>
                  <input {...input} type="number" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="currency" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Currency</label>
                  <select {...input} name="currency">
                    <option />
                    <option value="USD">USD</option>
                    <option value="MXP">Mexican Pesos</option>
                    <option value="Euros">Euros</option>
                  </select>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            {values && values.status === "Rent" ? periodQuestion : <div></div>}
            <div>
              <label>Description</label>
              <Field name="description" component="textarea" />
            </div>
            <div>
              <ImageUploader
                withIcon={false}
                buttonText="Choose images"
                onChange={onDrop}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
                withPreview={true}
              />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
            </div>
          </form>
        )}
      />
    </Styles>
  );
};

export default CreateProperty;
