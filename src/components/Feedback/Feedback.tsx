import React, { useState } from "react";

const Feedback = () => {

    const [form, setForm] = useState({
        name: '',
        password: '',
        agreement: true,
        score: ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.target)
    };

    // Контролируемый компонент(значение хранит состояние)
    const handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => {
        const {name, value, type, checked} = e.currentTarget
        // console.log(`Name: ${name}\nValue: ${value}\nType: ${type}\nChecked: ${checked}`)
        setForm(prevForm => ({
            ...prevForm,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }

    return (
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="name">Ваше имя</label>
            <input type="text" id="name" onChange={handleChange} name="name" value={form.name}/>
            <label htmlFor="score">Выберите ур. удовлетворенности</label>
            <select id="score" name="score" onChange={handleChange}>
                <option value="good">Хорошо</option>
                <option value="bad">Не очень</option>
            </select>
            <div className="form__agreement">
                <input type="checkbox" id="agreement" name="agreement" onChange={handleChange} checked={form.agreement}/>
                <label htmlFor="agreement">Согласен на обработку данных</label>
            </div>
            <button type="submit" disabled={!form.agreement}>Отправить</button>
        </form>
    );
};

export { Feedback }
