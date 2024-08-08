function AccountBox({ children, title }) {
    return (
        <div className="mb-6">
            <h3 className="text-bold mb-3">{title}</h3>
            <div className="text-borderColor flex flex-col gap-2 ml-4">{children}</div>
        </div>
    );
}

export default AccountBox;
