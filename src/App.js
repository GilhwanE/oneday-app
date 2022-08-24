import './App.css';
// Componets
import Footer from './components/Footer';
import Header from './components/Header';
import InputPage from './components/InputPage';
import styled from 'styled-components';
import DiaryList from './components/DiaryList';
import React, { useRef, useEffect, useCallback, useReducer } from 'react';

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

const reducer = (state, action) => {
  // reduecr는 항상 2가지 인자를 받는다,
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      const newItem = { ...action.data }; // 새로운 일기데이터를 생성 ...action.data는 oncreate함수에 있는 data
      return [newItem, ...state]; // 새로운 일기데이터를 원본 데이터에 추가해서 그 새로운 배열을 새로운 스테이트값으로 사용
    }
    case 'EDIT': {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, content: action.newContent } : it
      );
    }
    case 'REMOVE': {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state; // 상태를 변화시키지 않겠다.
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  // 리액트는 단방향이다 그렇기 떄문에 컴포넌트 간에 데이터를 주고 받는 행위는 하지 않는다.
  // 부모 컴포넌트로부터 각각의 컴포넌트에게 데이터를 전달해주는 로직을 짜야 한다.
  // onCreate 함수는 InputPage컴포넌트에서 일기 생성을 클릭하면 일기 리스트 컴포넌트에 작성되도록 해야한다.
  // 상태 data값과 변경되는 setData값을 배열로 선언
  //
  // const [data, setData] = useState([]); 주석처리한 이유는 reducer함수를 이용할것
  const [data, dispatch] = useReducer(reducer, []); // useReducer사용하는이유 : 복잡한 상태변화 로직을 컴포넌트 밖으로 분리시키기 위해서

  const dataId = useRef(0); // 리스트 아이템이 1번 2번.. id가 늘어남

  // const getData = async () => {
  //   const res = await fetch(
  //     'https://jsonplaceholder.typicode.com/comments'
  //   ).then((res) => res.json());

  //   const initData = res.slice(0, 5).map((it) => {
  //     // slice
  //     return {
  //       title: it.email,
  //       content: it.body,
  //       id: dataId.current++, // return 되면 값을 ㄱ반환하기 때문에 후위연산자로 했음
  //     };
  //   });
  // dispatch({type:'INIT', data:initData})
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const onCreate = useCallback((content, title, emotion) => {
    dispatch({
      type: 'CREATE',
      data: { content, title, emotion, id: dataId.current },
    });
    dataId.current += 1;
    //setData((data) => [newItem, ...data]); // state는 배열형태임으로 배열로 랜더링해야함.
    // setData(data) 로 변경 why? 함수형 업데이트를 하기 위해서 즉, 함수를 전달한다
    // 이렇게 되면 항상 최신의 state를 인자인 data값을 참고 할 수 있다.
  }, []);

  const onRemove = useCallback((targetId) => {
    // 삭제된 내용 말고 나머지 data값으로 업데이트 한후 setdata로 반영하는부분
    // targetId는 현재 내가 선택한 id 그리고 it.id 순서 이값이 서로 같지 않은 것들만 필터해서 화면에 보여주겠다는것, 서로같은값들이 필터된다면 삭제가 되지 않겠지 (필터란 결국 보여주는것을 반환)
    // setData((data) => data.filter((it) => it.id !== targetId));
    dispatch({ type: 'REMOVE', targetId });
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    // 수정하기 버튼을 작성하면 , 변경된 content값이 setData를 통해서 변경된 값이 랜더링되어야 하는 과정
    // 수정하려는 id값을 선택한다. => map함수를 이용하여 localContent값을 setData값안에 넣으면 되는거 아님?
    dispatch({ type: 'EDIT', targetId, newContent });
    // setData((data) =>
    //   data.map((it) =>
    //     it.id === targetId ? { ...it, content: newContent } : it
    //   )
    // );
  }, []);

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider>
        <MainContainer>
          <Inner>
            <Header />
            <InputPage Container={Container} onCreate={onCreate} />
            <DiaryList onRemove={onRemove} onEdit={onEdit} />
            <Footer Container={Container} />
          </Inner>
        </MainContainer>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
