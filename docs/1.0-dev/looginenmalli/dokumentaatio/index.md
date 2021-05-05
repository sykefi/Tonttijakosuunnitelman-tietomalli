---
layout: "default"
title: "TJS - looginen tietomalli - dokumentaatio"
description: ""
page: "dokumentaatio"
modelversion: "1.0-dev"
status: "Keskeneräinen"
---
# Loogisen tason tonttijakosuunnitelmamalli
{:.no_toc}

1. 
{:toc}

## Yleistä

Loogisen tason tietomalli määrittelee kaikille tonttijakosuunnitelman kohteille yhteiset tietorakenteet, joita sovelletaan tonttijaon ilmaisemiseen laadittujen soveltamisohjeiden ja niissä kiinnitettyjen koodistojen sekä elinkaari- ja laatusääntöjen mukaisesti. Looginen tietomalli pyrkii olemaan mahdollisimman riippumaton tietystä toteutusteknologiasta tai tiedon fyysisestä esitystavasta.

## Kaava- ja tonttijakosuunnitelmaprosessin prosessi-integraatio

Kaavatietomallin kaavamääräykset joiden laji-attribuutin arvo on Tonttijako-koodin “Esitontti” tai “Sitova tonttijako laadittava”, ovat lähtötietoja tonttijakosuunnitelman laatimiselle. Kaavakohde siirtyy suoraan tietorakenteena tonttijakosuunnitelman laatimisen prosessiin. Esitonttikohteita laadittaessa laatija tulkitsee kaavassa osoitetut määräykset sisältyväksi esitonttikohteeseen. 

{% include note.html content="Tähän varmaan halutaan viittaukset kyseisiin koodeihin y-alustalla." %}

## Normatiiviset viittaukset
Tonttijakosuunnitelman tietomalli hyödyntää samoja normatiivisia viittauksia kuin kaavatietomallikin. Tämä käsittää seuraavat dokumentit:

* [ISO 639-2:1998 Codes for the representation of names of languages — Part 2: Alpha-3 code][ISO-639-2]
* [ISO 8601-1:2019 Date and time — Representations for information interchange — Part 1: Basic rules][ISO-8601-1]
* [ISO 19103:2015 Geographic information — Conceptual schema language][ISO-19103]
* [ISO 19107:2019 Geographic information — Spatial schema][ISO-19107]
* [ISO 19108:2002 Geographic information — Temporal schema][ISO-19108]
* [ISO 19109:2015 Geographic information — Rules for application schema][ISO-19109]
* [ISO 19505-2:ISO/IEC 19505-2:2012, Information technology — Object Management Group Unified Modeling Language (OMG UML) — Part 2: Superstructure][ISO-19505-2]

{% include question.html content="Nämä ovat kaavatietolajin: mitä on liikaa, mitä puuttuu?" %}

## Standardienmukaisuus

Myös tietomallin standardointi on yhdenmukainen aiemmin luodun kaavatietomallin standardienmukaisuuden kanssa. 

