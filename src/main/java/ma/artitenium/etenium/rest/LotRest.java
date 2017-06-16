package ma.artitenium.etenium.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.artitenium.etenium.service.LotService;

@Component
@Path("/lot")
public class LotRest {

	@Autowired
	private LotService lotService;

	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findAllLot() {
		return Response.ok().entity(lotService.findAll()).build();
	}
}
