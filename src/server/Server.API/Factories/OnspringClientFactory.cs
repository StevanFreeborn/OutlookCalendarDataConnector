namespace Server.API.Factories;

class OnspringClientFactory : IOnspringClientFactory
{
  public IOnspringClient Create(string apiKey)
  {
    return new OnspringClient(
      "https://api.onspring.com",
      apiKey
    );
  }
}