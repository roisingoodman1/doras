CREATE TABLE Band(
    bandId INT PRIMARY KEY AUTO_INCREMENT,
    bandNo INT NOT NULL, /*between 0 and 7 for band numbers*/
    bandName VARCHAR(50) NOT NULL /* band name (eg, principal, executive) */
);