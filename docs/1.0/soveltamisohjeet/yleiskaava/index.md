---
layout: "default"
title: "Kaavatietomalli - soveltamisprofiili - yleiskaava"
description: ""
page: "profiili-yk"
modelversion: "1.0"
status: "Keskeneräinen"
---
# Kaavatietomallin soveltamisprofiili yleiskaava-aineistoille
{:.no_toc}

1. 
{:toc}

## Johdanto

Tämän dokumentin vaatimukset ja suositukset muodostavat Kaavatietomallin loogisen tietomallin soveltamisprofiilin yleiskaava-aineistoille. Soveltamisprofiili kuvaa ne rajoitukset ja lisävaatimukset, joita tulee noudattaa Kaavatietomallin [UML-kielisen kuvauksen](../../looginenmalli/uml/) ja sen [sanallisen dokumentaation](../../looginenmalli/dokumentaatio/) soveltamisessa yleiskaavojen tietoaineistojen kuvaamiseen.

Tämän muodollisen dokumentin tietoja täydentää [Kaavatietomallin keittokirja - yleiskaava](./keittokirja.html), joka sisältää käytännön esimerkkejä Kaavatietomallin soveltamisesta yleiskaavoituksen kaavoitusratkaisuihin.

{% include clause_start.html type="req" id="prof-yk/vaat-yleiskaava-aineisto-maar" %}
Kaavatietomallin mukainen yleiskaava-aineisto koostuu [Kaava](../../looginenmalli/dokumentaatio/#kaava)-luokan instansseista, joiden ```laji```-attribuutin arvo on jokin [Kaavalajit]()-koodiston koodin [Yleiskaava](http://uri.suomi.fi/codelist/rytj/RY_Kaavalaji/code/2) [alakoodeista](../../looginenmalli/elinkaarisaannot.html#elinkaari-vaat-alakoodi-maar), sekä näihin instansseihin Kaavatietomallin mukaisesti liittyvistä muiden luokkien instansseista.
{% include clause_end.html %}

## Koodistot

### Vuorovaikutustapahtuman laji
{% include clause_start.html type="req" id="prof-yk/vaat-vuorovaikutustapahtuman-laji" %}
Luokan [AbstraktiVuorovaikutustapahtumanLaji](../../looginenmalli/dokumentaatio/#abstraktivuorovaikutustapahtumanlaji) sijaan tulee käyttää tarkentavaa luokkaa [KaavanVuorovaikutustapahtumanLaji](../../looginenmalli/dokumentaatio/#kaavanvuorovaikutustapahtumanlaji).
{% include clause_end.html %}

### Käsittelytapahtuman laji
{% include clause_start.html type="req" id="prof-yk/vaat-kasittelytapahtuman-laji" %}
Luokan [AbstraktiKasittelytapahtumanLaji](../../looginenmalli/dokumentaatio/#abstraktikasittelytapahtumanlaji) sijaan tulee käyttää tarkentavaa luokkaa [KaavanKasittelytapahtumanLaji](../../looginenmalli/dokumentaatio/#kaavankasittelytapahtumanlaji).
{% include clause_end.html %}

### Kaavakohdelaji
[AbstraktiKaavakohdelaji](../../looginenmalli/dokumentaatio/#abstraktikaavakohdelaji)-koodisto on varattu tulevaisuuden käyttöön. Tässä tietomalliin versiossa ei määritellä yleiskaavakohtaista koodistoa kaavakohdelajeille.

{% include clause_start.html type="req" id="prof-yk/vaat-kaavakohdelaji" %}
[Kaavakohde](../../looginenmalli/dokumentaatio/#kaavakohde)-luokan ```laji```-attribuuttia ei saa käyttää informaation välittämiseen. Mikäli sille on annettu ei-tyhjä arvo, se tulee jättää huomiotta.  
{% include clause_end.html %}

### Kaavoitusteema
{% include clause_start.html type="req" id="prof-yk/vaat-kaavoitusteema" %}
Luokan [AbstraktiKaavoitusteema](../../looginenmalli/dokumentaatio/#abstraktikaavoitusteema) sijaan tulee käyttää tarkentavaa luokkaa [KaavoitusteemaYleiskaava](../../looginenmalli/dokumentaatio/#kaavoitusteemayleiskaava).
{% include clause_end.html %}

### Kaavamääräyslaji
{% include clause_start.html type="req" id="prof-yk/vaat-kaavamaarayslaji" %}
Luokan [AbstraktiKaavamaaraysLaji](../../looginenmalli/dokumentaatio/#abstraktikaavamaarayslaji) sijaan tulee käyttää tarkentavaa luokkaa [KaavamaaraysLajiYleiskaava](../../looginenmalli/dokumentaatio/#kaavamaarayslajiyleiskaava).
{% include clause_end.html %}

### Kaavamääräyksen lisätiedon laji
{% include clause_start.html type="req" id="prof-yk/vaat-kaavamaarayksen-lisatieton-laji" %}
Luokan [AbstraktiLisatiedonLaji](../../looginenmalli/dokumentaatio/#abstraktilisatiedonlaji) sijaan tulee käyttää tarkentavaa luokkaa [LisatiedonLajiYleiskaava](../../looginenmalli/dokumentaatio/#lisatiedonlajiyleiskaava).
{% include clause_end.html %}

## Kaavamääräyslajien arvot ja lisätiedot

### Alueen käyttötarkoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01>

Ryhmittelyotsikko, vain koodin [alakoodeja](../../looginenmalli/elinkaarisaannot.html#elinkaari-vaat-alakoodi-maar) käytetään.

{% include clause_start.html type="req" id="prof-yk/vaat-alueen-kayttotarkoitus" %}
Kaikkien yleiskaavojen tietoaineistojen sisältämien [Kaavamaarays](../../looginenmalli/dokumentaatio/#kaavamaarays)-luokan instanssien, joiden ```laji```-attribuutin arvo on jokin [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01)-koodin alakoodi, osalta tulee noudattaa seuraavia rajoituksia:

* ```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.

* ```lisatieto```-attribuutin arvoina saa esiintyä nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Poisluettava käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_LisatiedonLaji_YK/code/04), ja jonka ```arvo```-attribuutin arvoina on yksi tai useampi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), jotka viittaavat koodiston KaavamääraysLaji koodin [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01) alakoodeihin. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

Poisluettavat käyttötarkoituslajit tulee valita siten, että ne kohdistuvat ```arvo```-attribuuttien avulla valittuun yleispiirteisempään joukkoon käyttötarkoituksia poislukien niistä osan. Esim. [Elinkeinot, työ ja tuotanto](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0103) poislukien [Ympäristöhäiriötä aiheuttava tuotantotoiminta](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/010313).

{% include question.html content="Tulisiko olla oma lisätiedon laji 'Käyttötarkoituksen osuus maapinta-alasta', jonka avulla voitaisiin määrätä käyttötarkoituksen jakautuminen tapauksissa, josssa kyse ei ole rakentamisesta tai kun sallittua kerrosalaa tai -tilavuutta ei määrätä kaavassa?" %}

### Rakentaminen
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/02>

Ryhmittelyotsikko, vain [alakoodeja](../../looginenmalli/elinkaarisaannot.html#elinkaari-vaat-alakoodi-maar) käytetään.

#### Rakennusala
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0201>

{% include clause_start.html type="req" id="prof-yk/vaat-rakennusala-maar" %}
Ilmaisee, että kaavakohteen alue on rakennusala. Mikäli rakennusaloja on määritelty jonkin suuremman kaavakohteen alueen sisälle, tulee rakennukset suuremman kaavakohteen alueella rakentaa siten, että ne sijoittuvat kokonaan jokin rakennusalan sisälle.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-rakennusala-arvot" %}
```arvo```-attribuutin mahdolliset arvot ovat seuraavat:
* Nolla tai useampi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), jotka kuvaa rakennusalalle rakennettavaksi tarkoitetun rakennuksen lajin viittaamalla koodistoon [Rakennusluokitus 2018](http://uri.suomi.fi/codelist/jhs/rakennus_1_20180712).
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-rakennusala-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Rakennuspaikka
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0202>

{% include clause_start.html type="req" id="prof-yk/vaat-rakennuspaikka-maar" %}
Ilmaisee, että kaavakohteen geometria kuvaa paikkaa, jolla on rakennus tai johon voidaan rakentaa yksi tai useampi rakennus.
{% include clause_end.html %}

{% include question.html content="Voiko yhteen rakennuspaikkaan rakentaa useamman rakennuksen?" %}

{% include clause_start.html type="req" id="prof-yk/vaat-rakennuspaikka-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-rakennuspaikka-lisatiedot" %}
```lisatieto```-attribuutin arvoina saa esiintyä nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Käyttötarkoituskohdistus](http://uri.suomi.fi/codelist/rytj/RY_Lisatiedonlaji_YK/code/02), jolla on täsmälleen yksi ```arvo``` lajia [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa johonkin [Rakennusluokitus 2018](http://uri.suomi.fi/codelist/jhs/rakennus_1_20180712)-koodiston koodiin. Mikäli vähintään yksi lisätieto on annettu, saa rakennuspaikkaan rakentaa vain lisätietojen avulla rajattuja rakennustyyppejä. Muun tyyppiset arvot eivät ole sallittuja
{% include clause_end.html %}


#### Asunnon rakennuspaikka
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0203>

{% include clause_start.html type="req" id="prof-yk/vaat-asunnon-rakennuspaikka-maar" %}
Ilmaisee, että kaavakohteen geometria kuvaa paikkaa, jolla on asuntorakennus tai johon voidaan rakentaa yksi tai useampi asuntorakennus.
{% include clause_end.html %}

{% include question.html content="Pitäisikö korvata yleisellä Rakennuspaikka-määräyksellä, jonka lisätietona Rakennusluokitus 2018:n koodi [Asuinrakennukset](http://uri.suomi.fi/codelist/jhs/rakennus_1_20180712/code/01)?" %}

{% include clause_start.html type="req" id="prof-yk/vaat-asunnon-rakennuspaikka-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-asunnon-rakennuspaikka-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Loma-asunnon rakennuspaikka
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0204>

{% include clause_start.html type="req" id="prof-yk/vaat-lom-as-rakennuspaikka-maar" %}
Ilmaisee, että kaavakohteen geometria kuvaa paikkaa, jolla on vapaa-ajan asuntorakennus tai johon voidaan rakentaa yksi tai useampi vapaan-ajan asuntorakennus.
{% include clause_end.html %}

{% include question.html content="Pitäisikö korvata yleisellä Rakennuspaikka-määräyksellä, jonka lisätietona Rakennusluokitus 2018:n koodi [Vapaa-ajan asuinrakennukset](http://uri.suomi.fi/codelist/jhs/rakennus_1_20180712/code/02)?" %}

{% include clause_start.html type="req" id="prof-yk/vaat-lom-as-rakennuspaikka-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-lom-as-rakennuspaikka-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Saunan rakennuspaikka
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0205>

{% include clause_start.html type="req" id="prof-yk/vaat-saunan-rakennuspaikka-maar" %}
Ilmaisee, että kaavakohteen geometria kuvaa paikkaa, jolla on vsaunarakennus tai johon voidaan rakentaa yksi tai useampi vapaan-ajan saunarakennus.
{% include clause_end.html %}

{% include question.html content="Pitäisikö korvata yleisellä Rakennuspaikka-määräyksellä, jonka lisätietona Rakennusluokitus 2018:n koodi [Saunarakennukset](http://uri.suomi.fi/codelist/jhs/rakennus_1_20180712/code/1910)?" %}

{% include clause_start.html type="req" id="prof-yk/vaat-saunan-rakennuspaikka-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-saunan-rakennuspaikka-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}


#### Maatalouden talouskeskuksen rakennuspaikka
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0206>

{% include clause_start.html type="req" id="prof-yk/vaat-mtk-rakennuspaikka-maar" %}
Ilmaisee, että kaavakohteen geometria kuvaa paikkaa, jolla on tai johon voidaan rakentaa tilan päärakennuksen ja sen yhteydessä olevien talousrakennusten muodostama kokonaisuus.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-mtk-rakennuspaikka-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-mtk-rakennuspaikka-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}


#### Sallittu kokonaiskerrosala
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0207>

{% include clause_start.html type="req" id="prof-yk/vaat-sallittu-kerrosala-arvot" %}
```arvo```-attribuutin mahdolliset arvot ovat seuraavat:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo sallitun rakentamiseen kokonaismäärän kerrosneliömetreinä (```k-m2```) sen kaavakohteen aluella, johon kaavamääräys on liitetty. Numeerisen arvon tai arvovälin minimi- ja maksimiarvojen on toteutettava [Real](../../looginenmalli/dokumentaatio/#real)-rajapinta.
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.
{% include clause_end.html %}


{% include clause_start.html type="req" id="prof-yk/vaat-sallittu-kerrosala-lisatiedot" %}
```lisatieto```-attribuutin arvoina saa esiintyä nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Käyttötarkoituksen osuus kerrosalasta](http://uri.suomi.fi/codelist/rytj/RY_Lisatiedonlaji_YK/code/01), jolla on täsmälleen kaksi arvoa:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat sallitun tiettyyn käyttötarkoitukseen kohdistettavan kerroalan määrän koko sallitusta kerrosalasta joko kerrosneliömetreinä (```k-m2```) tai prosentteina (```%```). Numeerisen arvon tai arvovälin minimi- ja maksimiarvojen on toteutettava [Real](../../looginenmalli/dokumentaatio/#real)-rajapinta.
* Yksi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa KaavamääraysLaji-koodiston koodin [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01) johonkin alakoodiin.
{% include clause_end.html %}

Mikäli sallittua rakentamisen määrää ei ole jaoteltu käyttötarkoituksittain, ei lisätietoja käytetä.

#### Aluetehokkuus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0208>

{% include clause_start.html type="req" id="prof-yk/vaat-aluetehokkuus-arvot" %}
```arvo```-attribuutin arvona saa esiintyä joko yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat rakennustehokkuden, eli alueen rakennusten yhteenlasketun kerrosalan suhteessa alueen pinta-alaan, sen kaavakohteen aluella, johon kaavamääräys on liitetty. Numeerisen arvon tai arvovälin minimi- ja maksimiarvojen on toteutettava [Real](../../looginenmalli/dokumentaatio/#real)-rajapinta. Ilmaistaan tehokkuuslukuna ```e```, yksikkönä ```k-m2/m2```. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-vaat-aluetehokkuus-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Pitäisikö korvata yleisellä Rakennustehokkuus-määräyksellä? Kaavakohde määrää onko kyse alueesta, korttelista vai tontista." %}

#### Korttelitehokkuus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0209>

{% include clause_start.html type="req" id="prof-yk/vaat-korttelitehokkuus-arvot" %}
```arvo```-attribuutin arvona saa esiintyä joko yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat rakennustehokkuden, eli alueen rakennusten yhteenlasketun kerrosalan suhteessa alueen pinta-alaan, sen kaavakohteen aluella, johon kaavamääräys on liitetty. Numeerisen arvon tai arvovälin minimi- ja maksimiarvojen on toteutettava [Real](../../looginenmalli/dokumentaatio/#real)-rajapinta. Ilmaistaan tehokkuuslukuna ```e```, yksikkönä ```k-m2/m2```. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-vaat-korttelitehokkuus-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Pitäisikö korvata yleisellä Rakennustehokkuus-määräyksellä? Kaavakohde määrää onko kyse alueesta, korttelista vai tontista." %}

#### Tonttitehokkuus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0210>

{% include clause_start.html type="req" id="prof-yk/vaat-tonttitehokkuus-arvot" %}
```arvo```-attribuutin arvona saa esiintyä joko yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat rakennustehokkuden, eli alueen rakennusten yhteenlasketun kerrosalan suhteessa alueen pinta-alaan, sen kaavakohteen aluella, johon kaavamääräys on liitetty. Numeerisen arvon tai arvovälin minimi- ja maksimiarvojen on toteutettava [Real](../../looginenmalli/dokumentaatio/#real)-rajapinta. Ilmaistaan tehokkuuslukuna ```e```, yksikkönä ```k-m2/m2```. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-vaat-tonttitehokkuus-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Pitäisikö korvata yleisellä Rakennustehokkuus-määräyksellä? Kaavakohde määrää onko kyse alueesta, korttelista vai tontista." %}

#### Sallittujen rakennuspaikkojen lukumäärä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0211>

{% include clause_start.html type="req" id="prof-yk/vaat-rakennuspaikkojen-maara-arvot" %}
```arvo```-attribuutin arvona saa esiintyä yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) joka kertoo sallitun rakennuspaikkojen enimmäismäärän sen kaavakohteen aluella, johon kaavamääräys on liitetty. Numeerisen arvon tai arvovälin minimi- ja maksimiarvojen on toteutettava [Integer](../../looginenmalli/dokumentaatio/#integer)-rajapinta. Yksikköä ei käytetä. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-rakennuspaikkojen-maara-lisatiedot" %}
```lisatieto```-attribuutin arvoina saa esiintyä nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Käyttötarkoituskohdistus](http://uri.suomi.fi/codelist/rytj/RY_Lisatiedonlaji_YK/code/02), jolla on täsmälleen yksi ```arvo``` lajia [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa johonkin [Rakennusluokitus 2018](http://uri.suomi.fi/codelist/jhs/rakennus_1_20180712)-koodiston koodiin. Mikäli vähintään yksi lisätieto on annettu, koskee rakennuspaikkojen lukumäärä vain lisätietojen avulla rajattuja rakennustyyppejä. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include question.html content="Pitäisikö poistaa otsikosta 'Sallittujen', AK-koodistossa on 'Rakennuspaikkojen lukumäärä" %}

#### Rakennuspaikan vähimmäiskoko
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0212>

{% include clause_start.html type="req" id="prof-yk/vaat-rak-paik-koko-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo), joka kertoo kaavakohteen alueen rakennuspaikkojen vähimmäiskoon neliömetreinä (```m2```). Numeerisen arvon tai arvovälin minimi- ja maksimiarvojen on toteutettava [Real](../../looginenmalli/dokumentaatio/#real)-rajapinta. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-rak-paik-koko-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Sallittu tuulivoimaloiden määrä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0213>

{% include clause_start.html type="req" id="prof-yk/vaat-tuulivoimaloiden-maara-arvot" %}
```arvo```-attribuutin arvona saa esiintyä joko yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat tuulivoimaloiden enimmäismäärän sen kaavakohteen aluella, johon kaavamääräys on liitetty. Numeerisen arvon tai arvovälin minimi- ja maksimiarvojen on toteutettava [Integer](../../looginenmalli/dokumentaatio/#integer)-rajapinta. Yksikköjä ei käytetä. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-tuulivoimaloiden-maara-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Vähittäiskaupan suuryksikön sallittu kerrosala
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0214>

{% include question.html content="Pitäisikö otsikon olla vain 'Vähittäiskaupan suuryksikkö'?" %}

{% include clause_start.html type="req" id="prof-yk/vaat-vah-kaup-suuryksikko-maar" %}
Ilmaisee, että kaavakohteen alueelle saa rakentaa vähittäiskaupan suuryksikön, eli yli 4 000 kerrosneliömetrin suuruisen vähittäiskaupan myymälän.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-vah-kaup-suuryksikko-arvot" %}
```arvo```-attribuutin mahdolliset arvot ovat seuraavat:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo suurimman sallitun vähittäiskaupan suuryksikön myymälän kerrosalan kerrosneliömetreinä (```k-m2```) sen kaavakohteen aluella, johon kaavamääräys on liitetty. Numeerisen arvon tai arvovälin minimi- ja maksimiarvojen on toteutettava [Real](../../looginenmalli/dokumentaatio/#real)-rajapinta.
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.
{% include clause_end.html %}

{% include question.html content="Pitäisikö sallia enimmäiskoon jättäminen pois, nyt pakollinen?" %}

{% include clause_start.html type="req" id="prof-yk/vaat-vah-kaup-suuryksikko-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Vähittäiskaupan myymäläkeskittymän sallittu kerrosala
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0215>

{% include clause_start.html type="req" id="prof-yk/vaat-vah-kaup-myym-kesk-maar" %}
Ilmaisee, että kaavakohteen alueelle saa rakentaa vähittäiskaupan myymäläkeskittymän, joka vaikutuksiltaan on verrattavissa vähittäiskaupan suuryksikköön.
{% include clause_end.html %}

{% include question.html content="Pitäisikö otsikon olla vain 'Vähittäiskaupan myymäläkeskittymä'?" %}

{% include clause_start.html type="req" id="prof-yk/vaat-vah-kaup-myym-kesk-arvot" %}
```arvo```-attribuutin mahdolliset arvot ovat seuraavat:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo suurimman sallitun vähittäiskaupan suuryksikön myymälän kerrosalan kerrosneliömetreinä (```k-m2```) sen kaavakohteen aluella, johon kaavamääräys on liitetty. Numeerisen arvon tai arvovälin minimi- ja maksimiarvojen on toteutettava [Real](../../looginenmalli/dokumentaatio/#real)-rajapinta.
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.
{% include clause_end.html %}

{% include question.html content="Pitäisikö sallia enimmäiskoon jättäminen pois, nyt pakollinen?" %}

{% include clause_start.html type="req" id="prof-yk/vaat-vah-kaup-myym-kesk-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

### Liikenne
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/03>

Ryhmittelyotsikko, vain [alakoodeja](../../looginenmalli/elinkaarisaannot.html#elinkaari-vaat-alakoodi-maar) käytetään.

{% include question.html content="Koodistossa koodit aakkosjärjestyksessä, saman tyyppiset asiat kaukana toisistaan (esim. 'Alueverkon pyöräilyreitti' ja 'Pyöräilyn pää- tai runkoreitti', 'Seutuverkon pyöräilyreitti'). Onko muu (järjestyksellä) ryhmittely tarpeen?" %}

#### Alueverkon pyöräilyreitti
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0301>

{% include clause_start.html type="req" id="prof-yk/vaat-alueverkon-pyorailyreitti-maar" %}
Ilmaisee, että kaavakohde kuvaa alueverkon pyöräilyreitin.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-alueverkon-pyorailyreitti-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-alueverkon-pyorailyreitti-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Pitäisikö yleistää muotoon 'Pyöräilyverkon reitti' ja lisätä lisätiedon laji 'Toiminnallinen luokka' ja koodisto 'Pyöräilyverkon toiminnallinen luokitus', jossa arvot 'Pääverkko', 'Alueellinen verkko' ja 'Paikallinen verkko', ks. [Jalankulku- ja pyöräilyväylien suunnittelu](https://julkaisut.vayla.fi/pdf8/lo_2014-11_jalankulku_pyorailyvaylien_web.pdf) (Liikenneviraston ohjeita 11-2014)?" %}

{% include question.html content="Mikä on tämän suhde määräykseen 'Pyöräilyn pää- tai runkoreitti'? Onko 'pyöräilyn pääverkon reitti' sama asia kuin 'pyöräilyn pääreitti' tai pyöräilyn runkoreitti'?" %}

#### Eritasoliittymä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0302>

{% include clause_start.html type="req" id="prof-yk/vaat-eritasoliittyma-maar" %}
Ilmaisee, että kaavakohde kuvaa eritasolittymän.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-eritasoliittyma-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-eritasoliittyma-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Eritasoristeys ilman liittymää
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0303>

{% include clause_start.html type="req" id="prof-yk/vaat-eritasoristeys-maar" %}
Ilmaisee, että kaavakohde kuvaa eritasoristeyksen ilman littymää.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-eritasoristeys-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-eritasoristeys-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Joukkoliikenteen runkoyhteys
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0304>

{% include clause_start.html type="req" id="prof-yk/vaat-joukkoliikenteen-runkoyhteys-maar" %}
Ilmaisee, että kaavakohde kuvaa joukkoliikenteen runkoyhteyden.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-joukkoliikenteen-runkoyhteys-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-joukkoliikenteen-runkoyhteys-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Kaksiajoratainen päätie tai -katu
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0305>

{% include clause_start.html type="req" id="prof-yk/vaat-paatie-katu-maar" %}
Ilmaisee, että kaavakohde kuvaa päätien tai -kadun.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-paatie-katu-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-paatie-katu-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Koodistossa 'Kaksiajoratainen päätie/-katu', kumpi muutetaan?" %}

{% include question.html content="Tulisiko yleistää muotoon 'Tie tai katu', ja lisätä lisätiedon laji 'Toiminnallinen luokka' ja koodisto 'Maanteiden ja katujen toiminnallinen luokitus', jossa esimerkiksi arvot 'Valtatie', 'Kantatie' ja 'Seututie', 'Yhdystie', 'Pääkatu', 'Alueellinen kokoojakatu', 'Paikallinen kokoojakatu', 'Tonttikatu' ks. [Väyläverkoston yhtenäinen luokittelu kunnossapidon suunnittelua varten](https://julkaisut.vayla.fi/pdf3/lts_2012-10_vaylaverkoston_yhtenainen_web.pdf) (Liikenneviraston tutkimuksia ja selvityksiä 10-2012) ja [Katupoikkileikkausten suunnitteluohjeet](https://www.hel.fi/hel2/ksv/Aineistot/Liikennesuunnittelu/Autoilu/katu1.pdf) (Helsingin kaupunki, Kaupunkisuunnitteluviraston Liikennesuunnitteluosasto 2001), sekä toinen lisätiedon laji 'Ajoratojen lukumäärä', jolle tässä NumeerinenArvo tai NumeerinenArvovali?" %}

#### Kevyen liikenteen reitti
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0306>

{% include clause_start.html type="req" id="prof-yk/vaat-kevyen-liikenteen-reitti-maar" %}
Ilmaisee, että kaavakohde kuvaa kevyen liikenteen (jalankulku tai pyöräily) reitin.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-kevyen-liikenteen-reitti-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-kevyen-liikenteen-reitti-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Kevyt liikenne terminä, jalankulku ja pyöräily erikseen?" %}

{% include question.html content="Miten suhtautuu määräykseen 'Ulkoilu- tai virkistysreitti'?" %}

{% include question.html content="Onko tavanomainen kevyen liikenteen/pyöräily/jalankulku väylä sama vai eri asia kuin tässä tarkoitettu reitti?" %}

#### Laivaväylä 
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0307>

{% include clause_start.html type="req" id="prof-yk/vaat-laivavayla-maar" %}
Ilmaisee, että kaavakohde kuvaa laivaväylän.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-laivavayla-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-laivavayla-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Liikennetunneli
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0308>

{% include clause_start.html type="req" id="prof-yk/vaat-liikennetunneli-maar" %}
Ilmaisee, että kaavakohde kuvaa liikennetunnelin.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-liikennetunneli-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-liikennetunneli-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Liittymä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0309>

{% include clause_start.html type="req" id="prof-yk/vaat-liittyma-maar" %}
Ilmaisee, että kaavakohde kuvaa liikenneliittymän.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-liittyma-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä yksi tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-liittyma-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Linja-autoasema / julkisen liikenteen vaihtopaikka / matkakeskus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0310>

{% include clause_start.html type="req" id="prof-yk/vaat-linja-autoas-vaihtop-matkakeskus-maar" %}
Ilmaisee, että kaavakohde kuvaa linja-autoaseman, julkisen liikenteen vaihtopaikan tai matkakeskuksen alueen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-linja-autoas-vaihtop-matkakeskus-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-linja-autoas-vaihtop-matkakeskus-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Metroasema
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0311>

{% include clause_start.html type="req" id="prof-yk/vaat-metroasema-maar" %}
Ilmaisee, että kaavakohde kuvaa metroaseman alueen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-metroasema-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-metroasema-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Onko tarpeenn kuvata (maanalaisen) metroaseman sisäänkäynti omana määräyksenään?" %}

#### Metrolinja
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0312>

{% include clause_start.html type="req" id="prof-yk/vaat-metrolinja-maar" %}
Ilmaisee, että kaavakohde kuvaa metrolinjan.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-metrolinja-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-metrolinja-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Moottoritie tai moottoriliikennetie
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0313>

{% include clause_start.html type="req" id="prof-yk/vaat-moottoritie-maar" %}
Ilmaisee, että kaavakohde kuvaa moottoritien tai moottoriliikennetien.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-moottoritie-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-moottoritie-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Tulisiko yleistää muotoon 'Tie tai katu', ja lisätä lisätiedon laji 'Toiminnallinen luokka' ja koodisto 'Maanteiden ja katujen toiminnallinen luokitus', jossa esimerkiksi arvot 'Valtatie', 'Kantatie' ja 'Seututie', 'Yhdystie', 'Pääkatu', 'Alueellinen kokoojakatu', 'Paikallinen kokoojakatu', 'Tonttikatu' ks. [Väyläverkoston yhtenäinen luokittelu kunnossapidon suunnittelua varten](https://julkaisut.vayla.fi/pdf3/lts_2012-10_vaylaverkoston_yhtenainen_web.pdf) (Liikenneviraston tutkimuksia ja selvityksiä 10-2012) ja [Katupoikkileikkausten suunnitteluohjeet](https://www.hel.fi/hel2/ksv/Aineistot/Liikennesuunnittelu/Autoilu/katu1.pdf) (Helsingin kaupunki, Kaupunkisuunnitteluviraston Liikennesuunnitteluosasto 2001), sekä toinen lisätiedon laji 'Ajoratojen lukumäärä', jolle tässä NumeerinenArvo tai NumeerinenArvovali?" %}

{% include question.html content="Koodistossa 'Moottori- tai moottoriliikennetie, kumpi muutetaan?" %}

#### Moottorikelkkailureitti
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0314>

{% include clause_start.html type="req" id="prof-yk/vaat-moottorikelkkailureitti-maar" %}
Ilmaisee, että kaavakohde kuvaa moottorikelkkailureitin.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-moottoritie-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-moottoritie-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Pysäkki tai seisake
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0315>

{% include clause_start.html type="req" id="prof-yk/vaat-pysakki-seisake-maar" %}
Ilmaisee, että kaavakohde kuvaa moottorikelkkailureitin.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-pysakki-seisake-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-pysakki-seisake-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include tip.html content="Pysäkin tai seisakkeen kuvaava Kaavakohde voidaan linkittää reitin tai väylän kuvaavaan Kaavakohteeseen ```liittyvaKohde```-assosiaation avulla." %}

{% include question.html content="Koodistossa 'Pysäkki/seisake, kumpi muutetaan?" %}

#### Pyöräilyn pää- tai runkoreitti
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0316>

{% include clause_start.html type="req" id="prof-yk/vaat-pyorailyn-paareitti-maar" %}
Ilmaisee, että kaavakohde kuvaa pyöräilyn pää- tai runkoreitin.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-pyorailyn-paareitti-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-pyorailyn-paareitti-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Koodistossa 'pää-/runkoreitti', kumpi muutetaan?" %}

{% include question.html content="Ehkä tarpeeton, ks. avoin kysymys kohdassa [Alueverkon pyöräilyreitti](#alueverkon-py%C3%B6r%C3%A4ilyreitti)?" %}

#### Päärata
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0317>

{% include clause_start.html type="req" id="prof-yk/vaat-paarata-maar" %}
Ilmaisee, että kaavakohde kuvaa raideliikenteen pääradan.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-paarata-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-paarata-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Raitiotie tai pikaraitiotie
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0318>

{% include clause_start.html type="req" id="prof-yk/vaat-raitiotie-pikaraitiotie-maar" %}
Ilmaisee, että kaavakohde kuvaa raitiotien tai pikaraitiotien.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-raitiotie-pikaraitiotie-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-raitiotie-pikaraitiotie-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Koodistossa 'Raitiotie/Pikaraitiotie', kumpi muutetaan?" %}

#### Ratsastusreitti
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0319>

{% include clause_start.html type="req" id="prof-yk/vaat-ratsastusreitti-maar" %}
Ilmaisee, että kaavakohde kuvaa ratsastusreitin.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-ratsastusreitti-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-ratsastusreitti-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Rautatieasema
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0320>

{% include clause_start.html type="req" id="prof-yk/vaat-rautatieasema-maar" %}
Ilmaisee, että kaavakohde kuvaa rautatieaseman alueen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-ratsastusreitti-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-ratsastusreitti-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Seututie tai pääkatu
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0321>

{% include clause_start.html type="req" id="prof-yk/vaat-seututie-paakatu-maar" %}
Ilmaisee, että kaavakohde kuvaa seututien tai pääkadun.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-seututie-paakatu-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-seututie-paakatu-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Koodistossa 'Seututie/pääkatu', kumpi muutetaan?" %}

{% include question.html content="Tulisiko yleistää muotoon 'Tie tai katu', ja lisätä lisätiedon laji 'Toiminnallinen luokka' ja koodisto 'Maanteiden ja katujen toiminnallinen luokitus', jossa esimerkiksi arvot 'Valtatie', 'Kantatie' ja 'Seututie', 'Yhdystie', 'Pääkatu', 'Alueellinen kokoojakatu', 'Paikallinen kokoojakatu', 'Tonttikatu' ks. [Väyläverkoston yhtenäinen luokittelu kunnossapidon suunnittelua varten](https://julkaisut.vayla.fi/pdf3/lts_2012-10_vaylaverkoston_yhtenainen_web.pdf) (Liikenneviraston tutkimuksia ja selvityksiä 10-2012) ja [Katupoikkileikkausten suunnitteluohjeet](https://www.hel.fi/hel2/ksv/Aineistot/Liikennesuunnittelu/Autoilu/katu1.pdf) (Helsingin kaupunki, Kaupunkisuunnitteluviraston Liikennesuunnitteluosasto 2001), sekä toinen lisätiedon laji 'Ajoratojen lukumäärä', jolle tässä NumeerinenArvo tai NumeerinenArvovali?" %}

#### Seutuverkon pyöräilyreitti
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0322>

{% include clause_start.html type="req" id="prof-yk/vaat-seutuverkon-pyorailyreitti-maar" %}
Ilmaisee, että kaavakohde kuvaa seutuverkon pyöräilyreitin, eli kuntaa laajemmalla alueella oleva pyöräilyn verkon, joka muodostuu eri kuntien pääverkkojen osista.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-seutuverkon-pyorailyreitti-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-seutuverkon-pyorailyreitti-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}


#### Suuntaisliittymä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0323>

{% include clause_start.html type="req" id="prof-yk/vaat-suuntaisliittyma-maar" %}
Ilmaisee, että kaavakohde kuvaa suuntaisliittymän alueen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-suuntaisliittyma-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-suuntaisliittyma-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}


#### Ulkoilu- tai virkistysreitti
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0324>

{% include clause_start.html type="req" id="prof-yk/vaat-ulkoilu-virkistysreitti-maar" %}
Ilmaisee, että kaavakohde kuvaa ulkoilu- tai virkistysreitin.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-ulkoilu-virkistysreitti-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-ulkoilu-virkistysreitti-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Valta- tai kantatie
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0325>

{% include clause_start.html type="req" id="prof-yk/vaat-valta-kantatie-maar" %}
Ilmaisee, että kaavakohde kuvaa valta- tai kantatien.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-valta-kantatie-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-valta-kantatie-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Koodistossa 'Valtatie/kantatie', kumpi muutetaan?" %}

{% include question.html content="Tulisiko yleistää muotoon 'Tie tai katu', ja lisätä lisätiedon laji 'Toiminnallinen luokka' ja koodisto 'Maanteiden ja katujen toiminnallinen luokitus', jossa esimerkiksi arvot 'Valtatie', 'Kantatie' ja 'Seututie', 'Yhdystie', 'Pääkatu', 'Alueellinen kokoojakatu', 'Paikallinen kokoojakatu', 'Tonttikatu' ks. [Väyläverkoston yhtenäinen luokittelu kunnossapidon suunnittelua varten](https://julkaisut.vayla.fi/pdf3/lts_2012-10_vaylaverkoston_yhtenainen_web.pdf) (Liikenneviraston tutkimuksia ja selvityksiä 10-2012) ja [Katupoikkileikkausten suunnitteluohjeet](https://www.hel.fi/hel2/ksv/Aineistot/Liikennesuunnittelu/Autoilu/katu1.pdf) (Helsingin kaupunki, Kaupunkisuunnitteluviraston Liikennesuunnitteluosasto 2001), sekä toinen lisätiedon laji 'Ajoratojen lukumäärä', jolle tässä NumeerinenArvo tai NumeerinenArvovali?" %}

#### Varattu joukkoliikenteelle
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0326>

{% include clause_start.html type="req" id="prof-yk/vaat-valta-kantatie-maar" %}
Ilmaisee, että kaavakohde kuvaa joukkoliikenteelle varatun alueen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-valta-kantatie-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-valta-kantatie-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}


#### Varikko
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0327>

{% include clause_start.html type="req" id="prof-yk/vaat-varikko-maar" %}
Ilmaisee, että kaavakohde kuvaa varikkoalueen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-varikko-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-varikko-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Venesatama tai -valkama 
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0328>

{% include clause_start.html type="req" id="prof-yk/vaat-venesatama-valkama-maar" %}
Ilmaisee, että kaavakohde kuvaa venesataman tai valkaman.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-venesatama-valkama-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-venesatama-valkama-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include tip.html content="Venesataman tai valkaman kuvaava Kaavakohde voidaan linkittää reitin tai väylän kuvaavaan Kaavakohteeseen ```liittyvaKohde```-assosiaation avulla." %}

#### Veneväylä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0329>

{% include clause_start.html type="req" id="prof-yk/vaat-venevayla-maar" %}
Ilmaisee, että kaavakohde kuvaa veneväylän.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-venevayla-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-venevayla-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Tulisiko yleistää muotoon 'vesiväylä', ja lisätä lisätiedon laji 'Toiminnallinen luokka' ja koodisto 'Vesiväylän toiminnallinen luokitus', jossa arvot 'Julkinen kulkuväylä', 'yleinen paikallisväylä' ja 'Yksityinen kulkuväylä', ks. [Vesilaki 3§, Määritelmät](https://finlex.fi/fi/laki/ajantasa/2011/20110587#a587-2011)" %}

#### Yhdys-, sivu- tai kaupunkirata
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0330>

{% include clause_start.html type="req" id="prof-yk/vaat-yhdys-sivu-kaupunkirata-maar" %}
Ilmaisee, että kaavakohde kuvaa raideliikenteen yhdys-, sivu- tai kaupunkiradan.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-yhdys-sivu-kaupunkirata-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-yhdys-sivu-kaupunkirata-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Koodistossa 'Yhdysrataa/sivurata/kaupunkirata', kumpi muutetaan?" %}

#### Yhdystie tai kokoojakatu
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0331>

{% include clause_start.html type="req" id="prof-yk/vaat-yhdystie-kokoojakatu-maar" %}
Ilmaisee, että kaavakohde kuvaa yhdystien tai kokoojakadun.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-yhdystie-kokoojakatu-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-yhdystie-kokoojakatu-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Koodistossa 'Yhdystie/kokoojakatu', kumpi muutetaan?" %}

{% include question.html content="Tulisiko yleistää muotoon 'Tie tai katu', ja lisätä lisätiedon laji 'Toiminnallinen luokka' ja koodisto 'Maanteiden ja katujen toiminnallinen luokitus', jossa esimerkiksi arvot 'Valtatie', 'Kantatie' ja 'Seututie', 'Yhdystie', 'Pääkatu', 'Alueellinen kokoojakatu', 'Paikallinen kokoojakatu', 'Tonttikatu' ks. [Väyläverkoston yhtenäinen luokittelu kunnossapidon suunnittelua varten](https://julkaisut.vayla.fi/pdf3/lts_2012-10_vaylaverkoston_yhtenainen_web.pdf) (Liikenneviraston tutkimuksia ja selvityksiä 10-2012) ja [Katupoikkileikkausten suunnitteluohjeet](https://www.hel.fi/hel2/ksv/Aineistot/Liikennesuunnittelu/Autoilu/katu1.pdf) (Helsingin kaupunki, Kaupunkisuunnitteluviraston Liikennesuunnitteluosasto 2001), sekä toinen lisätiedon laji 'Ajoratojen lukumäärä', jolle tässä NumeerinenArvo tai NumeerinenArvovali?" %}

#### Liityntäpysäköinti
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0334>

{% include clause_start.html type="req" id="prof-yk/vaat-liityntapysakointi-maar" %}
Ilmaisee, että kaavakohde kuvaa yhdystien tai kokoojakadun.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-liityntapysakointi-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-liityntapysakointi-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include tip.html content="Liityntäpysäköinnin kuvaava Kaavakohde voidaan linkittää liittyviä tie- ja raideliikenteen reittejä ja väyliä kuvaaviin Kaavakohteisiin ```liittyvaKohde```-assosiaation arvojen avulla." %}

#### Muu liikenteeseen liittyvä määräys
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0335>

{% include clause_start.html type="req" id="prof-yk/vaat-muu-liikenne-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä yksi tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka kuvaa kaavamääräyksen.  Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-muu-liikenne-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

### Kehittämisperiaatteet
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/04>

Ryhmittelyotsikko, vain [alakoodeja](../../looginenmalli/elinkaarisaannot.html#elinkaari-vaat-alakoodi-maar) käytetään.

#### Yhdyskuntarakenteen laajenemissuunta
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0401>

{% include clause_start.html type="req" id="prof-yk/vaat-yhdyskuntarakenteen-laajenemissuunta-arvot" %}
```arvo```-attribuutin mahdolliset arvot ovat seuraavat:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo yhdyskuntarakenteen laajenemissuunnan asteina (```deg```). Numeerisen arvon tai arvovälin minimi- ja maksimiarvojen on toteutettava [Real](../../looginenmalli/dokumentaatio/#real)-rajapinta.
* Nolla tai useampi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), jotka viittaavat koodiston KaavamääraysLaji koodin [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01) alakoodeihin, ja joiden avulla voidaan kuvata laajenevan yhdyskuntarakenteen käyttötarkoitukset.

Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-yhdyskuntarakenteen-laajenemissuunta-geometria" %}
[Kaavakohteen](../../looginenmalli/dokumentaatio/#kaavakohde), johon liittyy Yhdyskuntarakenteen laajenemissuunta -lajin kaavamääräys, ```geometria```-attribuutin arvon tulee olla pistemäinen, ja sen tulee sijaita paikassa, josta yhdyskuntarakenne laajenee ```arvo```-attribuutin osoittamaan suuntaan.  
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-yhdyskuntarakenteen-laajenemissuunta-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Yhdyskuntarakenteen mahdollinen laajenemisalue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0402>

{% include clause_start.html type="req" id="prof-yk/vaat-yhdyskuntarakenteen-laajenemisalue-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), jotka viittaavat koodiston KaavamääraysLaji koodin [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01) alakoodeihin, ja joiden avulla voidaan kuvata laajenevan yhdyskuntarakenteen käyttötarkoitukset. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-yhdyskuntarakenteen-laajenemisalue-geometria" %}
[Kaavakohteen](../../looginenmalli/dokumentaatio/#kaavakohde), johon liittyy Yhdyskuntarakenteen mahdollinen laajenemisalue -lajin kaavamääräys, ```geometria```-attribuutin arvon tulee olla aluemainen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-yhdyskuntarakenteen-laajenemissuunta-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Alueen eheyttämis- tai tiivistämistarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0403>

{% include clause_start.html type="req" id="prof-yk/vaat-alueen-eheyttamis-tiivistamistarve-maar" %}
Ilmaisee, että kaavakohde kuvaa alueen, jonka sisällä kaupunkirakennetta on tarpeen eheyttää tai tiivistää.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-alueen-eheyttamis-tiivistamistarve-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.  Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-alueen-eheyttamis-tiivistamistarve-geometria" %}
[Kaavakohteen](../../looginenmalli/dokumentaatio/#kaavakohde), johon liittyy Alueen eheyttämis- tai tiivistämistarve -lajin kaavamääräys, ```geometria```-attribuutin arvon tulee olla aluemainen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-alueen-eheyttamis-tiivistamistarve-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Ohjeellinen tai vaihtoehtoinen tielinjaus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0404>

{% include clause_start.html type="req" id="prof-yk/vaat-ohjeellinen-vaihtoehtoinen-tielinjaus-maar" %}
Ilmaisee, että kaavakohde kuvaa tielinjauksen, jonka sijainti on ohjeellinen tai joka on vaihtoehtoinen toisen kaavassa esitetyn tielinjauksen kanssa.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-ohjeellinen-vaihtoehtoinen-tielinjaus-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.  Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-ohjeellinen-vaihtoehtoinen-tielinjaus-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-ohjeellinen-vaihtoehtoinen-tielinjaus-liittyva-kohde" %}
[Kaavakohteen](../../looginenmalli/dokumentaatio/#kaavakohde), johon liittyy Ohjeellinen tai vaihtoehtoinen tielinjaus -lajin kaavamääräys, ja joka kuvaa yhden tai useamman toisen tielinjauksen kanssa vaihtoehtoista tielinjausta, assosiaation ```liittyvaKohde``` tulee viitata näitä vaihtoehtoisia tielinjauksia kuvaaviin Kaavakohteisiin. Assosiaation ```rooli```-attribuutin arvon tulee ilmaista, että liittyvä kohde on vaihtoehtoinen." %}
{% include clause_end.html %}

{% include question.html content="Tielinjaus-määräyksestä tulisi voida päätellä tien toiminnallinen luokitus, jota voidaan käyttää esim. kaavan visualisoinnissa. Tulisiko tätä varten lisätä lisätiedon laji 'Toiminnallinen luokka' ja koodisto 'Maanteiden ja katujen toiminnallinen luokitus', jossa esimerkiksi arvot 'Valtatie', 'Kantatie' ja 'Seututie', 'Yhdystie', 'Pääkatu', 'Alueellinen kokoojakatu', 'Paikallinen kokoojakatu', 'Tonttikatu' ks. [Väyläverkoston yhtenäinen luokittelu kunnossapidon suunnittelua varten](https://julkaisut.vayla.fi/pdf3/lts_2012-10_vaylaverkoston_yhtenainen_web.pdf) (Liikenneviraston tutkimuksia ja selvityksiä 10-2012) ja [Katupoikkileikkausten suunnitteluohjeet](https://www.hel.fi/hel2/ksv/Aineistot/Liikennesuunnittelu/Autoilu/katu1.pdf) (Helsingin kaupunki, Kaupunkisuunnitteluviraston Liikennesuunnitteluosasto 2001), sekä toinen lisätiedon laji 'Ajoratojen lukumäärä', jolle tässä NumeerinenArvo tai NumeerinenArvovali?" %}

#### Tieliikenteen yhteystarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0405>

{% include clause_start.html type="req" id="prof-yk/vaat-tieliikenteen-yhteystarve-maar" %}
Ilmaisee, että kaavakohde kuvaa tieliikenteen yhteystarpeen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-tieliikenteen-yhteystarve-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.  Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-tieliikenteen-yhteystarve-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Tieliikenteen yhteystarve -määräyksestä tulisi voida päätellä tien toiminnallinen luokitus, jota voidaan käyttää esim. kaavan visualisoinnissa. Tulisiko tätä varten lisätä lisätiedon laji 'Toiminnallinen luokka' ja koodisto 'Maanteiden ja katujen toiminnallinen luokitus', jossa esimerkiksi arvot 'Valtatie', 'Kantatie' ja 'Seututie', 'Yhdystie', 'Pääkatu', 'Alueellinen kokoojakatu', 'Paikallinen kokoojakatu', 'Tonttikatu' ks. [Väyläverkoston yhtenäinen luokittelu kunnossapidon suunnittelua varten](https://julkaisut.vayla.fi/pdf3/lts_2012-10_vaylaverkoston_yhtenainen_web.pdf) (Liikenneviraston tutkimuksia ja selvityksiä 10-2012) ja [Katupoikkileikkausten suunnitteluohjeet](https://www.hel.fi/hel2/ksv/Aineistot/Liikennesuunnittelu/Autoilu/katu1.pdf) (Helsingin kaupunki, Kaupunkisuunnitteluviraston Liikennesuunnitteluosasto 2001), sekä toinen lisätiedon laji 'Ajoratojen lukumäärä', jolle tässä NumeerinenArvo tai NumeerinenArvovali?" %}

#### Joukkoliikenteen kehittämiskäytävä tai yhteystarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0406>

{% include clause_start.html type="req" id="prof-yk/vaat-joukkoliikenteen-yhteystarve-maar" %}
Ilmaisee, että kaavakohde kuvaa joukkoliikenteen kehittämiskäytävän tai yhteystarpeen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-joukkoliikenteen-yhteystarve-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-joukkoliikenteen-yhteystarve-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Kevyen liikenteen yhteystarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0407>

{% include clause_start.html type="req" id="prof-yk/vaat-kevyen-liikenteen-yhteystarve-maar" %}
Ilmaisee, että kaavakohde kuvaa kevyen liikenteen yhteystarpeen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-kevyen-liikenteen-yhteystarve-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-kevyen-liikenteen-yhteystarve-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Johdon, putken tai linjan yhteystarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0408>

{% include clause_start.html type="req" id="prof-yk/vaat-johdon-putken-linjan-yhteystarve-maar" %}
Ilmaisee, että kaavakohde kuvaa johdon, putken tai linjan yhteystarpeen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-johdon-putken-linjan-yhteystarve-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-johdon-putken-linjan-yhteystarve-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Tarvitaanko koodistoon perustuva luokittelu johtoille, putkille ja linjoille?" %}

#### Viheryhteystarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0409>

{% include clause_start.html type="req" id="prof-yk/vaat-viheryhteystarve-maar" %}
Ilmaisee, että kaavakohde kuvaa viheryhteystarpeen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-viheryhteystarve-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-viheryhteystarve-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Virkistyksen yhteystarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0410>

{% include clause_start.html type="req" id="prof-yk/vaat-virkistyksen-yhteystarve-maar" %}
Ilmaisee, että kaavakohde kuvaa virkistyksen yhteystarpeen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-virkistyksen-yhteystarve-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-virkistyksen-yhteystarve-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Julkisen virkistyksen kehittämistarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0411>

{% include clause_start.html type="req" id="prof-yk/vaat-julkisen-virkistyksen-kehittamistarve-maar" %}
Ilmaisee, että kaavakohde kuvaa julkisen virkistyksen kehittämistarpeen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-julkisen-virkistyksen-kehittamistarve-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-julkisen-virkistyksen-kehittamistarve-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Kävely-ympäristön kehittämistarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0412>

{% include clause_start.html type="req" id="prof-yk/vaat-kavely-ympariston-kehittamistarve-maar" %}
Ilmaisee, että kaavakohde kuvaa kävely-ympäristön kehittämistarpeen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-kavely-ympariston-kehittamistarve-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-kavely-ympariston-kehittamistarve-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Kaupunkikuvallinen kehittämistarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0413>

{% include clause_start.html type="req" id="prof-yk/vaat-kaupunkikuvallinen-kehittamistarve-maar" %}
Ilmaisee, että kaavakohde kuvaa kaupunkikuvallisen kehittämistarpeen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-kaupunkikuvallinen-kehittamistarve-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-kaupunkikuvallinen-kehittamistarve-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Meluntorjuntatarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0414>

{% include clause_start.html type="req" id="prof-yk/vaat-meluntorjuntatarve-maar" %}
Ilmaisee, että kaavakohde kuvaa alueen, jolla esiintyy siinä määrin melua, että siitä voi aiheutua merkittävää haittaa. Meluntorjunta tulee huomioida alueen käyttöä ja rakentamista suunniteltaessa.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-meluntorjuntatarve-arvot" %}
```arvo```-attribuutin arvona saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), jolla kuvataan melun tyyppiä ja haitallisuutta. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-meluntorjuntatarve-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Ympäristö- tai maisemavaurion korjaustarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0415>

{% include clause_start.html type="req" id="prof-yk/vaat-ymparisto-maisemavaurion-korjaustarve-maar" %}
Ilmaisee, että kaavakohde kuvaa ympäristö- ja maisemavaurion korjaustarpeen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-ymparisto-maisemavaurion-korjaustarve-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä yksi tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-ymparisto-maisemavaurion-korjaustarve-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Terveyshaitan poistamistarve
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0416>

{% include clause_start.html type="req" id="prof-yk/vaat-terveyshaitan-korjaustarve-maar" %}
Ilmaisee, että kaavakohde kuvaa terveyshaitan korjaustarpeen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-terveyshaitan-korjaustarve-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä yksi tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-terveyshaitan-korjaustarve-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Uusi tai olennaisesti muuttuva alue 
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0418>

{% include clause_start.html type="req" id="prof-yk/vaat-uusi-olennaisesti-muuttuva-alue-maar" %}
Ilmaisee, että kaavakohde kuvaa alueen, joka kaavan vaikutuksesta muuttuu olennaisesti toisenlaiseksi.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-uusi-olennaisesti-muuttuva-alue-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-uusi-olennaisesti-muuttuva-alue-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Pienin toimenpitein kehitettävä alue
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0419>

{% include clause_start.html type="req" id="prof-yk/vaat-pienin-toimenpitein-keh-alue-maar" %}
Ilmaisee, että kaavakohde kuvaa alueen, joka kaavan kehitetään ohjausvaikutuksella pienin toimenpitein.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-pienin-toimenpitein-keh-alue-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-pienin-toimenpitein-keh-alue-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Virkistyskohde
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/1006>

{% include clause_start.html type="req" id="prof-yk/vaat-virkistyskohde-maar" %}
Ilmaisee, että kaavakohde kuvaa yleiseen virkistyskäyttöön tarkoitetun pienimuotoisen alueen tai kohteen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-virkistyskohde-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä yksi tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-virkistyskohde-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Löytyisikö tälle parempi yläluokka?" %}

#### Muu kehittämisperiaate
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0421>

{% include clause_start.html type="req" id="prof-yk/vaat-muu-kehittamisperiaate-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä yksi tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka kuvaa kaavamääräyksen.  Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-muu-kehittamisperiaate-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

### Rajoitukset
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/05>

Ryhmittelyotsikko, vain [alakoodeja](../../looginenmalli/elinkaarisaannot.html#elinkaari-vaat-alakoodi-maar) käytetään.

#### Rakentamisrajoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0501>

{% include clause_start.html type="req" id="prof-yk/vaat-rakentamisrajoitus-maar" %}
Ilmaisee, että kaavakohteen alueella ei saa rakentaa niin, että vaikeutetaan yleiskaavan toteutumista.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-rakentamisrajoitus-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.  Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-rakentamisrajoitus-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Pitääkö tätä voida rakenteistaa, vai riittääkö teksti? Esim. lisätä käyttötarkoituskohdistus tai pois luettava käyttötarkoitus?" %}

#### Määräaikainen rakentamisrajoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0502>

{% include clause_start.html type="req" id="prof-yk/vaat-maara-aikainen-rakentamisrajoitus-maar" %}
Ilmaisee, että kaavakohde on rakennustoimintaan tarkoitetun alue, jonka käyttö on kielletty enintään viiden vuoden aikana muuhun rakentamiseen kuin maatalouden ja muiden siihen verrattavien elinkeinojen tarpeita varten.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-maara-aikainen-rakentamisrajoitus-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä joko
* yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo), joka kuvaa sen kaavan hyväksymisestä alkavan ajanjakson pituuden, jona aikana käyttö on kielletty. Numeerisen arvon  on toteutettava [Integer](../../looginenmalli/dokumentaatio/#integer)-rajapinta. Yksikkönä vuosi (```v```), tai kuukausi (```kk```) tai
* yksi [Ajanhetkiarvo](../../looginenmalli/dokumentaatio/#ajanhetkiarvo), joka kuvaa päivämäärän, johon saakka käyttö on kielletty.
Muun tyyppiset arvot eivät ole sallittuja.

Lisäksi ```arvo```-attribuutin arvoina saa esiintyä yksi tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.

Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-maara-aikainen-rakentamisrajoitus-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Pitääkö tätä voida rakenteistaa, vai riittääkö teksti? Esim. lisätä käyttötarkoituskohdistus tai pois luettava käyttötarkoitus?" %}


#### Toimenpiderajoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0503>

{% include clause_start.html type="req" id="prof-yk/vaat-toimenpiderajoitus-maar" %}
Ilmaisee, että kaavakohteen alueella ei saa suorittaa maisemaa muuttavaa toimenpidettä ilman maisematyölupaa.
{% include clause_end.html %}

Maisematyölupa, ks. [MRL 128 §](https://www.finlex.fi/fi/laki/ajantasa/1999/19990132#L18P128).

{% include clause_start.html type="req" id="prof-yk/vaat-toimenpiderajoitus-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.  Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-toimenpiderajoitus-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Rakennuksen purkamisrajoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0504>

{% include clause_start.html type="req" id="prof-yk/vaat-purkamisrajoitus-maar" %}
Ilmaisee, että kaavakohteen alueella olevia rakennuksia tai niiden osia ei saa purkaa ilman purkamislupaa.
{% include clause_end.html %}

Rakennuksen purkamislupa, ks. [MRL 127 §](https://www.finlex.fi/fi/laki/ajantasa/1999/19990132#L18P127).

{% include clause_start.html type="req" id="prof-yk/vaat-purkamisrajoitus-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.  Muun tyyppiset arvot eivät ole sallittuja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-purkamisrajoitus-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

### Alueen osan erityisominaisuudet
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/06>

Kesken

### Ympäristöarvojen vaaliminen
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/07>

Kesken

### Yleismääräykset
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/08>

Kesken

### Yhdyskuntatekninen huolto
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/09>

Kesken

### Ympäristön ja terveyden suojelu
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/10>

Kesken

## Laatusäännöt
Nämä laatusäännöt laajentavat Kaavatietomallin [yleisiä laatusääntöjä](../../looginenmalli/laatusaannot.html).

### Aluevaraukset

{% include clause_start.html type="req" id="sov-yk/vaat-aluevaraus-maar" %}
Yleiskaavan aluevaraus on [Kaavakohde](dokumentaatio/#kaavakohde)-luokan objekti, joka liittyy assosiaatiolla ```maarays``` yhteen tai useampaan sellaiseen [Kaavamaarays](dokumentaatio/#kaavamaarays)-luokan objektiin, jonka ```laji```-attribuutin arvo on jokin [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01)-koodin alakoodeista.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-yk/vaat-aluemainen-aluevaraus" %}
Yleiskaavan aluevarausten ```geometria```-attribuutin kuvaamaan geometrian tulee olla aluemainen.
{% include clause_end.html %}
