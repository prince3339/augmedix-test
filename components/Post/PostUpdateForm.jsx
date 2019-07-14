import React from 'react';
import {
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import PropTypes from 'prop-types';
import { FormStyle } from './style';

const PostUpdateForm = ({
  values,
  client,
  isSubmitting,
  handleSubmit,
}) => (
  <FormStyle>
    <Form>
      <Field
        type="text"
        name="title"
        value={values.title}
      />
      <ErrorMessage name="title">
        {errorMessage => <div className="error">{errorMessage}</div>}
      </ErrorMessage>
      <Field
        name="body"
        value={values.body}
        component="textarea"
      />
      <ErrorMessage name="body" className="error" component="div" />
      <button type="submit" disabled={isSubmitting}>
          Submit
      </button>
    </Form>
  </FormStyle>
);

PostUpdateForm.propTypes = {
  
}

export default PostUpdateForm;
