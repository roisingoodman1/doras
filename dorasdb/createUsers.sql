CREATE TABLE Users(
    userID INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50),
    password VARCHAR(100)  NOT NULL,
    salt VARCHAR(50) NOT NULL,
    admin CHAR(1)
);