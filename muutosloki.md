---
layout: "default"
description: "Tietomallin muutokset versiosta toiseen"
id: "muutosloki"
---
# Muutosloki
{:.no_toc}

1. 
{:toc}

## Muutokset versiosta 1.0 -> 2.0.0

### UML-mallin luokat

Siirrytty käyttämään {% include common/moduleLink.html moduleId="yhteisetkomponentit" path="looginenmalli/dokumentaatio/" title="Rakennetun ympäristön yhteiset tietokomponentit" %}-tietomallia, joka on tuotettu harmonisointityössä Kaavatietomallin, Tonttijakosuunnitelman sekä Rakentamiseen liittyvien lupapäätösten tietomallin välillä syksyllä 2021. Tässä yhteydessä aiemmin MKP-ydin -niminen paketti on siirretty omaan tietomalliinsa, ja laajennettu tarpeellisilta osin. Aiemmin ilman ä- ja ö-kirjaimia kirjoitetut luokkien, attirbuuttien ja assosiaatioiden nimet on nyt kirjoitettu suomenkielen mukaisesti ääkkösin (fyysisissä tietomalleissa ääkköset voidaan niin haluttaessa korvata edelleen a- ja o-kirjaimilla).

#### MKP-ydin -paketti

Paketin luokat yleistetty ja siirretty {% include common/moduleLink.html moduleId="yhteisetkomponentit" path="looginenmalli/dokumentaatio/" title="Yhteiset komponentit" %}-malliin. Yksityiskohteiset muutokset alla.

**AbstraktiVersioituObjekti**

* Uudelleennimetty -> VersioituObjekti.

**Asiakirja**

* Muutettu stereotyyppi FeatureType -> DataType.
* Lisätty attribuutti ```rooli: LanguageString[0..*]```.
* Poistettu assosiaatio ```liittyväAsiakirja:Asiakirja[0..*]```.

 **Lahtotietoaineisto**

 * Muutettu nimi -> ```Lähtötietoaineisto```.

 **AbstraktiMaankayttoasia**

 * Muutettu nimi -> ```Alueidenkäyttöasia```.
 * Lisätty uusi attribuutti ```asianhallintaTunnus:Tunnusarvo[0..*]```.
 * Muutettu assosiaatio ```asianLiite:Asiakirja[0..*]``` attribuutiksi ```asianLiite:Asiakirja[0..*]``` (```Yhteiset::Asiakirja``` on nyt stereotyypillä DataType, ei enää FeatureType).
 * Poistettu attribuutti ```voimassaoloAika:TM_Period[0..1]```.
 * Uudelleennimetty assosiaatio ```koskeeHallinnollistaAluetta``` -> ```hallinnollinenAlue```.
 * Poistettu assosiaatio ```vastuullinenPaatoksentekija:Paatoksentekija[0..1]```. Toteutuu ```TonttijakosuunnitelmanHyväksymispäätös```-luokan ```tekijä:Toimija```-assosiaation kautta.
 * Muutettu assosiaatio ```vastuullinenOrganisaatio:Organisaatio[0..1]``` -> ```vastuutaho:Toimija[0..1]```.

**AbstraktiTapahtuma**

* Muutettu nimi -> ```Tapahtuma```.
* Muutettu assosiaatio ```liittyvaAsiakirja:Asiakirja[0..*]``` attribuutiksi ```liittyväAsiakirja:Asiakirja[0..*]``` (```Yhteiset::Asiakirja``` on nyt stereotyypillä DataType, ei enää FeatureType).

**Kasittelytapahtuma**

* Muutettu nimi -> ```Käsittelytapahtuma```.
* Muutettu assosiaatio ```kasittelija:Organisaatio[0..1]``` -> ```käsittelijä:Toimija[0..*]```.
* Poistettu assosiaatio ```paatoksentekija:Paatoksentekija[0..1]```. Toteutuu ```TonttijakosuunnitelmanHyväksymispäätös```-luokan ```tekijä:Toimija```-assosiaation kautta.

**Paatoksentekija**
Poistettu luokka, toteutuu luokan ```Yhteiset::Toimija``` kautta.


#### Tonttijakosuunnitelma-paketti

**Tonttijakosuunnitelma**

