using database.mongodb;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;


[ApiController]
[Route("api/[controller]")]

public class DatabaseTestController : ControllerBase
{
    private readonly MongoDBConnection _mongo;

    public DatabaseTestController(MongoDBConnection mongo)
    {
        _mongo = mongo;
    }

    [HttpGet("test-connection")]
    public IActionResult TestConnection()
    {
        try
        {
            var collectionNames = _mongo.Database.ListCollectionNames().ToList();
            return Ok("MongoDB connected successfully.");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"MongoDB connection failed: {ex.Message}");
        }
    }
}
