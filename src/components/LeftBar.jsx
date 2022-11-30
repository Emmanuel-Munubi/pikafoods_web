import React from 'react';
import {} from '../routes/'

function LeftBar() {
    const btnStyle = "rounded-full bg h-10 w-10 bg-white hover:bg-orange-500 items-center m-5 justify-center flex flex-row"
    const iconStyle = "h-5 w-5 text-gray-400 hover:text-white"

    

    return (
        <div
            className="h-screen w-18 bg-white"
        >
            <div
                className={btnStyle}
            >
                <HomeIcon className={iconStyle} />
            </div>
        </div>
    )
}

export default LeftBar