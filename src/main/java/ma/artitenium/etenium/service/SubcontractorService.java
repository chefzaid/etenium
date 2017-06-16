package ma.artitenium.etenium.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

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

	public void save(Subcontractor entity) {
		subcontractorDao.save(entity);
	}

	public void delete(Integer id) {
		Subcontractor entity = subcontractorDao.findOne(id);
		subcontractorDao.delete(entity);
	}

	public List<Subcontractor> findByTrades(String tradesIds) {
		String[] idsArray = tradesIds.split(",");
		List<Integer> ids = new ArrayList<>();
		for (String str : idsArray) {
			if (!StringUtils.isEmpty(str)) {
				ids.add(Integer.parseInt(str));
			}
		}
		return subcontractorDao.findByTrades(ids);
	}

	public Subcontractor findById(Integer id) {
		return subcontractorDao.findOne(id);
	}

	public Subcontractor findByName(String name) {
		return subcontractorDao.findByName(name);
	}
}
