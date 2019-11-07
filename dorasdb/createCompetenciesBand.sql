CREATE TABLE CompetenciesBand(
    compId INT NOT NULL,
    bandId INT NOT NULL,

    PRIMARY KEY(compId, bandId), /*declaring composite key*/
    FOREIGN KEY (compId) REFERENCES Competencies(compId),
    FOREIGN KEY (bandId) REFERENCES Band(bandId)
);