---
layout: "default"
title: "Asema- ja yleiskaavan tietomallit  - Jatkokehitysajatukset"
description: ""
page: "ak-yk-jatkokehitys"
status: "Ehdotus"
---
# Jatkokehitys

Asema- ja yleiskaavojen tietomallit -projektin tulosten pohjalta on laadittu seuraavat ehdotukset tietomallin jatkokehitystä varten:

## Tulevaisuuden kaavoituksen tarpeiden huomioiminen

Ota kantaa -kyselyssä tuli vahvasti esiin, että tietomalli perustuu liiaksi nykykaavoituksen käytäntöihin ja merkintätapoihin. Tämä tulee erityisesti esiin koodistojen sisällöissä, joita on laadittu pitkälti olemassa oleviin kaavamääräyksiin peilaten. 
Jatkossa kaavan tietomallia on tarpeen kehittää tulevaisuuden tarpeisiin. Jatkokehityksessä on kiinnitettävä erityistä huomiota Kaavamääräyslaji-koodistojen sisältöön tulevaisuuden ohjaustarpeen näkökulmasta. Nykykaavojen digitointia varten voidaan tarvittaessa laatia erilliset koodistot. 

## Ympäristöarvoihin liittyvien määräysten yhtenäistäminen ja rakenteistaminen

Ota kantaa -kyselyn ja tietomallin testauksen perusteella ympäristö- ja suojeluarvojen ilmaiseminen kaavamääräysten avulla on epäselvää. Ympäristöarvoihin liittyvien kaavamääräysten yhteismitallisuutta ja koneluettavuutta tulisi kehittää. 

Ympäristöarvojen ilmaisemista kannattaa kehittää siten, että eri suojeluarvot ilmaistaan kaavamääräyksellä (Suojeltava alue, Suojeltava alueen osa tai kohde) ja siihen liitettävillä lisätiedoilla. Lisätietona suojelukohteelle tulisi antaa ainakin ympäristöarvon merkittävyys ja peruste (esim. laki tai päätös). Nämä yhdessä muodostaisivat rajoittavan määräyksen.

Tätä periaatetta on nyt sovellettu kulttuurihistoriallisesti merkittävien kohteiden ilmaisemisessa hyödyntämällä yhteentoimivuusalustan <a href="https://tietomallit.suomi.fi/model/rakkult/" target="_blank">Kulttuuriympäristön tietomallia</a>. Kulttuurihistoriallisesti arvokkaalle kohteelle voi kaavamääräyksen lisätiedon avulla liittää kulttuurihistoriallisen merkittävyyden (kansainvälinen, valtakunnallinen, maakunnallinen, paikallinen merkittävyys tai vähäisiä arvoja) ja arvotyypin (Rakennustaiteellinen, Rakennustekninen, Arkkitehtoninen, Rakennushistoriallinen, Historiallinen, Maisemallinen/kaupunkikuvallinen). Lisäksi kohteelle voidaan lisätä tekstiarvo, jossa kuvataan tarkemmin kohteen suojeluarvo ja sen huomioiminen kaavan toteutuksessa. 

Toteutus edellyttää, että eri ympäristöarvoille laaditaan omat tietomallit <a href="https://tietomallit.suomi.fi/model/rakkult/" target="_blank">Kulttuuriympäristön tietomallin</a> tapaan.

Myös kulttuurihistoriallisesti arvokkaiden kohteiden kaavamääräyksiä on tarpeen jatkokehittää. Koodistoa voitaisiin edelleen yksinkertaistaa jättämällä kaavamääräyksestä pois tieto, minkälaisesta kohteesta on kyse (rakennus, muinaisjäännös). Tämä edellyttää, että Kulttuurihistoriallinen tyyppi -koodistoon lisättäisiin ainakin rakennus ja muinaisjäännös. Tällöin voitaisiin yhdistää kaavamääräykset "Suojeltava rakennus, Suojeltava rakennelma, Kiinteä suojeltava kohde, Kiinteä muinaisjäännös" yhdeksi kaavamääräykseksi "Suojeltava kohde". Kehitystyössä on huomioitava tilastoinnin tarpeet, kuten suojeltujen rakennusten poiminta kaava-aineistosta.

