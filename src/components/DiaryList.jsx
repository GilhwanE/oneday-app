import React, { useContext } from 'react';
import { DiaryStateContext } from '../App';
import DiaryItem from './DiaryItem';

const DiaryList = ({ onRemove, onEdit }) => {
  const diaryList = useContext(DiaryStateContext); // 부모컴포넌트에서 context로 데이터를 전달하기 때문에 우리는 useContext hook을 이용해서 data를 받아야한다.
  return (
    <>
      <div>{diaryList.length}</div>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </div>
    </>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