* Yläluokka on muutettu ```MKP-ydin::AbstraktiMaankayttoasia``` -> ```Yhteiset::AlueidenKäyttöasia```
* Attribuutti ```virelletuloAika``` on siirretty yläluokkaan ```Yhteiset::AlueidenKäyttöasia```.
* Attribuutti ```elinkaaritila:TonttijakosuunnitelmanElinkaarenTila``` on siirretty yläluokan ```Yhteiset::AlueidenKäyttöasia``` attribuutiksi ```elinkaaritila:AbstraktiAsianElinkaaritila```.
* Lisätty rajoite, joka vaatii ```elinkaaritila``` attribuutin olevan tyyppiä ```TonttijakosuunnitelmanElinkaarenTila```.
* Attribuutti ```hyväksymisAika``` ilmaistaan nyt ```TonttijakosuunnitelmanHyväksymispäätös```-luokan attribuutilla ```päätöspäivämäärä```, jonka tyyppi on ```Date```. Yhteys ```TonttijakosuunnitelmanHyväksymispäätös```-luokkaan menee yläluokan ```Yhteiset::AlueidenKäyttöasia``` assosiaation ```päätös``` kautta.
* Lisätty attribuutti ```voimassaoloAika:TM_Period[0..1]```, joka periytyi aiemmin yläluokasta ```AbstraktiMaankayttoasia```.
* Assosiaatio ```laatija``` viittaa nyt luokkaan ```Yhteiset::SuunnitelmanLaatija``` aiemman ```TonttijakosuunnitelmanLaatija```-luokan sijasta.

**AbstraktiKaavakohde**

* Yleistetty ja siirretty Yhteiset komponentit -mallin luokkaksi ```RakennetynYmpäristönKohde```
* Lisätty uusi attribuutti ```kuvaus:LanguageString[0..*]```.
* Poistettu attribuutti ```arvo:AbstraktiArvo[0..*]```. Tätä oli kuvattu käytettävän esitontin tunnusarvon tai esitontin rajapisteen numeron ilmaisemiseen. Esitontin tunnukset ilmaistaan paremmin ```Yhteiset::VersioituObjekti``` -luokan tunnusattribuuteilla ja esitontin rajapisteen numero ```Yhteiset::Rajapiste```-luokan ```rajapyykinTaiPisteenTunnus:URI[0..*]```-attribuutilla.
* Poistettu attribuutti ```kohteenPinta-ala:NumeerinenArvo[0..1]```. Korvattu ```Esitonttikohde```-luokan johdetulla attribuutilla ```pintaAla:NumeerinenArvo```.
* Lisätty attribuutti ```nimi:LanguageString[0..*]```.

**AbstraktiTietoyksikko**

* Yleistetty ja siirretty Yhteiset komponentit -mallin luokkaksi ```Tietoyksikkö```.
* Lisätty uusi attribuutti ```liittyväAsiakirja:Asiakirja[0..*]```.
* Lisätty uusi kaksisuuntainen assosiaatio ```ryhmä:Tietoryhmä[0..1]```.
* Lisätty assosiaatio ```kohdistus:RakennetunYmpäristönKohde[0..*]```.
* Lisätty attribuutti ```nimi:LanguageString[0..*]```.

**TonttijakosuunnitelmanLaatija**

* Yleistetty ja siirretty Yhteiset komponentit -mallin luokkaksi ```SuunnitelmanLaatija```.


**Esitonttikohde**

* Poistettu attribuutti ```laji:EsitonttikohteenLaji```, esitontti ja esitontin rajapiste nyt kuvattu eri luokkina.
* Muutettu ```muodostustieto:Muodostustieto[1..*]```-attribuutin typiksi ```Kaavatiedot::Muodostajakiinteistö```.
* Muutettu ```maarays:Kaavamääräys[0..*]``` -assosiaatio assosiaatioksi ```toteutettavaKaavamääräys```, jota määrittää assosiaatioluokka ```ArvojenJyvitys```, ja jonka kohde on tyyppiä ```Kaavatiedot::Kaavamääräys```.

**Kaavamaarays**

Poistettu tarpeettomana ja nimeltään hämäävänä. Viittaukset Esitonttikohde-luokasta kaavan kaavamääräyksiin toteutetaan loogisela tasolla assosiaationa, joka voi fyysisen tason tietomallissa olla viittaus tunnuksen perusteella.

**Muodostustieto**

Korvattu ```Kaavatiedot::Muodostajakiinteistö```-luokalla.

**AbstraktiArvo ja sen aliluokat Ajanhetkiarvo, Aikaväliarvo, GeometriaArvo, Koodiarvo, NumeerinenArvo, NumeerinenArvoväli, Korkauspiste, Korkeusväli ja TekstiArvo**

* Uudelleennimetty ```AbstraktiArvo```-luokka ```OminaisuudenArvo```-nimiseksi. Siirretty aliluokkieen Yhteiset komponentit -malliin muutoin sellaisenaan.

**Tunnusarvo**

* Uudelleennimetty attribuutti ```rekisterinTunnus:URI[0..1]``` -> ```järjestelmänTunnus:URI[0..1]```.
* Uudelleennimetty attribuutti ```rekisterinNimi:LanguageString[0..*]``` -> ```järjestelmänNimi:LanguageString[0..*]```.

### Dokumentaatio

Kesken

### Laatu- ja elinkaarisäännöt

Kesken

