---
layout: "default"
title: "Kaavatietomalli - looginen tietomalli - elinkaarisäännöt"
description: ""
page: "elinkaarisaannot"
modelversion: "1.0"
status: "Keskeneräinen"
---
# Elinkaarisäännöt
{:.no_toc}

1. 
{:toc}

## Johdanto

Kaavan (tietojärjestelmän objektin, paikkatietokohde) elinkaari, JHS-viittaus

## Kaavan elinkaaren hallinnan periaatteet
Kaavatietomalli mahdollistaa tunnistettavien kaavan tietokohteiden eri kehitysversioiden erottamisen toisistaan. Kullakin tietomallin kohteella on sekä sen tosimaailman identiteettiin liittyvä ns. identiteettitunnus että yksittäisen tallennusversion tunnus (versiotunnus). Tallennettaessa uutta versiota samasta kaavasta tai sen sisältämästä tietokohteesta, sen identiteettitunnus pysyy ennallaan, mutta sen paikallinen tunnus ja versiotunnus muuttuvat. Kaava katsotaan samaksi, kun sen liittyy samaan kaavoitusprosessiin, ja siitä käytetään samaa ennen kaavan virelletuloa haettavaa kaavatunnusta. Muiden kaavatietomallin versioitavien objektien suhteen samuuden määritteleminen on tietoja yhteiseen tietovarastoon tuottavien järjestelmien vastuulla: mikäli objektilla on tallennettavaksi lähetettäessä saman identititeettitunnus kuin aiemmin tallennetulla tietokohteella, katsotaan sillä tarkoitettavan, että uusi objekti on saman tietokohteen uusi versio.

Kaavatietomallin mukaisten aineistojen tallentamisessa erotetaan toisistaan tietojen tuottaminen ja muokkaus sisäisesti niiden tuottamiseen ja muokkaamiseen käytettävissä tietojärjestelmissä ja niiden hallinta yhteisessä versiohallitussa tietovarastossa, kuten RYTJ. Kukin kaavan tai sen osien tallennus yhteiseen tietovarastoon muodostaa aina pysyvästi tallennettavan uuden version tallennettavista tiedoista, jota ei voi myöhemmin muokata. Näin taataan ulkoisten viittausten eheys, sillä kaavan kaikkien kohteiden pysyvät tunnukset viittaavat aina vain tiettyn muuttumattomaan versioon viittatusta kohteesta. Suositeltavaa on, että kaikki tallennusversiot myös pidetään tallessa, jotta mahdolliset linkit eivät mene rikki, vaikka esim. tiettyä kaavan luonnosversiota korjattaisiin. Yhteisessä tietovarastossa ei siis tavallisesti koskaan muuteta tai poisteta sinne kerran tallennettua tietoa. Yhteisen tietovaraston hallintajärjestelmässä voidaan kuitenkin niin haluttaessa tarkistaa onko jokin kaava tai sen osa todellisuudessa muuttunut vai täysin identtinen sen edellisen version kanssa, ja olla tallentamatta uusia kopioita identtisistä saman tietokohteen versioista.

Kaavatietomallissa ei ole mielekästä asettaa vaatimuksia kaavatietoa tuottavien tietojärjestelmien tunnusten ja versioden hallintaan, vaan tietomallissa tulee varautua siihen, että yhteiseen tietovarastoon tallennettavia tietoja on muokattu ja tallennettu sisäisesti tuntematon määrä kertoja ennen ensimmäistä viemistä yhteiseen tietovarastoon, ja samoin tuntematon määrä kertoja kunkin yhteiseen varastoon vietävän version välillä. Näin ollen on mahdollista, että kaavasta voi olla joissain tietojärjestelmissä tallennettuna paikallisia versiota, joita ei ole koskaan viety yhteiseen kaavatietovarastoon.

### HTTP URI -muotoiset tunnukset

## Tunnukset ja niiden hallinta

### Identiteettitunnus (identityId)
Identiteettitunnus yhdistää saman tunnistettavan kaavan tietokohteen kehitysversiot toisiinsa.

Kahdella kaavatietomallin versiotavalla objektilla voi olla sama identiteettitunnus ainoastaan, mikäli kaikki seuraavista ehdoista ovat tosia:

* Molemmat objektit kuvaavat saman kaavan tai sen sisältämän, nimettävissä olevan tietokohteen kehityskaaren eri tiloja.
* Molemmat objektit liittyvät samaan kaavaan.
* Molemmat objektit ovat saman loogisen tietomallin luokan edustajia.

Yksittäisen kaavan tietokohteen koko ko. tietojärjestelmään tallennettu kehityshistoria saadaan noutamalla kaikki ko. tyyppisen tietokohteen objektit, joilla on sama identiteettitunnus.

Yhteinen kaavatietovarasto on vastuussa uusien identiteettitunnusten luomisesta tarvittaessa tallennustapahtumien yhteydessä, ja niiden välittämisestä tiedoksi tallentavalle tietojärjestelmälle. Tallentavan tietojärjestelmän tulee tallentaa itselleen kopiot tietovaraston tallennustapahtuman yhteydessä palautamistä kaavan ja sen tietokohteiden identiteettitunnuksista, sillä ne tulee sisällyttää ko. tietokohteiden seuraavien versioden tallennettavaksi lähetettäviin objekteihin.

Mikäli tallennettavalle tietokohteelle ei ole annettu identiteettitunnusta, tai tietovarasto ei sisällä saman luokan tietokohdetta, jolla on ko. identiteettitunnus, luodaan ko. kohteelle uusi identiteettitunnus. Mikäli tietovarasto sisältää saman luokan tietokohteen, jolla on ko. identiteettitunnus, talletaan se sellaisenaan objektin mukana (saman kohteen uusi versio).

