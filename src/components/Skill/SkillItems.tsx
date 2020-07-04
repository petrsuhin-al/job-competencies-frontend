import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { SkillsSelectors } from '../../redux/selectors/Skills';
import { SkillItem } from './SkillItem';
import './SkillItems.scss';

export function SkillItems(): ReactElement {
  const items = useSelector(SkillsSelectors.skills);

  return (
    <div className="skill-items">
      {
        items.map((item) => (
          <SkillItem item={item} />
        ))
      }
    </div>
  );
}
