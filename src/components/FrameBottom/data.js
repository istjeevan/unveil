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
                id: 1,
                title: "Aryo and Bima met with Lisa, Michael, +4",
                type: "Meeting",
                subHeading: "Meeting:",
                description: "EDPO <> Unveil: Monthly Sync",
                details: [
                    {
                        label: "Key Details",
                        title: "Topics Discussed:",
                        arrayData: [
                            {
                                title: "AI Model Scaling Challenges:",
                                text: "Current data center limitations and the need for efficient scaling."
                            },
                            {
                                title: "Integration Requirements:",
                                text: "Compatibility issues with NVIDIA's existing infrastructure."
                            },
                            {
                                title: "Next Steps:",
                                text: "Schedule a demo and gather technical requirements for integration."
                            }
                        ]
                    },
                    {
                        label: "Transcript",
                        arrayData: [
                            {
                                title: "Aryo:",
                                text: "Thanks for meeting today, Lisa and Michael. I wanted to dive deeper into the AI scaling needs you mentioned and discuss how our solution could address them. Can you tell me a bit more about the current challenges?"
                            },
                            {
                                title: "Lisa Anderson:",
                                text: "Absolutely. Our main issue is scaling AI models across multiple data centers without causing downtime or impacting performance. We have limitations in terms of processing power and network bandwidth, especially when we try to scale models that require high compute resources."
                            },
                            {
                                title: "Michael Chen:",
                                text: "Exactly. We’re working with some older infrastructure, and while we’ve tried to make it compatible with newer systems, we’re still hitting roadblocks."
                            }
                        ]
                    }
                ]
            },
        ],
    },
    {
        year: "2023",
        period: "December",
        activities: [
            {
                id: 2,
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
                id: 1,
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
                    { name: "7", avatar: "", colorClass: "#CB90FC", inactiveColorClass: "#EEEBF1" },
                ],
                details: [
                    {
                        label: "Key Details",
                        title: "TopicsDiscussed:",
                        arrayData: [
                            {
                                title: "AI Model Scaling Challenges:",
                                text: "Current data center limitations and the need for efficient scaling."
                            },
                            {
                                title: "Integration Requirements:",
                                text: "Compatibility issues with NVIDIA's existing infrastructure."
                            },
                            {
                                title: "Next Steps:",
                                text: "Schedule a demo and gather technical requirements for integration."
                            }
                        ]
                    },
                    {
                        label: "Transcript",
                        arrayData: [
                            {
                                title: "Aryo:",
                                text: "Thanks for meeting today, Lisa and Michael. I wanted to dive deeper into the AI scaling needs you mentioned and discuss how our solution could address them. Can you tell me a bit more about the current challenges?"
                            },
                            {
                                title: "Lisa Anderson:",
                                text: "Absolutely. Our main issue is scaling AI models across multiple data centers without causing downtime or impacting performance. We have limitations in terms of processing power and network bandwidth, especially when we try to scale models that require high compute resources."
                            },
                            {
                                title: "Michael Chen:",
                                text: "Exactly. We’re working with some older infrastructure, and while we’ve tried to make it compatible with newer systems, we’re still hitting roadblocks."
                            }
                        ]
                    }
                ]
            },
        ],
    },
    {
        year: "2023",
        period: "December",
        activities: [
            {
                id: 2,
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
                    { name: "7", avatar: "", colorClass: "#CB90FC", inactiveColorClass: "#EEEBF1" },
                ],
            },
            {
                id: 3,
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
                    { name: "7", avatar: "", colorClass: "#CB90FC", inactiveColorClass: "#EEEBF1" },
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
                id: 1,
                title: "Follow-Up: AI Scaling and Integration Requirements",
                subTitle: "Recipients: Lisa Anderson, Michael Chen",
                date: "Nov. 1",
                description:
                    "Hi Michael and Lisa, Thank you for our conversation regarding the AI scaling challenges and integration...",
                iconLabel: "Technical Specs",
                details: [
                    {
                        label: "Recipients",
                        arrayData: [
                            { title: "Lisa Anderson" },
                            { title: "Michael Chen" }
                        ]
                    },
                    {
                        label: "Date",
                        arrayData: [
                            { title: "Nov. 1, 2024" },
                        ]
                    },
                    {
                        label: "Content",
                        arrayData: [
                            {
                                title: "Hi Michael and Lisa,",
                                message: "Thank you for our conversation regarding the AI scaling challenges and integration needs. Based on our discussion, it sounds like optimizing resource allocation is critical to support your current infrastructure without causing downtime. I’d be happy to set up a demo to showcase how our solution manages data distribution and workload balancing efficiently, even with existing limitations. Please let me know if you’d like to schedule a time for the demo and any specific technical requirements you'd like us to address.",
                                regards: ["Best,", "Aryo"]
                            },
                        ]

                    }
                ]
            },
        ],
    },
    {
        year: "2023",
        period: "December",
        activities: [
            {
                id: 2,
                title: "Unlocking New Possibilities with Andera AI",
                subTitle: "Recipients: Michael Chen",
                date: "Oct. 4",
                description:
                    "Hi Michael, I’m excited to share how Andera AI can revolutionize your workflow and drive impactful...",
            },
        ],
    },
];

