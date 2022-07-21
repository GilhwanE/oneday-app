import { useState } from 'react';

const InputPage = () => {
  const [state, setState] = useState({
    title: '',
    content: '',
  });

  const HandleInputText = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value, // 객체 프로퍼티를 접근하기 위한 괄호표기법 ()
    }); // 이벤트(onchange)가 발생되었을때 현재 입력되는 값으로 변경 시켜라
  };

  return (
    <>
      <input
        type="text"
        name="title"
        value={state.title}
        onChange={HandleInputText}
      />
      <textarea
        type="text"
        name="content"
        value={state.content}
        onChange={HandleInputText}
      />

      <div>
        <button>저장하기</button>
      </div>
    </>
  );
};

export default InputPage;
