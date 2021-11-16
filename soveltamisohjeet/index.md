---
layout: "default"
title: "Tonttijakosuunnitelma - soveltamisprofiili"
description: ""
id: "soveltamisohje-tjs"
status: "Luonnos"
---
# Soveltamisprofiili

{:.no_toc}

1. 
{:toc}

## Johdanto

Tämän dokumentin vaatimukset ja suositukset muodostavat Tonttijakosuunnitelmatietomallin loogisen tietomallin soveltamisprofiilin tonttijakosuunnitelma-aineistoille. Soveltamisprofiili kuvaa ne rajoitukset ja lisävaatimukset, joita tulee noudattaa Tonttijakosuunnitelmatietomallin UML-kielisen kuvauksen ja sen sanallisen dokumentaation soveltamisessa tonttijakosuunnitelmien tietoaineistojen kuvaamiseen.

## Koodistot

### Vuorovaikutustapahtuman laji

<!--Lisää sisäiset linkit vielä -->
{% include common/clause_start.html type="req" id="prof-tjs/vaat-esitonttivuorovaikutustapahtumalaji" %}
Luokan AbstraktiVuorovaikutustapahtumanLaji sijaan tulee käyttää tarkentavaa luokkaa TonttijakosuunnitelmanVuorovaikutustapahtumanLaji.
{% include common/clause_end.html %}

### Käsittelytapahtuman laji

<!--Lisää sisäiset linkit vielä -->
{% include common/clause_start.html type="req" id="prof-tjs/vaat-esitonttikasittelytapahtuma" %}
Luokan AbstraktiKasittelytapahtumanLaji sijaan tulee käyttää tarkentavaa luokkaa TonttijakosuunnitelmanKasittelytapahtumanLaji.
{% include common/clause_end.html %}

## Liittyvän kaavamääräyksen arvot

{% include common/clause_start.html type="req" id="prof-tjs/vaat-liittyva-kaavamaarays-tunnus" %}
Tonttijakosuunnitelman Esitonttikohde -luokan ```laji```-attribuutin arvon ollessa Esitontti-koodi, esitonteille liittyvät Kaavatietomallin kaavamääräykset linkitetään Kaavatietomallin Kaavamääräys-luokan viittaustunnuksella. Viittaustunnuksen URL-arvo annetaan Tonttijakosuunnitelman tietomallin Kaavamaarays-luokan ```liittyvanKaavamaarayksenTunnus```-attribuutille. Tonttijakosuunnitelman Kaavamaarays-luokan osalta tulee noudattaa seuraavia rajoituksia:

- ```liittyvanKaavamaarayksenTunnus```-attribuutin arvoina saa esiintyä vain yksi viittaustunnus.
- ```arvo```-attribuutin arvoina saa esiintyä nolla tai yksi NumeerinenArvo, joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include common/clause_end.html %}

## Esitonttikohteen lajien arvot

### Esitontti

**Koodi:** http://uri.suomi.fi/codelist/rytj/RY_EsitonttikohdeLaji/code/01

<!--Lisää sisäiset linkit vielä -->
{% include common/clause_start.html type="req" id="prof-tjs/vaat-esitontti" %}
Ilmaisee, että esitonttikohde kuvaa esitontin 2-ulotteisena alueena tai 3-ulotteisena kappaleena.
{% include common/clause_end.html %}

<!--Lisää sisäiset linkit vielä -->
{% include common/clause_start.html type="req" id="prof-tjs/vaat-esitontti-arvot" %}
```arvo```-attribuutin arvona saa esiintyä nolla tai yksi Tunnusarvo, jotka kuvaavat tulevan tontin tunnusarvoa tietojärjestelmissä tai rekistereissä.
{% include common/clause_end.html %}

### Esitontin rajapiste

**Koodi:** http://uri.suomi.fi/codelist/rytj/RY_EsitonttikohdeLaji/code/02

<!--Lisää sisäiset linkit vielä -->
{% include common/clause_start.html type="req" id="prof-tjs/vaat-esitonttirajapiste" %}
Ilmaisee, että esitonttikohde kuvaa sijainnin, johon on tarkoitus rakentaa kiinteistönmuodostustoimituksessa rajamerkki.
{% include common/clause_end.html %}

<!--Lisää sisäiset linkit vielä -->
{% include common/clause_start.html type="req" id="prof-tjs/vaat-esitonttrajapiste-arvot" %}
```arvo```-attribuutin arvona saa esiintyä nolla tai useampi TekstiArvo, jotka kuvaavat tulevan tontin rajamerkkien numeroita tietojärjestelmissä tai rekistereissä.
{% include common/clause_end.html %}
