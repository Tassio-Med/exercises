USE pixar;
SELECT m.title, (b.domestic_sales + b.international_sales) AS "Vendas"
FROM movies AS m
INNER JOIN  box_office AS b 
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;

