#### 1. City tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.
 ##### - SELECT * FROM country LEFT JOIN city on country.country_id = city.country_id
 
#### 2. Customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz RIGHT JOIN sorgusunu yazınız.
 #####  - SELECT customer.first_name, customer.last_name , payment.payment_id FROM payment RIGHT JOIN customer on payment.customer_id = customer.customer_id
 
#### 3.Customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz FULL JOIN sorgusunu yazınız.
 #####  -  SELECT customer.first_name, customer.last_name , rental.rental_id FROM rental FULL JOIN customer on rental.customer_id = customer.customer_id





