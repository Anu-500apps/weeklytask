-- create a table
CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  gender TEXT NOT NULL
);
-- insert some values
INSERT INTO students VALUES (111, 'A', '');
INSERT INTO students VALUES (102, 'radha', 'Female');
INSERT INTO students VALUES (103, 'C', 'Female');
INSERT INTO students VALUES (104, 'D', 'male');
INSERT INTO students VALUES (105, 'navya', 'male');
INSERT INTO students VALUES (106, 'F', 'Female');
INSERT INTO students VALUES (107, 'taddi', 'male');
-- fetch some values
SELECT * FROM students Where id>105 AND gender='female';
-- UPDATE students
-- SET name = 'anu', gender= 'Female'
-- WHERE id = 101;
UPDATE students SET name="Anu" where id=101;
select * from students;
-- SELECT * FROM students
-- WHERE Name LIKE 'a%';
-- SELECT * FROM students
-- WHERE id NOT BETWEEN 102 AND 106;
-- SELECT * FROM students
-- WHERE id BETWEEN 101 AND 105;
CREATE TABLE employe (
  id INTEGER PRIMARY KEY,
  em_name TEXT NOT NULL,
  em_salary TEXT NOT NULL
);
-- insert some values
INSERT INTO employe VALUES (111, 'Anu', '30000');
INSERT INTO employe VALUES (102, 'radha', '20000');
INSERT INTO employe VALUES (143, 'taddi', '30000');
INSERT INTO employe VALUES (114, 'anusha', '35000');
INSERT INTO employe VALUES (105, 'sruthi', '40000');
INSERT INTO employe VALUES (106, 'navya', '20000');
INSERT INTO employe VALUES (100, 'yamu', '25000');
SELECT*from employe;
SELECT students.id, employe.em_name
FROM students
INNER JOIN employe ON students.id = employe.id;
-- SELECT students.id, employe.em_name
-- FROM students
-- LEFT JOIN employe ON students.id = employe.id
-- ORDER BY students.name;
-- SELECT students.id, employe.em_name
-- FROM students
-- LEFT JOIN employe ON students.id = employe.id
-- ORDER BY students.name;
SELECT students.id, employe.em_name
FROM students
RIGHT JOIN employe ON students.id = employe.id
ORDER BY employe.id;
SELECT * FROM employe
WHERE em_salary>20000; 
SELECT * FROM employe
WHERE em_name IN ('radha', 'taddi');

