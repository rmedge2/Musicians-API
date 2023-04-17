## COR MUSICIANS API

This is an API of musicians.

Heare are the request methods:
| **Method** | **Path**  | **Description** |
|------------|-----------|-----------------|
|**Get**| `/bassists` | -Returns a list of all available bassist objects
|**Get**| `/bassists/:id`|-Returns a single bassist object by its id<br> -Example response from `/bassists/2`:<br>{<br>"id": "2",<br>"instrument": "Bass",<br>"name": "Jaco Pastorius"<br>"birthYear": "1951"<br>}<br>
|**Get**|`/pianists`|-Returns a list of all available pianist objects|
|**Get**|`/pianists/:id`|- Returns a single pianist object by its id<br>- Example Response from `/pianists/2`:<br>{<br> "id": "2", <br>"instrument": "piano",<br>"name": "Oscar Peterson",<br> "birthYear": "1925"<br>}|
|**Get**|`/drummers`|- Returns a list of all available drummer objects|
|**Get**|`/drummers/:id`|- Returns a single drummer object by its id<br>- Ekample Response from `/drummers/2`:<br>{<br>"id": "2",<br>"instrument": "Drums",<br>"name": "Dennis Chambers",<br>"birthYear": "1959"<br>} 
  