## Informatiivisen sisällön ja suunnitelmatiedon erottaminen

MRL-uudistuksen yhtenä tavoitteena on keventää kaavojen informatiivista sisältöä. Tietomalli tukee tätä erottamalla lähtötietoaineistot kaavatiedosta omaksi luokaksi. Jatkokehittämisessä on ratkaistava kysymys, miten lähtötietoihin liittyvät kaavamääräykset voidaan ilmaista (esim. pohjavesialueen rajaus lähtötietona ja siihen liittyvä sanallinen kaavamääräys).

Sparrausryhmän palautteen perusteella on kuitenkin syytä pohtia tätä uudistusta tarkkaan, jotta kaavaan liittyvät olennaiset taustatiedot eivät jää huomioimatta lupaprosesseissa. Hyvänä kuitenkin pidettiin sitä, että informatiivinen sisältö erottuisi selkeästi kaavoituksen tuottamasta suunnitelmatiedosta.

## Koodistojen täydentäminen ja laajentaminen

Kyselyn ja testauksen perusteella erityisesti Kaavamääräyslaji-, Käyttötarkoituslaji-, Tarkentava käyttötarkoituslaji sekä Lisätiedon laji –koodistoista puuttuu koodiarvoja. Koodistojen kuntakohtainen laajennettavuus sai sekä kannatusta että vastustusta kyselyssä. Tämän projektin puitteissa on pidetty parempana lisätä koodistoon ns. kaatoluokkia tarkoituksenmukaisella tavalla (esim. käyttötarkoituksiin pääluokittain, esim. "Muu asuminen"). Laajennettavuus päädyttiin sallimaan ainoastaan Kaavoitusteema-koodistoon, josta kunnat voivat laatia oman versionsa.

Jatkossa koodistoja tulisi kehittää yhdessä kuntien kaavoittajien kanssa. Yhteiskehittämiselle on tarpeen luoda vuorovaikutteinen toimintamalli.

## Tonttijaolle oma tietomalli

Ota kantaa -kyselyssä ja Sparrausryhmässä on tuotu esiin, että asemakaavan tietomallista puuttuu nykyisenlaista kaavayksikköä vastaava käsite. Kaavayksikköä tarvitaan tiedon välittämiseen asemakaavoituksen ja kiinteistönmuodostuksen välillä. Kaavayksikkö on kuitenkin havaittu ongelmalliseksi käsitteeksi, koska se ymmärretään eri tavoin kaavoituksessa ja kiinteistönmuodostuksessa. 

On myös huomioitava, että sellaisissa kunnissa, joissa kiinteistötoimitukset hoitaa maamittauslaitos, ei tonttijakoa itse laadita. Tällöin kaavan tietomallissa tulisi olla kaavakohde, jonka avulla voidaan ilmaista kaavoituksen näkemys tulevasta tonttijaosta.

Koska tonttijako on oma erillinen prosessinsa, on yhtenä lähtökohtana kaavatietomallityössä ollut kaavan ja tonttijaon tietomallien pitäminen erillään. Tonttijaolle tarvitaankin oma tietomalli, joka on rinnakkainen kaavan tietomallille. Sekä kaava että tonttojako ovat eräänlaisia maankäyttöasioita.

MRL-uudistuksessa on kaavailtu uutta käsitettä Esitontti, joka kuvaisi tulevaa tonttia ennen kiinteistön rekisteröintiä. Sparrausryhmän keskusteluissa päädyttiin siihen, että Esitontti-käsitettä voitaisiin käyttää asemakaavan tietomallissa kuvaamaan ”suunniteltua tonttia”.

Asemakaavan Kaavamääräyslaji-koodistoon on lisätty Esitontti. Se voi tulevaisuudessa toimia kaavoituksen ja kiinteistönmuodostuksen välisenä tietoelementtinä, joka välittää tulevalle kiinteistölle kaavatiedot (mm. käyttötarkoitus ja sallittu kerrosala). Kun tulevaisuudessa tonttijaolle laaditaan oma tietomalli, voi sitovan tonttijaon tapauksessa esitontti olla osa tonttijakosuunnitelmaa (uuden MRL:n mukainen termi).

