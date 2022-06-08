---
layout: "default"
title: "Sitovan tonttijaon - looginen tietomalli - Elinkaarisäännöt"
description: ""
id: "elinkaarisaannot"
status: "Keskeneräinen"
---
{% include common/important.html content="Sisältö ei vielä ajantasalla UML-kaavion kanssa" %}

# Elinkaarisäännöt
{:.no_toc}

1. 
{:toc}

## Johdanto

Sitovalla tonttijaolla on tietomallissa elinkaari, joka määrää sen sisältämien tietokohteiden: 

- Syntytavan
- Sen, voivatko ne muuttua
- Miten ne voivat muuttua
- Miten ne kumoutuvat johtaen niiden voimassaolon päättymiseen

Elinkaarisääntöjen määrittely liittyy olennaisesti tietokohteiden versionhallintaan, eli miten yksittäisten tietokohteiden niiden elinkaaren aikana muodostettavat versiot voidaan tallentaa ja yksilöidä viittauskelpoisten pysyvien tunnusten avulla. 

Tässä annetut säännöt pohjautuvat paikkatietokohteiden yksilöivien tunnusten ja elinkaarisääntöjen periaatteisiin, jotka on kuvattu jukishallinnon suosituksessa [JHS 193 - Paikkatiedon yksilöivät tunnukset](http://www.jhs-suositukset.fi/suomi/jhs193).

### HTTP URI -tunnukset

HTTP URI -muotoiset tunnukset ovat [RFC 3986 -standardiin](https://tools.ietf.org/html/rfc3986) perustuvia HTTP(S) -protokollan mukaisia URI-osoitteita (Uniform Resource Identifier), joiden globaali yksilöivyys varmistetaan Internetin DNS-nimipalveluun rekisteröityjen domain-nimien avulla. Kullakin DNS-palveluun rekisteröidyllä domain-nimellä (esim. ```uri.suomi.fi```) on yksiselitteinen omistaja, joka on suoraan tai välillisesti vastuussa ko. domain-nimen alla julkaistavasta sisällöstä. Nimen omistaja on myös ainoa taho, joka voi päättää ko. domain-nimeä käyttävien osoitteiden ohjautumisesta haluttuihin resursseihin, mikä tekee siitä luontevan perustan yksilöivien tunnusten nimiavaruuksille (esim. <http://uri.suomi.fi/object/rytj/kaava>). HTTP URI -muotoisen tunnuksen yksilöivyys perustuu siis domain-nimien ja siten niihin perustuvien nimiavaruuksien keskitettyyn hallintaprosessiin.

URI-tunnuksen ei tarvitse viitata konkreettiseen sijaintiin internetissä, vaan se voi olla abstraktimpi tunnus. [JHS 193 Paikkatiedon yksilöivät tunnukset](http://www.jhs-suositukset.fi/suomi/jhs193) määrittelee paikkatiedon yksilöiville tunnuksille muodon <http://paikkatiedot.fi/{tunnustyyppi}/{aineistotunnus}/{paikallinen tunnus}>, jossa paikkatietokohteiden ```tunnustyyppi``` on ```so```. Sitovan tonttijaon tietomallissa on esimerkkinä käytetty tunnusmuotoa 
<http://uri.suomi.fi/object/rytj/{aineistotyyppi}/{TietotyypinNimi}/{paikallinenTunnus}>. HTTP URI -muotoisen tunnuksen etuna on luettavuus sekä DNS- ja HTTP-protokollien tarjoama kyky ratkaista (resolve) tunnus ja ohjata kysyjä sitä kuvaavaan Internet-resurssiin ilman tarvetta erityiselle keskitetylle tunnusrekisterille ja siihen perustuvalle ratkaisupalvelulle.

Sitovan tonttijaon tietomallissa HTTP URI -muotoa käytetään [viittaustunnus](#viittaustunnus)-attribuutissa, jonka avulla viitataan tiettyyn versioon tietokohteesta kaavan ulkopuolelta.

### UUID-tunnukset
UUID (Universally Unique Identifier) on OSF:n (Open Software Foundation) määrittelemä standardoitu tunnusmuoto, jonka avulla voidaan luoda vakiokokoisia, hyvin suurella todennäköisyydellä yksilöiviä tunnuksia ilman keskitettyä hallintajärjestelmää. UUID-tunnukset voivat perustua satunnaislukuihin, aikaleimoihin, tietokoneiden verkkokorttien MAC-osoitteisiin tai merkkijonomuotoisiin nimiavaruuksiin eri yhdistelmissä. UUID-tunnukset erityisen hyvin tietojärjestelmissä, joissa uusia globaalisti pysyviä ja yksilöiviä tunnuksia on tarpeen luoda hajautetusti ilman keskitettyä tunnusrekisteriä.

Sitovan tonttijaon tietomallissa UUID-muotoisia tunnuksia suositellaan käytettäväksi [identiteettitunnus-](#identiteettitunnus), Sitova tonttijako- ja tuottajakohtainen tunnus-attribuuttien arvoina.

## Sitovan tonttijaon tietomallin kohteiden elinkaaren hallinnan periaatteet

Sitovan tonttijaon tietomallin elinkaarisäännöt mahdollistavat tietomallin tietokohteiden käsittelyn, tallentamisen ja muuttamisen hallitusti sekä niiden laatimis- että voimassaolovaiheissa. Sitovan tonttijaon tietomallin mukaiset tietosisällöt ovat merkittäviä oikeusvaikutuksia aiheuttavia, juridisesti päteviä aineistoja, joita käsitellään hajautetusti eri toimijoiden tietojärjestelmissä. Tämän vuoksi niiden tunnusten, viittausten ja versionnin hallintaan on syytä kiinnittää erityistä huomiota.

Seuraavat keskeiset periaatteet ohjaavat sitovan tonttijaon elinkaaren hallintaa:
* Kukin sitovan tonttijaon tietovarastoon tallennettu versio sitovasta tonttijaosta ja sen sisältämistä yksittäisistä esitonttikohteista saa pysyvän, versiokohtaisen tunnuksen.
* Kuhunkin sitovan tonttijaon tietovarastoon tallennetun tietokohteen versioon voidaan viitata sen pysyvän tunnuksen avulla.
* Sitovan tonttijaon tietomallin tietokohteiden väliset viittaukset toteutetaan hallitusti sekä tonttijakosuunnitelmatietoa tuottavissa tietojärjestelmissä että yhteisissä sitovan tonttijaon tietovarannoissa.
* Sitovan tonttijaon tietovarasto vastaa pysyvien tunnusten luomisesta ja antamisesta tallennettaville tietokohteille.

Sitovan tonttijaon tietomallin mukaisten aineistojen tallentamisessa erotetaan toisistaan tietojen tuottaminen ja muokkaus sisäisesti niiden tuottamiseen ja muokkaamiseen käytettävissä tietojärjestelmissä ja niiden hallinta yhteisessä versiohallitussa sitovan tonttijaon tietovarannossa. Sitovan tonttijaon tietomallin ei ole mielekästä asettaa vaatimuksia sitovan tonttijaon tietoa tuottavien tietojärjestelmien tunnusten ja versioiden hallintaan, vaan tietomallissa tulee varautua siihen, että yhteiseen tietovarastoon tallennettavia tietoja on muokattu ja tallennettu sisäisesti tuntematon määrä kertoja ennen ensimmäistä viemistä yhteiseen tietovarastoon, ja samoin tuntematon määrä kertoja kunkin yhteiseen varastoon vietävän version välillä. Näin ollen on mahdollista, että sitovasta tonttijaosta voi olla joissain tietojärjestelmissä tallennettuna paikallisia versiota, joita ei ole koskaan viety yhteiseen sitovan tonttijaon tietovarastoon.

## Tunnukset ja niiden hallinta

### Identiteettitunnus
Identiteettitunnus yhdistää saman tunnistettavan sitovan tonttijaon tietokohteen kehitysversiot toisiinsa.

{% include common/clause_start.html type="req" id="elinkaari/vaat-identiteettitunnus-maar" %}
Sitovan tonttijaon tietomallin tietokohteissa identiteettitunnus kuvataan attribuutilla ```identiteettiTunnus```. Kahdella sitovan tonttijaon versioitavalla objektilla voi olla sama ```identiteettiTunnus```-attribuutin arvo ainoastaan, mikäli kaikki seuraavista ehdoista ovat tosia:

* Molemmat objektit kuvaavat saman sitovan tonttijaon tai sen sisältämän, nimettävissä olevan tietokohteen kehityskaaren eri tiloja.
* Molemmat objektit liittyvät samaan sitovaan tonttijakoon.
* Molemmat objektit ovat saman loogisen tietomallin luokan edustajia.
{% include common/clause_end.html %}

Yksittäisen sitovan tonttijaon tietokohteen koko ko. tietojärjestelmään tallennettu kehityshistoria saadaan noutamalla kaikki ko. tyyppisen tietokohteen objektit, joilla on sama ```identiteettiTunnus```-attribuutin arvo.

Yhteinen sitovan tonttijaon tietovarasto on vastuussa uusien identiteettitunnusten luomisesta tarvittaessa tallennustapahtumien yhteydessä, ja niiden välittämisestä tiedoksi tallentavalle tietojärjestelmälle. Tallentavan tietojärjestelmän tulee tallentaa itselleen kopiot tietovaraston tallennustapahtuman yhteydessä palautamistä kaavan ja sen tietokohteiden identiteettitunnuksista, sillä ne tulee sisällyttää ko. tietokohteiden seuraavien versioden tallennettavaksi lähetettäviin objekteihin.

{% include common/clause_start.html type="req" id="elinkaari/vaat-identiteettitunnus-gen" %}
* Mikäli tallennettavalle tietokohteelle ei ole annettu ```identiteettitunnus```-attribuuttia, tai tietovarasto ei sisällä sellaista saman luokan tietokohdetta, jolla on sama ```identiteettiTunnus```-attribuutin arvo, sitovan tonttijaon tietovarasto luo ko. objektille uuden identiteettitunnuksen, joka korvaa tuottavan tietojärjestelmän objektille mahdollisesti antaman ```identiteettiTunnus```-attribuutin arvon. Tällöin objektia pidetään uuden tietokohteen ensimmäisenä versiona.
* Mikäli tietovarasto sisältää saman luokan tietokohteen, jolla on sama ```identiteettiTunnus```-attribuutin arvo kuin tallennetavalla objektilla, objekti tallennetaan sitovan tonttijaon tietovarastoon ko. tietokohteen uutena versiona. Tällöin tallennettavan objektin ```identiteettiTunnus```-attribuutin arvo ei muutu.
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-kaavan-identiteettitunnus" %}
[SitovaTonttijako](../../looginenmalli/dokumentaatio/#tonttijakosuunnitelma)-luokan tietokohteen tallennuksen yhteydessä sitovan tonttijaon tietovarasto tarkistaa, että sen attribuutti ```sitovanTonttijaonTunnus``` on annettu ja validi.
* Mikäli kohde katsotaan sen ```identiteettiTunnus```-attribuutin arvon perusteella uudeksi tietokohteeksi, sama ```sitovanTonttijaonTunnus```-attribuutti ei saa olla käytössä muilla [SitovaTonttijako](../../looginenmalli/dokumentaatio/#tonttijakosuunnitelma)-luokan objekteilla.
* Mikäli kohde katsotaan sen ```identiteettiTunnus```-attribuutin arvon perusteella aiemmin tallennetun tietokohteen uudeksi versioksi, aiemmin tallennetun version ```sitovanTonttijaonTunnus```-attribuutin tulee olla sama kuin tallennettavassa objektissa.
{% include common/clause_end.html %}

{% include common/clause_start.html type="rec" id="elinkaari/suos-identiteettitunnus-form" %}
Identiteettitunnuksen suositeltu muoto on UUID.
{% include common/clause_end.html %}

Esimerkki: ```640bff6b-c16a-4947-af8d-d86f89106be1```

### Paikallinen tunnus
Paikallinen tunnus yksilöi tietokohteen yhden version sitovan tonttijaon tietovaraston sisällä. 

{% include common/clause_start.html type="req" id="elinkaari/vaat-paikallinentunnus-maar" %}
Sitovan tonttijaon tietomallin tietokohteissa paikallinen tunnus kuvataan attribuutilla ```paikallinenTunnus```. Kaikilla saman sitovan tonttijaon tietovarannon objekteilla (ml. saman tietokohteen eri versiot) tulee olla eri ```paikallinenTunnus```-attribuutin arvo.
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-paikallinentunnus-gen" %}
Tietokohteiden paikallinen tunnus muuttuu sen jokaisen version tallennuksen yhteydessä. Sitovan tonttijaon tietovarasto vastaa paikallisten tunnusten luomisesta tallennustapahtuman yhteydessä. Tuottavan tietojärjestelmän mahdollisesti asettamat arvot korvataan..
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-paikallinentunnus-form" %}
Paikallinen tunnus koostuu identiteettitunnuksesta ja siihen erotinmerkillä liitetystä versiokohtaisesta, esimerkiksi tarkkaan tallennusajanhetkeen perustuvasta merkkijonosta.
{% include common/clause_end.html %}

{% include common/clause_start.html type="rec" id="elinkaari/suos-paikallinentunnus-merk" %}
Paikallisen tunnuksen muodostamisessa tulee välttää merkkejä, jotka joudutaan URL-koodaamaan rajapintapalvelujen kutsuissa. Paikkatietokohteen paikallista tunnusta käytetään fyysisten tietomallien pääavaimena, esim. GeoJSON Feature ```id```-omaisuuden ja GML:n ```gml:id```-attribuutin arvona, ja siten esimerkiksi OGC Web Feature Service (WFS) - ja OGC API - Features -rajapintapalvelujen paikkatietokohteen yksilöivissä kyselyissä.
{% include common/clause_end.html %}

Tallennusajanhetkeen päättyvää paikallista tunnusta voidaan käyttää ilman sekaannusmahdollisuuksia samalla logiikalla myös paikallisissa versionneissa, eli sellaisissa sitovan tonttijaon versioiden tallennuksissa, joita ei viedä lainkaan Sitovan tonttijaon tietovarastoon.

Esimerkki:```640bff6b-c16a-4947-af8d-d86f89106be1.b05cf48d46d8c905c54522f44b0a12daff11604e```

{% include common/note.html content="Käyttämällä paikallisena tunnuksena pelkkää identiteettitunnuksesta riippumatonta UUID-tunnusta päästäisiin lyhyempiin tunnuksiin, mutta menetetään yhteys identiteettitunnusten ja paikallisten tunnusten välillä, mikä saattaa hankaloittaa erilaisten vikatilanteiden selvitystä ja toimintavarmuuden testaamista, kun pelkkien tunnusten perusteella ei voida päätellä ovatko kaksi objektia saman tietokohteen eri versioita." %}

### Nimiavaruus
{% include common/clause_start.html type="req" id="elinkaari/vaat-nimiavaruus-maar" %}
Nimiavaruus määrää sitovan tonttijaon tietomallin kaikkien tietokohteiden viittaustunnusten alkuosan yhden sitovan tonttijaon tietovarannon sisällä. Sitovan tonttijaon tietomallin tietokohteissa paikallinen tunnus kuvataan attribuutilla ```nimiavaruus```.
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-nimiavaruus-form" %}
Nimiavaruus on HTTP URI -muotoinen.
{% include common/clause_end.html %}

Nimiavaruus on syytä valita huolella siten, että se olisi mahdollisimman pysyvä, eikä sitä tarvitsisi tulevaisuudessa muuttaa esimerkiksi valtionhallinnon virastojen tai ministeriröiden mahdollisten uudelleenorganisointien ja -nimeämisten johdosta. Valittu URL-osoite tulee myös voida aina tarvittaessa ohjata kulloinkin käytössä olevaan rajapintapalveluun (HTTP redirect). 

{% include common/clause_start.html type="req" id="elinkaari/vaat-nimiavaruus-gen" %}
Tonttijakosuunnitelmatietovarasto vastaa ```nimiavaruus```-attribuuttien asetamisesta tallennustapahtuman yhteydessä. Tuottavan tietojärjestelmän mahdollisesti antamat arvot korvataan.
{% include common/clause_end.html %}

Esimerkki: ```http://uri.suomi.fi/object/rytj/tjs```

### Viittaustunnus
{% include common/clause_start.html type="req" id="elinkaari/vaat-viittaustunnus-maar" %}
Viittaustunnus yksilöi sitovan tonttijaon tietokohteen yhden, keskitettyyn sitovan tonttijaon tietovarastoon tallennetun kehitysversion globaalisti. Sitovan tonttijaon tietomallin tietokohteissa paikallinen tunnus kuvataan attribuutilla ```viittausTunnus```.
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-viittaustunnus-form" %}
Viittaustunnus on HTTP URI -muotoinen ja se muodostuu nimiavaruudesta, tietokohteen luokan nimestä ja paikallisesta tunnuksesta yhdessä kauttaviivoilla (```/```) erotettuina.
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-nimiavaruus-gen" %}
Sitovan tonttijaon tietovarasto vastaa ```viittausTunnus```-attribuuttien asetamisesta tallennustapahtuman yhteydessä. Tuottavan tietojärjestelmän mahdollisesti antamat arvot korvataan.
{% include common/clause_end.html %}

Tallentavan tietojärjestelmän ei siis tarvitse tallentaa luotuja viittaustunnuksia itselleen seuraavia tallennuksia varten.

{% include common/clause_start.html type="rec" id="elinkaari/suos-viittaustunnus-ohj" %}
Viittaustunnuksen on suositeltavaa ohjautua aina ko. tietokohteen version tietosisältöön kulloinkin toiminnassa olevassa sitovan tonttijaon tietovarannon latauspalvelussa.
{% include common/clause_end.html %}

Esimerkki: ```http://uri.suomi.fi/object/rytj/tjs/sitovatonttijako/640bff6b-c16a-4947-af8d-d86f89106be1.b05cf48d46d8c905c54522f44b0a12daff11604e```

### Tuottajakohtainen tunnus

{% include common/clause_start.html type="req" id="elinkaari/vaat-tuottajakohtainen-tunnus-maar" %}
Sitovan tonttijaon tietoa tuottavat järjestelmät voivat niin halutessaan käyttää tuottajakohtaista tunnusta niiden omien tietojärjestelmäspesifisten tunnusten antamiseen sitovan tonttijaon tietomallin tietokohteille. Sitovan tonttijaon tietomallin tietokohteissa tuottajakohtainen tunnus kuvataan attribuutilla ```tuottajakohtainenTunnus```.
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-tuottajakohtainen-tunnus-gen" %}
Sitovan tonttijaon tietovarasto ei koskaan muuta tuottavan tietojärjestelmän mahdollisesti asettamia tuottajakohtaisia tunnuksia, ja ne palautetaan sellaisenaan latattaessa tietokohteita tietovarannosta.
{% include common/clause_end.html %}

Tietojärjestelmät voivat käyttää tuottajakohtaisia tunnuksia kohdistamaan sitovan tonttijaon tietovarastoon ja paikallisiin tietojärjestelmiin tallennettuja tietokohteita toisiinsa esimerkiksi päivitettäessä niiden tallennuksen yhteydessä syntyneitä tunnuksia, vertailtaessa sitovan tonttijaon tietovarastoon tallennettuja kohteita ja paikallisia kohteita toisiinsa, sekä esitettäessä validointipalvelun tuloksia suunnitteluohjelmiston käyttäjälle.

Tuottajakohtaisilta tunnuksilta ei vaadita yksilöivyyttä tai mitään tiettyä yhtenäistä muotoa, mutta UUID-muodon käyttäminen tarjoaa hyvin määritellyn ja standardoidun tavan luoda tuottajakohtaisista tunnuksista yksilöiviä eri tietojärjestelmien kesken. Tästä saattaa olla etua haluttaessa tehdä tuotettavista sitovan tonttijaon tiedoista mahdollisimman järjestelmäriippumattomia ja esimerkiksi taata tuottajakohtaisten tunnusten yksilöivyys yli mahdollisten sitovan tonttijaon tietoa tuottavien tietojärjestelmien vaihdosten ja päivitysten.


{% include common/clause_start.html type="rec" id="elinkaari/suos-tuottajakohtainen-tunnus-form" %}
Tuottajakohtaisen tunnuksen suositeltu muoto on UUID.
{% include common/clause_end.html %}

Esimerkki: ```tj-123445```

### Sitovan tonttijaon tunnus
{% include common/clause_start.html type="req" id="elinkaari/vaat-sitovan-tonttijaon-tunnus-maar" %}
Sitovan tonttijaon tunnus on sitovalle tonttijaolle ennakolta haettava, tonttijakosuunnitelman kansallisesti yksilöivä tunnus. Sitovan tonttijaon tietomallissa sitovan tonttijaon tunnus kuvataan [SitovaTonttijako](../../looginenmalli/dokumentaatio/#sitovatonttijako)-luokan attribuutilla ```sitovanTonttijaonTunnus```.
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-sitovan-tonttijaontunnus-gen" %}
Tuottava tietojärjestelmän vastaa tonttijakosuunnitelmatunnuksen asettamisesta [SitovaTonttijako](../../looginenmalli/dokumentaatio/#sitovatonttijako)-luokan attribuutiksi. Se tulee olla asetettuna myös sitovan tonttijaon ensimmäisen sitovan tonttijaon tietovarastoon tallennuksen yhteydessä.
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-sitovan-tonttijaon-tunnus-yks" %}
Sitovan tonttijaon tunnus on [SitovaTonttijako](../../looginenmalli/dokumentaatio/#tonttijakosuunnitelma)-luokan objekteille globaalisti yksilöivä, eikä muutu saman sitovan tonttijaon eri elinkaaren aikaisten versioiden tallennuksen yhteydessä.
{% include common/clause_end.html %}

Käytännössä myönnetyt sitovan tonttijaon tunnukset kannattaa tallentaa valmiiksi sitovan tonttijaon tietovarastoon, jotta voidaan tarkistaa, onko tallennettavaksi tarkoitettu sitovan tonttijaon tunnus myönnetty organisaatiolle, jonka sitovaa tonttijakoa ollaan tallentamassa. Kuntakoodin tai muun hallinnollisen alueen tunnuksen käyttö osana sitovan tonttijaon tunnusta ei ole suositeltavaa, sillä hallinnolliset alueet muuttuvat ajan kuluessa. Kun sidos tunnuksen ja hallinnollisen alueen välillä ei näy tunnuksessa, voidaan tonttijakosuunnitelman hallinnollista aluetta muuttaa joustavammin sitovan tonttijaon elinkaaren aikana.

{% include common/clause_start.html type="rec" id="elinkaari/suos-sitovan-tonttijaon-tunnus-form" %}
Sitovan tonttijaon tunnuksen suositeltu muoto on UUID.
{% include common/clause_end.html %}

Esimerkki: ```df5b2d6f-d6d6-4695-938c-dd7c4c784c28```

### Pysyvien tunnusten palauttaminen tuottavalle järjestelmälle

Versionhallinnan näkökulmasta on tärkeää, että sitovia tonttijakoja tuottava tietojärjestelmä käyttää saman sitovan tonttijaon seuraavan version tallentamisessa sitovan tonttijaon ensimmäisen version tallennuksen yhteydessä luotua identiteettitunnusta. Vastaavasti kaikkien sitovan tonttijaon tietokohteiden osalta käytetään niiden ensimmäisen tallennuksen yhteydessä luotuja identiteettitunnuksia, mikäli objektin katsotaan kuvaavan ko. tietokohteen uutta versiota.

{% include common/clause_start.html type="req" id="elinkaari/vaat-tunnusten-palautus" %}
Tietovaraston tallennusrajapinta palauttaa tallennetun sitovan tonttijaon tiedot tuottavalle tietojärjestelmälle tallennusoperaation yhteydessä siten, että ne sisältävät yllä mainittujen tunnustenhallintasääntöjen mukaisesti mahdollisesti generoidut tai muokatut identiteettitunnukset, paikalliset tunnukset, nimiavaruudet ja viittaustunnukset kaikille tallennetuille tietokohteille.
{% include common/clause_end.html %}

### Sitovan tonttijaon tietokohteisiin viittaaminen ja viitteiden ylläpito

{% include common/clause_start.html type="req" id="vaat-sitovan-tonttijaon-sisaiset-viittaukset" %}
Saman tonttijakosuunnitelman tietokohteiden keskinäiset assosiaatiot toteutetaan viitattavan tietokohteen [paikallinenTunnus](#paikallinen-tunnus)-attribuuttia käyttäen.
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-tietovaraston-sisaiset-viittaukset" %}
Tonttijakosuunitelmatietokohteen luokkien assosiaatiot eri tonttijakosuunnitelmien välillä tai tonttijakosuunnitelman ja muiden maankäyttöpäätösten tietokohteiden välillä toteutetaan viitattavan tietokohteen [viittaustunnus](#viittaustunnus)-attribuuttia käyttäen.
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-viittaukset-ulkoa" %}
Pysyvät viittaukset Tonttijakosuunnitelman tietomallin ulkopuolelta tietomallin tietokohteisiin toteutetaan viitattavan tietokohteen [viittaustunnus](#viittaustunnus)-attribuuttia käyttäen.
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-viittaukset-tallennettaessa" %}
Tallennettaessa Tonttijakosuunnitelman tietomallin tietokohteita tonttijakosuunnitelmatietovarastoon tietokohteiden tunnukset muuttuvat niiden pysyvään muotoon, kuten kuvattu luvussa [Tunnukset ja niiden hallinta](#tunnukset-ja-niiden-hallinta). Tonttijakosuunnitelmatietovaraston vastuulla on päivittää kunkin paikallisen tunnuksen muuttamisen yhteydessä myös kaikkien ko. tietokohteen versioon sen paikallisen tunnuksen avulla viittaavien muiden ko. tonttijakosuunnitelman tietokohteiden viittaukset käyttämään tietokohteen muutettua paikallista tunnusta.   
{% include common/clause_end.html %}

### Koodistojen koodien tunnuksiin liittyvät vaatimukset

{% include common/clause_start.html type="req" id="elinkaari/vaat-koodien-yksiloivat-tunnukset" %}
Kullakin koodiston koodilla on oltava pysyvä tunnus, joka sellaisenaan yksilöi kyseisen koodin globaalisti ilman erilistä tietoa koodistosta, johon koodi kuuluu. Koodin tunnus on HTTP URI -muotoinen.
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-alakoodi-maar" %}
Olkoon koodi ```A``` mikä tahansa hierarkkisen koodiston sisältämä koodi. Koodin ```A``` alakoodilla tarkoitetaan koodia, joka on hierakkiassa sijoitettu koodin ```A``` alle. Koodi voi olla useamman ylemmän tason koodin alakoodi vain mikäli ko. ylemmän tason koodit ovat alakoodisuhteessa keskenään.
{% include common/clause_end.html %}

Käytännössä tietyn koodin alakoodit voidaan tunnistaa vertaamalla niiden tunnuksia:

{% include common/clause_start.html type="req" id="elinkaari/vaat-alakoodi-tunnus" %}
Koodin ```A``` alakoodin ```B``` tunnus alkaa koodin ```A``` tunnuksella ja sisältää sen jälkeen yhden tai useamman merkin.
{% include common/clause_end.html %}

## Muutokset ja tietojen versionti
{% include common/clause_start.html type="req" id="elinkaari/vaat-pysyva-sisalto" %}
Kukin sitovan tonttijaon tai sen kohteiden tallennusoperaatio yhteiseen tietovarastoon muodostaa uuden version tallennettavista tietokohteista, mikäli yksittäinen tietokohde on miltään osin muuttunut verrattuna sen edelliseen versioon. Myös muutokset muissa sitovan tonttijaon tietomallin tietokohteissa, joihin tietokohteesta on viittaus, lasketaan tietokohteen muutoksiksi. Tallennetun tietokohteen version sisältö ei voi muuttua tallennuksen jälkeen, poislukien sen voimassaolon päättymiseen, seuraavaan versioon linkittämiseen ja elinkaaritilaan liittyvät attribuutit, joita sitovan tonttijaon tietovarasto itse päivittää tietyissä tilanteissa.
{% include common/clause_end.html %}

Näin taataan ulkoisten viittausten eheys, sillä sitovan tonttijaon kaikkien kohteiden paikalliset ja viittaustunnukset viittaavat aina vain tietyn, sisällöllisesti muuttumattomaan versioon viittatusta kohteesta. Suositeltavaa on, että kaikki tallennusversiot myös pidetään pysyvästi tallessa, jotta mahdolliset keskenäiset ja ulkopuolelta tulevat linkit eivät mene rikki muutosten yhteydessä.

### Muutosten leviäminen viittausten kautta
Sitovan tonttijaon tietomallin tietokohteiden keskinäiset viittaukset kohdistuvat aina viitattavien tietokohteiden tiettyyn versioon, ja toisaalta kaikki kohteiden sisällölliset muutokset johtavat uusien versioiden tallentamiseen. Siten kohteiden välisten linkkien kohdetietoa täytyy muuttaa mikäli halutaan viitata jollain tapaa muuttuneeseen kohteeseen. Tämä päivitystarve johtaa edelleen myös viittaavan tietokohteen uuden version luomiseen, vaikka ainoa muuttunut tieto olisi linkki uuteen versioon viitatusta tietokohteesta. Molempiin suuntiin tietokohteiden välillä tehty linkitys saattaa siten johtaa hyvin laajalle leviävään muutosketjuun.

Sitovan tonttijaon tietomallissa kukin Esitonttikohde on linkitetty kahdensuuntaisesti sitovaan tonttijakoon ja kukin Kaavamääräys yhdensuuntaisesti tonttijakotontteihin, joiden alueita ne koskevat. Tällöin uuden kaavamääräyksen luominen johtaa uuden version luomiseen siihen linkitetyistä esitonttikohteista, ja edelleen niihin linkitetystä sitovan tonttijaon-objektista, mikä puolestaan johtaa lopulta uusien versioiden luomiseen kaikista ko. sitovan tonttijaon muistakin tonttijakotonteista, koska sitovan tonttijaon-objektiin päin osoittavat linkit pitää muuttaa osoittamaan sen uuteen versioon. 

**Esimerkki**:

Tallennuspalveluun viedään sitova tonttijako, jonka yhteen tonttijakotonttiin liittyvää kaavamääräystä **asuinpientaloalue** on muutettu kaavaprosessissa **erillispientaloalueeksi**. Kaikki sitovan tonttijaon muut tietokohteet ovat identtisiä sitovan tonttijaon edellisen tallennusversion kanssa.

- Esitonttikohteesta, johon muuttunut kaavamääräys kohdistuu, luodaan uusi versio, jossa muuttuu vain linkki, viitaten nyt uuteen kaavamääräykseen.

### Yksittäisen sitovan tonttijaon elinkaaren vaiheisiin liittyvät muutokset
Sitovan tonttijaon tietomalli mahdollistaa tunnistettavien sitovan tonttijaon tietokohteiden eri kehitysversioiden erottamisen toisistaan. Kullakin tietomallin kohteella on sekä sen tosimaailman identiteettiin liittyvä ns. identiteettitunnus että yksittäisen tallennusversion tunnus (paikallinen tunnus). Tallennettaessa uutta versiota samasta sitovasta tonttijaosta tai sen sisältämästä tietokohteesta, sen identiteettitunnus pysyy ennallaan, mutta sen paikallinen tunnus muuttuu. Tallennettaessa SitovaTonttijako-luokan objektia se katsotaan saman tietokohteen uudeksi versioksi, mikäli sen sitovan tonttijaon tunnus on sama. Muiden sitovan tonttijaon tietomallin versioitavien objektien suhteen samuuden määritteleminen on tietoja tuottavien järjestelmien vastuulla: mikäli objektilla on tallennettavaksi lähetettäessä saman ```identititeettiTunnus```-attribuutin arvo kuin aiemmin tallennetulla, samantyyppisellä tietokohteella, katsotaan uusi objekti on saman tietokohteen uudeksi versioksi.

{% include common/clause_start.html type="req" id="elinkaari/vaat-version-korvaus" %}
Kun sitovan tonttijaon tietokohteesta tallennetaan uusi muuttunut versio, tulee tietokohteen edellisen version ```korvattuObjektilla```-assosiaatio asettaa viittaamaan tietokohteen uuteen versioon. Uuden tietokohteen version ```korvaaObjektin```-assosiaatio puolestaan asetetaan viittaamaan tietokohteen edelliseen, korvattavaan versioon. Molempien kohteiden ```tallennusAika```-attribuutin arvoksi asetetaan ajanhetki, jolloin tallennus ja muutos sitovan tonttijaon tietovarastoon on tehty.
{% include common/clause_end.html %}

Yksittäisen tietokohteen yksityiskohtainen muutoshistoria sitovan tonttijaon tietovarastossa saadaan seuraamalla sen ```korvattuObjektilla```- ja ```korvaaObjektin```-assosiaatioita. Ainoa muutos, joka ei näy tietokohteen omana versionaan, on kohteen kumoaminen, jolloin sen viimeisimmän version tietoja päivitetään sen elinkaaritilan, voimassaolon ja tallennusajan osalta.

{% include common/question.html content="Pitääkö [VersioituObjekti](dokumentaatio/#abstraktiversioituobjekti)-luokalle lisätä attribuutti ```ensimmainenTallennusAika```, joka kertoo ko. version alkuperäisen tallennusajan? Kumoamisen yhteydessä ```tallennusAika```-attribuutin arvoa muutetaan, jolloin hukkuu tieto ko. version alkuperäisestä tallennusajankohdasta." %}

Attribuutin ```viimeisinMuutos``` arvo kuvaa ajanhetkeä, jolloin ko. tietokohteeseen on tehty sisällöllinen muutos tiedontuottajan tietojärjestelmässä. Tiedontuottajan järjestelmän osalta ei vaadita tiukkaa versiointipolitiikkaa, eli ```paikallinenTunnus```-attribuutin päivittämistä jokaisen tietokohteen muutoksen johdosta. ```viimeisinMuutos```-attribuutin päivittämien riittää kuvaamaan tiedon todellisen muuttumisajankohdan.

### Sitovan tonttijaon käsittely- ja vuorovaikutustapahtumien elinkaari
Sitovan tonttijaon prosessin historian yhdessä kuvaavat Tapahtuma-luokasta perityt Kasittelytapahtuma- ja Vuorovaikutustapahtuma-luokan tietokohteet linkitetään yksisuuntaisesti AlueidenkäyttöJaRakentamisAsia-luokkaan (SitovaTonttijako-luokan yläluokka) päin. Tapahtumatietokohteiden uusina versiona tallennettavat muutokset eivät koskaan johda uuden version luomiseen SitovaTonttijako-luokan tietokohteesta tai sen esitonttikohteista. Syy tähän on se, että käsittely- ja vuorovaikutustapahtumien on tärkeää kohdistua nimenomaan tiettyyn, pysyvään versioon sitovasta tonttijaosta.

Tietyllä ajanhetkellä nähtävillä olevat tai nähtävillä olleet sitovan tonttijaon versiot voidaan poimia valitsemalla ne sitovat tonttijaot, joihin kohdistuu Vuorovaikutustapahtuma, jonka laji-attribuutin arvo on Nähtävilläolo, tapahtumaAika-attribuuttin aikaväli kattaa halutun ajankohdan ja peruttu-attribuutin arvo on false. Näiden vuorovaikutustapahtumien liittyvaAsia-assosiaatio viittaa siihen AlueidenkäyttöJaRakentamisAsia-luokan instanssiin, joka ko. aikaan on nähtävillä. Katso sitovan tonttijaon ehdotuksen nähtävilläolon ilmoittamiseen liittyvät vaatimukset kohdasta sitovan tonttijaon elinkaaritilan muutoksiin liittyvät käsittely- ja vuorovaikutustapahtumat.

{% include common/clause_start.html type="req" id="elinkaari/vaat-tapahtumien-poistaminen" %}
Kerran tallennettuja Tapahtuma-luokan tietokohteita ei voi poistaa sitovan tonttijaon tietovarastosta. Mikäli suunniteltu vuorovaikutustapahtuma ei syystä tai toisesta toteudu tai käsittelytapahtumaan liittyvä päätös kumotaan, tulee sen attribuutti peruttu asettaa arvoon true.
{% include common/clause_end.html %}

{% include common/question.html content="Miten käsittelytapahtumat vaikuttavat versiointiin ja sen muutosketjuun?" %}

{% include common/question.html content="Miten tonttijakosuunnitelman eri elinkaarikoodit vaikuttavat käsittelytapahtumiin?" %}

### Sitovan tonttijaon ja sen tietokohteiden voimaantulo
Sitovan tonttijaon ```voimassaoloAika``` -attribuutin alkuaika on ajanhetki, jolloin sitova tonttijako sen nähtävilläoloajan umpeuduttua ja mahdollisten mielipiteiden käsittelyn jälkeen tulee voimaan.

{% include common/clause_start.html type="req" id="vaat-tonttijakosuunnitelman-voimaantulo" %}
Voimaantulemisen yhteydessä sitovasta tonttijaosta tallennetaan sitovan tonttijaon tietovarastoon uusi versio, jossa sen:
- SitovaTonttijako-luokan objektin elinkaaritila-attribuutin arvoksi on asetettu Voimassa,
- SitovaTonttijako-luokan objektin voimassaoloAika-attribuutin alkuajaksi on asetettu kuulutuksen ajanhetki ja loppuaikaa ei ole annettu.
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-voimassaoloaika" %}
Sitova tonttijako ja sen esitonttikohteet ovat voimassa niiden voimassaoloAika-attribuuttien määräämillä aikaväleillä. Mikäli voimassaoloAika-attribuutin loppuaika puuttuu, on tietokohde voimassa toistaiseksi.
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="vaat-elinkaaritila-voimassaoloaika" %}
Sitova tonttijako ja sen tonttijakotontit voivat olla elinkaaritilassa Voimassa ainoastaan, mikäli niiden voimassaoloAika on annettu ja sisältää vain alkuajan ilman loppuaikaa. Sitovon tonttijaon ja sen tonttijakotonttien voimassaoloAika voi olla annettu vain mikäli ne ovat joko elinkaaritilassa Voimassa tai Kumottu. Sitovan tonttijaon ja sen tonttijakotonttien voimassaoloAika sisältää sekä alku- että loppuajan vain, kun ne ovat elinkaaritilassa Kumottu.
{% include common/clause_end.html %}

### Sitovan tonttijaon kumoutuminen ja kumoaminen 

Maankäyttö- ja rakennuslaissa säädetään sitovan tonttijaon kumoutumisesta ja kumoamisesta.

Voimassaoleva sitova tonttijako voi kumoutua uudella sitovalla tonttijaolla osittain tai kokonaan.  Sitova tonttijako voidaan kumota, jos alueelta kumotaan kokonaan tai osittain se asemakaava, jonka toteuttamiseksi sitova tonttijako on tehty, kumoutuu myös sitova tonttijako kyseisen alueen osalta.

<!-- Lisää tähän vielä sisäiset linkit kuntoon -->
{% include common/clause_start.html type="req" id="elinkaari/vaat-kumoutumistieto-per-sitova-tonttijako" %}
Sitova tonttijaoilla kumoutuvat, aiemmin hyväksyttyjen sitovien tonttijakojen tonttijakotontit tulee yksilöidä kumoutuvassa sitovassa tonttijaossa. Kutakin sitovaa tonttijakoa kohti tulee antaa yksi SitovaTonttijako-luokan attribuutin kumoamistieto arvo tyyppiä SitovanTonttijaonKumoamistieto, jonka kumottavanSitovanTonttijaonTunnus-attribuutin arvo on kumottavan sitovan tonttijaon ```viittaustunnus```.
{% include common/clause_end.html %}

<!-- Lisää tähän vielä sisäiset linkit kuntoon -->
{% include common/clause_start.html type="req" id="elinkaari/vaat-kumoutuva-esitonttikohteen-tunnus" %}
Kumoutumisessa tonttijakotontit kuvataan ensisijaisesti kumoattavanTonttijakotontinTunnus-attribuutin arvojen avulla. Attribuutin arvo on kumottavan Tonttijakotontti-luokan tietokohteen ```viittaustunnus```.
{% include common/clause_end.html %}

<!-- Lisää tähän vielä sisäiset linkit kuntoon -->
{% include common/clause_start.html type="req" id="elinkaari/vaat-tonttijakosuunnitelman-voimaantulo" %}
Kun sitovan tonttijaon kumoutumisessa tallennetaan versio, jonka elinkaaritila-attribuutin arvo on Voimassa, itovan tonttijaon tietovarasto päivittää niiden siinä kumoutuviksi asetettuja tonttijakotontteja, joiden elinkaaritila-attribuutin arvo on Voimassa, attribuutteja seuraavasti luomatta niistä uusia versioita:

- ```voimassaoloAika```-attribuutin päättymisaika asetetaan samaksi kuin uuden sitovan tonttijaon ```voimassaoloAika```-attribuutin alkamisaika.
- ```elinkaaritila```-attribuutin arvoksi asetetaan Kumottu.
- ```tallennusAika```-attribuutin arvoksi asetetaan ajanhetki, jolloin sitova tonttijako tallennettiin sitovan tonttijaon tietovarastoon elinkaaritilassa Voimassa.
{% include common/clause_end.html %}

Sitovan tonttijaon tietomalli ei sisällä omaa tietorakennettaan ajantasaiselle sitova tonttijako-aineistolle, joka sisältää annetun alueella tietyllä ajanhetkellä voimassaolevat tonttijakotontit, huomioiden kaavamuutosten ja vaihekaavojen vaikutukset niiltä osin kun ne ovat ko. ajanhetkellä voimassa. Tällainen toiminnallisuus on kuitenkin aivan ilmeisesti yhteisen sitovan tonttijaon tietovaraston palveluna erittäin hyödyllinen. Tonttijakotonttien ```voimassaoloAika```-attribuutin arvojen avulla tällainen ajantasainen “Tonttijakotonttimatto” voidaan laskea mille tahansa ajanhetkelle, olettaen, että kaikki kyseisen alueen sitovat tonttijaot on viety sitovan tonttijaon tietovarastoon sitovan tonttijaon tietomallin mukaisessa muodossa.

### Asemakaavan suhde tonttijakotonttiin

<!-- Lisää sisäiset linkit-->
Voimassaolevan sitovan tonttijaon tonttijakotontit voi saada uuden version tai kumoutua kokonaan kaavamuutoksen tai vaiheasemakaavan voimaan tullessa tonttijakotontin alueella.

{% include common/clause_start.html type="req" id="elinkaari/vaat-kaavatunnus" %}
Tonttijakotonteille tulee yksilöidä sitovassa tonttijaossa siihen liittyvät hyväksytyt asemakaavat. Kutakin tonttijakotonttia kohti tulee antaa yksi [Tonttijakotontti-luokan](https://www.tonttijakosuunnitelma.fi/1.0-dev/looginenmalli/dokumentaatio/#tonttijakotontti) attribuutin ```kaavayksikönMuutostieto``` arvo tyyppiä KaavayksikönMuutostieto, jonka ```kaavaTunnus```-attribuutin arvo on [Kaava-luokan](https://kaavatietomalli.fi/1.0/looginenmalli/dokumentaatio/#kaava) ```viittaustunnus```.
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-kaavayksikön-muutostieto-vaikutus" %}
Asemakaavan muutoksen tai vaiheasemakaavan hyväksyminen tonttijakotontin alueella, edellyttää uuden tallennusversion luomista tonttijakotontista ja [KaavayksikönMuutostieto-datatyypin](https://www.tonttijakosuunnitelma.fi/1.0-dev/looginenmalli/dokumentaatio/#kaavansuhdetieto) ```muutoslaji```-attribuutin arvoksi tulee asettaa hyväksytyn kaavan KaavayksikönMuutosLaji-koodi.

Asemakaavan määräysten muuttuessa asetetaan kaavatietomallin uuden [Kaavamaarays-luokan](https://kaavatietomalli.fi/1.0/looginenmalli/dokumentaatio/#kaavamaarays) viittaustunnus sitovan tonttijaon tietomallin [Tonttijakotontti-luokan](https://www.tonttijakosuunnitelma.fi/1.0-dev/looginenmalli/dokumentaatio/#kaavamaarays) ```toteuttavaKaavamääräys```-attribuutin arvoksi uudelle tallennusversiolle. <!-- Tällöin esitonttikohteen versiolla voi olla voimassa olevan asemakaavan ja luonnosvaiheessa olevan asemakaavan määräyksiä. Kun asemakaava tulee voimaan, tallennetaan esitonttikohteesta uusi tallennusversio, jolla vain uudet asemakaavan määräykset.-->

Asemakaavan määräysten muuttuessa tulee tulkita sitovan tonttijaon kaavan mukaisuus. Tämä voidaan selvittää kaavatietomallin [Kaavayksikkö]-luokan ```kaavayksikönMuutos```-attribuutilta. Jos sitova tonttijako ei ole asemakaavan mukainen, tulee sitovan tonttijaon sisältämät ei kaavan mukaiset tonttijakotontit asettaa rakennuskieltoon, kun asemakaava hyväksytään. Kaavakohteen rajojen muutos  asettaa tonttijakotontin aina rakennuskieltoon:

- ```rakennuskielto```-attribuutin arvoksi asetetaan true.

Rakennuskiellon asettaminen true arvoksi edellyttää aina uuden sitovan tonttijaon laatimista niiltä osin, mitä tonttijakotontteja rakennuskielto koskee.
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-kumoaa-tonttijakotontin" %}
Jos asemakaavalla tonttijakotontin rajat muuttuvat kokonaan tai osittain yleiseksi alueeksi, kumoaa asemakaava tonttijakotontin. Näin tonttijakotontti muuttuu ei-kortteliksi, ja kumoaminen sitovalla tonttijaolla ei olisi mahdollista. [KaavayksikönMuutostieto-luokan](https://www.tonttijakosuunnitelma.fi/1.0-dev/looginenmalli/dokumentaatio/#kaavansuhdetieto) kumoaaTonttijakotontin-attribuutin arvoksi asetetaan true. Tonttijakotontista ei luoda uutta versiota, vaan:

- ```elinkaarentila```-attribuutin arvoksi asetetaan **kumoutunut**.
- ```voimassaoloAika```-attribuutin päättymisaika asetetaan samaksi kuin kaavan ```voimassaoloAika```-attribuutin alkamisaika.

Tämä edellyttää uuden sitovan tonttijaon laatimista kumotun tonttijakotontin alueelle.
{% include common/clause_end.html %}

## Sitovan tonttijaon elinkaaren vaiheet ja elinkaaritila-attribuutin käyttötavat

Sitovan tonttijaon ja sen sisältämien tonttijakotonttien elinkaareen liittyvää tilaa hallitaan ko. tietokohteiden elinkaaritila-attribuutin ja sen mahdolliset arvot kuvaavan Elinkaaren tila-koodiston avulla. [SitovaTonttijako]- ja [Tonttijakotontti]-luokkien elinkaaritila-attribuutit ovat pakollisia.

**Elinkaaren tila**-koodisto kuvaa 9 mahdollista tilaa, joissa sitova tonttijako voi olla sen elinkaaren eri vaiheissa:

- Vireillä
- Luonnos
- Ehdotus
- Hyväksytty
- Voimassa
- Kumottu osittain
- Kumottu kokonaan
- Kumoutunut osittain
- Kumoutunut kokonaan

{% include common/question.html content="Mitkä ovat Kumottu- ja Kumoutunut-tilojen tarkat määritelmät ja erot?" %}

Sitovien tonttijakojen, joiden elinkaaritila on Vireillä, Luonnos, Ehdotus, Hyväksytty laadinta- ja päätösprosessi on kesken, eli niiden tonttijakotontit eivät (vielä) ole lainvoimaisia. Sitovat tonttijaot, jotka ovat elinkaaritilassa Voimassa,  Kumottu osittain tai Kumoutunut osttain, sisältävät nykyajanhetkellä rajaamallaan alueella voimassa olevia tonttijakotontteja. Koodit Kumottu kokonaan ja Kumoutunut kokonaan kuvaavat sitovan tonttijaon tiloja, joissa olevan sitovan tonttijaon elinkaari on päättynyt.

### Sallitut sitovan tonttijaon elinkaaren tilan muutokset

Sitovan tonttijaon elinkaaritila voi sen laadinta-, päätös-, valitus-, voimassaolo- ja kumoutumisvaiheidensa esiintyä ja muuttua vain tässä luvussa kuvatuilla tavoilla.

{% include common/clause_start.html type="req" id="elinkaari/vaat-ensimmainen-elinkaaritila" %}
Sitovan tonttijaon elinkaaritilaa tallennettaessa ensimmäistä kertaa sitovan tonttijaon tietovarastoon, riippuen sitovan tonttijaon ```digitaalinenAlkupera```-attribuutin arvosta:

- **Tietomallin mukaan laadittu**: tilat Vireillä, Luonnos, Ehdotus, Hyväksytty, Voimassa sitova tonttijako.
- **Kokonaan digitoitu**, **Osittain digitoitu** tai **Sitovan tonttijaon rajaus digitoitu**: tilat Voimassa, Kumottu osittain, Kumottu, Kumoutunut osittain, Kumoutunut
{% include common/clause_end.html %}

{% include common/clause_start.html type="req" id="elinkaari/vaat-elinkaaritila-siirtymat" %}
Sitovan tonttijaon ```elinkaaritila```-attribuutin arvo voi kahden sen peräkkäisen tallennusversion välillä vain seuraavilla tavoilla:

- Tilasta ```Vireillä``` tilaan ```Ehdotus```, ```Hyväksytty```.
- Tilasta ```Hyväksytty``` tilaan ```Voimassa```, ```Kumottu osittain```, ```Kumottu kokonaan```, ```Kumoutunut osittain``` tai ```Kumoutunut kokonaan```.
- Tilasta ```Voimassa``` tilaan ```Kumottu osittain```, ```Kumottu kokonaan```, ```Kumoutunut osittain``` tai ```Kumoutunut kokonaan```.
- Tilasta ```Kumottu``` ei ole sallittuja siirtymiä.
- Tilasta ```Kumoutunut``` ei ole sallittuja siirtymiä.
{% include common/clause_end.html %}

### Tonttijakotontin elinkaaren tila

Tavallisesti sitovan tonttijaon sisältämien tonttijakotonttien elinkaaritilan arvo on sama kuin kokonaan sitovalla tonttijaolla, mutta ne voivat erota toisistaan kahdessa tapauksessa:

- Sitovan tonttijaon Kumottu osittain tai Kumoutunut osittain tapauksessa osa tonttijakotonteista voidaan kumota
- Kaavamuutoksen tai vaihekaavan voimaantulo aiheuttaa siinä kumottaviksi tonttijakotontteja

 (ks. Sitovan tonttijaon kumoutuminen ja kumoaminen)

### Sitovan tonttijaon elinkaaritilan muutoksiin liittyvät käsittely- ja vuorovaikutustapahtumat

 Kun sitovasta tonttijaosta viedään sitovan tonttijaon varastoon uusi versio, jossa sen elinkaaritila on muuttunut, liittyy kyseisen sitovan tonttijaon version syntymiseen tyypillisesti jokin käsittelytapahtuma.

{% include common/clause_start.html type="req" id="elinkaari/vaat-elinkaaritilan-muutostapahtumat" %}
Sitovan tonttijaon ```elinkaaritila```-attribuutin arvon seuraaviin muutoksiin tulee aina liittyä **Kasittelytapahtuma**, jonka ```laji```-attribuutin arvo tulee olla elinkaarimuutosta vastaava:

- Muutos tilaan **Vireillä**: Liityttävä käsittelytapahtuman laji sitovan tonttijaon virelletulo.
- Muutos tilaan **Ehdotus**: Liityttävä käsittelytapahtuman laji sitovan tonttijaon ehdotuksen nähtäville asettaminen.
- Muutos tilaan **Hyväksytty**: Liityttävä käsittelytapahtuman laji sitovan tonttijaon hyväksyminen.
- Muutos tilaan **Voimassa**: Liityttävä käsittelytapahtuman laji sitovan tonttijaon voimaantulo.
- Muutos tilaan **Kumoutunut osittain**: Liityttävä käsittelytapahtuman laji sitovan tonttijaon kumoutuminen.
- Muutos tilaan **Kumoutunut kokonaan**: Liityttävä käsittelytapahtuman laji sitovan tonttijaon kumoutuminen.
{% include common/clause_end.html %}

Yllä luetellut käsittelytapahtumat tulee tallentaa samaan aikaan elinkaaritilaltaan muuttuneen sitovan tonttijaon kanssa.

{% include common/clause_start.html type="req" id="elinkaari/vaat-ehdotuksen-nahtavilleasettaminen" %}
Sitovan tonttijaon ```elinkaaritila```-attribuutin arvon muuttuminen arvosta Ehdotus arvoon Hyväksytty vaatii, että sitovan tonttijaon tietovarastossa on sekä Kasittelytapahtuma lajia Ehdotuksen nähtäville asettaminen että Vuorovaikutustapahtuma lajia Nähtävilläolo, joista molemmat viittaavat johonkin ko. sitovan tonttijaon aiemmista Ehdotus-tilassa olevista versioista assosiaatiolla ```liittyvaAsia```. Vuorovaikutustapahtuman attribuutin ```tapahtumaAika``` tulee kuvata aikaväli, jonka aikana sitovan tonttijaon ehdotus on ollut nähtävillä.
{% include common/clause_end.html %}

{% include common/clause_start.html type="rec" id="elinkaari/suos-nahtavillaolopaikka" %}
Mikäli sitovan tonttijaon ehdotus on nähtävillä tietyssä fyysisessä paikassa, on suositeltavaa ilmaista kyseisen paikan sijainti Vuorovaikutustapahtuma-luokan attribuutin ```sijainti```-attribuutin avulla.
{% include common/clause_end.html %}

Huomaa, että muutos tilaan Kumottu osittain, Kumottu kokonaan, Kumoutunut osittain,  Kumoutunut kokonaan voi liittyvä joko käsittelytapahtuman lajiin sitovan tonttijaon kumoaminen tai kaavan kumoamiseen kaavamuutokseen tai vaihekaavan lainvoimaiseksi tulon yhteydessä.
