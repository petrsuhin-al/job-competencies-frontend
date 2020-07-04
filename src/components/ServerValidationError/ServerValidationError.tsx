import React, { ReactElement } from 'react';
import { AxiosResponse } from 'axios';

interface Props {
  errorResponse?: AxiosResponse;
}

export function ServerValidationErrors(props: Props): ReactElement | null {
  let errors: Array<Array<string>> | null;

  if (props.errorResponse?.data?.errors) {
    errors = Object.entries<Array<string>>(props.errorResponse?.data?.errors)
      .map(([key,value]: [string, Array<string>]) => value.map((error: string) => error));
  } else if (props.errorResponse?.data?.error) {
    errors = [props.errorResponse?.data?.error];
  } else {
    errors = null;
  }

  return(
    (errors) ? (
      <div className="form-errors">
        {errors.map((error, index) => (
          <div key={index} className="form-error">{error}</div>
        ))}
      </div>
    ) : null
  );
}
