# CreateSuperElement.js
### *Jednoduché vytváření HTML objektů v JS!*

CreateSuperElement.js je JavaScriptová knihovna, která obsahuje dvě hlavní funkce:  
**createSuperElement()** and **createSuperTable()**.

## Základy

Funkce **createSuperElement()** vrátí HTML element, který můžeme obohatit o atributy a vnitřní HTML, pokud je uvedeme v parametrech funkce.  
Funkce **createSuperTable()** využívá předchozí funkci a vrací HTML tabulku, kterou vytvoří na základě dat, které uvedeme v parametrech funkce.

#### JSFiddle demonstrace [zde](https://jsfiddle.net/BlueManCZ/10waoshv/).

## Použití

Stáhněte soubor **CreateSuperElement.js** vedle vašeho .html souboru a v .html souboru importujte následujícím řádkem:
```
<script type="text/javascript" src="CreateSuperElement.js"></script>
```
Následně můžete HTML elementy v JS vytvářet v následujícím tvaru:
```
var element = createSuperElement(type, attributes, innerHTML, style);
```
- **type** je povinný typ elementu v řetězci. Např: **"h1"**, **"div"** nebo **"img"**
- **atributes** je nepovinný slovník atributů. Např: **{"align":"center", "onclick":"funkce()"}**
- **innerHTML** může být další element, obyčejný text nebo může zůstat prázdný.
- **style** je nepovinný slovník CSS stylů ve tvaru: **{"color":"red", "font-weight":"bold"}**


```
var tabulka = createSuperTable(data, attributes);
```
- **data** je multidimenzionální pole, které svou strukturou udává strukturu tabulky. Např: **[[['Cell1A'],['Cell2A']],[['Cell1B'],['Cell2B']]]**
```
[
[['Cell1A'], ['Cell2A']],
[['Cell1B'], ['Cell2B']]
]
```
- **atributes** bude slovník atributů. Např: **{"align":"center", "onclick":"funkce()"}**
