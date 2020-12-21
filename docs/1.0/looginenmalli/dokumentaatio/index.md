---
layout: "default"
title: "Kaavatietomalli - looginen tietomalli - dokumentaatio"
description: ""
page: "dokumentaatio"
modelversion: "1.0"
status: "Keskeneräinen"
---
# Loogisen tason kaavatietomalli
{:.no_toc}

1. 
{:toc}

## Yleistä
Kaavatietomalli määrittelee kaikille kaavalajeille yhteiset tietorakenteet, joita sovelletaan kaavatiedon ilmaisemiseen kullekin kaavalajille laadittujen soveltamisohjeiden ([asemakaava](../../soveltamisohjeet/asemakaava/), [yleiskaava](../../soveltamisohjeet/yleiskaava/)) ja niissä kiinnitettyjen koodistojen sekä [elinkaari](../elinkaarisaannot.html)- ja [laatusääntöjen](../laatusaannot.html) mukaisesti.

## Termit ja lyhenteet

## Normatiiviset viittaukset

1. [ISO 639-2:1998 Codes for the representation of names of languages — Part 2: Alpha-3 code][ISO-639-2]
1. [ISO 8601-1:2019 Date and time — Representations for information interchange — Part 1: Basic rules][ISO-8601-1]
1. [ISO 19103:2015 Geographic information — Conceptual schema language][ISO-19103]
1. [ISO 19107:2019 Geographic information — Spatial schema][ISO-19107]
1. [ISO 19108:2002 Geographic information — Temporal schema][ISO-19108]
1. [ISO 19109:2015 Geographic information — Rules for application schema][ISO-19109]
1. [ISO 19115:2003/COR 1:2006 Geographic information — Metadata — Technical Corrigendum 1][ISO-19115_2006] (päivitetty standardilla ISO 19115-1:2014)

[ISO-8601-1]: https://www.iso.org/standard/70907.html "ISO 8601-1:2019 Date and time — Representations for information interchange — Part 1: Basic rules"
[ISO-639-2]: https://www.iso.org/standard/4767.html "ISO 639-2:1998 Codes for the representation of names of languages — Part 2: Alpha-3 code"
[ISO-19103]: https://www.iso.org/standard/56734.html "ISO 19103:2015 Geographic information — Conceptual schema language"
[ISO-19107]: https://www.iso.org/standard/66175.html "ISO 19107:2019 Geographic information — Spatial schema"
[ISO-19108]: https://www.iso.org/standard/26013.html "ISO 19108:2002 Geographic information — Temporal schema"
[ISO-19109]: https://www.iso.org/standard/59193.html "ISO 19109:2015 Geographic information — Rules for application schema"
[ISO-19115_2006]: https://www.iso.org/standard/44361.html "ISO 19115:2003/COR 1:2006 Geographic information — Metadata — Technical Corrigendum 1"

## Standardienmukaisuus

### Muulla määritellyt luokat ja tietotyypit

#### CharacterString

Kuvaa yleisen merkkijonon, joka koostuu 0..* merkistä, merkkijonon pituudesta, merkistökoodista ja maksimipituudesta. Määritelty rajapinta-tyyppisenä [ISO 19103][19103]-standardissa.

#### LanguageString

