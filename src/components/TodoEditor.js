import { useState, useRef } from 'react';

const TodoEditor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    // content: 사용자가 입력한 할 일 내용 저장
    // setContent: content 값을 갱신하는 함수
    const inputRef = useRef();
    // inputRef: 특정 DOM 요소에 접근하기 위한 참조 변수
    
    // 사용자가 입력한 값을 content 상태로 업데이트:
    const onChangeContent = (e) => {
        setContent(e.target.value);
        // 사용자가 입력한 값으로 content 갱신
    };

    // 추가 버튼 클릭 시 onCreate 함수 호출:
    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus();
            // 내용이 비어있을 경우 입력창에 포커스 맞추기
            return;
        }
        onCreate(content);
        setContent("");
        // 내용이 추가된 후 입력창 비우기
    }

    // Enter 키로도 추가 기능 구현:
    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            // 아니면 e.keyCode === 13
            // 13은 Enter 키의 키코드
            onSubmit(); 
        }
    };


    return (
        <div className="TodoEditor">
            <h4>새로운 To Do 작성 ✏️</h4>

            <div className="editor_wrapper">
            <input
                ref={inputRef}
                value={content}
                onChange={onChangeContent}
                onKeyDown={onKeyDown}
                placeholder="새로운 To Do 입력..."
            />
            <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
};

export default TodoEditor;