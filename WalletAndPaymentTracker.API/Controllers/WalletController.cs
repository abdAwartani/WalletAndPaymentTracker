using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace WalletAndPaymentTracker.API.Controllers
{
    [EnableCors("AllowAllOrigins")]
    [Route("api/[controller]")]
    [ApiController]
    public class WalletController : ControllerBase
    {
        [HttpGet]
        [Route("")]
        public IActionResult Search()
        {
            return Ok(new List<string>() { "test","test1"});
        }
    }
}
