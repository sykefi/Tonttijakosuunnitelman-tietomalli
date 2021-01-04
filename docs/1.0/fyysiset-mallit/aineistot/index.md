---
layout: "default"
title: "Kaavatietomalli - testiaineistot"
description: ""
page: "testiaineistot"
modelversion: "1.0"
status: "Ehdotus"
---
# Testiaineistot

Testauksessa tuotettiin kaavoista kaavan ulkoraja, kaavakohteet ja kaavamääräykset (sekä ulkorajaan että kaavakohteisiin liittyvät), ks. [Testauksen kuvaus](../../../projektit/ak-yk-tietomallit/testaus/)

Huomaa, että testiaineston koodistoviittaukset eivät vastaa [Yleis- ja asemakaavan tietomallit -projektin](../../../projektit/ak-yk-tietomallit/) lopullisia koodistoja, sillä ne pohjaustuvat testauksen aikaisiin versioihin koodistoista ja niiden sisältämistä koodeista. Myös tietoranteissa voi esiintyä pieniä eroja lopulliseen [Kaava-JSON](../json/)-formaattiin verrattuna samasta syystä.

Testiainestot ovat saatavilla [projektin demopalvelussa](../demo/) 31.3.2021 saakka.

## Ensimmäinen asemakaava, Sipoo Nevas gård (NE 1)

![NE 1 Sipoo Nevas gård](ne1_nevas_gard_kaavakartta_hyvaksytty_small.png)

([suurempi kuva](./ne1_nevas_gard_kaavakartta_hyvaksytty.png))

[Alkuperäiset aineistot](https://github.com/YM-rakennettu-ymparisto/kaavatietomalli/tree/a01d15cc08fc262e0ab93d3bf9c4ab49415ec4c1/testaus/alkuperaiset-aineistot/Sipoo) (DWG)

Mallinnetut elinkaaritilat:

* [Virelletullut](https://github.com/YM-rakennettu-ymparisto/kaavatietomalli/blob/579bda3c26d128d5cc09536c4ec7b090453a21f5/testaus/json-testiaineisto/OGR-AK_SIPOO_1_vireilletulo_kaava-sipoo-nevasgard.geojson)
* [Kaavaehdotus](https://github.com/YM-rakennettu-ymparisto/kaavatietomalli/blob/579bda3c26d128d5cc09536c4ec7b090453a21f5/testaus/json-testiaineisto/OGR-AK_SIPOO_2_kaavaehdotus_kaava-sipoo-nevasgard.geojson)
* [Tarkistettu kaavaehdotus](https://github.com/YM-rakennettu-ymparisto/kaavatietomalli/blob/579bda3c26d128d5cc09536c4ec7b090453a21f5/testaus/json-testiaineisto/OGR-AK_SIPOO_3_tarkistettu_kaavaehdotus_kaava-sipoo-nevasgard.geojson)
* [Hyväksytty kaava](https://github.com/YM-rakennettu-ymparisto/kaavatietomalli/blob/579bda3c26d128d5cc09536c4ec7b090453a21f5/testaus/json-testiaineisto/OGR-AK_SIPOO_4_hyvaksytty_kaava_kaava-sipoo-nevasgard.geojson)
* [Lainvoimainen kaava](https://github.com/YM-rakennettu-ymparisto/kaavatietomalli/blob/579bda3c26d128d5cc09536c4ec7b090453a21f5/testaus/json-testiaineisto/OGR-AK_SIPOO_5_lainvoimainen_kaava-sipoo-nevasgard.geojson)

## Strateginen yleiskaava, Tampere Kantakaupungin yleiskaava 2040, Hervannan alue

![Tampere Kantakaupungin yleiskaava 2040](Yk2040_Kartat_1-4_voimaantulo_20_1_2020_small.png)

([suurempi kuva](./Yk2040_Kartat_1-4_voimaantulo_20_1_2020.png))

[Alkuperäiset aineistot](https://github.com/YM-rakennettu-ymparisto/kaavatietomalli/tree/a01d15cc08fc262e0ab93d3bf9c4ab49415ec4c1/testaus/alkuperaiset-aineistot/Tampere) (Shapefile)

Mallinnetut elinkaaritilat: [Lainvoimainen kaava](https://github.com/YM-rakennettu-ymparisto/kaavatietomalli/blob/579bda3c26d128d5cc09536c4ec7b090453a21f5/testaus/json-testiaineisto/OGR-YK_TAMPERE_HERVANTA_1_lainvoimainen_kaava-hervanta.geojson)

## Vaiheasemakaava, Espoo Servinniemi (VK2001)

![VK2001 (Espoo Servinniemi)](VK2001_pdfA_small.png)

([suurempi kuva](./VK2001_pdfA.png))

[Alkuperäiset aineistot](https://github.com/YM-rakennettu-ymparisto/kaavatietomalli/tree/a01d15cc08fc262e0ab93d3bf9c4ab49415ec4c1/testaus/alkuperaiset-aineistot/Espoo) (DWG, MapInfo)

Mallinnetut elinkaaritilat: [Lainvoimainen kaava](https://github.com/YM-rakennettu-ymparisto/kaavatietomalli/blob/579bda3c26d128d5cc09536c4ec7b090453a21f5/testaus/json-testiaineisto/OGR-AK_ESPOO_uusi_kaava.geojson)

Vanha kaava, jota vaihekaava muuttaa: [Lainvoimainen kaava](https://github.com/YM-rakennettu-ymparisto/kaavatietomalli/blob/579bda3c26d128d5cc09536c4ec7b090453a21f5/testaus/json-testiaineisto/OGR-AK_ESPOO_vanha_kaava.geojson)

## Rakentamista ohjaava yleiskaava, Lahti Enonsaari (Y-165)

![Y-165 (Lahti Enonsaari)](Y-165_small.png)

([suurempi kuva](./Y-165.png))

[Alkuperäiset aineistot](https://github.com/YM-rakennettu-ymparisto/kaavatietomalli/tree/a01d15cc08fc262e0ab93d3bf9c4ab49415ec4c1/testaus/alkuperaiset-aineistot/Lahti) (ShapeFile)

Mallinnetut elinkaaritilat: [Lainvoimainen kaava](https://github.com/YM-rakennettu-ymparisto/kaavatietomalli/blob/579bda3c26d128d5cc09536c4ec7b090453a21f5/testaus/json-testiaineisto/OGR-YM_LAHTI_Enonsaari_1_lainvoimainen_kaava-enonsaari.geojson)




