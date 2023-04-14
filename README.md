## COR MUSICIANS API

This is an API of musicians.

Heare are the request methods:

`/bassists` - GET
- Returns a list of all available bassist objects

`/bassists/:id` - Get
- Returns a single bassist object by its id
- Example response from `/bassists/2`:
```
    {
        "id": "2",
        "instrument": "Bass",
        "name": "Jaco Pastorius",
        "birthYear": "1951"
    }
```

`/pianists` - GET
- Returns a list of all available pianist objects

`/pianists/:id` - GET
- Returns a single pianist object by its id
- Example Response from `/pianists/2`:
```
    {
        "id": "2",
        "instrument": "piano",
        "name": "Oscar Peterson",
        "birthYear": "1925"
    }
```

`/drummers` - GET
- Returns a list of all available drummer objects

`/drummers/:id` - GET
- Returns a single drummer object by its id
- Ekample Response from `/drummers/2`:
```
    {
        "id": "2",
        "instrument": "Drums",
        "name": "Dennis Chambers",
        "birthYear": "1959"
    }   
```