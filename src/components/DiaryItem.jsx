import React, { useState } from 'react';
import { useRef } from 'react';

const DiaryItem = ({ title, content, id, onRemove, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const toggleEdit = () => {
    setIsEdit(!isEdit);
    onEdit(id, localContent);
  };

  const handleQuit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    if (window.confirm(`${id}번째 내용을 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  return (
    <>
      <div>작성자 : {title}</div>
      <div>
        내용 :
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            ></textarea>
          </>
        ) : (
          <>{content}</>
        )}
      </div>

      <div>
        {isEdit ? (
          <>
            <button onClick={handleQuit}>수정취소</button>
            <button onClick={toggleEdit}>수정완료</button>
          </>
        ) : (
          <>
            <button onClick={handleDelete}>삭제하기</button>
            <button onClick={toggleEdit}>수정하기</button>
          </>
        )}
      </div>
    </>
  );
};

export default React.memo(DiaryItem);
