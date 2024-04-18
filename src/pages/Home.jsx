import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import Header from '../components/Home/Header/Header';
import Presentation from '../components/Home/Presentation/Presentation';
import Features from '../components/Home/Features/Features';
import Recommandations from '../components/Home/Recommandations/Recommandations';
import Footer from '../components/Home/Footer/Footer';

function Home() {


    const [lang, setLang] = useState('ar');

    useEffect(() => {
        const localStortageLang = localStorage.getItem('lang');
        if (localStortageLang) setLang(localStortageLang);
        console.log(lang);
    }, []);




    return (
        <>
            <div dir={classNames({ 'rtl': lang == 'ar', 'ltr': lang == 'en' })}>

                <Header />
                <main>

                    <Presentation />
                    <Features />
                    <Recommandations />

                </main>

             <Footer />

            </div>
        </>
    )
}

export default Home
