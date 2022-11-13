interface Props {
    spacer: 1 | 2 | 3 | 4 | 5 | 6;
}

function HorizontalSpace({ spacer }: Props) {
    return <div className={`space__horizontal--${spacer}`}></div>
}

export default HorizontalSpace;