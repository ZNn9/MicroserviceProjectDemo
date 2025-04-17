using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public interface IEntity
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    string Id { get; set; }
}