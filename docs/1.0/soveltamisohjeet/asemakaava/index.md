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

{% include callout.html content="**Vaatimus**<br/>Luokan ```AbstraktiVuorovaikutustapahtumanLaji``` sijaan tulee käyttää tarkentavaa luokkaa ```KaavanVuorovaikutustapahtumanLaji```." type="primary" %}

{% include codelistref.html id="VuorovaikutustapahtumanLaji" name="Vuorovaikutustapahtuman laji (asema- ja yleiskaava)" %}

{% include bug.html content="Koodiston nimi ei vastaa UML-luokassa annettua" %}

### Käsittelytapahtuman laji

{% include callout.html content="**Vaatimus**<br/>Luokan ```AbstraktiKasittelytapahtumanLaji``` sijaan tulee käyttää tarkentavaa luokkaa ```KaavanKasittelytapahtumanLaji```." type="primary" %}

{% include codelistref.html id="KasittelytapahtumanLaji-AK" name="Käsittelytapahtuman laji (asema- ja yleiskaava)" %}

{% include bug.html content="Koodiston nimi ei vastaa UML-luokassa annettua" %}

### Kaavamääräyskohdelaji

Kaavamääräyskohdelaji-koodisto on varattu tulevaisuuden käyttöön. Tämä tietomalliin versio ei määritä mitään arvoja ko. koodistolle.

### Kaavoitusteema

{% include callout.html content="**Vaatimus**<br/>Luokan ```AbstraktiKaavoitusteema``` sijaan tulee käyttää tarkentavaa luokkaa ```KaavoitusteemaAsemakaava```." type="primary" %}

{% include codelistref.html id="Kaavoitusteema-AK" name="Kaavoitusteema (asemakaava)" %}


### Kaavamääräyslaji

{% include callout.html content="**Vaatimus**<br/>Luokan ```AbstraktiKaavamaaraysLaji``` sijaan tulee käyttää tarkentavaa luokkaa ```KaavamaaraysLajiAsemakaava```." type="primary" %}

{% include codelistref.html id="Kaavamaaraykset" name="Kaavamääräyslaji (asemakaava)" %}

{% include bug.html content="Koodiston nimi ei vastaa UML-luokassa annettua" %}

### Kaavamääräyksen lisätiedon laji

{% include callout.html content="**Vaatimus**<br/>Luokan ```AbstraktiLisatiedonLaji``` sijaan tulee käyttää tarkentavaa luokkaa ```LisatiedonLajiAsemakaava```." type="primary" %}

{% include codelistref.html id="Lisatiedonlaji" name="Kaavamääräyksen lisätiedon laji (asema- ja yleiskaava)" %}

{% include bug.html content="UML-mallissa eri koodistot YK ja AK. Tarvitaanko kaksi koodistoa vai voiko olla sama?" %}

## Kaavamääräysten esittämisen hyviä käytäntöjä

### Alueen käyttötarkoitukset

#### Alueen käyttötarkoitusten tavoiteltu jakautuminen

### Sallittu rakentamismäärä (rakennusoikeus)

#### Käyttötarkoituksittain jaotettu rakentamismäärä

#### Sallitun rakentamismäärän kohdistaminen

### Kulttuurihistoriallinen merkittävyys


