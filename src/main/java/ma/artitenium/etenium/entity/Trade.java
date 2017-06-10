package ma.artitenium.etenium.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class Trade {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String label;
	@ManyToOne
	private Lot lot;
}
