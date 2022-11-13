interface Props {
    spacer: number,
}

function VerticalSpace({ spacer } : Props){
    return <div className={`space__vertical--${spacer}`}></div>
}

export default VerticalSpace;