---
layout: "default"
title: "Sitovan tonttijaon - soveltamisprofiili"
description: ""
id: "soveltamisohje-tjs"
status: "Luonnos"
---
<!-- {% include common/important.html content="Sisältö ei vielä ajantasalla UML-kaavion kanssa" %} -->

# Soveltamisprofiili

{:.no_toc}

1. 
{:toc}

## Johdanto

Tämän dokumentin vaatimukset ja suositukset muodostavat sitovan tonttijaon loogisen tietomallin soveltamisprofiilin sitovalle tonttijako-aineistoille. Soveltamisprofiili kuvaa ne rajoitukset ja lisävaatimukset, joita tulee noudattaa sitovan tonttijaon tietomallin UML-kielisen kuvauksen ja sen sanallisen dokumentaation soveltamisessa sitovien tonttijakojen tietoaineistojen kuvaamiseen.

## Koodistot

### Vuorovaikutustapahtuman laji

<!--Lisää sisäiset linkit vielä -->
{% include common/clause_start.html type="req" id="prof-tjs/vaat-sitova-tonttijako-vuorovaikutustapahtumalaji" %}
Luokan AbstraktiVuorovaikutustapahtumanLaji sijaan tulee käyttää tarkentavaa luokkaa SitovanTonttijaonVuorovaikutustapahtumanLaji.
{% include common/clause_end.html %}

### Käsittelytapahtuman laji

<!--Lisää sisäiset linkit vielä -->
{% include common/clause_start.html type="req" id="prof-tjs/vaat-sitova-tonttijako-kasittelytapahtuma" %}
Luokan AbstraktiKasittelytapahtumanLaji sijaan tulee käyttää tarkentavaa luokkaa SitovanTonttijaonKasittelytapahtumanLaji.
{% include common/clause_end.html %}

## Toteuttavan kaavamääräyksen arvot

{% include common/clause_start.html type="req" id="prof-tjs/vaat-toteuttava-kaavamaarays-tunnus" %}
Sitovan tonttijaon tonttijakotonteihin liittyvät toteuttavat Kaavatietomallin kaavamääräykset linkitetään Kaavatietomallin Kaavakohde-luokan viittaustunnuksella. Viittaustunnuksen URL-arvo annetaan sitovan tonttijako tietomallin Tonttijakotontti-luokan ```kaavakohde```-attribuutille. Sitovan tonttijaon Tonttijakotontti-luokan osalta tulee noudattaa seuraavia rajoituksia:

- ```kaavakohde```-attribuutin arvoina saa esiintyä vain yksi viittaustunnus.
- ```jyvitettäväRakentamisenMäärä```-attribuutin arvoina saa esiintyä nolla tai yksi NumeerinenArvo, joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include common/clause_end.html %}
