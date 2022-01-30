#### 1- SELECT coutry.name, city.name FROM city LEFT JOIN country ON city.country_id = country.country_id;
#### 2- SELECT payment.payment_id, customer.first_name, customer.last_name FROM customer RIGHT JOIN payment ON customer.customer_id = payment.customer_id;
#### 3- SELECT customer.first_name, customer.last_name, rental.rental_id FROM rental FULL JOIN customer ON rental.customer_id = customer.customer_id;
