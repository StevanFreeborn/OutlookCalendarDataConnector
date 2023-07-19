namespace Server.API.Interfaces;

public interface IOnspringService
{
  Task<List<App>> GetApps(string apiKey);
}