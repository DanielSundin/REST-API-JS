# Ett javascript REST-API.

### Json-objekt sparas lokalt i en array. Objekten har 4 egenskaper: id, namn, alkoholhalt och beska. Jag bröt ut routerfounktionerna i egna filer: controller och router.

## end-points:
* Get (alla objekt returneras)
* Post (nytt objekt med autoinkrementerande ID)
* Put (förändra en egenskap i ett objekt)
* Delete ( Sudda ut ett objekt i arrayen)

# Uppfyllda krav: (G)
* 4 endpoints 
* alla endpoints kan nås via server.rest
* Datan sparas lokalt. Dock ej i server.js, utan controllerfilen. Jag fick ett fel om cirkulär logik om jag lät arrayen ligga i just den filen. Hade kunna lösas genom att ha allt i server.js men jag föredrar att lyfta ut funktionalitet som jag gjort.
* Git har används för versionshistorik, och projektet är uppladdat på GitHub ( https://github.com/DanielSundin/REST-API-JS).
* Readme-fil finns
* inlämnad i tid

/Daniel Sundin