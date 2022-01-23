#### 1. Country tablosunda bulunan country sütunundaki ülke isimlerinden 'A' karakteri ile başlayıp 'a' karakteri ile sonlananları sıralayınız.
 ##### - SELECT country FROM Country WHERE country LIKE 'A%a'

#### 2. Country tablosunda bulunan country sütunundaki ülke isimlerinden en az 6 karakterden oluşan ve sonu 'n' karakteri ile sonlananları sıralayınız.
 #####  - SELECT country FROM Country WHERE country LIKE '_____%n'   
 
#### 3. Film tablosunda bulunan title sütunundaki film isimlerinden en az 4 adet büyük ya da küçük harf farketmesizin 'T' karakteri içeren film isimlerini sıralayınız.
 #####  - SELECT title FROM Film WHERE title ILIKE 't%t%t%t%' 
 
#### 4. Film tablosunda bulunan tüm sütunlardaki verilerden title 'C' karakteri ile başlayan ve uzunluğu (length) 90 dan büyük olan ve rental_rate 2.99 olan verileri sıralayınız.
 #####  - SELECT * FROM Film WHERE title LIKE 'C%' and length > 90 and rental_rate =2.99
 







