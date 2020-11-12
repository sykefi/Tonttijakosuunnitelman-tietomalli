# Kohdetyypit (FeatureType)

Kohdetyypit kuvataan GeoJSON Feature -objekteiksi, joilla on yksi ulkojäsen (foreign member) "featureType", jonka arvona on kohdetyypin englanninkielinen nimi. GeoJSON-objektin ominaisuuden "properties" alle tulevat kaikki muut kohteen ominaisuudet. Paikkatietokohteiden ensisijainen geometriatieto ilmaistaa GeoJSON-objektin "geometry"-omainaisuutena, ja sen koordinaatisto "crs"-ominaisuutena (ks. NamedCooodinateReferenceSystem). Kohteilla, jolla ei ole geometriatietoa "geometry"-ominaisuuden arvoksi tulee yhteentoivmivuussyistä aina tyhjä Polygon ja "crs" ominaisuutta ei anneta.

## Asiakirja (Document)

### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type
--------------|-------------------------|-------------------------|-----------------------|------------
[luokan nimi] |                         |                         | featureType = "Document" | string
identiteettitunnus | URI [0..1]         | identityIdentifier      | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | versionIdentifier       | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | localIdentifier         | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | latestChange            | properties.latestChange | string (date-time)
asiakirjanTunnus | URI [0..*]           | documentIdentifier      | properties.documentId            | array of string (uri)
nimi             | LanguageString [0..*]| name                    | properties.name                  | object (LanguageString)
laji             | AsiakirjanLaji       | type                    | properties.type                  | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/LiitteenLaji
lisatietolinkki  | URL [0..1]           | additionalInformationLink | properties.externalInformationLink | string (uri)
metadatakuvaus   | URL [0..1]           | metadata                | properties.metadata              | string (uri)


### Esimerkki

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
            "additionalInformationLink": "https://kartta.ouka.fi/viralliset_asemakaavat/ak1643.pdf",
            "metadata": ""
        }  
    }
```

## Lahtotietoaineisto (InputDataset)

### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type
--------------|-------------------------|-------------------------|-----------------------|------------
[luokan nimi] |                         |                         | featureType = "InputDataset" | string
identiteettitunnus | URI [0..1]         | identityIdentifier      | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | versionIdentifier       | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | localIdentifier         | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | latestChange            | properties.latestChange | string (date-time)
aineistoTunnus   | URI [0..1]           | datasetIdentifier       | properties.datasetId             | string (uri)
nimi             | LanguageString [0..*]| name                    | properties.name                  | object (LanguageString)
laji             | LahtietoaineistonLaji| type                    | properties.type                  | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/LahtotietoaineistonLaji
lisatietolinkki  | URL [0..1]           | additionalInformationLink | properties.externalInformationLink | string (uri)
metadatakuvaus   | URL [0..1]           | metadata                | properties.metadata              | string (uri)

### Esimerkki

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
            "additionalInformationLink": "",
            "metadata": ""
        }  
    }
```
## Kasittelytapahtuma (HandlingEvent)

### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type
--------------|-------------------------|-------------------------|-----------------------|------------
[luokan nimi] |                         |                         | featureType = "HandlingEvent" | string
identiteettitunnus | URI [0..1]         | identityIdentifier      | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | versionIdentifier       | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | localIdentifier         | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | latestChange            | properties.latestChange | string (date-time)
nimi             | LanguageString [0..*]| name                    | properties.name    | object (LanguageString)
tapahtumaAika    | TM_Object [0..1]     | eventTime               | properties.eventTime, properties.eventTime_start, properties.eventTime_end | string (date-time)
laji             | AbstraktiKasittelytapahtumanLaji | type        | properties.type  | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/KasittelytapahtumanLaji-AK
sijainti      | GM_Point [0..1]         | location                | geometry              | GeoJSON Point
lisatietolinkki | URL [0..1]            | additionInformationLink | properties.properties | string (uri)

