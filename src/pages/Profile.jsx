import classNames from "classnames";
import { useEffect, useState } from "react";
import UserInfo from "../components/Dashborad/UserInfo";
import Content from "../components/Dashborad/Content";
import Footer from "../components/Dashborad/Footer";

function Profile() {

    useEffect(() => {
        const localStortageLang = localStorage.getItem('lang');
        if (localStortageLang)
            setLang('en')
    }, []);

    const [theme, setTheme] = useState('default');
    const [lang, setLang] = useState('en');


    const handleTheme = (value) => {
        setTheme(value);
        console.log(theme);
    }

    const handleLang = (value) => {
        setLang(value)
        localStorage.setItem('lang', value)
    }



    return (
        <>
            <div dir={classNames({ 'rtl': lang == 'ar', 'ltr': lang == 'en' })}
                className={classNames('pt-20 relative',
                    {
                        'bg-white': theme == 'default',
                        'bg-purple': theme == 'pink',
                        'bg-black': theme == 'dark'
                    })
                }>
                <div className={classNames('fixed top-0 w-screen h-screen bg-[url(/assets/nature.jpg)]  bg-no-repeat bg-cover -z-20', {
                    'bg-[url(/assets/nature.jpg)]': theme == 'bg-img' , 
                    'bg-none' : theme != 'bg-img'
                })}>

                </div>


                <main className="mb-20 ">
                    <div className="container ">
                        <div className="flex flex-col lg:flex-row overflow-hidden shadow-black/30 shadow-[0_0_16px_0] rounded-2xl ">
                            <Content theme={theme} />
                            <UserInfo theme={theme} handleLang={handleLang} handleTheme={handleTheme} />
                        </div>

                    </div>
                </main>

                <Footer />

            </div>
        </>


    )
}

export default Profile
