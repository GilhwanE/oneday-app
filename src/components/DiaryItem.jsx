import React from 'react';

const DiaryItem = ({ title, content, id, onRemove }) => {
  return (
    <>
      <div>작성자 : {title}</div>
      <div>내용 : {content}</div>
      <div>{id}</div>

      <div>
        <button
          onClick={() => {
            if (window.confirm(`${id}번째 내용을 삭제하시겠습니까?`)) {
              onRemove(id);
            }
          }}
        >
          삭제하기
        </button>
      </div>
    </>
  );
};

export default DiaryItem;
