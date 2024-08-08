import Button from '../../ui/Button';
import Time from './Time';

function HeaderProduct({
    time = false,
    catagoryName,
    catagorTitle,
    buttonName = null,
}) {
    return (
        <div
            className={`mb-14 flex flex-wrap items-end  gap-14 ${time ? 'justify-start' : 'justify-between'} `}
        >
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-1">
                    <span className="block h-10 w-5 rounded bg-main"></span>
                    <span className="font-bold text-main">{catagoryName}</span>
                </div>
                <div className="font-Inter text-4xl font-semibold">
                    {catagorTitle}
                </div>
            </div>

            {buttonName && <Button>{buttonName}</Button>}
            {time && <Time />}
        </div>
    );
}

export default HeaderProduct;
