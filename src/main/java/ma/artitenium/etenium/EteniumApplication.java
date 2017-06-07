package ma.artitenium.etenium;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource(value="classpath:/hsqldb-config.xml")
public class EteniumApplication {

	public static void main(String[] args) {
		SpringApplication.run(EteniumApplication.class, args);
	}
}
