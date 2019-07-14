import React from 'react';
import {
  Form,
  Field,
  ErrorMessage,
} from 'formik';
import Button from 'components/core/buttons';
import PropTypes from 'prop-types';
import { FormStyle } from './style';

const PostUpdateForm = ({
  values,
  isSubmitting,
  toggleEditMode,
}) => (
  <FormStyle>
    <Form>
      <div>
        <Field
          type="text"
          name="title"
          value={values.title}
          className="form-field form-field--input"
        />
      </div>
      <div>
        <Field
          name="body"
          rows="10"
          value={values.body}
          className="form-field form-field--textarea"
          component="textarea"
        />
      </div>
      <ErrorMessage name="body" className="error" component="div" />

      <div className="form-actions">
        <Button
          type="submit"
          fgColor="white"
          custom
          bgColor="primary"
          fontSize="14"
          borderRadius="25"
          disabled={isSubmitting}
        >
          Update
        </Button>
        <Button
          type="button"
          color="warn"
          onClick={toggleEditMode}
          fontSize="14"
          className="margin-left-10"
          transparent
        >
          Cancel
        </Button>
      </div>
    </Form>
  </FormStyle>
);

PostUpdateForm.defaultProps = {
  values: {},
  isSubmitting: false,
  toggleEditMode: () => {},
};

PostUpdateForm.propTypes = {
  values: PropTypes.shape({
    body: PropTypes.string,
    title: PropTypes.string,
  }),
  isSubmitting: PropTypes.bool,
  toggleEditMode: PropTypes.func,
};

export default PostUpdateForm;
