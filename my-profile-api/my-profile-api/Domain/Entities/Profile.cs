namespace my_profile_api.Domain.Entities;

public class ProfileResponse
{
    public string Name { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string About { get; set; } = string.Empty;
    public ContactInfo Contact { get; set; } = new();
    public List<string> TechStack { get; set; } = [];
    public List<WorkExperience> WorkExperiences { get; set; } = [];
    public List<Education> Education { get; set; } = [];
    public List<Language> Languages { get; set; } = [];
}

public class ContactInfo
{
    public string Phone { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
}

public class WorkExperience
{
    public string Company { get; set; } = string.Empty;
    public string Period { get; set; } = string.Empty;
    public string Position { get; set; } = string.Empty;
    public List<string> Responsibilities { get; set; } = [];
}

public class Education
{
    public string Institution { get; set; } = string.Empty;
    public string Period { get; set; } = string.Empty;
    public string Degree { get; set; } = string.Empty;
    public string Gpa { get; set; } = string.Empty;
}

public class Language
{
    public string Name { get; set; } = string.Empty;
    public string Level { get; set; } = string.Empty;
}
