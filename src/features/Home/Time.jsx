import { useEffect, useState } from 'react';

function Time() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const days = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const time = 'text-3xl text-stone-950 font-semibold';

    return (
        <div className="flex items-end gap-2 text-xl leading-10 text-main">
            <div className="flex flex-col text-sm  ">
                <div className="text-stone-900">Days</div>
                <div className={time}>{days.toString().padStart(2, '0')}</div>
            </div>
            :
            <div className="flex flex-col text-sm  ">
                <div className="text-stone-900">Hours</div>
                <div className={time}>{hours.toString().padStart(2, '0')}</div>
            </div>
            :
            <div className="flex flex-col  text-sm  ">
                <div className="text-stone-900">Minutes</div>
                <div className={time}>
                    {minutes.toString().padStart(2, '0')}
                </div>
            </div>
            :
            <div className="flex flex-col   text-sm ">
                <div className="text-stone-900">Second</div>
                <div className={time}>
                    {seconds.toString().padStart(2, '0')}
                </div>
            </div>
        </div>
    );
}

export default Time;
