package ma.artitenium.etenium.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.artitenium.etenium.service.SubcontractorService;

@Component
@Path("/subcontractor")
public class SubcontractorRest {

	@Autowired
	private SubcontractorService subcontractorService;

	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findAll() {
		return Response.ok().entity(subcontractorService.findAll()).build();
	}
}
