import React from 'react'

function Post() {
    return (

        <div className="rounded-xl overflow-hidden h-56 relative">
            <img src="/assets/persons.jpg"  alt="Post Image" className='abslute w-fll h-full object-cover' />
            <div className="px-5 py-5 absolute top-0 left-0 w-full h-full z-5 flex flex-col justify-end bg-gradient-to-t from-black/80 to-black/0 bg-[length:100%_75%] bg-no-repeat bg-bottom ">
                <h3 className="text-white  mb-2 ">
                    لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية
                    هي الشكل وليس المحتوى) ويُستخدم
                </h3>
                <a href="#" className="read-more text-cyan font-bold self-end">إقرا المزيد +</a>
            </div>
        </div>

    )
}

export default Post
