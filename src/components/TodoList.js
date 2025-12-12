import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ todo, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");
    // search: 사용자가 입력한 검색어 상태 저장
    // setSearch: search 값을 갱신하는 함수

    // 검색어 입력 시 search 상태 업데이트:
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
        // 사용자가 입력한 값으로 search 갱신
    };

    // 검색어에 따라 필터링된 할 일 목록 반환:
    const getSearchResult = () => {
        return search === ""
        ? todo
        : todo.filter((it) =>
            it.content.toLowerCase().includes(search.toLowerCase())
            // toLowerCase(): 대소문자 구분 없이 검색 가능하게 함
            );
        // search가 비어있으면 전체 todo 반환
        // 그렇지 않으면 content에 search가 포함된 항목들만 필터링하여 반환
    }

    return (
        <div className="TodoList">
            <h4>To Do List 📋</h4>

            <input
                value={search}
                onChange={onChangeSearch}
                className="searchbar"
                placeholder="검색어를 입력하세요"
            />

            <div className="list_wrapper">
                {getSearchResult().map((it) => (
                    <TodoItem
                        key={it.id}
                        {...it}
                        onUpdate={onUpdate}
                        onDelete={onDelete} />
                    // ...it: it의 모든 속성을 개별 props로 전달
                ))}
            </div>
        </div>
    );
};

export default TodoList;