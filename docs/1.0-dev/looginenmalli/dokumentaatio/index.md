---
layout: "default"
title: "Looginen tietomalli - looginen tietomalli - dokumentaatio"
description: ""
page: "dokumentaatio"
modelversion: "1.0-dev"
status: "Luonnos"
---
# Loogisen tason tonttijakosuunnitelma
{:.no_toc}

1. 
{:toc}

## Yleistä

Loogisen tason tietomalli määrittelee kaikille tonttijakosuunnitelman kohteille yhteiset tietorakenteet, joita sovelletaan tonttijaon ilmaisemiseen laadittujen [soveltamisohjeiden](https://www.tonttijakosuunnitelma.fi/1.0-dev/soveltamisohjeet/index.html) ja niihin kiinnittyvien koodistojen sekä [elinkaari-](https://www.tonttijakosuunnitelma.fi/1.0-dev/looginenmalli/elinkaarisaannot.html) ja [laatusääntöjen](https://www.tonttijakosuunnitelma.fi/1.0-dev/looginenmalli/laatusaannot.html) mukaisesti. Looginen tietomalli pyrkii olemaan mahdollisimman riippumaton tietystä toteutusteknologiasta tai tiedon fyysisestä esitystavasta.

<!--**Graafinen mallinnus loogisesta tietomallista**

![Tonttijakosuunnitelman looginen malli graafisena mallinnuksena](looginenmalli.png "Looginen tietomalli -  graafinen mallinnus (Neo4j)")

(Lataa [Kaavio määritelmien kanssa](looginenmalli.png))-->

### Normatiiviset viittaukset
Tonttijakosuunnitelman tietomalli hyödyntää samoja normatiivisia viittauksia kuin kaavatietomallikin. Ne käsittävät seuraavat dokumentit:

* [ISO 639-2:1998 Codes for the representation of names of languages — Part 2: Alpha-3 code][ISO-639-2]
* [ISO 8601-1:2019 Date and time — Representations for information interchange — Part 1: Basic rules][ISO-8601-1]
* [ISO 19103:2015 Geographic information — Conceptual schema language][ISO-19103]
* [ISO 19107:2019 Geographic information — Spatial schema][ISO-19107]
* [ISO 19108:2002 Geographic information — Temporal schema][ISO-19108]
* [ISO 19109:2015 Geographic information — Rules for application schema][ISO-19109]
* [ISO 19505-2:ISO/IEC 19505-2:2012, Information technology — Object Management Group Unified Modeling Language (OMG UML) — Part 2: Superstructure][ISO-19505-2]

### Standardienmukaisuus

Tonttijakosuunnitelman looginen tietomalli perustuu [ISO 19109][ISO-19109]-standardin yleiseen kohdetietomalliin (General Feature Model, GFM), joka määrittelee rakennuspalikat paikkatiedon ISO-standardiperheen mukaisten sovellusskeemojen määrittelyyn. GFM kuvaa muun muassa metaluokat ```FeatureType```, ```AttributeType``` ja ```FeatureAssociationType```. 

Tonttijakosuunnitelman tietomallissa kaikki tietokohteet, joilla on tunnus ja jotka voivat esiintyä erillään toisista kohteista on määritelty kohdetyypeinä stereotyypin ```FeatureType``` kautta. Sellaiset tietokohteet, joilla ei ole omaa tunnusta ja jotka voivat esiintyä vain kohdetyyppien attribuuttien arvoina on määritelty [ISO 19103][ISO-19103]-standardin ```DataType```-stereotyypin avulla. Lisäksi [HallinnollinenAlue](#hallinnollinenalue) ja [Organisaatio](#organisaatio) on mallinnettu vain rajapintojen (```Interface```) avulla, koska niitä ei ole tarpeen kuvata tonttijakosuunnitelman tietomallissa yksityiskohtaisesti, ja on todennäköistä, että suunnitelmia ylläpitävät tietojärjestelmät tarjoavat niille konkreettiset toteuttavat luokat.

[ISO 19109][ISO-19109] -standardin lisäksi tonttijakosuunnitelman tietomalli perustuu muihin paikkatiedon ISO-standardeihin, joista keskeisimpiä ovat [ISO 19103][ISO-19103] (UML-kielen käyttö paikkatietojen mallinnuksessa), [ISO 19107][ISO-19107] (sijaintitiedon mallintaminen) ja [ISO 19108][ISO-19108] (aikaan sidotun tiedon mallintaminen).

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

Tietomalli perustuu kaavatietomallin yhteiskäyttöisiin tietokomponentteihin. Kaavatietomallin MKP-ydin (maankäyttöpäätökset, MKP) kuvaa maankäyttöpäätösten tietomallintamisessa yleiskäyttöisiksi suunnitellut luokat ja niihin liittyvät koodistot, joita hyödynnetään tonttijakosuunnitelman soveltamisprofiilin kautta. MKP-ytimen lisäksi hyödynnetään laajasti Kaavatietomallin abstrakteja ja muita luokkia tonttijakosuunnitelmatietomallin määrittelemien koodistojen ja soveltamisprofiilin avulla. 

Tonttijakosuunnitelman UML-luokkakaaviot ovat saatavilla erillisellä [UML-kaaviot-sivulla](https://www.tonttijakosuunnitelma.fi/1.0-dev/looginenmalli/uml/).

## Kaavatietomallin ja tonttijakosuunnitelman tietomallin suhde ja tietovirrat

Kaavatietomallin mukaiset kaavamääräykset, joiden ```laji-attribuutin``` arvo on [Tonttijako-koodin](https://koodistot.suomi.fi/code;registryCode=rytj;schemeCode=RY_KaavamaaraysLaji_AK;codeCode=10) *Esitontti* tai *Sitova tonttijako laadittava*, ovat aluemaisia lähtötietoja tonttijakosuunnitelman laatimiselle.

Tonttijakosuunnitelman tietomallin esitonteille kaavamääräykset linkitetään suoraan kaavatietomallista. Linkitys tietomallien välillä perustuu viittaustunnukseen, joka muodostetaan tonttijakosuunnitelman tietomallin  [Kaavamaarays-luokan](#kaavamaarays) ```liittyvanKaavamaarayksenTunnus```-attribuutille annettavalla kaavatietomallin [Kaavamääräys-luokan](https://kaavatietomalli.fi/1.0/looginenmalli/dokumentaatio/#kaavamaarays) ```viittaustunnus``` -attribuutilla. Tällä vältytään toisteellisen kaavamääräystiedon tuottamiselta. Tonttijakosuunnitelman tietomalli mahdollistaa kuitenkin tonttijakosuunnitelman laatijan määrittää kerrosala laskennallisesti esitonttikohteille.

Elinkaarisäännöt-sivulla [Asemakaavan suhde esitonttikohteeseen -luvussa](https://www.tonttijakosuunnitelma.fi/1.0-dev/looginenmalli/elinkaarisaannot.html#asemakaavan-suhde-esitonttikohteeseen) on kuvattu kaavatiedon elinkaaren vaikutukset esitonttikohteen elinkaareen.

## Maankäyttöpäätöksien ydin (MKP-ydin)

### AbstraktiVersioituObjekti

Englanninkielinen nimi: AbstractVersionedObject

Stereotyyppi: FeatureType (kohdetyyppi)

Yhteinen yläluokka kaikille tonttijakosuunnitelman versiohallituille luokille. Kuvaa kaikkien kohdetyyppien yhteiset ominaisuudet ja assosiaatiot.

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
paikallinenTunnus| [CharacterString](#characterstring)     | 0..1 | kohteen pääavain (id)
nimiavaruus      | [URI](#uri) | 0..1  | tunnusten nimiavaruus
viittausTunnus   | [URI](#uri) | 0..1  | johdettu nimiavaruudesta, luokan englanninkielisestä nimestä ja paikallisesta tunnuksesta
identiteettiTunnus | [CharacterString](#characterstring)     | 0..1  | kohteen versioriippumaton tunnus
tuottajakohtainenTunnus | [CharacterString](#characterstring) | 0..1 | kohteen tunnus tuottajatietojärjestelmässä
viimeisinMuutos  | [TM_Instant](#tm_instant) | 0..1 | ajanhetki, jolloin kohteen tietoja on viimeksi muutettu tuottajatietojärjestelmässä
tallennusAika    | [TM_Instant](#tm_instant) | 0..1 | ajanhetki, jolloin kohde on tietojärjestelmään


### AbstraktiMaankayttoasia

Englanninkielinen nimi: AbstractLandUseMatter

Erikoistaa luokkaa [AbstraktiVersioituObjekti](https://www.tonttijakosuunnitelma.fi/1.0-dev/looginenmalli/dokumentaatio/#abstraktiversioituobjekti).

Stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
nimi| [LanguageString](#languagestring)     | 0..* | asian nimi
kuvaus      | [LanguageString](#languagestring) | 0..* | asian kuvausteksti
metatietokuvaus  | [URI](#uri) | 0..1  | viittaus ulkoiseen metatietokuvaukseen

### Asiakirja

Englanninkielinen nimi: Document

Kuvaa käsitteen [tonttijakosuunnitelman liite](https://www.tonttijakosuunnitelma.fi/1.0-dev/kasitemalli/#tonttijakosuunnitelman-liite). Erikoistaa luokkaa [AbstraktiVersioituObjekti](https://www.tonttijakosuunnitelma.fi/1.0-dev/looginenmalli/dokumentaatio/#abstraktiversioituobjekti). 

Stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
asiakirjatunnus | [URI](#uri) | 0..* | asiakirjan pysyvä tunnus, esim. diaarinumero tai muu dokumentinhallinnan tunnus
laji | [TonttijakosuunnitelmanAsiakirjanLaji](#tonttijakosuunnitelmanasiakirjanlaji) | 1  | asiakirjan tyyppi
lisatietolinkki  | [URI](#uri) | 0..1 | viittaus ulkoiseen lisätietokuvaukseen asiakirjasta
metatietolinkki | [URI](#uri) | 0..1 | viittaus ulkoiseen metatietokuvaukseen asiakirjasta
nimi | [LanguageString](#languagestring) | 0..* | asiakirjan nimi

### AbstraktiTapahtuma

Englanninkielinen nimi: AbstractEvent

Erikoistaa luokkaa [AbstraktiVersioituObjekti](https://www.tonttijakosuunnitelma.fi/1.0-dev/looginenmalli/dokumentaatio/#abstraktiversioituobjekti).

Stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
nimi |[LanguageString](#languagestring) | 0..* | tapahtuman kuvaus
tapahtumaAika | [TM_Object](#tm_object) | 0..1  | tapahtuman aika (hetki tai aikaväli)
kuvaus  | [LanguageString](#languagestring) | 0..* | tapahtuman tekstimuotoinen kuvaus

### Kasittelytapahtuma

Englanninkielinen nimi: HandlingEvent

Kuvaa käsitteen käsittelytapahtuma. Erikoistaa luokkaa [AbstraktiTapahtuma](https://www.tonttijakosuunnitelma.fi/1.0-dev/looginenmalli/dokumentaatio/#abstraktiversioituobjekti).

Stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
laji | [AbstraktiKasittelytapahtumanLaji](#abstraktikasittelytapahtumanlaji) | 1  | käsittelytapahtuman tyyppi

### Vuorovaikutustapahtuma

Englanninkielinen nimi: InteractionEvent

Kuvaa käsitteen Vuorovaikutustapahtuma, erikoistaa luokkaa [AbstraktiTapahtuma](#abstraktitapahtuma).

Stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
laji | [AbstraktiVuorovaikutustapahtumanLaji](#abstraktivuorovaikutustapahtumanlaji) | 1  | vuorovaikutustapahtuman tyyppi

### HallinnollinenAlue

Englanninkielinen nimi: AdministrativeArea

Stereotyyppi: Interface (rajapinta)

Hallinnollinen alue on kuvattu tonttijakosuunniteman tietomallissa ainoastaan rajapintana, koska sen mallintaminen on kuulu tonttijakosuunnitelman tietomallin sovellusalaan. Toteuttavien tietojärjestelmien tulee tarjota rajapinnan määrittelemät vähimmäistoiminnallisuudet.

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
hallintoaluetunnus | [CharacterString](#characterstring) | 1  | palauttaa hallinnollisen alueen tunnuksen
alue | [geometry](#geometry) | 1  | palauttaa hallinnollisen alueen aluerajauksen
nimi | [CharacterString](#characterstring) | 1  | palauttaa hallinnollisen alueen nimen valitulla kielellä

### Organisaatio

Englanninkielinen nimi: Organization

Stereotyyppi: Interface (rajapinta)

Organisaatio on kuvattu tonttijakosuunnitelman tietomallissa ainoastaan rajapintana, koska sen mallintaminen on kuulu tonttijakosuunnitelman tietomallin sovellusalaan. Toteuttavien tietojärjestelmien tulee tarjota rajapinnan määrittelemät vähimmäistoiminnallisuudet.

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
nimi | [CharacterString](#characterstring) | 1  | palauttaa organisaation alueen nimen valitulla kielellä

### Koodistot

#### TonttijakosuunnitelmanAsiakirjanLaji

Englanninkielinen nimi: PlotPlanDocumentKind

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_TonttijakosuunnitelmanAsiakirjanLaji" name="Tonttijakosuunnitelman asiakirjan laji" %}

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

## Tonttijakosuunnitelman tiedot

### Tonttijakosuunnitelma

Kuvaa käsitteen Tonttijakosuunnitelma, erikoistaa luokkaa AbstraktiMaankayttoasia, stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
laji | [Codelist](#tonttijakosuunnitelmanLaji) | 1  | kertoo, millainen tonttijakosuunnitelma on laadittu
tunnus  | [CharacterString](#CharacterString) | 1 | yksilöivä ID
elinkaarentila | [Codelist](#tonttijakosuunnitelmanElinkaarentila) | 1 | yleisimmät arvot vireillä oleva,  hyväksytty tai voimassa
kumoamistieto | [TonttijakosuunnitelmanKumoamistieto](#TonttijakosuunnitelmanKumoamistieto) | 0..* | tonttijakosuunnitelman tai sen osa, jonka tämä tonttijakosuunnitelma kumoaa
vireilletuloAika | [TM_Instant](#TM_Instant) | 0..1 | aika, jolloin tonttijakosuunnitema on tullut vireille
hyvaksymisAika | [TM_Instant](#TM_Instant) | 0..1 | aika, jolloin tonttijakosuunnitelma on tullut virallisesti hyväksyttyä
digitaalinenAlkupera | [DigitaalinenAlkupera](#DigitaalinenAlkupera) | 0..1 | luokittelu alunperin tietomallin mukaan luotuihin ja jälkeenpäin digitoituihin tonttijakosuunnitelmiin

AbstraktiMaankayttoasia-luokasta peritytyvä attribuutti aluerajauus kuvaa tonttijakosuunnitelman suunnittelualueen.

**Assosiaatiot**

Roolin nimi        | Kohde | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------
esitonttikohde | [Kaavakohde](#Kaavakohde) | 1 | paikkatietokohde, johon kohdistuu kaavamääräyksiä tai -suosituksia
laatija | [TonttijakosuunnitelmanLaatija](#TonttijakosuunnitelmanLaatija) | 1 | tonttijakosuunnitelman laatija

### TonttijakosuunnitelmanLaatija

Kuvaa käsitteen Tonttijakosuunnitelman laatija, erikoistaa luokkaa AbstraktiVersioituObjekti, stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
nimi | [CharacterString](#CharacterString) | 1  | laatijan nimi
nimike | [LanguageString](#LanguageString) | 0..*  | ammatti- tai virkanimike

### Abstraktikaavakohde

Erikoistaa luokkaa AbstraktiVersioituObjekti, stereotyyppi: FeatureType (kohdetyyppi)

Kaikkien tonttijakosuunnitelmaan liittyvien paikkatietokohteiden yhteinen abstrakti yläluokka. Kohteen geometria voi olla 2-ulotteinen piste,tai alue, tai 3-ulotteinen kappale. Moniosaiset geometriat (multigeometry) ovat sallittuja.

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
arvo | [Abstraktiarvo](#Abstraktiarvo) | 0..1  | Esitonttikohteen tunnusarvo tai esitonttirajapisteen numero
geometria | [geometry](#geometry) | 0..1  | esitonttikohteen sijainti
kohteenPinta-ala | [Number](#Number) | 0..*  | esitontin pinta-ala tai kolmiulotteisen esitontin projisoitu pinta-ala
pystysuunteinenRajaus | [Korkeusvali](#Korkeusvali) | 0..1  | kolmiulotteisen esitontin ylin ja alin korkeus merenpinnasta

### Esitonttikohde

Kuvaa käsitteen Esitonttikohde, erikoistaa luokkaa AbstraktiKaavakohde, stereotyyppi: FeatureType (kohdetyyppi)

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
laji | [EsitonttikohdeLaji](#EsitonttikohdeLaji) | 1  | kuvaa esitonttikohteen tyypin
suhdePeruskiinteistoon | [suhdePeruskiinteistoon](#suhdePeruskiinteistoon) | 0..1  | luokittelu esitonttikohteen sijoittumisesta suhteessa peruskiinteistöön, joka merkitään vain 3D-esitonttikohteelle
elinkaarentila | [TonttijakosuunnitelmanElinkaarentila](#TonttijakosuunnitelmanElinkaarentila) | 1  | 
muodostustieto | [Muodostustieto](#muodostustieto) | 1..* | tieto muodostajakiinteistöistä, josta/joista esitontti muodostetaan
kaavasuhdetieto | [Kaavasuhdetieto](#kaavasuhdetieto) | 1..* | tieto esitonttikohteeseen liittyvistä asemakaavoista ja niiden vaikutuksista
rakennettu | [boolean](#boolean) | 0..1 | tieto muun muassa rakentamattomasta rakennuspaikasta korotettua kiinteistöverotusta varten, onko esitonttikohde rakennettu asemakaavan mukaisesti. Lisäksi tämän tiedon perusteella saadaan tieto kunnan kaavavarannosta.
rakennuskielto | [boolean](#boolean) | 0..1 | kuvaa, onko esitonttikohteella rakennuskielto
voimassaoloAika | [TM_Period](#TM_Period) | 0..1 | aikaväli, jona asiasta tehty päätös suunnitelmineen ja säännöksineen on lainvoimainen


**Assosiaatiot**

Roolin nimi        | Kohde | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|----------
maarays | [Kaavamaarays](#Kaavamaarays) | 0..* | kaavaan sisältyvä sanallinen määräys, jolla ohjataan alueiden suunnittelua ja rakentamista

### Muodostustieto

Stereotyyppi: DataType (tietotyyppi)

Tieto muodostajakiinteistöistä, josta esitontti muodostetaan.

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
kiinteistoTunnus | [Tunnusarvo](#Tunnusarvo) | 1  | kiinteistörekisteriin merkityn rekisteriyksikön yksilöivä tunnus
muodostusPinta-ala | [Number](#Number) | 1  | muodostavan rekisterikiinteistön pinta-alan määrä neliömetreissä

### Kaavasuhdetieto

Stereotyyppi: DataType (tietotyyppi)

Tieto esitonttikohteeseen liittyvistä asemakaavoista ja niiden vaikutuksista.

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
kaavaTunnus | [URI](#URI) | 1  | kaavatunnus, joka muuttaa esitonttikohteen kaavamääräyksiä tai kumoaa esitonttikohteen
kaavalaji | [Kaavalaji](#Kaavalaji) | 1 | alueiden käytön ohjaustarpeeseen, kaavan sisältövaatimuksiin, prosessiin ja vastuulliseen hallintoviranomaiseen perustuva luokittelu
kumoaaEsitonttikohteen | [boolean](#boolean) | 1 | jos arvo on true, kaava kumoaa esitonttikohteen kokonaan

### Kaavamaarays

Kuvaa käsitteen Kaavamääräys, erikoistaa luokkaa AbstraktiTietoyksikko, stereotyyppi: FeatureType (kohdetyyppi)

laji             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
liittyvanKaavamaarayksenTunnus | [URI](#URI) | 1  | viittaustunnus kaavaan sisältyvän kaavamääräyksen tietokohteeseen, joka liittyy esitonttikohteeseen

### AbstraktiTietoyksikko

Erikoistaa luokkaa AbstraktiVersioituObjekti, stereotyyppi: FeatureType (kohdetyyppi)

Kaikkien tonttijakosuunnitelmiin liittyvien tietoelementtien yhteinen abstrakti yläluokka.

laji             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
arvo | [AbstraktiArvo](#AbstraktiArvo) | 0..*  | kuvaa tonttijakosuunnitelman laatijan tulkitsemaa arvoa esim. rakentamisen määrä

### TonttijakosuunnitelmanKumoamistieto

Stereotyyppi: DataType (tietotyyppi)

Kumoamistieto yksilöi mitä tonttijakosuunnitelmia tai niiden esitonttikohteita tonttijakosuunnitelma kumoaa lainvoimaiseksi tullessaan.

laji             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
kumottavanTonttijakosuunnitelmanTunnus | [URI](#URI) | 1  | tonttijakosuunnitelma, johon kumoaminen kohdistuu
kumoaaTonttijakosuunnitelmanKokonaan | [Boolean](#Boolean) | 1  | jos arvo on true, kumoaa tonttijakosuunniteman kokonaisuudessaan, muuten muiden ominaisuuksien yksilöimällä tavalla
kumottavanEsitonttikohteenTunnus | [URI](#URI) | 0..*  | esitonttikohde, johon kumoaminen kohdistuu

### Koodistot

#### TonttijakosuunnitelmanLaji

Englanninkielinen nimi: PlotPlanKind

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_TonttijakosuunnitelmanLaji" name="Tonttijakosuunnitelman laji" %}

#### TonttijakosuunnitelmanElinkaarentila

Englanninkielinen nimi: PlotPlanLifeCycleState

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_TonttijakosuunnitelmanElinkaarentila" name="Tonttijakosuunnitelman elinkaaren tila" %}

#### TonttijakosuunnitelmanAsiakirjanLaji

Englanninkielinen nimi: PlotPlanDocumentType

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_TonttijakosuunnitelmanAsiakirjanLaji" name="Tonttijakosuunnitelmaa koskevan asiakirjan laji" %}

#### SuhdePeruskiinteistoon

Englanninkielinen nimi: RelationToBaseProperty

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_SuhdePeruskiinteistoon" name="Esitonttikohteen suhde peruskiinteistöön" %}

#### EsitonttikohdeLaji

<!--Lisää sisäinen linkki? -->
Erikoistaa luokkaa AbstraktiKaavamaarayslaji. 

Englanninkielinen nimi: PreplotKind

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_EsitonttikohdeLaji" name="Esitonttikohteen laji" %}

#### TonttijakosuunnitelmanVuorovaikutustapahtumanLaji

<!--Lisää sisäinen linkki? -->
Erikoistaa luokkaa AbstraktiVuorovaikutustapahtumanLaji. 

Englanninkielinen nimi: PlotPlanPublicParticipationEventKind

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_TonttijakosuunnitelmanVuorovaikutustapahtumanLaji" name="Tonttijakosuunnitelman vuorovaikutustapahtuman laji" %}

#### TonttijakosuunnitelmanKasittelytapahtumanLaji

<!--Lisää sisäinen linkki? -->
Erikoistaa luokkaa AbstraktiKasittelytapahtumanLaji. 

Englanninkielinen nimi: PlotPlanHandlingEventKind

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_TonttijakosuunnitelmanKasittelytapahtumanLaji" name="Tonttijakosuunnitelman kasittelytapahtuman laji" %}

<!-- linkit standardeihin, joihin mainittu sivun alussa -->
[ISO-8601-1]: https://www.iso.org/standard/70907.html "ISO 8601-1:2019 Date and time — Representations for information interchange — Part 1: Basic rules"
[ISO-639-2]: https://www.iso.org/standard/4767.html "ISO 639-2:1998 Codes for the representation of names of languages — Part 2: Alpha-3 code"
[ISO-19103]: https://www.iso.org/standard/56734.html "ISO 19103:2015 Geographic information — Conceptual schema language"
[ISO-19107]: https://www.iso.org/standard/66175.html "ISO 19107:2019 Geographic information — Spatial schema"
[ISO-19108]: https://www.iso.org/standard/26013.html "ISO 19108:2002 Geographic information — Temporal schema"
[ISO-19109]: https://www.iso.org/standard/59193.html "ISO 19109:2015 Geographic information — Rules for application schema"
[ISO-19505-2]: https://www.iso.org/standard/52854.html "ISO/IEC 19505-2:2012, Information technology — Object Management Group Unified Modeling Language (OMG UML) — Part 2: Superstructure"
