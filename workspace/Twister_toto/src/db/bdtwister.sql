
# ------------------------------------------------------------
# script_sql1.sql
# 
# Script généré avec la configuration suivante :
#
# Hôte: localhost (MySQL 5.7.18)
# Base de données: SPT
# 
# ------------------------------------------------------------



CREATE DATABASE bourcier_jules_gossedumesnil_tony;
USE bourcier_jules_gossedumesnil_tony;
/*
CREATE USER 'root'@'localhost' IDENTIFIED BY 'root';
GRANT ALL ON bdd_sdzee.* TO 'root'@'localhost' IDENTIFIED BY 'root';*/

DROP TABLE IF EXISTS Users;
CREATE TABLE Users(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	login VARCHAR(255) UNIQUE,
	name VARCHAR(255),
	surname VARCHAR(255),
	psswd VARCHAR(255)
) ENGINE=innodb DEFAULT CHARSET=utf8;

CREATE TABLE connection(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	id_user INTEGER,
	thedate TIMESTAMP,
	cle VARCHAR(255),
	isRoot BOOLEAN DEFAULT TRUE
) ENGINE=innodb DEFAULT CHARSET=utf8;

CREATE TABLE Friend(
	id_user INTEGER,
	id_friend INTEGER,
	thedate TIMESTAMP,
	PRIMARY KEY(id_user,id_friend)
) ENGINE=innodb DEFAULT CHARSET=utf8;



