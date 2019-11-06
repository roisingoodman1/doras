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
SOURCE createCapability.sql
SOURCE createJobFamily.sql
SOURCE createJob.sql
SOURCE createCompetenciesJob.sql
SOURCE createTrainingJob.sql

SOURCE createUsers.sql
