package ma.artitenium.etenium.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.apachecommons.CommonsLog;
import ma.artitenium.etenium.dao.ContactDao;
import ma.artitenium.etenium.dao.LotDao;
import ma.artitenium.etenium.dao.SubcontractorDao;
import ma.artitenium.etenium.dao.TradeDao;
import ma.artitenium.etenium.entity.Contact;
import ma.artitenium.etenium.entity.Lot;
import ma.artitenium.etenium.entity.Project;
import ma.artitenium.etenium.entity.Subcontractor;
import ma.artitenium.etenium.entity.Trade;

@CommonsLog
@Service
public class SubcontractorService {

	@Autowired
	private LotDao lotDao;
	@Autowired
	private TradeDao tradeDao;
	@Autowired
	private SubcontractorDao subcontractorDao;
	
	public List<Lot> findAllLots() {
		return (List<Lot>) lotDao.findAll();
	}

	public List<Trade> findAllTrades() {
		return (List<Trade>) tradeDao.findAll();
	}
	
	public List<Subcontractor> findAllSubcontractors() {
		log.debug("................");
		return (List<Subcontractor>) subcontractorDao.findAll();
	}
	
	public void saveSubcontractor(Subcontractor entity){
		subcontractorDao.save(entity);
	}
	
	public void deleteSubcontractor(Integer id){
		Subcontractor entity = subcontractorDao.findOne(id);
		subcontractorDao.delete(entity);
	}
}
