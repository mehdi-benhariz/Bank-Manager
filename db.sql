Create Table User(
CIN char(8) primary key,
username varchar(30) NOT NULL,
password varchar(32) NOT NULL,
RIB varchar(20) NOT NULL,
role varchar(30) default 'client');

CREATE TABLE Transaction(
     id int primary key auto_increment,
     date date default(CURRENT_DATE),
     type varchar(30) NOT NULL CHECK( type IN ('withdraw','deposit','transfer')),
     amount float NOT NULL,
     source varchar(30) NOT NULL,
     destination varchar(30) ,
     FOREIGN KEY (source) REFERENCES User(CIN),
     FOREIGN KEY (destination) REFERENCES User(CIN));
     