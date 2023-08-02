SET SQL_SAFE_UPDATES = 1;

UPDATE hr.employees 
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE "515%";

-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
