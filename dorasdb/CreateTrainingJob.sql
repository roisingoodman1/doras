CREATE TABLE TrainingJob(
    tId int NOT NULL,
    jId int NOT NULL,

    PRIMARY KEY(tId, jId),

    FOREIGN KEY (tId) REFERENCES Training(tId),
    FOREIGN KEY (jId) REFERENCES Job(jId)
);