### Assosiaatiot

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type
--------------|-------------------------|-------------------------|-----------------------|------------
liittyvaAsia   | AbstraktiMaankayttoasia | relatedMatter          | properties.relatedMatter    | object (FeatureLink)
liittyvaDokumentti | Dokumentti [0..*]  | relatedDocument          | properties.relatedDocuments    | array of object (FeatureLink)
kasittelija   | Organisaatio [0..1]           | handler                 | properties.handler    | object (FeatureLink)

### Esimerkki

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

## Vuorovaikutustapahtuma (InteractionEvent)

### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type
--------------|-------------------------|-------------------------|-----------------------|------------
[luokan nimi] |                         |                         | featureType = "InteractionEvent" | string
identiteettitunnus | URI [0..1]         | identityIdentifier      | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | versionIdentifier       | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | localIdentifier         | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | latestChange            | properties.latestChange | string (date-time)
nimi             | LanguageString [0..*]| name                    | properties.name    | object (LanguageString)
tapahtumaAika    | TM_Object [0..1]     | eventTime               | properties.eventTime, properties.eventTime_start, properties.eventTime_end | string (date-time)
laji             | AbstraktiVuorovaikutustapahtumaLaji | type     | properties.type  | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/VuorovaikutustapahtumanLaji
sijainti      | GM_Point [0..1]         | location                | geometry              | GeoJSON Point
lisatietolinkki | URL [0..1]            | additionInformationLink | properties.properties | string (uri)
 
### Assosiaatiot

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type
--------------|-------------------------|-------------------------|-----------------------|------------
liittyvaAsia   | AbstraktiMaankayttoasia | relatedMatter          | properties.relatedMatter    | object (FeatureLink)
liittyvaDokumentti | Dokumentti [0..*]  | relatedDocument          | properties.relatedDocuments    | array of object (FeatureLink)

### Esimerkki

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

## Kaava (SpatialPlan)

### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type
--------------|-------------------------|-------------------------|-----------------------|------------
[luokan nimi] |                         |                         | featureType = "SpatialPlan" | string
identiteettitunnus | URI [0..1]         | identityIdentifier      | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | versionIdentifier       | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | localIdentifier         | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | latestChange            | properties.latestChange | string (date-time)
nimi             | LanguageString [0..*]| name                    | properties.name                  | object (LanguageString)
kuvaus           | LanguageString [0..*]| description             | properties.description           | object (LanguageString)
aluerajaus       | Surface [0..*]       | boundary                | geometry  |  object (GeoJSON MultiPolygon)
oikeusvaikutteisuus | OikeusvaikutteisuudenLaji [0..1] | legalEffectiveness | properties.legalEffectiveness | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/OikeusvaikututteisuudenLaji2
metatietokuvaus | URL [0..1]            | metadata                | properties.metadata              | string (uri)
voimassaoloaika | TM_Period [0..1]      | validity                | properties.validFrom, properties.validTo | string (date-time)
laji            | Kaavalaji             | type                    | properties.type          | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/Kaavalajit
kaavatunnus     | URI                   | spatialPlanIdentifier   | properties.spatialPlanId | string (uri)
elinkaaritila   | KaavanElinkaaritila   | lifecycleStatus         | properties.lifecycleStatus | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila
kumoamistieto   | KaavanKumoamistieto [0..*] | cancellation       | properties.cancellations | object (CancellationInfo)
maanalaisuus    | MaanalaisuudenLaji [0..1] | groundRelativePosition     | properties.groundRelativePosition | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/MaanalaisuudenLaji
virelletuloaika | TM_Instant [0..1]     | initiationTime          | properties.initiationTime | string (date)
hyvaksymisaika  | TM_Instant [0..1]     | approvalTime            | properties.approvalTime | string (date)
digitaalinenAlkupera | DigitaalinenAlkupera [0..1] | digitalOrigin | properties.digitalOrigin | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/kaavandigitointilahde

