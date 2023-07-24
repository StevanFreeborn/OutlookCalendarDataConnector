namespace Server.API.Interfaces;

interface IGraphClientFactory
{
  IGraphClient Create(string clientId, string clientSecret);
}