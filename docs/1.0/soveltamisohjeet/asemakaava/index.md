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

## Koodistot

### Vuorovaikutustapahtuman laji

Luokan ```AbstraktiVuorovaikutustapahtumanLaji``` sijaan tulee käyttää tarkentavaa luokkaa ```KaavanVuorovaikutustapahtumanLaji```.

{% include codelistref.html id="VuorovaikutustapahtumanLaji" name="Vuorovaikutustapahtuman laji (asema- ja yleiskaava)" %}

{% include bug.html content="Koodiston nimi ei vastaa UML-luokassa annettua" %}

### Käsittelytapahtuman laji

Luokan ```AbstraktiKasittelytapahtumanLaji``` sijaan tulee käyttää tarkentavaa luokkaa ```KaavanKasittelytapahtumanLaji```.

{% include codelistref.html id="KasittelytapahtumanLaji-AK" name="Käsittelytapahtuman laji (asema- ja yleiskaava)" %}

{% include bug.html content="Koodiston nimi ei vastaa UML-luokassa annettua" %}

### Kaavamääräyskohdelaji

Kaavamääräyskohdelaji-koodisto on varattu tulevaisuuden käyttöön. Tämä tietomalliin versio ei määritä mitään arvoja ko. koodistolle.

### Kaavoitusteema

Luokan ```AbstraktiKaavoitusteema``` sijaan tulee käyttää tarkentavaa luokkaa ```KaavoitusteemaAsemakaava```.

{% include codelistref.html id="Kaavoitusteema-AK" name="Kaavoitusteema (asemakaava)" %}

### Kaavamääräyslaji

Luokan ```AbstraktiKaavamaaraysLaji``` sijaan tulee käyttää tarkentavaa luokkaa ```KaavamaaraysLajiAsemakaava```.

{% include codelistref.html id="Kaavamaaraykset" name="Kaavamääräyslaji (asemakaava)" %}

{% include bug.html content="Koodiston nimi ei vastaa UML-luokassa annettua" %}

### Kaavamääräyksen lisätiedon laji

Luokan ```AbstraktiLisatiedonLaji``` sijaan tulee käyttää tarkentavaa luokkaa ```LisatiedonLajiAsemakaava```."

{% include codelistref.html id="Lisatiedonlaji" name="Kaavamääräyksen lisätiedon laji (asema- ja yleiskaava)" %}

{% include bug.html content="UML-mallissa eri koodistot YK ja AK. Tarvitaanko kaksi koodistoa vai voiko olla sama?" %}


## Kaavamääräyslajien arvot ja lisätiedot

### Käyttötarkoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/00>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

#### Alueen käyttötarkoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/0001>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi tai useampi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa koodistoon [Käyttötarkoituslaji](http://uri.suomi.fi/codelist/rytj/kayttotarkoitusluokka-ak)
* Enintään yksi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo), joka täydentää annettujen käyttötarkoituslajien avulla muodostettua kaavamääräystietoa.

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

{% include bug.html content="Käyttötarkoituslaji-koodiston tunnus päätty '-ak', vaikka se on sama sekä asema- että yleiskaavoille" %}

#### Yksityskohtainen käyttötarkoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/0002>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi tai useampi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa koodistoon [Tarkentava käyttötarkoituslaji](http://uri.suomi.fi/codelist/rytj/TarkentavaKayttotarkoitusLaji)
* Enintään yksi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo), joka täydentää annettujen käyttötarkoituslajien avulla muodostettua kaavamääräystietoa.

Ei mahdollisia ```lisatieto```-attribuutin arvoja.


## Kaavamääräysten mallintamisen esimerkkejä

### Alueen käyttötarkoitukset

### Sallittu rakentamismäärä (rakennusoikeus)

#### Käyttötarkoituksittain jaotettu rakentamismäärä

#### Sallitun rakentamismäärän kohdistaminen

### Kulttuurihistoriallinen merkittävyys