### Assosiaatiot

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type
--------------|-------------------------|-------------------------|-----------------------|------------
vastuullinenOrganisaatio | Organisaatio[0..1] | responsibleOrganisation | properties.responsibleOrganisation | object (FeatureLink)
koskeeHallinnollistaAluetta | HallinnollinenAlue [0..*] | administrativeArea | properties.administrativeArea | array of object (FeatureLink)
asianLiite    | Dokumentti [0..*]         | attachment              | properties.attachments | array of object (FeatureLink)
hyodynnettyAineisto | Lahtotietoaineisto [0..*] | usedInputDataset| properties.usedInputDatasets | array of object (FeatureLink)
liittyvaAsia  | AbstraktiMaankayttoasia [0..*] | relatedMatter    | properties.relatedMatters | array of object (FeatureLink)
selostus      | Kaavaselostus [0..1]    | spatialPlanCommentary   | properties.spatialPlanCommentary | object (FeatureLink)
laatija       | Suunnittelija [0..*]    | planner                 | properties.planners   | array of object (FeatureLink)
kaavakohde    | Kaavamaarayskohde [0..*]| planningObject          | properties.planningObjects | array of object (FeatureLink)
yleismaarays  | Kaavamaarays [0..*]     | generalRegulation       | properties.generalRegulations | array of object (FeatureLink)

### Esimerkki

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



## Kaavaselostus (SpatialPlanCommentary)

### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type   |
--------------|-------------------------|-------------------------|-----------------------|-------------|
[luokan nimi] |                         |                         | featureType = "SpatialPlanCommentary" | string
identiteettitunnus | URI [0..1]         | identityIdentifier      | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | versionIdentifier       | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | localIdentifier         | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | latestChange            | properties.latestChange | string (date-time)



### Assosiaatiot

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type
--------------|-------------------------|-------------------------|-----------------------|------------
asiakirja     | Asiakirja [0..1]        | document                | properties.document   | object (FeatureLink)

### Esimerkki

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


## Suunnittelija (Planner)

### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type   |
--------------|-------------------------|-------------------------|-----------------------|-------------|
[luokan nimi] |                         |                         | featureType = "Planner" | string
identiteettitunnus | URI [0..1]         | identityIdentifier      | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | versionIdentifier       | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | localIdentifier         | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | latestChange            | properties.latestChange | string (date-time)
nimi          | CharacterString         | name                    | properties.personName | string
nimike        | LanguageString [0..*]   | professionalTitle       | properties.professionTitle | object (LanguageString)

### Esimerkki

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

## Kaavamaarayskohde (PlanRegulationObject)

### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type   |
--------------|-------------------------|-------------------------|-----------------------|-------------|
[luokan nimi] |                         |                         | featureType = "PlanRegulationObject" | string
identiteettitunnus | URI [0..1]         | identityIdentifier      | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | versionIdentifier       | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | localIdentifier         | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | latestChange            | properties.latestChange | string (date-time)
nimi            | LanguageString [0..*] | name                    | properties.name                  | object (LanguageString)
geometria     | Geometry                | geometry                | geometry  |  object (GeoJSON Geometry)
pystysuuntainenRajaus | Korkeusvali [0..*] | verticalLimit        | properties.verticalLimits | array of object (HeightRange)
laji          | AbstraktiKaavamaarayskohdeLaji [0..1] | type      | properties.type       | object (CodelistValue), ei arvoja toistaiseksi
elinkaaritila   | KaavanElinkaaritila   | lifecycleStatus         | properties.lifecycleStatus | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila
sijainninSitovuus | Sitovuuslaji [0..1] | bindingnessOfLocation   | properties.bindingnessOfLocation | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/Sitovuuslaji
voimassaoloaika | TM_Period [0..1]      | validity                | properties.validFrom, properties.validTo | string (date-time)
liittyvanLahtotietokohteenTunnnus | URI [0..*] | relatedInputDatasetObjectId | properties.relatedInputDatasetObjectIds | array of string (uri)
maanalaisuus    | MaanalaisuudenLaji [0..1] | groundRelativePosition     | properties.groundRelativePosition | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/MaanalaisuudenLaji

