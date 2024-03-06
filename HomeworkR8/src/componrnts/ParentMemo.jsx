import ChildMemo from "./ChildMemo";
import { useState } from 'react';

export default function ParentMemo() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    return (
        <div>
        <input
            type="text"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            placeholder="Введіть значення prop1"
        />
        <input
            type="text"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            placeholder="Введіть значення prop2"
        />
        <ChildMemo prop1={value1} prop2={value2} />
        </div>
    );
}