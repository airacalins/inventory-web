import Header from "./Header";

interface Props {
    text: string;
}

function Header2({ text }: Props) {
    return <Header text={text} className="header__2" />
}

export default Header2;