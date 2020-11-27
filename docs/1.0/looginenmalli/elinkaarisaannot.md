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

### UUID-tunnukset

## Kaavatietomallin kohteiden elinkaaren hallinnan periaatteet
Kaavatietomallin mukaisten aineistojen tallentamisessa erotetaan toisistaan tietojen tuottaminen ja muokkaus sisäisesti niiden tuottamiseen ja muokkaamiseen käytettävissä tietojärjestelmissä ja niiden hallinta yhteisessä versiohallitussa tietovarastossa, kuten RYTJ.

Kaavatietomallissa ei ole mielekästä asettaa vaatimuksia kaavatietoa tuottavien tietojärjestelmien tunnusten ja versioden hallintaan, vaan tietomallissa tulee varautua siihen, että yhteiseen tietovarastoon tallennettavia tietoja on muokattu ja tallennettu sisäisesti tuntematon määrä kertoja ennen ensimmäistä viemistä yhteiseen tietovarastoon, ja samoin tuntematon määrä kertoja kunkin yhteiseen varastoon vietävän version välillä. Näin ollen on mahdollista, että kaavasta voi olla joissain tietojärjestelmissä tallennettuna paikallisia versiota, joita ei ole koskaan viety yhteiseen kaavatietovarastoon.

## Tunnukset ja niiden hallinta

### Identiteettitunnus (identityId)
Identiteettitunnus yhdistää saman tunnistettavan kaavan tietokohteen kehitysversiot toisiinsa.

Kahdella kaavatietomallin versiotavalla objektilla voi olla sama identiteettitunnus ainoastaan, mikäli kaikki seuraavista ehdoista ovat tosia:

* Molemmat objektit kuvaavat saman kaavan tai sen sisältämän, nimettävissä olevan tietokohteen kehityskaaren eri tiloja.
* Molemmat objektit liittyvät samaan kaavaan.
* Molemmat objektit ovat saman loogisen tietomallin luokan edustajia.

Yksittäisen kaavan tietokohteen koko ko. tietojärjestelmään tallennettu kehityshistoria saadaan noutamalla kaikki ko. tyyppisen tietokohteen objektit, joilla on sama identiteettitunnus.

Yhteinen kaavatietovarasto on vastuussa uusien identiteettitunnusten luomisesta tarvittaessa tallennustapahtumien yhteydessä, ja niiden välittämisestä tiedoksi tallentavalle tietojärjestelmälle. Tallentavan tietojärjestelmän tulee tallentaa itselleen kopiot tietovaraston tallennustapahtuman yhteydessä palautamistä kaavan ja sen tietokohteiden identiteettitunnuksista, sillä ne tulee sisällyttää ko. tietokohteiden seuraavien versioden tallennettavaksi lähetettäviin objekteihin.

Mikäli tallennettavalle tietokohteelle ei ole annettu identiteettitunnusta, tai tietovarasto ei sisällä saman luokan tietokohdetta, jolla on ko. identiteettitunnus, luodaan ko. kohteelle uusi identiteettitunnus, ja sitä pidetään uutena tietokohteena. Mikäli tietovarasto sisältää saman luokan tietokohteen, jolla on ko. identiteettitunnus, talletaan se sellaisenaan objektin mukana, ja sitä pidetään saman kohteen uutena versiona.

Identiteettitunnus on UUID-muotoinen. 

Esimerkki: ```640bff6b-c16a-4947-af8d-d86f89106be1```

### Paikallinen tunnus / kohdetunnus (localId / feature-id)
Paikallinen tunnus yksilöi kaavan tietokohteen yhden, keskitettyyn kaavatietovaraston tallentun kehitysversion kaavatietovaraston sisällä. 

Yhteinen kaavatietovarasto on vastuussa uusien paikallisten tunnusten luomisesta kullekin tallennettavalle tietokohteelle jokaisen tallennustapahtumien yhteydessä, ja niiden välittämisestä tiedoksi tallentavalle tietojärjestelmälle. Tallentavan tietojärjestelmän ei tarvitse tallentaa luotuja paikallisia tunnuksia itselleen seuraavia tallennuksia varten, sillä tietokohteiden mahdolliset paikallinen tunnus -kenttien arvot korvataan aina uusilla tietokohteiden tallennuksen yhteydessä.