Kuvaa kielikohtaisen merkkijonon. Laajentaa [CharacterString](#characterstring)-rajapintaa lisäämällä siihen ```language```-attribuutin, jonka arvo on ```LanguageCode```-koodiston arvo. Kielikoodi voi [ISO 19103][ISO-19103]-standardin määritelmän mukaan olla mikä tahansa ISO 639 -standardin osa.


#### TM_Object

Aikamääreiden yhteinen yläluokka, käytetään, mikäli arvo voi olla joko yksittäinen ajanhetki tai aikaväli. Määritelty luokkana [ISO 19108][ISO-19108]-standardissa. 

#### TM_Instant

Kuvaa yksittäisen ajanhetken 0-ulotteisena ajan geometriana, joka vastaa pistettä avaruudessa. Määritelty luokkana [ISO 19108][ISO-19108]-standardissa. Aikapisteen arvo on määritelty ```TM_Position```-luokalla yhdistelmänä [ISO 8601][ISO-8601-1]-standin mukaisia päivämäärä- tai kellonaika-kenttiä tai näiden yhdistelmää, tai muuta ```TM_TemporalPosition```-luokan avulla kuvattua aikapistettä. Viimeksi mainitun luokan attribuutti ```indeterminatePosition``` mahdollistaa ei-täsmällisen ajanhetken ilmaisemisen liittämällä mahdolliseen arvoon luokittelun tuntematon, nyt, ennen, jälkeen tai nimi.

#### TM_Period

Kuvaa aikavälin [TM_Instant](#tm_instant)-tyyppisten ```begin```- ja ```end```-attribuuttien avulla. Molemmat attribuutit ovat pakollisia, mutta voivat sisältää tuntemattoman arvon  ```indeterminatePosition = unknown``` -attribuutin arvon avulla annettuna. Määritelty luokkana [ISO 19108][ISO-19108]-standardissa.

#### URI

Määrittää merkkijonomuotoisen Uniform Resource Identifier (URI) -tunnuksen [ISO 19103][ISO-19103]-standardissa.

#### URL

Uniform Resource Locator, kuvattu [ISO 19115:2003][ISO-19115_2006]-standardissa viittaamalla [IETF RFC 1738](https://tools.ietf.org/html/rfc1738)- ja [IETF RFC 2056](https://tools.ietf.org/html/rfc2056)-standardeihin. Huom, ei mukana päivitetyssä ISO 19115-1:2014 -standardissa.

#### Geometry

Kaikkien geometria-tyyppien yhteinen rajapinta [ISO 19107][ISO-19107]-standardissa.

#### Point

Täsmälleen yhdestä pisteestä koostuva geometriatyyppi. Määritelty rajapintana [ISO 19107][ISO-19107]-standardissa.

#### Surface

Geometriatyyppi joka on rajaviivojen avulla määritelty pinta. Määritelty rajapintana [ISO 19107][ISO-19107]-standardissa.

## Kaavatietomallin yleispiirteet

## RYTJ-ydin

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

**Assosiaatiot**

Roolinimi        | Role name          | Kohde               | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------|------------------------------------
korvaaObjektin   | replacesObject     | [AbstraktiVersioituObjekti](#abstraktiversioituobjekti) | 0..* | kohteen versio, jonka tämä versio korvaa. Voi olla saman kohteen edellinen versio tai poistuva kohde, jonka tämä kohde korvaa. Oltava saman luokan instanssi.
korvattuObjektilla | replacedByObject | [AbstraktiVersioituObjekti](#abstraktiversioituobjekti) | 0..* | kohteen versio, jolla tämä versio on korvattu. Voi olla saman kohteen seuraava versio tai uusi kohde, jolla tämä kohde on korvattu. Oltava saman luokan instanssi.

### AbstraktiMaankayttoasia
Englanninkielinen nimi: **AbstractLandUseMatter**

Erikoistaa luokkaa [AbstraktiVersioituObjekti](#abstraktiversioituobjekti), stereotyyppi: FeatureType (kohdetyyppi)

**Ominaisuudet**

Nimi             | Name               | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------|------------------------------------
nimi             | name               | [LanguageString](#languagestring) | 0..* | asian nimi
kuvaus           | description        | [LanguageString](#languagestring) | 0..* | asian kuvausteksti
aluerajaus       | boundary           | [Surface](#surface) | 0..*            | maantieteellinen alue, jota maankäyttöasia koskee
oikeusvaikutteisuus | legalEffectiveness | [OikeusvaikutteisuudenLaji](#oikeusvaikutteisuudenlaji) | 0..1 | maankäyttöasiassa tehdyn päätöksen oikeusvaikutteisuus
metatatietokuvaus | metadata          | [URL](#url)         | 0..1            | viittaus ulkoiseen metatietokuvaukseen
voimassaoloaika  | validityTime       | [TM_Period](#tm_period) | 0..1        | maankäyttöasiasssa tehdyn päätöksen voimassaoloaika

**Assosiaatiot**

Roolinimi        | Role name          | Kohde               | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------|------------------------------------
koskeeHallinnollistaAluetta | appliesToAdministrativeArea | [HallinnollinenAlue](#hallinnollinenalue) | 0..* | hallinnollinen alue, jota asia koskee
vastuullinenOrganisaatio | responsibleOrganisation | [Organisaatio](#organisaatio) | 0..1 | organisaatio, joka on vastuussa asian käsittelystä
hyodynnettyAineisto | usedInputDataset | [Lahtotietoaineisto](#lahtotietoaineisto) | 0..* | lähtötietoaineisto, jota asian valmistelussa ja käsittelyssä on hyödynnetty
liittyvaAsia     | relatedMatter      | [AbstraktiMaankayttoasia](#abstraktimaankayttoasia) | 0..* | toinen, tähän asiaan liittyä asia. Kukin assosiaatio voi sisältää ```rooli```-määreen tyyppiä [LanguageString](#languagestring),joka kuvaa miten asia liittyy tähän asiaan
asianLiite       | attachment         | [Asiakirja](#asiakirja) | 0..*      | asian kuvaamiseen tai käsittelyyn olennaisesti kuuluva liitetty asiakirja. Kukin assosiaatio voi sisältää ```rooli```-määreen tyyppiä [LanguageString](#languagestring),joka kuvaa nimeää liitteen. 

### Asiakirja
Englanninkielinen nimi: **Document**

Kuvaa käsitteen [Kaavan liite](../../kasitemalli/#kaavan-liite), erikoistaa luokkaa [AbstraktiVersioituObjekti](#abstraktiversioituobjekti), stereotyyppi: FeatureType (kohdetyyppi)

**Ominaisuudet**

Nimi             | Name               | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------|------------------------------------
asiakirjanTunnus | documentIdentifier | [URI](#uri)         | 0..*            | asiakirjan pysyvä tunnus, esim. diaarinumero tai muu dokumentinhallinnan tunnus
nimi             | name               | [LanguageString](#languagestring) | 0..* | asiakirjan nimi
laji             | type               | [AsiakirjanLaji](#asiakirjanlaji) | 1 | asiakirjan tyyppi
lisatietolinkki  | additionalInformationLink | [URL](#url)  | 0..1            | viittaus ulkoiseen lisätietokuvaukseen asiakirjasta
metatietokuvaus  | metadata           | [URL](#url)         | 0..1            | viittaus ulkoiseen metatietokuvaukseen


**Assosiaatiot**

Roolinimi        | Role name          | Kohde               | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------|------------------------------------
liittyvaAsiakirja | relatedDocument      | [Asiakirja](#asiakirja) | 0..* | toinen, tähän asiaan liittyä asiakirja. Kukin assosiaatio voi sisältää ```rooli```-määreen tyyppiä [LanguageString](#languagestring),joka kuvaa miten asiakirja liittyy tähän asiakirjaan

{% include note.html content="Asiakirja-luokka ei kuvaa dokumentin sisältöä, eikä ota kantaa tapaan, jolla sisältö noudetaan kaavatietovarastosta tai muusta dokumentinhallintajärjestelmästä. Nämä tiedot voidaan kuvata asiakirjan metatietokuvauksessa." %}

### Lahtotietoaineisto
Englanninkielinen nimi: **InputDataset**

Kuvaa käsitteen [Lahtotietoaineisto](../../kasitemalli/#lahtotietoaineisto), erikoistaa luokkaa [AbstraktiVersioituObjekti](#abstraktiversioituobjekti), stereotyyppi: FeatureType (kohdetyyppi)

**Ominaisuudet**

Nimi             | Name               | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------|------------------------------------
aineistoTunnus   | datasetIdentifier  | [URI](#uri)         | 0..1            | lähtötietoaineiston tunnus
nimi             | name               | [LanguageString](#languagestring) | 0..* | aineston nimi
laji             | type               | [LahtotietoaineistonLaji](#lahtotietoaineistonlaji) | 1 | aineiston tyyppi
aluerajaus       | boundary           | [Surface](#surface) | 0..*            | maantieteellinen alue, jota ainesto koskee
lisatietolinkki  | additionalInformationLink | [URL](#url)  | 0..1            | viittaus ulkoiseen lisätietokuvaukseen asiakirjasta
metatietokuvaus  | metadata           | [URL](#url)         | 0..1            | viittaus ulkoiseen metatietokuvaukseen

{% include note.html content="Lahtotietoaineisto-luokka ei kuvaa aineiston sisältöä, eikä ota kantaa tapaan, jolla sisältö noudetaan kaavatietovarastosta tai muusta tietojärjestelmästä. Nämä tiedot voidaan kuvata lähtötietoaineiston metatietokuvauksessa." %}


### AbstraktiTapahtuma
Englanninkielinen nimi: AbstractEvent

Erikoistaa luokkaa [AbstraktiVersioituObjekti](#abstraktiversioituobjekti), stereotyyppi: FeatureType (kohdetyyppi)

**Ominaisuudet**

Nimi             | Name               | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------|------------------------------------
nimi             | name               | [LanguageString](#languagestring) | 0..* | tapahtuman nimi
tapahtumaAika    | eventTime          | [TM_Object](#tm_object) | 0..1        | tapahtuman aika (hetki tai aikaväli)
sijainti         | location           | [Point](#point)     | 0..1            | pistemäinen tapahtumapaikka
lisatietolinkki  | additionalInformationLink | [URL](#url)  | 0..1            | viittaus ulkoiseen lisätietokuvaukseen tapahtumasta
peruttu          | cancelled          | boolean = false     | 1               | onko tapahtuma peruttu (oletus: false)


**Assosiaatiot**

Roolinimi        | Role name          | Kohde               | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------|------------------------------------
liittyvaAsia     | relatedMatter      | [AbstraktiMaankayttoasia](#abstraktimaankayttoasia) | 1 | asia(n versio), johon tapahtuma liittyy.
liittyvaAsiakirja | relatedDocument      | [Asiakirja](#asiakirja) | 0..* | tapahtumaa liittyä asiakirja. Kukin assosiaatio voi sisältää ```rooli```-määreen tyyppiä [LanguageString](#languagestring),joka kuvaa miten asiakirja liittyy tähän tapahtumaan


### Kasittelytapahtuma
Englanninkielinen nimi: HandlingEvent

Kuvaa käsitteen [Käsittelytapahtuma](../../kasitemalli/#käsittelytapahtuma), erikoistaa luokkaa [AbstraktiTapahtuma](#abstraktitapahtuma), stereotyyppi: FeatureType (kohdetyyppi)

**Ominaisuudet**

Nimi             | Name               | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------|------------------------------------
laji             | type               | [AbstraktiKasittelytapahtumanLaji](#abstraktikasittelytapahtumanlaji) | 1 | käsittelytapahtuman tyyppi

**Assosiaatiot**

Roolinimi        | Role name          | Kohde               | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------|------------------------------------
kasittelija      | handler            | [Organisaatio](#organisaatio) | 0..1  | tapahtuman vastuullinen toimija


### Vuorovaikutustapahtuma
Englanninkielinen nimi: InteractionEvent

Kuvaa käsitteen [Vuorovaikutustapahtuma](../../kasitemalli/#vuorovaikutustapahtuma), erikoistaa luokkaa [AbstraktiTapahtuma](#abstraktitapahtuma), stereotyyppi: FeatureType (kohdetyyppi)

**Ominaisuudet**

Nimi             | Name               | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------|------------------------------------
laji             | type               | [AbstraktiVuorovaikutustapahtumanLaji](#abstraktivuorovaikutustapahtumanlaji) | 1 | vuorovaikutustapahtuman tyyppi


### HallinnollinenAlue
Englanninkielinen nimi: AdministrativeArea

Stereotyyppi: Interface (rajapinta)

Hallinnollinen alue on kuvattu kaavatietomallissa ainoastaan rajapintana, koska sen mallintaminen on kuulu kaavatietomallin sovellusalaan. Toteuttavien tietojärjestelmien tulee tarjota rajapinnan määrittelemät vähimmäistoiminnallisuudet.

**Operaatiot**

Nimi             | Name               | Palautusarvon tyyppi              | Kuvaus
-----------------|--------------------|-----------------------------------|------------------------------------
hallintoaluetunnus | administrativeAreaIdentifier | [CharacterString](#characterstring) | palauttaa hallinnollisen alueen tunnuksen
alue             | area               | [Geometry](#geometry)             | palauttaa hallinnollisen alueen aluerajauksen
nimi ([CharacterString](#characterstring)) | name  | [CharacterString](#characterstring) | palauttaa hallinnollisen alueen nimen valitulla kielellä


### Organisaatio
Englanninkielinen nimi: Organization

Stereotyyppi: Interface (rajapinta)

Organisaatio on kuvattu kaavatietomallissa ainoastaan rajapintana, koska sen mallintaminen on kuulu kaavatietomallin sovellusalaan. Toteuttavien tietojärjestelmien tulee tarjota rajapinnan määrittelemät vähimmäistoiminnallisuudet.

**Operaatiot**

Nimi             | Name               | Palautusarvon tyyppi              | Kuvaus
-----------------|--------------------|-----------------------------------|------------------------------------
nimi ([CharacterString](#characterstring)) | name  | [CharacterString](#characterstring) | palauttaa organisaation alueen nimen valitulla kielellä

### Koodistot

#### LahtotietoaineistonLaji
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### AsiakirjanLaji
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### AbstraktiKasittelytapahtumanLaji
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### AbstraktiVuorovaikutustapahtumanLaji
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### OikeusvaikutteisuudenLaji
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

## Kaavatiedot

### Kaava
Kuvaa käsitteen []()

Englanninkielinen nimi: SpatialPlan

### Kaavaselostus
Kuvaa käsitteen []()

Englanninkielinen nimi: SpatialPlanCommentary

### OsallistumisJaArviointisuunnitelma
Kuvaa käsitteen []()

Englanninkielinen nimi: ParticipationAndEvalutionPlan

### KaavanLaatija
Kuvaa käsitteen []()

Englanninkielinen nimi: Planner

### AbstraktiKaavakohde

Englanninkielinen nimi: AbstractPlanObject

### AbstraktiTietoyksikko

Englanninkielinen nimi: AbstractInformationUnit

### Kaavamaarayskohde
Kuvaa käsitteen []()

Englanninkielinen nimi: PlanRegulationObject

### Kaavamaarays
Kuvaa käsitteen []()

Englanninkielinen nimi: PlanRegulation

### Kaavasuositus
Kuvaa käsitteen []()

Englanninkielinen nimi: PlanGuidance

### Lisatieto
Kuvaa käsitteen []()

Englanninkielinen nimi: SupplementaryInformation

### KaavanKumoamistieto
Englanninkielinen nimi: CancellationInfo

### AbstraktiArvo
Englanninkielinen nimi: AbstractValue

### Ajanhetkiarvo
Englanninkielinen nimi: TimeInstantValue

### Aikavaliarvo
Englanninkielinen nimi: TimePeriodValue

### GeometriaArvo
Englanninkielinen nimi: GeometryValue

### Koodiarvo
Englanninkielinen nimi: CodeValue

### NumeerinenArvo
Englanninkielinen nimi: NumericValue

### NumeerinenArvovali
Englanninkielinen nimi: NumericRange

### Tunnusarvo
Englanninkielinen nimi: IdentifierValue

### Tekstiarvo
Englanninkielinen nimi: TextValue

### Korkeuspiste
Englanninkielinen nimi: ElevationPosition

### Korkeusvali
Englanninkielinen nimi: ElevationRange

### Koodistot

#### Kaavalaji
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### AlueenKayttotarkoituksenLaji
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### Yksityiskohtainenkayttotarkoituslaji
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### KaavanElinkaaritila
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### Sitovuuslaji
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### Maanalaisuudenlaji
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### DigitaalinenAlkupera
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### AbstraktiKaavamaarayskohdelaji
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### AbstraktiKaavoitusteema
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### KaavoitusteemaAsemakaava
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### KaavoitusteemaYleiskaava
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### AbstraktiKaavamaarayslaji
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### KaavamaarayslajiAsemakaava
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### KaavamaarayslajiYleiskaava
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### AbstraktiLisatiedonLaji
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### LisatiedonLajiAsemakaava
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### LisatiedonLajiYleiskaava
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### KaavanKasitelytapahtumanlaji
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

#### KaavanVuorovaikutustapahtumanlaji
Stereotyyppi: CodeList (koodisto)

Sanasto:

Laajennettavuus:

