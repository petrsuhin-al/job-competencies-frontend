import React, { ReactElement } from 'react';
import * as Yup from 'yup';
import './ResumeForm.scss';
import { ServerValidationErrors } from '../../components/ServerValidationError/ServerValidationError';
import { FormikProps, FormikValues, Form, Field, Formik } from 'formik';
import { TextareaField } from '../../components/TextareaField/TextareaField';
import { SubmitButton } from '../../components/SubmitButton/SubmitButton';

export function ResumeForm(): ReactElement {
  const errorResponse: any = {};
  const isSubmitting: boolean = false;

  const initialValues = {
    resume: '',
  };

  const validationSchema = Yup.object().shape({
    resume: Yup.string().required('')
  });

  function sendResumeText(values: FormikValues): void {
    console.log(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={sendResumeText}
      validationSchema={validationSchema}
    >
      {
        (props: FormikProps<FormikValues>): ReactElement => (
          <Form className="form resume-form">
            <Field
              name="resume"
              component={TextareaField}
              onChange={props.handleChange}
              error={props.errors.resume}
              touched={props.touched.resume}
              value={props.values.resume}
            />

            <ServerValidationErrors errorResponse={errorResponse}/>

            <SubmitButton
              text="Определить навыки"
              isSubmitting={isSubmitting}
            />
          </Form>
        )
      }
    </Formik>
  );
}
