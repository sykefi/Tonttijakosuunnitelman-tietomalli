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

### Kaavamääräyskohdelaji
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

* ```arvo```-attribuutin arvoina saa esiintyä vain nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. 

* ```lisatieto```-attribuutin arvoina saa esiintyä vain nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Poisluettava käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_LisatiedonLaji_YK/code/04), ja jonka ```arvo```-attribuutin arvoina on yksi tai useampi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), jotka viittaavat koodiston KaavamääraysLaji koodin [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01) alakoodeihin.
{% include clause_end.html %}

Poisluettavat käyttötarkoituslajit tulee valita siten, että ne kohdistuvat ```arvo```-attribuuttien avulla valittuun yleispiirteisempään joukkoon käyttötarkoituksia poislukien niistä osan. Esim. [Elinkeinot, työ ja tuotanto](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0103) poislukien [Ympäristöhäiriötä aiheuttava tuotantotoiminta](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/010313).

### Rakentaminen
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/02>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

#### Rakennusala
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0201>

{% include clause_start.html type="req" id="prof-yk/vaat-rakennusala-maar" %}
Ilmaisee, että kaavakohteen alue on rakennusala. Mikäli rakennusaloja on määritelty jonkin suuremman kaavakohteen alueen sisälle, tulee rakennukset suuremman kaavakohteen alueella rakentaa siten, että ne sijoittuvat kokonaan jokin rakennusalan sisälle.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-rakennusala-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä vain seuraavat:
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
```lisatieto```-attribuutin arvoina saa esiintyä vain nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Käyttötarkoituskohdistus](http://uri.suomi.fi/codelist/rytj/RY_Lisatiedonlaji_YK/code/02), jolla on täsmälleen yksi ```arvo``` lajia [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa johonkin [Rakennusluokitus 2018](http://uri.suomi.fi/codelist/jhs/rakennus_1_20180712)-koodiston koodiin. Mikäli vähintään yksi lisätieto on annettu, saa rakennuspaikkaan rakentaa vain lisätietojen avulla rajattuja rakennustyyppejä.
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
```arvo```-attribuutin arvoina saa esiintyä vain seuraavat:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo sallitun rakentamiseen kokonaismäärän kerrosneliömetreinä (```k-m2```) sen kaavakohteen aluella, johon kaavamääräys on liitetty.
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.
{% include clause_end.html %}


{% include clause_start.html type="req" id="prof-yk/vaat-sallittu-kerrosala-lisatiedot" %}
```lisatieto```-attribuutin arvoina saa esiintyä vain nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Käyttötarkoituksen osuus kerrosalasta](http://uri.suomi.fi/codelist/rytj/RY_Lisatiedonlaji_YK/code/01), jolla on täsmälleen kaksi arvoa:
   *  Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat sallitun tiettyyn käyttötarkoitukseen kohdistettavan kerroalan määrän koko sallitusta kerrosalasta joko kerrosneliömetreinä (```k-m2```) tai prosentteina (```%```).
   * Yksi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa KaavamääraysLaji-koodiston koodin [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01) johonkin alakoodiin.
{% include clause_end.html %}

Mikäli sallittua rakentamisen määrää ei ole jaoteltu käyttötarkoituksittain, ei lisätietoja käytetä.

#### Aluetehokkuus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0208>

{% include clause_start.html type="req" id="prof-yk/vaat-aluetehokkuus-arvot" %}
```arvo```-attribuutin arvona saa esiintyä vain joko yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat rakennustehokkuden, eli alueen rakennusten yhteenlasketun kerrosalan suhteessa alueen pinta-alaan, sen kaavakohteen aluella, johon kaavamääräys on liitetty. Ilmaistaan tehokkuuslukuna ```e```, yksikkönä ```k-m2/m2```.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-vaat-aluetehokkuus-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Pitäisikö korvata yleisellä Rakennustehokkuus-määräyksellä? Kaavakohde määrää onko kyse alueesta, korttelista vai tontista." %}

#### Korttelitehokkuus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0209>

{% include clause_start.html type="req" id="prof-yk/vaat-korttelitehokkuus-arvot" %}
```arvo```-attribuutin arvona saa esiintyä vain joko yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat rakennustehokkuden, eli alueen rakennusten yhteenlasketun kerrosalan suhteessa alueen pinta-alaan, sen kaavakohteen aluella, johon kaavamääräys on liitetty. Ilmaistaan tehokkuuslukuna ```e```, yksikkönä ```k-m2/m2```.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-vaat-korttelitehokkuus-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Pitäisikö korvata yleisellä Rakennustehokkuus-määräyksellä? Kaavakohde määrää onko kyse alueesta, korttelista vai tontista." %}

#### Tonttitehokkuus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0210>

{% include clause_start.html type="req" id="prof-yk/vaat-tonttitehokkuus-arvot" %}
```arvo```-attribuutin arvona saa esiintyä vain joko yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat rakennustehokkuden, eli alueen rakennusten yhteenlasketun kerrosalan suhteessa alueen pinta-alaan, sen kaavakohteen aluella, johon kaavamääräys on liitetty. Ilmaistaan tehokkuuslukuna ```e```, yksikkönä ```k-m2/m2```.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-vaat-tonttitehokkuus-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Pitäisikö korvata yleisellä Rakennustehokkuus-määräyksellä? Kaavakohde määrää onko kyse alueesta, korttelista vai tontista." %}

#### Sallittujen rakennuspaikkojen lukumäärä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0211>

{% include clause_start.html type="req" id="prof-yk/vaat-rakennuspaikkojen-maara-arvot" %}
```arvo```-attribuutin arvona saa esiintyä vain yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) joka kertoo sallitun rakennuspaikkojen enimmäismäärän sen kaavakohteen aluella, johon kaavamääräys on liitetty. Lukuarvoissa ei saa esiintyä nollasta poikkeavia desimaaleja. Yksikköä ei käytetä.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-rakennuspaikkojen-maara-lisatiedot" %}
```lisatieto```-attribuutin arvoina saa esiintyä vain nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Käyttötarkoituskohdistus](http://uri.suomi.fi/codelist/rytj/RY_Lisatiedonlaji_YK/code/02), jolla on täsmälleen yksi ```arvo``` lajia [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa johonkin [Rakennusluokitus 2018](http://uri.suomi.fi/codelist/jhs/rakennus_1_20180712)-koodiston koodiin. Mikäli vähintään yksi lisätieto on annettu, koskee rakennuspaikkojen lukumäärä vain lisätietojen avulla rajattuja rakennustyyppejä.
{% include clause_end.html %}

{% include question.html content="Pitäisikö poistaa otsikosta 'Sallittujen', AK-koodistossa on 'Rakennuspaikkojen lukumäärä" %}

#### Rakennuspaikan vähimmäiskoko
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0212>

{% include clause_start.html type="req" id="prof-yk/vaat-rak-paik-koko-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä nolla tai yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo), joka kertoo kaavakohteen alueen rakennuspaikkojen vähimmäiskoon neliömetreinä (```m2```).
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-rak-paik-koko-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Sallittu tuulivoimaloiden määrä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0213>

{% include clause_start.html type="req" id="prof-yk/vaat-tuulivoimaloiden-maara-arvot" %}
```arvo```-attribuutin arvona saa esiintyä vain joko yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat tuulivoimaloiden enimmäismäärän sen kaavakohteen aluella, johon kaavamääräys on liitetty. Lukuarvoissa ei saa esiintyä nollasta poikkeavia desimaaleja. Yksikköjä ei käytetä.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-tuulivoimaloiden-maara-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Vähittäiskaupan suuryksikön sallittu kerrosala
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0214>

{% include clause_start.html type="req" id="prof-yk/vaat-vah-kaup-suuryksikko-maar" %}
Ilmaisee, että kaavakohteen alueelle saa rakentaa vähittäiskaupan suuryksikön, eli yli 4 000 kerrosneliömetrin suuruisen vähittäiskaupan myymälän.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-vah-kaup-suuryksikko-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä vain seuraavat:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo suurimman sallitun vähittäiskaupan suuryksikön myymälän kerrosalan kerrosneliömetreinä (```k-m2```) sen kaavakohteen aluella, johon kaavamääräys on liitetty.
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-vah-kaup-suuryksikko-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Vähittäiskaupan myymäläkeskittymän sallittu kerrosala
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/0215>

{% include clause_start.html type="req" id="prof-yk/vaat-vah-kaup-myym-kesk-maar" %}
Ilmaisee, että kaavakohteen alueelle saa rakentaa vähittäiskaupan myymäläkeskittymän, joka vaikutuksiltaan on verrattavissa vähittäiskaupan suuryksikköön.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-vah-kaup-myym-kesk-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä vain seuraavat:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo suurimman sallitun vähittäiskaupan suuryksikön myymälän kerrosalan kerrosneliömetreinä (```k-m2```) sen kaavakohteen aluella, johon kaavamääräys on liitetty.
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.
{% include clause_end.html %}

{% include clause_start.html type="req" id="prof-yk/vaat-vah-kaup-myym-kesk-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

### Liikenne
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/03>

### Kehittämisperiaatteet
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/04>

### Rajoitukset
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/05>

### Alueen osan erityisominaisuudet
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/06>

### Ympäristöarvojen vaaliminen
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/07>

### Yleismääräykset
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/08>

### Yhdyskuntatekninen huolto
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/09>

### Ympäristön ja terveyden suojelu
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/10>


## Laatusäännöt
Nämä laatusäännöt laajentavat Kaavatietomallin [yleisiä laatusääntöjä](../../looginenmalli/laatusaannot.html).

### Aluevaraukset

{% include clause_start.html type="req" id="sov-yk/vaat-aluevaraus-maar" %}
Yleiskaavan aluevaraus on [Kaavakohde](dokumentaatio/#kaavakohde)-luokan objekti, joka liittyy assosiaatiolla ```maarays``` yhteen tai useampaan sellaiseen [Kaavamaarays](dokumentaatio/#kaavamaarays)-luokan objektiin, jonka ```laji```-attribuutin arvo on jokin [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_YK/code/01)-koodin alakoodeista.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-yk/vaat-aluemainen-aluevaraus" %}
Yleiskaavan aluevarausten ```geometria```-attribuutin kuvaamaan geometrian tulee olla aluemainen.
{% include clause_end.html %}
