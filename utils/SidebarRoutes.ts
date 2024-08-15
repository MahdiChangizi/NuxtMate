/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My GitHub: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

export interface ISidebarRoute {
    name: string;
    route_path?: string;
    meta: {
        icon?: string,
        access_level?: string | string[]
    }
    children?: ISidebarRoute[]
}

export default [
    {
        name: 'داشبورد',
        route_path: "/dashboard",
    },
    {
        name: 'پروفایل',
        route_path: "/profile",
    },
    {
        name: 'شرکت ها',
        children: [
            {
                name: 'منوی اول',
                route_path: "page-2",
            },
            {
                name: 'منوی دوم',
                route_path: "/",
            }
        ]
    }
] as ISidebarRoute[]

/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My GitHub: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/