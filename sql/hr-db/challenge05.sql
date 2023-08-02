SELECT department_id, AVG(salary) 'average_salary' , COUNT(*) 'number_of_employees'
FROM hr.employees
GROUP BY department_id
HAVING number_of_employees > 10;