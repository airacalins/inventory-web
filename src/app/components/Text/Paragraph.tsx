interface Props {
    text: string;
    className?: string;
}

function Paragraph({ text, className }: Props) {
    return <p className="text text__paragraph-default font__weight-400">{text}</p >
}

export default Paragraph;