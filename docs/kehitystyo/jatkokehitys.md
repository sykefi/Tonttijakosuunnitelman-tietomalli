---
layout: "default"
title: "Tonttijakosuunnitelman jatkokehitys"
description: ""
page: "jatkokehitys"
status: "Luonnos"
---
# Jatkokehitys

Projektissa tunnistettiin seuraavia jatkokehitysehdotuksia:

1. Tunnistettiin tarve kaavatietomallin [KaavamääräysLaji_AK](http://uri.suomi.fi/codelist/rytj/RY_KaavamaaraysLaji_AK/code/1002)-koodiston 1002 - Esitontti-koodin muuttamiseksi esimerkiksi muotoon Kaavan esitontti tai Kaavayksikkö. 
   

   Tämä erottaisi kaavaprosessin ja tonttijakosuunnitelman prosessin selkeästi omikseen ja käsitteet pysyisivät ymmärrettävinä. Kuten nykyisinkin, tonttijakosuunnitelma ja sen      esitontit voidaan esittää tietomallipohjaisesti yhdessä kaavatietomallin kanssa.

2. Tunnistettiin tarve jatkoselvittää käyttöoikeusyksiköiden tarpeellisuus osana tonttijakosuunnitelman tietomallia. Tonttijakosuunnitelmassa suunnitellaan rasitteet, jotka        tulevat voimaan vasta kiinteistönmuodostuksessa, mutta on merkityksellistä huomioida esimerkiksi kulkurasite jo tonttijakosuunnitelmaa luodessa. Tämä todettiin Otakantaa.fi-    kyselyssä useassa kommentissa.

3. Tonttijakosuunnitelman tietomallin ensisijainen sovelluskohde on RYTJ, johon tulevaisuudessa kootaan kuntien tonttijakosuunnitelman prosessissa luotava tietomallimuotoinen      tonttijakosuunnitelmatieto. 

   Tietomalli on kuitenkin laadittu laajempana kuin mitä RYTJ edellyttäisi. Koska esimerkiksi elinkaarivaiheet on huomioitu RYTJ:n vaatimuksia laajemmin, voi tietomallia            hyödyntää sellaisenaan myös kuntien järjestelmissä. Tähän liittyen kuntien järjestelmien ja RYTJ:n välinen tiedonvaihto edellyttää jatkossa tietomallin tarkempaa tarkastelua    automaatioiden mahdollistamiseksi muun muassa:

      * kaavatietomallin ja tonttijakosuunnitelman välillä,
      * tonttijakosuunnitelman ja kiinteistötietojärjestelmän välillä ja
      * tonttijakosuunnitelman ja rakennuskieltojen välillä.
    
    Tiedonvaihdon osalta tulee tarkastella erityisesti kohteiden välisiä vaikutuksia, kuten esimerkiksi elinkaarimuutoksia tietovarastojen välillä. 
    Tällä hetkellä tonttijakosuunnitelman tietomallissa kaavamääräykset, muun muassa käyttötarkoituksen osalta, linkitetään siihen suoraan kaavatietomallista hyödyntäen sen         viittaustunnusta. Kaavatietomallissa tapahtuvilla muutoksilla on vaikutuksia tonttijakosuunnitelman tietomallin esitonttikohteisiin (ks. 4. ehdotus). Käynnissä oleva             Rakennetun ympäristön MVP-määrittely -hanke aiheuttaa mahdollisesti tietomalliin muutoksia edellä mainittujen osalta.

4. Tunnistettiin tarve selvittää kaavalaji-koodiston (JHS 135) mukaisten elinkaariominaisuuksien sisällyttäminen kaavatietomalliin, joka ilmaisee muun muassa asemakaavan            määräysten muutoksen tai asemakaavan rajojen muutoksen konekielisesti. Kyseiset muutokset johtavat esitontin rakennuskieltoon. Tämä mahdollistaisi esitontin automaattisen        rakennuskiellon asettamisen RYTJ:ssä. Tonttijakosuunnitelmasta on tunnistettu Kaavatilannetieto-luokan Kaavalaji-attribuutti, joka voisi edustaa tätä tietoa. (ks. ehdotus 3)

5. Esitonttikohde-luokan rakennettu- ja rakennuskielto -attribuuttien merkitystä ja viittausyhteyksiä tulee jatkoselvittää tonttijakosuunnitelman seuraavissa versioissa sekä        huomioida ne muissa sidosprojekteissa. Rakennuskieltotieto on merkityksellinen välitettävä tieto eri tietovarantojen välillä.

6. Verohallinnon tarpeita korotetun kiinteistöverotuksen näkökulmasta tulee jatkoselvittää.

7. Tonttijakosuunnitelman tietovarasto tulee tunnistaa osana kaavatietovarannon tietoja. 

8. Tonttijakosuunnitelman tietomallille tulee jatkossa laatia esitystavan säännöt.

9. Projektin päättymisestä huolimatta tonttijakosuunnitelman tietomalli edellyttää kehittämistä MVP-kokeilujen avulla läpi koko Ryhti-hankkeen.

 