Paikallisen tunnuksen muodostamisessa tulee välttää merkkejä, jotka joudutaan URL-koodaamaan rajapintapalvelujen kutsuissa. Paikkatietokohteen paikallista tunnusta käytetään fyysisten tietomallien pääavaimena, esim. GeoJSON Feature ```id```-omaisuuden ja GML:n ```gml:id```-attribuutin arvona, ja siten esimerkiksi OGC Web Feature Service (WFS) - ja OGC API - Features -rajapintapalvelujen paikkatietokohteen yksilöivissä kyselyissä.

Paikallinen tunnus koostuu UUID-muotoisesta identiteettitunnuksesta ja siihen erotinmerkillä liitetystä versiokohtaisesta, esimerkiksi tarkkaan tallennusajanhetkeen perustuvasta osasta. Tallennusajanhetkeen päättyvää paikallista tunnusta voidaan käyttää ilman sekaannusmahdollisuuksia samalla logiikalla myös paikallisissa versionneissa, eli sellaisissa kaavan versioiden tallennuksissa, joita ei viedä lainkaan yhteiseen tietovarastoon.

Esimerkki: ```640bff6b-c16a-4947-af8d-d86f89106be1.b05cf48d46d8c905c54522f44b0a12daff11604e```

{% include note.html content="Käyttämällä paikallisena tunnuksena pelkkää identiteettitunnuksesta riippumatonta UUID-tunnusta päästäisiin lyhyempiin tunnuksiin, mutta menetetään yhteys identiteettitunnusten ja paikallisten tunnusten välillä, mikä saattaa hankaloittaa erilaisten vikatilanteiden selvitystä ja toimintavarmuuden testaamista, kun pelkkien tunnusten perusteella ei voida päätellä ovatko kaksi objektia saman tietokohteen eri versioita." %}

### Nimiavaruus (namespace)

Nimiavaruus määrää kaavatietomallin kaikkien tietokohteiden HTTP URI -muotoisten viittaustunnusten alkuosan yhden tietovaraston (esim.RYTJ) sisällä. Nimiavaruus on syytä valita huolella siten, että se olisi mahdollisimman pysyvä, eikä sitä tarvitsisi tulevaisuudessa muuttaa esimerkiksi valtionhallinnon virastojen tai ministeriröiden mahdollisten uudelleenorganisointien ja -nimeämisten johdosta. Valittu URL-osoite tulee myös voida aina tarvittaessa ohjata kulloinkin käytössä olevaan rajapintapalveluun (HTTP redirect). 


Esimerkki: ```http://uri.suomi.fi/object/rytj/kaava```

### Viittaustunnus (referenceId)
Viittaustunnus yksilöi kaavan tietokohteen yhden, keskitettyyn kaavatietovaraston tallentun kehitysversion globaalisti.

Yhteinen kaavatietovarasto on vastuussa uusien viittaustunnusten luomisesta kullekin tallennettavalle tietokohteelle jokaisen tallennustapahtumien yhteydessä, ja niiden välittämisestä tiedoksi tallentavalle tietojärjestelmälle. Tallentavan tietojärjestelmän ei tarvitse tallentaa luotuja viittaustunnuksia itselleen seuraavia tallennuksia varten, sillä tietokohteiden mahdolliset viittaustunnus-kenttien arvot korvataan aina uusilla tietokohteiden tallennuksen yhteydessä.

Viittaustunnus on HTTP URI -muotoinen, ja sen on suositeltavaa ohjautua aina ko. tietokohteen version tietosisältöön kulloinkin toiminnassa olevassa rajapintapalvelussa. Viittaustunnus muodostuu nimiavaruudesta, tietokohteen luokan nimestä ja paikallisesta tunnuksesta yhdessä.

Esimerkki: ```http://uri.suomi.fi/object/rytj/kaava/SpatialPlan/640bff6b-c16a-4947-af8d-d86f89106be1.b05cf48d46d8c905c54522f44b0a12daff11604e```

### Tuottajakohtainen tunnus (producerSpecificId)
Kaavatietoa tuottavat järjestelmät voivat niin halutessaan käyttää tuottajakohtaista tunnusta niiden omien tietojärjestelmäspesifisten tunnusten tallentamiseen yhteiseen kaavatietovarastoon. Näitä tunnuksia ei koskaan muuteta tallennettaessa yhteiseen tietovarastoon, ja ne palautetaan sellaisenaan tietovarastosta haettaessa mikäli ne on annettu tallennettavien tietokohteiden osana. Tietojärjestelmät voivat käyttää tuottajakohtaisia tunnuksia kohdistamaan yhteiseen tietovarastoon ja paikallisiin tietojärjestelmiin tallennettuja tietokohteita toisiinsa esimerkiksi päivitettäessä niiden tallennuksen yhteydessä syntyneitä tunnuksia, vertailtaessa tietovarastoon tallennettuja kohteita ja paikallisia kohteita toisiinsa sekä esitettäessä validointipalvelun tuloksia suunnitteluohjelmiston käyttäjälle.

