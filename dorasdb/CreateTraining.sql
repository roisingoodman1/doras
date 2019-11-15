CREATE TABLE Training(
    tId int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title varchar(50) NOT NULL default'Under work',
    trainingType varchar(255), /*Mandatory, Elective, Selective*/
    link varchar(900),
    trainingDescription varchar(768) DEFAULT ' '
);
