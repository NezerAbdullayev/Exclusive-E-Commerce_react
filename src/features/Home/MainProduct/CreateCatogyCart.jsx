function CreateCatogyCart({ catogoryData }) {
    return (
        <div className="mb-14 grid grid-cols-auto-fit gap-7 border-b border-stone-200 pb-14">
            {catogoryData.map((cart) => (
                <div
                    key={cart.name}
                    className="group  flex h-36 cursor-pointer flex-col items-center justify-center rounded border border-stone-300 shadow hover:bg-main"
                >
                    <img
                        src={`./src/assets/${cart.image}`}
                        alt={cart.name}
                        className=" group-hover:invert-colors mb-1 transition-all duration-300 "
                    />
                    <div className="group-hover:text-white">{cart.name}</div>
                </div>
            ))}
        </div>
    );
}

export default CreateCatogyCart;