### Assosiaatiot

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type
--------------|-------------------------|-------------------------|-----------------------|------------
kaava         | Kaava                   | spatialPlan             | properties.spatialPlan | object (FeatureLink)
liittyvaKohde | AbstraktiKaavakohde [0..*] | relatedPlanObject    | properties.relatedPlanObjects | array of object (FeatureLink)
maarays       | Kaavamaarays [0..*]     | regulation              | properties.regulations | array of object (FeatureLink)

### Esimerkki

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

## Kaavamaarays (PlanRegulation)
### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type   |
--------------|-------------------------|-------------------------|-----------------------|-------------|
[luokan nimi] |                         |                         | featureType = "PlanRegulation" | string
identiteettitunnus | URI [0..1]         | identityIdentifier      | properties.identityId   | string (uri)
versiotunnus     | URI [0..1]           | versionIdentifier       | properties.versionId     | string (uri)
paikallinenTunnus | URI [0..1]          | localIdentifier         | properties.localId    | string (uri)
viimeisinMuutos | TM_Instant [0..1]     | latestChange            | properties.latestChange | string (date-time)
nimi          | LanguageString [0..*]   | name                    | properties.name       | object (LanguageString)
arvo          | AbstraktiArvo [0..*]    | value                   | properties.values      | array of object (TimeInstantValue, TimePeriodValue, GeometryValue, CodeValue, NumericValue, NumericRange, HeightPosition, HeightRange, TextValue tai IdentifierValue)
laji          | AbstraktiKaavamaaraysLaji | type                  | properties.type       | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset, http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava
elinkaaritila   | KaavanElinkaaritila   | lifecycleStatus         | properties.lifecycleStatus | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila
teema         | AbstraktiKaavoitusteema [0..*] | theme            | properties.themes     | array of object (CodelistValue), http://uri.suomi.fi/codelist/rytj/Kaavoitusteema-AK, http://uri.suomi.fi/codelist/rytj/Kaavoitusteema
lisatieto     | Lisatieto [0..*]        | additionalInformation   | properties.additionalInfo | array of object (AdditionalInformation)
lisatietolinkki  | URL [0..1]           | additionalInformationLink | properties.externalInformationLink | string (uri)
voimassaoloaika | TM_Period [0..1]      | validity                | properties.validFrom, properties.validTo | string (date-time)

### Assosiaatiot

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type
--------------|-------------------------|-------------------------|-----------------------|------------
kaava         | Kaava [0..1]            | spatialPlan             | properties.spatialPlan | object (FeatureLink)
kaavakohde    | AbstraktiKaavakohde [0..1] | targetObject           | properties.targetObject  | object (FeatureLink)
perustelevaAsiakirja | Dokumentti [0..*] | justifyingDocument     | properties.justifyingDocuments | array of object (FeatureLink)

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

# Tietotyypit (DataType)

Tietotyypit eivät kuvaudu omiksi GeoJSON-kohteikseen, vaan kohdetyyppien tai toisten ttietotyyppien rakenteisiksi ominaisuuksiksi. Tietotyypin instanssilla ei ole tunnusta, eikä se voi esiintyä irrallaan sen sisältävästä kohteesta.

## KaavanKumoamistieto (CancellationInfo)
### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-------------------------|-----------------------|-------------|--------------
kumottavanKaavanTunnus | URI                | cancelledPlanIdentifier |  cancelledPlanId | string (uri) | viittaa kaavatunnus-kenttään (SpatialPlan, properties.spatialPlanId)
kumoaaKaavanKokonaan | boolean              | cancelsEntirePlan   | cancelsEntirePlan     | boolean | sama kuin jos ko. kaavan kaikki kohteet ja määräykset kumottaisiin
kumottavaKaavanAlue  | Surface [0..*]       | areaToCancel        | areaToCancel         | object (GeoJSON MultiPolygon) | aluerajaukset, joiden sisältämät kohteet ja niiden määräykset kumotaan
kumottavanKohteenTunnus | URI [0..*]       | planningObjectIdToCancel | planningObjectIdsToCancel | array of string (uri)
kumottavanMaarayksenTunnus | URI [0..*]       | planningRegulationIdToCancel | planningRegulationIdsToCancel | array of string (uri)

