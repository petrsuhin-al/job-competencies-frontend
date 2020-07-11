import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { SkillsSelectors } from '../../redux/selectors/Skills';
import { SkillItem } from '../../components/SkillItem/SkillItem';
import './SkillItems.scss';
import { Loader } from '../../components/Loader/Loader';
import store from '../../redux/ConfigureStore';
import { SkillsActions } from '../../redux/actions/Skills';

export function SkillItems(): ReactElement {
  let items = useSelector(SkillsSelectors.skills);
  const isFormSubmitting = useSelector(SkillsSelectors.isSubmitting);

  const removeItem = (item: string): void => {
    store.dispatch(SkillsActions.removeSkillSuccess(item));
  }

  return (
    <div className="skill-items">
      <span className="skill-items-title">Твои навыки:</span>
      {
        (isFormSubmitting)
          ? <Loader />
          : (items.length)
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
