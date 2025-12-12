const TodoItem = ({ id, isDone, content, createdDate, onUpdate, onDelete }) => {
    
    // 체크박스 상태 변경 핸들러:
    const onChangeCheckbox = () => {
        onUpdate(id);
        // 체크박스 상태 변경 시 onUpdate 함수 호출하여 완료 상태 토글
    }

    // 삭제 버튼 클릭 핸들러:
    const onClickDelete = () => {
        onDelete(id);
        // 삭제 버튼 클릭 시 onDelete 함수 호출하여 해당 아이템 삭제
    }


    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
            </div>

            <div className="title_col">{content}</div>
            <div className="date_col">{new Date(createdDate).toLocaleDateString()}</div>
            {/* .toLocaleDateString(): 지역 별 로컬 시간 */}
            {/* Date(createdDate)는 생성된 날짜를 Date 객체로 변환 */}
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
};

export default TodoItem;