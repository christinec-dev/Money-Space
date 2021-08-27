import React, { useState, useEffect } from 'react';

//allow us to show a date on our form
function DateTime () {
    const [dateTime, setDateTime] = useState(new Date());

    //creates current date
    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);

    //renders date
    return (
        <p className="date">
            {`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}
        </p>
    );
}

//exports for use in other files
export default DateTime