Tuottajakohtaisilta tunnuksilta ei vaadita yksilöivyyttä tai mitään tiettyä yhtenäistä muotoa.

Esimerkki: ```k-123445```

### Kaavatunnus (planId)
Kaavatunnus on kaavalle ennakkon haettava kansallisesti yksilöivä tunnus, joka tulee aina antaa tallettavan Kaava-luokan objektin osana, myös kaavan ensimmäisen tallennuksen yhteydessä. Käytännössä myönnetyt kaavatunnukset kannattaa tallentaa valmiiksi yhteiseen kaavatietovarastoon, jotta voidaan tarkistaa onko tallennettavaksi tarkoitettu kaavatunnus myönnetty organisaatiolle, jonka kaavaa ollaan tallentamassa. Kuntakoodin tai muun hallinnollisen alueen tunnuksen käyttö osana kaavatunnusta ei kuitenkaan ole suositeltavaa, sillä hallinnolliset alueet muuttuvat ajan kuluessa. Kun sidos tunnuksen ja hallinnollisen alueen välillä ei näy tunnuksessa, voidaan kaavan hallinnollista aluetta muuttaa joustavammin kaavan elinkaaren aikana.

Kaavatunnus ei koskaan muutu saman kaavan eri elinkaaren aikaisten versioiden tallennuksen yhteydessä.

Esimerkki: ```e822a3b0-2020```

## Muutokset ja tietojen versionti
Kukin kaavan tai sen osien tallennusoperaatio yhteiseen tietovarastoon muodostaa aina pysyvästi tallennettavan uuden version tallennettavista tiedoista, jota ei voi myöhemmin muokata. Näin taataan ulkoisten viittausten eheys, sillä kaavan kaikkien kohteiden paikalliset ja viittaustunnukset viittaavat aina vain tiettyn muuttumattomaan versioon viittatusta kohteesta. Suositeltavaa on, että kaikki tallennusversiot myös pidetään tallessa, jotta mahdolliset keskenäiset ja ulkopuolelta tulevat linkit eivät mene rikki, vaikka esim. tiettyä kaavan luonnosversiota korjattaisiin.

### Muutosten leviäminen viittausten kautta
Yhteisen tietovaraston hallintajärjestelmässä voidaan niin haluttaessa tarkistaa onko jokin kaava tai sen osa todellisuudessa muuttunut vai täysin identtinen sen edellisen version kanssa, ja olla tallentamatta uusia kopioita identtisistä saman tietokohteen versioista. Esimerkiksi tallennettaessa korjattu kaavaehdotus, jossa on muutettu ainoastaan yhden kaavamääräyskohteen yhtä kaavamääräystä, voitaisiin kaikkien kaavamääräyskohteiden ja niiden kaavamääräysten uudelleentallentamisen sijaan analysoida mitkä tietokohteet ovat todellisuudessa erilaisia tai uusia verrattuina edelliseen version ja tallentaa vain ne uusilla paikallisilla tunnuksilla ja viittaustunnuksilla. Niin oman tietosisällön kuin linkitystenkin suhteen identtiset tietokohteet voidaan yksinkertaisesti jättää tallentamatta, koska niitä vastaavat kohteen samoilla linkeillä ja tunnuksilla löytyvät jo tietovarastosta. Tästä on muutostenhallinnan suhteen sellaiset edut, että kunkin tietokohteen muutoshistoriaan ei kerry muutoksia, jossa sen tila ei todellisuudessa ole lainkaan muuttunut, ja toisaalta tallennustilaa voidaan jonkin verran säästää välttämällä duplikaattitietojen tallentaminen. 

