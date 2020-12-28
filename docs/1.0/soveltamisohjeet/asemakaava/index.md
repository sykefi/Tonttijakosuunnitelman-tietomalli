---
layout: "default"
title: "Kaavatietomalli - soveltamisohjeet - asemakaava"
description: ""
page: "sov-asemakaava"
modelversion: "1.0"
status: "Keskeneräinen"
---
# Soveltamisohjeet - asemakaava
{:.no_toc}

1. 
{:toc}

## Soveltamisala

Tämä ohje koskee kaavatietomallin soveltamista sellaisiin [Kaava](../../looginenmalli/dokumentaatio/#kaava)-luokan instansseihin, joiden ```laji```-attribuutin arvo on jokin [Kaavalajit]()-koodiston koodin [Asemakaava](http://uri.suomi.fi/codelist/rytj/RY_Kaavalaji/code/3) alakoodeista, sekä näihin kaavoihin liittettäviin muihin kaavatietomallin määrittelemiin tietoihin.

## Kaavatietomallin soveltamisprofiili asemakaava-aineistoille
Tämän luvun vaatimukset ja suositukset muodostavat Kaavatietomallin loogisen tietomallin soveltamisprofiilin asemakaava-aineistoille. Soveltamisprofiili kuvaa ne rajoitukset ja lisävaatimukset, joita tulee noudattaa Kaavatietomallin [UML-kielisen kuvauksen](../../looginenmalli/uml/) ja sen [sanallisen dokumentaation](../../looginenmalli/dokumentaatio/) soveltamisessa asemakaavojen tietoaineistojen kuvaamiseen.

### Koodistot

#### Vuorovaikutustapahtuman laji
{% include clause_start.html type="req" id="sov-ak/vaat-vuorovaikutustapahtuman-laji" %}
Luokan [AbstraktiVuorovaikutustapahtumanLaji](../../looginenmalli/dokumentaatio/#abstraktivuorovaikutustapahtumanlaji) sijaan tulee käyttää tarkentavaa luokkaa [KaavanVuorovaikutustapahtumanLaji](../../looginenmalli/dokumentaatio/#kaavanvuorovaikutustapahtumanlaji).
{% include clause_end.html %}

#### Käsittelytapahtuman laji
{% include clause_start.html type="req" id="sov-ak/vaat-kasittelytapahtuman-laji" %}
Luokan [AbstraktiKasittelytapahtumanLaji](../../looginenmalli/dokumentaatio/#abstraktikasittelytapahtumanlaji) sijaan tulee käyttää tarkentavaa luokkaa [KaavanKasittelytapahtumanLaji](../../looginenmalli/dokumentaatio/#kaavankasittelytapahtumanlaji).
{% include clause_end.html %}

#### Kaavakohdelaji
[AbstraktiKaavakohdelaji](../../looginenmalli/dokumentaatio/#abstraktikaavakohdelaji)-koodisto on varattu tulevaisuuden käyttöön. Tässä tietomalliin versiossa ei määritellä asemakaavakohtaista koodistoa kaavakohdelajeille.

{% include clause_start.html type="req" id="sov-ak/vaat-kaavakohdelaji" %}
[Kaavakohde](../../looginenmalli/dokumentaatio/#kaavakohde)-luokan ```laji```-attribuuttia ei saa käyttää informaation välittämiseen. Mikäli sille on annettu ei-tyhjä arvo, se tulee jättää huomiotta.  
{% include clause_end.html %}

#### Kaavoitusteema
{% include clause_start.html type="req" id="sov-ak/vaat-kaavoitusteema" %}
Luokan [AbstraktiKaavoitusteema](../../looginenmalli/dokumentaatio/#abstraktikaavoitusteema) sijaan tulee käyttää tarkentavaa luokkaa [KaavoitusteemaAsemakaava](../../looginenmalli/dokumentaatio/#kaavoitusteemaasemakaava).
{% include clause_end.html %}

#### Kaavamääräyslaji
{% include clause_start.html type="req" id="sov-ak/vaat-kaavamaarayslaji" %}
Luokan [AbstraktiKaavamaaraysLaji](../../looginenmalli/dokumentaatio/#abstraktikaavamaarayslaji) sijaan tulee käyttää tarkentavaa luokkaa [KaavamaaraysLajiAsemakaava](../../looginenmalli/dokumentaatio/#kaavamaarayslajiasemakaava).
{% include clause_end.html %}

#### Kaavamääräyksen lisätiedon laji
{% include clause_start.html type="req" id="sov-ak/vaat-kaavamaarayksen-lisatieton-laji" %}
Luokan [AbstraktiLisatiedonLaji](../../looginenmalli/dokumentaatio/#abstraktilisatiedonlaji) sijaan tulee käyttää tarkentavaa luokkaa [LisatiedonLajiAsemakaava](../../looginenmalli/dokumentaatio/#lisatiedonlajiasemakaava).
{% include clause_end.html %}

### Kaavamääräyslajien arvot ja lisätiedot

#### Alueen käyttötarkoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01>

Ryhmittelyotsikko, vain koodin [alakoodeja](../../looginenmalli/elinkaarisaannot.html#elinkaari-vaat-alakoodi-maar) käytetään.

{% include clause_start.html type="req" id="sov-ak/vaat-alueen-kayttotarkoitus" %}
Kaikkien asemakaavojen tietoaineistojen sisältämien [Kaavamaarays](../../looginenmalli/dokumentaatio/#kaavamaarays)-luokan instanssien, joiden ```laji```-attribuutin arvo on jokin [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01)-koodin alakoodi, osalta tulee noudattaa seuraavia rajoituksia:

* ```arvo```-attribuutin arvoina saa esiintyä vain nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. 

* ```lisatieto```-attribuutin arvoina saa esiintyä vain nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Poisluettava käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_LisatiedonLaji_AK/code/04), ja jonka ```arvo```-attribuutin arvoina on yksi tai useampi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), jotka viittaavat koodiston [KaavamääraysLaji](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01) koodien [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01) tai [Alueen osan käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/02) alakoodeihin.
{% include clause_end.html %}

Poisluettavat käyttötarkoituslajit tulee valita siten, että ne kohdistuvat ```arvo```-attribuuttien avulla valittuun yleispiirteisempään joukkoon käyttötarkoituksia poislukien niistä osan. Esim. [Työ ja tuotanto](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/0106) poislukien [Alue, jolle saa sijoittaa merkittävän, vaarallisia kemikaaleja valmistavan tai varastoivan laitoksen](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/010604).


#### Alueen osan käyttötarkoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/02>

Ryhmittelyotsikko, vain [alakoodeja](../../looginenmalli/elinkaarisaannot.html#elinkaari-vaat-alakoodi-maar) käytetään.

{% include clause_start.html type="req" id="sov-ak/vaat-alueen-osan-kayttotarkoitus" %}
Kaikkien asemakaavojen tietoaineistojen sisältämien [Kaavamaarays](../../looginenmalli/dokumentaatio/#kaavamaarays)-luokan instanssien, joiden ```laji```-attribuutin arvo on jokin [Alueen osan käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/02)-koodin alakoodi, osalta tulee noudattaa seuraavia rajoituksia:

* ```arvo```-attribuutin arvoina saa esiintyä vain nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa. 

* ```lisatieto```-attribuutin arvoina saa esiintyä vain nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Poisluettava käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_LisatiedonLaji_AK/code/04), ja jonka ```arvo```-attribuutin arvoina on yksi tai useampi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), jotka viittaavat koodiston [KaavamääraysLaji](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01) koodin [Alueen osan käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/02) alakoodeihin.
{% include clause_end.html %}

Poisluettavat käyttötarkoituslajit tulee valita siten, että ne kohdistuvat ```arvo```-attribuuttien avulla valittuun yleispiirteisempään joukkoon käyttötarkoituksia poislukien niistä osan.

#### Rakentamisen määrä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji/code/03>

Ryhmittelyotsikko, vain [alakoodeja](../../looginenmalli/elinkaarisaannot.html#elinkaari-vaat-alakoodi-maar) käytetään.

##### Sallittu kerrosala
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/0301>

{% include clause_start.html type="req" id="sov-ak/vaat-sallittu-kerrosala-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä vain seuraavat:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo sallitun rakentamiseen kokonaismäärän kerrosneliömetreinä (```k-m2```) sen kaavakohteen aluella, johon kaavamääräys on liitetty.
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.
{% include clause_end.html %}


{% include clause_start.html type="req" id="sov-ak/vaat-sallittu-kerrosala-lisatiedot" %}
```lisatieto```-attribuutin arvoina saa esiintyä vain nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Käyttötarkoituksen osuus kerrosalasta](http://uri.suomi.fi/codelist/rytj/RY_Lisatiedonlaji_AK/code/01), jolla on täsmälleen kaksi arvoa:
   *  Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat sallitun tiettyyn käyttötarkoitukseen kohdistettavan kerroalan määrän koko sallitusta kerrosalasta joko kerrosneliömetreinä (```k-m2```) tai prosentteina (```%```).
   * Yksi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa [KaavamääraysLaji](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01) koodien [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01) tai [Alueen osan käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/02) johonkin alakoodiin.
{% include clause_end.html %}

Mikäli sallittua rakentamisen määrää ei ole jaoteltu käyttötarkoituksittain, ei lisätietoja käytetä.

##### Sallittu rakennustilavuus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/0302>

{% include clause_start.html type="req" id="sov-ak/vaat-sallittu-rakennustilavuus-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä vain seuraavat:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat sallitun rakentamisen kokonaismäärän kuutiometreinä (```m3```) sen kaavakohteen aluella, johon kaavamääräys on liitetty.
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-ak/vaat-sallittu-rakennustilavuus-lisatiedot" %}
```lisatieto```-attribuutin arvoina saa esiintyä vain nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Käyttötarkoituksen osuus kerrosalasta](http://uri.suomi.fi/codelist/rytj/RY_Lisatiedonlaji_AK/code/01), jolla on täsmälleen kaksi arvoa:
   *  Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat sallitun tiettyyn käyttötarkoitukseen kohdistettavan rakennustilavuuden määrän koko sallitusta rakennustilavuudesta joko kuutiometreinä (```k-m3```) tai prosentteina (```%```).
   * Yksi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa [KaavamääraysLaji](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01) koodien [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01) tai [Alueen osan käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/02) johonkin alakoodiin.
{% include clause_end.html %}

Mikäli sallittua rakentamisen määrää ei ole jaoteltu käyttötarkoituksittain, ei lisätietoja käytetä.

{% include question.html content="Tuleeko käyttää termiä 'kerroskuutiometri' vai riittääkö 'kuutiometri'? Miten rakennustilavuus lasketaan (vrt.kerrosneliömetrit)?" %}

{% include question.html content="Onko järkevää ilmaista sallittu rakennustilavuus eri kaavamääräyslajina kuin sallittu kerrosala. Nykyisellään rakenne on identtinen, vain yksiköt eroavat" %}

##### Tehokkuusluku
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/0303>

{% include clause_start.html type="req" id="sov-ak/vaat-tehokkuusluku-arvot" %}
```arvo```-attribuutin arvona saa esiintyä vain joko yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat rakennustehokkuden, eli alueen rakennusten yhteenlasketun kerrosalan suhteessa alueen pinta-alaan, sen kaavakohteen aluella, johon kaavamääräys on liitetty. Ilmaistaan tehokkuuslukuna ```e```, yksikkönä ```k-m2/m2```.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-ak/vaat-vaat-tehokkuusluku-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include question.html content="Pitäisikö määräyksen nimi olla Rakennustehokkuus, tehokkuusluku on tapa ilmaista käsite numerona?" %}

##### Maanpäällinen kerrosluku
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/0304>

{% include clause_start.html type="req" id="sov-ak/vaat-maanpaallinen-kerrosluku-arvot" %}
```arvo```-attribuutin arvona saa esiintyä vain joko yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat rakennusten maanpäällisten kerrosten sallitun lukumäärän sen kaavakohteen aluella, johon kaavamääräys on liitetty. Lukuarvoissa ei saa esiintyä nollasta poikkeavia desimaaleja. Yksikköjä ei käytetä.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-ak/vaat-maanpaallinen-kerrosluku-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

##### Maanalainen kerrosluku
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/0305>

{% include clause_start.html type="req" id="sov-ak/vaat-maanalainen-kerrosluku-arvot" %}
```arvo```-attribuutin arvona saa esiintyä vain joko yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat rakennusten maanalaisten kerrosten sallitun lukumäärän sen kaavakohteen aluella, johon kaavamääräys on liitetty. Lukuarvoissa ei saa esiintyä nollasta poikkeavia desimaaleja. Yksikköjä ei käytetä.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-ak/vaat-maanalainen-kerrosluku-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}


##### Kellarin sallittu kerrosalaosuus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/0306>

{% include clause_start.html type="req" id="sov-ak/vaat-kellarin-sallittu-kerrosalaosuus-arvot" %}
```arvo```-attribuutin arvona saa esiintyä vain joko yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat kuinka suuren osan kunkin rakennuksen suurimman kerroksen alasta saa kellarikerroksessa käyttää kerrosalaan luettavaksi tilaksi sen kaavakohteen aluella, johon kaavamääräys on liitetty. Ilmaistaan prosentteina (```%```).
{% include clause_end.html %}

{% include tip.html content="Murtolukuna ilmaistun osuuden voi ilmaista likimääräisesti myös arvovälinä, esim. ```1/3``` olisi ```33-34%```" %}

{% include clause_start.html type="req" id="sov-ak/vaat-kellarin-sallittu-kerrosalaosuus-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

##### Ullakon sallittu kerrosalaosuus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/0307>

{% include clause_start.html type="req" id="sov-ak/vaat-ullakon-sallittu-kerrosalaosuus-arvot" %}
```arvo```-attribuutin arvona saa esiintyä vain joko yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat kuinka suuren osan kunkin rakennuksen suurimman kerroksen alasta saa ullakkokerroksessa käyttää kerrosalaan luettavaksi tilaksi sen kaavakohteen aluella, johon kaavamääräys on liitetty. Ilmaistaan prosentteina (```%```).
{% include clause_end.html %}

{% include tip.html content="Murtolukuna ilmaistun osuuden voi ilmaista likimääräisesti myös arvovälinä, esim. ```1/3``` olisi ```33-34%```" %}

{% include clause_start.html type="req" id="sov-ak/vaat-ullakon-sallittu-kerrosalaosuus-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

##### Rakennuspaikkojen määrä
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/0308>

{% include clause_start.html type="req" id="sov-ak/vaat-rakennuspaikkojen-maara-arvot" %}
```arvo```-attribuutin arvona saa esiintyä vain yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) joka kertoo sallitun rakennuspaikkojen enimmäismäärän sen kaavamääräyskohteen aluella, johon kaavamääräys on liitetty. Lukuarvoissa ei saa esiintyä nollasta poikkeavia desimaaleja. Yksikköä ei käytetä.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-ak/vaat-rakennuspaikkojen-maara-lisatiedot" %}
```lisatieto```-attribuutin arvoina saa esiintyä vain nolla tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Käyttötarkoituskohdistus](http://uri.suomi.fi/codelist/rytj/RY_Lisatiedonlaji_AK/code/02), jolla on täsmälleen yksi ```arvo``` lajia [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa johonkin [Rakennusluokitus 2018](http://uri.suomi.fi/codelist/jhs/rakennus_1_20180712)-koodiston koodiin.
{% include clause_end.html %}

{% include note.html content="Käytetään tavallisesti vain ranta-asemakaavoissa" %}

##### Lisärakennusoikeus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/0309>

{% include clause_start.html type="req" id="sov-ak/vaat-lisarakennusoikeus-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä vain seuraavat:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo sallitun lisärakentamisen kokonaismäärän joko kerrosneliömetreinä (```k-m2```) tai kuutiometreinä (```m3```) sen kaavakohteen aluella, johon kaavamääräys on liitetty.
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.
{% include clause_end.html %}


{% include clause_start.html type="req" id="sov-ak/vaat-lisarakennusoikeus-lisatiedot" %}
```lisatieto```-attribuutin arvoina saa esiintyä vain yksi tai useampi [Lisatieto](../../looginenmalli/dokumentaatio/#lisatieto), jonka laji on [Käyttötarkoituksen osuus kerrosalasta](http://uri.suomi.fi/codelist/rytj/RY_Lisatiedonlaji_AK/code/01), jolla on täsmälleen kaksi arvoa:
   *  Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), jotka kertovat sallitun tiettyyn käyttötarkoitukseen kohdistettavan kerroalan määrän koko sallitusta kerrosalasta joko kerrosneliömetreinä (```k-m2```), kuutioina (```m3```) tai prosentteina (```%```).
   * Yksi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), joka viittaa [KaavamääraysLaji](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01) koodien [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01) tai [Alueen osan käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/02) johonkin alakoodiin.
{% include clause_end.html %}

{% include question.html content="Miten lisärakennusoikeus eroaa käyttötarkoituskohtaisesti sallitusta kerrosalasta tai rakennustilavuudesta? Missä tapauksissa lisärakennusoikeutta käytettäisiin? Nykyisellään rakenne on identtinen" %}

#### Rakennusten sijoitus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/04>

Ryhmittelyotsikko, vain [alakoodeja](../../looginenmalli/elinkaarisaannot.html#elinkaari-vaat-alakoodi-maar) käytetään.

##### Rakentamisen suhde alueen pinta-alaan
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/0401>

{% include clause_start.html type="req" id="sov-ak/vaat-rak-suhde-alueen-pinta-alaan-arvot" %}
```arvo```-attribuutin arvona saa esiintyä vain joko yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo kuinka suuren osan sen kaavakohteen pinta-alasta, johon kaavamääräys on liitetty, saa käyttää rakentamiseen. Ilmaistaan prosenttilukuna (```%```).
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-ak/vaat-rak-suhde-alueen-pinta-alaan-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

##### Etäisyys naapuritontin rajasta
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/0402>

{% include clause_start.html type="req" id="sov-ak/vaat-etaisyys-naapuritontin-rajasta-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä vain seuraavat:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo), joka kertoo rakennusten vähimmäisetäisyyden naapuritontin rajasta sen kaavakohteen alueella, johon kaavamääräys on liitetty. Yksikkönä metri (```m```).
* Nolla tai useampi [GeometriaArvo](../../looginenmalli/dokumentaatio/#geometriaarvo), joka on päällekkäin sen kaavakohteen geometrian osan kanssa, jonka puoleista osaa etäisyysvaatimus koskee.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-ak/vaat-etaisyys-naapuritontin-rajasta-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

##### Rakennusala
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/0403>

{% include clause_start.html type="req" id="sov-ak/vaat-rakennusala-maar" %}
Ilmaisee, että kaavakohteen alue on rakennusala. Mikäli rakennusaloja on määritelty jonkin suuremman kaavakohteen alueen sisälle, tulee rakennukset suuremman kaavakohteen alueella rakentaa siten, että ne sijoittuvat kokonaan jokin rakennusalan sisälle.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-ak/vaat-rakennusala-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä vain seuraavat:
* Nolla tai useampi [KoodiArvo](../../looginenmalli/dokumentaatio/#koodiarvo), jotka kuvaa rakennusalalle rakennettavaksi tarkoitetun rakennuksen lajin viittaamalla koodistoon [Rakennusluokitus 2018](http://uri.suomi.fi/codelist/jhs/rakennus_1_20180712).
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-ak/vaat-rakennusala-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

##### Rakennettava kiinni rajaan
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/0404>

{% include clause_start.html type="req" id="sov-ak/vaat-rakennettava-kiinni-rajaan-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä vain yksi tai useampi [GeometriaArvo](../../looginenmalli/dokumentaatio/#geometriaarvo), joka on päällekkäin sen kaavakohteen geometrian osan kanssa, johon alueen rakennukset tulee rakentaa kiinni.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-ak/vaat-rakennettava-kiinni-rajaan-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

##### Rakennuspaikka
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/0405>

{% include clause_start.html type="req" id="sov-ak/vaat-rakennuspaikka-maar" %}
Ilmaisee, että kaavakohteen geometria kuvaa paikkaa, jolla on rakennus tai johon voidaan rakentaa yksi tai useampi rakennus.
{% include clause_end.html %}

{% include question.html content="Voiko yhteen rakennuspaikkaan rakentaa useamman rakennuksen?" %}

{% include clause_start.html type="req" id="sov-ak/vaat-rakennuspaikka-arvot" %}
```arvo```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-ak/vaat-rakennuspaikka-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

{% include note.html content="Käytetään tavallisesti vain ranta-asemakaavoissa" %}

##### Muu rakennusten sijoitukseen liittyvä määräys
**Koodi**: <http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/0406>

{% include clause_start.html type="req" id="sov-ak/vaat-muu-rakennusten-sijoitus-arvot" %}
```arvo```-attribuutin arvoina saa esiintyä vain yksi tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-ak/vaat-muu-rakennusten-sijoitus-lisatiedot" %}
```lisatieto```-attribuutilla ei saa olla arvoja.
{% include clause_end.html %}

#### Rakentamistapa
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/03>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

##### Kattokaltevuus
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/031>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo rakennusten katon sallitun kaltevuuden asteina (```deg```) sen kaavamääräyskohteen alueella, johon kaavamääräys on liitetty.

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

##### Uloke
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/032>

Ilmaisee, että kaavamääräyskohteen geometria kuvaa liikenne- rautatie- tai katualueen osaa, johon saa sijoittaa yläpuolisen rakentamisen vaatimia kantavia rakenteita, jotka eivät haittaa liikennealueen käyttöä.

Mahdolliset ```arvo```-attribuutin arvot:
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

##### Rakennuksen harjasuunta
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/033>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo) tai yksi [NumeerinenArvovali](../../looginenmalli/dokumentaatio/#numeerinenarvovali), joka kertoo rakennusten katon harjan sallitun kompassisuunnan  asteina (```deg```) sen kaavamääräyskohteen alueella, johon kaavamääräys on liitetty.

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

##### Kulkuaukko
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/034>

Ilmaisee, että kaavamääräyskohteen geometria kuvaa paikka, johon rakennettavaan rakennukseen tulee jättää kulkuaukko.

Mahdolliset ```arvo```-attribuutin arvot:
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

##### Valokatteinen tila
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/035>

Ilmaisee, että kaavamääräyskohteen geometria kuvaa alueen osaa, johon tulee rakentaa valokatteinen tila.

Mahdolliset ```arvo```-attribuutin arvot:
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

##### Suora uloskäynti porrashuoneista
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/036>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi tai useampi [GeometriaArvo](../../looginenmalli/dokumentaatio/#geometriaarvo), joka on päällekkäin sen kaavamääräyskohteen geometrian osan kanssa, jolla tulee olla suora uloskäunti porrashuoneista.

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

##### Ei saa rakentaa ikkunoita
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/037>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi tai useampi [GeometriaArvo](../../looginenmalli/dokumentaatio/#geometriaarvo), joka on päällekkäin sen kaavamääräyskohteen geometrian osan kanssa, jonka puoleisten rakennusten seiniin ei saa sijoittaa ikkunoita.

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

##### Ääneneristävyys
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/038>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi [NumeerinenArvo](../../looginenmalli/dokumentaatio/#numeerinenarvo), joka kuvaa rakennuksen ulkoseinien sekä ikkunoiden ja muiden rakenteiden ääneneristävyyden liikennemelua vastaan desibeleinä (```db```).
* Nolla tai useampi [GeometriaArvo](../../looginenmalli/dokumentaatio/#geometriaarvo), joka on päällekkäin sen kaavamääräyskohteen geometrian osan kanssa, jonka puoleisia sivuja kaavamääräys koskee.

##### Parvekkeet sijoitettava rungon sisään
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/039>

Ilmaisee, että kaavamääräyskohteen aluella rakennusten parvekkeet tulee rakentaa talon rungon sisään.

Mahdolliset ```arvo```-attribuutin arvot:
* Nolla tai useampi [GeometriaArvo](../../looginenmalli/dokumentaatio/#geometriaarvo), joka on päällekkäin sen kaavamääräyskohteen geometrian osan kanssa, jonka puoleisia sivuja kaavamääräys koskee. 

##### Viherkatto
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/0310>

Ilmaisee, että kaavamääräyskohteen aluelle sijoitettavaan rakennukseen tai sen osaan on rakennettava viherkatto.

Mahdolliset ```arvo```-attribuutin arvot:
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

##### Kelluvat asuinrakennukset
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/0311>

Ilmaisee, että kaavamääräyskohteen aluelle sijoitettavat asuinrakennukset voidaan toteuttaa veden päällä kelluvina.

Mahdolliset ```arvo```-attribuutin arvot:
* Nolla tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka täydentää kaavamääräystietoa.

Ei mahdollisia ```lisatieto```-attribuutin arvoja.

{% include question.html content="Pitäisikö määräyslajia laventaa koskemaan mitä tahansa rakennuksia, ei vain asuinrakennuksia?" %}

##### Muu rakentamistapaan liittyvä määräys
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/0311>

Mahdolliset ```arvo```-attribuutin arvot:
* Yksi tai useampi [TekstiArvo](../../looginenmalli/dokumentaatio/#tekstiarvo) (yksi kullakin kielellä), joka kuvaa kaavamääräyksen.

#### Ulkoalueet
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/05>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

#### Liikenne
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/06>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

#### Korkeusasema
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/09>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

#### Tonttijako
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/10>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

#### Ympäristöarvojen vaaliminen
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/11>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

#### Yleismääräykset
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/12>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

#### Yhdyskuntatekninen huolto
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/13>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

#### Ympäristönsuojelu
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/14>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

#### Nimistö
**Koodi**: <http://uri.suomi.fi/codelist/rytj/Kaavamaaraykset/code/15>

Ryhmittelyotsikko, vain alemman tason koodeja käytetään.

### Laatusäännöt

#### Käyttötarkoitusalueet

{% include clause_start.html type="req" id="sov-ak/vaat-kayttotarkoitusalue-maar" %}
Asemakaavan käyttötarkoitusalue on [Kaavakohde](dokumentaatio/#kaavakohde)-luokan objekti, joka liittyy assosiaatiolla ```maarays``` yhteen tai useampaan sellaiseen [Kaavamaarays](dokumentaatio/#kaavamaarays)-luokan objektiin, jonka ```laji```-attribuutin arvo on jokin [Alueen käyttötarkoitus](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/01)-koodin alakoodeista.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-ak/vaat-aluemainen-kayttotarkoitusalue" %}
Asemakaavan käyttötarkoitusalueiden ```geometria```-attribuutin kuvaamaan geometrian tulee olla aluemainen.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-ak/vaat-ei-leikkaavat-kayttotarkoitusalueet" %}
Asemakaavan käyttötarkoitusalueet eivät saa leikata toisiaan.
{% include clause_end.html %}

{% include clause_start.html type="req" id="sov-ak/vaat-asemakaavan-kayttotarkoituspeite" %}
Asemakaavan, jonka ```elinkaaritila```-attribuutin arvo on kaavaehdotus tai myöhempi (koodi 04, 05, 06, 07, 08, 09, 10, 11 tai 12), sisältämien käyttötarkoitusalueiden tulee peittää sen ```aluerajaus```-attribuutin ilmaisema kaavan alue siten, että kukin alueen sisäpiste sisältyy täsmälleen yhteen käyttötarkoitusalueeseen.
{% include clause_end.html %}

{% include question.html content="Alueen käyttötarkoituksen antaminen yhtenä kaavamääräyslajina tekee laatusäännöistä monimutkaisia, kun käyttötarkoitusalueita ei voida erotella tietyn yhden kaavamääräyslajin, vaan sen alakoodien avulla. Pitäisikö sittenkin antaa alueen käyttötarkoitus omana kaavamääräyslajinaan tai jopa palata ajatukseen kaavakohdelajin käyttämisestä käyttötarkoitusalueiden ilmoittamiseen?" %}

## Kaavamääräysten mallintamisen esimerkkejä

### Alueen käyttötarkoitukset

### Sallittu rakentamismäärä (rakennusoikeus)

#### Käyttötarkoituksittain jaotettu rakentamismäärä

### Kulttuurihistoriallinen merkittävyys


