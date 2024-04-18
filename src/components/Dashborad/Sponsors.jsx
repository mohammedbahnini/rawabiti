import React from 'react'

function Sponsors() {
    const links = [
        {
            icon: <i className="fa-brands fa-behance"></i>,
            ariaLabel: 'behance',
            color: '#1976d2'
        },
        {
            icon: <i className="fa-brands fa-spotify"></i>,
            ariaLabel: 'spotify',
            color: '#00d95f'
        },
        {
            icon: <i className="fa-brands fa-youtube"></i>,
            ariaLabel: 'youtube',
            color: '#f44336'
        },
        {
            icon: <i className="fa-brands fa-twitch"></i>,
            ariaLabel: 'twitch',
            color: '#673ab7'
        },
        {
            icon: <i className="fa-brands fa-facebook-square"></i>,
            ariaLabel: 'facebook',
            color: '#1976d2'
        }
    ];
    return (
        <div className="sponsors">
            <h2 className="title text-purple text-2xl font-bold mb-7">رعاية</h2>
            <div className="content flex items-center justify-between flex-col md:flex-row gap-10" >
                <a href="#" className="btn shrink-0 w-full md:w-auto">إتصل بنا</a>
                <div className="sponsors-links flex flex-wrap gap-8">
                    {
                        links.map((item, index) => (
                            <a href="#" aria-label={item.ariaLabel} className="text-2xl" style={{ color: item.color }} key={index} >{item.icon}</a>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default Sponsors
