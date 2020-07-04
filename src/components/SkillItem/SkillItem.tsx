import React, { ReactElement } from 'react';
import './SkillItem.scss';

interface Props {
  item: string
  handleRemove: (item: string) => void;
}

export function SkillItem(props: Props): ReactElement {
  const { item, handleRemove } = props;

  return (
    <div className="skill-item">
      { item }
      <div className="skill-item-remove">
        <div
          onClick={() => handleRemove(item)}
          className="skill-item-remove-wrap"
        >
          <span className="icon icon-close icon-mask icon-mask-grey" />
        </div>
      </div>
    </div>
  );
}
