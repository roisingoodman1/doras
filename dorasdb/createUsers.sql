CREATE TABLE Users(
    userID INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    userPassword VARCHAR(128) NOT NULL,
    isAdmin BOOLEAN DEFAULT false,
    token VARCHAR(255)
);

