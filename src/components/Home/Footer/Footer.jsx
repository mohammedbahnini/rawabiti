import React from 'react'

function Footer() {
    const links = [
        {
            ariaLabel: 'facebbok',
            icon: <i className="fa-brands fa-facebook-f"></i>
        },
        {
            ariaLabel: 'linked-in',
            icon: <i className="fa-brands fa-linkedin-in"></i>
        },
        {
            ariaLabel: 'twitter',
            icon: <i className="fa-brands fa-twitter"></i>
        }
    ]
    return (
        <footer className="bg-purple">
            <div className="container">
                <nav className="flex items-center justify-between py-8 w-full lg:w-10/12 mx-auto flex-col lg:flex-row gap-8 " >
                    <ul className="link-items flex  flex-col items-center gap-3 lg:gap-12 lg:flex-row   ">
                        <li>
                            <a className="text-white " href="#">ويبماسر</a>
                        </li>
                        <li>
                            <a className="text-white " href="#">مساعدة</a>
                        </li>
                        <li>
                            <a className="text-white " href="#">إمكانية الوصول</a>
                        </li>
                    </ul>

                    <ul className="social-media-items flex items-center gap-10">
                        {
                            links.map((item, index) => (
                                <li key={index}>
                                    <a href="#" className="text-white  text-2xl" aria-label={item.ariaLabel}>{item.icon}</a>
                                </li>
                            ))
                        }

                    </ul>
                </nav>
                <div className="copyright py-4">
                    <p className="text-white  text-center text-xs">2020 © جميع الحقوق محفوظة</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
