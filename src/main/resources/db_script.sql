
CREATE TABLE IdentiferType (
	id INT PRIMARY KEY,
	label VARCHAR(32)
)

CREATE TABLE Identifer (
	id INT PRIMARY KEY,
	type VARCHAR(32),
	number VARCHAR(50),
	identifierType_id INT FOREIGN KEY REFERENCES IdentifierType(id)
)

CREATE TABLE Lot (
	id INT PRIMARY KEY,
	label VARCHAR(255)
)

CREATE TABLE Trade (
	id INT PRIMARY KEY,
	label VARCHAR(255),
	lot_id INT FOREIGN KEY REFERENCES Lot(id)
)

CREATE TABLE SubcontractorType (
	id INT PRIMARY KEY,
	label VARCHAR(32)
)

CREATE TABLE Subcontractor (
	id INT PRIMARY KEY,
	name VARCHAR(50)
	trade_id INT FOREIGN KEY REFERENCES Trade(id),
	subcontractorType_id INT FOREIGN KEY REFERENCES SubcontractorType(id)
)

CREATE TABLE Contact (
	id INT PRIMARY KEY,
	firstName VARCHAR(50),
	lastName VARCHAR(50),
	job VARCHAR(50),
	phone VARCHAR(32),
	email VARCHAR(32)
)

CREATE TABLE SubcontractorContact (
	id INT PRIMARY KEY,
	subcontractor_id INT,
	contact_id INT
)

CREATE TABLE Project (
	id INT PRIMARY KEY,
	name VARCHAR(50)
)

CREATE TABLE Rating (
	id INT PRIMARY KEY,
	project_id INT,
	subcontractor_id INT,
	grade INT,
	comments VARCHAR(255)
)
