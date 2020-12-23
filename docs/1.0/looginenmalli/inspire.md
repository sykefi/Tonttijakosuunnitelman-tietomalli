---
layout: "default"
title: "Kaavatietomalli - looginen tietomalli - Inspire"
description: ""
page: "inspire"
modelversion: "1.0"
status: "Keskeneräinen"
---
# Inspire-yhteensopivuus
{:.no_toc}

1. 
{:toc}

## Inspire Planned Land Use -sovellusskeema

## Luokka- ja ominaisuustason vastaavuudet

### SpatialPlan

Inspire Planned Land Use -skeeman ```SpatialPlan```-luokan tiedot johdetaan loogisen tason Kaavatietomallin [Kaava](dokumentaatio/#kaava)-luokan ja siihen liittyvien [Lahtotietoaineisto](dokumentaatio/#lahtotietoaineisto)- ja [Asiakirja](dokumentaatio/#asiakirja)-luokkien tiedoista alla esitettyjen taulukoiden mukaisesti.

Kukin Inspire Planned Land Use -skeeman ```SpatialPlan```-luokan instanssi johdetaan yhdestä Kaavatietomallin ```Kaava```-luokan instanssista, jonka ```elinkaaritila```-attribuutin arvo on  [Osittain voimassa](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaariTila/code/09), [Voimassa](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaariTila/code/10), [Kumottu](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaariTila/code/11) tai [Kumoutunut](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaariTila/code/12).

| Attribuutti                   |  Johtaminen Kaavatietomallin tiedoista        | Huomautukset
------------------------------- | --------------------------------------------- | -------------------------------
| inspireId: Identifier [1]     |  ks. seuraavat rivit                          |
|                               | ```localId```: Kaava.identiteettiTunnus       |
|                               | ```version```: Kaava.paikallinenTunnus ilman identiteettiTunnus -alkuosaa |
|                               | ```namespace```: <http://paikkatiedot.fi/so/{aineistotunnus}/LU/SpatialPlan>, jossa {aineistotunnus} on Maanmittauslaitoksen myöntämä
| extent: GM_MultiSurface [1]   | Kaava.aluerajaus                              |
| beginLifeSpanVersion: DateTime [1] (voidable) | Kaava.viimeisinMuutos                    | 
| officialTitle: CharacterString [1] | Kaava.nimi                               | valitaan yksi kieli käyttäjän preferessin perusteella
| levelOfSpatialPlan: LevelOfSpatialPlanValue [1] | <https://inspire.ec.europa.eu/codelist/LevelOfSpatialPlanValue/regional>
| endLifeSpanVersion: DateTime [1] (voidable) | Kaava.korvattuKohteella.tallennusAika      |
| validFrom: Date [0..1] (voidable) | Kaava.voimassaoloAika.begin               |
| validTo: Date [0..1] (voidable) | Kaava.voimassaoloAika.end                   |
| alternativeTitle: CharacterString [1] (voidable) | ei anneta
| planTypeName: PlanTypeName [1] | Kaava.laji                                   | [RY_Kaavalaji](http://uri.suomi.fi/codelist/rytj/RY_Kaavalaji)-koodisto tulisi määritellä laajentamaan Inspire:n [PlanTypeName](https://inspire.ec.europa.eu/codelist/PlanTypeNameValue)-koodistoa
| processStepGeneral: ProcessStepGeneralValue [1] (voidable) | Kaava.elinkaaritila | ks. [ProcessStepGeneralValue](#processstepgeneralvalue)
| backgroundMap: BackgroundMapValue [1] (voidable) | Kaava.hyodynnettyAineisto[laji = [Pohjakartta](http://uri.suomi.fi/codelist/rytj/RY_LahtotietoaineistonLaji/code/11)]
| ordinance: OrdinanceValue [1..*] (voidable) | ks. seuraavat rivit
|                                | ```ordinanceReference```: Kasittelytapahtuma[liittyvaAsia = Kaava.paikallinenTunnus JA (laji = [Kaavan hyväksyminen](http://uri.suomi.fi/codelist/rytj/RY_KaavanKasittelytapahtumanLaji/code/09) TAI laji = [Kaavan hyväksyminen oikaisukehotuksen johdosta](http://uri.suomi.fi/codelist/rytj/RY_KaavanKasittelytapahtumanLaji/code/10) TAI laji = [Kaavan kumoaminen](http://uri.suomi.fi/codelist/rytj/RY_KaavanKasittelytapahtumanLaji/code/11))].liittyvaAsiakirja[laji = [Päätös](http://uri.suomi.fi/codelist/rytj/RY_AsiakirjanLaji_YKAK/code/12)].asiakirjanTunnus
|                                | ```ordinanceDate```: Kasittelytapahtuma[liittyvaAsia = Kaava.paikallinenTunnus JA (laji = [Kaavan hyväksyminen](http://uri.suomi.fi/codelist/rytj/RY_KaavanKasittelytapahtumanLaji/code/09) TAI laji = [Kaavan hyväksyminen oikaisukehotuksen johdosta](http://uri.suomi.fi/codelist/rytj/RY_KaavanKasittelytapahtumanLaji/code/10) TAI laji = [Kaavan kumoaminen](http://uri.suomi.fi/codelist/rytj/RY_KaavanKasittelytapahtumanLaji/code/11))].tapahtumanAika

| Assosiaatio-rooli             | Johtaminen Kaavatietomallin tiedoista        | Huomautukset
| ----------------------------- | -------------------------------------------- | ---------------------------------
| officialDocument: OfficialDocumentation [1..*] (voidable) | Kaava.asianLiite | ks. [OfficialDocumentation](#officialDocumentation)
| member: ZoningElement [0..*]  | Kaava.kaavaKohde[maarays.laji = alakoodi([Alueen käyttötarkoitus (asemakaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01)) TAI maarays.laji = alakoodi([Alueen käyttötarkoitus (yleiskaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01))] | ks. [ZoningElement](#zoningelement)
| restriction: SupplementaryRegulation [0..*] | Kaava.kaavaKohde[maarays.laji != alakoodi([Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01))] | ks. [SupplementaryRegulation](#supplementaryregulation)


### ZoningElement

Inspire Planned Land Use -skeeman ```ZoningElement```-luokan tiedot johdetaan loogisen tason Kaavatietomallin [Kaavakohde](dokumentaatio/#kaavakohde)-luokan ja siihen liittyvän [Kaavamaarays](dokumentaatio/#kaavamaarays)-luokan tiedoista alla esitettyjen taulukoiden mukaisesti. Syötteeksi ne Kaavakohde-luokkien instanssit, jotka ovat joko [asemakaavan käyttötarkoitusalue](laatusaannot.html#laatu-vaat-kayttotarkoitusalue-ak-maar)- tai [yleiskaavan aluevaraus](laatusaannot.html#vaat-aluevaraus-yk-maar) -tyyppisiä.

| Attribuutti                   |  Johtaminen Kaavatietomallin tiedoista        | Huomautukset
------------------------------- | --------------------------------------------- | -------------------------------
| inspireId: Identifier [1]     |  ks. seuraavat rivit                          |
|                               | ```localId```: Kaavakohde.identiteettiTunnus       |
|                               | ```version```: Kaavakohde.paikallinenTunnus ilman identiteettiTunnus -alkuosaa |
|                               | ```namespace```: <http://paikkatiedot.fi/so/{aineistotunnus}/LU/ZoningElement>, jossa {aineistotunnus} on Maanmittauslaitoksen myöntämä
| geometry: GM_MultiSurface [1]    | Kaavakohde.geometria                           | geometria on aina aluemainen, ks. [Laatusäännöt, vaatimus ```laatu-vaat-aluemainen-kayttotarkoitusalue```](laatusaannot.html#laatu-vaat-aluemainen-kayttotarkoitusalue)
| validFrom: Date [0..1] (voidable) | Kaavakohde.maarays[laji = alakoodi([Alueen käyttötarkoitus (asemakaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01)) TAI maarays.laji = alakoodi([Alueen käyttötarkoitus (yleiskaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01))][1].voimassaoloAika.begin               |
| validTo: Date [0..1] (voidable) | Kaavakohde.maarays[laji = alakoodi([Alueen käyttötarkoitus (asemakaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01)) TAI maarays.laji = alakoodi([Alueen käyttötarkoitus (yleiskaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01))][1].voimassaoloAika.end                 |
| hilucsLandUse: HILUCSValue [1..*] | Kaavakohde.maarays[laji = alakoodi([Alueen käyttötarkoitus (asemakaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01)) TAI maarays.laji = alakoodi([Alueen käyttötarkoitus (yleiskaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01))].laji | ks. [HILUCSValue](#hilucsvalue)
| beginLifeSpanVersion: DateTime [1] (voidable) | Kaavakohde.viimeisinMuutos                    |
| hilucsPresence: HILUCSPresence [1] (voidable) | ei anneta, [VoidReasonValue: Unknown](https://inspire.ec.europa.eu/codelist/VoidReasonValue/Unknown)              |
| specificLandUse: LandUseClassificationValue [1..*] (voidable) | Kaavakohde.maarays[laji = alakoodi([Alueen käyttötarkoitus (asemakaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01)) TAI maarays.laji = alakoodi([Alueen käyttötarkoitus (yleiskaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01))].laji       | Tulisi johtaa alueen käyttötarkoitus -koodistot, alijoukkoina [Kaavamääräyslaji (asemakaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK)- ja [Kaavamääräyslaji (yleiskaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK)-koodistojen ```Alueen käyttötarkoitus```-koodin alikoodeista siten, että ne laajentavat Inspire:n [LandUseClassificationValue](https://inspire.ec.europa.eu/codelist/LandUseClassificationValue)-koodistoja.
| specificPresence: SpecificPresence [1] (voidable) | ei anneta, [VoidReasonValue: Unknown](https://inspire.ec.europa.eu/codelist/VoidReasonValue/Unknown)              |
| regulationNature: RegulationNatureValue [1] | <https://inspire.ec.europa.eu/codelist/RegulationNatureValue/generallyBinding>
| endLifeSpanVersion: DateTime [1] (voidable) | Kaavakohde.korvattuKohteella.tallennusAika      |
| processStepGeneral: ProcessStepGeneralValue [1] (voidable) | Kaavakohde.maarays[laji = alakoodi([Alueen käyttötarkoitus (asemakaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01)) TAI maarays.laji = alakoodi([Alueen käyttötarkoitus (yleiskaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01))].elinkaaritila | ks. [ProcessStepGeneralValue](#processstepgeneralvalue)
| backgroundMap: BackgroundMapValue [1] (voidable) | Kaavakohde.kaava.hyodynnettyAineisto[laji = [Pohjakartta](http://uri.suomi.fi/codelist/rytj/RY_LahtotietoaineistonLaji/code/11)]
| dimensioningIndication: DimensioningIndicationValue [0..*] (voidable) | ei anneta |


| Assosiaatio-rooli             | Johtaminen Kaavatietomallin tiedoista        | Huomautukset
| ----------------------------- | -------------------------------------------- | ---------------------------------
| plan: SpatialPlan [1]         | Kaavakohde.kaava                             |
| officialDocument: OfficialDocumentation [1..*] (voidable) | Kaavakohde.maarays.arvo.arvo | kukin TekstiArvo-tyyppisen arvon sisältö


### SupplementaryRegulation

Inspire Planned Land Use -skeeman ```SupplementaryRegulation```-luokan tiedot johdetaan loogisen tason Kaavatietomallin [Kaavamaarays](dokumentaatio/#kaavamaarays)-luokan tiedoista alla esitettyjen taulukoiden mukaisesti. Syötteeksi valitaan kaikki kaavan Kaavamääräys-instanssit, joiden ```laji```-attribuutti ei ole koodien [Alueen käyttötarkoitus (asemakaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01) tai  [Alueen käyttötarkoitus (yleiskaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01) alikoodi.

| Attribuutti                   |  Johtaminen Kaavatietomallin tiedoista        | Huomautukset
------------------------------- | --------------------------------------------- | -------------------------------
| validFrom: Date [0..1] (voidable) | Kaavamaarays.voimassaoloAika.begin        | 
| validTo: Date [0..1] (voidable) | Kaavamaarays.voimassaoloAika.end            | 
| specificSupplementaryRegulation: SpecificSupplementaryRegulationValue [1..*] (voidable) | Kaavamaarays.laji | Tulisi määritellä [Kaavamääräyslaji (asemakaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK)- ja [Kaavamääräyslaji (yleiskaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK) -koodistot laajentamaan Inspire:n [SpecificSupplementaryRegulationValue](https://inspire.ec.europa.eu/codelist/SpecificSupplementaryRegulationValue)-koodistoa
| processStepGeneral: ProcessStepGeneralValue [1] (voidable) | Kaavamaarays.elinkaaritila | ks. [ProcessStepGeneralValue](#processstepgeneralvalue)
| backgroundMap: BackgroundMapValue [1] (voidable) | Kaavamaarays.kaava.hyodynnettyAineisto[laji = [Pohjakartta](http://uri.suomi.fi/codelist/rytj/RY_LahtotietoaineistonLaji/code/11)]
| beginLifeSpanVersion: DateTime [1] (voidable) | Kaavamaarays.viimeisinMuutos                    |
| dimensioningIndication: DimensioningIndicationValue [0..*] (voidable) | ei anneta |
| inspireId: Identifier [1]     |  ks. seuraavat rivit                          |
|                               | ```localId```: Kaavamaarays.identiteettiTunnus       | 
|                               | ```version```: Kaavamaarays.paikallinenTunnus ilman identiteettiTunnus -alkuosaa |
|                               | ```namespace```: <http://paikkatiedot.fi/so/{aineistotunnus}/LU/SupplementaryRegulation>, jossa {aineistotunnus} on Maanmittauslaitoksen myöntämä
| endLifeSpanVersion: DateTime [1] (voidable) | Kaavamaarays.korvattuKohteella.tallennusAika      |
| geometry: GM_Object [1]       | Kaavamaarays.kohdistus.geometria                           | 
| inheritedFromOtherPlans: Boolean [1] (voidable) |
| specificRegulationNature: CharacterString [1] (voidable) | ei anneta, [VoidReasonValue: Unpopulated](https://inspire.ec.europa.eu/codelist/VoidReasonValue/Unpopulated)
| name: CharacterString [0..*] (voidable) | Kaavamaarays.nimi                  | valitaan yksi kieli käyttäjän preferessin perusteella
| regulationNature: RegulationNatureValue [1] | <https://inspire.ec.europa.eu/codelist/RegulationNatureValue/generallyBinding>
| supplementaryRegulation: SupplementaryRegulationValue [1..*] | Kaavamaarays.laji | ks. [SupplementaryRegulationValue](#supplementaryregulationvalue)

| Assosiaatio-rooli             | Johtaminen Kaavatietomallin tiedoista        | Huomautukset
| ----------------------------- | -------------------------------------------- | ---------------------------------
| plan: SpatialPlan [1]         | Kaavamaarays.kaava                             |
| officialDocument: OfficialDocumentation [1..*] (voidable) | Kaavamaarays.arvo.arvo | Kunkin TekstiArvo-tyyppisen arvon sisältö


## Koodistojen vastaavuudet

### ProcessStepGeneralValue

[Elinkaaren tila (yleis- ja asemakaava)](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaaritila)-koodiston arvo kuvataan Inspire:n [Process Step General](https://inspire.ec.europa.eu/codelist/ProcessStepGeneralValue)-koodiston arvoiksi alla olevan taulukon mukaisesti.

Elinkaaren tila                                                                            | Process Step General               |
------------------------------------------------------------------------------------------ | -----------------------------------|
[Hyväksytty kaava](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaariTila/code/06)       | [in the process of adoption](https://inspire.ec.europa.eu/codelist/ProcessStepGeneralValue/adoption)
[Oikaisukehotuksen alainen](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaariTila/code/07) | [in the process of adoption](https://inspire.ec.europa.eu/codelist/ProcessStepGeneralValue/adoption)
[Valituksen alainen](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaariTila/code/08)     | [in the process of adoption](https://inspire.ec.europa.eu/codelist/ProcessStepGeneralValue/adoption)
[Osittain voimassa](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaariTila/code/09)      | [legally binding or active](https://inspire.ec.europa.eu/codelist/ProcessStepGeneralValue/legalForce)
[Voimassa](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaariTila/code/10)               | [legally binding or active](https://inspire.ec.europa.eu/codelist/ProcessStepGeneralValue/legalForce)
[Kumottu](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaariTila/code/11)                | [obsolete](https://inspire.ec.europa.eu/codelist/ProcessStepGeneralValue/obsolete)
[Kumoutunut](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaariTila/code/12)             | [obsolete](https://inspire.ec.europa.eu/codelist/ProcessStepGeneralValue/obsolete)

### HILUCSValue

Kesken

### SupplementaryRegulationValue

Kesken




