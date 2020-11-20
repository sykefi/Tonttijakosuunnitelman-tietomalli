---
layout: "default"
title: "Kaavatietomalli - soveltamisohjeet - asemakaava"
description: ""
page: "sov-asemakaava"
modelversion: "1.0"
status: "Keskeneräinen"
---
# Soveltamisohjeet - asemakaava
{:.no_toc}

1. 
{:toc}

## Soveltamisala

Tämä ohje koskee kaavatietomallin soveltamista sellaisiin [Kaava](../../looginenmalli/dokumentaatio/#kaava)-luokan instansseihin, joiden ```laji```-attribuutin arvo on jokin [Kaavalajit]()-koodiston koodin [Asemakaava](http://uri.suomi.fi/codelist/rytj/Kaavalajit/code/30) alakoodeista, sekä näihin kaavoihin liittettäviin muihin kaavatietomallin määrittelemiin tietoihin.

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

Luokan [AbstraktiKaavoitusteema](../../looginenmalli/dokumentaatio/#abstraktikaavoitusteema) sijaan tulee käyttää tarkentavaa luokkaa [KaavoitusteemaAsemakaava](../../looginenmalli/dokumentaatio/#kaavoitusteemaasemakaava).

{% include codelistref.html id="Kaavoitusteema-AK" name="Kaavoitusteema (asemakaava)" %}

### Kaavamääräyslaji

Luokan [AbstraktiKaavamaaraysLaji](../../looginenmalli/dokumentaatio/#abstraktikaavamaarayslaji) sijaan tulee käyttää tarkentavaa luokkaa [KaavamaaraysLajiAsemakaava](../../looginenmalli/dokumentaatio/#kaavamaarayslajiasemakaava).

{% include codelistref.html id="Kaavamaaraykset" name="Kaavamääräyslaji (asemakaava)" %}

{% include bug.html content="Koodiston nimi ei vastaa UML-luokassa annettua" %}

### Kaavamääräyksen lisätiedon laji

Luokan [AbstraktiLisatiedonLaji](../../looginenmalli/dokumentaatio/#abstraktilisatiedonlaji) sijaan tulee käyttää tarkentavaa luokkaa [LisatiedonLajiAsemakaava](../../looginenmalli/dokumentaatio/#lisatiedonlajiasemakaava).

{% include codelistref.html id="Lisatiedonlaji" name="Kaavamääräyksen lisätiedon laji (asema- ja yleiskaava)" %}

{% include question.html content="UML-mallissa eri koodistot YK ja AK. Tarvitaanko kaksi koodistoa vai voiko olla sama?" %}


## Kaavamääräyslajien arvot ja lisätiedot

### Käyttötarkoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/00>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

#### Alueen käyttötarkoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/0001>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi tai useampi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa koodistoon [Käyttötarkoituslaji](http://uri.suomi.fi/codelist/rytj/kayttotarkoitusluokka-ak)
* Enintään yksi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo), joka täydentää annettujen käyttötarkoituslajien avulla muodostettua kaavamääräystietoa.

Mahdolliset ```lisatieto```-attribuutin arvot:
* Nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Poisluettava käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/Lisatiedonlaji/code/005), jolla on yksi tai useampi arvo [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa joko koodistoon [Käyttötarkoituslaji](http://uri.suomi.fi/codelist/rytj/kayttotarkoitusluokka-ak) tai koodistoon [Tarkentava käyttötarkoituslaji](http://uri.suomi.fi/codelist/rytj/TarkentavaKayttotarkoitusLaji).

Poisluettavat käyttötarkoituslajit tulee valita siten, että ne kohdistuvat ```arvo```-attribuuttien avulla valittuun yleispiirteisempään joukkoon käyttötarkoituksia poislukien niistä osan. Esim. [Työ ja tuotanto](http://uri.suomi.fi/codelist/rytj/kayttotarkoitusluokka-ak/code/6) poislukien [Alue, jolle saa sijoittaa merkittävän, vaarallisia kemikaaleja valmistavan tai varastoivan laitoksen](http://uri.suomi.fi/codelist/rytj/kayttotarkoitusluokka-ak/code/631).

{% include bug.html content="Käyttötarkoituslaji-koodiston tunnus päätty '-ak', vaikka se on sama sekä asema- että yleiskaavoille" %}

#### Yksityskohtainen käyttötarkoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/0002>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi tai useampi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa koodistoon [Tarkentava käyttötarkoituslaji](http://uri.suomi.fi/codelist/rytj/TarkentavaKayttotarkoitusLaji)
* Enintään yksi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo), joka täydentää annettujen käyttötarkoituslajien avulla muodostettua kaavamääräystietoa.

Mahdolliset ```lisatieto```-attribuutin arvot:
* Nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Poisluettava käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/Lisatiedonlaji/code/005), jolla on yksi tai useampi arvo [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa koodistoon [Tarkentava käyttötarkoituslaji](http://uri.suomi.fi/codelist/rytj/TarkentavaKayttotarkoitusLaji).

Poisluettavat käyttötarkoituslajit tulee valita siten, että ne kohdistuvat ```arvo```-attribuuttien avulla valittuun yleispiirteisempään joukkoon käyttötarkoituksia poislukien niistä osan.

### Rakentamisen määrä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/01>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

#### Sallittu kerrosala
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/011>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo sallitun rakentamiseen kokonaismäärän kerrosneliömetreinä (```k-m2```) sen kaavamääräyskohteen aluella, johon kaavamääräys on liitetty.
* Enintään yksi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo), joka täydentää kaavamääräystietoa.

Mahdolliset ```lisatieto```-attribuutin arvot:
* Nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Käyttötarkoituksen osuus kerrosalasta](http://uri.suomi.fi/codelist/rytj/Lisatiedonlaji/code/001), jolla on kaksi arvoa:
   *  Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo sallitun tiettyyn käyttötarkoitukseen kohdistettavan määrän koko sallitusta kerrosalasta joko kerrosneliömetreinä (```k-m2```) tai prosentteina (```%```).
   * Yksi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa joko koodistoon [Käyttötarkoituslaji](http://uri.suomi.fi/codelist/rytj/kayttotarkoitusluokka-ak) tai koodistoon [Tarkentava käyttötarkoituslaji](http://uri.suomi.fi/codelist/rytj/TarkentavaKayttotarkoitusLaji).

Mikäli sallittua rakentamisen määrää ei ole jaoteltu käyttötarkoituksittain, ei lisätietoja käytetä.

#### Tehokkuusluku
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/012>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo rakennustehokkuden, eli alueen rakennusten yhteenlasketun kerrosalan suhteessa alueen pinta-alaan, sen kaavamääräyskohteen aluella, johon kaavamääräys on liitetty. Ilmaistaan tehokkuuslukuina ```e```, yksikkönä ```k-m2/m2```.

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

{% include question.html content="Pitäisikö määräyksen nimi olla Rakennustehokkuus, tehokkuusluku on tapa ilmaista käsite numerona?" %}

#### Maanpäällinen kerrosluku
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/013>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo rakennusten maanpäällisten kerrosten sallitun lukumäärän sen kaavamääräyskohteen aluella, johon kaavamääräys on liitetty. Ei yksikköä.

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

#### Kellarin sallittu kerrosalaosuus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/014>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo kuinka suuren osan kunkin rakennuksen suurimman kerroksen alasta saa kellarikerroksessa käyttää kerrosalaan luettavaksi tilaksi sen kaavamääräyskohteen aluella, johon kaavamääräys on liitetty. Ilmaistaan prosentteina (```%```).

{% include tip.html content="Murtolukuna ilmaistun osuuden voi ilmaista arvovälinä, esim. ```1/3``` olisi ```33-34%```" %}

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

#### Ullakon sallittu kerrosalaosuus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/015>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo kuinka suuren osan kunkin rakennuksen suurimman kerroksen alasta saa ullakon tasolla käyttää kerrosalaan luettavaksi tilaksi sen kaavamääräyskohteen aluella, johon kaavamääräys on liitetty. Ilmaistaan prosenttilukuina (```%```).

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

{% include tip.html content="Murtolukuna ilmaistun osuuden voi ilmaista arvovälinä, esim. ```1/3``` olisi ```33-34%```" %}

#### Rakennuspaikkojen määrä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/016>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) joka kertoo sallitun rakennuspaikkojen enimmäismäärän sen kaavamääräyskohteen aluella, johon kaavamääräys on liitetty. Ei yksikköä.

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

{% include note.html content="Käytetään tavallisesti vain ranta-asemakaavoissa" %}

### Rakentamisen sijoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/02>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

#### Rakentamisen suhde alueen pinta-alaan
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/021>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo kuinka suuren osan sen kaavamääräyskohteen pinta-alasta, johon kaavamääräys on liitetty, saa käyttää rakentamiseen. Ilmaistaan prosenttilukuina (```%```).

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

#### Etäisyys naapuritontin rajasta
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/022>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo), joka kertoo rakennusten vähimmäisetäisyyden naapuritontin rajasta sen kaavamääräyskohteen alueella, johon kaavamääräys on liitetty. Yksikkönä metri (```m```).
* Nolla tai useampi [GeometriaArvo](../../looginenmalli/dokumentaatio/#geometriaarvo), jonka tyyppinä murtoviiva, rajoittaa määräyksen koskemaan vain niitä naapurintonttien rajan osia, joiden kanssa viiva-arvot ovat päällekkäin.

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

#### Rakennusala
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/023>

Ilmaisee, että kaavamääräyskohteen alue rajaa sellaisen alialueen suuremman kaavamääräyskohteen alueen sisällä, jonka sisäpuolelle yksi tai useampi rakennus tulee sijoittaa.

Ei mahdollisia ```arvo```- tai ```lisatieto``` attribuuttien arvoja.

#### Rakennettava kiinni
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/026>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi tai useampi [GeometriaArvo](../../looginenmalli/dokumentaatio/#geometriaarvo), jonka tyyppinä murtoviiva, kohdistaa kaavamääräyksen niihin kaavamääräyskohteen geometrian ulkorajan osiin, joiden kanssa viiva-arvot ovat päällekkäin.

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

#### Rakennuspaikka
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/027>

Ilmaisee, että kaavamääräyskohteen geometria kuvaa paikkaa, jolla on rakennus tai johon voidaan rakentaa yksi tai useampi rakennus.

{% include question.html content="Voiko yhteen rakennuspaikkaan rakentaa useamman rakennuksen?" %}

Ei mahdollisia ```arvo```- tai ```lisatieto``` attribuuttien arvoja.

{% include note.html content="Käytetään tavallisesti vain ranta-asemakaavoissa" %}

### Rakentamistapa
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/03>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

### Ulkoalueet
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/05>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

### Liikenne
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/06>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

### Korkeusasema
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/09>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

### Tonttijako
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/10>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

### Ympäristöarvojen vaaliminen
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/11>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

### Yleismääräykset
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/12>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

### Yhdyskuntatekninen huolto
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/13>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

### Ympäristönsuojelu
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/14>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

### Nimistö
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/15>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

## Kaavamääräysten mallintamisen esimerkkejä

### Alueen käyttötarkoitukset

### Sallittu rakentamismäärä (rakennusoikeus)

#### Käyttötarkoituksittain jaotettu rakentamismäärä

#### Sallitun rakentamismäärän kohdistaminen

### Kulttuurihistoriallinen merkittävyys


