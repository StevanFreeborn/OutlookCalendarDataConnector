var builder = WebApplication.CreateBuilder(args);

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

app.MapGet("/", () => "Hello World!");

app.Run();
