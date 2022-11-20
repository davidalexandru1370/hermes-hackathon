using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace backend.net
{
    [ApiController]
    [Route("/api/document")]
    public class DocumentController : ControllerBase
    {

        [HttpDelete("delete/{id}")]
        public ActionResult DeleteDocument([FromRoute]string Id)
        {
            string file = @"C:\Users\David\Desktop\folders\hermes-hackathon\frontend\frontend\src\Persistance\" + Id;

            if (!System.IO.File.Exists(file))
            {
                return BadRequest("Inexistent file");
            }

            System.IO.File.Delete(file);
         
            return Ok();
        }

        [HttpGet("getall")]
        public ActionResult GetAllDocuments()
        {
            string file = @"C:\Users\David\Desktop\folders\hermes-hackathon\frontend\frontend\src\Persistance\";
            List<string> result = new List<string>();
            DirectoryInfo directoryInfo = new DirectoryInfo(file);
            FileInfo[] files = directoryInfo.GetFiles("*.pdf");
            foreach (FileInfo f  in files)
            {
                result.Add(f.Name);
            }

            return Ok(result);
        }
    }
}
