## 기억보단 기록을..📝

### 🎯 프로젝트 목표 (큰 틀)

1. 로그인 기능 - 구글로그인 api와 firebase를 연동하여 사용자들의 기록이 남도록 만들기
2. CRUD 기능
   - create : 사용자가 날짜별로 게시글을 작성 할 수 있다.
   - read : 사용자는 자신의 기록을 조회 할 수 있습니다. (필터기능)
   - update : 사용자는 자신의 기록을 수정 할 수 있습니다.
   - delete : 사용자는 자신의 기록을 삭제 할 수 있습니다.
3. UX/UI design 직접 고민하고 만들기 (tool : figma)
4. css 스타일 작업은 styled-components 이용하기

<hr>

### ⛔️ 오류사항 (문제발생) ⛔️ 

❗️ onCreat 부분에서 inputpage 내용들을 입력하고 저장하는 과정에서 오류 발생.
✅ setData으로 랜더링해야할 데이터 값의 형태를 배열값으로 전달해야 했는데.. 그냥 값을 넣어버림 setData()
   setData([newItem, ...data]); // state는 배열형태임으로 배열로 랜더링해야함.

