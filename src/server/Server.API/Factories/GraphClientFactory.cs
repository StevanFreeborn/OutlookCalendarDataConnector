namespace Server.API.Factories;

class GraphClientFactory : IGraphClientFactory
{
  public IGraphClient Create(string clientId, string clientSecret)
  {
    var credOptions = new TokenCredentialOptions
    {
      AuthorityHost = AzureAuthorityHosts.AzurePublicCloud
    };

    var creds = new ClientSecretCredential(
      "common",
      clientId,
      clientSecret,
      credOptions
    );

    var graphServiceClient = new GraphServiceClient(creds);

    return new GraphClient(graphServiceClient);
  }
}