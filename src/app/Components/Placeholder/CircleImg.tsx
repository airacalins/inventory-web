interface Props {
    className: string,
    src: string,
}

function CircleImg({ className, src } : Props){
    return <img src={src} className={`rounded-circle ${className}`}/>
}

export default CircleImg;