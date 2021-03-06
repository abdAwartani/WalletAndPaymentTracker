using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WalletAndPaymentTracker.API.Data;
using WalletAndPaymentTracker.API.Services.Interfaces;

namespace WalletAndPaymentTracker.API.Controllers
{
    [EnableCors("AllowAllOrigins")]
    [Route("api/[controller]")]
    [ApiController]
    public class WalletController : ControllerBase
    {
        private readonly IWalletService _walletService;
        public WalletController(IWalletService walletService)
        {
            _walletService = walletService;
        }

        [HttpGet]
        [Route("getAll")]
        public IActionResult GetAll()
        {
            var result = _walletService.GetAll();
            return Ok(result);
        }

        [HttpGet]
        [Route("{name}")]
        public IActionResult Get([FromRoute] string name)
        {
            var result = _walletService.Get(name);
            return Ok(Newtonsoft.Json.JsonConvert.SerializeObject(result));
        }

        [HttpPost]
        [Route("")]
        public IActionResult Add([FromBody] Wallet wallet)
        {
            var result = _walletService.Add(wallet);
            return Ok(result);
        }

        [HttpPut]
        [Route("")]
        public IActionResult Update([FromBody] Wallet wallet)
        {
            var result = _walletService.Update(wallet);
            return Ok(result);
        }

        [HttpDelete]
        [Route("{name}")]
        public IActionResult Delete([FromRoute] string name)
        {
            var result = _walletService.Delete(name); ;
            return Ok(result);
        }
    }
}
