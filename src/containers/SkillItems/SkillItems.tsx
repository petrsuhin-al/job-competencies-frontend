import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { SkillsSelectors } from '../../redux/selectors/Skills';
import { SkillItem } from '../../components/SkillItem/SkillItem';
import './SkillItems.scss';

export function SkillItems(): ReactElement {
  const items = useSelector(SkillsSelectors.skills);

  const removeItem = (item: string): void => {
    console.log(item)
  }

  return (
    <div className="skill-items">
      <span className="skill-items-title">Твои навыки:</span>
      {
        (items.length)
          ? (
            <div className="skill-items-data">
              {
                items.map((item, key) => (
                  <SkillItem
                    key={key}
                    item={item}
                    handleRemove={removeItem}
                  />
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
