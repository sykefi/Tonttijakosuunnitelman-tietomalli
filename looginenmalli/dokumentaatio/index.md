---
layout: "default"
title: "Looginen tietomalli - looginen tietomalli - dokumentaatio"
description: ""
id: "dokumentaatio"
status: "Keskeneräinen"
---
{% include common/important.html content="Sisältö ei vielä ajantasalla UML-kaavion kanssa" %}

# Loogisen tason sitovan tonttijaon tietomalli
{:.no_toc}

1. 
{:toc}

## Yleistä

Loogisen tason tietomalli määrittelee kaikille sitovan tonttijaon kohteille yhteiset tietorakenteet, joita sovelletaan sitovan tonttijaon ilmaisemiseen laadittujen [soveltamisohjeiden](../soveltamisohjeet/) ja niihin kiinnittyvien koodistojen sekä [elinkaari-](../elinkaarisaannot.html) ja [laatusääntöjen](../laatusaannot.html) mukaisesti. Looginen tietomalli pyrkii olemaan mahdollisimman riippumaton tietystä toteutusteknologiasta tai tiedon fyysisestä esitystavasta.

<!--**Graafinen mallinnus loogisesta tietomallista**

![Sitovan tonttijaon looginen malli graafisena mallinnuksena](looginenmalli.png "Looginen tietomalli -  graafinen mallinnus (Neo4j)")

(Lataa [Kaavio määritelmien kanssa](looginenmalli.png))-->

### Normatiiviset viittaukset
Sitovan tonttijaon tietomalli hyödyntää samoja normatiivisia viittauksia kuin kaavatietomallikin. Ne käsittävät seuraavat dokumentit:

* [ISO 639-2:1998 Codes for the representation of names of languages — Part 2: Alpha-3 code][ISO-639-2]
* [ISO 8601-1:2019 Date and time — Representations for information interchange — Part 1: Basic rules][ISO-8601-1]
* [ISO 19103:2015 Geographic information — Conceptual schema language][ISO-19103]
* [ISO 19107:2019 Geographic information — Spatial schema][ISO-19107]
* [ISO 19108:2002 Geographic information — Temporal schema][ISO-19108]
* [ISO 19109:2015 Geographic information — Rules for application schema][ISO-19109]
* [ISO 19505-2:ISO/IEC 19505-2:2012, Information technology — Object Management Group Unified Modeling Language (OMG UML) — Part 2: Superstructure][ISO-19505-2]

### Standardienmukaisuus

Sitovan tonttijaon looginen tietomalli perustuu [ISO 19109][ISO-19109]-standardin yleiseen kohdetietomalliin (General Feature Model, GFM), joka määrittelee rakennuspalikat paikkatiedon ISO-standardiperheen mukaisten sovellusskeemojen määrittelyyn. GFM kuvaa muun muassa metaluokat ```FeatureType```, ```AttributeType``` ja ```FeatureAssociationType```. 

