import './App.css';
import Header from './components/Header.js';
import TodoEditor from './components/TodoEditor.js';
import TodoList from './components/TodoList.js';
import { useState, useRef } from 'react';

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "리액트 공부하기",
    createdDate: new Date().getTime()
  },
  {
    id: 1,
    isDone: true,
    content: "빨래 널기",
    createdDate: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "운동하기",
    createdDate: new Date().getTime()
  }
];


function App() {
  const idRef = useRef(3);
  // idRef: 새로운 할 일 아이템이 추가될 때마다 고유 id 값을 생성하는 용도
  // useRef(): 변경 가능한 변수를 만들 때 사용, 값이 바뀌어도 컴포넌트가 재렌더링 되지 않음

  const [todo, setTodo] = useState(mockTodo);
  // todo: 데이터를 저장하는 배열, 동시에 일종의 데이터베이스 역할 수행
  // setTodo: todo 데이터를 갱신하는 함수
  
  
  // 새 할 일 아이템을 추가하는 함수:
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    // 새로운 아이템을 기존의 todo 배열 앞에 추가
    idRef.current += 1;
    // idRef의 현재 값 1 증가
  };

  // 할 일 아이템의 완료 상태를 토글하는 함수:
  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
  };
  // const onUpdate = (targetId) => {
  //   setTodo(
  //     todo.map(
  //       (it) => {
  //         if (it.id === targetId) { // targetId와 일치하는 아이템을 찾아서 isDone 상태 토글
  //           return {
  //             ...it,
  //             isDone: !it.isDone,
  //           };
  //         } else { // 일치하지 않는 아이템은 그대로 반환
  //           return it;
  //         }
  //       }
  //     )
  //   );
  // };

  // 할 일 아이템을 삭제하는 함수:
  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
    // targetId와 일치하지 않는 아이템들만 필터링하여 새로운 배열 생성
  }
  

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
      {/* key={it.id} {...it}는 각 할 일 아이템의 고유 ID와 데이터를 전달하기 위한 props */}
    </div>
  );
}

export default App;
