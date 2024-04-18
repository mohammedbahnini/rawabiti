import React from 'react'

function ContactForm() {
    return (
        <form
            action="#"
            className="flex flex-col items-center justify-between  w-full  lg:w-[80%] mx-auto gap-8 md:gap-15"
        >
            <div className="flex justify-between w-full flex-col gap-8 lg:gap-0 md:flex-row" >
                <input
                    type="text"
                    placeholder="الاسم الكامل"
                    className="text-base lg:text-xl w-full lg:w-[48%]  form-text"
                />
                <input
                    type="email"
                    placeholder="بردك الالكتروني"
                    className="text-base lg:text-xl w-full lg:w-[48%] form-text"
                />
            </div>
            <textarea
                rows="5"
                placeholder="الرسالة"
                className="w-full lg:text-xl form-text"
            ></textarea>
            <input
                type="submit"
                value="ارسل"
                className="btn font-semibold  lg:text-xl w-full md:w-fit"
            />
        </form>
    )
}

export default ContactForm
