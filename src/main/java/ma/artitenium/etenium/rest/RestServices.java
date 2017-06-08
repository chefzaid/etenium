package ma.artitenium.etenium.rest;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

@Component
@ApplicationPath("/api")
public class RestServices extends ResourceConfig {

	public RestServices() {
		register(ProjectRest.class);
	}
}
