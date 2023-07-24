namespace Server.API.Dtos;

class SyncDto
{
  public string Id { get; set; } = string.Empty;
  public string Name { get; set; } = string.Empty;
  public string User { get; set; } = string.Empty;
  public string Calendar { get; set; } = string.Empty;
  public bool Enabled { get; set; }
  public DateTimeOffset? LastRun { get; set; }
  public string? LastRunResult { get; set; }
  public string OnspringApiKey { get; set; } = string.Empty;
  public string OnspringApp { get; set; } = string.Empty;
  public string MsClientId { get; set; } = string.Empty;
  public string MsClientSecret { get; set; } = string.Empty;
  public string MsUser { get; set; } = string.Empty;
  public string MsUserCalendar { get; set; } = string.Empty;
}