---
layout: "default"
title: "Kaavatietomalli - soveltamisprofiili - yleiskaava"
description: ""
page: "profiili-yk"
modelversion: "1.0"
status: "Keskeneräinen"
---
# Kaavatietomallin soveltamisprofiili yleiskaava-aineistoille
{:.no_toc}

1. 
{:toc}

## Soveltamisala

Tämän dokumentin vaatimukset ja suositukset muodostavat Kaavatietomallin loogisen tietomallin soveltamisprofiilin yleiskaava-aineistoille. Soveltamisprofiili kuvaa ne rajoitukset ja lisävaatimukset, joita tulee noudattaa Kaavatietomallin [UML-kielisen kuvauksen](../../looginenmalli/uml/) ja sen [sanallisen dokumentaation](../../looginenmalli/dokumentaatio/) soveltamisessa yleiskaavojen tietoaineistojen kuvaamiseen.

Tämän muodollisen dokumentin tietoja täydentää [Kaavatietomallin keittokirja - yleiskaava](./cookbook.html), joka sisältää käytännön esimerkkejä Kaavatietomallin soveltamisesta yleiskaavoituksen kaavoitusratkaisuihin.

{% include clause_start.html type="req" id="prof-ak/vaat-yleiskaava-aineisto-maar" %}
Kaavatietomallin mukainen yleiskaava-aineisto koostuu [Kaava](../../looginenmalli/dokumentaatio/#kaava)-luokan instansseista, joiden ```laji```-attribuutin arvo on jokin [Kaavalajit]()-koodiston koodin [Yleiskaava](http://uri.suomi.fi/codelist/rytj/RY_Kaavalaji/code/2) [alakoodeista](../../looginenmalli/elinkaarisaannot.html#elinkaari-vaat-alakoodi-maar), sekä näihin instansseihin Kaavatietomallin mukaisesti liittyvistä muiden luokkien instansseista.
{% include clause_end.html %}

## Koodistot

### Vuorovaikutustapahtuman laji

Luokan [AbstraktiVuorovaikutustapahtumanLaji](../../looginenmalli/dokumentaatio/#abstraktivuorovaikutustapahtumanlaji) sijaan tulee käyttää tarkentavaa luokkaa [KaavanVuorovaikutustapahtumanLaji](../../looginenmalli/dokumentaatio/#kaavanvuorovaikutustapahtumanlaji).

{% include codelistref.html id="VuorovaikutustapahtumanLaji" name="Vuorovaikutustapahtuman laji (asema- ja yleiskaava)" %}

{% include bug.html content="Koodiston nimi ei vastaa UML-luokassa annettua" %}

### Käsittelytapahtuman laji

Luokan [AbstraktiKasittelytapahtumanLaji](../../looginenmalli/dokumentaatio/#abstraktikasittelytapahtumanlaji) sijaan tulee käyttää tarkentavaa luokkaa [KaavanKasittelytapahtumanLaji](../../looginenmalli/dokumentaatio/#kaavankasittelytapahtumanlaji).

{% include codelistref.html id="KasittelytapahtumanLaji-AK" name="Käsittelytapahtuman laji (asema- ja yleiskaava)" %}

{% include bug.html content="Koodiston nimi ei vastaa UML-luokassa annettua" %}

### Kaavamääräyskohdelaji

Kaavamääräyskohdelaji-koodisto on varattu tulevaisuuden käyttöön. Tämä tietomalliin versio ei määritä mitään arvoja ko. koodistolle.

### Kaavoitusteema

Luokan [AbstraktiKaavoitusteema](../../looginenmalli/dokumentaatio/#abstraktikaavoitusteema) sijaan tulee käyttää tarkentavaa luokkaa [KaavoitusteemaYleiskaava](../../looginenmalli/dokumentaatio/#kaavoitusteemayleiskaava).

{% include codelistref.html id="Kaavoitusteema" name="Kaavoitusteema (yleiskaava)" %}

{% include bug.html content="Koodiston nimi ei vastaa UML-luokassa annettua" %}

### Kaavamääräyslaji

Luokan [AbstraktiKaavamaaraysLaji](../../looginenmalli/dokumentaatio/#abstraktikaavamaarayslaji) sijaan tulee käyttää tarkentavaa luokkaa [KaavamaaraysLajiYleiskaava](../../looginenmalli/dokumentaatio/#kaavamaarayslajiyleiskaava).

{% include codelistref.html id="KaavamaaraysLajiYleiskaava" name="Kaavamääräyslaji (yleiskaava)" %}

### Kaavamääräyksen lisätiedon laji

Luokan [AbstraktiLisatiedonLaji](../../looginenmalli/dokumentaatio/#abstraktilisatiedonlaji) sijaan tulee käyttää tarkentavaa luokkaa [LisatiedonLajiAsemakaava](../../looginenmalli/dokumentaatio/#lisatiedonlajiasemakaava).

{% include codelistref.html id="Lisatiedonlaji" name="Kaavamääräyksen lisätiedon laji (asema- ja yleiskaava)" %}

{% include question.html content="UML-mallissa eri koodistot YK ja AK. Tarvitaanko kaksi koodistoa vai voiko olla sama?" %}

## Kaavamääräyslajien arvot ja lisätiedot

### Käyttötarkoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/00>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

#### Alueen käyttötarkoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0001>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi tai useampi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa koodistoon [Käyttötarkoituslaji](http://uri.suomi.fi/codelist/rytj/kayttotarkoitusluokka-ak)
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää annettujen käyttötarkoituslajien avulla muodostettua kaavamääräystietoa.

Mahdolliset ```lisatieto```-attribuutin arvot:
* Nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Poisluettava käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/Lisatiedonlaji/code/005), ja jolla on yksi tai useampi arvo [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), jotka viittaavat joko koodistoon [Käyttötarkoituslaji](http://uri.suomi.fi/codelist/rytj/kayttotarkoitusluokka-ak) tai koodistoon [Tarkentava käyttötarkoituslaji](http://uri.suomi.fi/codelist/rytj/TarkentavaKayttotarkoitusLaji).

Poisluettavat käyttötarkoituslajit tulee valita siten, että ne kohdistuvat ```arvo```-attribuuttien avulla valittuun yleispiirteisempään joukkoon käyttötarkoituksia poislukien niistä osan. Esim. [Työ ja tuotanto](http://uri.suomi.fi/codelist/rytj/kayttotarkoitusluokka-ak/code/6) poislukien [Alue, jolle saa sijoittaa merkittävän, vaarallisia kemikaaleja valmistavan tai varastoivan laitoksen](http://uri.suomi.fi/codelist/rytj/kayttotarkoitusluokka-ak/code/631).

{% include bug.html content="Käyttötarkoituslaji-koodiston tunnus päätty '-ak', vaikka se on sama sekä asema- että yleiskaavoille" %}

#### Yksityskohtainen käyttötarkoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0002>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi tai useampi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa koodistoon [Tarkentava käyttötarkoituslaji](http://uri.suomi.fi/codelist/rytj/TarkentavaKayttotarkoitusLaji)
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää annettujen käyttötarkoituslajien avulla muodostettua kaavamääräystietoa.

Mahdolliset ```lisatieto```-attribuutin arvot:
* Nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Poisluettava käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/Lisatiedonlaji/code/005), ja jolla on yksi tai useampi arvo [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), jotka viittaavat koodistoon [Tarkentava käyttötarkoituslaji](http://uri.suomi.fi/codelist/rytj/TarkentavaKayttotarkoitusLaji).

Poisluettavat käyttötarkoituslajit tulee valita siten, että ne kohdistuvat ```arvo```-attribuuttien avulla valittuun yleispiirteisempään joukkoon käyttötarkoituksia poislukien niistä osan.

### Rakentaminen
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/01>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

#### Sallittujen rakennuspaikkojen lukumäärä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0101>

#### Sallittu kokonaiskerrosala
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0102>

#### Rakennuspaikan vähimmäiskoko
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0103>

#### Sallittu tuulivoimaloiden määrä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0104>

#### Vähittäiskaupan suuryksikkö
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0105>

#### Vähittäiskaupan myymäläkeskittymä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0106>

#### Rakennuspaikka
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0107>

#### Sallittu kerrosala
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0108>

### Liikenne
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02>

#### Moottori- tai moottoriliikennetie
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0292>


#### Kaksiajoratainen päätie/-katu
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0293>

#### Valtatie/kantatie
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0294>

#### Seututie/pääkatu
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0295>

#### Yhdystie/kokoojakatu
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0296>

#### Liittymä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0298>

#### Eritasoliittymä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0299>


#### Suuntaisliittymä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02100>

#### Eritasoristeys ilman liittymää
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02101>

#### Liikennetunneli
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02102>

#### Varattu joukkoliikenteelle
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02103>

#### Ulkoilureitti
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02105>

#### Kevyen liikenteen reitti
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02106>

#### Moottorikelkkailureitti
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02107>

#### Linja-autoasema/julkisen liikenteen vaihtopaikka/matkakeskus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0288>

#### Rautatieasema
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0289>

#### Päärata
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/021031>

#### Yhdysrata/sivurata/kaupunkirata
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02104>

#### Laivaväylä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02108>

#### Veneväylä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02109>

#### Metrolinja
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02110>

#### Metroasema
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02111>

#### Raitiotie/Pikaraitiotie
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02112>

#### Pyöräilyn pää-/runkoreitti
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02113>

#### Seutuverkon pyöräilyreitti
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02114>

#### Alueverkon pyöräilyreitti
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02115>

#### Joukkoliikenteen runkoyhteys
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02116>

#### Varikko
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02117>

#### Venesatama/venevalkama
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02118>

#### Ratsastusreitti
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02119>

#### Pysäkki/seisake
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/02120>

### Kehittämistavoitteet
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/03>

#### Yhdyskuntarakenteen laajenemissuunta
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0301>

#### Yhdyskuntarakenteen mahdollinen laajenemisalue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0302>

#### Alueen eheyttämis- tai tiivistämistarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0303>

#### Ohjeellinen tai vaihtoehtoinen tielinjaus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0304>

#### Tieliikenteen yhteystarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0305>

#### Joukkoliikenteen kehittämiskäytävä tai yhteystarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0306>

#### Kevyen liikenteen yhteystarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0307>

#### Viheryhteystarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0308>

#### Meluntorjuntatarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0309>

#### Ympäristö- tai maisemavaurion korjaustarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0310>

#### Terveyshaitan poistamistarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0311>

#### Muu kehittämistarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0312>

### Rajoitukset
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/04>

#### Rakentamisrajoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0402>

#### Määräaikainen rakentamisrajoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0403>

#### Toimenpiderajoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0404>

#### Rakennuksen purkamisrajoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0405>


### Erityisominaisuudet
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/05>

#### Erityisharkinta-alue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0501>

#### Kehittämisalue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0502>

#### Melualue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0503>

#### Puhdistettava/kunnostettava maa-alue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0504>

#### Vaara-alue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0505>

#### Suojavyöhyke
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0506>

#### Suunnittelutarvealue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0507>

#### Reservialue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0508>

### Ympäristöarvojen vaaliminen
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/06>

#### Merkittävät luontoarvot
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0601>

#### Merkittävät maisemalliset arvot
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0602>

#### Merkittävät kaupunki- tai kyläkuvalliset arvot
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0603>

#### Merkittävät kulttuurihistorialliset arvot
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0604>

#### Merkittävät ympäristöarvot
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0605>

#### Unescon maailmanperintökohde
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0606>

#### Natura 2000 -verkostoon kuuluva tai siihen ehdotettu alue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0607>

#### Kansallinen kaupunkipuisto
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0608>

#### Luonnon monimuotoisuuden kannalta arvokas alue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0609>

#### Alue, jolla ympäristö säilytetään
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0610>

#### Alue, jolla ympäristö asettaa toiminnan laadulle erityisiä vaatimuksia
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0611>

#### Alue, jolla on erityistä ulkoilun ohjaamistarvetta
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0612>


### Yhdyskuntatekninen huolto
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/08>

#### Johto, putki tai linja
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0801>

#### Hulevesien hallinnan kannalta merkittävä alue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0802>

#### Hulevesien purkuoja/-reitti
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0803>

#### Hulevesien viivytysalue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0804>

#### Hulevesien käsittelytapa
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0805>

#### Pohjavedenottamo
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0806>

#### Pohjavedenottamon lähisuoja-alue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0807>

### Ympäristönsuojelu
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/09>

#### Pohjavesialue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0901>

#### Pohjaveden muodostumisalue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0902>

#### Arvokas harjualue tai muu geologinen muodostuma
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0903>

### Yleismääräykset
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/07>

#### Yleiskaavan käyttö rakennusluvan myöntämisen perusteena
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0701>

#### Yleismääräys
**Koodi**: <http://uri.suomi.fi/codelist/rytj/KaavamaaraysLajiYleiskaava/code/0700>

## Laatusäännöt
Nämä laatusäännöt laajentavat Kaavatietomallin [yleisiä laatusääntöjä](../../looginenmalli/laatusaannot.html).

### Aluevaraukset

{% include clause_start.html type="req" id="sov-yk/vaat-aluevaraus-maar" %}
Yleiskaavan aluevaraus on [Kaavakohde](dokumentaatio/#kaavakohde)-luokan objekti, joka liittyy assosiaatiolla ```maarays``` yhteen tai useampaan sellaiseen [Kaavamaarays](dokumentaatio/#kaavamaarays)-luokan objektiin, jonka ```laji```-attribuutin arvo on jokin [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01)-koodin alakoodeista.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-yk/vaat-aluemainen-aluevaraus" %}
Yleiskaavan aluevarausten ```geometria```-attribuutin kuvaamaan geometrian tulee olla aluemainen.
{% include clause_end.html %}
