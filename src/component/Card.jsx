function Card(props) {
    return (
        <div
            style={{ backgroundColor: props.bgcolour }}
            className='py-4 px-4 text-center flex-grow border rounded-md'
        >
            <h1 className="font-bold text-4xl">{props.title}</h1>
            <p className="text-xl">{props.subtitle}</p>
        </div>
    );
}

export default Card;