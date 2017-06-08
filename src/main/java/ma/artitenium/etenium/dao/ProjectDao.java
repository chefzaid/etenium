package ma.artitenium.etenium.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ma.artitenium.etenium.entity.Project;

@Repository
public interface ProjectDao extends CrudRepository<Project, Integer> {

	List<Project> findByName(String name);
}
