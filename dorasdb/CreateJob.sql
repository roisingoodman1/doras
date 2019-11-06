CREATE TABLE Job(
    jId int PRIMARY KEY AUTO_INCREMENT,
    title varchar(50) NOT NULL default'Under work',
    specLink varchar(512),
    summary varchar(510),
    responsibilities varchar(768) DEFAULT ' ',
    bandId int NOT NULL,
    capId int NOT NULL,
    FOREIGN KEY (bandId) REFERENCES Band(bandId),
    FOREIGN KEY (capId) REFERENCES Capability(capId)
);