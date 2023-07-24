using GraphClientFactory = Server.API.Factories.GraphClientFactory;
using WebApplication = Microsoft.AspNetCore.Builder.WebApplication;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IOnspringClientFactory, OnspringClientFactory>();
builder.Services.AddScoped<IGraphClientFactory, GraphClientFactory>();
builder.Services.AddScoped<IOnspringService, OnspringService>();

builder.Services.AddCors(
  options => options.AddPolicy(
    "development",
    policy => policy
    .AllowCredentials()
    .AllowAnyHeader()
    .AllowAnyMethod()
    .WithOrigins("http://localhost:8000")
  )
);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
  app.UseCors("development");
}

app.MapGet("/api/apps", async (string apiKey, IOnspringService onspringService) =>
  {
    var apps = await onspringService.GetApps(apiKey);
    return Results.Ok(apps);
  }
);

app.MapGet("/api/users", async (string clientId, string clientSecret, IGraphService graphService) =>
  {
    var users = await graphService.GetUsers(clientId, clientSecret);
    return Results.Ok(users);
  }
);

app.MapPost("/api/syncs", ([FromBody] SyncDto dto) => Results.Ok(dto));

app.Run();