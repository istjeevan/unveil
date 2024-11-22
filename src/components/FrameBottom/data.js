import React from "react";
import Img1 from "../../images/attendee1.png"
import ActivityActive from "../../images/svg/ActivityActive.svg";
import ActivityInactive from "../../images/svg/ActivityInactive.svg";
import MeetingsActive from "../../images/svg/MeetingsActive.svg";
import MeetingsInactive from "../../images/svg/MeetingsInactive.svg";
import EmailsActive from "../../images/svg/EmailsActive.svg";
import EmailsInactive from "../../images/svg/EmailsInactive.svg";
import FilesInactive from "../../images/svg/FilesInactive.svg";

export const FormBottom = {
    heading: "Interactions",
    buttonName: "Add Context",
    tabsData: [
        {
            id: 1,
            title: "Activity",
            count: 2,
            activeIcon: ActivityActive,
            inativeIcon: ActivityInactive
        },
        {
            id: 2,
            title: "Meetings",
            count: 3,
            activeIcon: MeetingsActive,
            inativeIcon: MeetingsInactive
        },
        {
            id: 3,
            title: "Emails",
            count: 2,
            activeIcon: EmailsActive,
            inativeIcon: EmailsInactive
        },
        {
            id: 4,
            title: "Files",
            count: 3,
            activeIcon: FilesInactive,
            inativeIcon: FilesInactive
        },
    ]
}
export const activityData = [
    {
        year: "2024",
        period: "This week",
        activities: [
            {
                title: "Aryo and Bima met with Lisa, Michael, +4",
                type: "Meeting",
                subHeading: "Meeting:",
                description: "EDPO <> Unveil: Monthly Sync",
            },
        ],
    },
    {
        year: "2023",
        period: "December",
        activities: [
            {
                title: "Bima emailed Lisa and Michael",
                type: "Email",
                subHeading: "Subject:",
                description: "Follow-Up on AI Scaling and Integration Needs + Demo Preparation",
                iconLabel: "Technical Specs",
            },
        ],
    },
];
export const meetingsData = [
    {
        year: "2024",
        period: "This week",
        activities: [
            {
                status: "Attended",
                title: "EDPO <> Unveil: Monthly Sync",
                date: "Today, Jan. 24, 2024",
                time: "8:00 am - 8:30 am",
                attendees: [
                    { name: "1", avatar: Img1 },
                    { name: "2", avatar: "", colorClass: "#CB90FC" },
                    { name: "3", avatar: "", colorClass: "#6271EB" },
                    { name: "4", avatar: "", colorClass: "#266DF0" },
                    { name: "5", avatar: "", colorClass: "#1ABCFE" },
                    { name: "6", avatar: "", colorClass: "#FF7262" },
                    { name: "7", avatar: "", colorClass: "#CB90FC" },
                ]
            },
        ],
    },
    {
        year: "2023",
        period: "December",
        activities: [
            {
                status: "Attended",
                title: "Andera Demo for NVIDIA",
                date: "Friday, Jan. 11, 2024",
                time: "8:00 am - 8:30 am",
                attendees: [
                    { name: "1", avatar: Img1 },
                    { name: "2", avatar: "", colorClass: "#CB90FC" },
                    { name: "3", avatar: "", colorClass: "#6271EB" },
                    { name: "4", avatar: "", colorClass: "#266DF0" },
                    { name: "5", avatar: "", colorClass: "#1ABCFE" },
                    { name: "6", avatar: "", colorClass: "#FF7262" },
                    { name: "7", avatar: "", colorClass: "#CB90FC" },
                ],
            },
            {
                status: "Didn't Attend",
                title: "Aryo <> Michael Intro",
                date: "Tuesday, Jan. 08, 2024",
                time: "8:00 am - 8:30 am",
                attendees: [
                    { name: "1", avatar: Img1 },
                    { name: "2", avatar: "", colorClass: "#CB90FC" },
                    { name: "3", avatar: "", colorClass: "#6271EB" },
                    { name: "4", avatar: "", colorClass: "#266DF0" },
                    { name: "5", avatar: "", colorClass: "#1ABCFE" },
                    { name: "6", avatar: "", colorClass: "#FF7262" },
                    { name: "7", avatar: "", colorClass: "#CB90FC" },
                ],
            },
        ],
    },
];
export const emailsData = [
    {
        year: "2024",
        period: "This week",
        activities: [
            {
                title: "Follow-Up: AI Scaling and Integration Requirements",
                subTitle: "Recipients: Lisa Anderson, Michael Chen",
                date: "Nov. 1",
                description:
                    "Hi Michael and Lisa, Thank you for our conversation regarding the AI scaling challenges and integration...",
                iconLabel: "Technical Specs",
            },
        ],
    },
    {
        year: "2023",
        period: "December",
        activities: [
            {
                title: "Unlocking New Possibilities with Andera AI",
                subTitle: "Recipients: Michael Chen",
                date: "Oct. 4",
                description:
                    "Hi Michael, I’m excited to share how Andera AI can revolutionize your workflow and drive impactful...",
            },
        ],
    },
];

