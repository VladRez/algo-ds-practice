/*
Full description:
https://www.hackerrank.com/challenges/the-pads/problem

Generate the following two result sets:

Query an alphabetically ordered list of all names in OCCUPATIONS, immediately followed by the first letter of each profession as a parenthetical (i.e.: enclosed in parentheses). For example: AnActorName(A), ADoctorName(D), AProfessorName(P), and ASingerName(S).

Query the number of ocurrences of each occupation in OCCUPATIONS. Sort the occurrences in ascending order, and output them in the following format: 

    There are a total of [occupation_count] [occupation]s.

    where [occupation_count] is the number of occurrences of an occupation in OCCUPATIONS and [occupation] is the lowercase occupation name. If more than one Occupation has the same [occupation_count], they should be ordered alphabetically.

Note: There will be at least two entries in the table for each type of occupation.
*/

SELECT O.name + "(" + left(O.Occupation,1) + ")" FROM OCCUPATIONS O
ORDER BY O.name ASC
SELECT  "There are a total of " + FORMAT(Count(O.Occupation), "#") + " " + LOWER(O.Occupation) + "s."  FROM OCCUPATIONS O
GROUP BY O.Occupation
ORDER BY Count(O.Occupation) ASC