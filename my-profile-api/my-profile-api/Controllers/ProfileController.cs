using Microsoft.AspNetCore.Mvc;
using my_profile_api.Application.Interfaces;
using my_profile_api.Domain.Entities;

namespace my_profile_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProfileController : ControllerBase
{
    private readonly IProfileService _profileService;

    public ProfileController(IProfileService profileService)
    {
        _profileService = profileService;
    }

    [HttpGet]
    public ActionResult<ProfileResponse> GetProfile()
    {
        return Ok(_profileService.GetProfile());
    }
}
