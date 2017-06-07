package ma.artitenium.etenium.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ma.artitenium.etenium.entity.Project;

@Repository
public interface ProjectDao extends CrudRepository<Project, Long> {

}
