package ma.artitenium.etenium.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
@Entity
public class Subcontractor {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	@NotNull
	private String name;
	@NotNull
	private String identifier;
	@Enumerated(EnumType.STRING)
	private IdentifierType identifierType;
	@Enumerated(EnumType.STRING)
	private SubcontractorType type;
	@ManyToMany(cascade = CascadeType.MERGE)
	private List<Trade> trades;
	@OneToMany(cascade = CascadeType.MERGE)
	private List<Contact> contacts;
	@OneToMany(cascade = CascadeType.MERGE)
	private List<Rating> ratings;
}
