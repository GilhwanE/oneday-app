import './App.css';
// Componets
import Footer from './components/Footer';
import Header from './components/Header';
import InputPage from './components/InputPage';
import styled from 'styled-components';
import DiaryList from './components/DiaryList';
import { useRef, useState } from 'react';

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Inner = styled.div`
  display: flex;
  border: 2px solid red;
  flex-direction: column;
`;

// const dummyList = [
//   {
//     id: 1,
//     author: 'hwan',
//     content: 'hi 1',
//     emotion: 1,
//   },
//   {
//     id: 2,
//     author: 'gil',
//     content: 'hi 2',
//     emotion: 2,
//   },
//   {
//     id: 3,
//     author: 'kim',
//     content: 'hi 3',
//     emotion: 3,
//   },
// ];

function App() {
  // 리액트는 단방향이다 그렇기 떄문에 컴포넌트 간에 데이터를 주고 받는 행위는 하지 않는다.
  // 부모 컴포넌트로부터 각각의 컴포넌트에게 데이터를 전달해주는 로직을 짜야 한다.
  // onCreate 함수는 InputPage컴포넌트에서 일기 생성을 클릭하면 일기 리스트 컴포넌트에 작성되도록 해야한다.
  // 상태 data값과 변경되는 setData값을 배열로 선언
  //
  const [data, setData] = useState([]);

  const dataId = useRef(0); // 리스트 아이템이 1번 2번.. id가 늘어남
  const onCreate = (content, title) => {
    const newItem = {
      content,
      title,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]); // state는 배열형태임으로 배열로 랜더링해야함.
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제`);
    // 삭제된 내용 말고 나머지 data값으로 업데이트 한후 setdata로 반영하는부분
    const newDiaryList = data.filter((it) => it.id !== targetId); // targetId는 현재 내가 선택한 id 그리고 it.id 순서 이값이 서로 같지 않은 것들만 필터해서 화면에 보여주겠다는것, 서로같은값들이 필터된다면 삭제가 되지 않겠지 (필터란 결국 보여주는것을 반환)
    console.log(newDiaryList);
    setData(newDiaryList);
  };

  return (
    <>
      <MainContainer>
        <Inner>
          <Header />
          <InputPage Container={Container} onCreate={onCreate} />
          <DiaryList diaryList={data} onRemove={onRemove} />
          <Footer Container={Container} />
        </Inner>
      </MainContainer>
    </>
  );
}

export default App;
