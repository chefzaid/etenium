package ma.artitenium.etenium.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.apachecommons.CommonsLog;
import ma.artitenium.etenium.dao.ProjectDao;
import ma.artitenium.etenium.entity.Project;

@CommonsLog
@Service
public class ProjectService {

	@Autowired
	private ProjectDao projectDao;

	public List<Project> findAll() {
		return (List<Project>) projectDao.findAll();
	}

	public Project findById(Integer id) {
		return projectDao.findOne(id);
	}

	public List<Project> findByName(String name) {
		return projectDao.findByName(name);
	}

	public void save(Project entity) {
		log.debug("saving......");
		projectDao.save(entity);
	}
	
	public void delete(Project entity) {
		projectDao.delete(entity);
	}
}
