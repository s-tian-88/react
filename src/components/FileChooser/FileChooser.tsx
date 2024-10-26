// неконтролируемый  компонент

import React, { useRef } from 'react'
{/*
    Хук useRef позволяет хранить ссылку на обьект,
    который будет определен свойством current,
    и эта ссылка будет доступна в течении всей
    жизни компонента
*/}

const FileChooser = () => {
    const fileRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        console.log(fileRef.current?.files)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="formFile">FileChooser</label>
            <input type="file" id="formFile" ref={fileRef} multiple />
            <button type="submit">OK</button>
        </form>
    )
}

export { FileChooser }