{% include defintionref_tjs.html def="Looginen tonttijakosuunnitelmamalli perustuu [ISO 19109][ISO-19109]-standardin yleinen kohdetietomalliin (General Feature Model, GFM), joka määrittelee rakennuspalikat paikkatiedon ISO-standardiperheen mukaisten sovellusskeemojen määrittelyyn. GFM kuvaa muun muassa metaluokat ```FeatureType```, ```AttributeType``` ja ```FeatureAssociationType```. 
Tonttijakosuunnitelmamalli kaikki tietokohteet, joilla on tunnus ja jota voivat esiintyä erillään toisista kohteista on määritelty kohdetyypeinä (stereotyyppi ```FeatureType```. Sellaiset tietokohteet, joilla ei ole omaa tunnusta ja jotka voivat esiintyä vain kohdetyyppien attribuuttien arvoina on määritelty [ISO 19103][ISO-19103]-standardin ```DataType```-stereotyypin avulla. Lisäksi [HallinnollinenAlue](#hallinnollinenalue) ja [Organisaatio](#organisaatio) on mallinnettu vain rajapintojen (```Interface```) avulla, koska on niitä ei ole tarpeen kuvata tonttijakosuunnitelmamallissa yksityiskohtaisesti, ja on todennäköistä, että suunnitelmia ylläpitävät tietojärjestelmät tarjovat niille konkreettiset toteuttavat luokat.

[ISO 19109][ISO-19109] -standardin lisäksi tonttijakosuunnitelmamalli perustuu muihin paikkatiedon ISO-standardeihin, joista keskeisimpiä ovat [ISO 19103][ISO-19103] (UML-kielen käyttö paikkatietojen mallinnuksessa), [ISO 19107][ISO-19107] (sijaintitiedon mallintaminen) ja [ISO 19108][ISO-19108] (aikaan sidotun tiedon mallintaminen)." %}

### Muulla määritellyt luokat ja tietotyypit

#### CharacterString

Kuvaa yleisen merkkijonon, joka koostuu 0..* merkistä, merkkijonon pituudesta, merkistökoodista ja maksimipituudesta. Määritelty rajapinta-tyyppisenä [ISO 19103][ISO-19103]-standardissa.

#### LanguageString

Kuvaa kielikohtaisen merkkijonon. Laajentaa [CharacterString](#characterstring)-rajapintaa lisäämällä siihen ```language```-attribuutin, jonka arvo on ```LanguageCode```-koodiston arvo. Kielikoodi voi [ISO 19103][ISO-19103]-standardin määritelmän mukaan olla mikä tahansa ISO 639 -standardin osa.

#### Number

Kuvaa yleisen numeroarvon, joka voi olla kokonaisluku, desimaaliluku tai liukuluku. Määritelty rajapintana [ISO 19103][ISO-19103]-standardissa.

#### Integer

Laajentaa [Number](#number)-rajapintaa kuvaamaan numeron, joka on kokonaisluku ilman murto- tai desimaaliosaa. Määritelty rajapintana [ISO 19103][ISO-19103]-standardissa.

#### Decimal

Laajentaa [Number](#number)-rajapintaa kuvaamaan numeron, joka on desimaaliluku. Decimal-rajapinnan toteuttava numero voidaan ilmaista virheettä yhden kymmenysosan tarkkuudella. Määritelty rajapintana [ISO 19103][ISO-19103]-standardissa. Decimal-numeroita käytetään, kun desimaalien käsittelyn tulee olla tarkkaa, esim. rahaan liityvissä tehtävissä.

#### Real

Laajentaa [Number](#number)-rajapintaa kuvaamaan numeron, joka on tarkkudeltaan rajoitettu liukuluku. Real-rajapinnan numero voi ilmaista tarkasti vain luvut, jotka ovat 1/2:n (puolen) potensseja. Määritelty rajapintana [ISO 19103][ISO-19103]-standardissa. Käytännössä esitystarkkuus riippuu numeron tallentamiseen varattujen bittien määrästä, esim. ```float (32-bittinen)``` (tarkkuus 7 desimaalia) ja ```double (64-bittinen)``` (tarkkuus 15 desimaalia).

#### TM_Object

Aikamääreiden yhteinen yläluokka, käytetään, mikäli arvo voi olla joko yksittäinen ajanhetki tai aikaväli. Määritelty luokkana [ISO 19108][ISO-19108]-standardissa. 

#### TM_Instant

Kuvaa yksittäisen ajanhetken 0-ulotteisena ajan geometriana, joka vastaa pistettä avaruudessa. Määritelty luokkana [ISO 19108][ISO-19108]-standardissa. Aikapisteen arvo on määritelty ```TM_Position```-luokalla yhdistelmänä [ISO 8601][ISO-8601-1]-standin mukaisia päivämäärä- tai kellonaika-kenttiä tai näiden yhdistelmää, tai muuta ```TM_TemporalPosition```-luokan avulla kuvattua aikapistettä. Viimeksi mainitun luokan attribuutti ```indeterminatePosition``` mahdollistaa ei-täsmällisen ajanhetken ilmaisemisen liittämällä mahdolliseen arvoon luokittelun tuntematon, nyt, ennen, jälkeen tai nimi.

#### TM_Period

Kuvaa aikavälin [TM_Instant](#tm_instant)-tyyppisten ```begin```- ja ```end```-attribuuttien avulla. Molemmat attribuutit ovat pakollisia, mutta voivat sisältää tuntemattoman arvon  ```indeterminatePosition = unknown``` -attribuutin arvon avulla annettuna. Määritelty luokkana [ISO 19108][ISO-19108]-standardissa.

#### URI

Määrittää merkkijonomuotoisen Uniform Resource Identifier (URI) -tunnuksen [ISO 19103][ISO-19103]-standardissa. URIa voi käyttää joko pelkkänä tunnuksena tai resurssin paikantimena (Uniform Resource Locator, URL).

#### Geometry

Kaikkien geometria-tyyppien yhteinen rajapinta [ISO 19107][ISO-19107]-standardissa. Tyypillisimpiä [ISO 19107][ISO-19107]-standardin Geometry-rajapintaa laajentavia rajapintoja ovat ```Point```, ```Curve```, ```Surface``` ja ```Solid``` sekä ```Collection```, jota käyttämällä voidaan kuvata geometriakokoelmia (multipoint, multicurve, multisurface, multisolid).

#### Point
Täsmälleen yhdestä pisteestä koostuva geometriatyyppi. Määritelty rajapintana [ISO 19107][ISO-19107]-standardissa.

## Tonttijakomallin yleispiirteet

UML-mallin suunnittelussa on kiinnitetty erityistä huomiota siihen, että malli tarjoaa hyvän yhteentoimivuuskehikon tulevaisuuden kaavatietojen tietomallipohjaiseen kuvaamiseen erilaisissa tietojärjestelmissä. Malliin on tarkoituksellisesti jätetty useita laajennusmahdollisuuksia käyttäen abstrakteja luokkia ja koodistoja. Käyttämällä yhteistä luokkarakennetta ja erikoistamala koodistoja kaavalajikohtaisesti on saatu aikaan malli, joka mahdollistaa eri kaavalajien käsittelyn, tiedonsiirron ja tallentamisen samojen tietojärjestelmien ja -rakenteiden avulla, mutta tarjoaa kuitenkin riittävät mahdollisuudet eri kaavalajien erityispiirteiden huomioimiseen niiden tietosisällön ja merkityksen osalta.

Tonttijakomallin UML-luokkakaaviot ovat saatavilla erillisellä [UML-kaaviot](../uml/)-sivulla.

{% include note.html content="Kopioitu suoraan kaavatietomallilta, muutettu vain tietomallin nimi. Lisäksi KTM:llä UML-kaaviot jaettu kahdeksi, MKP ja kaavatiedot." %}

## Tonttijakomallin luokat

### AbstraktiVersioituObjekti
Englanninkielinen nimi: **AbstractVersionedObject**

Stereotyyppi: FeatureType (kohdetyyppi)

Yhteinen yläluokka kaikille kaavatietomallin versiohallituille luokille. Kuvaa kaikkien kohdetyyppien yhteiset ominaisuudet ja assosiaatiot.

**Ominaisuudet**

Nimi             | Name               | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------|------------------------------------
paikallinenTunnus| localId            | [CharacterString](#characterstring)     | 0..1            | kohteen pääavain (id)
nimiavaruus      | namespace          | [URI](#uri)                 | 0..1            | tunnusten nimiavaruus
viittausTunnus   | referenceId        | [URI](#uri)                 | 0..1            | johdettu nimiavaruudesta, luokan englanninkielisestä nimestä ja paikallisesta tunnuksesta
identiteettiTunnus | identityId       | [CharacterString](#characterstring)     | 0..1            | kohteen versioriippumaton tunnus
tuottajakohtainenTunnus | producerSpecificId | [CharacterString](#characterstring) | 0..1         | kohteen tunnus tuottajatietojärjestelmässä
viimeisinMuutos  | latestChange       | [TM_Instant](#tm_instant)          | 0..1            | ajanhetki, jolloin kohteen tietoja on viimeksi muutettu tuottajatietojärjestelmässä
tallennusAika    | storageTime        | [TM_Instant](#tm_instant)          | 0..1            | ajanhetki, jolloin kohde on tietojärjestelmään

{% include question.html content="Tämä kaavatietomallin, muokataan tarpeen mukaan." %}

**Assosiaatiot**

Roolinimi        | Role name          | Kohde               | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------|------------------------------------
korvaaObjektin   | replacesObject     | [AbstraktiVersioituObjekti](#abstraktiversioituobjekti) | 0..* | kohteen versio, jonka tämä versio korvaa. Voi olla saman kohteen edellinen versio tai poistuva kohde, jonka tämä kohde korvaa. Oltava saman luokan instanssi.
korvattuObjektilla | replacedByObject | [AbstraktiVersioituObjekti](#abstraktiversioituobjekti) | 0..* | kohteen versio, jolla tämä versio on korvattu. Voi olla saman kohteen seuraava versio tai uusi kohde, jolla tämä kohde on korvattu. Oltava saman luokan instanssi.

{% include question.html content="Tämä kaavatietomallin, muokataan tarpeen mukaan." %}

### Luokka
Englanninkielinen nimi: 

Stereotyyppi:

*Sanallinen kuvaus*
<!-- Näin voit luoda yhteentoimivuusalustan koodistoon koodiin viittaavan boksin.
{% include codelistref.html id="RY_KaavanVuorovaikutustapahtumanLaji" name="Vuorovaikutustapahtuman laji (asema- ja yleiskaava)" %}
-->
**Ominaisuudet**

Nimi             | Name               | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------|------------------------------------
*täytä*             | *täytä*               | *täytä* | *täytä* | *täytä*


**Assosiaatiot**

Roolinimi        | Role name          | Kohde               | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------|------------------------------------
*täytä* | *täytä*      | *täytä* | *täytä* | *täytä*

[ISO-8601-1]: https://www.iso.org/standard/70907.html "ISO 8601-1:2019 Date and time — Representations for information interchange — Part 1: Basic rules"
[ISO-639-2]: https://www.iso.org/standard/4767.html "ISO 639-2:1998 Codes for the representation of names of languages — Part 2: Alpha-3 code"
[ISO-19103]: https://www.iso.org/standard/56734.html "ISO 19103:2015 Geographic information — Conceptual schema language"
[ISO-19107]: https://www.iso.org/standard/66175.html "ISO 19107:2019 Geographic information — Spatial schema"
[ISO-19108]: https://www.iso.org/standard/26013.html "ISO 19108:2002 Geographic information — Temporal schema"
[ISO-19109]: https://www.iso.org/standard/59193.html "ISO 19109:2015 Geographic information — Rules for application schema"
[ISO-19505-2]: https://www.iso.org/standard/52854.html "ISO/IEC 19505-2:2012, Information technology — Object Management Group Unified Modeling Language (OMG UML) — Part 2: Superstructure"