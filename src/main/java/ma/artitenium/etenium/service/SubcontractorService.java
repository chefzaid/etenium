package ma.artitenium.etenium.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.apachecommons.CommonsLog;
import ma.artitenium.etenium.dao.SubcontractorDao;
import ma.artitenium.etenium.entity.Subcontractor;

@CommonsLog
@Service
public class SubcontractorService {

	@Autowired
	private SubcontractorDao subcontractorDao;

	public List<Subcontractor> findAll() {
		log.debug("................");
		return (List<Subcontractor>) subcontractorDao.findAll();
	}
}
