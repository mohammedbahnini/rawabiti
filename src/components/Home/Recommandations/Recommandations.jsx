import React from 'react'
import RecommandationItem from './RecommandationItem'

function Recommandations() {
    
    const recommendations = [
        {
            author: 'عمر الزكايري',
            profile: 'assets/wills-mith.webp',
            text: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.'
        },
        {
            author: 'عمر الزكايري',
            profile: 'assets/wills-mith.webp',
            text: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.'
        },
        {
            author: 'عمر الزكايري',
            profile: 'assets/wills-mith.webp',
            text: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.'
        },
        {
            author: 'عمر الزكايري',
            profile: 'assets/wills-mith.webp',
            text: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.'
        },
        {
            author: 'عمر الزكايري',
            profile: 'assets/wills-mith.webp',
            text: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.'
        },
        {
            author: 'عمر الزكايري',
            profile: 'assets/wills-mith.webp',
            text: 'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.'
        }
    ]
    return (
        <div className="">
            <div className="container  py-12 md:px-20">
                <h1 className="text-purple mb-8 sm:text-start text-center font-bold text-3xl">توصيات</h1>

                <div className="grid md:grid-cols-2 md:gap-x-10 gap-y-20 mb-20">

                    { recommendations.map((item, index) => <RecommandationItem item={item} key={index} />) }

                </div>


                <div className="flex justify-center items-center">
                    <a href="#" className="btn font-semibold md:text-2xl text-xl">إبدأ الآن</a>
                </div>
            </div>
        </div>
    )
}

export default Recommandations
