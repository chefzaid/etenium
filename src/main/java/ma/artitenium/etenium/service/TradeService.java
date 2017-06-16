package ma.artitenium.etenium.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.apachecommons.CommonsLog;
import ma.artitenium.etenium.dao.TradeDao;
import ma.artitenium.etenium.entity.Trade;

@CommonsLog
@Service
public class TradeService {

	@Autowired
	private TradeDao tradeDao;

	public List<Trade> findAll() {
		log.debug("................");
		return (List<Trade>) tradeDao.findAll();
	}
}
