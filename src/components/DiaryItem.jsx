import React from 'react';

const DiaryItem = ({ author, content, emotion, id }) => {
  return (
    <>
      <div>작성자 : {author}</div>
      <div>내용 : {content}</div>
    </>
  );
};

export default DiaryItem;