Identiteettitunnus on HTTP URI -muotoinen, ja sen on suositeltavaa ohjautua aina ko. tietokohteen uusimman lainvoimaisen tai kumotun version tietosisältöön kulloinkin toiminnassa olevassa rajapintapalvelussa.

Esimerkki: ```http://uri.suomi.fi/object/rytj/kaava/SpatialPlan/640bff6b-c16a-4947-af8d-d86f89106be1```.

### paikallinen tunnus / kohdetunnus (localId / feature-id)
Paikallinen tunnus yksilöi kaavan tietokohteen yhden, keskitettyyn kaavatietovaraston tallentun kehitysversion kaavatietovaraston sisällä. 

Yhteinen kaavatietovarasto on vastuussa uusien paikallisten tunnusten luomisesta kullekin tallennettavalle tietokohteelle jokaisen tallennustapahtumien yhteydessä, ja niiden välittämisestä tiedoksi tallentavalle tietojärjestelmälle. Tallentavan tietojärjestelmän ei tarvitse tallentaa luotuja paikallisia tunnuksia itselleen seuraavia tallennuksia varten, sillä tietokohteiden mahdolliset paikallinen tunnus -kenttien arvot korvataan aina uusilla tietokohteiden tallennuksen yhteydessä.

Paikallinen tunnus on UUID-muotoinen ja sen muodostamisessa tulee välttää merkkejä, jotka joudutaan URL-koodaamaan rajapintapalvelujen kutsuissa. Paikkatietokohteen paikallista tunnusta käytetään fyysisten tietomallien pääavaimena, esim. GeoJSON Feature ```id```-omaisuuden ja GML:n ```gml:id```-attribuutin arvona, ja siten esimerkiksi OGC Web Feature Service (WFS) - ja OGC API - Features -rajapintapalvelujen paikkatietokohteen yksilöivissä kyselyissä.

Esimerkki: ```640bff6b-c16a-4947-af8d-d86f89106be1.1```.

### Tunnusten nimiavaruus (namespace)
Tunnusten nimiavaruus kuvaa kaavatietomallin kaikkien tietokohteiden HTTP URI -muotoisten identiteetti- ja versiotunnusten yhteisen alkuosan yhden tietovaraston (esim.RYTJ) sisällä.

Esimerkki: ```http://uri.suomi.fi/object/rytj/kaava/```.

### Versiotunnus (versionId)
Versiotunnus yksilöi kaavan tietokohteen yhden, keskitettyyn kaavatietovaraston tallentun kehitysversion globaalisti.

Yhteinen kaavatietovarasto on vastuussa uusien versiotunnusten luomisesta kullekin tallennettavalle tietokohteelle jokaisen tallennustapahtumien yhteydessä, ja niiden välittämisestä tiedoksi tallentavalle tietojärjestelmälle. Tallentavan tietojärjestelmän ei tarvitse tallentaa luotuja versiotunnuksia itselleen seuraavia tallennuksia varten, sillä tietokohteiden mahdolliset versiotunnus-kenttien arvot korvataan aina uusilla tietokohteiden tallennuksen yhteydessä.

Versiotunnus on HTTP URI -muotoinen, ja sen on suositeltavaa ohjautua aina ko. tietokohteen version tietosisältöön kulloinkin toiminnassa olevassa rajapintapalvelussa. Versiotunnus muodostuu tunnusten nimiavaruudesta, tietokohteen luokan nimestä ja paikallisesta tunnuksesta yhdessä.

Esimerkki: ```http://uri.suomi.fi/object/rytj/kaava/SpatialPlan/640bff6b-c16a-4947-af8d-d86f89106be1.1```.

### Lähtötietojärjestelmätunnus (originSystemId)
Kaavatietoa tuottavat järjestelmät voivat niin halutessaan käyttää lähtötietojärjestelmän tunnusta niiden omien tietojärjestelmäspesifisten tunnusten tallentamiseen yhteiseen kaavatietovarastoon. Näitä tunnuksia ei koskaan muuteta tallennettaessa yhteiseen tietovarastoon, ja ne palautetaan sellaisenaan tietovarastosta haettaessa mikäli ne on annettu tallennettavien tietokohteiden osana. Tietojärjestelmät voivat käyttää lähtötietojärjestelmätunnuksia esimerkiksi kohdistamaan yhteiseen tietovarastoon ja paikallisiin tietojärjestelmiin tallennettuja tietokohteita.

### Kaavatunnus

Kaavatunnus on kaavalle ennakkon haettava kansallisesti yksilöivä tunnus, joka tulee aina antaa tallettavan Kaava-luokan objektin osana, myös kaavan ensimmäisen tallennuksen yhteydessä. Hyväksyttävä kaavatunnus ei muutu tallennuksen yhteydessä.

## Muutokset ja tietojen versionti

## Viittaukset kaavatietomallin sisällä

## Kaavan ja sen tietojen kumoaminen

## Esimerkkejä elinkaaritapahtumista

### Kaavan luominen ja muokkaus ennen ensimmäistä RYTJ-tallennusta

### Kaavan ensimmäinen RYTJ-tallennus

### Kaavan muokatun version RYTJ-tallennus

### Käsittely- tai vuorovaikutustapahtuman lisääminen

### Kaavan hyväksyminen

### Kaavan voimaantulosta kuuluttaminen

### Kaavan osittainen määrääminen voimaan

### Kaavan, sen yksittäisten kaavamääräyskohteiden tai kaavamääräysten kumoaminen



