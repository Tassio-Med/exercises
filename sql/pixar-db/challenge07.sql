USE pixar;
SELECT id FROM movies
	WHERE director = 'Andrew Stanton';
    
DELETE FROM box_office
	WHERE movie_id IN (1, 2, 5, 6, 9);

DELETE FROM movies
	WHERE director = 'Andrew Stanton';
    
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`pixar`.`box_office`, CONSTRAINT `box_office_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`))
