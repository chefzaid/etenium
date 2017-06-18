-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Dim 18 Juin 2017 à 17:56
-- Version du serveur :  10.1.21-MariaDB
-- Version de PHP :  5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `etenium`
--

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `job` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `lot`
--

CREATE TABLE `lot` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `lot_trades`
--

CREATE TABLE `lot_trades` (
  `lot_id` int(11) NOT NULL,
  `trades_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `rating`
--

CREATE TABLE `rating` (
  `id` bigint(20) NOT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `stars` int(11) NOT NULL,
  `project_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `subcontractor`
--

CREATE TABLE `subcontractor` (
  `id` int(11) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `identifier_type` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `subcontractor_contacts`
--

CREATE TABLE `subcontractor_contacts` (
  `subcontractor_id` int(11) NOT NULL,
  `contacts_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `subcontractor_ratings`
--

CREATE TABLE `subcontractor_ratings` (
  `subcontractor_id` int(11) NOT NULL,
  `ratings_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `subcontractor_trades`
--

CREATE TABLE `subcontractor_trades` (
  `subcontractor_id` int(11) NOT NULL,
  `trades_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `trade`
--

CREATE TABLE `trade` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `lot_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `lot`
--
ALTER TABLE `lot`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `lot_trades`
--
ALTER TABLE `lot_trades`
  ADD UNIQUE KEY `UK_cei2rf9nn33quv3b1b7uchoks` (`trades_id`),
  ADD KEY `FKi0mnhp5jvjdg50dqqg74bvp3r` (`lot_id`);

--
-- Index pour la table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKsmocnoofl27pbeo9uvlyovtqf` (`project_id`);

--
-- Index pour la table `subcontractor`
--
ALTER TABLE `subcontractor`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_ifwdj9wdns5q65jdtuslo57ky` (`name`);

--
-- Index pour la table `subcontractor_contacts`
--
ALTER TABLE `subcontractor_contacts`
  ADD UNIQUE KEY `UK_dd63q0efek2gyuo1b97nqjhj4` (`contacts_id`),
  ADD KEY `FKekb9wn7rdffbhauirwd8r4hq0` (`subcontractor_id`);

--
-- Index pour la table `subcontractor_ratings`
--
ALTER TABLE `subcontractor_ratings`
  ADD UNIQUE KEY `UK_esm4gt8x4fhav6osn0mokmq6i` (`ratings_id`),
  ADD KEY `FKq139622i9bv9qjia6yp4mnyxl` (`subcontractor_id`);

--
-- Index pour la table `subcontractor_trades`
--
ALTER TABLE `subcontractor_trades`
  ADD KEY `FK7717xocimh5spcj34cs0xy1kj` (`trades_id`),
  ADD KEY `FK24kd5tkyrkhu7stiv71fo1vcu` (`subcontractor_id`);

--
-- Index pour la table `trade`
--
ALTER TABLE `trade`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKhyo6pj0b8qejh335g7e4bvc82` (`lot_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `lot`
--
ALTER TABLE `lot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `subcontractor`
--
ALTER TABLE `subcontractor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `trade`
--
ALTER TABLE `trade`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `lot_trades`
--
ALTER TABLE `lot_trades`
  ADD CONSTRAINT `FK2sy3qg5ybs6mpsfdwowa7f3c7` FOREIGN KEY (`trades_id`) REFERENCES `trade` (`id`),
  ADD CONSTRAINT `FKi0mnhp5jvjdg50dqqg74bvp3r` FOREIGN KEY (`lot_id`) REFERENCES `lot` (`id`);

--
-- Contraintes pour la table `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `FKsmocnoofl27pbeo9uvlyovtqf` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`);

--
-- Contraintes pour la table `subcontractor_contacts`
--
ALTER TABLE `subcontractor_contacts`
  ADD CONSTRAINT `FK1chewd6tv18skuis8hxllydm0` FOREIGN KEY (`contacts_id`) REFERENCES `contact` (`id`),
  ADD CONSTRAINT `FKekb9wn7rdffbhauirwd8r4hq0` FOREIGN KEY (`subcontractor_id`) REFERENCES `subcontractor` (`id`);

--
-- Contraintes pour la table `subcontractor_ratings`
--
ALTER TABLE `subcontractor_ratings`
  ADD CONSTRAINT `FKl5pl8x6iqr00hvjnavpdq8ydv` FOREIGN KEY (`ratings_id`) REFERENCES `rating` (`id`),
  ADD CONSTRAINT `FKq139622i9bv9qjia6yp4mnyxl` FOREIGN KEY (`subcontractor_id`) REFERENCES `subcontractor` (`id`);

--
-- Contraintes pour la table `subcontractor_trades`
--
ALTER TABLE `subcontractor_trades`
  ADD CONSTRAINT `FK24kd5tkyrkhu7stiv71fo1vcu` FOREIGN KEY (`subcontractor_id`) REFERENCES `subcontractor` (`id`),
  ADD CONSTRAINT `FK7717xocimh5spcj34cs0xy1kj` FOREIGN KEY (`trades_id`) REFERENCES `trade` (`id`);

--
-- Contraintes pour la table `trade`
--
ALTER TABLE `trade`
  ADD CONSTRAINT `FKhyo6pj0b8qejh335g7e4bvc82` FOREIGN KEY (`lot_id`) REFERENCES `lot` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
