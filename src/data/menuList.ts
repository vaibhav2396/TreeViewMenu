import { Children } from "react";

const menuList = [
    {
        id: 1,
        label: "Home",
        to: "/"
    },
    {
        id: 2,
        label: "Notifications",
        to: "/notifications",
        children: [
            {
                id: 3,
                label: "calls",
                to: "/calls"
            },
            {
                id:4,
                label: "messages",
                to: "/messages"
            }
        ]
    },
    {
        id:5,
        label: "Settings",
        to: "/settings",
        children: [
            {
                id:6,
                label: "Account",
                to: "/account",
                children: [
                    {
                        id:8,
                        label: "login",
                        to: "/login"
                    },
                    {
                        id:9,
                        label: "password",
                        to: "/password"
                    }
                ]
            },
            {
                id:7,
                label: "Security",
                to: "/security",
                children: [
                    {
                        id:8,
                        label: "login",
                        to: "/login"
                    },
                    {
                        id:9,
                        label: "password",
                        to: "/password"
                    }
                ]
            }
        ]
    }
]

export default menuList