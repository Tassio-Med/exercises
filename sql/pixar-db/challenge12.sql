USE pixar;

SELECT
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
   theater t
LEFT JOIN
	movies m 
ON t.id = m.theater_id
ORDER BY t.name;