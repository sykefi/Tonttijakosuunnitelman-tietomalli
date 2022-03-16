---
layout: "default"
description: "Tietomallin muutokset versiosta toiseen"
id: "muutosloki"
---
# Muutosloki
{:.no_toc}

1. 
{:toc}

## Muutokset versiosta 1.0 -> dev (2.0.0?)

### Riippuvuudet

Looginen tietomalli riippuu seuraavista muista UML-tietomalleista ja niiden versioista:
* Rakennettu ymparisto
   * Yhteiset versio dev: [dokumentaatio](https://tietomallit.ymparisto.fi/ry-yhteiset/dev/), [XMI](https://github.com/ilkkarinne/ry-yhteiset/blob/develop/looginenmalli/uml/ry-yhteiset.xml)
   * Kaavatiedot versio dev: [dokumentaatio](https://tietomallit.ymparisto.fi/kaavatiedot/dev/), [XMI](https://github.com/ilkkarinne/kaavatietomalli-1/tree/develop/looginenmalli/uml/kaavatiedot.xml)
* ISO 19103 Conceptual schema languge, Edition 1: [XMI](https://github.com/ISO-TC211/HMMG/blob/master/XMI/2.1/Conceptual%20Models/ISO%2019103%20Edition%201.xmi)
* ISO 19107 Spatial schema, Edition 2: [XMI](https://github.com/ISO-TC211/HMMG/blob/master/XMI/2.1/Conceptual%20Models/ISO%2019107%20Edition%202.xmi)
* ISO 19108 Temporal schema, Edition 1: [XMI](https://github.com/ISO-TC211/HMMG/blob/master/XMI/2.1/Conceptual%20Models/ISO%2019108%20Edition%201.xmi)
* ISO 19019 Rules for application schema, Edition 2: [XMI](https://github.com/ISO-TC211/HMMG/blob/master/XMI/2.1/Conceptual%20Models/ISO%2019109%20Edition%202.xmi)
* ISO 639 Language Codes: [XMI](https://github.com/ISO-TC211/HMMG/blob/master/XMI/2.1/Conceptual%20Models/ISO%20639%20Language%20Codes.xmi)


### UML-mallin luokat

Siirrytty käyttämään {% include common/moduleLink.html moduleId="yhteisetkomponentit" path="looginenmalli/dokumentaatio/" title="Rakennetun ympäristön yhteiset tietokomponentit" %}-tietomallia, joka on tuotettu harmonisointityössä Kaavatietomallin, Tonttijakosuunnitelman sekä Rakentamiseen liittyvien lupapäätösten tietomallin välillä syksyllä 2021. Tässä yhteydessä aiemmin MKP-ydin -niminen paketti on siirretty omaan tietomalliinsa, ja laajennettu tarpeellisilta osin. Aiemmin ilman ä- ja ö-kirjaimia kirjoitetut luokkien, attirbuuttien ja assosiaatioiden nimet on nyt kirjoitettu suomenkielen mukaisesti ääkkösin (fyysisissä tietomalleissa ääkköset voidaan niin haluttaessa korvata edelleen a- ja o-kirjaimilla).

#### MKP-ydin -paketti

Paketin luokat yleistetty ja siirretty {% include common/moduleLink.html moduleId="yhteisetkomponentit" path="looginenmalli/dokumentaatio/" title="Yhteiset komponentit" %}-malliin. Yksityiskohtaiset muutokset alla.

**AbstraktiVersioituObjekti**

* Uudelleennimetty -> VersioituObjekti.

**Asiakirja**

* Muutettu stereotyyppi FeatureType -> DataType.
* Lisätty attribuutti ```rooli: LanguageString[0..*]```.
* Poistettu assosiaatio ```liittyväAsiakirja:Asiakirja[0..*]```.

 **AbstraktiMaankayttoasia**

 * Muutettu nimi -> ```AlueidenkäyttöjaRakentamisasia```.
 * Lisätty uusi attribuutti ```asianhallintaTunnus:Tunnusarvo[0..*]```.
 * Muutettu assosiaatio ```asianLiite:Asiakirja[0..*]``` attribuutiksi ```asianLiite:Asiakirja[0..*]``` (```Yhteiset::Asiakirja``` on nyt stereotyypillä DataType, ei enää FeatureType).
 * Poistettu attribuutti ```voimassaoloAika:TM_Period[0..1]```.
 * Uudelleennimetty assosiaatio ```koskeeHallinnollistaAluetta``` -> ```hallinnollinenAlue```.
 * Poistettu assosiaatio ```vastuullinenPaatoksentekija:Paatoksentekija[0..1]```. Toteutuu ```AlueidenkäyttösuunnitelmanHyväksymispäätös```-luokan ```tekijä:Toimija```-assosiaation kautta.
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

* Yläluokka on muutettu ```MKP-ydin::AbstraktiMaankayttoasia``` -> ```Yhteiset::AlueidenKäyttösuunnitelma```
* Attribuutti ```virelletuloAika``` on siirretty yläluokkaan ```Yhteiset::AlueidenKäyttöjaRakentamisasia```.
* Attribuutti ```elinkaaritila:TonttijakosuunnitelmanElinkaarenTila``` on siirretty yläluokan ```Yhteiset::AlueidenkäyttöjaRakentamisasia``` attribuutiksi ```elinkaaritila:AbstraktiAsianElinkaaritila```.
* Lisätty rajoite, joka vaatii ```elinkaaritila``` attribuutin olevan tyyppiä ```TonttijakosuunnitelmanElinkaarenTila```.
* Attribuutti ```hyväksymisAika``` ilmaistaan nyt ```AlueidenkäyttösuunnitelmanHyväksymispäätös```-luokan attribuutilla ```päätöspäivämäärä```, jonka tyyppi on ```Date```. Yhteys ```AlueidenkäyttösuunnitelmanHyväksymispäätös```-luokkaan menee yläluokan ```Yhteiset::AlueidenKäyttöjaRakentamisasia``` assosiaation ```päätös``` kautta.
* Lisätty attribuutti ```voimassaoloAika:TM_Period[0..1]```, joka periytyi aiemmin yläluokasta ```AbstraktiMaankayttoasia```.
* Assosiaatio ```laatija``` viittaa nyt luokkaan ```Yhteiset::SuunnitelmanLaatija``` aiemman ```TonttijakosuunnitelmanLaatija```-luokan sijasta.

**AbstraktiKaavakohde**

* Yleistetty ja siirretty Yhteiset komponentit -mallin luokkaksi ```RakennetunYmpäristönKohde```
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

Poistettu tarpeettomana ja nimeltään hämäävänä. Viittaukset Esitonttikohde-luokasta kaavan kaavamääräyksiin toteutetaan loogisella tasolla assosiaationa, joka voi fyysisen tason tietomallissa olla viittaus tunnuksen perusteella.

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

