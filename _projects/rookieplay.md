---
title: Rookie Play
blurb: Self-hosted, robust web app w/ AI
origin: Santa Clara University
link: /projects/rookieplay/
image: /assets/images/rookieplay.png
priority: 1

github_link: https://github.com/sipneat/csen-174-rookie-play
other_link: https://rookie-play.jakeesperson.com
skills:
    - React
    - Flask
    - Docker
    - Jenkins
    - Kubernetes
images:
    - /assets/images/rookieplay1.png
imageDesc:
    - Home Page
---

Rookie Play is an app creating for Software Engineering at SCU and is a culmination of my full stack and DevOps skillsets. The web app itself is for beginners new to NFL football looking for a tool to follow along to games, complete with AI explainations on a play-by-play basis. Using React, Flask, Firebase (user auth), Groq (AI), and external APIs (NFL, ESPN, etc), it's a complete and functioning app that you could use today. The highlight is the fact that this site is fully hosted on my DevOps homelab, complete with Github hooks on Jenkins, static analysis, automatic builds and containerization via Docker, and even branch deployments via Kubernetes. Although a bit overkill for a simple web app, it was crucial for practicing Agile methodologies and conducting code review when each branch has it's own, fully functional and accessible version.
