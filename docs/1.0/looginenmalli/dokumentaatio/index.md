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

## Standardienmukaisuus

### Muulla määritellyt luokat ja tietotyypit

#### CharacterString

#### LanguageString

#### TM_Instant

#### TM_Period

#### URI

#### URL

#### Geometry

#### Point

#### Surface

## Kaavatietomallin yleispiirteet

## RYTJ-ydin

### AbstraktiVersioituObjekti
Englanninkielinen nimi: AbstractVersionedObject 

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
Englanninkielinen nimi: AbstractLandUseMatter

### Asiakirja
Kuvaa käsitteen []()

Englanninkielinen nimi: Document

### Lahtotietoaineisto
Kuvaa käsitteen []()

Englanninkielinen nimi: InputDataset

### AbstraktiTapahtuma
Englanninkielinen nimi: AbstractEvent

### Kasittelytapahtuma
Kuvaa käsitteen []()

Englanninkielinen nimi: HandlingEvent

### Vuorovaikutustapahtuma
Kuvaa käsitteen []()

Englanninkielinen nimi: InteractionEvent

### HallinnollinenAlue
Kuvaa käsitteen []()

Englanninkielinen nimi: AdministrativeArea

### Organisaatio
Kuvaa käsitteen []()

Englanninkielinen nimi: Organization

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

## RYTJ-kaavatiedot

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

