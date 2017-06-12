package ma.artitenium.etenium.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ma.artitenium.etenium.entity.Trade;


@Repository
public interface TradeDao extends CrudRepository<Trade, Integer> {

}
