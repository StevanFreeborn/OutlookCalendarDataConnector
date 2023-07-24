namespace Server.API.Models;

class GraphClient : IGraphClient
{
  private readonly GraphServiceClient _graphServiceClient;

  public GraphClient(GraphServiceClient graphServiceClient)
  {
    _graphServiceClient = graphServiceClient;
  }

  public GraphServiceClient GetClient()
  {
    return _graphServiceClient;
  }

  public async Task<UserCollectionResponse?> GetUsersForIterator()
  {
    return await _graphServiceClient.Users.GetAsync();
  }
}