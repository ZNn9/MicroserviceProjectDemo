using MongoDB.Driver;

namespace database.mongodb
{
    public class MongoDBConnection
    {
         public IMongoDatabase Database { get; }

        public MongoDBConnection(IConfiguration config)
        {
            var client = new MongoClient(config["MongoDB:ConnectionString"]);
            Database = client.GetDatabase(config["MongoDB:DatabaseName"]);
        }
    }
}