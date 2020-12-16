---
layout: "default"
title: "Kaavatietomalli - looginen tietomalli - elinkaarisäännöt"
description: ""
page: "elinkaarisaannot"
modelversion: "1.0"
status: "Keskeneräinen"
---
# Elinkaarisäännöt
{:.no_toc}

1. 
{:toc}

## Johdanto

Kaavan (tietojärjestelmän objektin, paikkatietokohde) elinkaari, JHS-viittaus

### HTTP URI -tunnukset

HTTP URI -muotoiset tunnukset ovat [RFC 3986 -standardiin]() perustuvia HTTP(S) -protokollan mukaisia URI-osoitteita (Uniform Resource Identifier), joiden globaali yksilöivyys varmistetaan Internetin DNS-nimipalveluun rekisteröityjen domain-nimien avulla. Kullakin DNS-palveluun rekisteröidyllä domain-nimellä (esim. ```uri.suomi.fi```) on yksiselitteinen omistaja, joka on suoraan tai välillisesti vastuussa ko. domain-nimen alla julkaistavasta sisällöstä. Nimen omistaja on myös ainoa taho, joka voi päättää ko. domain-nimeä käyttävien osoitteiden ohjautumisesta haluttuihin resursseihin, mikä tekee siitä luontevan perustan yksilöivien tunnusten nimiavaruuksille (esim. <http://uri.suomi.fi/object/rytj/kaava>). HTTP URI -muotoisen tunnuksen yksilöivyys perustuu siis domain-nimien ja siten niihin perustuvien nimiavaruuksien keskitettyyn hallintaprosessiin.

URI-tunnuksen ei tarvitse viitata konkreettiseen sijaintiin internetissä, vaan se voi olla abstraktimpi tunnus. [JHS 193 Paikkatiedon yksilöivät tunnukset](http://www.jhs-suositukset.fi/suomi/jhs193) määrittelee paikkatiedon yksilöiville tunnuksille muodon <http://paikkatiedot.fi/{tunnustyyppi}/{aineistotunnus}/{paikallinen tunnus}>, jossa paikkatietokohteiden ```tunnustyyppi``` on ```so```. Kaavatietomallissa on esimerkkinä käytetty tunnusmuotoa 
<http://uri.suomi.fi/object/rytj/{aineistotyyppi}/{TietotyypinNimi}/{paikallinenTunnus}>. HTTP URI -muotoisen tunnuksen etuna on luettavuus sekä DNS- ja HTTP-protokollien tarjoama kyky ratkaista (resolve) tunnus ja ohjata kysyjä sitä kuvaavaan Internet-resurssiin ilman tarvetta erityiselle keskitetylle tunnusrekisterille ja siihen perustuvalle ratkaisupalvelulle.

Kaavatietomallissa HTTP URI -muotoa käytetään [viittaustunnus](#viittaustunnus)-attribuutissa, jonka avulla viitataan tiettyyn versioon tietokohteesta kaavan ulkopuolelta.

### UUID-tunnukset
UUID (Universally Unique Identifier) on OSF:n (Open Software Foundation) määrittelemä standardoitu tunnusmuoto, jonka avulla voidaan luoda vakiokokoisia, hyvin suurella todennäköisyydellä yksilöiviä tunnuksia ilman keskitettyä hallintajärjestelmää. UUID-tunnukset voivat perustua satunnaislukuihin, aikaleimoihin, tietokoneiden verkkokorttien MAC-osoitteisiin tai merkkijonomuotoisiin nimiavaruuksiin eri yhdistelmissä. UUID-tunnukset erityisen hyvin tietojärjestelmissä, joissa uusia globaalisti pysyviä ja yksilöiviä tunnuksia on tarpeen luoda hajautetusti ilman keskitettyä tunnusrekisteriä.

Kaavatietomallissa UUID-muotoisia tunnuksia suositellaan käytettäväksi [identiteettitunnus](#identiteettitunnus)-, [kaavatunnus](#kaavatunnus)- ja [tuottajakohtainen tunnus](#tuottajakohtainen-tunnus)-attribuuttien arvoina.


## Kaavatietomallin kohteiden elinkaaren hallinnan periaatteet
Kaavatietomallin mukaisten aineistojen tallentamisessa erotetaan toisistaan tietojen tuottaminen ja muokkaus sisäisesti niiden tuottamiseen ja muokkaamiseen käytettävissä tietojärjestelmissä ja niiden hallinta yhteisessä versiohallitussa kaavatietovarastossa.

Kaavatietomallissa ei ole mielekästä asettaa vaatimuksia kaavatietoa tuottavien tietojärjestelmien tunnusten ja versioden hallintaan, vaan tietomallissa tulee varautua siihen, että yhteiseen tietovarastoon tallennettavia tietoja on muokattu ja tallennettu sisäisesti tuntematon määrä kertoja ennen ensimmäistä viemistä yhteiseen tietovarastoon, ja samoin tuntematon määrä kertoja kunkin yhteiseen varastoon vietävän version välillä. Näin ollen on mahdollista, että kaavasta voi olla joissain tietojärjestelmissä tallennettuna paikallisia versiota, joita ei ole koskaan viety yhteiseen kaavatietovarastoon.

## Tunnukset ja niiden hallinta

### Identiteettitunnus
Identiteettitunnus yhdistää saman tunnistettavan kaavan tietokohteen kehitysversiot toisiinsa.

{% include clause_start.html type="req" id="elinkaari/vaat-identiteettitunnus-maar" %}
Kaavatietomallin tietokohteissa identiteettitunnus kuvataan attribuutilla ```identiteettiTunnus```. Kahdella kaavatietomallin versioitavalla objektilla voi olla sama ```identiteettiTunnus```-attribuutin arvo ainoastaan, mikäli kaikki seuraavista ehdoista ovat tosia:
* Molemmat objektit kuvaavat saman kaavan tai sen sisältämän, nimettävissä olevan tietokohteen kehityskaaren eri tiloja.
* Molemmat objektit liittyvät samaan kaavaan.
* Molemmat objektit ovat saman loogisen tietomallin luokan edustajia.
{% include clause_end.html %}

Yksittäisen kaavan tietokohteen koko ko. tietojärjestelmään tallennettu kehityshistoria saadaan noutamalla kaikki ko. tyyppisen tietokohteen objektit, joilla on sama ```identiteettiTunnus```-attribuutin arvo.

Yhteinen kaavatietovarasto on vastuussa uusien identiteettitunnusten luomisesta tarvittaessa tallennustapahtumien yhteydessä, ja niiden välittämisestä tiedoksi tallentavalle tietojärjestelmälle. Tallentavan tietojärjestelmän tulee tallentaa itselleen kopiot tietovaraston tallennustapahtuman yhteydessä palautamistä kaavan ja sen tietokohteiden identiteettitunnuksista, sillä ne tulee sisällyttää ko. tietokohteiden seuraavien versioden tallennettavaksi lähetettäviin objekteihin.

{% include clause_start.html type="req" id="elinkaari/vaat-identiteettitunnus-gen" %}
* Mikäli tallennettavalle tietokohteelle ei ole annettu ```identiteettitunnus```-attribuuttia, tai tietovarasto ei sisällä sellaista saman luokan tietokohdetta, jolla sama ```identiteettiTunnus```-attribuutin arvo, kaavatietovarasto luo ko. objektille uuden identiteettitunnuksen, joka korvaa tuottavan tietojärjestelmän objektille mahdollisesti antaman ```identiteettiTunnus```-attribuutin arvon. Tällöin objektia pidetään uuden tietokohteen ensimmäisenä versiona.
* Mikäli tietovarasto sisältää saman luokan tietokohteen, jolla on sama ```identiteettiTunnus```-attribuutin arvo kuin tallennetavalla objektilla, objekti tallennetaan kaavatietovarastoon ko. tietokohteen uutena versiona. Tällöin tallennettavan objektin ```identiteettiTunnus```-attribuutin arvo ei muutu.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-kaavan-identiteettitunnus" %}
[Kaava](../../looginenmalli/dokumentaatio/#kaava)-luokan tietokohteen tallennuksen yhteydessä kaavatietovarasto tarkistaa, että sen attribuutti [kaavaTunnus](#kaavatunnus) on annettu ja validi.
* Mikäli kohde katsotaan sen ```identiteettiTunnus```-attribuutin arvon perusteella uudeksi tietokohteeksi, sama ```kaavaTunnnus```-attribuutti ei saa olla käytössä kaavatietovaraston muilla [Kaava](dokumentaatio/#kaava)-luokan objekteilla.
* Mikäli kohde katsotaan sen ```identiteettiTunnus```-attribuutin arvon perusteella aiemmin tallennetun tietokohteen uudeksi versioksi, aiemmin tallennetun version ```kaavaTunnnus```-attribuutin tulee olla sama kuin tallennettavassa objektissa.
{% include clause_end.html %}

{% include clause_start.html type="rec" id="elinkaari/suos-identiteettitunnus-form" %}
Identiteettitunnuksen suositeltu muoto on UUID.
{% include clause_end.html %}

Esimerkki: ```640bff6b-c16a-4947-af8d-d86f89106be1```

### Paikallinen tunnus
Paikallinen tunnus yksilöi tietokohteen yhden version kaavatietovaraston sisällä. 

{% include clause_start.html type="req" id="elinkaari/vaat-paikallinentunnus-maar" %}
Kaavatietomallin tietokohteissa paikallinen tunnus kuvataan attribuutilla ```paikallinenTunnus```. Kaikilla saman kaavatietovaraston objekteilla (ml. saman tietokohteen eri versiot) tulee olla eri ```paikallinenTunnus```-attribuutin arvo.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-paikallinentunnus-gen" %}
Tietokohteiden paikallinen tunnus muuttuu sen jokaisen version tallennuksen yhteydessä. Kaavatietovarasto vastaa paikallisten tunnusten luomisesta tallennustapahtuman yhteydessä. Tuottavan tietojärjestelmän mahdollisesti asettamat arvot korvataan.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-paikallinentunnus-form" %}
Paikallinen tunnus koostuu identiteettitunnuksesta ja siihen erotinmerkillä liitetystä versiokohtaisesta, esimerkiksi tarkkaan tallennusajanhetkeen perustuvasta merkkijonosta.
{% include clause_end.html %}

{% include clause_start.html type="rec" id="elinkaari/suos-paikallinentunnus-merk" %}
Paikallisen tunnuksen muodostamisessa tulee välttää merkkejä, jotka joudutaan URL-koodaamaan rajapintapalvelujen kutsuissa. Paikkatietokohteen paikallista tunnusta käytetään fyysisten tietomallien pääavaimena, esim. GeoJSON Feature ```id```-omaisuuden ja GML:n ```gml:id```-attribuutin arvona, ja siten esimerkiksi OGC Web Feature Service (WFS) - ja OGC API - Features -rajapintapalvelujen paikkatietokohteen yksilöivissä kyselyissä.
{% include clause_end.html %}

Tallennusajanhetkeen päättyvää paikallista tunnusta voidaan käyttää ilman sekaannusmahdollisuuksia samalla logiikalla myös paikallisissa versionneissa, eli sellaisissa kaavan versioiden tallennuksissa, joita ei viedä lainkaan kaavatietovarastoon.

Esimerkki: ```640bff6b-c16a-4947-af8d-d86f89106be1.b05cf48d46d8c905c54522f44b0a12daff11604e```

{% include note.html content="Käyttämällä paikallisena tunnuksena pelkkää identiteettitunnuksesta riippumatonta UUID-tunnusta päästäisiin lyhyempiin tunnuksiin, mutta menetetään yhteys identiteettitunnusten ja paikallisten tunnusten välillä, mikä saattaa hankaloittaa erilaisten vikatilanteiden selvitystä ja toimintavarmuuden testaamista, kun pelkkien tunnusten perusteella ei voida päätellä ovatko kaksi objektia saman tietokohteen eri versioita." %}

### Nimiavaruus
{% include clause_start.html type="req" id="elinkaari/vaat-nimiavaruus-maar" %}
Nimiavaruus määrää kaavatietomallin kaikkien tietokohteiden viittaustunnusten alkuosan yhden kaavatietovaraston sisällä. Kaavatietomallin tietokohteissa paikallinen tunnus kuvataan attribuutilla ```nimiavaruus```.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-nimiavaruus-form" %}
Nimiavaruus on HTTP URI -muotoinen.
{% include clause_end.html %}

Nimiavaruus on syytä valita huolella siten, että se olisi mahdollisimman pysyvä, eikä sitä tarvitsisi tulevaisuudessa muuttaa esimerkiksi valtionhallinnon virastojen tai ministeriröiden mahdollisten uudelleenorganisointien ja -nimeämisten johdosta. Valittu URL-osoite tulee myös voida aina tarvittaessa ohjata kulloinkin käytössä olevaan rajapintapalveluun (HTTP redirect). 

{% include clause_start.html type="req" id="elinkaari/vaat-nimiavaruus-gen" %}
Kaavatietovarasto vastaa ```nimiavaruus```-attribuuttien asetamisesta tallennustapahtuman yhteydessä. Tuottavan tietojärjestelmän mahdollisesti antamat arvot korvataan.
{% include clause_end.html %}

Esimerkki: ```http://uri.suomi.fi/object/rytj/kaava```

### Viittaustunnus
{% include clause_start.html type="req" id="elinkaari/vaat-viittaustunnus-maar" %}
Viittaustunnus yksilöi kaavan tietokohteen yhden, keskitettyyn kaavatietovaraston tallentun kehitysversion globaalisti. Kaavatietomallin tietokohteissa paikallinen tunnus kuvataan attribuutilla ```viittausTunnus```.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-viittaustunnus-form" %}
Viittaustunnus on HTTP URI -muotoinen ja se muodostuu nimiavaruudesta, tietokohteen luokan nimestä ja paikallisesta tunnuksesta yhdessä kauttaviivoilla (```/```) erotettuina.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-nimiavaruus-gen" %}
Kaavatietovarasto vastaa ```viittausTunnus```-attribuuttien asetamisesta tallennustapahtuman yhteydessä. Tuottavan tietojärjestelmän mahdollisesti antamat arvot korvataan.
{% include clause_end.html %}

Tallentavan tietojärjestelmän ei siis tarvitse tallentaa luotuja viittaustunnuksia itselleen seuraavia tallennuksia varten.

{% include clause_start.html type="rec" id="elinkaari/suos-viittaustunnus-ohj" %}
Viittaustunnuksen on suositeltavaa ohjautua aina ko. tietokohteen version tietosisältöön kulloinkin toiminnassa olevassa kaavatietovaraston latauspalvelussa.
{% include clause_end.html %}

Esimerkki: ```http://uri.suomi.fi/object/rytj/kaava/SpatialPlan/640bff6b-c16a-4947-af8d-d86f89106be1.b05cf48d46d8c905c54522f44b0a12daff11604e```

### Tuottajakohtainen tunnus

{% include clause_start.html type="req" id="elinkaari/vaat-tuottajakohtainen-tunnus-maar" %}
Kaavatietoa tuottavat järjestelmät voivat niin halutessaan käyttää tuottajakohtaista tunnusta niiden omien tietojärjestelmäspesifisten tunnusten antamiseen kaavatietomallin tietokohteille. Kaavatietomallin tietokohteissa tuottajakohtainen tunnus kuvataan attribuutilla ```tuottajakohtainenTunnus```.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-tuottajakohtainen-tunnus-gen" %}
Kaavatietovarasto ei koskaan muuta tuottavan tietojärjestelmän mahdollisesti asettamia tuottajakohtaisia tunnuksia, ja ne palautetaan sellaisenaan latattaessa tietokohteita tietovarastosta.
{% include clause_end.html %}

Tietojärjestelmät voivat käyttää tuottajakohtaisia tunnuksia kohdistamaan kaavatietovarastoon ja paikallisiin tietojärjestelmiin tallennettuja tietokohteita toisiinsa esimerkiksi päivitettäessä niiden tallennuksen yhteydessä syntyneitä tunnuksia, vertailtaessa kaavatietovarastoon tallennettuja kohteita ja paikallisia kohteita toisiinsa, sekä esitettäessä validointipalvelun tuloksia suunnitteluohjelmiston käyttäjälle.

Tuottajakohtaisilta tunnuksilta ei vaadita yksilöivyyttä tai mitään tiettyä yhtenäistä muotoa, mutta UUID-muodon käyttäminen tarjoaa hyvin määritellyn ja standardoidun tavan luoda tuottajakohtaisista tunnuksista yksilöiviä eri tietojärjestelmien kesken. Tästä saattaa olla etua haluttaessa tehdä tuotettavista kaavatiedoista mahdollisimman järjestelmäriippumattomia ja esimerkiksi taata tuottajakohtaisten tunnusten yksilöivyys yli mahdollisten kaavatietoa tuottavien tietojärjestelmien vaihdosten ja päivitysten. 

{% include clause_start.html type="rec" id="elinkaari/suos-tuottajakohtainen-tunnus-form" %}
Tuottajakohtaisen tunnuksen suositeltu muoto on UUID.
{% include clause_end.html %}

Esimerkki: ```k-123445```

### Kaavatunnus
{% include clause_start.html type="req" id="elinkaari/vaat-kaavatunnus-maar" %}
Kaavatunnus on kaavalle ennakolta haettava, kaavan kansallisesti yksilöivä tunnus. Kaatatietomallissa kaavatunnus kuvataan [Kaava](dokumentaatio/#kaava)-luokan attribuutilla ```kaavaTunnus```.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-kaavatunnus-gen" %}
Tuottava tietojärjestelmän vastaa kaavatunnuksen asettamisesta [Kaava](dokumentaatio/#kaava)-luokan attribuutiksi. Se tulee olla asetettuna myös kaavan ensimmäisen kaavatietovarastoon tallennuksen yhteydessä.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-kaavatunnus-yks" %}
Kaavatunnus on Kaava-luokan objekteille globaalisti yksilöivä, eikä muutu saman kaavan eri elinkaaren aikaisten versioiden tallennuksen yhteydessä.
{% include clause_end.html %}

 Käytännössä myönnetyt kaavatunnukset kannattaa tallentaa valmiiksi kaavatietovarastoon, jotta voidaan tarkistaa onko tallennettavaksi tarkoitettu kaavatunnus myönnetty organisaatiolle, jonka kaavaa ollaan tallentamassa. Kuntakoodin tai muun hallinnollisen alueen tunnuksen käyttö osana kaavatunnusta ei ole suositeltavaa, sillä hallinnolliset alueet muuttuvat ajan kuluessa. Kun sidos tunnuksen ja hallinnollisen alueen välillä ei näy tunnuksessa, voidaan kaavan hallinnollista aluetta muuttaa joustavammin kaavan elinkaaren aikana.

{% include clause_start.html type="rec" id="elinkaari/suos-kaavatunnus-form" %}
Kaavatunnuksen suositeltu muoto on UUID.
{% include clause_end.html %}

Esimerkki: ```df5b2d6f-d6d6-4695-938c-dd7c4c784c28```

### Pysyvien tunnusten palauttaminen tuottavalle järjestelmälle

Versionhallinnan näkökulmasta on tärkeää, että kaavan tuottava tietojärjestelmä käyttää saman kaavan seuraavan version tallentamisessa kaavan ensimmäisen version tallennuksen yhteydessä luotua identiteettitunnusta. Vastaavasti kaikkien kaavan tietokohteiden osalta käytetään niiden ensimmäisen tallennuksen yhteydessä luotuja identiteettitunnuksia, mikäli objektin katsotaan kuvaavan ko. tietokohteen uutta versiota.

{% include clause_start.html type="req" id="elinkaari/vaat-tunnusten-palautus" %}
Tietovaraston tallennusrajapinta palauttaa tallennetun kaavan tiedot tuottavalle tietojärjestelmälle tallennusoperaation yhteydessä siten, että ne sisältävät yllä mainittujen tunnustenhallintasääntöjen mukaisesti mahdollisesti generoidut tai muokatut identiteettitunnukset, paikalliset tunnukset, nimiavaruudet ja viittaustunnukset kaikille tallennetuille tietokohteille.
{% include clause_end.html %}

## Muutokset ja tietojen versionti
{% include clause_start.html type="req" id="elinkaari/vaat-pysyva-sisalto" %}
Kukin kaavan tai sen osien tallennusoperaatio yhteiseen tietovarastoon muodostaa aina uuden version tallennettavista tietokohteista. Tallennetun tietokohteen version sisältö ei voi muttua tallennuksen jälkeen, poislukien sen voimassaolon päättymiseen, edellisen ja seuraavan version linkittämiseen ja elinkaaritilaan liittyvät attribuutit.
{% include clause_end.html %}

Näin taataan ulkoisten viittausten eheys, sillä kaavan kaikkien kohteiden paikalliset ja viittaustunnukset viittaavat aina vain tiettyn, sisällöllisesti muuttumattomaan versioon viittatusta kohteesta. Suositeltavaa on, että kaikki tallennusversiot myös pidetään pysyvästi tallessa, jotta mahdolliset keskenäiset ja ulkopuolelta tulevat linkit eivät mene rikki muutosten yhteydessä.

### Muutosten leviäminen viittausten kautta
Kaavatietomallin tietokohteiden keskinäiset viittaukset kohdistuvat aina viitattavien tietokohteiden tiettyyn versioon, ja toisaalta kaikki kohteiden sisällölliset muutokset johtavat uusien versioiden tallentamiseen. Siten kohteiden välisten linkkien kohdetietoa täytyy muuttaa mikäli halutaan viitata jollain tapaa muuttuneeseen kohteeseen. Tämä päivitystarve johtaa edelleen myös viittaavan tietokohteen uuden version luomiseen, vaikka ainoa muuttunut tieto olisi linkki uuteen versioon viitatusta tietokohteesta. Molempiin suuntiin tietokohteiden välillä tehty linkitys saattaa siten johtaa hyvin laajalle leviävään muutosketjuun. Muutosten leviämistä voidaan rajoittaa  kaikkiin kaavan tietokohteisiin voidaan välttää tekemällä linkitys tietokohteiden välillä vain yhteen suuntaan, esimerkiksi vain joko kaavasta kaavakohteisiin ja kaavakohteista kaavamääräyksiin (ylhäältä alas), tai toisinpäin (alhaalta ylös). 

Kaavatietomallissa kukin [Kaavakohde](dokumentaatio/#kaavakohde) on linkitetty kahdensuuntaisesti kaavaan ja kukin [Kaavamääräys](dokumentaatio/#kaavamaarays) ja [Kaavasuositus](dokumentaatio/#kaavasuositus) kahdensuuntaisesti joko pelkästään suoraan kaavaan (yleismääräys/yleissuositus) tai myös kaavakohteisiin, joiden alueita ne koskevat. Tällöin yhden kaavamääräyksen muuttaminen johtaa uuden version luomiseen muutettavan kaavamääräyksen lisäksi myös siihen linkitetyistä kaavakohteista, ja edelleen niihin linkitetystä kaava-objektista, mikä puolestaan johtaa lopulta uusien versioiden luomiseen kaikista ko. kaavan muistakin kaavakohteista, kaavamääräyksistä ja -suosituksista, koska kaava-objektiin päin osoittavat linkit pitää muuttaa osoittamaan sen uuteen versioon.

Minkä tahansa kaavanmääräyksen tai -suosituksen muuttaminen johtaa siis kaikkien muidenkin ko. kaavan kaavakohteiden, kaavamääräysten ja kaavasuositusten uusiin versiohin, mikä on hieman ongelmallista todellisten kaavan muutosten seurannan kannalta. Kahdensuuntainen linkitys on kuitenkin tässä perusteltavissa. Suorat linkit kaavakohteista, kaavamääräyksistä ja kaavasuosituksista ylöspäin Kaava-luokan objektiin mahdollistavat tehokkaat ja yksikertaiset hakuoperaatiot tiettyyn kaavan versioon liittyvien kaavamääräysten ja -suositusten noutamiseksi. Toisaalta Kaava-luokan viittaukset alaspäin sen sisältämiin kaavakohteisiin, yleismääräyksen luonteisiin kaavamääräyksiin ja yleissuosituksen luonteisiin kaavasuosituksiin helpottavat kaikkien kaavaan liittyvien kaavamääräysten ja -suositusten poimintaa, kun ne voidaan löytää iteratiivisesti puumaista rakennetta seuraamalla.

Linkit kaava-objektista alaspäin mahdollistavat myös kaavaan liittyvien kaavakohteiden, kaavamääräysten ja kaavasuositusten poistamisen kaavaluonnoksesta tai ehdotuksesta vain jättämällä ne yksinkertaisesti pois seuraavasta kaavan tallennusversiosta: Mikäli kaava-objektissa ei olisi suoria linkkejä sen sisältämiin kaavakohteisiin, voisi se säilyä tallennuksessa muuttumattomana, vaikka tallennuksesta puuttuusikin yksi tai useampi aiempaa kaava-versioon sisältynyt kaavakohde. Muuttumattomasta kaava-objektista ei tällöin luotaisi uutta versiota, ja siten uudesta versiosta pois jätetytkin kaavakohteet viittaisivat edelleen uusimpaan (muuttumattomaan) kaavan versioon yhdessä muutettujen ja uusien kaavakohteiden kanssa. Vastaavasti kaavamääräysten poistaminen tietystä kaavakohteesta voidaan tehdä yksinkertaisesti jättämällä ne pois kaavan seuraavasta tallennusversiosta.

[Kaava](dokumentaatio/#kaava)-luokan assosiaatiot [Kaavaselostus](dokumentaatio/#kaavaselostus)- ja [OsallistumisJaArviointisuunnitelma](dokumentaatio/#osallistumisjaarviointisuunnitelma)-luokkiin ovat yksisuuntaisia. Tallennettu versio kaavaselostuksesta tai osallistumis- ja arviointisuunnitelmasta voi pysyä samana kaavan uuden version tallennuksen yhteydessä, jolloin niistä ei ole tarpeen luoda uusia versiota. Sama kaavaselostuksen tai osallistumis- ja arviointisuunnitelman versio voi siis liittyä useampaan saman kaavan tallennusversioon.

Kaavaprosessin historian kuvaavat [AbstraktiTapahtuma](dokumentaatio/#abstraktitapahtuma)-luokasta perityt käsittely- ja vuorovaikutustapahtumat on puolestaan linkitetty yksisuuntaisesti [AbstraktiMaankayttoasia](dokumentaatio/#abstraktimaankayttoasia)-luokkaan (Kaava-luokan yläluokka) päin, jolloin tapahtumiin tehtävät muutokset eivät vaadi uuden version luomista Kaava-luokan tietokohteesta, sen kaavakohteista, kaavamääräyksistä tai -suosituksista.

### Yksittäisen kaavan elinkaaren vaiheisiin liittyvät muutokset
Kaavatietomalli mahdollistaa tunnistettavien kaavan tietokohteiden eri kehitysversioiden erottamisen toisistaan. Kullakin tietomallin kohteella on sekä sen tosimaailman identiteettiin liittyvä ns. identiteettitunnus että yksittäisen tallennusversion tunnus (paikallinen tunnus). Tallennettaessa uutta versiota samasta kaavasta tai sen sisältämästä tietokohteesta, sen identiteettitunnus pysyy ennallaan, mutta sen paikallinen tunnus muuttuu. Tallennettaessa Kaava-luokan objektia se katsotaan saman tietokohteen uudeksi versioksi, mikäli sen kaavatunnus on sama. Muiden kaavatietomallin versioitavien objektien suhteen samuuden määritteleminen on tietoja tuottavien järjestelmien vastuulla: mikäli objektilla on tallennettavaksi lähetettäessä saman ```identititeettiTunnus```-attribuutin arvo kuin aiemmin tallennetulla, samantyyppisellä tietokohteella, katsotaan uusi objekti on saman tietokohteen uudeksi versioksi.

{% include clause_start.html type="req" id="elinkaari/vaat-version-korvaus" %}
Kun kaavan tietokohteesta tallennetaan uusi versio, tulee tietokohteen edellisen version ```korvattuObjektilla```-assosiaatio asettaa viittaamaan tietokohteen uuteen versioon. Uuden tietokohteen version ```korvaaObjektin```-assosiaatio puolestaan asetetaan viittaamaan tietokohteen edelliseen, korvattavaan versioon. Molempien kohteiden ```tallennusAika```-attribuutin arvoksi asetetaan ajanhetki, jolloin tallennus ja muutos kaavatietovarastoon on tehty.
{% include clause_end.html %}

Yksittäisen tietokohteen yksityiskohtainen muutoshistoria kaavatietovarastossa saadaan seuraavalla sen ```korvattuObjektilla```- ja ```korvaaObjektin```-assosiaatioita. Ainoa muutos, joka ei näy tietokohteen omana versionaan, on kohteen kumoaminen, jolloin sen viimeisimmän version tietoja päivitetään sen elinkaaritilan, voimassaolon ja tallennusajan osalta.

{% include question.html content="Pitääkö [AbstraktiVersioituObjekti](dokumentaatio/#abstraktiversioituobjekti)-luokalle lisätä attribuutti ```ensimmainenTallennusAika```, joka kertoo ko. version alkuperäisen tallennusajan? Kumoamisen yhteydessä ```tallennusAika```-attribuutin arvoa muutetaan, jolloin hukkuu tieto ko. version alkuperäisestä tallennusajankohdasta." %}

Attribuutin ```viimeisinMuutos``` arvo kuvaa ajanhetkeä, jolloin ko. tietokohteeseen on tehty sisällöllinen muutos tiedontuottajan tietojärjestelmässä. Tiedontuottajan järjestelmän osalta ei vaadita tiukkaa versiontipolitiikkaa, eli ```paikallinenTunnus```-attribuutin päivittämistä jokaisen tietokohteen muutoksen johdosta. ```viimeisinMuutos```-attribuutin päivittämien riittää kuvaamaan tiedon todellisen muuttumisajankohdan.

### Kaavan ja sen tietokohteiden voimaantulo
Kaavan ```voimassaoloAika``` -attribuutin alkuaika on ajanhetki, jolloin kaava sen valitusajan umpeuduttua ja mahdollisten valitusten ja oikaisukehotusten käsittelyn jälkeen kuulutetaan voimaantulleeksi.

{% include clause_start.html type="req" id="elinkaari/vaat-kaavan-voimaantulo" %}
Voimaantulemisen kuuluttamisen yhteydessä kaavasta tallennetaan kaavatietovarastoon uusi versio, jossa sen 
* [Kaava](dokumentaatio/#kaava)-luokan objektin ```elinkaaritila```-attribuutin arvoksi on asetettu [Lainvoimainen](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/11),
* [Kaava](dokumentaatio/#kaava)-luokan objektin ```voimassaoloAika```-attribuutin alkuajaksi on asetettu kuulutuksen ajanhetki ja loppuaikaa ei ole annettu, ja
* Kunkin kaavan [Kaavamaarays](dokumentaatio/#kaavamaarays)- ja [Kaavasuositus](dokumentaatio/#kaavasuositus)-luokan objektin ```elinkaaritila```-attribuuttien arvoksi [Lainvoimainen](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/11) ja ```voimassaoloAika```-attribuutin alkuajaksi kuulutuksen ajanhetki ilman loppuaikaa.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-voimassaoloaika" %}
Kaava ja sen kaavamääräykset ja -suositukset ovat voimassa niiden ```voimassaoloAika```-attribuuttien määräämillä aikaväleillä. Mikäli ```voimassaoloAika```-attribuutin loppuaika puuttuu, on tietokohde voimassa toistaiseksi.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-elinkaaritila-voimassaoloaika" %}
 Kaava ja sen kaavamääräykset ja -suositukset voivat olla elinkaaritilassa [Lainvoimainen](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/11) ainoastaan, mikäli niiden ```voimassaoloAika``` on annettu ja sisältää vain alkuajan ilman loppuaikaa. Kaavan ja sen kaavamääräysten ja -suositusten ```voimassaoloAika``` voi olla annettu vain mikäli ne ovat joko elinkaaritilassa [Lainvoimainen](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/11) tai [Kumottu](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/12). Kaavan ja sen kaavamääräysten ja -suositusten ```voimassaoloAika``` sisältää sekä alku- että loppuajan vain, kun ne ovat elinkaaritilassa [Kumottu](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/12).
 {% include clause_end.html %}


### Kaavan määrääminen voimaan osittain

[Maankäyttö- ja rakennuslain pykälässä 201](https://www.finlex.fi/fi/laki/ajantasa/1999/19990132#L26P201) (säädös 132/1999) säädetään mahdollisuudesta määrätä kaava osittain voimaan:
> Kunnanhallitus voi valitusajan kuluttua määrätä yleis- ja asemakaavan tulemaan voimaan ennen kuin se on saanut lainvoiman kaava-alueen siltä osalta, johon valitusten tai oikaisukehotuksen ei voida katsoa kohdistuvan.

{% include clause_start.html type="req" id="elinkaari/vaat-osittainen-voimaantulo" %}
Tallennettaessa osittain voimaan määrättävä kaava, tulee tuottavassa tietojärjestelmässä asettaa [Kaava](dokumentaatio/#kaava)-luokan objektin ja sen sisältämien tietokohteiden attribuuttien arvot seuraavasti:
* [Kaava](dokumentaatio/#kaava)-luokan objektin ```elinkaaritila```-attribuutin arvoksi asetetaan [Osittain voimassa](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/10).
* [Kaava](dokumentaatio/#kaava)-luokan objektin ```voimassaoloAika```-attribuutin alkuajaksi asetaan voimaantulevaksi määräämisen ajanhetki, ja loppuaikaa ei anneta.
* Kunkin kaavan [Kaavamaarays](dokumentaatio/#kaavamaarays)- ja [Kaavasuositus](dokumentaatio/#kaavasuositus)-luokan objektin ```elinkaaritila```-attribuuttien arvoksi asetaan joko [Lainvoimainen](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/11) tai [Kumottu](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/12) riippuen siitä katsotaanko valitusten tai oikaisukehotusten kohdistuvan ko. kaavamääräykseen tai kaavasuositukseen vai ei.
*  ```elinkaaritila```-attribuutin arvon [Kumottu](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/12) saavien [Kaavamaarays](dokumentaatio/#kaavamaarays)- ja [Kaavasuositus](dokumentaatio/#kaavasuositus)-luokan objektien ```voimassaoloAika```-attribuuteille ei anneta lainkaan arvoa.
```elinkaaritila```-attribuutin arvon [Lainvoimainen](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/11) saavien [Kaavamaarays](dokumentaatio/#kaavamaarays)- ja [Kaavasuositus](dokumentaatio/#kaavasuositus)-luokan objektien ```voimassaoloAika```-attribuuteille annetaan alkuajaksi asetaan voimaantulevaksi määräämisen ajanhetki, ja loppuaikaa ei anneta.
{% include clause_end.html %}

Kaavamääräysten kumoaminen kaavan osittaisen voimaan määräyksen yhteydessä saattaa johtaa tilanteeseen, jossa kaavassa ei enää kohdistu mitään kumoamattomia määräyksiä tietyn [Kaavakohde](dokumentaatio/#kaavakohde)-luokan objektin alueelle. Tästä ei kuitenkaan automaattisesti aiheudu "reikää" kaava-alueeseen, sillä kaavan yleismääräykset voidaan edelleen haluta saattaa voimaan myös ko. kaavakohteen alueella.

{% include clause_start.html type="req" id="elinkaari/vaat-osittainen-voimaantulo-aluerajaus" %}
[Kaava](dokumentaatio/#kaava)-luokan tietokohteen uuden version ```aluerajaus```-attribuuttin arvo päivitetään poistamalla siitä vain kumottavia kaavamääräyksiä sisältävien kaavakohteen geometriat ainoastaan siinä tapauksessa, että että osa kaavan alkuperäisestä alueesta halutaan jättää kokonaan kaavan vaikutusalueen ulkopuolelle. Tällöin ulkopuolelle jätettävälle alueelle ei saa olla kohdistua kumoamattomia kaavamääräyksiä.
{% include clause_end.html %}

On mahdollista, että voimassaolevaan kaavaan saattaa kuulua sellaisia kaavakohteita, jotka sijaitsevat kaavan aluerajauksen ulkopuolella. Nämä kaavakohteet voivat kuitenkin sisältävää vain kumottuja kaavamääräyksiä.

### Kaavamuutokset ja vaihekaavat
Hyväksyttyjen kaavojen sisältämiä kaavamääräyksiä voidaan kumota tai korvata laatimalla kaavamuutos tai vaihekaava. Kaavatietomallissa sekä kaavamuutos että vaihekaava toteutetaan [Kaava](dokumentaatio/#kaava)-luokan avulla samoin kuin ensimmäinenkin tietylle alueelle laadittava kaava. Vaihekaavat erotetaan ensimmäisistä kaavoista ja kaavamuutoksista Kaava-luokan attribuutin ```laji``` (arvona koodisto [Kaavalaji](http://uri.suomi.fi/codelist/rytj/Kaavalajit)) avulla. Vaihekaavat sisältävät tyypillisesti vain vähäisiä ja rajattuja muutoksia kaavoihin, joita niillä muutetaan. Muutettavien kaavojen kaavamääräykset säilyvät vaihekaavan alueella tyypillisesti pääosin ennallaan, ja niitä kumotaan ja korvataan vaihekaavassa vain tarpeellilta osin. Kaavamuutos puolestaan kumoaa voimaan tullessaan tyypillisesti yhden tai useamman aiemmin hyväksytyn kaavan kaikki kaavamääräykset ```aluerajaus```-attribuuttinsa määrittämällä alueella. 

{% include clause_start.html type="req" id="elinkaari/vaat-kumoamistieto-per-kaava" %}
Sekä kaavamuutosten että vaihekaavojen tapauksessa kaavalla kaikki kumottavat, aiemmin hyväksyttyjen kaaavojen kaavamääräykset tulee yksilöidä kumoavassa kaavassa. Kutakin kaavaa kohti tulee antaa yksi [Kaava](dokumentaatio/#kaava)-luokan attribuutin ```kumoamistieto``` arvo tyyppiä [KaavanKumoamistieto](dokumentaatio/#kaavankumoamistieto), jonka ```kumottavanKaavanTunnus```-attribuutin arvo on kumottavan kaavan [viittaustunnus](#viittaustunnus)).
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-kumottava-maarayksen-tunnus" %}
Kumottavat kaavamääräykset kuvataan ensisijaisesti ```kumoattavanMaarayksenTunnus```-attribuutin arvojen avulla. Attribuutin arvo on kumottavan [Kaavamaarays](dokumentaatio/#kaavamaarays)-luokan tietokohteen [viittaustunnus](#viittaustunnus).
{% include clause_end.html %}

 Mikäli kumottavalle kaavamääräykselle ei kumottavassa kaavavassa ole määritelty yksilöivää ja yksiselitteistä tunnusta, ei kumoamista voi kohdistaa siihen ```kumoattavanMaarayksenTunnus```-attribuutin avulla. Näin voi olla esimerkiksi kun kumottava kaava tai sen yksittäiset kaavamääräykset eivät ole saatavissa Kaavatietomallin mukaisessa muodossa. Tässä tapauksessa kaavan kumottavat alueet kuvataan ```kumottavaKaavanAlue```-attribuutin määrittämän aluerajauksen avulla.
 
{% include clause_start.html type="req" id="elinkaari/vaat-kumottava-kaavan-alue" %}
Kumottavasta kaavasta kumotaan kaikki kaavamäärykset, jotka on kohdistettu kokonaan ```kumottavaKaavanAlue```-attribuutin määrittämän alueen sisälle. ```kumottavaKaavanAlue```-attribuutin avulla ei voi kumota kaavan yleismääräyksiä.
 {% include clause_end.html %}
 
{% include clause_start.html type="req" id="elinkaari/vaat-kumoaa-kaavan-kokonaan" %}
 Mikäli kaavamuutoksella tai vaihekaavalla halutaan kumota kokonainen hyväksytty kaava kaikkine kaavamääräyksineen, käytetään ```kumoaaKaavanKokonaan```-attribuutin arvoa ```true```. Tällöin attribuutteja ```kumoattavanMaarayksenTunnus``` ja ```kumottavaKaavanAlue``` ei käytetä.
 {% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-kaavamuutoksen-voimaantulo" %}
 Kun kaavamuutoksesta tai vaihekaavasta tallennetaan versio, jonka ```elinkaaritila```-attribuutin arvo on [Lainvoimainen](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/11), kaavatietovarasto päivittää niiden siinä kumottaviksi asetettujan kaavamääräysten, joiden ```elinkaaritila```-attribuutin arvo on [Lainvoimainen](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/11), attribuutteja seuraavasti *luomatta niistä uusia versioita*:
 * ```voimassaoloAika```-attribuutin päättymisaika asetetaan samaksi kuin kaavamuutoksen tai vaihekaavan ```voimassaoloAika```-attribuutin alkamisaika.
 * ```elinkaaritila```-attribuutin arvoksi asetetaan [Kumottu](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/12).
 * ```tallennusAika```-attribuutin arvoksi asetetaan ajanhetki, jolloin kaavamuutos tai vaihekaava tallennettiin kaavatietovarastoon elinkaaritilassa [Lainvoimainen](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/11).
 {% include clause_end.html %}

 Kaavatietomalli ei sisällä omaa tietorakennettaan ajantasaiselle kaava-aineistolle, joka sisältää annetun alueella tietyllä ajanhetkellä voimassaolevat kaavamääräykset (ns. ajantasakaava), huomioiden kaavamuutosten ja vaihekaavojen vaikutukset niiltä osin kun ne ovat ko. ajanhetkellä voimassa. Tällainen toiminnallisuus on kuitenkin aivan ilmeisesti yhteisen kaavatietovaraston palveluna erittäin hyödyllinen. Kaavamääräysten ```voimassaoloAika```-attribuutin arvojen avulla tällainen ajantasainen "kaavamatto" voidaan laskea mille tahansa ajanhetkelle, olettaen, että kaikki kyseisen alueen kaavat on viety tietovarastoon kaavatietomallin mukaisessa muodossa.
 
 On huomattava, että pelkän ```elinkaaritila```-attribuutin avulla ei voida tietää, onko kaavamääräys tietyllä tarkasteluajanhetkellä lainvoimainen vai ei: Mikäli ajanhetkellä ```x``` voimaan tullut kaavamääräys on kumottu kaavamuutoksella, joka on tullut lainvoimaiseksi ajanhetkellä ```y```, on kaavamääräyksen ```elinkaaritila```-attribuutin arvo muutettu arvoon [Kumottu](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/12). Kyseinen kaavamääräys on tällöin kuitenkin edelleen lainvoimainen millä tahansa ajanhetkellä ```t, x <= t < y```.

Kunkin voimassaolevan kaavamääräyksen osalta voidaan tarkastella onko se asetettu kumottavaksi vireillä olevassa, vielä ei-lainvoimaisessa kaavamuutoksessa ja vaihekaavassa hakemalla siihen sen sisältävään kaavan kohdistuvat kaavamuutokset ja vaihekaavat, ja vertaamalla niiden ```kumoamistieto```-attribuuttien arvoja kaavamäääräyksen tietoihin.

{% include question.html content="Pitääkö kaavakohteessa olla tieto siitä, onko kyseessä alue, jolla kyseinen kaava on ensimmäinen (koodisto 'Aiempi kaavoitustilanne', arvot esim. 'Alueella on voimassaoleva saman tasoinen kaava', 'Alueella ei ole voimassaolevaa saman tasoista kaavaa')?" %}

{% include question.html content="Pitäisikö yleismääräyksiä voida kumota myös sisällyttämällä koko kumottavan yleismääräystekstin? Ei-tietomallipohjaisissa kaavoissa kumottavien yleismääräysten yksilöiminen voi muutoin olla mahdotonta." %}

## Kaavan elinkaaren vaiheet ja elinkaaritila-attribuutin käyttö
Kaavan ja sen sisältämien kaavamääräysten elinkaareen liittyvää tilaa hallitaan ko. tietokohteiden ```elinkaaritila```-attribuutin ja sen mahdolliset arvot kuvaavan [Elinkaaren tila](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila)-koodiston avulla. [Kaava](dokumentaatio/#kaava)-, [Kaavamaarays](dokumentaatio/#kaavamaarays)-, ja [Kaavasuositus](dokumentaatio/#kaavasuositus)-luokkien ```elinkaaritila```-attribuutit ovat pakollisia. 

[Elinkaaren tila](http://uri.suomi.fi/codelist/rytj/RY_KaavanElinkaaritila)-koodisto kuvaa 13 mahdollista tilaa, joissa kaava voi olla sen elinkaaren eri vaiheissa:
* [01 - Kaavoitusaloite](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/01)
* [02 - Vireilletullut](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/02)
* [03 - Kaavaluonnos](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/03)
* [04 - Kaavaehdotus](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/04)
* [05 - Tarkistettu kaavaehdotus](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/05)
* [06 - Hyväksytty kaava](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/06)
* [07 - Oikaisukehotuksen alainen](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/07)
* [08 - Valituksen alainen](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/08)
* [10 - Osittain voimassa](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/10)
* [11 - Lainvoimainen](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/11)
* [12 - Kumottu](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/12)
* [13 - Kumoutunut](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/13)
* [14 - Rauennut](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/14)

{% include question.html content="Mitkä ovat ```Kumoutunut```-, ```Kumottu```- ja ```Rauennut```-tilojen tarkat määritelmät ja erot?" %}

{% include question.html content="Pitäisikö kaavan voida olla yhtäaikaa sekä ```Oikaisukehotuksen alainen``` että ```Valituksen alainen```?" %}

Kaavojen, joiden elinkaaritila on 01 - 08, kaavan laadinta- ja päätösprosessi on kesken, eli niiden kaavamääräykset eivät (vielä) ole lainvoimaisia. Kaavat, jotka ovat elinkaaritilassa 10 tai 11 sisältävät nykyajanhetkellä rajaamallaan alueella voimassa olevia kaavamääräyksiä. Koodit 12-14 kuvaavat kaavan tiloja, joissa olevan kaavan elinkaari on päättynyt.

### Sallitut kaavan elinkaaren tilan muutokset
Kaavan elinkaaritila voi sen laadinta-, päätös-, valitus-, voimassaolo- ja kumoutumisvaiheidensa esiintyä ja muuttua vain tässä luvussa kuvatuilla tavoilla.

{% include clause_start.html type="req" id="elinkaari/vaat-ensimmainen-elinkaaritila" %}
Kaavan elinkaaritila tallennettaessa kaava ensimmäistä kertaa kaavatietovarastoon voi olla jokin seuraavista riippuen Kaavan ```digitaalinenAlkupera```-attribuutin arvosta:
   * [01 - Tietomallin mukaan laadittu](http://uri.suomi.fi/codelist/rytj/RY_DigitaalinenAlkupera/code/01)): tilat 01, 02, 03, 04, 05 tai 06.
   * [02 - Kokonaan digitoitu](http://uri.suomi.fi/codelist/rytj/RY_DigitaalinenAlkupera/code/02), [03 - Osittain digitoitu](http://uri.suomi.fi/codelist/rytj/RY_DigitaalinenAlkupera/code/03) tai [04 - Kaavan rajaus digitoitu](http://uri.suomi.fi/codelist/rytj/RY_DigitaalinenAlkupera/code/04): tilat 10, 11, 12, 13 tai 14.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-elinkaaritila-siirtymat" %}
Kaavan ```elinkaaritila```-attribuutin arvo voi kahden sen peräkkäisen tallennusversion välillä vain seuraavilla tavoilla:
* Tilasta ```01``` tilaan ```02```, ```03```, ```04```, ```05```, ```06``` tai ```14```.
* Tilasta ```02``` tilaan ```03```, ```04```, ```05```, ```06```, ```13``` tai ```14```.
* Tilasta ```03``` tilaan ```04```, ```05```, ```06```, ```13``` tai ```14```.
* Tilasta ```04``` tilaan ```05```, ```06```, ```13``` tai ```14```.
* Tilasta ```05``` tilaan ```06```, ```13``` tai ```14```.
* Tilasta ```06``` tilaan ```07```, ```08```, ```10```, ```11```, ```12```, ```13``` tai ```14```.
* Tilasta ```07``` tilaan ```08```, ```10```, ```11```, ```12```, ```13``` tai ```14```.
* Tilasta ```08``` tilaan ```07```, ```10```, ```11```, ```12```, ```13``` tai ```14```.
* Tilasta ```10``` tilaan ```12``` tai ```13```.
* Tilasta ```11``` tilaan ```12``` tai ```13```.
* Tilasta ```12``` ei sallittuja siirtymiä.
* Tilasta ```13``` ei sallittuja siirtymiä.
* Tilasta ```14``` ei sallittuja siirtymiä.
{% include clause_end.html %}

### Kaavamääräysten ja -suositusten elinkaaren tila
Tavallisesti kaavan sisältämien kaavamääräysten ja -suositusten elinkaaritilan arvo on sama kuin koko kaavalla, mutta ne voivat erota toisistaan kahdessa tapauksessa:
* Kaavan osittaisen voimaan määräämisen tapauksessa osa kaavamääräyksistä ja -suosituksista voidaan kumota (ks. [Kaavan osittainen määrääminen voimaan](#elinkaari-vaat-osittainen-voimaantulo))
* Kaavamuutoksen tai vaihekaavan voimaantulo aiheuttaa siinä kumottaviksi yksilöityjen kaavamääräysten kumoamisen (ks. [Kaavamuutokset ja vaihekaavat](#elinkaari-vaat-kaavamuutoksen-voimaantulo))



## Kaavan tietokohteisiin viittaaminen ja viitteiden ylläpito
### Kaavan tietokohteiden sisäiset viittaukset
### Kaavan tietokohteisiin viittaaminen toisista kaavoista ja ulkopuolelta

## Esimerkkejä elinkaaritapahtumista

### Kaavan luominen ja muokkaus ennen ensimmäistä tallennusta kaavatietovarastoon

### Kaavan ensimmäinen tallennus kaavatietovarastoon

### Kaavan muokatun version tallennus kaavatietovarastoon

### Käsittely- tai vuorovaikutustapahtuman lisääminen

### Kaavan hyväksyminen

### Kaavan voimaantulosta kuuluttaminen

### Kaavan, sen yksittäisten kaavamääräysten tai -suositusten kumoaminen



