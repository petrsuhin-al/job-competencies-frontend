import React, { ReactElement } from 'react';

interface Props {
  text: string;
  isSubmitting?: boolean;
  className?: string;
  handleClick?: () => void;
}

export function SubmitButton(props: Props): ReactElement {
  return(
    <button
      onClick={props.handleClick}
      type="submit"
      className={`button ${(props.isSubmitting) ? 'button-loading': ''} ${props.className}`}
    >
      {props.text}
    </button>
  );
}
