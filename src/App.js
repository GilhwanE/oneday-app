import './App.css';
// Componets
import Footer from './components/Footer';
import Header from './components/Header';
import InputPage from './components/InputPage';
import styled from 'styled-components';
import DiaryList from './components/DiaryList';

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

const dummyList = [
  {
    id: 1,
    author: 'hwan',
    content: 'hi 1',
    emotion: 1,
  },
  {
    id: 2,
    author: 'gil',
    content: 'hi 2',
    emotion: 2,
  },
  {
    id: 3,
    author: 'kim',
    content: 'hi 3',
    emotion: 3,
  },
];

function App() {
  return (
    <>
      <MainContainer>
        <Inner>
          <Header />
          <InputPage Container={Container} />
          <DiaryList diaryList={dummyList} />
          <Footer Container={Container} />
        </Inner>
      </MainContainer>
    </>
  );
}

export default App;
