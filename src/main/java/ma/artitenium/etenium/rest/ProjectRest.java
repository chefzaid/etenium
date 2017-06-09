package ma.artitenium.etenium.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.artitenium.etenium.entity.Project;
import ma.artitenium.etenium.service.ProjectService;

@Component
@Path("/project")
public class ProjectRest {

	@Autowired
	private ProjectService projectService;

	@GET
	@Path("/all")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findAll() {
		return Response.ok().entity(projectService.findAll()).build();
	}
	
	@GET
	@Path("/name/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findByName(@PathParam("name") String name) {
		return Response.ok().entity(projectService.findByName(name)).build();
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findById(@PathParam("id") Integer id) {
		return Response.ok().entity(projectService.findById(id)).build();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response save(Project entity) {
		projectService.save(entity);
		return Response.ok().build();
	}
	
	@DELETE
	@Path("/{id}")
	public Response delete(@PathParam("id") Integer id) {
		Project entity = projectService.findById(id);
		projectService.delete(entity);
		return Response.ok().build();
	}
}
