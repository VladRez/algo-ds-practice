/*
Full description:
https://www.hackerrank.com/challenges/occupations/problem

Pivot the Occupation column in OCCUPATIONS so that each Name is sorted alphabetically and displayed underneath its corresponding Occupation. The output column headers should be Doctor, Professor, Singer, and Actor, respectively.

Note: Print NULL when there are no more names corresponding to an occupation.

*/

SELECT 
  MAX(Doctor)
, MAX(Professor)
, MAX(Singer)
, MAX(Actor)
FROM
    (
    SELECT 
      CASE WHEN Occupation = 'Doctor' THEN name END AS Doctor
    , CASE WHEN Occupation = 'Professor' THEN name END AS Professor
    , CASE WHEN Occupation = 'Singer' THEN name END AS Singer
    , CASE WHEN Occupation = 'Actor' THEN name END AS Actor
    , RANK() OVER (
                    PARTITION BY Occupation 
                    ORDER BY Name ASC
                    ) AS RankByOccupation
        FROM Occupations
    ) DERRIVED
GROUP BY DERRIVED.RankByOccupation