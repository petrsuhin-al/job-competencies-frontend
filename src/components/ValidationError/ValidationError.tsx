import React, { ReactElement } from 'react';

interface Props {
  touched?: boolean;
  error?: string;
  warning?: string;
}

export default function ValidationError(props: Props): ReactElement | null {
  const { touched, error, warning } = props;

  return(
    (touched && (error || warning))
      ? <div className="form-error">{(error) ? error : warning}</div>
      : null
  );
}
