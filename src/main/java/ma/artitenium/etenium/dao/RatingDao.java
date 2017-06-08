package ma.artitenium.etenium.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ma.artitenium.etenium.entity.Rating;

@Repository
public interface RatingDao extends CrudRepository<Rating, Integer> {

}
