CREATE USER 'shortUrlAccess'@'localhost';
ALTER USER 'shortUrlAccess'@'localhost'
IDENTIFIED BY '1234' ;
GRANT Delete ON *.url TO 'shortUrl'@'localhost';
GRANT Insert ON *.url TO 'shortUrl'@'localhost';
GRANT Select ON *.url TO 'shortUrl'@'localhost';
GRANT Update ON *.url TO 'shortUrl'@'localhost';
