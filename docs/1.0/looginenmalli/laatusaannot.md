---
layout: "default"
title: "Kaavatietomalli - looginen tietomalli - laatusäännöt"
description: ""
page: "laatusaannot"
modelversion: "1.0"
status: "Ehdotus"
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
Kaavatietomallin 2-ulotteisten geometria-tyyppisten attribuuttien arvoina käytetään OGC [Geography Markup Language (GML) simple features
profile (with Corrigendum) v2.0](http://portal.opengeospatial.org/files/?artifact_id=42729) -standardin taulukon 6 kuvaamia [GML 3.2 -standardin](http://portal.opengeospatial.org/files/?artifact_id=20509) geometriaominaisuuksia vastaavia geometriatyyppejä.
{% include clause_end.html %}

**GML simple features profile -geometriatyypit**

GML:n geometriaominaisuuden tyyppi | Rajoitukset
-----------------------------------|--------------------------------------
gml:PointPropertyType              | GML:n mukainen
gml:CurvePropertyType              | Tuettuja segmenttityyppejä ovat gml:LineString tai gml:Curve koostuen gml:LineStringSegment:istä, gml:Arc, gml:Circle tai  gml:CircleByCenterPoint.
gml:SurfacePropertyType            | Tuettuja tyyppejä ovat gml:Polygon tai gml:Surface käyttäen gml:PolygonPatch -osia. Pintojen reunukset kuvataan käyttäen segmenttityyppejä gml:LinearRing tai gml:Ring käyttäen yhtä gml:Curve-tyyppistä viivaa koostuen gml:LineStringSegment:istä, gml:Arc, gml:Circle tai gml:CircleByCenterPoint.
gml:GeometryPropertyType           | Tuettuja arvotyyppejä ovat  gml:Point,gml:LineString, gml:Curve, gml:Polygon, gml:Surface, gml:MultiPoint, gml:MultiCurve ja gml:MultiSurface
gml:MultiPointPropertyType         | GML:n mukainen
gml:MultiCurvePropertyType         | Samat rajoitukset kuin gml:CurvePropertyType:lle
gml:MultiSurfacePropertyType       | Samat rajoitukset kuin gml:SurfacePropertyType


{% include question.html content="Miten tulisi määritellä sallitut 3-ulotteiset geometriatyypit? gml:Solid-tyyppinen voluumi ainakin tarvitaan. Ehkä CityGML 2.0:n mukaiset 3D-geometriatyypit?" %}

{% include note.html content="Kaavatietomalli ei vaadi GML-kielen käyttämistä geometrioiden kuvaamisessa. Kaavatietomallin mukaiset fyysiset tietomallit voivat rajoittaa mahdollisia geometriatyyppejä ja niiden ominaisuuksia GML simple features -profiilin tukemaa joukkoa pienemmäksi." %}

#### Sallitut koordinaatistot ja koordinaattijärjestys

{% include question.html content="Miten sallitut koordinaatistot rajataan? Ainakin ETRS-TM35FIN (EPSG:3067) ja N2000 (EPSG:3900), mutta miten tehdään muiden kunnissa käytössä olevien koordinaatistojen suhteen?" %}

{% include clause_start.html type="req" id="laatu/vaat-koord-jarjestys" %}
Geometrioiden ilmaisemisessa tulee noudattaa kunkin koordinaatiston määritelmässä annettua virallista koordinaattijärjestystä.
{% include clause_end.html %}

#### Geometrinen ja topologinen eheys

{% include clause_start.html type="req" id="laatu/vaat-suljetut-viivat" %}
Viivamaisten geometrioiden on oltava suljettuja, eli niiden alku- ja loppuppisteiden on oltava samat. Mikäli viiva on osa aluemaisen geometrian reunaviivaa, on myös sen oltava suljettu.
{% include clause_end.html %}

{% include clause_start.html type="req" id="laatu/vaat-kielletyt-leikkaukset" %}
Aluemaisen geometrian ulkoreunan ja reikien reunaviivat eivät saa leikata itseään tai toisiaan. Kukin reunaviiva saa koskettaa alueen ulkoreunaa, toisen reiän reunaa tai itseään vain yksittäisissä pisteissä.
{% include clause_end.html %}

{% include clause_start.html type="req" id="laatu/vaat-yhteneva-alue" %}
Aluemaisen geometrian sisäosan on oltava yhtenevä, eli minkä tahansa kahden alueen sisäpisteen välillä on voitava muodostaa viiva, joka kulkee kokonaan alueen sisällä.
{% include clause_end.html %}

{% include clause_start.html type="req" id="laatu/vaat-ei-tyhja-alue" %}
Aluemaisen geometrian sisäosan pinta-ala on oltava mitattavissa, eli alueeseen tulee sisältyä pisteitä, jotka eivät ole osa alueen ulkoreunaa.
{% include clause_end.html %}

{% include clause_start.html type="req" id="laatu/vaat-pinnan-orientaatio" %}
Aluemaisten geometrioiden kiertosuuntien tulee noudattaa ISO 19107:2019-standardin määritelmää: Geometrioiden reunojen kiertosuunnat tulee valita siten, että pinnan yläpuolelta katsottuna ulkorajan reunan kiertosuunta on vastapäivään ja pinnan mahdollisten reikien reunojen kiertosuunnat ovat myötäpäivään. Mikäli pinta on osa 3-ulotteisten geometrian ulkorajaa, ulkopuoli vastaa yläpuolta.
{% include clause_end.html %}


#### Paikkatietokohteiden geometrioiden sisäkkäisyys ja päällekkäisyys

{% include clause_start.html type="req" id="laatu/vaat-kaavakohteet-kaavan-sisalla" %}
[Kaava](dokumentaatio/#kaava)-luokan objektin ```aluerajaus```-attribuutin ilmaiseman kaava-alueen tulee pitää sisällään kaikki kaavaan sisältyvien [AbstraktiKaavakohde](dokumentaatio/#abstraktikaavakohde)-luokan objektien geometriat, poislukien sellaiset [Kaavakohde](dokumentaatio/#kaavakohde)-luokan objektit, joiden kaikki kaavamääräykset ja kaavasuositukset ovat kumottuja.
{% include clause_end.html %}



### Päivämäärät ja kelloanajat
Kaavatietomallin yksittäisiä ajanhetkiä kuvaavat attribuutit ovat ISO 19108-standardin määrittämää tyyppiä [TM_Instant](dokumentaatio/#tm_instant) ja aikavälejä kuvaavat attribuutit tyyppiä [TM_Period](dokumentaatio/#tm_period). Päivämäärät annetaan käyttäen Gregoriaanista kalenteria ja kellonajat käyttäen 24 tunnin kelloaikamuotoa alkaen kellonajasta 00:00:00.000  ja päättyen ajanhetkeen 23:59:59.999 (tunti, minuutti, sekunti, millisekunti).

{% include clause_start.html type="req" id="laatu/vaat-ajanhetki-tarkkuus" %}
Yksittäisiä ajanhetkiä kuvaavat attribuutit ilmaistaan joko pelkän päivämäärän tai päivämäärän ja kelloajan avulla. Päivämäärät ilmaistaan antamalla vuoden, kuukauden ja kuukauden päivän numeeriset arvot. Kellonajat ilmaistaan vähintään yhden minuutin ja enintään yhden millisekunnin tarkkuudella antamalla tunnin, minuutin, sekunnin ja millisekunnin numeeriset arvot.
{% include clause_end.html %}

{% include clause_start.html type="req" id="laatu/vaat-aikavyohykkeet" %}
Päivämäärien ja kellonaikojen yhteydessä voidaan antaa myös tieto aikavyöhykkeestä tai aikojen poikkeamasta UTC-ajasta. Mikäli muuta ei tietoa ei anneta, tulee ajanhetkitiedot tulkita siten, että ne kuvaavat Suomen aikaa noudattaen kyseisellä ajanhetkellä voimassaolleita asetuksia kesäaikaan liittyen.
{% include clause_end.html %}

{% include clause_start.html type="rec" id="laatu/suos-ajanhetki-muoto" %}
Mikäli fyysinen tietomalli ei aseta ajanhetken muodolle rajoituksia, on suositeltavaa käyttää [IETF RFC 3339 Date and Time on the Internet: Timestamps](https://tools.ietf.org/html/rfc3339)-standardin määrittelemää syntaksia.
{% include clause_end.html %}

{% include clause_start.html type="req" id="laatu/vaat-aikavali-maar" %}
Aikavälejä kuvaavat attribuutit voidaan antaa joko sekä alku- että loppuajanhetken avulla tai vain joko alku- tai loppuajanhetken avulla. Mikäli alkuajanhetkeä ei anneta, tulkitaan aikavälin sisältävän minkä tahansa ajanhetken loppuajanhetkeen saakka. Vastaavasti Mikäli loppuajanhetkeä ei anneta, tulkitaan aikavälin sisältävän minkä tahansa ajanhetken alkujanhetkestä lähtien.
{% include clause_end.html %}

## Luokkakohtaiset säännöt

### Kaava
{% include clause_start.html type="req" id="laatu/vaat-kaava-paallekkaiset-aluerajaukset" %}
Kaavatietovarastossa ei tule olla kahta [Kaava](dokumentaatio/#kaava)-luokan objektia, joiden ```laji```-attribuutin arvot ovat samat, joiden ```voimassaoloAika```-attribuutin arvojen kuvaamat aikavälit ovat sisäkkäisiä tai lomittain, ja joiden ```aluerajaus```-attribuuttien kuvaavat geometriat leikaavat toisiaan tai ovat sisäkkäisiä.
{% include clause_end.html %}

{% include clause_start.html type="req" id="laatu/vaat-kaava-aluerajaus-annettava" %}
[Kaava](dokumentaatio/#kaava)-luokan objektilla, jonka [elinkaatila](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaaritila) on kaavaehdotus tai myöhempi (koodi 04, 05, 06, 07, 08, 09, 10, 11 tai 12) tulee olla ei-tyhjä ```aluerajaus```-attribuutin arvo. 
{% include clause_end.html %}

{% include clause_start.html type="req" id="laatu/vaat-kaava-virelletuloaika-annettava" %}
[Kaava](dokumentaatio/#kaava)-luokan objektilla, jonka [elinkaatila](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaaritila) on virelletullut tai myöhempi (koodi 02, 03, 04, 05, 06, 07, 08, 09, 10, 11 tai 12), tulee olla ei-tyhjä ```virelletuloAika```-attribuutin arvo. 
{% include clause_end.html %}

{% include clause_start.html type="req" id="laatu/vaat-kaava-hyvaksymistuloaika-annettava" %}
[Kaava](dokumentaatio/#kaava)-luokan objektilla, jonka [elinkaatila](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaaritila) on hyväksytty kaava tai myöhempi (koodi 06, 07, 08, 09, 10, 11 tai 12), tulee olla ei-tyhjä ```hyvaksymisAika```-attribuutin arvo.
{% include clause_end.html %}

{% include clause_start.html type="req" id="laatu/vaat-kaava-voimassaolo-alku" %}
[Kaava](dokumentaatio/#kaava)-luokan objektilla, jonka [elinkaatila](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaaritila) on osittain voimassa, voimassa, tai niitä myöhempi (koodi 09, 10, 11 tai 12) tulee olla ei-tyhjä ```voimassaAika```-attribuutin alkuajanhetken arvo.
{% include clause_end.html %}

{% include clause_start.html type="req" id="laatu/vaat-kaava-voimassaolo-loppu" %}
[Kaava](dokumentaatio/#kaava)-luokan objektilla, jonka [elinkaatila](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaaritila) on  kumottu tai kumoutunut (koodi 11 tai 12), tulee olla annettu ei-tyhjä ```voimassaAika```-attribuutin loppuajanhetken arvo.
{% include clause_end.html %}

## Kaavamääräyskohtaiset säännöt

### Käyttötarkoitusalueet

{% include clause_start.html type="req" id="laatu/vaat-kayttotarkoitusalue-maar" %}
Asemakaavan [Kaavakohde](dokumentaatio/#kaavakohde)-luokan objektit, joihin liittyy assosiaatiolla ```maarays``` yksi tai useampi sellainen [Kaavamaarays](dokumentaatio/#kaavamaarays)-luokan objekti, jonka ```laji```-attribuutin arvo on jokin [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01)-koodin alakoodeista, määrittelevät asemakaavan käyttötarkoitusalueet. Käyttötarkoitusalueiden ```geometria```-attribuutin kuvaamaan geometrian tulee olla aluemainen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="laatu/vaat-ei-leikkaavat-kayttotarkoitusalueet" %}
Asemakaavan käyttötarkoitusalueet eivät saa leikata toisiaan.
{% include clause_end.html %}

{% include clause_start.html type="req" id="laatu/vaat-asemakaavan-kayttotarkoituspeite" %}
Asemakaavan, jonka ```elinkaaritila```-attribuutin arvo on kaavaehdotus tai myöhempi (koodi 04, 05, 06, 07, 08, 09, 10, 11 tai 12), sisältämien käyttötarkoitusalueiden tulee peittää sen ```aluerajaus```-attribuutin ilmaisema kaavan alue siten, että kukin alueen sisäpiste sisältyy täsmälleen yhteen käyttötarkoitusalueeseen.
{% include clause_end.html %}

{% include question.html content="Alueen käyttötarkoituksen antaminen yhtenä kaavamääräyslajina tekee laatusäännöistä monimutkaisia, kun käyttötarkoitusalueita ei voida erotella tietyn yhden kaavamääräyksen avulla. Pitäisikö sittenkin antaa alueen käyttötarkoitus omana kaavamääräyslajinaan tai jopa palata ajatukseen kaavakohdelajin käyttämisestä käyttötarkoitusalueiden ilmoittamiseen?" %}
