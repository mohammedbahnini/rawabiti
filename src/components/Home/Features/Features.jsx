import React from 'react'
import FeatureItem from './FeatureItem'
import FeaturesPhone from './FeaturesPhone'

function Features() {
    const featrues = [
        {
            title: 'آمنة',
            icon: '/assets/shield.svg',
            text: `لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.`
        },
        {
            title: 'على الإنترنت',
            icon: '/assets/www.svg',
            text: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.'
        },
        {
            title: 'روابط غير محدودة',
            icon: '/assets/unlimited.svg',
            text: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.'
        },
        {
            title: 'الاجتماعية أولا',
            icon: '/assets/share.svg',
            text: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.'
        },
        {
            title: 'عنوان الشخصي',
            icon: '/assets/user.svg',
            text: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.'
        },
        {
            title: 'أنيق ومثالي',
            icon: '/assets/art.svg',
            text: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.'
        }
    ]
    return (
        <div className="features bg-gray-100">
            <div className="container pt-10 pb-28 md:px-20">
                <h1 className="title text-purple mb-8 sm:text-start text-center font-bold text-3xl">ميزات</h1>
                <div className="features-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <FeaturesPhone />
                    { featrues.map((item, index) => <FeatureItem item={item} key={index} />) }

                </div>
            </div>
        </div>
    )
}

export default Features