### Esimerkki

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

## Lisatieto (AdditionalInformation)
### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-------------------------|-----------------------|-------------|--------------
laji          | AbstraktiLisatiedonLaji | type                    | type                  | object (CodelistValue), http://uri.suomi.fi/codelist/rytj/Lisatiedonlaji
nimi          | LanguageString [0..*]   | name                    | name       | object (LanguageString)
arvo          | AbstraktiArvo [0..*]    | value                   | values      | array of object (TimeInstantValue, TimePeriodValue, GeometryValue, CodeValue, NumericValue, NumericRange, HeightPosition, HeightRange, TextValue tai IdentifierValue)

### Esimerkki

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

## Ajanhetkiarvo (TimeInstantValue)
### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         |                         | valueType="TimeInstantValue" | string | 
ajanhetki     | TM_Instant              | timeInstant             | value                  | string (date-time)

### Esimerkki

```json
    {
        "valueType": "TimeInstantValue",
        "value": "2020-11-06T10:00:05Z"
    }
```

## Aikavaliarvo (TimePeriodValue)
### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         |                         | valueType="TimePeriodValue" | string | 
aikavali      | TM_Period               | timePeriod              | startValue, endValue  | string (date-time) | jompi kumpi voi puuttua

### Esimerkki

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

## GeometriaArvo (GeometryValue)
### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         |                         | valueType="GeometryValue" | string | 
geometria     | Geometry                | geometry                | geometry              | object (GeoJSON Geometry) |

### Esimerkki

```json
    {
        "valueType": "GeometryValue",
        "geometry": {
            "type" : "LineString",
            "coordinates" : [ ]
        }
    }
```

## Koodiarvo (CodeValue)
### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         |                         | valueType="CodeValue" | string | 
koodi         | URI                     | code                    | code                  | string (uri) |
koodistonTunnnus | URI [0..1]           | codeListIdentifier      | codeList              | string (uri) |
otsikko       | LanguageString [0..*]   | title                   | title                 | object (LanguageString) |

### Esimerkki

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


## NumeerinenArvo (NumericValue)
### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         |                         | valueType="NumericValue" | string |
numeroarvo    | double                  | numericValue                  | value                | number      |
mittayksikko  | CharacterString [0..1]  | unitOfMeasure      | unitOfMeasure     | string      |

### Esimerkki

```json
{
    "valueType": "NumericValue",
    "value": 20,
    "unitOfMeasure": "dB"
}
```

## NumeerinenArvovali (NumericRange)
### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         |                         | valueType="NumericRange" | string |
nimimiarvo    | double [0..1]           | minimumValue            | minValue              | number      |
maksimiarvo   | double [0..1]           | maximumValue            | maxValue              | number      |
mittayksikko  | CharacterString [0..1]  | unitOfMeasure      | unitOfMeasure     | string      |

### Esimerkki

```json
{
    "valueType": "NumericRange",
    "minValue": 1000,
    "maxValue": 2500,
    "unitOfMeasure": "m2"
}
```

## Korkauspiste (HeightPosition)
### Attribuutit


Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         |                         | valueType="HeightPosition" | string |
numeroarvo    | double                  | numericValue            | value                | number      |
mittayksikko  | CharacterString [0..1]  | unitOfMeasure       | unitOfMeasure    | string      |
referenssipiste | GM_Point [0..1]       | referencePoint          | referencePoint        | object (CoordinateReferencePoint) |

### Esimerkki

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

## Korkeusvali (HeightRange)
### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         |                         | valueType="HeightRange" | string |
nimimiarvo    | double [0..1]           | minimumValue            | minValue              | number      |
maksimiarvo   | double [0..1]           | maximumValue            | maxValue              | number      |
mittayksikko  | CharacterString [0..1]  | unitOfMeasure       | unitOfMeasure   | string      |
referenssipiste | GM_Point [0..1]       | referencePoint          | referencePoint        | object (CoordinateReferencePoint) |

### Esimerkki

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

