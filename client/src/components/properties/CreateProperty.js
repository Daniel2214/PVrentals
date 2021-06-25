import React from "react";
import { Form, Field } from "react-final-form";
import Styles from "./Styles";
import ImageUploader from "react-images-upload";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const onDrop = (picture) => {
  console.log(picture);
};

const required = (value) => (value ? undefined : "Required");

const periodQuestion = (
  <Field name="rentPaymentPeriod" validate={required}>
    {({ input, meta }) => (
      <div>
        <label>Payment Period</label>
        <select {...input} name="rentPaymentPeriod">
          <option />
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </div>
    )}
  </Field>
);

const CreateProperty = () => (
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
                  <option value="rent">For Rent</option>
                  <option value="sell">For Sell</option>
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
                  <option value="usd">USD</option>
                  <option value="mxp">Mexican Pesos</option>
                  <option value="eur">Euros</option>
                </select>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          {values && values.status === "rent" ? periodQuestion : <div></div>}
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

export default CreateProperty;
