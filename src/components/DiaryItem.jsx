import React, { useState } from 'react';

const DiaryItem = ({ title, content, id, onRemove, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
    onEdit(id, localContent);
  };

  return (
    <>
      <div>작성자 : {title}</div>
      <div>
        내용 :
        {isEdit ? (
          <>
            <textarea
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            ></textarea>
          </>
        ) : (
          <>{content}</>
        )}
      </div>
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

        <button onClick={toggleEdit}>수정하기</button>
      </div>
    </>
  );
};

export default DiaryItem;
