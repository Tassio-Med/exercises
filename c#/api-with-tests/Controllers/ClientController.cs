namespace api_with_tests.Controllers;
using Microsoft.AspNetCore.Mvc;
using api_with_tests.Core;

[ApiController]
[Route("(clients)")]
public class ClientController : ControllerBase 
{
  private static List<Client> _clients = new() ;
  private static int _nextId = 1;

  [HttpPost]
  public ActionResult Create(ClientRequest request)
  {
    var client = request.CreateClient(_nextId++);
    _clients.Add(client);
    return StatusCode(201, client);
  }

  [HttpPut("{id}")]
  public ActionResult Update(int id, ClientRequest request)
  {
    var client = _clients.FirstOrDefault(c => c.Id == id);

    if(client == null) return NotFound("Client not found");

    var clientUpdated = request.UpdateClient(client);

    return Ok(clientUpdated);
  }

  [HttpDelete("{id}")]
  public ActionResult Delete(int id)
  {
    var removed = _clients.RemoveAll(c => c.Id == id);
    
    if(removed == 0) return NotFound("Client not found");

    return NoContent();
  }

}