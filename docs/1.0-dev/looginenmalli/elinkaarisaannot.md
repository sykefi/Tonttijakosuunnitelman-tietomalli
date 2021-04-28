---
layout: "default"
title: "Elinkaarisäännöt"
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

Tonttijakosuunnitelmalla on elinkaari, ja siinä tietyt ennaltamäärätyt vaiheet. Elinkaarisääntöjen määrittely liittyy olennaisesti tietokohteiden versionhallintaan, eli miten yksittäisten tietokohteiden niiden elinkaaren aikana muodotettavat versiot voidaan tallentaa ja yksilöidä viittauskelpoisten pysyvien tunnusten avulla. Tässä annetut säännöt pohjautuvat paikkatietokohteiden yksilöivien tunnusten ja elinkaarisääntöjen periaatteisiin, jotka on kuvattu jukishallinnon suosituksessa [JHS 193 - Paikkatiedon yksilöivät tunnukset](http://www.jhs-suositukset.fi/suomi/jhs193).

### HTTP URI -tunnukset

HTTP URI -muotoiset tunnukset ovat [RFC 3986 -standardiin](https://tools.ietf.org/html/rfc3986) perustuvia HTTP(S) -protokollan mukaisia URI-osoitteita (Uniform Resource Identifier), joiden globaali yksilöivyys varmistetaan Internetin DNS-nimipalveluun rekisteröityjen domain-nimien avulla. Kullakin DNS-palveluun rekisteröidyllä domain-nimellä (esim. ```uri.suomi.fi```) on yksiselitteinen omistaja, joka on suoraan tai välillisesti vastuussa ko. domain-nimen alla julkaistavasta sisällöstä. Nimen omistaja on myös ainoa taho, joka voi päättää ko. domain-nimeä käyttävien osoitteiden ohjautumisesta haluttuihin resursseihin, mikä tekee siitä luontevan perustan yksilöivien tunnusten nimiavaruuksille (esim. <http://uri.suomi.fi/object/rytj/kaava>). HTTP URI -muotoisen tunnuksen yksilöivyys perustuu siis domain-nimien ja siten niihin perustuvien nimiavaruuksien keskitettyyn hallintaprosessiin.

URI-tunnuksen ei tarvitse viitata konkreettiseen sijaintiin internetissä, vaan se voi olla abstraktimpi tunnus. [JHS 193 Paikkatiedon yksilöivät tunnukset](http://www.jhs-suositukset.fi/suomi/jhs193) määrittelee paikkatiedon yksilöiville tunnuksille muodon <http://paikkatiedot.fi/{tunnustyyppi}/{aineistotunnus}/{paikallinen tunnus}>, jossa paikkatietokohteiden ```tunnustyyppi``` on ```so```. Tonttijakomallissa on esimerkkinä käytetty tunnusmuotoa 
<http://uri.suomi.fi/object/rytj/{aineistotyyppi}/{TietotyypinNimi}/{paikallinenTunnus}>. HTTP URI -muotoisen tunnuksen etuna on luettavuus sekä DNS- ja HTTP-protokollien tarjoama kyky ratkaista (resolve) tunnus ja ohjata kysyjä sitä kuvaavaan Internet-resurssiin ilman tarvetta erityiselle keskitetylle tunnusrekisterille ja siihen perustuvalle ratkaisupalvelulle.

Tonttijakomallissa HTTP URI -muotoa käytetään [viittaustunnus](#viittaustunnus)-attribuutissa, jonka avulla viitataan tiettyyn versioon tietokohteesta kaavan ulkopuolelta.

{% include question.html content="Päteekö yllä mainitut kaavatietomallin tunnusmuodot myös tonttijakomalliin? Hyödynnetäänkö URI:a?" %}

### UUID-tunnukset
UUID (Universally Unique Identifier) on OSF:n (Open Software Foundation) määrittelemä standardoitu tunnusmuoto, jonka avulla voidaan luoda vakiokokoisia, hyvin suurella todennäköisyydellä yksilöiviä tunnuksia ilman keskitettyä hallintajärjestelmää. UUID-tunnukset voivat perustua satunnaislukuihin, aikaleimoihin, tietokoneiden verkkokorttien MAC-osoitteisiin tai merkkijonomuotoisiin nimiavaruuksiin eri yhdistelmissä. UUID-tunnukset erityisen hyvin tietojärjestelmissä, joissa uusia globaalisti pysyviä ja yksilöiviä tunnuksia on tarpeen luoda hajautetusti ilman keskitettyä tunnusrekisteriä.

Tonttijakomallissa UUID-muotoisia tunnuksia suositellaan käytettäväksi...

{% include question.html content="Hyödynnetäänkö mallimme UUID:tä?" %}

## Tonttijakomallin kohteiden elinkaaren hallinnan periaatteet
Tonttijakomallin elinkaarisäännöt mahdollistavat tietomallin tietokohteiden käsittelyn, tallentamisen ja muuttamisen hallitusti sekä niiden laatimis- että voimassaolovaiheissa. Tonttijakomallin mukaiset tietosisällöt ovat merkittäviä oikeusvaikutuksia aiheuttavia, juridisesti päteviä aineistoja, joita käsitellään hajautetusti eri toimijoiden tietojärjestelmissä. Tämän vuoksi niiden tunnusten, viittausten ja versionnin hallintaan on syytä kiinnittää erityistä huomiota.

Seuraavat keskeiset periaatteet ohjaavat tonttijakomallin elinkaaren hallintaa:
* Kukin tonttijaon tietovarastoon tallennettu versio tonttijakosuunnitelmasta ja sen sisältämistä yksittäisistä tietokohteista saa pysyvän, versiokohtaisen tunnuksen.
* Kuhunkin tonttijaon tietovarastoon tallennetun tietokohteen versioon voidaan viitata sen pysyvän tunnuksen avulla.
* Tietokohteiden väliset viittaukset toteutetaan hallitusti sekä suunnitelman tuottavissa tietojärjestelmissä että yhteisissä tietovarastoissa.
* Tonttijaon tietovarasto vastaa pysyvien tunnusten luomisesta ja antamisesta tallennettaville tietokohteille.
* Lainvoiman saaneita tonttijakosuunnitelmia ei voi muuttaa tietovarastossa muilta osin kuin niiden tai niiden osien kumoamiseen liittyen.

Tonttijakosuunnitelman tietomallin mukaisten aineistojen tallentamisessa erotetaan toisistaan tietojen tuottaminen ja muokkaus sisäisesti niiden tuottamiseen ja muokkaamiseen käytettävissä tietojärjestelmissä ja niiden hallinta yhteisessä versiohallitussa tonttijaon tietovarastossa. Tonttijakomallin ei ole mielekästä asettaa vaatimuksia tonttijakoa koskevia tietoja tuottavien tietojärjestelmien tunnusten ja versioden hallintaan, vaan tietomallissa tulee varautua siihen, että yhteiseen tietovarastoon tallennettavia tietoja on muokattu ja tallennettu sisäisesti tuntematon määrä kertoja ennen ensimmäistä viemistä yhteiseen tietovarastoon, ja samoin tuntematon määrä kertoja kunkin yhteiseen varastoon vietävän version välillä. Näin ollen on mahdollista, että kaavasta voi olla joissain tietojärjestelmissä tallennettuna paikallisia versiota, joita ei ole koskaan viety yhteiseen tonttijaon tietovarastoon.

{% include note.html content="Tämä sisältö on muokattu meille suoraan kaavatietomallilta." %}

## Tunnukset ja niiden hallinta

### Identiteettitunnus
Identiteettitunnus yhdistää saman tunnistettavan tonttijakosuunnitelman tietokohteen kehitysversiot toisiinsa.

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
Paikallinen tunnus yksilöi tietokohteen yhden version tonttijaon tietovaraston sisällä. 

{% include clause_start.html type="req" id="elinkaari/vaat-paikallinentunnus-maar" %}
Kaavatietomallin tietokohteissa paikallinen tunnus kuvataan attribuutilla ```paikallinenTunnus```. Kaikilla saman kaavatietovaraston objekteilla (ml. saman tietokohteen eri versiot) tulee olla eri ```paikallinenTunnus```-attribuutin arvo.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-paikallinentunnus-gen" %}
Tietokohteiden paikallinen tunnus muuttuu sen jokaisen version tallennuksen yhteydessä. Tonttijaon tietovarasto vastaa paikallisten tunnusten luomisesta tallennustapahtuman yhteydessä. Tuottavan tietojärjestelmän mahdollisesti asettamat arvot korvataan.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-paikallinentunnus-form" %}
Paikallinen tunnus koostuu identiteettitunnuksesta ja siihen erotinmerkillä liitetystä versiokohtaisesta, esimerkiksi tarkkaan tallennusajanhetkeen perustuvasta merkkijonosta.
{% include clause_end.html %}

{% include clause_start.html type="rec" id="elinkaari/suos-paikallinentunnus-merk" %}
Paikallisen tunnuksen muodostamisessa tulee välttää merkkejä, jotka joudutaan URL-koodaamaan rajapintapalvelujen kutsuissa. Paikkatietokohteen paikallista tunnusta käytetään fyysisten tietomallien pääavaimena, esim. GeoJSON Feature ```id```-omaisuuden ja GML:n ```gml:id```-attribuutin arvona, ja siten esimerkiksi OGC Web Feature Service (WFS) - ja OGC API - Features -rajapintapalvelujen paikkatietokohteen yksilöivissä kyselyissä.
{% include clause_end.html %}

Tallennusajanhetkeen päättyvää paikallista tunnusta voidaan käyttää ilman sekaannusmahdollisuuksia samalla logiikalla myös paikallisissa versionneissa, eli sellaisissa tonttijakosuunnitelman versioiden tallennuksissa, joita ei viedä lainkaan tonttijaon tietovarastoon.

Esimerkki paikallisesta tunnuksesta: ```640bff6b-c16a-4947-af8d-d86f89106be1.b05cf48d46d8c905c54522f44b0a12daff11604e```

{% include note.html content="Käyttämällä paikallisena tunnuksena pelkkää identiteettitunnuksesta riippumatonta UUID-tunnusta päästäisiin lyhyempiin tunnuksiin, mutta menetetään yhteys identiteettitunnusten ja paikallisten tunnusten välillä, mikä saattaa hankaloittaa erilaisten vikatilanteiden selvitystä ja toimintavarmuuden testaamista, kun pelkkien tunnusten perusteella ei voida päätellä ovatko kaksi objektia saman tietokohteen eri versioita." %}

### Nimiavaruus
{% include clause_start.html type="req" id="elinkaari/vaat-nimiavaruus-maar" %}
Nimiavaruus määrää tonttijaon tietomallin kaikkien tietokohteiden viittaustunnusten alkuosan yhden tietovaraston sisällä. Tonttijaon tietomallin tietokohteissa paikallinen tunnus kuvataan attribuutilla ```nimiavaruus```.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-nimiavaruus-form" %}
Nimiavaruus on HTTP URI -muotoinen.
{% include clause_end.html %}

Nimiavaruus on syytä valita huolella siten, että se olisi mahdollisimman pysyvä, eikä sitä tarvitsisi tulevaisuudessa muuttaa esimerkiksi valtionhallinnon virastojen tai ministeriröiden mahdollisten uudelleenorganisointien ja -nimeämisten johdosta. Valittu URL-osoite tulee myös voida aina tarvittaessa ohjata kulloinkin käytössä olevaan rajapintapalveluun (HTTP redirect). 

{% include clause_start.html type="req" id="elinkaari/vaat-nimiavaruus-gen" %}
Tonttijaon tietovarasto vastaa ```nimiavaruus```-attribuuttien asetamisesta tallennustapahtuman yhteydessä. Tuottavan tietojärjestelmän mahdollisesti antamat arvot korvataan.
{% include clause_end.html %}

Esimerkki: ```http://uri.suomi.fi/object/rytj/tjs```

### Viittaustunnus
{% include clause_start.html type="req" id="elinkaari/vaat-viittaustunnus-maar" %}
Viittaustunnus yksilöi tontijakosuunnitelman tietokohteen yhden, keskitettyyn tonttijaon tietovaraston tallennetun, kehitysversion globaalisti. Tonttijaon tietomallin tietokohteissa paikallinen tunnus kuvataan attribuutilla ```viittausTunnus```.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-viittaustunnus-form" %}
Viittaustunnus on HTTP URI -muotoinen ja se muodostuu nimiavaruudesta, tietokohteen luokan nimestä ja paikallisesta tunnuksesta yhdessä kauttaviivoilla (```/```) erotettuina.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-nimiavaruus-gen" %}
Tonttijaon tietovarasto vastaa ```viittausTunnus```-attribuuttien asetamisesta tallennustapahtuman yhteydessä. Tuottavan tietojärjestelmän mahdollisesti antamat arvot korvataan.
{% include clause_end.html %}

Tallentavan tietojärjestelmän ei siis tarvitse tallentaa luotuja viittaustunnuksia itselleen seuraavia tallennuksia varten.

{% include clause_start.html type="rec" id="elinkaari/suos-viittaustunnus-ohj" %}
Viittaustunnuksen on suositeltavaa ohjautua aina ko. tietokohteen version tietosisältöön kulloinkin toiminnassa olevassa kaavatietovaraston latauspalvelussa.
{% include clause_end.html %}

Esimerkki: ```http://uri.suomi.fi/object/rytj/tjs/SpatialPlan/640bff6b-c16a-4947-af8d-d86f89106be1.b05cf48d46d8c905c54522f44b0a12daff11604e```

### Tuottajakohtainen tunnus

{% include clause_start.html type="req" id="elinkaari/vaat-tuottajakohtainen-tunnus-maar" %}
Tonttijakosuunnitelmaa koskevaa tietoa tuottavat järjestelmät voivat niin halutessaan käyttää tuottajakohtaista tunnusta niiden omien tietojärjestelmäspesifisten tunnusten antamiseen tietomallin kohteille. Tonttijakomallin tietokohteissa tuottajakohtainen tunnus kuvataan attribuutilla ```tuottajakohtainenTunnus```.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-tuottajakohtainen-tunnus-gen" %}
Tonttijaon tietovarasto ei koskaan muuta tuottavan tietojärjestelmän mahdollisesti asettamia tuottajakohtaisia tunnuksia, ja ne palautetaan sellaisenaan ladattaessa tietokohteita tietovarastosta.
{% include clause_end.html %}

Tietojärjestelmät voivat käyttää tuottajakohtaisia tunnuksia kohdistamaan tonttijaon tietovarastoon ja paikallisiin tietojärjestelmiin tallennettuja tietokohteita toisiinsa esimerkiksi päivitettäessä niiden tallennuksen yhteydessä syntyneitä tunnuksia, vertailtaessa tonttijaon tietovarastoon tallennettuja kohteita ja paikallisia kohteita toisiinsa, sekä esitettäessä validointipalvelun tuloksia suunnitteluohjelmiston käyttäjälle.

Tuottajakohtaisilta tunnuksilta ei vaadita yksilöivyyttä tai mitään tiettyä yhtenäistä muotoa, mutta UUID-muodon käyttäminen tarjoaa hyvin määritellyn ja standardoidun tavan luoda tuottajakohtaisista tunnuksista yksilöiviä eri tietojärjestelmien kesken. Tästä saattaa olla etua haluttaessa tehdä tuotettavista tonttijakoa koskevista tiedoista mahdollisimman järjestelmäriippumattomia ja esimerkiksi taata tuottajakohtaisten tunnusten yksilöivyys yli mahdollisten tonttijakosuunnitelmia tuottavien tietojärjestelmien vaihdosten ja päivitysten. 

{% include clause_start.html type="rec" id="elinkaari/suos-tuottajakohtainen-tunnus-form" %}
Tuottajakohtaisen tunnuksen suositeltu muoto on UUID.
{% include clause_end.html %}

Esimerkki: ```123e4567-e89b-12d3-a456-426655440000```

### Kaavatunnus
{% include clause_start.html type="req" id="elinkaari/vaat-kaavatunnus-maar" %}
Kaavatunnus on kaavalle ennakolta haettava, kaavan kansallisesti yksilöivä tunnus. Tonttijaon tietomallissa kaavatunnus kuvataan [Kaava](dokumentaatio/#kaava)-luokan attribuutilla ```kaavaTunnus```.
{% include clause_end.html %}

{% include clause_start.html type="rec" id="elinkaari/suos-kaavatunnus-form" %}
Kaavatunnuksen suositeltu muoto on UUID.
{% include clause_end.html %}

Esimerkki: ```df5b2d6f-d6d6-4695-938c-dd7c4c784c28```

{% include note.html content="Meidän pitää katsoa, miten ja mistä haetaan kaavatunnus, koska tjs:n osalta se on aina olemassa ensin." %}

### Pysyvien tunnusten palauttaminen tuottavalle järjestelmälle

Versionhallinnan näkökulmasta on tärkeää, että tonttijakosuunnitelman tuottava tietojärjestelmä käyttää saman suunnitelman seuraavan version tallentamisessa ensimmäisen version tallennuksen yhteydessä luotua identiteettitunnusta. Vastaavasti kaikkien tietokohteiden osalta käytetään niiden ensimmäisen tallennuksen yhteydessä luotuja identiteettitunnuksia, mikäli objektin katsotaan kuvaavan ko. tietokohteen uutta versiota.

{% include clause_start.html type="req" id="elinkaari/vaat-tunnusten-palautus" %}
Tietovaraston tallennusrajapinta palauttaa tallennetun tonttijakosuunnitelman tiedot tuottavalle tietojärjestelmälle tallennusoperaation yhteydessä siten, että ne sisältävät yllä mainittujen tunnustenhallintasääntöjen mukaisesti mahdollisesti generoidut tai muokatut identiteettitunnukset, paikalliset tunnukset, nimiavaruudet ja viittaustunnukset kaikille tallennetuille tietokohteille.
{% include clause_end.html %}

### Tonttijakosuunnitelman tietokohteisiin viittaaminen ja viitteiden ylläpito

{% include clause_start.html type="req" id="elinkaari/vaat-kaavan-sisaiset-viittaukset" %}
Saman tonttijakosuunnitelman tietokohteiden keskinäiset assosiaatiot toteutetaan viitattavan tietokohteen [paikallinenTunnus](#paikallinen-tunnus)-attribuuttia käyttäen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-tietovaraston-sisaiset-viittaukset" %}
Tonttijaon tietokohteen luokkien assosiaatiot eri suunnitelmien välillä tai tonttijakosuunnitelman ja muiden maankäyttöpäätösten tietokohteiden välillä toteutetaan viitattavan tietokohteen [viittaustunnus](#viittaustunnus)-attribuuttia käyttäen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-viittaukset-ulkoa" %}
Pysyvät viittaukset tonttijaon tietomallin ulkopuolelta tietomallin tietokohteisiin toteutetaan viitattavan tietokohteen [viittaustunnus](#viittaustunnus)-attribuuttia käyttäen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="elinkaari/vaat-viittaukset-tallennettaessa" %}
Tallennettaessa tonttijaon tietomallin tietokohteita tonttijaon tietovarastoon tietokohteiden tunnukset muuttuvat niiden pysyvään muotoon, kuten kuvattu luvussa [Tunnukset ja niiden hallinta](#tunnukset-ja-niiden-hallinta). Tonttijaon tietovaraston vastuulla on päivittää kunkin paikallisen tunnuksen muuttamisen yhteydessä myös kaikkien ko. tietokohteen versioon sen paikallisen tunnuksen avulla viittaavien muiden ko. suunnitelman tietokohteiden viittaukset käyttämään tietokohteen muutettua paikallista tunnusta.   
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
Kukin tonttijakosuunnitelman tai sen osien tallennusoperaatio yhteiseen tietovarastoon muodostaa uuden version tallennettavista tietokohteista, mikäli yksittäinen tietokohde on miltään osin muuttunut verrattuna sen edelliseen versioon. Myös muutokset muissa tietomallin tietokohteissa, joihin tietokohteesta on viittaus, lasketaan tietokohteen muutoksiksi. Tallennetun tietokohteen version sisältö ei voi muuttua tallennuksen jälkeen, poislukien sen voimassaolon päättymiseen, seuraavaan versioon linkittämiseen ja elinkaaritilaan liittyvät attribuutit, joita tietovarasto itse päivittää tietyissä tilanteissa.
{% include clause_end.html %}

Näin taataan ulkoisten viittausten eheys, sillä kaavan kaikkien kohteiden paikalliset ja viittaustunnukset viittaavat aina vain tiettyn, sisällöllisesti muuttumattomaan versioon viitatusta kohteesta. Suositeltavaa on, että kaikki tallennusversiot myös pidetään pysyvästi tallessa, jotta mahdolliset keskenäiset ja ulkopuolelta tulevat linkit eivät mene rikki muutosten yhteydessä.

### Muutosten leviäminen viittausten kautta
Tietomallin tietokohteiden keskinäiset viittaukset kohdistuvat aina viitattavien tietokohteiden tiettyyn versioon, ja toisaalta kaikki kohteiden sisällölliset muutokset johtavat uusien versioiden tallentamiseen. Siten kohteiden välisten linkkien kohdetietoa täytyy muuttaa mikäli halutaan viitata jollain tapaa muuttuneeseen kohteeseen. Tämä päivitystarve johtaa edelleen myös viittaavan tietokohteen uuden version luomiseen, vaikka ainoa muuttunut tieto olisi linkki uuteen versioon viitatusta tietokohteesta. Molempiin suuntiin tietokohteiden välillä tehty linkitys saattaa siten johtaa hyvin laajalle leviävään muutosketjuun. Muutosketjun liiallinen paisuminen voidaan välttää tekemällä linkitys tietokohteiden välillä vain yhteen suuntaan, esimerkiksi vain joko tonttijakosuunnitelmasta esitontteihin (ylhäältä alas) tai toisinpäin (alhaalta ylös). 

{% include question.html content="Leviävätkö muutosviittaukset tjs:n osalta yksi- vai kaksisuuntaisesti? Kuvataan tämä tietokohteittain" %}

Seuraavat muutosvittausketjut ovat yksisuuntaisia: 
- tietokohde
- tietokohde

Seuraavat muutosvittausketjut suhteet ovat kaksisuuntaisia: 
- tietokohde
- tietokohde

{% include note.html content="Kirjaa alle kattava esimerkki muutosketjusta. Tietokohteiden hierarkia ja esimerkiksi spatiaalinen elementti siinä. " %}

**Esimerkki**:

Tallennuspalveluun viedään tonttijakosuunnitelman ehdotus, jossa kahden esitontin välistä rajalinjaa muutetaan. Esitontin ````A```` määräala kasvaa 250 neliömetrillä, kun taas esitontin ````B```` määräala pienenee vastaavalla arvolla. Muihin tonttijakosuunnitelman tietokohteisiin ei kohdistu muutoksia. 

* Muuttuvista esitonteista muodostuu uudet versiot
* Miten tonttijakosuunnitelma muuttuu viittauksiltaan?
* Jos tonttijakosuunnitelma saa uuden versionumeron, miten kaikki muut sen alaiset tietokohteet reagoivat versioinniltaan?

### Yksittäisen tonttijakosuunnitelman elinkaaren vaiheisiin liittyvät muutokset
Tonttijakosuunnitelman tietomalli mahdollistaa tunnistettavien suunnitelman sisältämien tietokohteiden eri kehitysversioiden erottamisen toisistaan. Kullakin tietomallin kohteella on sekä sen tosimaailman identiteettiin liittyvä ns. identiteettitunnus että yksittäisen tallennusversion tunnus (paikallinen tunnus). Tallennettaessa uutta versiota samasta suunnitelmasta tai sen sisältämästä tietokohteesta, sen identiteettitunnus pysyy ennallaan, mutta sen paikallinen tunnus muuttuu. Tallennettaessa Tonttijakosuunnitelma-luokan objektia se katsotaan saman tietokohteen uudeksi versioksi, mikäli sen kaavatunnus on sama. Muiden kaavatietomallin versioitavien objektien suhteen vastaavuuden määritteleminen on tietoja tuottavien järjestelmien vastuulla: mikäli objektilla on tallennettavaksi lähetettäessä sama ```identititeettiTunnus```-attribuutin arvo kuin aiemmin tallennetulla, samantyyppisellä tietokohteella, katsotaan uusi objekti on saman tietokohteen uudeksi versioksi.

{% include clause_start.html type="req" id="elinkaari/vaat-version-korvaus" %}
Kun tonttijakosuunnitelman tietokohteesta tallennetaan uusi muuttunut versio, tulee tietokohteen edellisen version ```korvattuObjektilla```-assosiaatio asettaa viittaamaan tietokohteen uuteen versioon. Uuden tietokohteen version ```korvaaObjektin```-assosiaatio puolestaan asetetaan viittaamaan tietokohteen edelliseen, korvattavaan versioon. Molempien kohteiden ```tallennusAika```-attribuutin arvoksi asetetaan ajanhetki, jolloin tallennus ja muutos tonttijaon tietovarastoon on tehty.
{% include clause_end.html %}

Yksittäisen tietokohteen yksityiskohtainen muutoshistoria tonttijaon tietovarastossa saadaan seuraamalla sen ```korvattuObjektilla```- ja ```korvaaObjektin```-assosiaatioita. Ainoa muutos, joka ei näy tietokohteen omana versionaan, on kohteen kumoaminen, jolloin sen viimeisimmän version tietoja päivitetään sen elinkaaritilan, voimassaolon ja tallennusajan osalta.

{% include question.html content="Pitääkö [AbstraktiVersioituObjekti](dokumentaatio/#abstraktiversioituobjekti)-luokalle lisätä attribuutti ```ensimmainenTallennusAika```, joka kertoo ko. version alkuperäisen tallennusajan? Kumoamisen yhteydessä ```tallennusAika```-attribuutin arvoa muutetaan, jolloin hukkuu tieto ko. version alkuperäisestä tallennusajankohdasta." %}

Attribuutin ```viimeisinMuutos``` arvo kuvaa ajanhetkeä, jolloin ko. tietokohteeseen on tehty sisällöllinen muutos tiedontuottajan tietojärjestelmässä. Tiedontuottajan järjestelmän osalta ei vaadita tiukkaa versiontipolitiikkaa, eli ```paikallinenTunnus```-attribuutin päivittämistä jokaisen tietokohteen muutoksen johdosta. ```viimeisinMuutos```-attribuutin päivittämien riittää kuvaamaan tiedon todellisen muuttumisajankohdan.

### Tonttijakosuunnitelman käsittelytapahtumien elinkaari
Tonttijakosuunnitelman käsittelyprosessin historian kuvaa [AbstraktiTapahtuma](dokumentaatio/#abstraktitapahtuma)-luokasta periytyvä [Kasittelytapahtuma](dokumentaatio/#kasittelytapahtuma). Käsittelytapahtumat linkittyvät yksisuuntaisesti [AbstraktiMaankayttoasia](dokumentaatio/#abstraktimaankayttoasia)-luokkaan (myös Kaava-luokan yläluokka) päin.

{% include clause_start.html type="req" id="elinkaari/vaat-tapahtumien-poistaminen" %}
Kerran tallennettuja [AbstraktiTapahtuma](dokumentaatio/#abstraktitapahtuma)-luokan tietokohteita ei voi poistaa kaavatietovarastosta. Mikäli suunniteltu käsittelytapahtuma ei syystä tai toisesta toteudu tai käsittelytapahtumaan liittyvä päätös kumotaan, tulee sen attribuutti ```peruttu``` asettaa arvoon ```true```.
{% include clause_end.html %}

{% include question.html content="Tästä poistettu kaavatietomallissa ilmenevä ````vuorovaikutustapahtuma````. Tarvitaanko?" %}

{% include question.html content="Miten käsittelytapahtumat vaikuttavat versiointiin ja sen muutosketjuun?" %}

{% include question.html content="Miten tjs:n eri elinkaarikoodit vaikuttavat käsittelytapahtumiin?" %}

### Tonttijakosuunnitelman ja sen tietokohteiden voimaantulo
Tonttijakosuunnitelman ```voimassaoloAika``` -attribuutin alkuaika on ajanhetki, jolloin suunnitelma katsotaan voimaantulleeksi.

{% include clause_start.html type="req" id="elinkaari/vaat-voimassaoloaika" %}
Tonttijakosuunnitelma ja sen tietolajit ovat voimassa niiden ```voimassaoloAika```-attribuuttien määräämillä aikaväleillä. Mikäli ```voimassaoloAika```-attribuutin loppuaika puuttuu, on tietokohde voimassa toistaiseksi.
{% include clause_end.html %}

## Tonttijakosuunnitelman elinkaaren vaiheet ja elinkaaritila-attribuutin käyttö
Tonttijakosuunnitelman ja sen sisältämien määräysten elinkaareen liittyvää tilaa hallitaan ko. tietokohteiden ```elinkaaritila```-attribuutin ja sen mahdolliset arvot kuvaavan koodiston avulla. 

Koodisto kuvaa x mahdollista tilaa, joissa tonttijakosuunnitelma voi olla sen elinkaaren eri vaiheissa:
* [Kaavoitusaloite](https://koodistot.suomi.fi/codescheme;registryCode=rytj;schemeCode=RY_KaavanElinkaaritila)

Tonttijakosuunnitelma, jonka elinkaaritila x, y tai z on kesken, eli sen määräykset eivät (vielä) ole lainvoimaisia. Tonttijakosuunnitelma, jonka elinkaaritila on a, b tai c, on voimassa, ja sen määräyksiä tulee suunnitelman rajaamalla alueella noudattaa. Koodit d, e ja f kuvaavat kaavan tiloja, joissa tonttijakosuunnitelman elinkaari on päättynyt.

{% include note.html content="AK:lle ja YK:lle on Rytj:ssä määritelty omat elinkaarivaiheet, tarvitsemme omat. Viitataan niihin sitten." %}

### Sallitut tonttijakosuunnitelman elinkaaren tilan muutokset
Tonttijakosuunntelman elinkaaritila voi muuttua vain tässä luvussa kuvatuilla tavoilla.

{% include clause_start.html type="req" id="elinkaari/vaat-ensimmainen-elinkaaritila" %}
Tallennettaessa tonttijakosuunnitelmaa ensimmäistä kertaa yhteiseen tietovarastoon voi sen elinkaaritila olla jokin seuraavista ```digitaalinenAlkupera```-attribuutin arvoista:
   * [Tietomallin mukaan laadittu](http://uri.suomi.fi/codelist/rytj/RY_DigitaalinenAlkupera/code/01),
   * [Kokonaan digitoitu](http://uri.suomi.fi/codelist/rytj/RY_DigitaalinenAlkupera/code/02), 
   * [Osittain digitoitu](http://uri.suomi.fi/codelist/rytj/RY_DigitaalinenAlkupera/code/03) tai
{% include clause_end.html %}

{% include question.html content="Yllä olevat ovat suoraan kaavatietomallista. Olemmeko luomassa tjs:lle omaa ````digitaalinenAlkupera```` -koodistoa?" %}

{% include clause_start.html type="req" id="elinkaari/vaat-elinkaaritila-siirtymat" %}
Tonttijakosuunnitelman ```elinkaaritila```-attribuutin arvo voi kahden sen peräkkäisen tallennusversion välillä muuttua vain seuraavilla tavoilla:
* Tilasta ```Osittain voimassa``` tilaan ```Kumottu```.
* Tilasta ```Hylätty``` ei sallittuja siirtymiä.
{% include clause_end.html %}

{% include note.html content="Yllä listatut ovat vain esimerkkejä kaavatietomallista. Luodaan omat rajoitteet tjs:lle. " %}

<!--
## Esimerkkejä elinkaaritapahtumista

### Kaavan luominen ja muokkaus ennen ensimmäistä tallennusta kaavatietovarastoon

### Kaavan ensimmäinen tallennus kaavatietovarastoon

### Kaavan muokatun version tallennus kaavatietovarastoon

### Käsittely- tai vuorovaikutustapahtuman lisääminen

### Kaavan hyväksyminen

### Kaavan määrääminen voimaan osittain

### Kaavan voimaantulosta kuuluttaminen

### Kaavan, sen yksittäisten kaavamääräysten tai -suositusten kumoaminen
-->