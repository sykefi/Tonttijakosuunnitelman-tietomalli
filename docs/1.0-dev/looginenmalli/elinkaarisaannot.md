---
layout: "default"
title: "Tonttijakosuunnitelma - looginen tietomalli - Elinkaarisäännöt"
description: ""
page: "elinkaarisaannot"
modelversion: "1.0-dev"
status: "Keskeneräinen"
---

# Elinkaarisäännöt
{:.no_toc}

1. 
{:toc}

## Johdanto

Tonttijakosuunnitelmalla on tietomallissa elinkaari, joka määrää sen sisältämien tietokohteiden: 

- Syntytavan
- Sen, voivatko ne muuttua
- Miten ne voivat muuttua
- Miten ne kumoutuvat johtaen niiden voimassaolon päättymiseen

Elinkaarisääntöjen määrittely liittyy olennaisesti tietokohteiden versionhallintaan, eli miten yksittäisten tietokohteiden niiden elinkaaren aikana muodostettavat versiot voidaan tallentaa ja yksilöidä viittauskelpoisten pysyvien tunnusten avulla. 

Tässä annetut säännöt pohjautuvat paikkatietokohteiden yksilöivien tunnusten ja elinkaarisääntöjen periaatteisiin, jotka on kuvattu jukishallinnon suosituksessa [JHS 193 - Paikkatiedon yksilöivät tunnukset](http://www.jhs-suositukset.fi/suomi/jhs193).

### HTTP URI -tunnukset

HTTP URI -muotoiset tunnukset ovat [RFC 3986 -standardiin](https://tools.ietf.org/html/rfc3986) perustuvia HTTP(S) -protokollan mukaisia URI-osoitteita (Uniform Resource Identifier), joiden globaali yksilöivyys varmistetaan Internetin DNS-nimipalveluun rekisteröityjen domain-nimien avulla. Kullakin DNS-palveluun rekisteröidyllä domain-nimellä (esim. ```uri.suomi.fi```) on yksiselitteinen omistaja, joka on suoraan tai välillisesti vastuussa ko. domain-nimen alla julkaistavasta sisällöstä. Nimen omistaja on myös ainoa taho, joka voi päättää ko. domain-nimeä käyttävien osoitteiden ohjautumisesta haluttuihin resursseihin, mikä tekee siitä luontevan perustan yksilöivien tunnusten nimiavaruuksille (esim. <http://uri.suomi.fi/object/rytj/kaava>). HTTP URI -muotoisen tunnuksen yksilöivyys perustuu siis domain-nimien ja siten niihin perustuvien nimiavaruuksien keskitettyyn hallintaprosessiin.

URI-tunnuksen ei tarvitse viitata konkreettiseen sijaintiin internetissä, vaan se voi olla abstraktimpi tunnus. [JHS 193 Paikkatiedon yksilöivät tunnukset](http://www.jhs-suositukset.fi/suomi/jhs193) määrittelee paikkatiedon yksilöiville tunnuksille muodon <http://paikkatiedot.fi/{tunnustyyppi}/{aineistotunnus}/{paikallinen tunnus}>, jossa paikkatietokohteiden ```tunnustyyppi``` on ```so```. Tonttijakomallissa on esimerkkinä käytetty tunnusmuotoa 
<http://uri.suomi.fi/object/rytj/{aineistotyyppi}/{TietotyypinNimi}/{paikallinenTunnus}>. HTTP URI -muotoisen tunnuksen etuna on luettavuus sekä DNS- ja HTTP-protokollien tarjoama kyky ratkaista (resolve) tunnus ja ohjata kysyjä sitä kuvaavaan Internet-resurssiin ilman tarvetta erityiselle keskitetylle tunnusrekisterille ja siihen perustuvalle ratkaisupalvelulle.

Tonttijakomallissa HTTP URI -muotoa käytetään [viittaustunnus](#viittaustunnus)-attribuutissa, jonka avulla viitataan tiettyyn versioon tietokohteesta kaavan ulkopuolelta.

### UUID-tunnukset
UUID (Universally Unique Identifier) on OSF:n (Open Software Foundation) määrittelemä standardoitu tunnusmuoto, jonka avulla voidaan luoda vakiokokoisia, hyvin suurella todennäköisyydellä yksilöiviä tunnuksia ilman keskitettyä hallintajärjestelmää. UUID-tunnukset voivat perustua satunnaislukuihin, aikaleimoihin, tietokoneiden verkkokorttien MAC-osoitteisiin tai merkkijonomuotoisiin nimiavaruuksiin eri yhdistelmissä. UUID-tunnukset erityisen hyvin tietojärjestelmissä, joissa uusia globaalisti pysyviä ja yksilöiviä tunnuksia on tarpeen luoda hajautetusti ilman keskitettyä tunnusrekisteriä.

Tonttijakosuunnitelman tietomallissa UUID-muotoisia tunnuksia suositellaan käytettäväksi [identiteettitunnus-](#identiteettitunnus), tonttijakosuunnitelma- ja tuottajakohtainen tunnus-attribuuttien arvoina.

## Tonttijakosuunnitelman tietomallin kohteiden elinkaaren hallinnan periaatteet

Tonttijakosuunnitelman tietomallin elinkaarisäännöt mahdollistavat tietomallin tietokohteiden käsittelyn, tallentamisen ja muuttamisen hallitusti sekä niiden laatimis- että voimassaolovaiheissa. Tonttijakosuunnitelman tietomallin mukaiset tietosisällöt ovat merkittäviä oikeusvaikutuksia aiheuttavia, juridisesti päteviä aineistoja, joita käsitellään hajautetusti eri toimijoiden tietojärjestelmissä. Tämän vuoksi niiden tunnusten, viittausten ja versionnin hallintaan on syytä kiinnittää erityistä huomiota.

Seuraavat keskeiset periaatteet ohjaavat tonttijakomallin elinkaaren hallintaa:
* Kukin tonttijakosuunnitelmatietovarantoon tallennettu versio tonttijakosuunnitelmasta ja sen sisältämistä yksittäisistä esitonttikohteista saa pysyvän, versiokohtaisen tunnuksen.
* Kuhunkin tonttijakosuunnitelmatietovarantoon tallennetun tietokohteen versioon voidaan viitata sen pysyvän tunnuksen avulla.
* Tonttijakosuunnitelman tietomallin tietokohteiden väliset viittaukset toteutetaan hallitusti sekä tonttijakosuunnitelmatietoa tuottavissa tietojärjestelmissä että yhteisissä tonttijakosuunnitelmatietovarannoissa.
* Tonttijakosuunnitelmatietovaranto vastaa pysyvien tunnusten luomisesta ja antamisesta tallennettaville tietokohteille.

Tonttijakosuunnitelman tietomallin mukaisten aineistojen tallentamisessa erotetaan toisistaan tietojen tuottaminen ja muokkaus sisäisesti niiden tuottamiseen ja muokkaamiseen käytettävissä tietojärjestelmissä ja niiden hallinta yhteisessä versiohallitussa tonttijakosuunnitelmatietovarannossa. Tonttijakosuunnitelman tietomallin ei ole mielekästä asettaa vaatimuksia tonttijakosuunnitelmatietoa tuottavien tietojärjestelmien tunnusten ja versioiden hallintaan, vaan tietomallissa tulee varautua siihen, että yhteiseen tietovarantoon tallennettavia tietoja on muokattu ja tallennettu sisäisesti tuntematon määrä kertoja ennen ensimmäistä viemistä yhteiseen tietovarantoon, ja samoin tuntematon määrä kertoja kunkin yhteiseen varantoon vietävän version välillä. Näin ollen on mahdollista, että tonttijakosuunnitelmasta voi olla joissain tietojärjestelmissä tallennettuna paikallisia versiota, joita ei ole koskaan viety yhteiseen tonttijakosuunnitelmatietovarantoon.

## Tunnukset ja niiden hallinta

### Identiteettitunnus
Identiteettitunnus yhdistää saman tunnistettavan tonttijakosuunnitelman tietokohteen kehitysversiot toisiinsa.

{% include clause_start.html type="req" id="elinkaari/vaat-identiteettitunnus-maar" %}
Tonttijakosuunnitelman tietomallin tietokohteissa identiteettitunnus kuvataan attribuutilla ```identiteettiTunnus```. Kahdella tonttijakosuunnitelman versioitavalla objektilla voi olla sama ```identiteettiTunnus```-attribuutin arvo ainoastaan, mikäli kaikki seuraavista ehdoista ovat tosia:

* Molemmat objektit kuvaavat saman tonttijakosuunnitelman tai sen sisältämän, nimettävissä olevan tietokohteen kehityskaaren eri tiloja.
* Molemmat objektit liittyvät samaan tonttijakosuunnitelmaan.
* Molemmat objektit ovat saman loogisen tietomallin luokan edustajia.
{% include clause_end.html %}

Yksittäisen tonttijakosuunnitelman tietokohteen koko ko. tietojärjestelmään tallennettu kehityshistoria saadaan noutamalla kaikki ko. tyyppisen tietokohteen objektit, joilla on sama ```identiteettiTunnus```-attribuutin arvo.

Yhteinen tonttijakosuunnitelmatietovaranto on vastuussa uusien identiteettitunnusten luomisesta tarvittaessa tallennustapahtumien yhteydessä, ja niiden välittämisestä tiedoksi tallentavalle tietojärjestelmälle. Tallentavan tietojärjestelmän tulee tallentaa itselleen kopiot tietovaraston tallennustapahtuman yhteydessä palautamistä kaavan ja sen tietokohteiden identiteettitunnuksista, sillä ne tulee sisällyttää ko. tietokohteiden seuraavien versioden tallennettavaksi lähetettäviin objekteihin.

{% include clause_start.html type="req" id="elinkaari/vaat-identiteettitunnus-gen" %}
* Mikäli tallennettavalle tietokohteelle ei ole annettu ```identiteettitunnus```-attribuuttia, tai tietovarasto ei sisällä sellaista saman luokan tietokohdetta, jolla on sama ```identiteettiTunnus```-attribuutin arvo, tonttijakosuunnitelmatietovaranto luo ko. objektille uuden identiteettitunnuksen, joka korvaa tuottavan tietojärjestelmän objektille mahdollisesti antaman ```identiteettiTunnus```-attribuutin arvon. Tällöin objektia pidetään uuden tietokohteen ensimmäisenä versiona.
* Mikäli tietovarasto sisältää saman luokan tietokohteen, jolla on sama ```identiteettiTunnus```-attribuutin arvo kuin tallennetavalla objektilla, objekti tallennetaan tonttijakosuunnitelmatietovarantoon ko. tietokohteen uutena versiona. Tällöin tallennettavan objektin ```identiteettiTunnus```-attribuutin arvo ei muutu.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-kaavan-identiteettitunnus" %}
[Tonttijakosuunnitelma](../../looginenmalli/dokumentaatio/#tonttijakosuunnitelma)-luokan tietokohteen tallennuksen yhteydessä tonttijakosuunnitelmatietovaranto tarkistaa, että sen attribuutti ```tonttijakosuunnitelmaTunnus``` on annettu ja validi.
* Mikäli kohde katsotaan sen ```identiteettiTunnus```-attribuutin arvon perusteella uudeksi tietokohteeksi, sama ```tonttijakosuunnitelmaTunnus```-attribuutti ei saa olla käytössä muilla [Tonttijakosuunnitelma](../../looginenmalli/dokumentaatio/#tonttijakosuunnitelma)-luokan objekteilla.
* Mikäli kohde katsotaan sen ```identiteettiTunnus```-attribuutin arvon perusteella aiemmin tallennetun tietokohteen uudeksi versioksi, aiemmin tallennetun version ```tonttijakosuunnitelmaTunnus```-attribuutin tulee olla sama kuin tallennettavassa objektissa.
{% include clause_end.html %}

{% include clause_start.html type="rec" id="elinkaari/suos-identiteettitunnus-form" %}
Identiteettitunnuksen suositeltu muoto on UUID.
{% include clause_end.html %}

Esimerkki: ```640bff6b-c16a-4947-af8d-d86f89106be1```

### Paikallinen tunnus
Paikallinen tunnus yksilöi tietokohteen yhden version tonttijaon tietovaraston sisällä. 

{% include clause_start.html type="req" id="elinkaari/vaat-paikallinentunnus-maar" %}
Tonttijakosuunnitelman tietomallin tietokohteissa paikallinen tunnus kuvataan attribuutilla ```paikallinenTunnus```. Kaikilla saman tonttijakosuunnitelmatietovarannon objekteilla (ml. saman tietokohteen eri versiot) tulee olla eri ```paikallinenTunnus```-attribuutin arvo.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-paikallinentunnus-gen" %}
Tietokohteiden paikallinen tunnus muuttuu sen jokaisen version tallennuksen yhteydessä. Tonttijakosuunnitelmatietovaranto vastaa paikallisten tunnusten luomisesta tallennustapahtuman yhteydessä. Tuottavan tietojärjestelmän mahdollisesti asettamat arvot korvataan..
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-paikallinentunnus-form" %}
Paikallinen tunnus koostuu identiteettitunnuksesta ja siihen erotinmerkillä liitetystä versiokohtaisesta, esimerkiksi tarkkaan tallennusajanhetkeen perustuvasta merkkijonosta.
{% include clause_end.html %}

{% include clause_start.html type="rec" id="elinkaari/suos-paikallinentunnus-merk" %}
Paikallisen tunnuksen muodostamisessa tulee välttää merkkejä, jotka joudutaan URL-koodaamaan rajapintapalvelujen kutsuissa. Paikkatietokohteen paikallista tunnusta käytetään fyysisten tietomallien pääavaimena, esim. GeoJSON Feature ```id```-omaisuuden ja GML:n ```gml:id```-attribuutin arvona, ja siten esimerkiksi OGC Web Feature Service (WFS) - ja OGC API - Features -rajapintapalvelujen paikkatietokohteen yksilöivissä kyselyissä.
{% include clause_end.html %}

Tallennusajanhetkeen päättyvää paikallista tunnusta voidaan käyttää ilman sekaannusmahdollisuuksia samalla logiikalla myös paikallisissa versionneissa, eli sellaisissa tonttijakosuunnitelman versioiden tallennuksissa, joita ei viedä lainkaan tonttijaon tietovarastoon.

Esimerkki:```640bff6b-c16a-4947-af8d-d86f89106be1.b05cf48d46d8c905c54522f44b0a12daff11604e```

{% include note.html content="Käyttämällä paikallisena tunnuksena pelkkää identiteettitunnuksesta riippumatonta UUID-tunnusta päästäisiin lyhyempiin tunnuksiin, mutta menetetään yhteys identiteettitunnusten ja paikallisten tunnusten välillä, mikä saattaa hankaloittaa erilaisten vikatilanteiden selvitystä ja toimintavarmuuden testaamista, kun pelkkien tunnusten perusteella ei voida päätellä ovatko kaksi objektia saman tietokohteen eri versioita." %}

### Nimiavaruus
{% include clause_start.html type="req" id="elinkaari/vaat-nimiavaruus-maar" %}
Nimiavaruus määrää tonttijakosuunnitelman tietomallin kaikkien tietokohteiden viittaustunnusten alkuosan yhden tonttijakosuunnitelmatietovarannon sisällä. Tonttijakosuunnitelman tietomallin tietokohteissa paikallinen tunnus kuvataan attribuutilla ```nimiavaruus```.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-nimiavaruus-form" %}
Nimiavaruus on HTTP URI -muotoinen.
{% include clause_end.html %}

Nimiavaruus on syytä valita huolella siten, että se olisi mahdollisimman pysyvä, eikä sitä tarvitsisi tulevaisuudessa muuttaa esimerkiksi valtionhallinnon virastojen tai ministeriröiden mahdollisten uudelleenorganisointien ja -nimeämisten johdosta. Valittu URL-osoite tulee myös voida aina tarvittaessa ohjata kulloinkin käytössä olevaan rajapintapalveluun (HTTP redirect). 

{% include clause_start.html type="req" id="elinkaari/vaat-nimiavaruus-gen" %}
Tonttijakosuunnitelmatietovaranto vastaa ```nimiavaruus```-attribuuttien asetamisesta tallennustapahtuman yhteydessä. Tuottavan tietojärjestelmän mahdollisesti antamat arvot korvataan.
{% include clause_end.html %}

Esimerkki: ```http://uri.suomi.fi/object/rytj/tjs```

### Viittaustunnus
{% include clause_start.html type="req" id="elinkaari/vaat-viittaustunnus-maar" %}
Viittaustunnus yksilöi tonttijakosuunnitelman tietokohteen yhden, keskitettyyn tonttijakosuunnitelmatietovarantoon tallennetun kehitysversion globaalisti. Tonttijakosuunnitelman tietomallin tietokohteissa paikallinen tunnus kuvataan attribuutilla ```viittausTunnus```.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-viittaustunnus-form" %}
Viittaustunnus on HTTP URI -muotoinen ja se muodostuu nimiavaruudesta, tietokohteen luokan nimestä ja paikallisesta tunnuksesta yhdessä kauttaviivoilla (```/```) erotettuina.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-nimiavaruus-gen" %}
Tonttijakosuunnitelmatietovaranto vastaa ```viittausTunnus```-attribuuttien asetamisesta tallennustapahtuman yhteydessä. Tuottavan tietojärjestelmän mahdollisesti antamat arvot korvataan.
{% include clause_end.html %}

Tallentavan tietojärjestelmän ei siis tarvitse tallentaa luotuja viittaustunnuksia itselleen seuraavia tallennuksia varten.

{% include clause_start.html type="rec" id="elinkaari/suos-viittaustunnus-ohj" %}
Viittaustunnuksen on suositeltavaa ohjautua aina ko. tietokohteen version tietosisältöön kulloinkin toiminnassa olevassa tonttijakosuunnitelmatietovarannon latauspalvelussa.
{% include clause_end.html %}

Esimerkki: ```http://uri.suomi.fi/object/rytj/tjs/tonttijakosuunnitelma/640bff6b-c16a-4947-af8d-d86f89106be1.b05cf48d46d8c905c54522f44b0a12daff11604e```

### Tuottajakohtainen tunnus

{% include clause_start.html type="req" id="elinkaari/vaat-tuottajakohtainen-tunnus-maar" %}
Tonttijakosuunnitelmatietoa tuottavat järjestelmät voivat niin halutessaan käyttää tuottajakohtaista tunnusta niiden omien tietojärjestelmäspesifisten tunnusten antamiseen tonttijakosuunnitelman tietomallin tietokohteille. Tonttijakosuunnitelman tietomallin tietokohteissa tuottajakohtainen tunnus kuvataan attribuutilla ```tuottajakohtainenTunnus```.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-tuottajakohtainen-tunnus-gen" %}
Tonttijakosuunnitelmatietovaranto ei koskaan muuta tuottavan tietojärjestelmän mahdollisesti asettamia tuottajakohtaisia tunnuksia, ja ne palautetaan sellaisenaan latattaessa tietokohteita tietovarannosta.
{% include clause_end.html %}

Tietojärjestelmät voivat käyttää tuottajakohtaisia tunnuksia kohdistamaan tonttijakosuunnitelmatietovarantoon ja paikallisiin tietojärjestelmiin tallennettuja tietokohteita toisiinsa esimerkiksi päivitettäessä niiden tallennuksen yhteydessä syntyneitä tunnuksia, vertailtaessa tonttijakosuunnitelmatietovarantoon tallennettuja kohteita ja paikallisia kohteita toisiinsa, sekä esitettäessä validointipalvelun tuloksia suunnitteluohjelmiston käyttäjälle.

Tuottajakohtaisilta tunnuksilta ei vaadita yksilöivyyttä tai mitään tiettyä yhtenäistä muotoa, mutta UUID-muodon käyttäminen tarjoaa hyvin määritellyn ja standardoidun tavan luoda tuottajakohtaisista tunnuksista yksilöiviä eri tietojärjestelmien kesken. Tästä saattaa olla etua haluttaessa tehdä tuotettavista tonttijakosuunnitelmatiedoista mahdollisimman järjestelmäriippumattomia ja esimerkiksi taata tuottajakohtaisten tunnusten yksilöivyys yli mahdollisten tonttijakosuunnitelmatietoa tuottavien tietojärjestelmien vaihdosten ja päivitysten.


{% include clause_start.html type="rec" id="elinkaari/suos-tuottajakohtainen-tunnus-form" %}
Tuottajakohtaisen tunnuksen suositeltu muoto on UUID.
{% include clause_end.html %}

Esimerkki: ```tj-123445```

### Tonttijakosuunnitelmatunnus
{% include clause_start.html type="req" id="elinkaari/vaat-tonttijakosuunnitelmatunnus-maar" %}
Tonttijakosuunnitelmatunnus on tonttijakosuunnitelmalle ennakolta haettava, tonttijakosuunnitelman kansallisesti yksilöivä tunnus. Tonttijakosuunnitelman tietomallissa tonttijakosuunnitelmatunnus kuvataan [Tonttijakosuunnitelma](../../looginenmalli/dokumentaatio/#tonttijakosuunnitelma)-luokan attribuutilla ```tonttijakosuunnitelmaTunnus```.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-tonttijakosuunnitelmatunnus-gen" %}
Tuottava tietojärjestelmän vastaa tonttijakosuunnitelmatunnuksen asettamisesta [Tonttijakosuunnitelma](../../looginenmalli/dokumentaatio/#tonttijakosuunnitelma)-luokan attribuutiksi. Se tulee olla asetettuna myös tonttijakosuunnitelman  ensimmäisen tonttijakosuunnitelmatietovarantoon tallennuksen yhteydessä.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-tonttijakosuunnitelmatunnus-yks" %}
Tonttijakosuunnitelmatunnus on [Tonttijakosuunnitelma](../../looginenmalli/dokumentaatio/#tonttijakosuunnitelma)-luokan objekteille globaalisti yksilöivä, eikä muutu saman tonttijakosuunnitelman eri elinkaaren aikaisten versioiden tallennuksen yhteydessä.
{% include clause_end.html %}

Käytännössä myönnetyt tonttijakosuunnitelmatunnukset kannattaa tallentaa valmiiksi tonttijakosuunnitelmatietovarantoon, jotta voidaan tarkistaa, onko tallennettavaksi tarkoitettu tonttijakosuunnitelmatunnus myönnetty organisaatiolle, jonka tonttijakosuunnitelmaa ollaan tallentamassa. Kuntakoodin tai muun hallinnollisen alueen tunnuksen käyttö osana tonttijakosuunnitelmatunnusta ei ole suositeltavaa, sillä hallinnolliset alueet muuttuvat ajan kuluessa. Kun sidos tunnuksen ja hallinnollisen alueen välillä ei näy tunnuksessa, voidaan tonttijakosuunnitelman hallinnollista aluetta muuttaa joustavammin tonttijakosuunnitelman elinkaaren aikana.

{% include clause_start.html type="rec" id="elinkaari/suos-tonttijakosuunnitelmatunnus-form" %}
Tonttijakosuunnitelmatunnuksen suositeltu muoto on UUID.
{% include clause_end.html %}

Esimerkki: ```df5b2d6f-d6d6-4695-938c-dd7c4c784c28```

### Pysyvien tunnusten palauttaminen tuottavalle järjestelmälle

Versionhallinnan näkökulmasta on tärkeää, että tonttijakosuunnitelman tuottava tietojärjestelmä käyttää saman tonttijakosuunnitelman seuraavan version tallentamisessa tonttijakosuunnitelman ensimmäisen version tallennuksen yhteydessä luotua identiteettitunnusta. Vastaavasti kaikkien tonttijakosuunnitelman tietokohteiden osalta käytetään niiden ensimmäisen tallennuksen yhteydessä luotuja identiteettitunnuksia, mikäli objektin katsotaan kuvaavan ko. tietokohteen uutta versiota.

{% include clause_start.html type="req" id="elinkaari/vaat-tunnusten-palautus" %}
Tietovarannon tallennusrajapinta palauttaa tallennetun tonttijakosuunnitelman tiedot tuottavalle tietojärjestelmälle tallennusoperaation yhteydessä siten, että ne sisältävät yllä mainittujen tunnustenhallintasääntöjen mukaisesti mahdollisesti generoidut tai muokatut identiteettitunnukset, paikalliset tunnukset, nimiavaruudet ja viittaustunnukset kaikille tallennetuille tietokohteille.
{% include clause_end.html %}

### Tonttijakosuunnitelman tietokohteisiin viittaaminen ja viitteiden ylläpito

{% include clause_start.html type="req" id="vaat-tonttijakosuunnitelman-sisaiset-viittaukset" %}
Saman tonttijakosuunnitelman tietokohteiden keskinäiset assosiaatiot toteutetaan viitattavan tietokohteen [paikallinenTunnus](#paikallinen-tunnus)-attribuuttia käyttäen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-tietovarannon-sisaiset-viittaukset" %}
Tonttijakosuunitelmatietokohteen luokkien assosiaatiot eri tonttijakosuunnitelmien välillä tai tonttijakosuunnitelman ja muiden maankäyttöpäätösten tietokohteiden välillä toteutetaan viitattavan tietokohteen [viittaustunnus](#viittaustunnus)-attribuuttia käyttäen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-viittaukset-ulkoa" %}
Pysyvät viittaukset Tonttijakosuunnitelman tietomallin ulkopuolelta tietomallin tietokohteisiin toteutetaan viitattavan tietokohteen [viittaustunnus](#viittaustunnus)-attribuuttia käyttäen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-viittaukset-tallennettaessa" %}
Tallennettaessa Tonttijakosuunnitelman tietomallin tietokohteita tonttijakosuunnitelmatietovarantoon tietokohteiden tunnukset muuttuvat niiden pysyvään muotoon, kuten kuvattu luvussa [Tunnukset ja niiden hallinta](#tunnukset-ja-niiden-hallinta). Tonttijakosuunnitelmatietovarannon vastuulla on päivittää kunkin paikallisen tunnuksen muuttamisen yhteydessä myös kaikkien ko. tietokohteen versioon sen paikallisen tunnuksen avulla viittaavien muiden ko. tonttijakosuunnitelman tietokohteiden viittaukset käyttämään tietokohteen muutettua paikallista tunnusta.   
{% include clause_end.html %}

### Koodistojen koodien tunnuksiin liittyvät vaatimukset

{% include clause_start.html type="req" id="elinkaari/vaat-koodien-yksiloivat-tunnukset" %}
Kullakin koodiston koodilla on oltava pysyvä tunnus, joka sellaisenaan yksilöi kyseisen koodin globaalisti ilman erilistä tietoa koodistosta, johon koodi kuuluu. Koodin tunnus on HTTP URI -muotoinen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-alakoodi-maar" %}
Olkoon koodi ```A``` mikä tahansa hierarkkisen koodiston sisältämä koodi. Koodin ```A``` alakoodilla tarkoitetaan koodia, joka on hierakkiassa sijoitettu koodin ```A``` alle. Koodi voi olla useamman ylemmän tason koodin alakoodi vain mikäli ko. ylemmän tason koodit ovat alakoodisuhteessa keskenään.
{% include clause_end.html %}

Käytännössä tietyn koodin alakoodit voidaan tunnistaa vertaamalla niiden tunnuksia:

{% include clause_start.html type="req" id="elinkaari/vaat-alakoodi-tunnus" %}
Koodin ```A``` alakoodin ```B``` tunnus alkaa koodin ```A``` tunnuksella ja sisältää sen jälkeen yhden tai useamman merkin.
{% include clause_end.html %}

## Muutokset ja tietojen versionti
{% include clause_start.html type="req" id="elinkaari/vaat-pysyva-sisalto" %}
Kukin tonttijakosuunnitelman tai sen kohteiden tallennusoperaatio yhteiseen tietovarantoon muodostaa uuden version tallennettavista tietokohteista, mikäli yksittäinen tietokohde on miltään osin muuttunut verrattuna sen edelliseen versioon. Myös muutokset muissa Tonttijakosuunnitelman tietomallin tietokohteissa, joihin tietokohteesta on viittaus, lasketaan tietokohteen muutoksiksi. Tallennetun tietokohteen version sisältö ei voi muuttua tallennuksen jälkeen, poislukien sen voimassaolon päättymiseen, seuraavaan versioon linkittämiseen ja elinkaaritilaan liittyvät attribuutit, joita tonttijakosuunnitelmatietovaranto itse päivittää tietyissä tilanteissa.
{% include clause_end.html %}

Näin taataan ulkoisten viittausten eheys, sillä tonttijakosuunnitelman kaikkien kohteiden paikalliset ja viittaustunnukset viittaavat aina vain tietyn, sisällöllisesti muuttumattomaan versioon viittatusta kohteesta. Suositeltavaa on, että kaikki tallennusversiot myös pidetään pysyvästi tallessa, jotta mahdolliset keskenäiset ja ulkopuolelta tulevat linkit eivät mene rikki muutosten yhteydessä.

### Muutosten leviäminen viittausten kautta
Tonttijakosuunnitelman tietomallin tietokohteiden keskinäiset viittaukset kohdistuvat aina viitattavien tietokohteiden tiettyyn versioon, ja toisaalta kaikki kohteiden sisällölliset muutokset johtavat uusien versioiden tallentamiseen. Siten kohteiden välisten linkkien kohdetietoa täytyy muuttaa mikäli halutaan viitata jollain tapaa muuttuneeseen kohteeseen. Tämä päivitystarve johtaa edelleen myös viittaavan tietokohteen uuden version luomiseen, vaikka ainoa muuttunut tieto olisi linkki uuteen versioon viitatusta tietokohteesta. Molempiin suuntiin tietokohteiden välillä tehty linkitys saattaa siten johtaa hyvin laajalle leviävään muutosketjuun.

Tonttijakosuunnitelman tietomallissa kukin Esitonttikohde on linkitetty kahdensuuntaisesti tonttijakosuunnitelmaan ja kukin Kaavamääräys yhdensuuntaisesti esitonttikohteisiin, joiden alueita ne koskevat. Tällöin uuden kaavamääräyksen luominen johtaa uuden version luomiseen siihen linkitetyistä esitonttikohteista, ja edelleen niihin linkitetystä tonttijakosuunnitelma-objektista, mikä puolestaan johtaa lopulta uusien versioiden luomiseen kaikista ko. tonttijakosuunnitelman muistakin esitonttikohteista, koska tonttijakosuunnitelma-objektiin päin osoittavat linkit pitää muuttaa osoittamaan sen uuteen versioon. 

**Esimerkki**:

Tallennuspalveluun viedään tonttijakosuunnitelma, jonka yhteen esitonttikohteeseen liittyvää kaavamääräystä **asuinpientaloalue** on muutettu kaavaprosessissa **erillispientaloalueeksi**. Kaikki tonttijakosuunnitelman muut tietokohteet ovat identtisiä tonttijakosuunnitelman edellisen tallennusversion kanssa.

- Esitonttikohteesta, johon muuttunut kaavamääräys kohdistuu, luodaan uusi versio, jossa muuttuu vain linkki, viitaten nyt uuteen kaavamääräykseen.

### Yksittäisen tonttijakosuunnitelman elinkaaren vaiheisiin liittyvät muutokset
Tonttijakosuunnitelman tietomalli mahdollistaa tunnistettavien tonttijakosuunnitelman tietokohteiden eri kehitysversioiden erottamisen toisistaan. Kullakin tietomallin kohteella on sekä sen tosimaailman identiteettiin liittyvä ns. identiteettitunnus että yksittäisen tallennusversion tunnus (paikallinen tunnus). Tallennettaessa uutta versiota samasta tonttijakosuunnitelmasta tai sen sisältämästä tietokohteesta, sen identiteettitunnus pysyy ennallaan, mutta sen paikallinen tunnus muuttuu. Tallennettaessa Tonttijakosuunnitelma-luokan objektia se katsotaan saman tietokohteen uudeksi versioksi, mikäli sen tonttijakosuunnitelmatunnus on sama. Muiden tonttijakosuunnitelman tietomallin versioitavien objektien suhteen samuuden määritteleminen on tietoja tuottavien järjestelmien vastuulla: mikäli objektilla on tallennettavaksi lähetettäessä saman ```identititeettiTunnus```-attribuutin arvo kuin aiemmin tallennetulla, samantyyppisellä tietokohteella, katsotaan uusi objekti on saman tietokohteen uudeksi versioksi.

{% include clause_start.html type="req" id="elinkaari/vaat-version-korvaus" %}
Kun tonttijakosuunnitelman tietokohteesta tallennetaan uusi muuttunut versio, tulee tietokohteen edellisen version ```korvattuObjektilla```-assosiaatio asettaa viittaamaan tietokohteen uuteen versioon. Uuden tietokohteen version ```korvaaObjektin```-assosiaatio puolestaan asetetaan viittaamaan tietokohteen edelliseen, korvattavaan versioon. Molempien kohteiden ```tallennusAika```-attribuutin arvoksi asetetaan ajanhetki, jolloin tallennus ja muutos  tonttijakosuunnitelmatietovarantoon on tehty.
{% include clause_end.html %}

Yksittäisen tietokohteen yksityiskohtainen muutoshistoria tonttijakosuunnitelmatietovarannossa saadaan seuraamalla sen ```korvattuObjektilla```- ja ```korvaaObjektin```-assosiaatioita. Ainoa muutos, joka ei näy tietokohteen omana versionaan, on kohteen kumoaminen, jolloin sen viimeisimmän version tietoja päivitetään sen elinkaaritilan, voimassaolon ja tallennusajan osalta.

{% include question.html content="Pitääkö [AbstraktiVersioituObjekti](dokumentaatio/#abstraktiversioituobjekti)-luokalle lisätä attribuutti ```ensimmainenTallennusAika```, joka kertoo ko. version alkuperäisen tallennusajan? Kumoamisen yhteydessä ```tallennusAika```-attribuutin arvoa muutetaan, jolloin hukkuu tieto ko. version alkuperäisestä tallennusajankohdasta." %}

Attribuutin ```viimeisinMuutos``` arvo kuvaa ajanhetkeä, jolloin ko. tietokohteeseen on tehty sisällöllinen muutos tiedontuottajan tietojärjestelmässä. Tiedontuottajan järjestelmän osalta ei vaadita tiukkaa versiointipolitiikkaa, eli ```paikallinenTunnus```-attribuutin päivittämistä jokaisen tietokohteen muutoksen johdosta. ```viimeisinMuutos```-attribuutin päivittämien riittää kuvaamaan tiedon todellisen muuttumisajankohdan.

### Tonttijakosuunnitelman käsittely- ja vuorovaikutustapahtumien elinkaari
Tonttijakosuunnitelmaprosessin historian yhdessä kuvaavat AbstraktiTapahtuma-luokasta perityt Kasittelytapahtuma- ja Vuorovaikutustapahtuma-luokan tietokohteet linkitetään yksisuuntaisesti AbstraktiMaankayttoasia-luokkaan (Tonttijakosuunnitelma-luokan yläluokka) päin. Tapahtumatietokohteiden uusina versiona tallennettavat muutokset eivät koskaan johda uuden version luomiseen Tonttijakosuunnitelma-luokan tietokohteesta tai sen esitonttikohteista. Syy tähän on se, että käsittely- ja vuorovaikutustapahtumien on tärkeää kohdistua nimenomaan tiettyyn, pysyvään versioon tonttijakosuunnitelmasta.

Tietyllä ajanhetkellä nähtävillä olevat tai nähtävillä olleet tonttijakosuunnitelman versiot voidaan poimia valitsemalla ne tonttijakosuunnitelmat, joihin kohdistuu Vuorovaikutustapahtuma, jonka laji-attribuutin arvo on Nähtävilläolo, tapahtumaAika-attribuuttin aikaväli kattaa halutun ajankohdan ja peruttu-attribuutin arvo on false. Näiden vuorovaikutustapahtumien liittyvaAsia-assosiaatio viittaa siihen AbstraktiMaankayttoasia-luokan instanssiin, joka ko. aikaan on nähtävillä. Katso tonttijakosuunnitelmaehdotuksen nähtävilläolon ilmoittamiseen liittyvät vaatimukset kohdasta Tonttijakosuunniteman elinkaaritilan muutoksiin liittyvät käsittely- ja vuorovaikutustapahtumat.

{% include clause_start.html type="req" id="elinkaari/vaat-tapahtumien-poistaminen" %}
Kerran tallennettuja AbstraktiTapahtuma-luokan tietokohteita ei voi poistaa tonttijakosuunnitelmatietovarannosta. Mikäli suunniteltu vuorovaikutustapahtuma ei syystä tai toisesta toteudu tai käsittelytapahtumaan liittyvä päätös kumotaan, tulee sen attribuutti peruttu asettaa arvoon true.
{% include clause_end.html %}

{% include question.html content="Miten käsittelytapahtumat vaikuttavat versiointiin ja sen muutosketjuun?" %}

{% include question.html content="Miten tonttijakosuunnitelman eri elinkaarikoodit vaikuttavat käsittelytapahtumiin?" %}

### Tonttijakosuunnitelman ja sen tietokohteiden voimaantulo
Tonttijakosuunnitelman ```voimassaoloAika``` -attribuutin alkuaika on ajanhetki, jolloin tonttijakosuunnitelma sen nähtävilläoloajan umpeuduttua ja mahdollisten mielipiteiden käsittelyn jälkeen tulee voimaan.

{% include clause_start.html type="req" id="vaat-tonttijakosuunnitelman-voimaantulo" %}
Voimaantulemisen yhteydessä tonttijakosuunnitelmasta tallennetaan tonttijakosuunnitelmatietovarantoon uusi versio, jossa sen:
- Tonttijakosuunnitelma-luokan objektin elinkaaritila-attribuutin arvoksi on asetettu Voimassa,
- Tonttijakosuunnitelma-luokan objektin voimassaoloAika-attribuutin alkuajaksi on asetettu kuulutuksen ajanhetki ja loppuaikaa ei ole annettu.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-voimassaoloaika" %}
Tonttijakosuunnitelma ja sen esitonttikohteet ovat voimassa niiden voimassaoloAika-attribuuttien määräämillä aikaväleillä. Mikäli voimassaoloAika-attribuutin loppuaika puuttuu, on tietokohde voimassa toistaiseksi.
{% include clause_end.html %}

{% include clause_start.html type="req" id="vaat-elinkaaritila-voimassaoloaika" %}
Tonttijakosuunnitelma ja sen esitonttikohteet voivat olla elinkaaritilassa Voimassa ainoastaan, mikäli niiden voimassaoloAika on annettu ja sisältää vain alkuajan ilman loppuaikaa. Tonttijakosuunnitelman ja sen esitonttikohteiden voimassaoloAika voi olla annettu vain mikäli ne ovat joko elinkaaritilassa Voimassa tai Kumottu. Tonttijakosuunnitelman ja sen esitonttikohteiden voimassaoloAika sisältää sekä alku- että loppuajan vain, kun ne ovat elinkaaritilassa Kumottu.
{% include clause_end.html %}

## Tonttijakosuunnitelman kumoutuminen ja kumoaminen 

Maankäyttö- ja rakennuslain pykälässä XX säädetään tonttijakosuunnitelman kumoutumisesta ja kumoamisesta.

Voimassaoleva tonttijakosuunnitelma voi kumoutua uudella tonttijakosuunnitelmalla osittain tai kokonaan.  Tonttijakosuunnitelma voidaan kumota, jos alueelta kumotaan kokonaan tai osittain se asemakaava, jonka toteuttamiseksi tonttijakosuunnitelma on tehty, kumoutuu myös tonttijakosuunnitelma kyseisen alueen osalta.

<!-- Lisää tähän vielä sisäiset linkit kuntoon -->
{% include clause_start.html type="req" id="elinkaari/vaat-kumoutumistieto-per-tonttijakosuunnitelma" %}
Tonttijakosuunnitelmilla kumoutuvat, aiemmin hyväksyttyjen tonttijakosuunnitelmien esitonttikohteet tulee yksilöidä kumoutuvassa tonttijakosuunnitelmassa. Kutakin tonttijakosuunnitelmaa kohti tulee antaa yksi Tonttijakosuunnitelma-luokan attribuutin kumoamistieto arvo tyyppiä TonttijakosuunnitelmanKumoamistieto, jonka kumottavanTonttijakosuunnitelmanTunnus-attribuutin arvo on kumottavan tonttijakosuunnitelman ```viittaustunnus```.
{% include clause_end.html %}

<!-- Lisää tähän vielä sisäiset linkit kuntoon -->
{% include clause_start.html type="req" id="elinkaari/vaat-kumoutuva-esitonttikohteen-tunnus" %}
Kumoutumisessa esitonttikohteet kuvataan ensisijaisesti kumoattavanEsitonttikohteenTunnus-attribuutin arvojen avulla. Attribuutin arvo on kumottavan Esitonttikohde-luokan tietokohteen ```viittaustunnus```.
{% include clause_end.html %}

<!-- Lisää tähän vielä sisäiset linkit kuntoon -->
{% include clause_start.html type="req" id="elinkaari/vaat-tonttijakosuunnitelman-voimaantulo" %}
Kun tonttijakosuunnitelman kumoutumisessa tallennetaan versio, jonka elinkaaritila-attribuutin arvo on Voimassa, tonttijakosuunnitelmatietovaranto päivittää niiden siinä kumoutuviksi asetettuja esitonttikohteita, joiden elinkaaritila-attribuutin arvo on Voimassa, attribuutteja seuraavasti luomatta niistä uusia versioita:

- ```voimassaoloAika```-attribuutin päättymisaika asetetaan samaksi kuin uuden tonttijakosuuunnitelman ```voimassaoloAika```-attribuutin alkamisaika.
- ```elinkaaritila```-attribuutin arvoksi asetetaan Kumottu.
- ```tallennusAika```-attribuutin arvoksi asetetaan ajanhetki, jolloin tonttijakosuunnitelma tallennettiin tonttijakosuunnitelmatietovarantoon elinkaaritilassa Voimassa.
{% include clause_end.html %}

Tonttijakosuunnitelman tietomalli ei sisällä omaa tietorakennettaan ajantasaiselle tonttijakosuunnitelma-aineistolle, joka sisältää annetun alueella tietyllä ajanhetkellä voimassaolevat esitonttikohteet, huomioiden kaavamuutosten ja vaihekaavojen vaikutukset niiltä osin kun ne ovat ko. ajanhetkellä voimassa. Tällainen toiminnallisuus on kuitenkin aivan ilmeisesti yhteisen tonttijakosuunnitelmatietovarannon palveluna erittäin hyödyllinen. Esitonttikohteiden ```voimassaoloAika```-attribuutin arvojen avulla tällainen ajantasainen “Esitonttimatto” voidaan laskea mille tahansa ajanhetkelle, olettaen, että kaikki kyseisen alueen tonttijakosuunnitelmat on viety tonttijakosuunnitelmatietovarantoon tonttijakosuunnitelman tietomallin mukaisessa muodossa.

### Asemakaavan suhde esitonttikohteeseen

<!-- Lisää sisäiset linkit-->
Voimassaolevan tonttijakosuunnitelman esitonttikohde voi saada uuden version tai kumoutua kokonaan kaavamuutoksen tai vaiheasemakaavan voimaan tullessa esitonttikohteen alueella. 

{% include clause_start.html type="req" id="elinkaari/vaat-kaavatunnus" %}
Esitonttikohteille tulee yksilöidä tonttijakosuunnitelmassa siihen liittyvät asemakaavat. Kutakin  esitonttikohdetta kohti tulee antaa yksi Esitonttikohde-luokan attribuutin ```kaavasuhdetieto``` arvo tyyppiä KaavaSuhdetieto, jonka ```kaavaTunnus```-attribuutin arvo on Kaava-luokan ```viittaustunnus```.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-kaavalaji-vaikutus" %}
Jos asemakaavan muutos tai vaiheasemakaava hyväksytään esitonttikohteen alueella, tulee esitonttikohteesta luoda uusi tallennusversio ja KaavaSuhdetieto-luokan ```kaavalaji```-attribuutin arvoksi asetetaan hyväksytyn kaavan kaavalaji-koodi.

Asemakaavan määräysten muuttuessa asetetaan kaavatietomallin uuden Kaavamaarays-luokan viittaustunnus tonttijakosuunnitelman tietomallin Kaavamaarays-luokan ```liittyvanKaavamääräyksenTunnus```-attribuutin arvoksi. Lisäksi Kaavamaarays-luokan viittaustunnus tallennetaan esitonttikohteen uudelle tallennusversiolle.
Asemakaavan määräysten tullessa voimaan tonttijakosuunnitelman laatijan tulee tulkita tonttijakosuunnitelman kaavan mukaisuus. Jos tonttijakosuunnitelma ei ole kaavan mukainen, tulee tonttijakosuunnitelman sisältämät ei kaavan mukaiset esitonttikohteet asettaa rakennuskieltoon. Kaavakohteen rajojen muutos  asettaa esitonttikohteen aina rakennuskieltoon:

- ```rakennuskielto```-attribuutin arvoksi asetetaan true.

Rakennuskiellon asettaminen true arvoksi edellyttää aina uuden tonttijakosuunnitelman laatimista niiltä osin, mitä esitonttikohteita rakennuskielto koskee.
{% include clause_end.html %}

{% include note.html content="Kaavan kaavalaji-koodia ei ole toistaiseksi olemassa." %}

{% include clause_start.html type="req" id="elinkaari/vaat-kumoaa-esitonttikohteen" %}
Jos asemakaavan muutos koskee uutta yleistä aluetta ja asemakaavan rajojen muutosta esitonttikohteen alueella, kumoaa asemakaava esitonttikohteen. Esitonttikohteesta ei luoda uutta versiota:

- ```rakennuskielto```-attribuutin arvoksi asetetaan true.
- ```elinkaarentila```-attribuutin arvoksi asetetaan kumoutunut.
- ```voimassaoloAika```-attribuutin päättymisaika asetetaan samaksi kuin kaavan voimassaoloAika-attribuutin alkamisaika.

Tämä edellyttää uuden tonttijakosuunnitelman laatimista kumotun esitonttikohteen alueelle.
{% include clause_end.html %}

### Tonttijakosuunnitelman elinkaaren vaiheet ja elinkaaritila-attribuutin käyttötavat

Tonttijakosuunnitelman ja sen sisältämien esitonttikohteiden elinkaareen liittyvää tilaa hallitaan ko. tietokohteiden elinkaaritila-attribuutin ja sen mahdolliset arvot kuvaavan Elinkaaren tila-koodiston avulla. Tonttijakosuunnitelma- ja  Esitonttikohde-luokkien elinkaaritila-attribuutit ovat pakollisia.

**Elinkaaren tila**-koodisto kuvaa 9 mahdollista tilaa, joissa tonttijakosuunnitelma voi olla sen elinkaaren eri vaiheissa:

- Vireillä
- Luonnos
- Ehdotus
- Hyväksytty
- Voimassa
- Kumottu osittain
- Kumottu kokonaan
- Kumoutunut osittain
- Kumoutunut kokonaan

{% include question.html content="Mitkä ovat Kumottu- ja Kumoutunut-tilojen tarkat määritelmät ja erot?" %}

Tonttijakosuunnitelmien, joiden elinkaaritila on Vireillä, Luonnos, Ehdotus, Hyväksytty laadinta- ja päätösprosessi on kesken, eli niiden esitonttikohteet eivät (vielä) ole lainvoimaisia. Tonttijakosuunnitelma, jotka ovat elinkaaritilassa Voimassa,  Kumottu osittain tai Kumoutunut osttain, sisältävät nykyajanhetkellä rajaamallaan alueella voimassa olevia esitonttikohteita. Koodit Kumottu kokonaan ja Kumoutunut kokonaan kuvaavat tonttijakosuunnitelman tiloja, joissa olevan tonttijakosuunnitelman elinkaari on päättynyt.

### Sallitut tonttijakosuunnitelman elinkaaren tilan muutokset

Tonttijakosuunnitelman elinkaaritila voi sen laadinta-, päätös-, valitus-, voimassaolo- ja kumoutumisvaiheidensa esiintyä ja muuttua vain tässä luvussa kuvatuilla tavoilla.

{% include clause_start.html type="req" id="elinkaari/vaat-ensimmainen-elinkaaritila" %}
Tonttijakosuunnitelman elinkaaritila tallennettaessa tonttijakosuunnitelmaa ensimmäistä kertaa tonttijakosuunnitelmatietovarantoon voi olla jokin seuraavista riippuen Tonttijakosuunnitelman ```digitaalinenAlkupera```-attribuutin arvosta:

- **Tietomallin mukaan laadittu**: tilat Vireillä, Luonnos, Ehdotus, Hyväksytty, Voimassa tonttijakosuunnitelma.
- **Kokonaan digitoitu**, **Osittain digitoitu** tai **Tonttijakosuunnitelman rajaus digitoitu**: tilat Voimassa, Kumottu osittain, Kumottu, Kumoutunut osittain, Kumoutunut
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-elinkaaritila-siirtymat" %}
Tonttijakosuunnitelman ```elinkaaritila```-attribuutin arvo voi kahden sen peräkkäisen tallennusversion välillä vain seuraavilla tavoilla:

- Tilasta ```Vireillä``` tilaan ```Ehdotus```, ```Hyväksytty```.
- Tilasta ```Hyväksytty``` tilaan ```Voimassa```, ```Kumottu osittain```, ```Kumottu kokonaan```, ```Kumoutunut osittain``` tai ```Kumoutunut kokonaan```.
- Tilasta ```Voimassa``` tilaan ```Kumottu osittain```, ```Kumottu kokonaan```, ```Kumoutunut osittain``` tai ```Kumoutunut kokonaan```.
- Tilasta ```Kumottu``` ei ole sallittuja siirtymiä.
- Tilasta ```Kumoutunut``` ei ole sallittuja siirtymiä.
{% include clause_end.html %}

### Esitonttikohteen elinkaaren tila

Tavallisesti tonttijakosuunnitelman sisältämien esitonttikohteiden elinkaaritilan arvo on sama kuin koko tonttijakosuunnitelmalla, mutta ne voivat erota toisistaan kahdessa tapauksessa:

- Tonttijakosuunnitelman Kumottu osittain tai Kumoutunut osittain tapauksessa osa esitonttikohteista voidaan kumota
- Kaavamuutoksen tai vaihekaavan voimaantulo aiheuttaa siinä kumottaviksi esitonttikohteita

 (ks. Tonttijakosuunnitelman kumoutuminen ja kumoaminen)

### Tonttijakosuunnitelman elinkaaritilan muutoksiin liittyvät käsittely- ja vuorovaikutustapahtumat

 Kun tonttijakosuunnitelmasta viedään tonttijakosuunnitelmatietovarantoon uusi versio, jossa sen elinkaaritila on muuttunut, liittyy kyseisen tonttijakosuunniteman version syntymiseen tyypillisesti jokin käsittelytapahtuma.

{% include clause_start.html type="req" id="elinkaari/vaat-elinkaaritilan-muutostapahtumat" %}
Tonttijakosuunnitelman ```elinkaaritila```-attribuutin arvon seuraaviin muutoksiin tulee aina liittyä **Kasittelytapahtuma**, jonka ```laji```-attribuutin arvo tulee olla elinkaarimuutosta vastaava:

- Muutos tilaan **Vireillä**: Liityttävä käsittelytapahtuman laji Tonttijakosuunnitelman virelletulo
- Muutos tilaan **Hyväksytty**: Liityttävä joko käsittelytapahtuman laji Tonttijakosuunnitelman hyväksyminen.
- Muutos tilaan **Voimassa**: Liityttävä käsittelytapahtuman laji Tonttijakosuunnitelman voimaantulo.
{% include clause_end.html %}

Yllä luetellut käsittelytapahtumat tulee tallentaa samaan aikaan elinkaaritilaltaan muuttuneen tonttijakosuunnitelman kanssa.

{% include clause_start.html type="req" id="elinkaari/vaat-ehdotuksen-nahtavilleasettaminen" %}
Tonttijakosuunnitelman ```elinkaaritila```-attribuutin arvon muuttuminen arvosta Ehdotus arvoon Hyväksytty vaatii, että tonttijakosuunnitelmatietovarannossa on sekä Kasittelytapahtuma lajia Ehdotuksen nähtäville asettaminen että Vuorovaikutustapahtuma lajia Nähtävilläolo, joista molemmat viittaavat johonkin ko. tonttijakosuunnitelman aiemmista Ehdotus-tilassa olevista versioista assosiaatiolla ```liittyvaAsia```. Vuorovaikutustapahtuman attribuutin ```tapahtumaAika``` tulee kuvata aikaväli, jonka aikana tonttijakosuunnitelman ehdotus on ollut nähtävillä.
{% include clause_end.html %}

{% include clause_start.html type="rec" id="elinkaari/suos-nahtavillaolopaikka" %}
Mikäli tonttijakosuunnitelman ehdotus on nähtävillä tietyssä fyysisessä paikassa, on suositeltavaa ilmaista kyseisen paikan sijainti Vuorovaikutustapahtuma-luokan attribuutin ```sijainti```-attribuutin avulla.
{% include clause_end.html %}

Huomaa, että muutos tilaan Kumottu osittain, Kumottu kokonaan, Kumoutunut osittain,  Kumoutunut kokonaan voi liittyvä joko käsittelytapahtuman lajiin Tonttijakosuunnitelman kumoaminen tai kaavan kumoamiseen kaavamuutokseen tai vaihekaavan lainvoimaiseksi tulon yhteydessä.