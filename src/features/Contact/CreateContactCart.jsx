function CreateContactCart({ img, title, details }) {
    return (
        <div>
            <div  className="flex gap-6 items-center mb-6">
                <img src={img} alt={title}  className="w-10 h-10"/>
                <h3 className="font-bold text-xl ">{title}</h3>
            </div>

            <div>
                {details.map((text) => (
                    <p key={text} className="mb-4 text-sm">{text}</p>
                ))}
            </div>
        </div>
    );
}

export default CreateContactCart;
