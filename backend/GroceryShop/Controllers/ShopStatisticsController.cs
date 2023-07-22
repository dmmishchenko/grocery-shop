using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

[ApiController]
[Route("api/[controller]")]
public class ShopStatisticsController : ControllerBase
{
    private const int MaxItemsLimit = 30;

    [HttpGet]
    public IActionResult Get(string from, string to)
    {
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
