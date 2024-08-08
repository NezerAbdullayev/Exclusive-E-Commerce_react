function Box({ children, className }) {
    return (
        <div
            className={` rounded border  border-stone-100 shadow ${className ? className : ''}`}
        >
            {children}
        </div>
    );
}

export default Box;
