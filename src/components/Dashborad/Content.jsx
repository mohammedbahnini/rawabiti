import classNames from 'classnames'
import React from 'react'
import Sponsors from './Sponsors';
import Posts from './Posts';


function Content({ theme }) {

    return (
        <div className={classNames('content w-full lg:w-[70%]  px-4 lg:px-11 py-6 order-2 md:order-1', {
            'bg-white': theme == 'default' || theme == 'bg-img' || theme == 'pink',
            'bg-dark-grey': theme == 'dark'
        })} >

            <div className="share-links mb-10">
                <h2 className="title text-purple mb-7 text-2xl font-bold">روابط</h2>
                <div className="links-grid grid md:grid-cols-2 md:gap-x-4 md:gap-y-8 gap-y-5">
                    {
                        [...Array(6)].map((item, index) => (
                            <div className="input-link" key={index}>
                                <input
                                    type="text"
                                    placeholder="Rawabit// ادخل إسم الرابط"
                                    className={classNames('text-dark-grey outline-none text-center font-bold text-base md:text-xl block w-full pt-4 pr-12 pb-4 pl-4 rounded-xl border-2  bg-[url(/assets/join.svg)] bg-no-repeat', {
                                        'text-dark-grey border-purple': theme != 'dark',
                                        ' bg-gray-400 border-gray-400 placeholder:text-white': theme == 'dark'
                                    })}
                                />
                            </div>
                        ))
                    }


                </div>
            </div>


            <Posts />
            <Sponsors />



        </div>

    )
}

export default Content
