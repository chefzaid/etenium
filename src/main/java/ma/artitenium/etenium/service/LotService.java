package ma.artitenium.etenium.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.artitenium.etenium.dao.LotDao;
import ma.artitenium.etenium.entity.Lot;

@Service
public class LotService {

	@Autowired
	private LotDao lotDao;

	public List<Lot> findAll() {
		return (List<Lot>) lotDao.findAll();
	}
}
