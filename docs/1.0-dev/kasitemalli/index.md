---
layout: "default"
title: "Tontinjakosuunnitelma - käsitemalli"
description: ""
page: "kasitemalli"
modelversion: "1.0-dev"
status: "Keskeneräinen"
---
# Käsitemalli
{:.no_toc}

1. 
{:toc}

## Käsitekaavio
![Tontinjakosuunnitelman keskeiset käsitteet](tjs-kasitemalli.png "Tontinjakosuunnitelman keskeiset käsitteet")

(Lataa [käsitekaavio määritelmien kanssa](tjs-kasitemalli.png)) <!-- Tässä vielä väärä kuva toistaiseksi -->

## Käsitteet
### Tontinjakosuunnitelma
{% include defintionref.html id="concept-1008" name="Tontinjakosuunnitelma" def="Maankäyttö- ja rakennuslain mukainen kunnan laatima suunnitelma asemakaavassa rakentamiselle varatun yhtenäisen alueen (rakennuskortteli) kiinteistöjaotuksen uudistamisen yksityiskohtaiseksi ohjaamiseksi." %}
<!-- Mikä toi id=concept elementti on? > se viittaa sanastossa id:hen nähtävästi, eli pitää kattoa onko siellä jo olemassa käsitteet ja sitten kattoa niiden id:t-->

