package ma.artitenium.etenium.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import lombok.Data;

@Data
@Entity
public class Subcontractor {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String name;
	private String identifier;
	@Enumerated(EnumType.STRING)
	private IdentifierType identifierType;
	@Enumerated(EnumType.STRING)
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
