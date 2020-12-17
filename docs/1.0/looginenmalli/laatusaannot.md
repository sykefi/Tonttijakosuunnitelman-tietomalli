---
layout: "default"
title: "Kaavatietomalli - looginen tietomalli - laatusäännöt"
description: ""
page: "laatusaannot"
modelversion: "1.0"
status: "Keskeneräinen"
---
# Laatusäännöt
{:.no_toc}

1. 
{:toc}

## Johdanto

## Yhteiset laatusäännöt

### UML-mallin mukaisuus
{% include clause_start.html type="req" id="laatu/vaat-uml-mukaisuus" %}
Kaavatietomallin loogisen tietomallin toteutusten tulee noudattaa tietomallin [UML-kielisen luokkakaavion](./uml/) määrityksiä luokkien attribuuttien ja assosiaatioiden kardinaliteetin ja tyypin suhteen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="laatu/vaat-uml-toteutus" %}
Kunkin fyysisen tietomallin kuvauksessa tulee määritellä minkälaista rakennetta ja tietotyyppiä kukin loogisen tietomallin luokka ja attribuutin tyyppi vastaa fyysisessä mallissa. Attribuutit ja assosiaatiot, joiden kardinaliteetti on loogisessa tietomallissa ```0..1``` tai ```0..*``` voivat puuttua fyysisen tietomallin mukaisista objekteista.
{% include clause_end.html %}

### Tunnisteet ja sisäisten viittausten eheys
{% include clause_start.html type="req" id="laatu/vaat-tunnukset-viittaukset" %}
Kaavatietomallin versioitavilla tietokohteilla tulee olla yksilöivät tunnukset, joiden luomisessa ja käyttämisessä tulee noudattaa elinkaarisääntöjen luvun [Tunnukset ja niiden hallinta](elinkaarisaannot.html#tunnukset-ja-niiden-hallinta) vaatimuksia.
{% include clause_end.html %}

### Elinkaarisääntöjen mukaisuus
{% include clause_start.html type="req" id="laatu/vaat-elinkaarisaannot" %}
Kaavatietomallin mukaisten aineistojen tulee noudattaa Kaavatietomallin [elinkaarisääntöjen](elinkaarisaannot.html) vaatimuksia, ja niiden on suositeltavaa noudattaa elinkaarisääntöjen suosituksia. Vaatimukset ja suositukset on erotettu selkeästi elinkaarisääntöjen muusta sisällöstä.
{% include clause_end.html %}

### Soveltamisohjeiden mukaisuus
{% include clause_start.html type="req" id="laatu/vaat-soveltamisohjeet" %}
Kaavatietomallin mukaisten aineistojen tulee noudattaa niiden kaavalajikohtaisten soveltamisohjeiden ([Asemakaava](../soveltamisohjeet/asemakaava/), [Yleiskaava](../soveltamisohjeet/yleiskaava/)) vaatimuksia, ja niiden on suositeltavaa noudattaa soveltamisohjeiden suosituksia. Vaatimukset ja suositukset on erotettu selkeästi soveltamisohjeiden muusta sisällöstä.
{% include clause_end.html %}

### Merkkijonojen käyttö
#### Merkistöt
{% include clause_start.html type="req" id="laatu/vaat-merkisto-utf8" %}
Kaikki Kaavatietomallin tekstimuotoiset sisällöt on tiedonsiirtoa varten koodattava käyttäen UTF-8 -merkistökoodausta.
{% include clause_end.html %}

#### Monikielinen sisältö ja kielikoodit
Kaikki kaavavietomallin tekstimuotoinen sisältö ilmaistaan ISO 19013 -standardin määrittelemän [LanguageString](dokumentaatio/#languagestring)-luokan avulla.

{% include clause_start.html type="req" id="laatu/vaat-monikielisyys-kielikoodi" %}
Kunkin LanguageString-luokan objektin tulee sisältää ```language```-attribuutti, jonka arvona on ISO 639-2 -standardin mukainen terminologinen, kolmekirjaiminen kielikoodi code (ISO 639-2/T).
{% include clause_end.html %}

{% include note.html content="ISO 639-2/T koodilistan mukaiset koodit Suomen virallisille kielille ovat ```fin``` (suomi), ```swe``` (ruotsi), ```smn``` (inarinsaami), ```sms```(koltansaami) ja ```sme``` (pohjoissaami). Muita Suomessa paljon puhuttujen kielten ISO 639-2/T -koodeja: ```rus``` (venäjä), ```est``` (viro), ```ara```(arabia),  ```eng``` (englanti), ```som``` (somali), ```kur``` (kurdi)." %}

Tekstimuotoiset attribuutit on määritelty siten, että ne sisältävät 0 tai enemmän LanguageString-tyyppisiä arvoja.

{% include clause_start.html type="req" id="laatu/vaat-yksi-teksti-per-kieli" %}
Kunkin tekstimuotoista sisältöä kuvaavan attribuutin arvoina tulee olla enintään yksi LanguageString-tyyppinen arvo kutakin kielikoodia (```language```-attribuutti) kohti.
{% include clause_end.html %}

#### Enimmäispituudet
{% include clause_start.html type="req" id="laatu/vaat-merkijono-pituus" %}
Kunkin yhdellä kielellä annetun LanguageString-tyyppisen merkkijonon enimmäispituus on 1024 merkkiä.
{% include clause_end.html %}

### Geometriat

#### Sallitut geometriatyypit
{% include clause_start.html type="req" id="laatu/vaat-2d-geom-tyyppit" %}
Kaavatietomallin geometria-tyyppisten attribuuttien arvoina voidaan 2-ulotteisten geometrioiden kuvaamiseen käyttää OGC [Geography Markup Language (GML) simple features
profile (with Corrigendum) v2.0](http://portal.opengeospatial.org/files/?artifact_id=42729) -standardin taulukon 6 kuvaamia [GML 3.2 -standardin](http://portal.opengeospatial.org/files/?artifact_id=20509) geometriaominaisuuksia vastaavia geometriatyyppejä.
{% include clause_end.html %}

{% include question.html content="Miten tulisi määritellä sallitut 3-ulotteiset geometriatyypit?" %}

{% include note.html content="Kaavatietomalli ei vaadi GML-kielen käyttämistä geometrioiden kuvaamisessa. Kaavatietomallin mukaiset fyysiset tietomallit voivat rajoittaa mahdollisia geometriatyyppejä ja niiden ominaisuuksia GML simple features -profiilin tukemaa joukkoa pienemmäksi." %}

#### Geometrinen ja topologinen eheys

#### Kohteiden geometrioiden päällekkäisyys

#### Sallitut koordinaatistot ja koordinaattijärjestys

### Päivämäärät ja kelloanajat

## Luokkakohtaiset säännöt

## Kaavamääräyskohtaiset säännöt

### Alueen käyttötarkoitus asemakaavassa

