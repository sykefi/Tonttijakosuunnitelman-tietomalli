---
layout: "default"
title: "Tonttijakosuunnitelman testaus"
page: "testaus"
status: "Ehdotus"
---
# Tietomallin testaus

Testauksessa käytiin läpi prosessi tonttijakosuunnitelman tuottamisesta, sen käsittelemisestä tiedonhallintajärjestelmässä sekä mallin mukaisen tiedon esittäminen ja hyödyntäminnen loppukäyttäjän sovelluksessa. Tavoitteena oli tämän prosessin aikana tunnistaa tietomallin vahvuudet ja heikkoudet käytännön toteutuksissa. 

## Mitä testattiin

* *täytä*
* *täytä*
* *täytä*

Testauksessa tuotettiin tonttijakosuunnitelma, tiedonhallintajärjestelmä sen tallentamiseksi sekä rajapinnat tiedon vastaanottoon ja jakeluun.

{% include note.html content="Kirjataan tähän tarkemmin, mitä testit pitivät sisällään, jos tietomallia ei testattu kokonaisuudessaan, vaan esim. esitonttiluokka jäi ulkopuolelle." %}

## Rajaukset

Testauksen ulkopuolelle jätettiin:
* Kaikkia tietomallin luokkia ei testattu (kts. ylle testatut luokat)

# Testauksen toteutustapa ja -aika

Testaus toteutettiin xx.xx.xxxx-xx.xx.xxxx. Testauksen suoritti Ubigu Oy:n Marko Kauppi. Testauksessa tehtiin seuraavat asiat:

* Olemassaolevia tonttijakosuunnitelmia digitoitiin tietomallin mukaiseen muotoon
* Tiedonhallintajärjestelmä (tietokanta, tallennuspalvelu ja rajapinnat)
* Testauksen käyttöliittymä

## Tuotetut tietomallin mukaiset suunnitelmat

Projektitiimi yhdessä sidosryhmien kanssa pohti ja keräsi potentiaalisia tonttijakosuunnitelmia testausta varten. Näistä valikoitiin sellaiset tapaukset, jotka kattavat keskeisimmät käyttötapaukset: 

1. *Keskeinen käyttötapaus* ***kohde***
2. *Keskeinen käyttötapaus* ***kohde***
3. *Keskeinen käyttötapaus* ***kohde***

Lähtöaineisto oli x formaatissa. 

Testauksessa tuotettiin...

### Digitointiprosessi

{% include question.html content="Onko tämä meillekin tarpeen? Kaavatietomallissa hyödynnetty QGIS:ä ja IDE:ä sen rinnalla. " %}

## Testaukseen tuotettu tietonhallintajärjestelmä

Testausta varten toteutettiin tiedonhallintajärjestelmä. Järjestelmä asennettiin Ubigu Oy:n pilvipalveluympäristöön. Järjestelmä koostui kolmesta pääosasta:

* Tietokanta
* Tallennuspalvelu
* Rajapintapalvelu

Tietokantana oli PostGIS. Tallennuspalvelu ja rajapintapalvelu toteutettiin x:llä.

### Tietokanta

Tietokantana käytettiin Postgresql-tietokantaa PostGIS-laajennoksella. 

{% include note.html content="Kuvaile kannan rakenne. " %}

### Tallennuspalvelu

{% include question.html content="REST POST ja GeoJSON?" %}

{% include question.html content="Millaisia checkkejä datalle?" %}

{% include question.html content="Tunnisteet?" %}

### Rajapintapalvelu

{% include note.html content="Kaavatietomallilla käytössä SOFP-palvelin ja OGC API-features sekä kokeellinen FeatureCollection-rajapinta." %}

{% include note.html content="Kerro linkki rajapintaan." %}

## Testauksen käyttöliittymä

{% include question.html content="Tehdäänkö me jopa käyttöliittymä? Kaavatietoporukalla selaimessa ja toteutettu Reactilla ja OpenLayersilla." %}

# Testauksen tulokset

{% include question.html content="Githubiin issueita?" %}

## Huomio 1

*Sisältö*

## Huomio 2

*Sisältö*

# Yhteenveto

*Sisältö*
