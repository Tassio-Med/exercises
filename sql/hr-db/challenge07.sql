-- SELECT * FROM hr.employees;

SELECT employee_id, first_name, DAY(hire_date) 'hire_day'
FROM hr.employees;