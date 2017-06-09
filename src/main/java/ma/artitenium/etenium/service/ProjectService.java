package ma.artitenium.etenium.service;

import java.util.List;

import org.hibernate.Hibernate;
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
		List<Project> list = (List<Project>) projectDao.findAll();
		Hibernate.initialize(list);
		return list;
	}

	public Project findById(Integer id) {
		Project project = projectDao.findOne(id);
		Hibernate.initialize(project);
		return project;
	}

	public List<Project> findByName(String name) {
		List<Project> list = projectDao.findByName(name);
		return list;
	}

	public void save(Project entity) {
		log.debug("saving......");
		projectDao.save(entity);
	}
	
	public void delete(Project entity) {
		projectDao.delete(entity);
	}
}
