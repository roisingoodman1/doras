CREATE TABLE CompetenciesJob(
    jId INT,
    compId INT,
    PRIMARY KEY(jId, compId),

    FOREIGN KEY (jId) REFERENCES Job(jid),
    FOREIGN KEY (compID) REFERENCES Competencies(compId)
);