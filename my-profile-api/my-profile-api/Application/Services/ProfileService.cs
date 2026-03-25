using my_profile_api.Application.Interfaces;
using my_profile_api.Domain.Entities;

namespace my_profile_api.Application.Services;

public class ProfileService : IProfileService
{
    public ProfileResponse GetProfile()
    {
        return new ProfileResponse
        {
            Name = "Kanokpol Hongthong",
            Title = "Programmer",
            About = "Backend-focused developer with experience in designing, developing, and maintaining backend systems and Web APIs. Strong proficiency in SQL and database querying, with a focus on performance optimization and supporting production environments. Experienced in understanding and designing API structures, and supporting high-traffic systems such as SMS platforms and reporting systems. Comfortable resolving production issues, collaborating with teams, and supporting CI/CD processes.",
            Contact = new ContactInfo
            {
                Phone = "093-943-0981",
                Email = "kanokpol.ho@hotmail.com",
                Location = "HuaiKhwang, Bangkok"
            },
            TechStack =
            [
                "C# .NET", "JAVA", "Node.Js", "HTML", "JavaScript", "React",
                "MS SQL Server", "MySQL", "Oracle", "MongoDB", "PostgreSQL",
                "Redis", "Jenkins", "Argo", "Rancher", "Rabbit MQ", "Git"
            ],
            WorkExperiences =
            [
                new WorkExperience
                {
                    Company = "Advance Network Technology Services Co., Ltd.",
                    Period = "2022 - PRESENT",
                    Position = "Programmer",
                    Responsibilities =
                    [
                        "Designed and improved backend systems with a focus on performance, scalability, and high-traffic handling.",
                        "Developed backend services as RESTful APIs and console applications, with frontend support using React, HTML, JavaScript, and C# MVC when required.",
                        "Optimized database performance through SQL tuning, query optimization, and stored procedure improvements.",
                        "Resolved production issues and performed root cause analysis to maintain system stability.",
                        "Designed technical solutions and system architecture for new projects and system enhancements.",
                        "Built and maintained CI/CD pipelines using Jenkins, Argo, and Rancher to support reliable and efficient deployments."
                    ]
                },
                new WorkExperience
                {
                    Company = "Innova Software Co., Ltd.",
                    Period = "2019 - 2022",
                    Position = "Programmer (Junior)",
                    Responsibilities =
                    [
                        "Fixed bugs and maintained systems based on MA requests.",
                        "Developed web applications using C# MVC, or JAVA with frontend implementation in HTML and JavaScript.",
                        "Performed unit testing and SIT to ensure system quality and stability.",
                        "Developed and enhanced internal factory systems, including integrations with handheld barcode scanners to support operational workflows."
                    ]
                },
                new WorkExperience
                {
                    Company = "JASTEC Co., Ltd.",
                    Period = "2018 (3 Months)",
                    Position = "Programmer (Internship)",
                    Responsibilities =
                    [
                        "Developed a student registration system for a school. Responsible for implementing the features to search for courses and view detailed course information. The system was developed using Java (JSP) with Oracle as the database."
                    ]
                }
            ],
            Education =
            [
                new Education
                {
                    Institution = "THAI-NICHI INSTITUTE OF TECHNOLOGY",
                    Period = "2015 - 2019",
                    Degree = "Bachelor of Information Technology",
                    Gpa = "3.14"
                }
            ],
            Languages =
            [
                new Language { Name = "Thai", Level = "Native" },
                new Language { Name = "English", Level = "Basic" },
                new Language { Name = "Japanese", Level = "Basic" }
            ]
        };
    }
}
