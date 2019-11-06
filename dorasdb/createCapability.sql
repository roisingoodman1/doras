CREATE TABLE Capability(
    capId INT PRIMARY KEY AUTO_INCREMENT,
    capName VARCHAR(30) NOT NULL,
    leadId INT NOT NULL,
    jfid int Not NULL,

    FOREIGN KEY (jfid) REFERENCES JobFamily(jfid)
    FOREIGN KEY (leadId) REFERENCES CapabilityLead(lead
    Id)
);