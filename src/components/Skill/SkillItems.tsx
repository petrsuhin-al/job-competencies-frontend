import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { SkillsSelectors } from '../../redux/selectors/Skills';
import { SkillItem } from './SkillItem';
import './SkillItems.scss';

export function SkillItems(): ReactElement {
  const items = useSelector(SkillsSelectors.skills);

  return (
    <div className="skill-items">
      <span className="skill-items-title">Твои навыки:</span>
      {
        (items.length)
          ? (
            <div className="skill-items-data">
              {
                items.map((item) => (
                  <SkillItem item={item} />
                ))
              }
            </div>
          )
          : (
            <div className="skill-items-empty">
              Введи данные в поле, для того, чтоб мы определили твои навыки
            </div>
          )
      }
    </div>
  );
}
