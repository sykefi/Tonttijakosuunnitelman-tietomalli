---
layout: "default"
title: "Looginen tietomalli - looginen tietomalli - dokumentaatio"
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

<!--**Graafinen mallinnus loogisesta tietomallista**

![Tonttijakosuunnitelman looginen malli graafisena mallinnuksena](looginenmalli.png "Looginen tietomalli -  graafinen mallinnus (Neo4j)")

(Lataa [Kaavio määritelmien kanssa](looginenmalli.png))-->

### Normatiiviset viittaukset
Tonttijakosuunnitelman tietomalli hyödyntää samoja normatiivisia viittauksia kuin kaavatietomallikin. Tämä käsittää seuraavat dokumentit:

* [ISO 639-2:1998 Codes for the representation of names of languages — Part 2: Alpha-3 code][ISO-639-2]
* [ISO 8601-1:2019 Date and time — Representations for information interchange — Part 1: Basic rules][ISO-8601-1]
* [ISO 19103:2015 Geographic information — Conceptual schema language][ISO-19103]
* [ISO 19107:2019 Geographic information — Spatial schema][ISO-19107]
* [ISO 19108:2002 Geographic information — Temporal schema][ISO-19108]
* [ISO 19109:2015 Geographic information — Rules for application schema][ISO-19109]
* [ISO 19505-2:ISO/IEC 19505-2:2012, Information technology — Object Management Group Unified Modeling Language (OMG UML) — Part 2: Superstructure][ISO-19505-2]

### Standardienmukaisuus

