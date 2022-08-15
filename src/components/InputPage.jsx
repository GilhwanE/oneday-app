import { useRef, useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  height: 30px;
  margin-bottom: 30px;
  font-size: 1rem;
  border: 1px solid gray;
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 300px;
  border: 1px solid gray;
`;

const InputPage = ({ Container, onCreate }) => {
  const reftitle = useRef();
  const refcontent = useRef();

  const [state, setState] = useState({
    title: '',
    content: '',
  });

  const HandleInputText = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value, // 객체 프로퍼티를 접근하기 위한 괄호표기법 ()
    }); // 이벤트(onchange)가 발생되었을때 현재 입력되는 값으로 변경 시켜라

    console.log(e.target.value);
  };

  const handleSumbit = () => {
    if (state.title.length < 5) {
      reftitle.current.focus();
      alert('제목은 5글자 이상입니다.');
    }

    if (state.content.length < 5) {
      refcontent.current.focus();
      alert(' 5글자 입력이상을 입력해주세요');
    }

    onCreate(state.content, state.title, state.emotion); // 데이터들을 app.js onCreate 함수 데이터로 전달한다.
  };

  return (
    <>
      <Container>
        <Input
          ref={reftitle}
          type="text"
          name="title"
          value={state.title}
          placeholder="제목을 입력해주세요"
          onChange={HandleInputText}
        />
        <TextArea
          ref={refcontent}
          type="text"
          name="content"
          value={state.content}
          onChange={HandleInputText}
        />

        <div>
          <span>오늘 만족도 :</span>
          <select name="score" onChange={HandleInputText}>
            <option value="별로">별로</option>
            <option value="보통">보통</option>
            <option value="만족">만족</option>
          </select>
        </div>

        <div>
          <button onClick={handleSumbit}>저장하기</button>
        </div>
      </Container>
    </>
  );
};

export default InputPage;
