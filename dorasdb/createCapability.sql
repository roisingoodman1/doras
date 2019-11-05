CREATE TABLE Capability(
    capid INT PRIMARY KEY AUTO_INCREMENT,
    capName VARCHAR(30) NOT NULL,
    leadid INT NOT NULL,

    FOREIGN KEY (leadid) REFERENCES CapabilityLead(leadid)
);