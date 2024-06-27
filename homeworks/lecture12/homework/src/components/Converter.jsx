import {useState, React} from 'react';

export const Converter = () => {

    const [number, setNumber] = useState('');
    const [ordinal, setOrdinal] = useState('');

    const handleChange = (e) =>{
        const value = e.target.value;
        setNumber(value);
        setOrdinal(numberToOrdinal(value));

    };

    const numberToOrdinal = (value) =>{
        if (isNaN(value)){
            return '';
        }
        const n = parseInt(value);
        if (n % 100 >= 11 && n % 100 <= 13){
            return n + 'th';
        }
        switch (n%10) {
            case 1:
                return n + 'st';
            case 2:
                return n + 'nd';
            case 3:
                return n + 'rd';
            default:
                return n + 'th';

        }
    };

    return (
        <div>
            <input 
            type='text'
            value={number}
            placeholder='Provide your number'
            onChange={handleChange}/>

            <input 
            type='text'
            value={ordinal}
            placeholder=''
            readOnly/>

        </div>
    );

};