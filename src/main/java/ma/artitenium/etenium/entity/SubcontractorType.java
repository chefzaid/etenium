package ma.artitenium.etenium.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;

@Data
@Entity
public class SubcontractorType {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String label;
	@OneToMany
	private List<Subcontractor> subcontractors;
}
