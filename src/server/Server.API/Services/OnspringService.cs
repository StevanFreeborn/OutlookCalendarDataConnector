using Onspring.API.SDK.Models;

namespace Server.API.Services;

public class OnspringService : IOnspringService
{
  private readonly IOnspringClientFactory _factory;
  public OnspringService(IOnspringClientFactory factory)
  {
    _factory = factory;
  }

  public async Task<List<App>> GetApps(string apiKey)
  {
    var client = _factory.Create(apiKey);
    var apps = await client.GetAppsAsync();
    return apps.Value.Items;
  }
}