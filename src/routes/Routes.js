import {
    HomeIcon,
    ChatBubbleLeftIcon,
    ClipboardIcon,
    WalletIcon,
    HeartIcon,
    Cog8ToothIcon
} from '@heroicons/react/24/outline';

const iconStyle = "h-5 w-5 text-gray-400 hover:text-white"
const  lefRoutes = [
    {
        id: 1,
        route: '/home',
        icon: <HomeIcon className={iconStyle} />,
    },
    {
        id: 2,
        route: '/chat',
        icon: <ChatBubbleLeftIcon className={iconStyle} />,
    },
    {
        id: 3,
        route: '/clipboard',
        icon: <ClipboardIcon className={iconStyle} />,
    },
    {
        id: 4,
        route: '/walletIcon',
        icon: <WalletIcon className={iconStyle} />,
    },
    {
        id: 5,
        route: '/heartIcon',
        icon: <HeartIcon className={iconStyle} />,
    },
    {
        id: 6,
        route: '/settings',
        icon: <Cog8ToothIcon className={iconStyle} />,
    },
]

export const childRoutes = []