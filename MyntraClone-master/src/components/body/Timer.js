import React, { useEffect, useState } from 'react';

function Timer() {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(6);

    useEffect(() => {
        startTimer();

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    let interval;

    const startTimer = () => {
        // Set the end time to 6 hours from now
        const endTime = new Date().getTime() + 6 * 60 * 60 * 1000;

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = endTime - now;

            const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                // Stop the timer
                clearInterval(interval);
            } else {
                // Update the timer state
                setHour(hours);
                setMin(minutes);
                setSec(seconds);
            }
        }, 1000);
    };

    return (
        <div style={{ backgroundColor: '#F0FFFF', padding: '5px' }} className='text-center'>
            <p style={{ fontSize: '30px', color: 'Red' }}>
                Sale Ends In <b>{`${hour} h: ${min} m: ${sec} s`}</b>
            </p>
        </div>
    );
}

export default Timer;
