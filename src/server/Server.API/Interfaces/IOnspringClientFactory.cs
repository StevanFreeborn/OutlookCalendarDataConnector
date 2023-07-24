namespace Server.API.Interfaces;

interface IOnspringClientFactory
{
  IOnspringClient Create(string apiKey);
}