Looginen tonttijakosuunnitelman tietomalli perustuu [ISO 19109][ISO-19109]-standardin yleinen kohdetietomalliin (General Feature Model, GFM), joka määrittelee rakennuspalikat paikkatiedon ISO-standardiperheen mukaisten sovellusskeemojen määrittelyyn. GFM kuvaa muun muassa metaluokat ```FeatureType```, ```AttributeType``` ja ```FeatureAssociationType```. 
Tonttijakosuunnitelman tietomallissa kaikki tietokohteet, joilla on tunnus ja jotka voivat esiintyä erillään toisista kohteista on määritelty kohdetyypeinä (stereotyyppi ```FeatureType```. Sellaiset tietokohteet, joilla ei ole omaa tunnusta ja jotka voivat esiintyä vain kohdetyyppien attribuuttien arvoina on määritelty [ISO 19103][ISO-19103]-standardin ```DataType```-stereotyypin avulla. Lisäksi [HallinnollinenAlue](#hallinnollinenalue) ja [Organisaatio](#organisaatio) on mallinnettu vain rajapintojen (```Interface```) avulla, koska on niitä ei ole tarpeen kuvata tonttijakosuunnitelman tietomallissa yksityiskohtaisesti, ja on todennäköistä, että suunnitelmia ylläpitävät tietojärjestelmät tarjovat niille konkreettiset toteuttavat luokat.

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

## Tietomallin yleispiirteet

Tietomalli perustuu kaavatietomallin yhteiskäyttöisiin tietokomponentteihin. Kaavatietomallin MKP-ydin kuvaa maankäyttöpäätösten tietomallintamisessa yleiskäyttöisiksi suunnitellut luokat ja niihin liittyvät koodistot, joita hyödynnetään Tonttijakosuunnitelman soveltamisprofiilin kautta. MKP-ytimen lisäksi hyödynnetään laajasti Kaavatietomallin abstrakteja ja muita luokkia Tonttijakosuunnitelmatietomallin määrittelemien koodistojen ja soveltamisprofiilin avulla. 

Tonttijakosuunnitelman UML-luokkakaaviot ovat saatavilla erillisellä [UML-kaaviot-sivulla](https://www.tonttijakosuunnitelma.fi/1.0-dev/looginenmalli/uml/).

## Kaavatietomallin ja tonttijakosuunnitelman tietomallin suhde ja tietovirrat

Kaavatietomallin mukaiset kaavamääräykset, joiden laji-attribuutin arvo on Tonttijako-koodin “Esitontti” tai “Sitova tonttijako laadittava”, ovat aluemaisia lähtötietoja tonttijakosuunnitelman laatimiselle.

Tonttijakosuunnitelman tietomallin esitonteille kaavamääräykset linkitetään suoraan kaavatietomallista. Linkitys tietomallien välillä perustuu viittaustunnukseen, joka muodostetaan Tonttijakosuunnitelman tietomallin Kaavamaarays-luokan ```liittyvanKaavamaarayksenTunnus```-attribuutille annettavalla Kaavatietomallin Kaavamääräys-luokan viittaustunnuksella. Tällä vältetään toisteellisen kaavamääräystiedon tuottamiselta. Tonttijakosuunnitelman tietomalli mahdollistaa kuitenkin tonttijakosuunnitelman laatijan määrittää kerrosala laskennallisesti esitonttikohteille.

Elinkaarisäännöt-sivulla [Asemakaavan suhde esitonttikohteeseen -luku](https://www.tonttijakosuunnitelma.fi/1.0-dev/looginenmalli/elinkaarisaannot.html#asemakaavan-suhde-esitonttikohteeseen) kuvaa kaavatietojen ja tonttijakosuunnitelman väliset elinkaarisäännöt.

## MKP-ydin

### AbstraktiVersioituObjekti

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

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
nimi| [LanguageString](#languagestring)     | 0..* | asian nimi
kuvaus      | [LanguageString](#languagestring) | 0..* | asian kuvausteksti
metatietokuvaus  | [URI](#uri) | 0..1  | viittaus ulkoiseen metatietokuvaukseen

### Asiakirja

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
asiakirjatunnus| [ [URI](#uri) | 0..* | asiakirjan pysyvä tunnus, esim. diaarinumero tai muu dokumentinhallinnan tunnus
laji | [TonttijakosuunnitelmanAsiakirjaLaji](#tonttijakosuunnitelmanasiakirjalaji) | 1  | asiakirjan tyyppi
lisatietolinkki  | [URI](#uri) | 0..1 | viittaus ulkoiseen lisätietokuvaukseen asiakirjasta
metatietolinkki | [URI](#uri) | 0..1 | viittaus ulkoiseen metatietokuvaukseen asiakirjasta

### AbstraktiTapahtuma

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
nimi |[LanguageString](#languagestring) | 0..* | tapahtuman kuvaus
tapahtumaAika | [TM_Object](#tm_object) | 0..1  | tapahtuman aika (hetki tai aikaväli)
kuvaus  | [LanguageString](#languagestring) | 0..* | tapahtuman tekstimuotoinen kuvaus

### Kasittelytapahtuma

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
laji | [AbstraktiKasittelytapahtumanLaji](#AbstraktiKasittelytapahtumanLaji) | 1  | käsittelytapahtuman tyyppi

### Vuorovaikutustapahtuma

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
laji | [AbstraktiVuorovaikutustapahtumanLaji](#AbstraktiVuorovaikutustapahtumanLaji) | 1  | vuorovaikutustapahtuman tyyppi

### Organisaatio

{% include note.html content="Lisättävä." %}

### Koodistot

#### LahtotietoaineistonLaji

{% include note.html content="Lisättävä." %}

#### AsiakirjanLaji

{% include note.html content="Lisättävä." %}

#### AbstraktiKasittelytapahtumanLaji

{% include note.html content="Lisättävä." %}

#### AbstraktiVuorovaikutustapahtumanLaji

{% include note.html content="Lisättävä." %}

## Tonttijakosuunnitelman tiedot

### Tonttijakosuunnitelma

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
laji | [Codelist](#tonttijakosuunnitelmanLaji) | 1  | kertoo, millainen tonttijakosuunnitelma on laadittu
tunnus  | [CharacterString](#CharacterString) | 1 | yksilöivä ID
elinkaarentila | [Codelist](#tonttijakosuunnitelmanElinkaarentila) | 1 | yleisimmät arvot vireillä oleva,  hyväksytty tai voimassa
kumoamistieto | [TonttijakosuunnitelmanKumoamistieto](#TonttijakosuunnitelmanKumoamistieto) | 0..* | tonttijakosuunnitelman tai sen osa, jonka tämä tonttijakosuunnitelma kumoaa
vireilletuloAika | [TM_Instant](#TM_Instant) | 0..1 | aika, jolloin tonttijakosuunnitema on tullut vireille
hyvaksymisAika | [TM_Instant](#TM_Instant) | 0..1 | aika, jolloin tonttijakosuunnitelma on tullut virallisesti hyväksyttyä
digitaalinenAlkupera | [DigitaalinenAlkupera](#DigitaalinenAlkupera) | 0..1 | luokittelu alunperin tietomallin mukaan luotuihin ja jälkeenpäin digitoituihin tonttijakosuunnitelmiin

**Assosiaatiot**

Roolin nimi        | Kohde | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|-----------------
esitonttikohde | [Kaavakohde](#Kaavakohde) | 1 | paikkatietokohde, johon kohdistuu kaavamääräyksiä tai -suosituksia
laatija | [TonttijakosuunnitelmanLaatija](#TonttijakosuunnitelmanLaatija) | 1 | tonttijakosuunnitelman laatija

### TonttijakosuunnitelmanLaatija

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
nimi | [CharacterString](#CharacterString) | 1  | laatijan nimi
nimike | [LanguageString](#LanguageString) | 0..*  | ammatti- tai virkanimike

### Abstraktikaavakohde

Kaikkien tonttijakosuunnitelmaan liittyvien paikkatietokohteiden yhteinen abstrakti yläluokka. Kohteen geometria voi olla 2-ulotteinen piste,tai alue, tai 3-ulotteinen kappale. Moniosaiset geometriat (multigeometry) ovat sallittuja.

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
arvo | [Abstraktiarvo](#Abstraktiarvo) | 0..1  | Esitonttikohteen tunnusarvo tai esitonttirajapisteen numero
geometria | [geometry](#geometry) | 0..1  | esitonttikohteen sijainti
kohteenPinta-ala | [Number](#Number) | 0..*  | esitontin pinta-ala tai kolmiulotteisen esitontin projisoitu pinta-ala
pystysuunteinenRajaus | [Korkeusvali](#Korkeusvali) | 0..1  | kolmiulotteisen esitontin ylin ja alin korkeus merenpinnasta

### Esitonttikohde

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
laji | [EsitonttikohdeLaji](#EsitonttikohdeLaji) | 1  | kuvaa esitonttikohteen tyypin
suhdePeruskiinteistoon | [suhdePeruskiinteistoon](#suhdePeruskiinteistoon) | 0..1  | luokittelu esitonttikohteen sijoittumisesta suhteessa peruskiinteistöön, joka merkitään vain 3D-esitonttikohteelle
elinkaarentila | [TonttijakosuunnitelmanElinkaarentila](#TonttijakosuunnitelmanElinkaarentila) | 1  | 
muodostustieto | [Muodostustieto](#muodostustieto) | 1..* | tieto muodostajakiinteistöistä, josta/joista esitontti muodostetaan
kaavasuhdetieto | [Kaavasuhdetieto](#kaavasuhdetieto) | 1..* | tieto esitonttikohteeseen liittyvistä asemakaavoista ja niiden vaikutuksista
rakennettu | [boolean](#boolean) | 0..1 | tieto muun muassa kiinteistöverotusta varten siitä, onko esitonttikohde rakennettu asemakaavan mukaisesti
rakennuskielto | [boolean](#boolean) | 0..1 | kuvaa, onko esitonttikohteella rakennuskielto
voimassaoloAika | [TM_Period](#TM_Period) | 0..1 | aikaväli, jona asiasta tehty päätös suunnitelmineen ja säännöksineen on lainvoimainen


**Assosiaatiot**

Roolin nimi        | Kohde | Kardinaliteetti | Kuvaus
-----------------|--------------------|---------------------|----------
maarays | [Kaavamaarays](#Kaavamaarays) | 0..* | kaavaan sisältyvä sanallinen määräys, jolla ohjataan alueiden suunnittelua ja rakentamista

### Muodostustieto

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
kiinteistoTunnus | [Tunnusarvo](#Tunnusarvo) | 1  | kiinteistörekisteriin merkityn rekisteriyksikön yksilöivä tunnus
muodostusPinta-ala | [Number](#Number) | 1  | muodostavan rekisterikiinteistön pinta-alan määrä neliömetreissä

### Kaavasuhdetieto

Nimi             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
kaavaTunnus | [URI](#URI) | 1  | kaavatunnus, joka muuttaa esitonttikohteen kaavamääräyksiä tai kumoaa esitonttikohteen
kaavalaji | [Kaavalaji](#Kaavalaji) | 1 | alueiden käytön ohjaustarpeeseen, kaavan sisältövaatimuksiin, prosessiin ja vastuulliseen hallintoviranomaiseen perustuva luokittelu
kumoaaEsitonttikohteen | [boolean](#boolean) | 1 | jos arvo on true, kaava kumoaa esitonttikohteen kokonaan

### Kaavamaarays

laji             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
liittyvanKaavamaarayksenTunnus | [URI](#URI) | 1  | viittaustunnus kaavaan sisältyvän kaavamääräyksen tietokohteeseen, joka liittyy esitonttikohteeseen

### AbstraktiTietoyksikko

laji             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
arvo | [AbstraktiArvo](#AbstraktiArvo) | 0..*  | 

### TonttijakosuunnitelmanKumoamistieto

laji             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
kumottavanTonttijakosuunnitelmanTunnus | [URI](#URI) | 1  | tonttijakosuunnitelma, johon kumoaminen kohdistuu
kumoaaTonttijakosuunnitelmanKokonaan | [Boolean](#Boolean) | 1  | jos arvo on true, kumoaa tonttijakosuunniteman kokonaisuudessaan, muuten muiden ominaisuuksien yksilöimällä tavalla
kumottavanEsitonttikohteenTunnus | [URI](#URI) | 0..*  | esitonttikohde, johon kumoaminen kohdistuu

### EsitonttikohteenMuutostieto

laji             | Tyyppi              | Kardinaliteetti | Kuvaus
-----------------|---------------------|-----------------|------------------------------------
muutettavanEsitonttikohteenTunnus | [URI](#URI) | 1  | esitonttikohde, johon muutos kohdistuu
muutosKaavatunnus | [URI](#URI) | 1  | kaavatunnus, joka muuttaa esitonttikohteen kaavamääräyksiä tai kumoaa esitonttikohteenkokonaisuudessaan, muuten muiden ominaisuuksien yksilöimällä tavalla
kaavalaji | [URI](#URI) | 1  | alueiden käytön ohjaustarpeeseen, kaavan sisältövaatimuksiin, prosessiin ja vastuulliseen hallintoviranomaiseen perustuva luokittelu
kumoaaEsitonttikohteenKokonaan | [Boolean](#Boolean) | 1  | jos arvo on true, kumoaa esitonttikohteen kokonaisuudessaan, muuten muuttaa muiden ominaisuuksien yksilöimällä tavalla

## Koodistot

### MKP:n koodistot

#### LahtotietoaineistonLaji

Englanninkielinen nimi:

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: 

#### TonttijakosuunnitelmanAsiakirjanLaji

Englanninkielinen nimi:

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_TonttijakosuunnitelmanAsiakirjanLaji" name="Tonttijakosuunnitelmaa koskevan asiakirjan laji" %}

#### AbstraktiKasittelytapahtumanLaji

Englanninkielinen nimi:

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: 

#### AbstraktiVuorovaikutustapahtumanLaji

Englanninkielinen nimi:

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: 

### Tonttijakosuunnitelman koodistot

#### TonttijakosuunnitelmanLaji

Englanninkielinen nimi:

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_TonttijakosuunnitelmanLaji" name="Tonttijakosuunnitelman laji" %}

#### TonttijakosuunnitelmanElinkaarentila

Englanninkielinen nimi:

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_TonttijakosuunnitelmanElinkaarentila" name="Tonttijakosuunnitelman elinkaaren tila" %}

#### SuhdePeruskiinteistoon

Englanninkielinen nimi:

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_SuhdePeruskiinteistoon" name="Esitonttikohteen suhde peruskiinteistöön" %}

#### EsitonttikohdeLaji

<!--Lisää sisäinen linkki -->
Erikoistaa luokkaa AbstraktiKaavamaarayslaji. 

Englanninkielinen nimi:

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_EsitonttikohdeLaji" name="Esitonttikohteen laji" %}

#### TonttijakosuunnitelmanVuorovaikutustapahtumanLaji

<!--Lisää sisäinen linkki -->
Erikoistaa luokkaa AbstraktiVuorovaikutustapahtumanLaji. 

Englanninkielinen nimi:

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_TonttijakosuunnitelmanVuorovaikutustapahtumanLaji" name="Tonttijakosuunnitelman vuorovaikutustapahtuman laji" %}

#### TonttijakosuunnitelmanKasittelytapahtumanLaji

<!--Lisää sisäinen linkki -->
Erikoistaa luokkaa AbstraktiKasittelytapahtumanLaji. 

Englanninkielinen nimi:

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_TonttijakosuunnitelmanKasittelytapahtumanLaji" name="Tonttijakosuunnitelman kasittelytapahtuman laji" %}

#### AbstraktiKaavamaarayslaji

Englanninkielinen nimi:

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: 

{% include note.html content="Ei löydy vielä y-alustalta." %}

#### KaavamääräyslajiAsemakaava

Englanninkielinen nimi:

Erikoistaa luokkaa AbstraktiKaavamaarayslaji.

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_KaavamaaraysLaji_AK" name="Kaavamääräyslaji (asemakaava)" %}

#### EsitonttiRajapiste

Englanninkielinen nimi:

Erikoistaa luokkaa AbstraktiKaavamaarayslaji.

Stereotyyppi: CodeList (koodisto)

Laajennettavuus: Ei laajennettavissa

{% include codelistref.html id="RY_EsitonttiRajapiste" name="Esitonttirajapiste" %}

<!-- linkit standardeihin, joihin mainittu sivun alussa -->
[ISO-8601-1]: https://www.iso.org/standard/70907.html "ISO 8601-1:2019 Date and time — Representations for information interchange — Part 1: Basic rules"
[ISO-639-2]: https://www.iso.org/standard/4767.html "ISO 639-2:1998 Codes for the representation of names of languages — Part 2: Alpha-3 code"
[ISO-19103]: https://www.iso.org/standard/56734.html "ISO 19103:2015 Geographic information — Conceptual schema language"
[ISO-19107]: https://www.iso.org/standard/66175.html "ISO 19107:2019 Geographic information — Spatial schema"
[ISO-19108]: https://www.iso.org/standard/26013.html "ISO 19108:2002 Geographic information — Temporal schema"
[ISO-19109]: https://www.iso.org/standard/59193.html "ISO 19109:2015 Geographic information — Rules for application schema"
[ISO-19505-2]: https://www.iso.org/standard/52854.html "ISO/IEC 19505-2:2012, Information technology — Object Management Group Unified Modeling Language (OMG UML) — Part 2: Superstructure"
