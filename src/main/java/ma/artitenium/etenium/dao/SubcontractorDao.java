package ma.artitenium.etenium.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ma.artitenium.etenium.entity.Subcontractor;

@Repository
public interface SubcontractorDao extends CrudRepository<Subcontractor, Integer> {

	@Query("SELECT DISTINCT s FROM Subcontractor s JOIN s.trades t WHERE t.id IN (:tradesIds)")
	List<Subcontractor> findByTrades(@Param("tradesIds") List<Integer> tradesIds);

	@Query("SELECT DISTINCT s FROM Subcontractor s WHERE s.name = :name")
	Subcontractor findByName(@Param("name") String name);
}
