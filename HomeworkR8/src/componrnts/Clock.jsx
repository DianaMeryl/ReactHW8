import React, { useState, useEffect } from 'react';

export default function Clock() {

    const [date, setDate] = useState(new Date());
    const [shouldUpdate, setShouldUpdate] = useState(true);
    
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
        clearInterval(timerID);
        } ;
    }, []);
                
    useEffect(() => {
        if (!shouldUpdate) return;

        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
        clearInterval(timerID);
        };
    }, [shouldUpdate]);

    function tick() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerID = setTimeout(() => {
        const currentDate = new Date();
        if (currentDate.getSeconds() !== date.getSeconds()) {
            setShouldUpdate(true);
        } else {
            setShouldUpdate(false);
        }
        }, 0);

        return function cleanup() {
        clearTimeout(timerID);
        };
    }, [date]);

return (
    <div>
        <h1>Time:</h1>
        <h2>{date.toLocaleTimeString()}</h2>
    </div>
    );
}
