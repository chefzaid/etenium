package ma.artitenium.etenium.rest;

import java.util.Arrays;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.artitenium.etenium.entity.IdentifierType;
import ma.artitenium.etenium.entity.Subcontractor;
import ma.artitenium.etenium.entity.SubcontractorType;
import ma.artitenium.etenium.service.SubcontractorService;

@Component
@Path("/subcontractor")
public class SubcontractorRest {

	@Autowired
	private SubcontractorService subcontractorService;
	
	@GET
	@Path("/type/all")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findAllType() {
		return Response.ok().entity(Arrays.asList(SubcontractorType.values())).build();
	}
	
	@GET
	@Path("/identifierType/all")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findAllIdentifierType() {
		return Response.ok().entity(Arrays.asList(IdentifierType.values())).build();
	}

	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findAll() {
		return Response.ok().entity(subcontractorService.findAll()).build();
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response saveSubcontractor(Subcontractor json) {
		subcontractorService.save(json);
		return Response.ok().entity(null).build();
	}
	
	@GET
	@Path("/trades/{ids}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findByTrades(@PathParam("ids") String tradesIds) {
		return Response.ok().entity(subcontractorService.findByTrades(tradesIds)).build();
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findById(@PathParam("id") Integer id) {
		return Response.ok().entity(subcontractorService.findById(id)).build();
	}
	
	@GET
	@Path("/name/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findById(@PathParam("name") String name) {
		return Response.ok().entity(subcontractorService.findByName(name)).build();
	}
}
