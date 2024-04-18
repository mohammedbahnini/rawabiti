import classNames from 'classnames';
import React from 'react'

function UserInfo({ theme, handleTheme, handleLang }) {
    const links = [
        {
            araiaLabel: 'spotify',
            icon: <i className="fa-brands fa-spotify"></i>
        },
        {
            araiaLabel: 'twitch',
            icon: <i className="fa-brands fa-twitch"></i>
        },
        {
            araiaLabel: 'instagram',
            icon: <i className="fa-brands fa-instagram"></i>
        },
        {
            araiaLabel: 'twitter',
            icon: <i className="fa-brands fa-twitter"></i>
        },
        {
            araiaLabel: 'behance',
            icon: <i className="fa-brands fa-behance"></i>
        },
        {
            araiaLabel: 'facebook',
            icon: <i className="fa-brands fa-facebook-f"></i>
        },
        {
            araiaLabel: 'youtube',
            icon: <i className="fa-brands fa-youtube"></i>
        }
    ]
    return (
        <div className={classNames('text-white w-full lg:w-[30%]  flex flex-col items-center py-11 px-5 ', {
            'bg-gradient-to-b from-purple to-cyan': theme == 'default' || theme == 'bg-img',
            'bg-pink': theme == 'pink',
            'bg-grey': theme == 'dark'
        })} >
            <div className="flex flex-col items-center">
                <div className="mb-2 rounded-full overflow-hidden w-32 aspect-square border-4 border-white">
                    <img src="/assets/wills-mith.webp" alt="Will Smith" />
                </div>
                <h2 className="profile-name text-3xl mb-6">عمر الزكايري</h2>
                <p className="profile-role mb-6 text-xs">
                    مهندس <i className="fa-solid fa-location-dot"></i> الرباط ، المغرب
                </p>
            </div>
            <div className="profile-social-media-accounts flex flex-wrap gap-3 justify-center mb-6" >
                {
                    links.map((link, index) => (
                        <a href="#" aria-label={link.araiaLabel} className="white text-2xl" key={index}>{link.icon}</a>
                    ))
                }

            </div>
            <div className="profile-bio mb-12">
                <p className="text-center">
                    لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
                    الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
                    لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
                    عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من
                    نص،
                </p>
            </div>
            <a href="#" className="btn text-black bg-white">تعديل الحساب</a>
            <a href="/" className="btn text-black bg-white mt-4">Home</a>
            <div className="flex flex-col gap-y-4 mt-4">
                <button className="btn bg-white text-black " onClick={() => handleTheme('default')}>Default</button>
                <button className="btn bg-white text-black " onClick={() => handleTheme('pink')}>Pink Profile</button>
                <button className="btn bg-white text-black " onClick={() => handleTheme('bg-img')}>Background Image</button>
                <button className="btn bg-white text-black " onClick={() => handleTheme('dark')}>Dark Mode</button>
                <button className="btn bg-white text-black " onClick={() => handleLang('ar')}>Arabic</button>
                <button className="btn bg-white text-black " onClick={() => handleLang('en')}>English</button>
            </div>

        </div>

    )
}

export default UserInfo
