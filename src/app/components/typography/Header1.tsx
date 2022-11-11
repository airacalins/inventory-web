import Header from "./Header";

interface Props {
    text: string;
}

function Header1({ text }: Props) {
    return <Header text={text} className="header__1" />
}

export default Header1;