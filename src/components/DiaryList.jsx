import React from 'react';
import DiaryItem from './DiaryItem';

const DiaryList = ({ diaryList }) => {
  return (
    <>
      <h2> 다이어리 리스트는 {diaryList.length}개가 있습니다.</h2>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </>
  );
};

export default DiaryList;
