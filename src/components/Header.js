const Header = () => {
    return (
        <div className="Header">
            <h3>오늘은 🗓️</h3>
            <h1>{new Date().toDateString()}</h1>
            {/* .toDateString(): 날짜(Date)를 -> 문자로 */}
        </div>
    )
}

export default Header;