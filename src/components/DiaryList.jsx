import React from 'react';
import DiaryItem from './DiaryItem';

const DiaryList = ({ diaryList, onRemove }) => {
  return (
    <>
      <div>{diaryList.length}</div>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} />
        ))}
      </div>
    </>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
