namespace Server.API.Services;

class OnspringService : IOnspringService
{
  private readonly IOnspringClientFactory _factory;
  public OnspringService(IOnspringClientFactory factory)
  {
    _factory = factory;
  }

  public async Task<List<App>> GetApps(string apiKey)
  {
    var client = _factory.Create(apiKey);
    var apps = new List<App>();
    var totalPages = 1;
    var pagingRequest = new PagingRequest(1, 50);
    int currentPage;

    do
    {
      var res = await client.GetAppsAsync(pagingRequest);

      if (res.IsSuccessful is true)
      {
        apps.AddRange(res.Value.Items);
        totalPages = res.Value.TotalPages;
      }

      pagingRequest.PageNumber++;
      currentPage = pagingRequest.PageNumber;
    } while (currentPage <= totalPages);

    return apps;
  }
}