# Kaavatietomallit


## Uuden malliversion julkaisu sivustolle

Osa sivuston sivuista on versiokohtaisia, eli samasta sivusta on saatavilla useampia versioita, yksi kullekin julkaistulle mallin kehitysversiolle.

1. Mikäli olet tehnyt muutokset hakemistoon, joka ei vastaa lopullista julkaisuversion numeroa, vaihda versio oikeaksi:
```git mv docs/1.1-dev docs/1.1```

2. Vaihda hakemistonimi ja otsikko sivuston ```docs/_data/versions.yml```-tiedostossa:

```yaml
- number: "v1.1-dev"
  title: "Kehitysversio"
  path: "1.1-dev"
```

```yaml
- number: "v1.1"
  title: "Julkaisuversio 1.1"
  path: "1.1"
```

3. Päivitä kaikkien ko. version hakemisto (docs/1.1) sivujen ```modelversion```-metatieto:
```jekyll
---
layout: "default"
title: "Kaavatietomalli - keittokirja - asemakaava"
description: "Esimerkkejä Kaavatietomallin soveltamisesta asemakaavoituksen kaavoitusratkaisuihin"
page: "cookbook-ak"
modelversion: "1.1-dev"
---
```

```jekyll
---
layout: "default"
title: "Kaavatietomalli - keittokirja - asemakaava"
description: "Esimerkkejä Kaavatietomallin soveltamisesta asemakaavoituksen kaavoitusratkaisuihin"
page: "cookbook-ak"
modelversion: "1.1"
---
```

4. Vaihda sivuston oletusversio ```docs/_config.yml```-tiedostossa:

```yaml
default_modelversion: '1.0'
```

```yaml
default_modelversion: '1.1'
```

5. Kommitoi ja vie muutokset GitHubiin:

```git add docs/_data/versions.yml docs/1.1 docs/_config.yml```

```git commit -m "Vaihdettu julkaisuversion hakemistonimi 1.1-dev -> 1.1. Oletusversio nyt 1.1"```

```git push```

6. Varmista, että uusi versio näkyy oikein [kaavatietomalli](https://kaavatietomalli.fi/)-sivustolla ja että vaihtaminen versiosta toiseen onnistuu. Sivuston generoituminen kestää muutamia minuutteja push:sta.

7. Tee GitHub-repon version valmista tilaa kuvaava tagi paikalliseen kopioon ja vie GitHubiin:

```git tag -a v1.1 -m "Julkaisuversio 1.1"```

```git push origin v1.1```

8. Tee repon ```master```-haarasta [julkaisu (release)](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/managing-releases-in-a-repository) GitHubin käyttöliittymän avulla.

9. Tee seuraavalle kehitysversiolle uusi hakemisto käyttäen pohjana juuri julkaistua versiota:
```cp -r docs/1.1 docs/1.2-dev```

10. Tee UML-mallin eap-tiedostosta uusi kopio (muista päivittää myös linkki UML-kaavion sivulla ```docs/looginenmalli/uml/index.md```):

```cp looginen-tietomalli/Kaavatietomalli-1_1.eap looginen-tietomalli/Kaavatietomalli-1_2.eap```

11. Päivitä kaikkien uuden kehitysversion hakemiston (docs/1.2-dev) sivujen ```modelversion```-metatieto:
```jekyll
---
layout: "default"
title: "Kaavatietomalli - keittokirja - asemakaava"
description: "Esimerkkejä Kaavatietomallin soveltamisesta asemakaavoituksen kaavoitusratkaisuihin"
page: "cookbook-ak"
modelversion: "1.1"
---
```

```jekyll
---
layout: "default"
title: "Kaavatietomalli - keittokirja - asemakaava"
description: "Esimerkkejä Kaavatietomallin soveltamisesta asemakaavoituksen kaavoitusratkaisuihin"
page: "cookbook-ak"
modelversion: "1.2-dev"
---
```

12. Tee uusi versio sivuston ```docs/_data/versions.yml```-tiedostoon:

```yaml
- number: "v1.1"
  title: "Julkaisuversio 1.1"
  path: "1.1"

- number: "v1.2-dev"
  title: "Kehitysversio"
  path: "1.2-dev"
```

12. Kommitoi ja vie muutokset GitHubiin:

```git add docs/_data/versions.yml docs/1.2-dev```

```git commit -m "Luotu uusi kehitysversio 1.2-dev perustuen versioon 1.1"```

```git push```

13. Varmista, että uusi versio näkyy oikein [kaavatietomalli](https://kaavatietomalli.fi/)-sivustolla ja että vaihtaminen versiosta toiseen onnistuu. Sivuston generoituminen kestää muutamia minuutteja push:sta.

14. Jatka kehittämistä kehystysversion hakemiston tiedostoilla (docs/1.2-dev)

## Asema- ja yleiskaavan tietomallit -projekti

Ympäristöministeriön asema- ja yleiskaavojen tietomallit –projektissa määriteltiin kansalliset tietomallit asema- ja yleiskaavoille.
Projekti käynnistyi toukokuussa 2020 ja valmistui vuoden 2021 tammikuussa. Työn toteutti Spatineo Oy yhdessä Asiantuntijat n+1 Oy:n kanssa.
