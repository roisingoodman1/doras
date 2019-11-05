CREATE TABLE Job(
    jid int PRIMARYKEY AUTO_INCREMENT NOT NULL,
    name varchar(50) NOT NULL default'Under work',
    specLink varchar(255),
    summary varchar(510),
    responsbilities varchar(768) DEFAULT ' ',
    bandid int NOT NULL,
    jfid int NOT NULL,
    FOREIGN KEY (bandid) REFERENCES Band(bandid)
    FOREIGN KEY (jfid) REFERENCES JobFam(jfid)
)