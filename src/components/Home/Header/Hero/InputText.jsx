import React from 'react'

function InputText() {
    return (
        <div className="input container flex items-center">
            <input
                type="text"
                placeholder="Rawabit// ادخل إسم الرابط"
                className="w-full md:w-[68%] mx-auto text-base md:text-xl max-w-[50rem] px-[1.3em] py-[1.6em] outline-none border-none rounded-full shadow-lg "
            />
        </div>
    )
}

export default InputText
