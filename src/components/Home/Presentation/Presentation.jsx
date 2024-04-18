import React from 'react'

function Presentation() {
    return (
        <div className="bg-gradient-to-b from-purple/90 to-cyan/90 relative">
            <div className='absolute w-full top-0 bottom-0 left-0 bg-[url(/assets/persons.jpg)] bg-cover -z-10 bg-center' >
            </div>
            <div className="container py-12 sm:px-20 ">
                <h1 className="title text-white mb-8 text-center lg:text-start text-3xl font-bold">من نحن</h1>
                <p className="text-white  text-base md:text-xl mb-12 ">
                    لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
                    الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم
                    إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت
                    مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن
                    كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم
                    تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة
                    والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار
                    رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد
                    لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس
                    بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم
                    إيبسوم.
                </p>
                <div className="call flex items-center justify-center ">
                    <a href="#" className="btn bg-white text-purple font-semibold  text-xl">إتصل بنا</a>
                </div>
            </div>
        </div>
    )
}

export default Presentation
