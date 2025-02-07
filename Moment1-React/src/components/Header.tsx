interface HeaderProp{
    title: string;
}

function Header({title} : HeaderProp) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}
export default Header;