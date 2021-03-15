import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';

export default function DateTime() {
    const [value, onChange] = useState(new Date());
    const [valueTime, onChangeTime] = useState('10:00');

    return (
    <div className="date-time">
        <div>
            <DatePicker
                onChange={onChange}
                value={value}
            />
        </div>
        <div>
            <TimePicker
                onChange={onChangeTime}
                value={valueTime}
            />
        </div>
    </div>    
    );
  }
