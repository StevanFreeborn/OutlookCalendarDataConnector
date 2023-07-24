namespace Server.API.Interfaces;

interface IGraphClient
{
  GraphServiceClient GetClient();
  Task<UserCollectionResponse?> GetUsersForIterator();
}