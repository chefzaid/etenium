package ma.artitenium.etenium.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.artitenium.etenium.dao.ProjectDao;
import ma.artitenium.etenium.entity.Project;

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
		projectDao.save(entity);
	}
	
	public void delete(Integer id) {
		Project entity = projectDao.findOne(id);
		projectDao.delete(entity);
	}
}
