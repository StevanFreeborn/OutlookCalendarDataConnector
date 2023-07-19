namespace Server.API.Interfaces;

public interface IOnspringClientFactory
{
  IOnspringClient Create(string apiKey);
}