Kuvatun kaltainen todellisuudessa muuttumattomien tietokohteiden tallentamisen välttäminen asettaa tietomallille ja sen keskinäisille linkityksille erityisvaatimuksen, että muutosten tahaton vyöryminen kohteesta toiseen pelkästään keskinäisten linkitysten päivittymisen kautta tulee minimoida. Koska tietokohteiden keskinäiset linkkaukset perustuvat viitattavien kohteiden versiokohtaisiin tunnuksiin, täytyy linkkejä muuttaa mikäli halutaan viitata muuttuneeseen kohteeseen. Koska tallennettuja tietoja ei voi muokata, johtaa tämä päivitystarve tietokohteen uuden version tallentamiseen, vaikka ainoa muuttunut tieto olisi linkki uuteen versioon viitatusta tietokohteesta. Molempiin suuntiin tietokohteiden välillä tehty linkitys saattaa siten johtaa tarpeettoman laajalle leviävään muutosketjuun. Muutosten leviämistä voidaan rajoittaa  kaikkiin kaavan tietokohteisiin voidaan välttää tekemällä linkitys tietokohteiden välillä vain yhteen suuntaan, esimerkiksi vain joko kaavasta kaavamääräyskohteisiin ja kaavamääräyskohteista kaavamääräyksiin (ylhäältä alas), tai toisinpäin (alhaalta ylös). 

