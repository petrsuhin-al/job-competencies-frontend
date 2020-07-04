import React, { ReactElement } from 'react';
import * as Yup from 'yup';
import './ResumeForm.scss';
import { ServerValidationErrors } from '../../components/ServerValidationError/ServerValidationError';
import { FormikProps, FormikValues, Form, Field, Formik } from 'formik';
import { TextareaField } from '../../components/TextareaField/TextareaField';
import { SubmitButton } from '../../components/SubmitButton/SubmitButton';
import { SkillsRequest } from '../../models/SkillsRequest';
import { SkillsSelectors } from '../../redux/selectors/Skills';
import { useSelector } from 'react-redux';
import { SkillsActions } from '../../redux/actions/Skills';
import store from '../../redux/ConfigureStore';

export function ResumeForm(): ReactElement {
  const errorResponse = useSelector(SkillsSelectors.errorResponse);
  const isSubmitting = useSelector(SkillsSelectors.isSubmitting);

  const initialValues: SkillsRequest = {
    resume: '',
  };

  const validationSchema = Yup.object().shape({
    resume: Yup.string().required('Ошибка')
  });

  const sendResumeText = (values: FormikValues): void => {
    const credentials = new SkillsRequest({
      resume: values.resume
    });

    store.dispatch(SkillsActions.getSkills(credentials));
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
