---
date: 2019-07-05T15:49:35.155Z
title: Climate crisis
descGroup:
  desc: Special page about climate change
  longdesc: >-
    Journalists visited several world locations to show climate change impact
    through human stories
tags:
  - react
  - javascript
  - stylus
  - folha
  - special
image: /assets/clima.jpg
---
![Aerial view of overpopulated Gardi Sugdub, or Crab island, in the San Blas archipelago, Panama - Lalo de Almeida/Folhapress](/assets/clima.jpg)

Evidence of global climate change is increasingly irrefutable, with the accumulation of carbon dioxide (CO2) and other greenhouse gases in the atmosphere.

Folha visited three continents to explore the impact of climate change on people’s lives. The resulting nine-part series assesses the costs of adapting to a new reality — before it is too late.

Published in English, Spanish and Portuguese. Photos used in this portfolio are by [Lalo de Almeida](http://lalodealmeida.com.br/site_pt/).

## Development details

Made using a team-built React boilerplate at Folha, the main issue of this project (and others alike) is making content available for Google's crawlers, while being able to deploy changes using Folha's internal system.

The solution was mix a few technologies. The pages are built with their latest changes as fixed HTML and, after loading the JS script, updated with new changes — coming through JSON files. When the team is available, the project is redeployed so the new changes can get fixed too.

Youtube's API is used in the autoplaying video infographics and a heavily adapted New York Times' [AI2HTML](http://ai2html.org/) is used generating infographics from Adobe Illustrator.
