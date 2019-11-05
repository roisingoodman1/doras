CREATE TABLE JobFamily(
    jfid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    capid INT NOT NULL,

    FOREIGN KEY (capid) REFERENCES Capability(capid)
);