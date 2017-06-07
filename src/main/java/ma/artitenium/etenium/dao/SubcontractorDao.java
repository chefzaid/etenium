package ma.artitenium.etenium.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ma.artitenium.etenium.entity.Subcontractor;

@Repository
public interface SubcontractorDao extends CrudRepository<Subcontractor, Long> {

}
