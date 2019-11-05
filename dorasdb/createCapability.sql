CREATE TABLE Capability(
    capId INT PRIMARY KEY AUTO_INCREMENT,
    capName VARCHAR(30) NOT NULL,
    leadId INT NOT NULL,

    FOREIGN KEY (leadId) REFERENCES CapabilityLead(leadId)
);