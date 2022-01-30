#### 1- SELECT COUNT(*) FROM film WHERE length > (SELECT AVG(length) FROM film);
#### 2- SELECT COUNT(*) FROM film WHERE rental_rate = ANY (SELECT max(rental_rate) FROM film;);
#### 3- SELECT * FROM film WHERE rental_rate = ANY (SELECT min(rental_rate) FROM film) and replacement_cost = ANY (SELECT min(replacement_cost) WHERE film);
#### 4- SELECT customer_id, payment_id FROM payment WHERE custormer_id > (SELECT AVG(customer_id) FROM payment);
 