## Tekstiarvo (TextValue)
### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         |                         | valueType="TextValue" | string |
teksti        | LanguageString [1..*]   | text                    | value                  | object (LanguageString)  |
syntaksi      | CharacterString [0..1]  | syntax                  | syntax                | string      |

### Esimerkki

```json
{
    "valueType": "TextValue",
    "value": {
        "fin": "Aluetta kehitetään asumisen sekä sitä palvelevien toimintojen ja lähipalvelujen sekä ympäristöhäiriötä aiheuttamattomien elinkeinotoimintojen alueena."
    },
    "syntax": "naturalLanguage"
}
```


## Tunnusarvo (IdentifierValue)
### Attribuutit

Nimi          | UML tyyppi              | English name            | JSON property name    | JSON type   | huomioita
--------------|-------------------------|-------------------------|-----------------------|-------------|--------------
[luokan nimi] |                         |                         | valueType="IdentifierValue" | string |
tunnus        | URI                     | identifier              | identifier            | string (uri)|
rekisterinTunnus | URI  [0..1]          | registerIdentifier      | registerId            | string (uri)|
rekisterinNimi | LanguageString [0..*]  | registerName            | registerName          | object (LanguageString)

### Esimerkki

```json
{
    "valueType": "IdentifierValue",
    "identifier": "86-413-1-124",
    "registerId": "http://maanmittauslaitos.fi/kiinteistorekisteri",
    "registerName": {
        "fin": "Kiinteistörekisteri"
    }
}
```

# Yleiskäyttöiset rakenteiset tyypit

## LanguageString

Ominaisuus       | tyyppi      | pakollinen  | huomiot 
-----------------|-------------|-------------|-----------
[kielikoodi]     | string      | k           | ominaisuuden nimenä ISO 639-1 (2 merkkiä tai 639-2 (kolme merkkiä) -koodi, arvona kielikohtainen teksti


## CodelistValue

Ominaisuus       | tyyppi                   | pakollinen | huomiot
-----------------|--------------------------|------------|-------------
code             | string (uri)             | k         | mieluiten koko URL, jos resolvautuu
codelist         | string (uri)             | e         | ei yleensä tarvita, jos koodi resolvautuu
title            | object (LanguageString)  | e         | informatiivinen, vain tietoa tarjottaessa


## FeatureLink 

Ominaisuus       | tyyppi                   | pakollinen | huomiot
-----------------|--------------------------|------------|-------------
linkedFeatureId  | string (uri)             | k          | kohteen id-kentän arvo
linkedFeatureType | string                  | e          | kohteen featureType-kentän arvo, auttaa päättelemään linkatun tietorakenteen
href             | string (uri-reference)   | e          | suora URL viitattuun kohteeseen, API populoi ei käytetä lataustiedostossa
role             | object (LanguageString)  | e          | roolitieto (miten liittyy) mikäli tarvitaan assosiaatiossa
title            | object (LanguageString)  | e          | viitatun kohteen selväkielinen nimi, mikäli tarpeen  

## CoordinateReferencePoint 

Ominaisuus       | tyyppi                   | pakollinen | huomiot
-----------------|--------------------------|------------|-------------
crs              | object (NamedCooodinateReferenceSystem) | e | 
type             | string = "Point"         | k          |
coordinates      | array of number          | k          | koordinaatiston koordinaattien mukainen määrä numeroita


## NamedCooodinateReferenceSystem 

Sama kuin deprekoidun GeoJSON draft version 6:n "Named CRS", ks. http://wiki.geojson.org/GeoJSON_draft_version_6

Ominaisuus       | tyyppi                   | pakollinen | huomiot
-----------------|--------------------------|------------|-------------
type             | string = "name"          | k          | 
properties.name  | string (uri)             | k          | Koordinaatiston URI-muotoinen tunnus, esim. "http://www.opengis.net/def/crs/EPSG/0/4326", "http://www.opengis.net/def/crs/EPSG/0/3067" tai "http://www.opengis.net/def/crs/EPSG/0/3900"
      