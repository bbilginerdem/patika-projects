
#### 1. Film tablosunda bulunan filmleri rating değerlerine göre gruplayınız.
 ##### - SELECT rating, count(*) FROM film GROUP BY rating
 
#### 2. Film tablosunda bulunan filmleri replacement_cost sütununa göre grupladığımızda film sayısı 50 den fazla olan replacement_cost değerini ve karşılık gelen film sayısını sıralayınız.
 #####  - SELECT replacement_cost,count(*) FROM film GROUP BY replacement_cost HAVING count(*) >50
 
#### 3. Customer tablosunda bulunan store_id değerlerine karşılık gelen müşteri sayılarını nelerdir? 
 #####  - SELECT store_id,count(customer_id) FROM Customer GROUP BY store_id

#### 4.City tablosunda bulunan şehir verilerini country_id sütununa göre gruplandırdıktan sonra en fazla şehir sayısı barındıran country_id bilgisini ve şehir sayısını paylaşınız.
 #####  - SELECT country_id,count(*) FROM City GROUP BY country_id ORDER BY count(*) desc LIMIT 1






