CREATE TABLE CompetenciesJob(
    jId INT,
    compId INT, 
    PRIMARY KEY(jId, compId), /*declaring composite key*/

    FOREIGN KEY (jId) REFERENCES Job(jId), /*foreign key referencing - getting keys from other tables */
    FOREIGN KEY (compId) REFERENCES Competencies(compId)
);