#### 1. Actor ve Customer tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.
 ##### - (SELECT first_name FROM Actor) UNION (SELECT first_name FROM CUSTOMER)
 
#### 2. Actor ve customer tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.
 #####  - (SELECT first_name FROM Actor) INTERSECT  (SELECT first_name FROM CUSTOMER)
 
#### 3. Actor ve customer tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.
 #####  - (SELECT first_name FROM Actor) EXCEPT  (SELECT first_name FROM CUSTOMER)

#### 4. İlk 3 sorguyu tekrar eden veriler için de yapalım.
 #####  - (SELECT first_name FROM Actor) EXCEPT ALL (SELECT first_name FROM CUSTOMER)





.
