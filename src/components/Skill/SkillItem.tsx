import React, { ReactElement } from 'react';
import './SkillItem.scss';

interface Props {
  item: string
}

export function SkillItem(props: Props): ReactElement {
  const { item } = props;

  return (
    <div className="skill-item">
      { item }
      <div className="skill-item-remove">
        <div className="skill-item-remove-wrap">
          <span className="icon icon-close icon-mask icon-mask-grey" />
        </div>
      </div>
    </div>
  );
}
