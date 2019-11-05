CREATE TABLE Job(
    jId int PRIMARYKEY AUTO_INCREMENT NOT NULL,
    title varchar(50) NOT NULL default'Under work',
    specLink varchar(255),
    summary varchar(510),
    responsbilities varchar(768) DEFAULT ' ',
    bandId int NOT NULL,
    jfid int NOT NULL,
    FOREIGN KEY (bandId) REFERENCES Band(bandId)
    FOREIGN KEY (jfid) REFERENCES JobFam(jfid)
)