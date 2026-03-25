using my_profile_api.Domain.Entities;

namespace my_profile_api.Application.Interfaces;

public interface IProfileService
{
    ProfileResponse GetProfile();
}