Sitovan tonttijaon tietomallissa kaikki tietokohteet, joilla on tunnus ja jotka voivat esiintyä erillään toisista kohteista on määritelty kohdetyypeinä stereotyypin ```FeatureType``` kautta. Sellaiset tietokohteet, joilla ei ole omaa tunnusta ja jotka voivat esiintyä vain kohdetyyppien attribuuttien arvoina on määritelty [ISO 19103][ISO-19103]-standardin ```DataType```-stereotyypin avulla. Lisäksi [HallinnollinenAlue](#hallinnollinenalue) ja [Organisaatio](#organisaatio) on mallinnettu vain rajapintojen (```Interface```) avulla, koska niitä ei ole tarpeen kuvata sitovan tonttijaon tietomallissa yksityiskohtaisesti, ja on todennäköistä, että suunnitelmia ylläpitävät tietojärjestelmät tarjoavat niille konkreettiset toteuttavat luokat.

[ISO 19109][ISO-19109] -standardin lisäksi sitovan tonttijaon tietomalli perustuu muihin paikkatiedon ISO-standardeihin, joista keskeisimpiä ovat [ISO 19103][ISO-19103] (UML-kielen käyttö paikkatietojen mallinnuksessa), [ISO 19107][ISO-19107] (sijaintitiedon mallintaminen) ja [ISO 19108][ISO-19108] (aikaan sidotun tiedon mallintaminen).

### Muualla määritellyt luokat ja tietotyypit

#### CharacterString

Kuvaa yleisen merkkijonon, joka koostuu 0..* merkistä, merkkijonon pituudesta, merkistökoodista ja maksimipituudesta. Määritelty rajapinta-tyyppisenä [ISO 19103][ISO-19103]-standardissa.

#### LanguageString

Kuvaa kielikohtaisen merkkijonon. Laajentaa CharacterString-rajapintaa lisäämällä siihen language-attribuutin, jonka arvo on LanguageCode-koodiston arvo. Kielikoodi voi [ISO 19103][ISO-19103]-standardin määritelmän mukaan olla mikä tahansa ISO 639 -standardin osa.

#### Number

Kuvaa yleisen numeroarvon, joka voi olla kokonaisluku, desimaaliluku tai liukuluku. Määritelty rajapintana [ISO 19103][ISO-19103]-standardissa.

#### Integer

Laajentaa Number-rajapintaa kuvaamaan numeron, joka on kokonaisluku ilman murto- tai desimaaliosaa. Määritelty rajapintana [ISO 19103][ISO-19103]-standardissa.

#### Decimal

Laajentaa [Number](#number)-rajapintaa kuvaamaan numeron, joka on desimaaliluku. Decimal-rajapinnan toteuttava numero voidaan ilmaista virheettä yhden kymmenysosan tarkkuudella. Määritelty rajapintana [ISO 19103][ISO-19103]-standardissa. Decimal-numeroita käytetään, kun desimaalien käsittelyn tulee olla tarkkaa, esim. rahaan liityvissä tehtävissä.

#### Real

Laajentaa [Number](#number)-rajapintaa kuvaamaan numeron, joka on tarkkudeltaan rajoitettu liukuluku. Real-rajapinnan numero voi ilmaista tarkasti vain luvut, jotka ovat 1/2:n (puolen) potensseja. Määritelty rajapintana [ISO 19103][ISO-19103]-standardissa. Käytännössä esitystarkkuus riippuu numeron tallentamiseen varattujen bittien määrästä, esim. ```float (32-bittinen)``` (tarkkuus 7 desimaalia) ja ```double (64-bittinen)``` (tarkkuus 15 desimaalia).

#### TM_Object

Aikamääreiden yhteinen yläluokka, jota käytetään, mikäli arvo voi olla joko yksittäinen ajanhetki tai aikaväli. Määritelty luokkana [ISO 19108][ISO-19108]-standardissa. 

#### TM_Instant

Kuvaa yksittäisen ajanhetken 0-ulotteisena ajan geometriana, joka vastaa pistettä avaruudessa. Määritelty luokkana [ISO 19108][ISO-19108]-standardissa. Aikapisteen arvo on määritelty ```TM_Position```-luokalla [ISO 8601][ISO-8601-1]-standardin mukaisilla päivämäärä- tai kellonaikakentilla tai niiden yhdistelmällä, tai muulla ```TM_TemporalPosition```-luokan avulla kuvatulla aikapisteellä. Viimeksi mainitun luokan attribuutti ```indeterminatePosition``` mahdollistaa ei-täsmällisen ajanhetken ilmaisemisen liittämällä mahdolliseen arvoon luokittelun *tuntematon*, *nyt*, *ennen*, *jälkeen* tai *nimi*.

#### TM_Period

Kuvaa aikavälin [TM_Instant](#tm_instant)-tyyppisten ```begin```- ja ```end```-attribuuttien avulla. Molemmat attribuutit ovat pakollisia, mutta voivat sisältää tuntemattoman arvon hyödyntämällä ```indeterminatePosition = unknown``` -attribuuttia. Määritelty luokkana [ISO 19108][ISO-19108]-standardissa.

#### URI

Määrittää merkkijonomuotoisen Uniform Resource Identifier (URI) -tunnuksen [ISO 19103][ISO-19103]-standardissa. URIa voi käyttää joko pelkkänä tunnuksena tai resurssin paikantimena (Uniform Resource Locator, URL).

#### Geometry

Kaikkien geometria-tyyppien yhteinen rajapinta [ISO 19107][ISO-19107]-standardissa. Tyypillisimpiä [ISO 19107][ISO-19107]-standardin Geometry-rajapintaa laajentavia rajapintoja ovat ```Point```, ```Curve```, ```Surface``` ja ```Solid``` sekä ```Collection```, jota käyttämällä voidaan kuvata geometriakokoelmia (multipoint, multicurve, multisurface, multisolid).

#### Point
Täsmälleen yhdestä pisteestä koostuva geometriatyyppi. Määritelty rajapintana [ISO 19107][ISO-19107]-standardissa.

## Tietomallin yleispiirteet

Tietomalli perustuu kaavatietomallin yhteiskäyttöisiin tietokomponentteihin. Kaavatietomallin MKP-ydin (maankäyttöpäätökset, MKP) kuvaa maankäyttöpäätösten tietomallintamisessa yleiskäyttöisiksi suunnitellut luokat ja niihin liittyvät koodistot, joita hyödynnetään sitovan tonttijaon soveltamisprofiilin kautta. MKP-ytimen lisäksi hyödynnetään laajasti Kaavatietomallin abstrakteja ja muita luokkia sitovan tonttijaon tietomallin määrittelemien koodistojen ja soveltamisprofiilin avulla. 

Sitovan tonttijaon UML-luokkakaaviot ovat saatavilla erillisellä [UML-kaaviot-sivulla](https://www.tonttijakosuunnitelma.fi/1.0-dev/looginenmalli/uml/).

## Kaavatietomallin ja sitovan tonttijaon tietomallin suhde ja tietovirrat

Kaavatietomallin mukaiset kaavamääräykset, joiden ```laji-attribuutin``` arvo on [Tonttijako-koodin](https://koodistot.suomi.fi/code;registryCode=rytj;schemeCode=RY_KaavamaaraysLaji_AK;codeCode=10) *Esitontti* tai *Sitova tonttijako laadittava*, ovat aluemaisia lähtötietoja sitovan tonttijaon laatimiselle.

Sitovan tonttijaon tietomallin esitonteille kaavamääräykset linkitetään suoraan kaavatietomallista. Linkitys tietomallien välillä perustuu viittaustunnukseen, joka muodostetaan sitovan tonttijaon tietomallin  [Kaavamaarays-luokan](#kaavamaarays) ```liittyvanKaavamaarayksenTunnus```-attribuutille annettavalla kaavatietomallin [Kaavamaarays-luokan](https://kaavatietomalli.fi/1.0/looginenmalli/dokumentaatio/#kaavamaarays) ```viittaustunnus``` -attribuutilla. Tällä vältytään toisteellisen kaavamääräystiedon tuottamiselta. Sitovan tonttijaon tietomalli mahdollistaa kuitenkin sitovan tonttijaon laatijan määrittää kerrosala laskennallisesti esitonttikohteille.

Elinkaarisäännöt-sivulla [Asemakaavan suhde esitonttikohteeseen -luvussa](https://www.tonttijakosuunnitelma.fi/1.0-dev/looginenmalli/elinkaarisaannot.html#asemakaavan-suhde-esitonttikohteeseen) on kuvattu kaavatiedon elinkaaren vaikutukset esitonttikohteen elinkaareen.

## Yhteiset (MKP-ydin)

### VersioituObjekti

Englanninkielinen nimi: VersionedObject

Stereotyyppi: FeatureType (kohdetyyppi)

Yhteinen yläluokka kaikille sitovan tonttijaon versiohallituille luokille. Kuvaa kaikkien kohdetyyppien yhteiset ominaisuudet ja assosiaatiot.

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
paikallinenTunnus| [CharacterString](#characterstring)     | 0..1 | kohteen pääavain (id)
nimiavaruus      | [URI](#uri) | 0..1  | tunnusten nimiavaruus
viittausTunnus   | [URI](#uri) | 0..1  | johdettu nimiavaruudesta, luokan englanninkielisestä nimestä ja paikallisesta tunnuksesta
identiteettiTunnus | [CharacterString](#characterstring)     | 0..1  | kohteen versioriippumaton tunnus
tuottajakohtainenTunnus | [CharacterString](#characterstring) | 0..1 | kohteen tunnus tuottajatietojärjestelmässä
viimeisinMuutos  | [TM_Instant](#tm_instant) | 0..1 | ajanhetki, jolloin kohteen tietoja on viimeksi muutettu tuottajatietojärjestelmässä
tallennusAika    | [TM_Instant](#tm_instant) | 0..1 | ajanhetki, jolloin kohde on tietojärjestelmään


### AlueidenkäyttöJaRakentamisasia

Englanninkielinen nimi: AreaUseAndLandUseMatter

Erikoistaa luokkaa [VersioituObjekti](#versioituobjekti).

Stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
nimi             | [LanguageString](#languagestring)     | 0..* | asian nimi
kuvaus           | [LanguageString](#languagestring) | 0..* | asian kuvausteksti
metatietokuvaus  | [URI](#uri) | 0..1  | viittaus ulkoiseen metatietokuvaukseen
elinkaarentila   | [AbstraktiElinkaarentila](#abstraktielinkaarentila) | 1 | yleisimmät arvot vireillä oleva,  hyväksytty tai voimassa
vireilletuloAika | [TM_Instant](#TM_Instant) | 0..1 | aika, jolloin asia on tullut vireille
asianLiite       | [Asiakirja](#asiakirja) | 0..* | liittyvän asian liite
asianhallintaTunnus | [Tunnusarvo](#tunnisarvo) | 0..* | asiaan liittyvä tunnus
aluerajaus       | [Geometry](#geometry) | 0..1 | asiaan geometrinen rajaus

### AlueidenkäyttöJaRakentamispäätös

Englanninkielinen nimi: AreaUseAndLandUseDecision

Erikoistaa luokkaa [VersioituObjekti](#versioituobjekti).

Stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
antopäivämäärä   | [Date](#date)       | 0..1            | päätöksen antopäivämäärä
julkaisemispäivämäärä   | [Date](#date)       | 0..1            | julkaisemis päivämäärä
lainvoimaisuuspäivämäärä | [Date](#date)       | 0..1            | lainvoimaisuus päivämäärä
nimi             | [LanguageString](#languagestring)     | 0..* | asian nimi
kuvaus           | [LanguageString](#languagestring) | 0..* | asian kuvausteksti
metatietokuvaus  | [URI](#uri) | 0..1  | viittaus ulkoiseen metatietokuvaukseen
päätösasiakirja  | [Asiakirja](#asiakirja) | 0..* | päätöksen asiakirja
päätöspykälä     | [LanguageString](#languagestring) | 0..* | päätöspykälä
päätöspäivämäärä | [Date](#date)       | 0..1            | päätöspäivämäärä
päätösteksti     | [LanguageString](#languagestring) | 0..* | päätösteksti
voimassaoloAika | [TM_Period](#TM_Period) | 0..1 | aikaväli, jona asiasta tehty päätös suunnitelmineen ja säännöksineen on lainvoimainen

### RakennetunYmpäristönKohde

Erikoistaa luokkaa VersioituObjekti, stereotyyppi: FeatureType (kohdetyyppi)

Kaikkien sitovaan tonttijakoon liittyvien paikkatietokohteiden yhteinen abstrakti yläluokka. Kohteen geometria voi olla 2-ulotteinen piste,tai alue, tai 3-ulotteinen kappale. Moniosaiset geometriat (multigeometry) ovat sallittuja.

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
geometria | [geometry](#geometry) | 0..1  | rakennetunympäristön kohteen sijainti
pystysuunteinenRajaus | [Korkeusvali](#Korkeusvali) | 0..1  | kolmiulotteisen rakennetunympäristön kohteen ja alin korkeus
rinnakkainenTunnus | [Tunnusarvo](#Tunnusarvo) | 0..*  | rakennetunympäristön kohteen tunnusarvo tai rajapisteen numero
nimi | [LanguageString](#LanguageString) | 0..*  | rakennetunympäristön kohteen mahdollinen nimi

**Assosiaatiot**

Roolin nimi        | Kohde | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|----------
liittyvaKohde | [Kaavakohde](#kaavakohde) | 0..* | kohde, joka liittyy tähän kohteeseen. Kukin assosiaatio voi sisältää rooli-määreen tyyppiä LanguageString, joka kuvaa miten kohde liittyy tähän kohteeseen.

### Asiakirja

Englanninkielinen nimi: Document

Kuvaa käsitteen [AbstraktiAsiankirjanLaji](../kasitemalli/#sitovantonttijaonviiteasiakirja). Erikoistaa luokkaa [VersioituObjekti](#versioituobjekti). 

Stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
asiakirjaTunnus | [URI](#uri) | 0..* | asiakirjan pysyvä tunnus, esim. diaarinumero tai muu dokumentinhallinnan tunnus
laji | [AbstraktiAsiakirjanLaji](#abstraktiasiakirjanlaji) | 1  | asiakirjan tyyppi
lisatietolinkki  | [URI](#uri) | 0..1 | viittaus ulkoiseen lisätietokuvaukseen asiakirjasta
metatietolinkki | [URI](#uri) | 0..1 | viittaus ulkoiseen metatietokuvaukseen asiakirjasta
nimi | [LanguageString](#languagestring) | 0..* | asiakirjan nimi
rooli | [LanguageString](#languagestring) | 0..* | asiakirjan rooli

### Lahtotietoaineisto
Englanninkielinen nimi: **InputDataset**

Kuvaa käsitteen [Lahtotietoaineisto](../../kasitemalli/#lahtotietoaineisto), erikoistaa luokkaa [VersioituObjekti](#versioituobjekti), stereotyyppi: FeatureType (kohdetyyppi)

**Ominaisuudet**

Nimi             | Name               | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------|------------------------------------
aineistoTunnus   | datasetIdentifier  | [URI](#uri)         | 0..*            | lähtötietoaineiston tunnus
nimi             | name               | [LanguageString](#languagestring) | 0..* | aineiston nimi
laji             | type               | [LahtotietoaineistonLaji](#lahtotietoaineistonlaji) | 1 | aineiston tyyppi
aluerajaus       | boundary           | [Geometry](#geometry) | 0..*            | maantieteellinen alue, jota ainesto koskee
lisatietolinkki  | additionalInformationLink | [URI](#uri)  | 0..1            | viittaus ulkoiseen lisätietokuvaukseen asiakirjasta
metatietokuvaus  | metadata           | [URI](#uri)         | 0..1            | viittaus ulkoiseen metatietokuvaukseen

{% include common/note.html content="Lahtotietoaineisto-luokka ei kuvaa aineiston sisältöä, eikä ota kantaa tapaan, jolla sisältö noudetaan tietovarastosta tai muusta tietojärjestelmästä. Nämä tiedot voidaan kuvata lähtötietoaineiston metatietokuvauksessa." %}

### Tapahtuma

Englanninkielinen nimi: AbstractEvent

Erikoistaa luokkaa [VersioituObjekti](#abstraktiversioituobjekti).

Stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
nimi |[LanguageString](#languagestring) | 0..* | tapahtuman kuvaus
tapahtumaAika | [TM_Object](#tm_object) | 0..1  | tapahtuman aika (hetki tai aikaväli)
kuvaus  | [LanguageString](#languagestring) | 0..* | tapahtuman tekstimuotoinen kuvaus

### Kasittelytapahtuma

Englanninkielinen nimi: AbstractHandlingEvent

Kuvaa käsitteen käsittelytapahtuma. Erikoistaa luokkaa [Tapahtuma](#tapahtuma).

Stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
laji | [AbstraktiKasittelytapahtumanLaji](#abstraktikasittelytapahtumanlaji) | 1  | käsittelytapahtuman tyyppi

### Vuorovaikutustapahtuma

Englanninkielinen nimi: AbstractInteractionEvent

Kuvaa käsitteen Vuorovaikutustapahtuma. Erikoistaa luokkaa [Tapahtuma](#abstraktitapahtuma).

Stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
laji | [AbstraktiVuorovaikutustapahtumanLaji](#abstraktivuorovaikutustapahtumanlaji) | 1  | vuorovaikutustapahtuman tyyppi

### HallinnollinenAlue

Englanninkielinen nimi: AdministrativeArea

Stereotyyppi: Interface (rajapinta)

Hallinnollinen alue on kuvattu sitovan tonttijaon tietomallissa ainoastaan rajapintana, koska sen mallintaminen on kuulu sitovan tonttijaon tietomallin sovellusalaan. Toteuttavien tietojärjestelmien tulee tarjota rajapinnan määrittelemät vähimmäistoiminnallisuudet.

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
hallintoaluetunnus | [CharacterString](#characterstring) | 1  | palauttaa hallinnollisen alueen tunnuksen
alue | [geometry](#geometry) | 1  | palauttaa hallinnollisen alueen aluerajauksen
nimi | [CharacterString](#characterstring) | 1  | palauttaa hallinnollisen alueen nimen valitulla kielellä

### Rajapiste

Englanninkielinen nimi: Organization

Stereotyyppi: Interface (rajapinta)

Organisaatio on kuvattu sitovan tonttijaon tietomallissa ainoastaan rajapintana, koska sen mallintaminen on kuulu sitovan tonttijaon tietomallin sovellusalaan. Toteuttavien tietojärjestelmien tulee tarjota rajapinnan määrittelemät vähimmäistoiminnallisuudet.

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
rajapyykinTaiPisteenTunnus | [URI](#uri) | 1..*  | sitovassa tonttijaossa osoitettu pistemäinen kohde, joka kuvaa kiinteistönmuodostustoimituksessa osoitettavaa rajapistettä tai rajamerkkiä


### SuunnitelmanLaatija

Kuvaa käsitteen Suunnitelman laatija, erikoistaa luokkaa VersioituObjekti, stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
nimi | [CharacterString](#CharacterString) | 1  | laatijan nimi
nimike | [LanguageString](#LanguageString) | 0..*  | ammatti- tai virkanimike

### Koodistot

#### SitovanTonttijaonAsiakirjanLaji

Englanninkielinen nimi: PlotPlanDocumentKind

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include common/codelistref.html registry="rytj" id="RY_TonttijakosuunnitelmanAsiakirjanLaji" name="Sitovan tonttijaon asiakirjan laji" %}

#### AbstraktiKasittelytapahtumanLaji

Englanninkielinen nimi: AbstractHandlingEventKind

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

Käsittelytapahtumien lajit kuvataan MKP-ydin -paketissa abstraktina koodistona, jota laajennetaan kunkin maankäyttöpäätöksen prosessin konkreettisten arvojen mukaisesti niiden tietomalleissa.

#### AbstraktiVuorovaikutustapahtumanLaji

Englanninkielinen nimi: AbstractInteractionEventKind

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

Vuorovaikutustapahtumien lajit kuvataan MKP-ydin -paketissa abstraktina koodistona, jota laajennetaan kunkin maankäyttöpäätöksen prosessin konkreettisten arvojen mukaisesti niiden tietomalleissa.

## Sitovan tonttijaon tiedot

### SitovaTonttijako

Kuvaa käsitteen Sitova tonttijako, erikoistaa luokkaa AbstraktiMaankayttoasia, stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
laji | [Codelist](#sitovantonttijaonlaji) | 1  | kertoo, millainen sitova tonttijako on laadittu
sitovanTonttijaonTunnus  | [CharacterString](#CharacterString) | 1 | yksilöivä ID
sitovanTonttijaonkumoutumistieto | [SitovanTonttijaonKumoutumistieto](#sitovantonttijaonkumoutumistieto) | 0..* | sitovan tonttijaon tai sen osa, jonka tämä tonttijakosuunnitelma kumoaa
voimassaoloAika | [TM_Period](#TM_Period) | 0..1 | aika, jolloin sitova tonttijako on tullut vireille
hyvaksymisAika | [TM_Instant](#TM_Instant) | 0..1 | aika, jolloin sitova tonttijako on tullut virallisesti hyväksyttyä
digitaalinenAlkupera | [DigitaalinenAlkupera](#digitaalinenalkupera) | 0..1 | luokittelu alunperin tietomallin mukaan luotuihin ja jälkeenpäin digitoituihin sitoviin tonttijakoihin

AbstraktiMaankayttoasia-luokasta peritytyvä attribuutti aluerajauus kuvaa sitovan tonttijaon suunnittelualueen.

**Assosiaatiot**

Roolin nimi        | Kohde | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------
tonttijakotontti | [Kaavakohde](#Kaavakohde) | 1 | paikkatietokohde, johon kohdistuu kaavamääräyksiä tai -suosituksia
laatija | [SuunnitelmanLaatija](#SuunnitelmanLaatija) | 1 | Sitovan tonttijaon suunnitelman laatija

### Kaavayksikkö

Kuvaa käsitteen Kaavayksikkö, erikoistaa luokkaa AbstraktiKaavakohde, stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
suhdePeruskiinteistoon | [suhdePeruskiinteistoon](#suhdeperuskiinteistoon) | 0..1  | luokittelu tonttijakotonttiin sijoittumisesta suhteessa peruskiinteistöön, joka merkitään vain 3D-tonttijakotonttikohteelle
kaavayksikönElinkaarentila | [KaavayksikönElinkaarentila](#kaavayksikönelinkaarentila) | 1  | 
muodostustieto | [Muodostajakiinteisto](#muodostajakiinteisto) | 1..* | tieto muodostajakiinteistöistä, josta/joista tonttijakotontti muodostetaan
pintaAla | [Number](#Number) | 0..*  | tonttijakotontin pinta-ala tai kolmiulotteisen tonttijakotontin projisoitu pinta-ala
kaavayksikönMuutostieto | [KaavayksikönMuutostieto](#kaavayksikönmuutostieto) | 1..* | tieto tonttijakotonttiin liittyvistä asemakaavan kaavayksiköistä ja niiden vaikutuksista
rakennettu | [boolean](#boolean) | 0..1 | tieto muun muassa rakentamattomasta rakennuspaikasta korotettua kiinteistöverotusta varten, onko tonttijakotontti rakennettu asemakaavan mukaisesti. Lisäksi tämän tiedon perusteella saadaan tieto kunnan kaavavarannosta.
rakennuskielto | [boolean](#boolean) | 0..1 | kuvaa, onko tonttijakotontilla rakennuskielto
voimassaoloAika | [TM_Period](#TM_Period) | 0..1 | aikaväli, jona asiasta tehty päätös suunnitelmineen ja säännöksineen on lainvoimainen

<!-- **Assosiaatiot**

Roolin nimi        | Kohde | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|----------
maarays | [Kaavamaarays](#kaavamaarays) | 0..* | kaavaan sisältyvä sanallinen määräys, jolla ohjataan alueiden suunnittelua ja rakentamista -->

### Tonttijakotontti

Kuvaa käsitteen Tonttijakotontti, erikoistaa luokkaa Kaavayksikkö, stereotyyppi: FeatureType (kohdetyyppi)

### Muodostajakiinteistö

Stereotyyppi: DataType (tietotyyppi)

Tieto muodostajakiinteistöistä, josta tonttijakotontti muodostetaan.

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
kiinteistöTunnus | [Tunnusarvo](#Tunnusarvo) | 1  | kiinteistörekisteriin merkityn rekisteriyksikön yksilöivä tunnus
muodostusPinta-ala | [Number](#Number) | 1  | muodostavan rekisterikiinteistön pinta-alan määrä neliömetreissä

### KaavaykikönMuutostieto

Stereotyyppi: DataType (tietotyyppi)

Tieto tonttijakotonttiin liittyvistä asemakaavoista ja niiden vaikutuksista.

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
kaavaTunnus | [URI](#URI) | 1  | kaavatunnus, joka muuttaa tonttijakotontin kaavamääräyksiä tai kumoaa tonttijakotontin
kaavayksikönMuutosLaji | [KaavayksikönMuutostieto](#kaavayksikönmuutoslaji) | 1 | alueiden käytön ohjaustarpeeseen, kaavan sisältövaatimuksiin, prosessiin ja vastuulliseen hallintoviranomaiseen perustuva luokittelu
kaavayksikönTunnus | [URI](#URI) | 0..*  | kaavayksikkö, johon kumoutuminen kohdistuu

### Kaavamääräys

Kuvaa käsitteen Kaavamääräys, erikoistaa luokkaa AbstraktiTietoyksikko, stereotyyppi: FeatureType (kohdetyyppi)

laji             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
liittyvanKaavamaarayksenTunnus | [URI](#URI) | 1  | viittaustunnus kaavaan sisältyvän kaavamääräyksen tietokohteeseen, joka liittyy tonttijakotonttiin

### AbstraktiTietoyksikko

Erikoistaa luokkaa AbstraktiVersioituObjekti, stereotyyppi: FeatureType (kohdetyyppi)

Kaikkien sitoviin tonttijakoihin liittyvien tietoelementtien yhteinen abstrakti yläluokka.

laji             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
arvo | [Arvo](#arvo) | 0..*  | kuvaa sitovan tonttijaon laatijan tulkitsemaa arvoa esim. rakentamisen määrä

### SitovanTonttijaonKumoutumistieto

Stereotyyppi: DataType (tietotyyppi)

Kumoamistieto yksilöi mitä sitovia tonttijakoja tai niiden tonttijakotontteja sitova tonttijako kumoaa lainvoimaiseksi tullessaan.

laji             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
kumoutuvanSitovanTonttijaonTunnus | [URI](#URI) | 1  | sitova tonttijako, johon kumoaminen kohdistuu
kumoutuvanKaavayksikönTunnus | [URI](#URI) | 0..*  | tonttijakotontti, johon kumoutuminen kohdistuu

### Koodistot

#### SitovanTonttijaonLaji

Englanninkielinen nimi: PlotDivisionKind

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include common/codelistref.html registry="rytj" id="RY_TonttijakosuunnitelmanLaji" name="Sitovan tonttijaon laji" %}

#### SitovanTonttijaonElinkaarentila

Erikoistaa luokkaa AbstraktiElinkaarentila. 

Englanninkielinen nimi: PlotDivisionLifeCycleState

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include common/codelistref.html registry="rytj" id="RY_TonttijakosuunnitelmanElinkaarentila" name="Sitovan tonttijaon elinkaaren tila" %}

#### SitovaonTonttijaonAsiakirjanLaji

Erikoistaa luokkaa AbstraktiAsiakirjanLaji. 

Englanninkielinen nimi: PlotDivisionDocumentType

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include common/codelistref.html registry="rytj" id="RY_TonttijakosuunnitelmanAsiakirjanLaji" name="Sitovaa tonttijakoa koskevan asiakirjan laji" %}

#### SuhdePeruskiinteistoon

Englanninkielinen nimi: RelationToBaseProperty

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include common/codelistref.html registry="rytj" id="RY_SuhdePeruskiinteistoon" name="Tonttijakotontin suhde peruskiinteistöön" %}

#### SitovanTonttijaonVuorovaikutustapahtumanLaji

<!--Lisää sisäinen linkki? -->
Erikoistaa luokkaa AbstraktiVuorovaikutustapahtumanLaji. 

Englanninkielinen nimi: PlotDivisionPublicParticipationEventKind

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include common/codelistref.html registry="rytj" id="RY_TonttijakosuunnitelmanVuorovaikutustapahtumanLaji" name="Sitovan tonttijaon vuorovaikutustapahtuman laji" %}

#### SitovanTonttijaonKasittelytapahtumanLaji

<!--Lisää sisäinen linkki? -->
Erikoistaa luokkaa AbstraktiKasittelytapahtumanLaji. 

Englanninkielinen nimi: PlotDivisionHandlingEventKind

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

#### KaavayksikönMuutostieto

<!--Lisää sisäinen linkki? -->
Englanninkielinen nimi: PlanUnitChangeInform

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include common/codelistref.html registry="rytj" id="RY_KaavanMuutostieto" name="Kaavayksikön muutostieto (asemakaava)" %}

<!-- linkit standardeihin, joihin mainittu sivun alussa -->
[ISO-8601-1]: https://www.iso.org/standard/70907.html "ISO 8601-1:2019 Date and time — Representations for information interchange — Part 1: Basic rules"
[ISO-639-2]: https://www.iso.org/standard/4767.html "ISO 639-2:1998 Codes for the representation of names of languages — Part 2: Alpha-3 code"
[ISO-19103]: https://www.iso.org/standard/56734.html "ISO 19103:2015 Geographic information — Conceptual schema language"
[ISO-19107]: https://www.iso.org/standard/66175.html "ISO 19107:2019 Geographic information — Spatial schema"
[ISO-19108]: https://www.iso.org/standard/26013.html "ISO 19108:2002 Geographic information — Temporal schema"
[ISO-19109]: https://www.iso.org/standard/59193.html "ISO 19109:2015 Geographic information — Rules for application schema"
[ISO-19505-2]: https://www.iso.org/standard/52854.html "ISO/IEC 19505-2:2012, Information technology — Object Management Group Unified Modeling Language (OMG UML) — Part 2: Superstructure"
