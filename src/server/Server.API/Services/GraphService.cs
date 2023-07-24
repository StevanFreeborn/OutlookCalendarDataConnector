namespace Server.API.Services;

class GraphService : IGraphService
{
  private readonly IGraphClientFactory _graphClientFactory;

  public GraphService(IGraphClientFactory graphClientFactory)
  {
    _graphClientFactory = graphClientFactory;
  }

  public async Task<List<User>> GetUsers(string clientId, string clientSecret)
  {
    var client = _graphClientFactory.Create(clientId, clientSecret);
    var azureUsers = new List<User>();
    var initialUsers = await client.GetUsersForIterator();

    if (initialUsers is null || initialUsers.Value is null)
    {
      return azureUsers;
    }

    var usersIterator = PageIterator<User, UserCollectionResponse>
      .CreatePageIterator(
        client.GetClient(),
        initialUsers,
        (u) =>
        {
          azureUsers.Add(u);
          return true;
        }
      );

    if (usersIterator is null)
    {
      return azureUsers;
    }

    await usersIterator.IterateAsync();

    return azureUsers;
  }
}