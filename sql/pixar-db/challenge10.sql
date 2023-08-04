USE pixar;
SELECT m.title AS "filme", b.rating AS "avaliação"
FROM movies AS m
INNER JOIN  box_office AS b
ON m.id = b.movie_id
ORDER BY b.rating DESC;