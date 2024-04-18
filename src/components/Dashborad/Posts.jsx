import React from 'react'
import Post from './Post'

function Posts() {
    return (
        <div className="mb-10">
            <h2 className="text-purple mb-7 text-2xl font-bold">الجديد</h2>
            <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-8 ">
 
                { [...Array(4)].map((item, index) => <Post key={index} />) }

            </div>
        </div>
    )
}

export default Posts
