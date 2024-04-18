import React from 'react'

function RecommandationItem({item}) {
    return (
        <div className="flex flex-col gap-2 md:gap-4  md:flex-col lg:flex-row items-center  text-center lg:text-start"  >
        <div className="avatar shrink-0 w-28 lg:w-36 aspect-square rounded-full overflow-hidden ">
            <img src={item.profile} alt="Avatar" />
        </div>
        <div className="recommendation-body">
            <h3 className="title text-dark-grey text-xl lg:text-2xl mb-2 md:mb-4 font-bold ">{item.author}</h3>
            <p className="text-grey leading-relaxed">{item.text}</p>
        </div>
    </div>
    )
}

export default RecommandationItem
