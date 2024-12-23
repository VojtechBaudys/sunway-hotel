using Server.Models;
using System.Text.Json;

public class Loader
{
    private readonly string _file;
    private readonly JsonSerializerOptions _options = new()
    {
        PropertyNameCaseInsensitive = true
    };

    public Loader()
    {
        string baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
        _file = Path.Combine(baseDirectory, "Data", "data.json");
    }

    public List<Hotel>? GetHotels()
    {
        try
        {
            if (!File.Exists(_file))
            {
                return null;
            }

            using FileStream json = File.OpenRead(_file);
            return JsonSerializer.Deserialize<List<Hotel>>(json, _options);
        }
        catch
        {
            return null;
        }
    }
}