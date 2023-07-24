namespace Server.API.Interfaces;

interface IOnspringService
{
  Task<List<App>> GetApps(string apiKey);
}