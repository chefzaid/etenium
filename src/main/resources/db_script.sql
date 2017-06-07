
CREATE TABLE IdentiferType (
	id INT PRIMARY KEY,
	label VARCHAR(32)
)

CREATE TABLE SubcontractorType (
	id INT PRIMARY KEY,
	label VARCHAR(32)
)

CREATE TABLE Subcontractor (
	id INT PRIMARY KEY,
	name VARCHAR(50)
	identifier VARCHAR(50),
	identifierType_id INT FOREIGN KEY REFERENCES IdentifierType(id)
	subcontractorType_id INT FOREIGN KEY REFERENCES SubcontractorType(id)
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

CREATE TABLE SubcontractorTrade (
	id INT PRIMARY KEY,
	subcontractor_id INT FOREIGN KEY REFERENCES Subcontractor(id),
	trade_id INT FOREIGN KEY REFERENCES Trade(id)
)

CREATE TABLE Contact (
	id INT PRIMARY KEY,
	firstName VARCHAR(50),
	lastName VARCHAR(50),
	job VARCHAR(50),
	phone VARCHAR(32),
	email VARCHAR(32),
	subcontractor_id INT FOREIGN KEY REFERENCES Subcontractor(id),
)

CREATE TABLE Project (
	id INT PRIMARY KEY,
	name VARCHAR(50)
)

CREATE TABLE Rating (
	id INT PRIMARY KEY,
	project_id INT,
	subcontractor_id INT,
	stars INT,
	comments VARCHAR(255)
)
