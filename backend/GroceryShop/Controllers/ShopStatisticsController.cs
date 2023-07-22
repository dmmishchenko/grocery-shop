using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

[ApiController]
[Route("api/[controller]")]
public class ShopStatisticsController : ControllerBase
{
    private const int MaxItemsLimit = 30;

    private readonly ILogger<ShopStatisticsController> _logger;

    public ShopStatisticsController(ILogger<ShopStatisticsController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IActionResult Get(string from, string to)
    {
      // Log the request
      _logger.LogInformation("Request received with From: {From}, To: {To}", from, to);

      // Check if 'from' and 'to' parameters are valid and not empty
      if (string.IsNullOrEmpty(from) || string.IsNullOrEmpty(to))
      {
        string errorMessage = "Both 'from' and 'to' parameters are required.";
        
        // Log the error to Serilog
        _logger.LogError(errorMessage);
        // Return error response to the user
        return BadRequest(new { Error = errorMessage });
      }

      var random = new Random();
      var shopStatistics = new List<ShopStatisticItem>();

      DateTime fromDate = DateTime.Parse(from);
      DateTime toDate = DateTime.Parse(to);

      for (DateTime date = fromDate; date <= toDate && shopStatistics.Count < MaxItemsLimit; date = date.AddDays(1))
      {
          var item = new ShopStatisticItem
          {
              Date = date.ToString("yyyy-MM-dd"),
              Income = random.Next(100, 1000),
              Outcome = random.Next(50, 500),
              ClearRevenue = random.Next(50, 200),
          };

          shopStatistics.Add(item);
      }

      return Ok(shopStatistics);
    }
}
