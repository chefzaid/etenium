package ma.artitenium.etenium.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ma.artitenium.etenium.entity.Lot;


@Repository
public interface LotDao extends CrudRepository<Lot, Integer> {

}