Kaavatietomallissa kukin kaavamääräyskohde on linkitetty kahdensuuntaisesti kaavaan ja kukin kaavamääräys kahdensuuntaisesti joko suoraan kaavaan (yleismääräys) tai tiettyyn kaavamääräyskohteeseen. Tällöin yhden kaavamääräyksen muuttaminen johtaa uuden uuden version luomiseen muutettavan kaavämääräyksen lisäksi myös siihen linkitetystä kaavamääräyskohteesta, ja edelleen kaava-objektista, mikä puolestaan johtaa lopulta uusien versioiden luomiseen kaikista ko. kaavan muistakin kaavamääräyskohteista ja kaavamääräyksistä. Suorat linkit sekä kaavamääräyskohteista että kaavamääräyksistä kaavaluokan objekteihin mahdollistavat tehokkaat ja yksikertaiset hakuoperaatiot tiettyyn kaavan versioon liittyvien kaavamääräysten palauttamiseksi. Kaavaluokan viittaukset alaspäin sen sisältämiin kaavamääräyskohteisiin ja yleismääräyksen luoteisiin kaavamääräyksiin toisaalta tekevät navigoinnin helpoksi kaavan suunnasta ja toisaalta mahdollistavat kaavaan liittyvien kaavamääräyskohteiden ja kaavamääräysten poistamisen kaavan kehitysversioden välillä vain jättämällä ne pois seuraavasta tallennusversiosta: Ilman linkkejä kaavasta kaavamääräyksiin kaava-objekti voisi säilyä tallennuksessa muuttumattomana, vaikka tallennuksesta puuttuusikin yksi tai useampi aiemman version kaavamääräyskohde, ja koska kaava-objektista ei tällöin luotaisi uutta versiota, viittaisivat uudesta versiosta pois jätetyt kaavamääräyskohteet edelleen uusimpaan (muuttumattomaan) kaavan versioon yhdessä muutettujen ja uusien kaavamääräyskohteiden kanssa. Vastaavasti [Kaavaselostus](../../looginenmalli/dokumentaatio/#kaavaselostus)- ja [Kaava](../../looginenmalli/dokumentaatio/#kaava)-luokkien välinen assosiaatio on kaksisuuntainen, jolloin kumman tahansa muutos vaatii uudet versiot molemmista.

Kaavaprosessin historian kuvaavat [AbstraktiTapahtuma](../../looginenmalli/dokumentaatio/#abstraktitapahtuma)-luokasta perityt käsittely- ja vuorovaikutustapahtumat puolestaan on linkitetty vain [AbstraktiMaankayttoasia](../../looginenmalli/dokumentaatio/#abstraktimaankayttoasia)-luokkaan päin, jolloin niihin tehtävät muutokset eivät vaadi kaavaluokan objektin uuden version luomista. Samoin [Suunnittelija](../../looginenmalli/dokumentaatio/#suunnittelija)-luokan avulla kuvattu kaavan laatija viittaa vain yhdensuuntaisesti [Kaava](../../looginenmalli/dokumentaatio/#kaava)-luokkaan päin, koska laatijan tietojen päivittämisen ei katsota vaativan uuden version luomista kaava-objektista.

### Yksittäisen kaavan elinkaaren vaiheisiin liittyvät muutokset
Kaavatietomalli mahdollistaa tunnistettavien kaavan tietokohteiden eri kehitysversioiden erottamisen toisistaan. Kullakin tietomallin kohteella on sekä sen tosimaailman identiteettiin liittyvä ns. identiteettitunnus että yksittäisen tallennusversion tunnus (paikallinen tunnus). Tallennettaessa uutta versiota samasta kaavasta tai sen sisältämästä tietokohteesta, sen identiteettitunnus pysyy ennallaan, mutta sen paikallinen tunnus ja paikallinen tunnus muuttuvat. Kaava katsotaan samaksi, kun sen liittyy samaan kaavoitusprosessiin, ja siitä käytetään samaa ennen kaavan virelletuloa haettavaa kaavatunnusta. Muiden kaavatietomallin versioitavien objektien suhteen samuuden määritteleminen on tietoja yhteiseen tietovarastoon tuottavien järjestelmien vastuulla: mikäli objektilla on tallennettavaksi lähetettäessä saman identititeettitunnus kuin aiemmin tallennetulla tietokohteella, katsotaan sillä tarkoitettavan, että uusi objekti on saman tietokohteen uusi versio.

### Kaavamuutokset ja vaihekaavat


## Kaavatietomallin sisäisten viittausten ylläpito


## Kaavan elinkaaren vaiheet ja elinkaaritila-attribuutin käyttö
Kaavan ja sen sisältämien kaavamääräysten elinkaareen liittyvää tilaa hallitaan ko. tietokohteiden ```elinkaaritila```-attribuutin ja sen mahdollisen arvon kuvaavan [Elinkaaren tila](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila)-koodiston avulla. [Kaava](../../looginenmalli/dokumentaatio/#kaava)- ja [Kaavamaarays](../../looginenmalli/dokumentaatio/#kaavamaarays)-luokkien ```elinkaaritila```-attribuutit ovat pakollisia. Tavallisesti kaavan sisältämien kaavamääräysten elinkaaritilan arvo on sama kuin koko kaavalla, mutta osittaisen voimaan määräämisen tapauksessa ne eroavat toisistaan (ks. [Kaavan osittainen määrääminen voimaan](#kaavan-osittainen-m%C3%A4%C3%A4r%C3%A4%C3%A4minen-voimaan)).

## Kaavan ja sen tietokohteiden elinkaaren päättyminen

## Esimerkkejä elinkaaritapahtumista

### Kaavan luominen ja muokkaus ennen ensimmäistä RYTJ-tallennusta

### Kaavan ensimmäinen RYTJ-tallennus

### Kaavan muokatun version RYTJ-tallennus

### Käsittely- tai vuorovaikutustapahtuman lisääminen

### Kaavan hyväksyminen

### Kaavan voimaantulosta kuuluttaminen

### Kaavan osittainen määrääminen voimaan

> Kunnanhallitus voi valitusajan kuluttua määrätä yleis- ja asemakaavan tulemaan voimaan ennen kuin se on saanut lainvoiman kaava-alueen siltä osalta, johon valitusten tai oikaisukehotuksen ei voida katsoa kohdistuvan ([Maankäyttö- ja rakennuslaki 201 §](https://www.finlex.fi/fi/laki/ajantasa/1999/19990132#L26P201))

Määrättäessä kaava osittain voimaan, tulee [Kaava](../../looginenmalli/dokumentaatio/#kaava)-luokan ```elinkaaritila```-attribuutin arvoksi asettaa [Osittain voimassa](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/10), ja kullekin kaavamääräykselle erikseen niiden ```elinkaaritila```-attribuuttien arvoksi joko [Lainvoimainen](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/11) tai [Kumottu](http://uri.suomi.fi/codelist/rytj/KaavanElinkaariTila/code/12) riippuen siitä katsotaanko valitusten tai oikaisukehotusten kohdistuvan ko. kaavamääräykseen vai ei. Mikäli kaavamääräysten kumoaminen johtaa tilanteeseen, jossa kaavassa ei enää kohdistu mitään määräyksiä niiden kaavamääräyskohteiden alueille, joihin kumoamiset liittyvät, tulee harkita myös kaavan ```aluerajaus``` attribuutin päivittämistä vastaamaan kaavan todellista voimassaolevaa vaikutusaluetta. Siten on mahdollista, että voimassaolevaan kaavaan saattaa kuulua sellaisia kaavamääräyskohteita, jotka sijaitsevat kaavan lopullisen aluerajauksen ulkopuolella. Nämä voivat kuitenkin sisältävää ainoastaan kumottuja kaavamääräyksiä.

### Kaavan, sen yksittäisten kaavamääräyskohteiden tai kaavamääräysten kumoaminen



