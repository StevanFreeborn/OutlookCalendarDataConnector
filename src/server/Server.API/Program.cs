using Server.API.Factories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IOnspringClientFactory, OnspringClientFactory>();
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

app.MapPost("/api/syncs", ([FromBody] SyncDto dto) => Results.Ok(dto));

app.Run();