Viittaukset toisiin käsitteisiin:
*Tähän kuvataan tontinjakosuunnitelman liitynnät muihin käsitteisiin tai käsitekokonaisuuksiin.*
<!-- * [Lähtötietoaineisto](#lähtötietoaineisto) [0..*]: kaavan laadinnassa hyödynnetty lähtötietoaineisto 
* [Kaavaselostus](#kaavaselostus) [0..1]: kaavan kaavaselostus 
* [Osallistumis- ja arviointisuunnitelma](#osallistumis--ja-arviointisuunnitelma) [0..1]: kaavan osallistumis- ja arviointisuunnitelma
* [Kaavan liite](#kaavan-liite) [0..*]: muu kaavan liite kuin selostus tai osallistumis- ja arviointisuunnitelma
* [Kaavan kumoamistieto](#kaavan-kumoamistieto) [0..1]: minkä kaavan tai sen osat kaava voimaantullessaan kumoaa
* [Kaavakohde](#kaavakohde) [0..*] (kompositio): kaavan liittyä kaavamääräyksiä tai -suosituksia kohdistava paikkatietokohde
* [Kaavamääräys](#kaavamääräys) [0..*] (kompositio): yleismääräys, joka koskee koko kaavan aluetta
* [Kaavasuositus](#kaavasuositus) [0..*] (kompositio): yleissuositus, joka koskee koko kaavan aluetta
-->

### Lähtötietoaineisto
{% include defintionref.html id="concept-13" name="Lähtötietoaineisto" def="Tonttijakosuunnitelman laadinnassa hyödynnetty tietoaineisto, joka sisältää sellaista tulkittavaa tietoa, joka tulee huomioida laadinnassa, jota ei luoda ja josta ei päätetä osana tonttijakosuunnitelmaprosessia." note="Tähän voi lisätä jonkin tarvittavan tarkennuksen tai lisäyksen" %}

### Liite
{% include defintionref.html dict="rakymp" dictname="Rakennetun ympäristön pääsanasto" id="c126" name="Liite" def="Tonttijakosuunnitelmaan liittyvä asiakirja, joka ei sisällä tonttijakosuunnitelman oikeusvaikutuksellista suunnitelma- tai säännöstietoa." %}

### Käsittelytapahtuma
{% include defintionref.html dict="mrl" dictname="Maankäyttö- ja rakennuslain käsitteitä" id="concept-159" name="Käsittelytapahtuma" def="Tonttijakosuunnitelman käsittelyprosessiin kuuluva tapahtuma, jonka johdosta elinkaaren tila voi muuttua" %}

### Kaavan liite
{% include defintionref.html id="concept-1007" name="kaavan liite" def="kaavaprosessiin tai kaavan tulkintaan liittyvä asiakirja, joka ei sisällä kaavan oikeusvaikutuksellista suunnitelma- tai säännöstietoa." note="esimerkiksi selvitys, suunnitelma, kartta, havainnekuva tai muistio." %}

### Käsittelytapahtuma
{% include defintionref.html id="concept-1005" name="kaavan käsittelytapahtuma" def="kaavan käsittelyprosessiin kuuluva tapahtuma, jonka johdosta elinkaaren tila voi muuttua" note="Käsittelytapahtumaan voi dokumentteja, kuten päätöspöytäkirjoja. Esimerkiksi kaavan virelletulo, kaavaehdotuksen käsittely kunnanvaltuustossa tai kaavan voimaantulo." %}

Viittaukset toisiin käsitteisiin:
* [Kaava](#kaava) [1]: kaavan versio, johon tapahtuma liittyy

### Vuorovaikutustapahtuma
{% include defintionref.html id="concept-1004" name="vuorovaikutustapahtuma" def="Tonttijakosuunnitelmaprosessiin kuuluva tapahtuma, jonka tarkoituksena on tarjota tonttijakosuunnitelman asianosaiselle mahdollisuus lausua mielipiteensä ehdotuksesta." %}

<!--
Viittaukset toisiin käsitteisiin:
* [Kaava](#kaava) [1]: kaavan versio, johon tapahtuma liittyy
-->

### Kumoamistieto
{% include defintionref.html id="concept-2000" name="Kumoamistieto" def="Tieto tonttijakosuunnitelman hyväksymisen johdosta kokonaisuudessaan kumoutuvasta tonttijakosuunnitelmasta tai tonttijakosuunnitelman kumottavasta osa-alueesta." %}

### Kaavakohde
{% include defintionref.html id="concept-1009" name="kaavakohde" def="kaavaan sisältyvä aluerajaus tai kohde, jonka alueella maankäyttöä tai rakentamista halutaan ohjata" note="Kaavakohteella on maantieteellinen sijainti ja muoto. Velvoittava ohjausvaikutus kuvataan liittyvien kaavamääräysten ja ei-velvoittava liittyvien kaavasuositusten avulla." %}

Viittaukset toisiin käsitteisiin:
* [Kaava](#kaava) [1]: kaavan versio, johon kohde sisältyy

### Kaavamääräys
{% include defintionref.html id="concept-1010" name="kaavamääräys" def="kaavaan sisältyvä velvoittava määräys, jolla ohjataan alueiden suunnittelua ja rakentamista." note="Kaavoissa käytettävät kaavamääräysten lajit on yhteisesti sovittu. Määräys voi kohdistua joko yksittäiseen kaavakohteeseen tai koko kaavaan. Kaavamääräykseen voi sisältyä sen lajiin perustuvaa ohjausvaikutusta tarkentavia arvoja ja lisätietoja." %}

Viittaukset toisiin käsitteisiin:
* [Kaava](#kaava) [1]: kaavan versio, johon määräys sisältyy
* [Arvo](#arvo) [0..*]: tarkentava arvo
* [Lisätieto](#lisätieto) [0..*]: tarkentava tai rajaava lisätieto
* [Kaavakohde](#kaavakohde) [0..*]: kaavakohteiden versio, johon määräyksen vaikutus kohdistuu. Jos ei ole, on kyseessä yleismääräys

### Arvo
{% include defintionref.html id="concept-1011" name="ominaisuuden arvo" def="kaavamääräystä, kaavasuositusta tai lisätietoa tarkentava arvo." note="Yhteinen yläluokka erityyppisille numeerisille, luetelluille ja sanallisille arvoille sekä arvoväleille" %}

### Esitonttitietovarasto
{% include defintionref.html id="concept-3004" name="Esitonttitietovarasto" def="Kuvaus puuttuu" %}

