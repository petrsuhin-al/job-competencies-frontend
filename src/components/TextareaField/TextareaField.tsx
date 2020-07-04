import React, { InputHTMLAttributes, ReactElement } from 'react';
import { FieldInputProps, FormikProps } from 'formik/dist/types';
import { FormikValues } from 'formik';
import ValidationError from '../ValidationError/ValidationError';

interface Props {
  field?: FieldInputProps<string | number>;
  input?: InputHTMLAttributes<HTMLTextAreaElement>;
  form?: FormikProps<FormikValues>;
  error?: string;
  touched?: boolean;
}

export function TextareaField(props: Props): ReactElement {
  const { field, input, form, touched, error, ...inputProps } = props;

  return (
    <div className="form-group">
       <textarea
         {...field}
         {...input}
         {...inputProps}
         className="form-control"
       />
      <ValidationError touched={touched} error={error}/>
    </div>
  );
}
