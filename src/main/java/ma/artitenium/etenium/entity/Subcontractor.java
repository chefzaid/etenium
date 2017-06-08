package ma.artitenium.etenium.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class Subcontractor {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String name;
	private String identifier;
	@OneToOne
	private IdentifierType identifierType;
	@ManyToOne
	private SubcontractorType type;
	@ManyToMany
	private List<Trade> trades;
	@ManyToMany
	private List<Project> projects;
	@OneToMany
	private List<Contact> contacts;
	@OneToMany
	private List<Rating> ratings;
}
