DROP DATABASE dorasdb;
CREATE DATABASE dorasdb;
USE dorasdb;

CREATE USER kladderUser@localhost IDENTIFIED WITH mysql_native_password BY 'klu_master'; 
GRANT ALL on dorasdb.* to kladderUser@localhost;

SOURCE createCompetencies.sql
SOURCE createBand.sql
SOURCE createCompetenciesBand.sql
SOURCE createTraining.sql
SOURCE createCapabilityLead.sql
SOURCE createJobFamily.sql
SOURCE createCapability.sql
SOURCE createJob.sql
SOURCE createCompetenciesJob.sql
SOURCE createTrainingJob.sql
SOURCE createUsers.sql

SOURCE insertCompetencies.sql
SOURCE insertBand.sql
SOURCE insertCompetenciesBand.sql
SOURCE insertTraining.sql
SOURCE insertJobFamily.sql
SOURCE insertCapabilityLeads.sql
SOURCE insertCapability.sql
SOURCE insertJob.sql
SOURCE insertCompetenciesJob.sql
SOURCE insertTrainingJob.sql 



