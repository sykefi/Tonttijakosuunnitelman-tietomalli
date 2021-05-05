---
layout: "default"
title: "Tontinjakosuunnitelma - käsitemalli"
description: ""
page: "kasitemalli"
modelversion: "1.0-dev"
status: "Keskeneräinen"
---
# Käsitemalli
Tällä sivulla esitellyt käsitteet ovat luettavissa yhteentoimivuusalustan sanasto-työkalussa. Käsitemallin nimiavaruus on [rytj-tjs](http://uri.suomi.fi/terminology/rytj-tjs/). Mukana on käsitteitä myös kaavatietomallista, ja niiden nimiavaruus on [rytj-kaava](http://uri.suomi.fi/terminology/rytj-kaava/).

{:.no_toc}

1. 
{:toc}

## Graafinen mallinnus käsitemallista
![Tonttijakosuunnitelman käsitemalli graafisena mallinnuksena](kasitemalli.png "Käsitemalli -  graafinen mallinnus (Neo4j)")

(Lataa [käsitekaavio määritelmien kanssa](kasitemalli.png))

## Käsitteet

### rytj-tjs: Tonttijakosuunnitelma
{% include defintionref_tjs.html id="concept-0" name="tonttijakosuunnitelma" def="maankäyttö- ja rakennuslain mukainen kunnan laatima suunnitelma asemakaavassa rakentamiselle varatun yhtenäisen alueen (rakennuskortteli) kiinteistöjaotuksen uudistamisen yksityiskohtaiseksi ohjaamiseksi." %}

### rytj-tjs: Esitontti
{% include defintionref_tjs.html id="concept-1" name="esitontti" def="Tonttijakosuunnitelmassa osoitettu tontti (esitontti) kiinteistöjaotuksen uudistamiseksi, jonka alueella maankäyttöä tai rakentamista halutaan ohjata." %}

### rytj-tjs: Tonttijakosuunnitelman liite
{% include defintionref_tjs.html id="concept-2" name="tonttijakosuunnitelman liite" def="Tonttijakosuunnitelmaan liittyvä asiakirja, joka ei sisällä tonttijakosuunnitelman oikeusvaikutuksellista suunnitelma- tai säännöstietoa." %}

### rytj-tjs: Tonttijakosuunnitelman käsittelytapahtuma
{% include defintionref_tjs.html id="concept-3" name="tonttijakosuunnitelman käsittelytapahtuma" def="Tonttijakosuunnitelman käsittelyprosessiin kuuluva tapahtuma, jonka johdosta elinkaaren tila voi muuttua." %}

### rytj-tjs: Tonttijakosuunnitelman vuorovaikutustapahtuma
{% include defintionref_tjs.html id="concept-4" name="tonttijakosuunnitelman vuorovaikutustapahtuma" def="Tonttijakosuunnitelmaprosessiin kuuluva tapahtuma, jonka tarkoituksena on tarjota tonttijakosuunnitelman asianosaiselle mahdollisuus lausua mielipiteensä ehdotuksesta." %}

### rytj-tjs: Tonttijakosuunnitelman kumoamistieto
{% include defintionref_tjs.html id="concept-5" name="tonttijakosuunnitelman kumoamistieto" def="Tieto tonttijakosuunnitelman hyväksymisen johdosta kokonaisuudessaan kumoutuvasta tonttijakosuunnitelmasta tai tonttijakosuunnitelman kumottavasta esitontista." %}

### rytj-tjs: Esitonttikohteen muutostieto
{% include defintionref_tjs.html id="concept-9" name="esitonttikohteen muutostieto" def="Tieto kaavan hyväksymisen johdosta muuttuvista, kumoutuvista tai muun muutoksen aiheuttamista esitonttikohteista." %}

### rytj-tjs: Esitonttikohde
{% include defintionref_tjs.html id="concept-6" name="esitonttikohde" def="Tonttijakosuunnitelmassa osoitettu aluemainen tai pistemäinen kohde kiinteistöjaotuksen uudistamiseksi, jonka alueella maankäyttöä tai rakentamista halutaan ohjata." %}

### rytj-kaava: Kaavamääräys
{% include defintionref.html id="concept-1010" name="kaavamääräys" def="Kaavaan sisältyvä velvoittava määräys, jolla ohjataan alueiden suunnittelua ja rakentamista." %}

### rytj-kaava: Arvo
{% include defintionref.html id="concept-1011" name="ominaisuuden arvo" def="Kaavaan sisältyvä velvoittava määräys, jolla ohjataan alueiden suunnittelua ja rakentamista." %}

### rytj-tjs: Esitonttitietovarasto
{% include defintionref_tjs.html id="concept-7" name="esitonttitietovarasto" def="Tietojärjestelmä, jonka tehtävänä on vastaanottaa, säilyttää ja jaella tietomallimuotoista tonttjakosuunnitelmatietoa laatu- ja elinkaarisääntöjen mukaisesti." %}