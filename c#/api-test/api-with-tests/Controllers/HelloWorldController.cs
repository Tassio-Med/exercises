namespace api_with_tests.Controllers;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class HelloWorldController : Controller
{
  [HttpGet]
  public string Get() => "Hello World";
}