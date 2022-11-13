interface Props {
    spacer: number,
}

function HorizontalSpace({ spacer } : Props){
    return <div className={`space__horizontal--${spacer}`}></div>
}

export default HorizontalSpace;