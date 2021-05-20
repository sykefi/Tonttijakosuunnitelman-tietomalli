---
layout: "default"
title: "Tonttijakosuunnitelma - soveltamisprofiili"
description: ""
page: "soveltamisohje-tjs"
modelversion: "1.0-dev"
status: "Keskeneräinen"
---
# Soveltamisohjeet
{:.no_toc}

1. 
{:toc}

## Johdanto

Tämän dokumentin vaatimukset ja suositukset muodostavat Tonttijakosuunnitelmatietomallin loogisen tietomallin soveltamisprofiilin tonttijakosuunnitelma-aineistoille. Soveltamisprofiili kuvaa ne rajoitukset ja lisävaatimukset, joita tulee noudattaa Tonttijakosuunnitelmatietomallin UML-kielisen kuvauksen ja sen sanallisen dokumentaation soveltamisessa tonttijakosuunnitelmien tietoaineistojen kuvaamiseen.

## Koodistot

### Vuorovaikutustapahtuman laji

<!--Lisää sisäiset linkit vielä -->
{% include clause_start.html type="req" id="prof-tjs/vaat-esitonttivuorovaikutustapahtumalaji" %}
Luokan AbstraktiVuorovaikutustapahtumanLaji sijaan tulee käyttää tarkentavaa luokkaa TonttijakosuunnitelmanVuorovaikutustapahtumanLaji.
{% include clause_end.html %}

### Käsittelytapahtuman laji

<!--Lisää sisäiset linkit vielä -->
{% include clause_start.html type="req" id="prof-tjs/vaat-esitonttikasittelytapahtuma" %}
Luokan AbstraktiKasittelytapahtumanLaji sijaan tulee käyttää tarkentavaa luokkaa TonttijakosuunnitelmanKasittelytapahtumanLaji.
{% include clause_end.html %}

## Kaavamääräys-luokan arvot


## Esitonttikohteen lajien arvot

### Esitontti

**Koodi:** http://uri.suomi.fi/codelist/rytj/RY_EsitonttikohdeLaji/code/01

<!--Lisää sisäiset linkit vielä -->
{% include clause_start.html type="req" id="prof-tjs/vaat-esitontti" %}
Ilmaisee, että esitonttikohde kuvaa esitontin 2-ulotteisena alueena tai 3-ulotteisena kappaleena.
{% include clause_end.html %}

<!--Lisää sisäiset linkit vielä -->
{% include clause_start.html type="req" id="prof-tjs/vaat-esitontti-arvot" %}
arvo-attribuutin arvona saa esiintyä nolla tai yksi Tunnusarvo, jotka kuvaavat tulevan tontin tunnusarvoa tietojärjestelmissä tai rekistereissä.
{% include clause_end.html %}

### Esitonttirajapiste

<!--Lisää sisäiset linkit vielä -->
{% include clause_start.html type="req" id="prof-tjs/vaat-esitonttirajapiste" %}
Ilmaisee, että esitonttikohde kuvaa sijainnin, johon on tarkoitus rakentaa kiinteistönmuodostustoimituksessa rajamerkki.
{% include clause_end.html %}

<!--Lisää sisäiset linkit vielä -->
{% include clause_start.html type="req" id="prof-tjs/vaat-esitonttrajapiste-arvot" %}
arvo-attribuutin arvona saa esiintyä nolla tai useampi TekstiArvo, jotka kuvaavat tulevan tontin rajamerkkien numeroita tietojärjestelmissä tai rekistereissä.
{% include clause_end.html %}

## Esimerkkejä

**Kaavakohde**

Muuttuja         | Arvo              
-----------------|---------------------
identiteettiTunnus | 9c97e469-083d-4284-90a9-3dbebdfe5622) 
paikallinenTunnus | 9c97e469-083d-4284-90a9-3dbebdfe5622.23 
tuottajakohtainenTunnus | 83730109300001
sijainninSitovuus | sitova
liittyvanLahtotietokohteenTunnus | url
manalaisuus | null
geometria | xyz alue tai kolmiulotteinen kappale
pinta-ala | 1000
maarays	| **laji:** Tonttijako => Esitontti, **arvo:** valtakunnallinen URI + 83730109300001
maarays	| **laji:**	Kaavamääräyslaji => Alueen kayttotarkoitus =>Asuinpientaloalue	
maarays	| **laji:**	Kaavamääräyslaji => Rakentamisen tehokkuus => Tehokkuus, **arvo:** 0.5
maarays	| **laji:**	Kaavamääräyslaji => Rakentamisen tehokkuus => Maanpäällinen kerrosluku, **arvo:** 2

**Kaavakohde**

Muuttuja         | Arvo              
-----------------|---------------------
identiteettiTunnus | 9c97e469-083d-4284-90a9-3dbebdfe5623
paikallinenTunnus | 9c97e469-083d-4284-90a9-3dbebdfe5623.12
tuottajakohtainenTunnus | 83
sijainninSitovuus | sitova
liittyvanLahtotietokohteenTunnus | url
maanalaisuus | null
geometria | xyz piste
maarays | **laji:** EsitonttiRajapiste => Rajapiste, **arvo:** 83
