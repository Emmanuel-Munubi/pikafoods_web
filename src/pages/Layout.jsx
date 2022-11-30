import React from 'react'
import { LeftBar, RightBar, CenterBar } from '../components'

function Layout() {
    return (
        <div
            className="flex flex-row"
        >
            {/* Left side bar */}
            <LeftBar />
            {/* Center screen */}
            <CenterBar />
            {/* Right side bar */}
            <RightBar />
        </div>
    )
}

export default Layout