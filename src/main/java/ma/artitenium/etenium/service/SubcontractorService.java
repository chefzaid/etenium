package ma.artitenium.etenium.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.apachecommons.CommonsLog;
import ma.artitenium.etenium.dao.LotDao;
import ma.artitenium.etenium.dao.SubcontractorDao;
import ma.artitenium.etenium.dao.TradeDao;
import ma.artitenium.etenium.entity.Lot;
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
	
	public List<Lot> findAllLot() {
		return (List<Lot>) lotDao.findAll();
	}

	public List<Trade> findAllTrade() {
		return (List<Trade>) tradeDao.findAll();
	}
	
	public List<Subcontractor> findAll() {
		log.debug("................");
		return (List<Subcontractor>) subcontractorDao.findAll();
	}
}
