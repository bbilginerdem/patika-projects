
#### 1. Test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
 ##### -   CREATE TABLE employee (id SERIAL PRIMARY KEY, name varchar(70), birthday date, email varchar(100));
 
#### 2. Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
 #####  - insert into employee (name, birthday, email) values ('Torie', '1992-10-17', 'ternshaw0@squidoo.com');
 #####    insert into employee (name, birthday, email) values ('Benjamin', '1950-11-01', 'bnaismith1@about.com');
 #####    insert into employee (name, birthday, email) values ('Matthias', '1971-01-22', 'mdisley2@discovery.com');
                                            .
                                            .
 #####    insert into employee (name, birthday, email) values ('Koo', '1941-12-01', 'klaybourne3@hostgator.com');
          
#### 3. Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
 #####  - Update employee set name = 'Alperen',birthday = '1994-05-15' , email = 'alperen@gmail.com' where id between 3 and 7 returning *;
    
#### 4. Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
 #####  - Delete from employee where id between 3 and 7 returning *;
 
 
 
 


