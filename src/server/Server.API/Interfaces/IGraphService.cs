namespace Server.API.Interfaces;

interface IGraphService
{
  Task<List<User>> GetUsers(string clientId, string clientSecret);
}