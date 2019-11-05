CREATE TABLE CompetenciesJob(
    jId INT,
    compId INT, 
    PRIMARY KEY(jId, compId), -- declaring composite key

    FOREIGN KEY (jId) REFERENCES Job(jid), -- foreign key referencing - getting keys from other tables 
    FOREIGN KEY (compID) REFERENCES Competencies(compId)
);