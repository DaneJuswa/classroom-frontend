import  {Subject} from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
    // University 1
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description: "Fundamental concepts of programming, algorithms, and problem solving.",
        createdAt: new Date("2024-01-10")
    },
    {
        id: 2,
        code: "CS201",
        name: "Data Structures",
        department: "Computer Science",
        description: "Study of arrays, linked lists, ANstacks, queues, trees, and graphs.",
        createdAt: new Date("2024-02-15")
    },
    {
        id: 3,
        code: "IS105",
        name: "Database Systems",
        department: "Information Systems",
        description: "Introduction to relational databases, SQL, and database design.",
        createdAt: new Date("2024-03-01")
    },

    // University 2
    {
        id: 4,
        code: "SE110",
        name: "Software Engineering Fundamentals",
        department: "Software Engineering",
        description: "Principles of software development, design patterns, and version control.",
        createdAt: new Date("2024-01-20")
    },
    {
        id: 5,
        code: "CS220",
        name: "Operating Systems",
        department: "Computer Science",
        description: "Concepts of processes, memory management, file systems, and concurrency.",
        createdAt: new Date("2024-02-25")
    }
];