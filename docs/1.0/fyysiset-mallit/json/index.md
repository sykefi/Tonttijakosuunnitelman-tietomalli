---
layout: "default"
title: "Kaavatietomalli - Kaava-JSON"
description: ""
page: "kaava-json"
modelversion: "1.0"
status: "Keskeneräinen"
---
# Kaava-JSON
{:.no_toc}

1. 
{:toc}

## Mallinnusperiaatteet

Kohdetyypit kuvataan GeoJSON Feature -objekteiksi, joilla on yksi ulkojäsen (foreign member) "featureType", jonka arvona on kohdetyypin englanninkielinen nimi. GeoJSON-objektin ominaisuuden "properties" alle tulevat kaikki muut kohteen ominaisuudet. Paikkatietokohteiden ensisijainen geometriatieto ilmaistaa GeoJSON-objektin "geometry"-omainaisuutena, ja sen koordinaatisto "crs"-ominaisuutena (ks. NamedCooodinateReferenceSystem). Kohteilla, jolla ei ole geometriatietoa "geometry"-ominaisuuden arvoksi tulee yhteentoimivuussyistä aina koordinaateiltaan tyhjä Polygon ja "crs" ominaisuutta ei anneta.

## Kohdetyypit (FeatureType)

### Document (Asiakirja)
Toteuttaa loogisen tietomallin luokan [Asiakirja](../../looginenmalli/dokumentaatio/#asiakirja).

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type
--------------|-------------------------|-----------------------|------------
[luokan nimi] |                         | featureType = "Document" | string
identiteettitunnus | URI [0..1]         | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | properties.latestChange | string (date-time)
asiakirjanTunnus | URI [0..*]           | properties.documentId            | array of string (uri)
nimi             | LanguageString [0..*]| properties.name                  | object (LanguageString)
laji             | AsiakirjanLaji       | properties.type                  | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/LiitteenLaji
lisatietolinkki  | URL [0..1]           | properties.externalInformationLink | string (uri)
metadatakuvaus   | URL [0..1]           | properties.metadata              | string (uri)

**Esimerkki**

```json
    {
        "id" : "http://uri.suomi.fi/object/rytj/kaava/Document/640bff6b-c16a-4947-af8d-d86f89106be1/1",
        "type" : "Feature",
        "geometry" : {
            "type" : "Polygon",
            "coordinates" : [ ]
        },
        "featureType": "Document",
        "properties": {
            "identityId": "http://uri.suomi.fi/object/rytj/kaava/Document/640bff6b-c16a-4947-af8d-d86f89106be1",
            "versionId": "http://uri.suomi.fi/object/rytj/kaava/Document/640bff6b-c16a-4947-af8d-d86f89106be1/1",
            "localId": "somelocalstuff-idjojodafg9we5794t7",
            "latestChange": "2020-11-06T12:05:00Z",
            "documentId": "",
            "name": { 
                "fin": "Kaavakartta, LAANILAN KAUP,OSAN LIIKENNEAL. JA HINTAN KAUP.OSAN KORTT. 6, 7 JA 39 SEKÄ URH.YM. AL.KOSKEVA AK.MUUTOS SEKÄ AK OSILLE LAANILAN JA HINTAN KAUP.OSIA."
            },
            "type": {
                "code": "http://uri.suomi.fi/codelist/rytj/LiitteenLaji/code/09",
                "title": {
                    "fin": "Kaavakartta"
                }
            },
            "externalInformationLink": "https://kartta.ouka.fi/viralliset_asemakaavat/ak1643.pdf",
            "metadata": ""
        }  
    }
```

### InputDataset (Lahtotietoaineisto)
Toteuttaa loogisen tietomallin luokan [Lahtotietoaineisto](../../looginenmalli/dokumentaatio/#lahtotietoaineisto)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type
--------------|-------------------------|-----------------------|------------
[luokan nimi] |                         | featureType = "InputDataset" | string
identiteettitunnus | URI [0..1]         | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | properties.latestChange | string (date-time)
aineistoTunnus   | URI [0..1]           | properties.datasetId             | string (uri)
nimi             | LanguageString [0..*]| properties.name                  | object (LanguageString)
laji             | LahtietoaineistonLaji | properties.type                  | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/LahtotietoaineistonLaji
lisatietolinkki  | URL [0..1]           | properties.externalInformationLink | string (uri)
metadatakuvaus   | URL [0..1]           | properties.metadata              | string (uri)

**Esimerkki**

```json
{
        "id" : "http://uri.suomi.fi/object/rytj/kaava/InputDataset/c4cee4eb-c4da-4441-88a3-20239f513f19/5",
        "type" : "Feature",
        "geometry" : {
            "type" : "Polygon",
            "coordinates" : [ ]
        },
        "featureType": "InputDataset",
        "properties": {
            "identityId": "http://uri.suomi.fi/object/rytj/kaava/InputDataset/c4cee4eb-c4da-4441-88a3-20239f513f19",
            "versionId": "http://uri.suomi.fi/object/rytj/kaava/InputDataset/c4cee4eb-c4da-4441-88a3-20239f513f19/5",
            "localId": "somelocalstuff-id66652385275",
            "latestChange": "2020-01-01T13:00:00Z",
            "datasetId": "",
            "name": {
                "fin": "Kaupungin X kantakartta-aineisto"
            },
            "type": {
                "code": "http://uri.suomi.fi/codelist/rytj/LahtotietoaineistonLaji/code/100",
                "title": {
                    "fin": "Pohjakartta"
                }
            },
            "externalInformationLink": "",
            "metadata": ""
        }  
    }
```
### HandlingEvent (Kasittelytapahtuma)

Toteuttaa loogisen tietomallin luokan [Kasittelytapahtuma](../../looginenmalli/dokumentaatio/#kasittelytapahtuma)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type
--------------|-------------------------|-----------------------|------------
[luokan nimi] |                         | featureType = "HandlingEvent" | string
identiteettitunnus | URI [0..1]         | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | properties.latestChange | string (date-time)
nimi             | LanguageString [0..*]| properties.name    | object (LanguageString)
tapahtumaAika    | TM_Object [0..1]     | properties.eventTime, properties.eventTime_start, properties.eventTime_end | string (date-time)
laji             | AbstraktiKasittelytapahtumanLaji | properties.type  | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/KasittelytapahtumanLaji-AK
sijainti      | GM_Point [0..1]         | geometry              | GeoJSON Point
lisatietolinkki | URL [0..1]            | properties.additionalInformationLink | string (uri)

**Assosiaatiot**

Nimi          | UML tyyppi              | JSON property name    | JSON type
--------------|-------------------------|-----------------------|------------
liittyvaAsia   | AbstraktiMaankayttoasia| properties.relatedMatter    | object (FeatureLink)
liittyvaDokumentti | Dokumentti [0..*]  | properties.relatedDocuments    | array of object (FeatureLink)
kasittelija   | Organisaatio [0..1]     | properties.handler    | object (FeatureLink)

**Esimerkki**

```json
 {
        "id" : "http://uri.suomi.fi/object/rytj/kaava/HandlingProcessingEvent/c5e9b3ff-fdfe-4939-8c27-35d4491ffcf6/5",
        "type" : "Feature",
        "geometry" : {
            "type" : "Polygon",
            "coordinates" : [ ]
        },
        "featureType": "HandlingProcessingEvent",
        "properties": {
            "identityId": "http://uri.suomi.fi/object/rytj/kaava/HandlingProcessingEvent/c5e9b3ff-fdfe-4939-8c27-35d4491ffcf6",
            "versionId": "http://uri.suomi.fi/object/rytj/kaava/HandlingProcessingEvent/c5e9b3ff-fdfe-4939-8c27-35d4491ffcf6/5",
            "localId": "somelocalstuff-idwpi8045jhgi5",
            "latestChange": "2020-01-01T13:00:00Z",
            "type": {
                "code": "http://uri.suomi.fi/codelist/rytj/KasittelytapahtumanLaji-AK/code/04",
                "title": {
                    "fin": "Kaavan hyväksymiskäsittely"
                }
            },
            "name": {
                "fin": "Hyväksyminen kunnanvaltuuston kokouksessa"
            },
            "eventTime": "2020-06-23",
            "relatedMatter": {
                "linkedFeatureId": "http://uri.suomi.fi/object/rytj/kaava/SpatialPlan/9c97e469-083d-4284-90a9-3dbebdfe5622/23",
                "linkedFeatureType": "SpatialPlan",
                "href": "https://rytj.fi/api/kaava/SpatialPlan/9c97e469-083d-4284-90a9-3dbebdfe5622/23",
                "title": {
                    "fin": "Asemakaava Y"
                }
            },
            "handler": {
                "linkedFeatureType": "Organisation",
                "linkedFeatureId": "http://uri.suomi.fi/object/rytj/yleinen/Organisation/f2bae809-a8e3-4550-b4a0-71bfad95968a/1",
                "href": "https://rytj.fi/api/kaava/Organisation/f2bae809-a8e3-4550-b4a0-71bfad95968a/1",
                "title": {
                    "fin": "Kunnan X kunnanvaltuusto"
                }
            },
            "relatedDocuments": [
                {
                    "linkedFeatureType": "Document",
                    "linkedFeatureId": "http://uri.suomi.fi/object/rytj/kaava/Document/2f0e91bd-bced-4eec-8151-6bd700ebac0e/1",
                    "href": "https://rytj.fi/api/kaava/Document/2f0e91bd-bced-4eec-8151-6bd700ebac0e/1",
                    "title": {
                        "fin": "Valtuuston kokouksen pöytäkirja"
                    }
                }
            ]
        }
    }
```

### InteractionEvent (Vuorovaikutustapahtuma)

Toteuttaa loogisen tietomallin luokan [Vuorovaikutustapahtuma](../../looginenmalli/dokumentaatio/#vuorovaikutustapahtuma)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type
--------------|-------------------------|-----------------------|------------
[luokan nimi] |                         | featureType = "InteractionEvent" | string
identiteettitunnus | URI [0..1]         | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | properties.latestChange | string (date-time)
nimi             | LanguageString [0..*]| properties.name    | object (LanguageString)
tapahtumaAika    | TM_Object [0..1]      | properties.eventTime, properties.eventTime_start, properties.eventTime_end | string (date-time)
laji             | AbstraktiVuorovaikutustapahtumaLaji | properties.type  | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/VuorovaikutustapahtumanLaji
sijainti      | GM_Point [0..1]         | geometry              | GeoJSON Point
lisatietolinkki | URL [0..1]            | properties.additionInformationLink | string (uri)
 
**Assosiaatiot**

Nimi          | UML tyyppi              | JSON property name    | JSON type
--------------|-------------------------|-----------------------|------------
liittyvaAsia   | AbstraktiMaankayttoasia | properties.relatedMatter    | object (FeatureLink)
liittyvaDokumentti | Dokumentti [0..*]  | properties.relatedDocuments    | array of object (FeatureLink)

**Esimerkki**

```json
{
        "id" : "http://uri.suomi.fi/object/rytj/kaava/InteractionEvent/c2001929-6810-4ea4-9b75-4dbde014b358/2",
        "type" : "Feature",
        "geometry" : {
            "type" : "Point",
            "coordinates" : [ 23.0, 65.0 ]
        },
        "featureType": "InteractionEvent",
        "properties": {
            "identityId": "http://uri.suomi.fi/object/rytj/InteractionEvent/c2001929-6810-4ea4-9b75-4dbde014b358",
            "versionId": "http://uri.suomi.fi/object/rytj/kaava/InteractionEvent/c2001929-6810-4ea4-9b75-4dbde014b358/2",
            "localId": "somelocalstuff-idwpi8045jhgi5",
            "latestChange": "2020-01-01T13:00:00Z",
            "type": {
                "code": "http://uri.suomi.fi/codelist/rytj/VuorovaikutustapahtumanLaji/code/01",
                "title": {
                    "fin": "Nähtävilläolo"
                }
            },
            "name": {
                "fin": "Asemakaava nähtävillä Kohtauspaikassa 1.7. - 15.7.2019"
            },
            "eventTime_start": "2019-07-01T00:00:00Z",
            "eventTime_end": "2019-07-15T00:00:00Z",
            "additionInformationLink": "https://kunta.fi/tapahtumakalenteri/iqoergqoergoi",
            "relatedMatter": {
                "linkedFeatureId": "http://uri.suomi.fi/object/rytj/kaava/SpatialPlan/9c97e469-083d-4284-90a9-3dbebdfe5622/23",
                "linkedFeatureType": "SpatialPlan",
                "href": "https://rytj.fi/api/kaava/SpatialPlan/9c97e469-083d-4284-90a9-3dbebdfe5622/23",
                "title": {
                    "fin": "Asemakaava Y"
                }
            },
            "relatedDocuments": [
                {
                    "linkedFeatureType": "Document",
                    "linkedFeatureId": "http://uri.suomi.fi/object/rytj/kaava/Document/cdee8a56-c573-4514-8cc4-a6ff1536ac62/1",
                    "href": "https://rytj.fi/api/kaava/Document/cdee8a56-c573-4514-8cc4-a6ff1536ac62/1",
                    "title": {
                        "fin": "Huomautus asema-aukion pohjoiseen rajaukseen"
                    },
                    "role": {
                        "fin": "Mielipide"
                    }
                }
            ]
        }  
    }
```

### SpatialPlan (Kaava)

Toteuttaa loogisen tietomallin luokan [Kaava](../../looginenmalli/dokumentaatio/#kaava)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type
--------------|-------------------------|-----------------------|------------
[luokan nimi] |                         | featureType = "SpatialPlan" | string
identiteettitunnus | URI [0..1]         | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | properties.latestChange | string (date-time)
nimi             | LanguageString [0..*]| properties.name                  | object (LanguageString)
kuvaus           | LanguageString [0..*] | properties.description           | object (LanguageString)
aluerajaus       | Surface [0..*]       | geometry  |  object (GeoJSON MultiPolygon)
oikeusvaikutteisuus | OikeusvaikutteisuudenLaji [0..1] | properties.legalEffectiveness | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/OikeusvaikututteisuudenLaji2
metatietokuvaus | URL [0..1]            | properties.metadata              | string (uri)
voimassaoloaika | TM_Period [0..1]      | properties.validFrom, properties.validTo | string (date-time)
laji            | Kaavalaji             | properties.type          | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/Kaavalajit
kaavatunnus     | URI                   | properties.spatialPlanId | string (uri)
elinkaaritila   | KaavanElinkaaritila   | properties.lifecycleStatus | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila
kumoamistieto   | KaavanKumoamistieto [0..*] | properties.cancellations | object (CancellationInfo)
maanalaisuus    | MaanalaisuudenLaji [0..1] | properties.groundRelativePosition | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/MaanalaisuudenLaji
virelletuloaika | TM_Instant [0..1]     | properties.initiationTime | string (date)
hyvaksymisaika  | TM_Instant [0..1]     | properties.approvalTime | string (date)
digitaalinenAlkupera | DigitaalinenAlkupera [0..1] | properties.digitalOrigin | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/kaavandigitointilahde

**Assosiaatiot**

Nimi          | UML tyyppi              | JSON property name    | JSON type
--------------|-------------------------|-----------------------|------------
vastuullinenOrganisaatio | Organisaatio[0..1] | properties.responsibleOrganisation | object (FeatureLink)
koskeeHallinnollistaAluetta | HallinnollinenAlue [0..*] | properties.administrativeArea | array of object (FeatureLink)
asianLiite    | Dokumentti [0..*]       | properties.attachments | array of object (FeatureLink)
hyodynnettyAineisto | Lahtotietoaineisto [0..*] | properties.usedInputDatasets | array of object (FeatureLink)
liittyvaAsia  | AbstraktiMaankayttoasia [0..*]  | properties.relatedMatters | array of object (FeatureLink)
selostus      | Kaavaselostus [0..1]    | properties.spatialPlanCommentary | object (FeatureLink)
laatija       | Suunnittelija [0..*]    | properties.planners   | array of object (FeatureLink)
kaavakohde    | Kaavamaarayskohde [0..*]| properties.planningObjects | array of object (FeatureLink)
yleismaarays  | Kaavamaarays [0..*]     | properties.generalRegulations | array of object (FeatureLink)

**Esimerkki**

```json
{
        "id" : "http://uri.suomi.fi/object/rytj/kaava/SpatialPlan/9c97e469-083d-4284-90a9-3dbebdfe5622/23",
        "type" : "Feature",
        "geometry" : {
            "type" : "MultiPolygon",
            "coordinates" : [ ]
        },
        "crs" : {
            "type" : "name",
            "properties" : {
                "name" : "http://www.opengis.net/def/crs/EPSG/0/3067"
            }
        },
        "featureType": "SpatialPlan",
        "properties" : {
            "identityId": "http://uri.suomi.fi/object/rytj/kaava/SpatialPlan/9c97e469-083d-4284-90a9-3dbebdfe5622",
            "versionId": "http://uri.suomi.fi/object/rytj/kaava/SpatialPlan/9c97e469-083d-4284-90a9-3dbebdfe5622/23",
            "localId": "somelocalstuff-id123445",
            "latestChange": "2020-01-01T13:00:00Z",
            "planId": "http://uri.suomi.fi/object/rytj/kaava/SpatialPlan/9c97e469-083d-4284-90a9-3dbebdfe5622",
            "planType": {
                "code": "http://uri.suomi.fi/codelist/rytj/Kaavalajit/code/31",
                "title": {
                    "fin": "Asemakaava"
                }
            },
            "name": {
                "fin": "Asemakaava X"
            },
            "description": {
                "fin": "Kuvaustekstiä"
            },
            "planObjects": [
                {
                    "linkedFeatureType": "PlanRegulationObject",
                    "linkedFeatureId": "http://uri.suomi.fi/object/rytj/kaava/PlanRegulationObject/6d32ca64-9a8d-44bb-9702-e46c228add64/76",
                    "href": "https://rytj.fi/api/kaava/PlanRegulationObject/6d32ca64-9a8d-44bb-9702-e46c228add64/76"
                }
            ],
            "generalRegulations": [
                {
                    "linkedFeatureType": "PlanRegulation",
                    "linkedFeatureId": "",
                    "href": ""
                }
            ],
            "administrativeAreaIds": [
               "http://paikkatiedot.fi/so/1001074/au/AdministrativeUnit/103047178/2020"
            ],
            "legalEffectiveness": {
                "code": "http://uri.suomi.fi/codelist/rytj/OikeusvaikutteisuudenLaji2/code/01",
                "title": {
                    "fin": "Oikeusvaikutteinen"
                }
            },
            "usedInputDatasets": [
                {
                    "linkedFeatureType": "InputDataset",
                    "linkedFeatureId": "http://uri.suomi.fi/object/rytj/kaava/InputDataset/c4cee4eb-c4da-4441-88a3-20239f513f19/5",
                    "href": "https://rytj.fi/api/kaava/InputDataset/c4cee4eb-c4da-4441-88a3-20239f513f19/5",
                    "title": {
                        "fin": "Kaupungin X kantakartta-aineisto"
                    }
                }
            ],
            "responsibleOrganisation": {
                "linkedFeatureType": "Organisation",
                 "linkedFeatureId": "http://uri.suomi.fi/object/rytj/yleinen/Organisation/e0fb82f9-be21-44f7-9caf-f565270c7f90/34",
                 "href": "https://rytj.fi/api/yleinen/Organisation/e0fb82f9-be21-44f7-9caf-f565270c7f90/34",
                 "title": {
                     "fin": "Kaupunki X"
                }
            },
            "groundRelativePosition": {
                "code": "http://uri.suomi.fi/codelist/rytj/MaanalaisuudenLaji/code/02",
                "title": {
                    "fin": "Maanpäällinen"
                }
            },
            "planners": [
                {
                    "linkedFeatureType": "Planner",
                    "linkedFeatureId": "",
                    "role": {
                        "fin": "Vastuullinen kaavanlaatija"
                    }
                }
            ],
            "planCommentary": {
                "linkedFeatureType": "SpatialPlanCommentary",
                "linkedFeatureId": "http://uri.suomi.fi/object/rytj/kaava/SpatialPlanCommentary/52b9cb68-7e00-4e09-976e-5be94730fb81/5",
                "href": "https://rytj.fi/api/kaava/SpatialPlanCommentary/52b9cb68-7e00-4e09-976e-5be94730fb81/5"
            },
            "attachments": [
                {
                    "linkedFeatureType": "Document",
                    "linkedFeatureId": "http://uri.suomi.fi/object/rytj/kaava/Document/640bff6b-c16a-4947-af8d-d86f89106be1/1",
                    "href": "https://rytj.fi/api/kaava/Document/640bff6b-c16a-4947-af8d-d86f89106be1/1",
                    "title": {
                        "fin": "Kaavakartta"
                    }
                }
            ],
             "cancellations": [
                {
                    "cancelledPlanId": "",
                    "cancelsEntirePlan": false,
                    "areaToCancel": {
                        "type" : "MultiPolygon",
                        "coordinates" : [ ]
                    },
                    "planningObjectIdsToCancel": [
                        ""
                    ],
                    "planningRegulationIdsToCancel": [
                        ""
                    ]
                }  
            ],
            "lifecycleStatus": {
                "code": "http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/06",
                "title": {
                    "fin": "Hyväksytty kaava"
                }
            },
            "digitalOrigin": {
                "code": "http://uri.suomi.fi/codelist/rytj/kaavandigitointilahde/code/01",
                "title": {
                    "fin": "Juridinen"
                }
            },
            "metadata": "",
            "initiationTime": "2018-03-01",
            "approvalTime": "2020-03-02",
            "validFrom": "2020-05-01T00:00:00Z",
        }
    }
```



###  SpatialPlanCommentary (Kaavaselostus)

Toteuttaa loogisen tietomallin luokan [Kaavaselostus](../../looginenmalli/dokumentaatio/#kaavaselostus)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type   |
--------------|-------------------------|-----------------------|-------------|
[luokan nimi] |                         | featureType = "SpatialPlanCommentary" | string
identiteettitunnus | URI [0..1]         | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | properties.latestChange | string (date-time)



**Assosiaatiot**

Nimi          | UML tyyppi              | JSON property name    | JSON type
--------------|-------------------------|-----------------------|------------
asiakirja     | Asiakirja [0..1]        | properties.document   | object (FeatureLink)

**Esimerkki**

```json
{
        "id" : "http://uri.suomi.fi/object/rytj/kaava/SpatialPlanCommentary/52b9cb68-7e00-4e09-976e-5be94730fb81/5",
        "type" : "Feature",
        "geometry" : {
            "type" : "Polygon",
            "coordinates" : [ ]
        },
        "crs" : {
            "type" : "name",
            "properties" : {
                "name" : "http://www.opengis.net/def/crs/EPSG/0/3067"
            }
        },
        "featureType": "SpatialPlanCommentary",
        "properties": {
            "identityId": "http://uri.suomi.fi/object/rytj/kaava/SpatialPlanCommentary/52b9cb68-7e00-4e09-976e-5be94730fb81",
            "versionId": "http://uri.suomi.fi/object/rytj/kaava/SpatialPlanCommentary/52b9cb68-7e00-4e09-976e-5be94730fb81/5",
            "localId": "somelocalstuff-id9983890",
            "latestChange": "2020-01-01T13:00:00Z",
            "document": {
                "linkedFeatureType": "DocumentReference",
                "linkedFeatureId": "",
                "href": ""
            }
        }
    }
```


### Planner (Suunnittelija)

Toteuttaa loogisen tietomallin luokan [Suunnittelija](../../looginenmalli/dokumentaatio/#suunnittelija)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type   |
--------------|-------------------------|-----------------------|-------------|
[luokan nimi] |                         | featureType = "Planner" | string
identiteettitunnus | URI [0..1]         | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | properties.latestChange | string (date-time)
nimi          | CharacterString         | properties.personName | string
nimike        | LanguageString [0..*]   | properties.professionTitle | object (LanguageString)

**Esimerkki**

```json
    {
        "id" : "http://uri.suomi.fi/object/rytj/kaava/Planner/391debf8-3d07-4a31-9854-17b90c86abb5/64",
        "type" : "Feature",
        "geometry" : {
            "type" : "Polygon",
            "coordinates" : [ ]
        },
        "featureType": "Planner",
        "properties": {
            "identityId": "http://uri.suomi.fi/object/rytj/kaava/Planner/391debf8-3d07-4a31-9854-17b90c86abb5",
            "versionId": "http://uri.suomi.fi/object/rytj/kaava/Planner/391debf8-3d07-4a31-9854-17b90c86abb5/64",
            "localId": "somelocalstuff-id0892459077094",
            "latestChange": "2020-01-01T13:00:00Z",
            "personName": "John Doe",
            "professionalTitle": {
                "fin": "Kaupunginarkkitehti"
            }
        }
    }
```

### PlanRegulationObject (Kaavamaarayskohde)

Toteuttaa loogisen tietomallin luokan [Kaavamaarayskohde](../../looginenmalli/dokumentaatio/#kaavamaarayskohde)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type   |
--------------|-------------------------|-----------------------|-------------|
[luokan nimi] |                         | featureType = "PlanRegulationObject" | string
identiteettitunnus | URI [0..1]         | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | properties.latestChange | string (date-time)
nimi            | LanguageString [0..*] | properties.name                  | object (LanguageString)
geometria     | Geometry                | geometry  |  object (GeoJSON Geometry)
pystysuuntainenRajaus | Korkeusvali [0..*] | properties.verticalLimits | array of object (HeightRange)
laji          | AbstraktiKaavamaarayskohdeLaji [0..1] | properties.type       | object (CodelistValue), ei arvoja toistaiseksi
elinkaaritila   | KaavanElinkaaritila   | properties.lifecycleStatus | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila
sijainninSitovuus | Sitovuuslaji [0..1] | properties.bindingnessOfLocation | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/Sitovuuslaji
voimassaoloaika | TM_Period [0..1]      | properties.validFrom, properties.validTo | string (date-time)
liittyvanLahtotietokohteenTunnnus | URI [0..*] | properties.relatedInputDatasetObjectIds | array of string (uri)
maanalaisuus    | MaanalaisuudenLaji [0..1] | properties.groundRelativePosition | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/MaanalaisuudenLaji

**Assosiaatiot**

Nimi          | UML tyyppi              | JSON property name    | JSON type
--------------|-------------------------|-----------------------|------------
kaava         | Kaava                   | properties.spatialPlan | object (FeatureLink)
liittyvaKohde | AbstraktiKaavakohde [0..*] | properties.relatedPlanObjects | array of object (FeatureLink)
maarays       | Kaavamaarays [0..*]     | properties.regulations | array of object (FeatureLink)

**Esimerkki**

```json
    {
        
        "id" : "http://uri.suomi.fi/object/rytj/kaava/PlanRegulationObject/6d32ca64-9a8d-44bb-9702-e46c228add64/76",
        "type" : "Feature",
        "geometry" : {
            "type" : "Polygon",
            "coordinates" : [ ]
        },
        "crs" : {
            "type" : "name",
            "properties" : {
                "name" : "http://www.opengis.net/def/crs/EPSG/0/3067"
            }
        },
        "featureType": "PlanRegulationObject",
        "properties": {
            "identityId": "http://uri.suomi.fi/object/rytj/kaava/PlanRegulationObject/6d32ca64-9a8d-44bb-9702-e46c228add64",
            "versionId": "http://uri.suomi.fi/object/rytj/kaava/PlanRegulationObject/6d32ca64-9a8d-44bb-9702-e46c228add64/76",
            "localId": "somelocalstuff-idgj40895425",
            "latestChange": "2020-01-01T13:00:00Z",
            "spatialPlan": {
                    "linkedFeatureType": "SpatialPlan",
                    "linkedFeatureId": "http://uri.suomi.fi/object/rytj/kaava/SpatialPlan/9c97e469-083d-4284-90a9-3dbebdfe5622/23",
                    "href": "https://rytj.fi/api/kaava/SpatialPlan/9c97e469-083d-4284-90a9-3dbebdfe5622/23"
            },
            "verticalLimits": [
                {
                    "minimumValue": 0.0,
                    "maximumValue": 1.5,
                    "unitOfMeasure": "m",
                    "referencePoint": {
                        "crs": {
                            "type" : "name",
                            "properties" : {
                                "name" : "http://www.opengis.net/def/crs/EPSG/0/3900"
                            }
                        }, 
                        "type" : "Point",
                        "coordinates" : [ 40.1 ]
                    }
                }
            ],
            "bindingnessOfLocation": {
                "code": "http://uri.suomi.fi/codelist/rytj/Sitovuuslaji/code/01",
                "title": {
                    "fin": "Sitova"
                }
            },
            "groundRelativePosition": {
                "code": "http://uri.suomi.fi/codelist/rytj/MaanalaisuudenLaji/code/02",
                "title": {
                    "fin": "Maanpäällinen"
                }
            },
            "regulations": [
                {
                    "linkedFeatureType": "PlanRegulation",
                    "linkedFeatureId": "http://uri.suomi.fi/object/rytj/kaava/PlanRegulation/f207c8b7-ed57-4e2e-8150-64fc229e17d3/3",
                    "href": "https://rytj.fi/api/kaava/PlanRegulation/f207c8b7-ed57-4e2e-8150-64fc229e17d3/3"
                }
            ],
             "lifecycleStatus": {
                "code": "http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/06",
                "title": {
                    "fin": "Hyväksytty kaava"
                }
            },
            "validFrom": "2020-05-01T00:00:00Z"
        }
    }
```

### PlanRegulation (Kaavamaarays)

Toteuttaa loogisen tietomallin luokan [Kaavamaarays](../../looginenmalli/dokumentaatio/#kaavamaarays)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type   |
--------------|-------------------------|-----------------------|-------------|
[luokan nimi] |                         | featureType = "PlanRegulation" | string
identiteettitunnus | URI [0..1]         | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | properties.latestChange | string (date-time)
nimi          | LanguageString [0..*]   | properties.name       | object (LanguageString)
arvo          | AbstraktiArvo [0..*]    | properties.values      | array of object (TimeInstantValue, TimePeriodValue, GeometryValue, CodeValue, NumericValue, NumericRange, HeightPosition, HeightRange, TextValue tai IdentifierValue)
laji          | AbstraktiKaavamaaraysLaji | properties.type       | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset, http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava
elinkaaritila   | KaavanElinkaaritila   | properties.lifecycleStatus | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila
teema         | AbstraktiKaavoitusteema [0..*] | properties.themes     | array of object (CodelistValue), http://uri.suomi.fi/codelist/rytj/Kaavoitusteema-AK, http://uri.suomi.fi/codelist/rytj/Kaavoitusteema
lisatieto     | Lisatieto [0..*]        | properties.additionalInfo | array of object (AdditionalInformation)
lisatietolinkki  | URL [0..1]           | properties.externalInformationLink | string (uri)
voimassaoloaika | TM_Period [0..1]      | properties.validFrom, properties.validTo | string (date-time)

**Assosiaatiot**

Nimi          | UML tyyppi              | JSON property name    | JSON type
--------------|-------------------------|-----------------------|------------
kaava         | Kaava [0..1]            | properties.spatialPlan | object (FeatureLink)
kaavakohde    | AbstraktiKaavakohde [0..1] | properties.targetObject  | object (FeatureLink)
perustelevaAsiakirja | Dokumentti [0..*] | properties.justifyingDocuments | array of object (FeatureLink)

**Esimerkki**

```json
    {
        "id" : "http://uri.suomi.fi/object/rytj/kaava/PlanRegulation/f207c8b7-ed57-4e2e-8150-64fc229e17d3/3",
        "type" : "Feature",
        "geometry" : {
            "type" : "Polygon",
            "coordinates" : [ ]
        },
        "featureType": "PlanRegulation",
        "properties": {
            "identityId": "http://uri.suomi.fi/object/rytj/kaava/PlanRegulation/f207c8b7-ed57-4e2e-8150-64fc229e17d3",
            "versionId": "http://uri.suomi.fi/object/rytj/kaava/PlanRegulation/f207c8b7-ed57-4e2e-8150-64fc229e17d3/3",
            "localId": "somelocalstuff-idgj40895425",
            "latestChange": "2020-01-01T13:00:00Z",
            "localId": "somelocalstuff-idfr00834790",
            "spatialPlan": {
                    "linkedFeatureType": "SpatialPlan",
                    "linkedFeatureId": "http://uri.suomi.fi/object/rytj/kaava/SpatialPlan/9c97e469-083d-4284-90a9-3dbebdfe5622/23",
                    "href": "https://rytj.fi/api/kaava/SpatialPlan/9c97e469-083d-4284-90a9-3dbebdfe5622/23"
            },
            "targetObject": {
                    "linkedFeatureType": "PlanRegulationObject",
                    "linkedFeatureId": "http://uri.suomi.fi/object/rytj/kaava/PlanRegulationObject/6d32ca64-9a8d-44bb-9702-e46c228add64/76",
                    "href": "https://rytj.fi/api/kaava/PlanRegulationObject/6d32ca64-9a8d-44bb-9702-e46c228add64/76"
            },
            "type": {
                "code": "http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/0001",
                "title": {
                    "fin": "Alueen käyttötarkoitus"
                }
            },
            "themes": [
                {
                    "code": "http://uri.suomi.fi/codelist/rytj/Kaavoitusteema-AK/code/02",
                    "title": {
                        "fin": "Käyttötarkoitus"       
                    }
                }
            ],
            "values": [
                {
                    "code": "http://uri.suomi.fi/codelist/rytj/kayttotarkoitusluokka-ak/code/323",
                    "title": {
                        "fin": "Liikerakennusten alue"
                    }
                },
                {
                    "code": "http://uri.suomi.fi/codelist/rytj/kayttotarkoitusluokka-ak/code/325",
                    "title": {
                        "fin": "Toimistorakennusten alue"
                    }
                }
            ],
            "lifecycleStatus": {
                "code": "http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/06",
                "title": {
                    "fin": "Hyväksytty kaava"
                }
            },
            "validFrom": "2020-05-01T00:00:00Z"
        }
    }
```

## Tietotyypit (DataType)

Tietotyypit eivät kuvaudu omiksi GeoJSON-kohteikseen, vaan kohdetyyppien tai toisten ttietotyyppien rakenteisiksi ominaisuuksiksi. Tietotyypin instanssilla ei ole tunnusta, eikä se voi esiintyä irrallaan sen sisältävästä kohteesta.

### CancellationInfo (KaavanKumoamistieto)

Toteuttaa loogisen tietomallin luokan [KaavanKumoamistieto](../../looginenmalli/dokumentaatio/#kaavankumoamistieto)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-----------------------|-------------|--------------
kumottavanKaavanTunnus | URI            |  cancelledPlanId | string (uri) | viittaa kaavatunnus-kenttään (SpatialPlan, properties.spatialPlanId)
kumoaaKaavanKokonaan | boolean          | cancelsEntirePlan     | boolean | sama kuin jos ko. kaavan kaikki kohteet ja määräykset kumottaisiin
kumottavaKaavanAlue  | Surface [0..*]   | areaToCancel         | object (GeoJSON MultiPolygon) | aluerajaukset, joiden sisältämät kohteet ja niiden määräykset kumotaan
kumottavanKohteenTunnus | URI [0..*]    | planningObjectIdsToCancel | array of string (uri)
kumottavanMaarayksenTunnus | URI [0..*] | planningRegulationIdsToCancel | array of string (uri)

**Esimerkki**

```json
{
    "cancelledPlanId": "",
    "cancelsEntirePlan": false,
    "areaToCancel": {
        "type" : "MultiPolygon",
        "coordinates" : [ ]
    },
    "planningObjectIdsToCancel": [
        ""
    ],
    "planningRegulationIdsToCancel": [
        ""
    ]
}
```

### AdditionalInformation (Lisatieto)

Toteuttaa loogisen tietomallin luokan [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-----------------------|-------------|--------------
laji          | AbstraktiLisatiedonLaji | type                  | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/Lisatiedonlaji
nimi          | LanguageString [0..*]   | name       | object (LanguageString)
arvo          | AbstraktiArvo [0..*]    | values      | array of object (TimeInstantValue, TimePeriodValue, GeometryValue, CodeValue, NumericValue, NumericRange, HeightPosition, HeightRange, TextValue tai IdentifierValue)

**Esimerkki**

```json
{
    "type": {
        "code": "http://uri.suomi.fi/codelist/rytj/Lisatiedonlaji/code/001",
        "title": {
            "fin": "Käyttötarkoituksen osuus kerrosalasta"
        }   
    },
    "values": [
        {
            "code": "http://uri.suomi.fi/codelist/rytj/kayttotarkoitusluokka-ak/code/323",
            "title": {
                "fin": "Liikerakennusten alue"
            }
        }, 
        {
            "minimumValue": 200,
            "maximumValue": 1000,
            "unitOfMeasure": "m2"
        }
    ]
}
```

### TimeInstantValue (Ajanhetkiarvo)

Toteuttaa loogisen tietomallin luokan [Ajanhetkiarvo](../../looginenmalli/dokumentaatio/#ajanhetkiarvo)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         | valueType="TimeInstantValue" | string | 
ajanhetki     | TM_Instant              | value                  | string (date-time)

**Esimerkki**

```json
    {
        "valueType": "TimeInstantValue",
        "value": "2020-11-06T10:00:05Z"
    }
```

### TimePeriodValue (Aikavaliarvo)

Toteuttaa loogisen tietomallin luokan [Aikavaliarvo](../../looginenmalli/dokumentaatio/#aikavaliarvo)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         | valueType="TimePeriodValue" | string | 
aikavali      | TM_Period               | startValue, endValue  | string (date-time) | jompi kumpi voi puuttua

**Esimerkki**

```json
    {
        "valueType": "TimePeriodValue",
        "startValue": "2020-11-06T00:00:00Z",
        "endValue": "2020-12-06T00:00:00Z"
    }
```

```json
    {
        "valueType": "TimePeriodValue",
        "startValue": "2020-11-06T00:00:00Z"
    }
```

### GeometryValue (GeometriaArvo)

Toteuttaa loogisen tietomallin luokan [GeometriaArvo](../../looginenmalli/dokumentaatio/#geometriaarvo)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         | valueType="GeometryValue" | string | 
geometria     | Geometry                | geometry              | object (GeoJSON Geometry) |

**Esimerkki**

```json
    {
        "valueType": "GeometryValue",
        "geometry": {
            "type" : "LineString",
            "coordinates" : [ ]
        }
    }
```

### CodeValue (Koodiarvo)

Toteuttaa loogisen tietomallin luokan [Koodiarvo](../../looginenmalli/dokumentaatio/#koodiarvo)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         | valueType="CodeValue" | string | 
koodi         | URI                     | code                  | string (uri) |
koodistonTunnnus | URI [0..1]           | codeList              | string (uri) |
otsikko       | LanguageString [0..*]   | title                 | object (LanguageString) |

**Esimerkki**

```json
    {
        "valueType": "CodeValue",
        "code": "http://uri.suomi.fi/codelist/rytj/Sitovuuslaji/code/01",
        "codeList": "http://uri.suomi.fi/codelist/rytj/Sitovuuslaji",
        "title": {
            "fin": "Sitova"
        }
    }
```


### NumericValue (NumeerinenArvo)

Toteuttaa loogisen tietomallin luokan [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo)


**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         | valueType="NumericValue" | string |
numeroarvo    | double                  | value                | number      |
mittayksikko  | CharacterString [0..1]  | unitOfMeasure     | string      |

**Esimerkki**

```json
{
    "valueType": "NumericValue",
    "value": 20,
    "unitOfMeasure": "dB"
}
```

### NumericRange (NumeerinenArvovali)

Toteuttaa loogisen tietomallin luokan [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         | valueType="NumericRange" | string |
nimimiarvo    | double [0..1]           | minValue              | number      |
maksimiarvo   | double [0..1]           | maxValue              | number      |
mittayksikko  | CharacterString [0..1]  | unitOfMeasure     | string      |

**Esimerkki**

```json
{
    "valueType": "NumericRange",
    "minValue": 1000,
    "maxValue": 2500,
    "unitOfMeasure": "m2"
}
```

### HeightPosition (Korkeuspiste)

Toteuttaa loogisen tietomallin luokan [Korkeuspiste](../../looginenmalli/dokumentaatio/#korkeuspiste)

**Attribuutit**


Nimi          | UML tyyppi              | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         | valueType="HeightPosition" | string |
numeroarvo    | double                  | value                | number      |
mittayksikko  | CharacterString [0..1]  | unitOfMeasure    | string      |
referenssipiste | GM_Point [0..1]       | referencePoint        | object (CoordinateReferencePoint) |

**Esimerkki**

```json
{
    "valueType": "HeightPosition",
    "value": 10.2,
    "unitOfMeasure": "m",
    "referencePoint": {
        "crs": {
            "type" : "name",
            "properties" : {
                "name" : "http://www.opengis.net/def/crs/EPSG/0/3900"
            }
        }, 
        "type" : "Point",
        "coordinates" : [ 40.1 ]
    }
}
```

### HeightRange (Korkeusvali)

Toteuttaa loogisen tietomallin luokan [Korkeusvali](../../looginenmalli/dokumentaatio/#korkeusvali)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         | valueType="HeightRange" | string |
nimimiarvo    | double [0..1]           | minValue              | number      |
maksimiarvo   | double [0..1]           | maxValue              | number      |
mittayksikko  | CharacterString [0..1]  | unitOfMeasure   | string      |
referenssipiste | GM_Point [0..1]       | referencePoint        | object (CoordinateReferencePoint) |

**Esimerkki**

```json
{
    "valueType": "HeightRange",
    "minValue": 10.0,
    "maxValue": 15.0,
    "unitOfMeasure": "m",
    "referencePoint": {
        "crs": {
            "type" : "name",
            "properties" : {
                "name" : "http://www.opengis.net/def/crs/EPSG/0/3900"
            }
        }, 
        "type" : "Point",
        "coordinates" : [ 40.1 ]
    }
}
```

### TextValue (Tekstiarvo)

Toteuttaa loogisen tietomallin luokan [Tekstiarvo](../../looginenmalli/dokumentaatio/#tekstiarvo)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         | valueType="TextValue" | string |
teksti        | LanguageString [1..*]   | value                 | object (LanguageString)  |
syntaksi      | CharacterString [0..1]  | syntax                | string      |

**Esimerkki**

```json
{
    "valueType": "TextValue",
    "value": {
        "fin": "Aluetta kehitetään asumisen sekä sitä palvelevien toimintojen ja lähipalvelujen sekä ympäristöhäiriötä aiheuttamattomien elinkeinotoimintojen alueena."
    },
    "syntax": "naturalLanguage"
}
```


### IdentifierValue (Tunnusarvo)

Toteuttaa loogisen tietomallin luokan [Tunnusarvo](../../looginenmalli/dokumentaatio/#tunnusarvo)

**Attribuutit**

Nimi          | UML tyyppi              | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         | valueType="IdentifierValue" | string |
nimi          | CharacterString[0..1]   | name                  | string | tunnuksen nimi
tunnus        | CharacterString         | identifier            | string (uri)| tunnuksen arvo
rekisterinTunnus | URI  [0..1]          | registerId            | string (uri)|
rekisterinNimi | LanguageString [0..*]  | registerName          | object (LanguageString)

**Esimerkki**

```json
{
    "valueType": "IdentifierValue",
    "name": "Kiinteistötunnus",
    "identifier": "86-413-1-124",
    "registerId": "http://maanmittauslaitos.fi/kiinteistorekisteri",
    "registerName": {
        "fin": "Kiinteistörekisteri"
    }
}
```

## Yleiskäyttöiset rakenteiset aputyypit

### LanguageString

Ominaisuus       | tyyppi      | pakollinen  | huomiot 
-----------------|-------------|-------------|-----------
[kielikoodi]     | string      | k           | ominaisuuden nimenä ISO 639-1 (2 merkkiä) tai ISO 639-2 (kolme merkkiä) -koodi, arvona kielikohtainen teksti


### CodelistValue

Ominaisuus       | tyyppi                   | pakollinen | huomiot
-----------------|--------------------------|------------|-------------
code             | string (uri)             | k         | mieluiten koko URL, jos resolvautuu
codelist         | string (uri)             | e         | ei yleensä tarvita, jos koodi resolvautuu
title            | object (LanguageString)  | e         | informatiivinen, vain tietoa tarjottaessa


### FeatureLink 

Ominaisuus       | tyyppi                   | pakollinen | huomiot
-----------------|--------------------------|------------|-------------
linkedFeatureId  | string (uri)             | k          | kohteen id-kentän arvo
linkedFeatureType | string                  | e          | kohteen featureType-kentän arvo, auttaa päättelemään linkatun tietorakenteen
href             | string (uri-reference)   | e          | suora URL viitattuun kohteeseen, API populoi ei käytetä lataustiedostossa
role             | object (LanguageString)  | e          | roolitieto (miten liittyy) mikäli tarvitaan assosiaatiossa
title            | object (LanguageString)  | e          | viitatun kohteen selväkielinen nimi, mikäli tarpeen  

### CoordinateReferencePoint 

Ominaisuus       | tyyppi                   | pakollinen | huomiot
-----------------|--------------------------|------------|-------------
crs              | object (NamedCooodinateReferenceSystem) | e | 
type             | string = "Point"         | k          |
coordinates      | array of number          | k          | koordinaatiston koordinaattien mukainen määrä numeroita


### NamedCooodinateReferenceSystem 

Sama kuin deprekoidun GeoJSON draft version 6:n "Named CRS", ks. http://wiki.geojson.org/GeoJSON_draft_version_6

Ominaisuus       | tyyppi                   | pakollinen | huomiot
-----------------|--------------------------|------------|-------------
type             | string = "name"          | k          | 
properties.name  | string (uri)             | k          | Koordinaatiston URI-muotoinen tunnus, esim. "http://www.opengis.net/def/crs/EPSG/0/4326", "http://www.opengis.net/def/crs/EPSG/0/3067" tai "http://www.opengis.net/def/crs/EPSG/0/3900"
      