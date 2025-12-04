---
title: BroncoNest
blurb: A Flutter app to help you find the best housing
origin: Senior Design Capstone Project
link: /projects/bronconest/
image: /assets/images/bronconest.png
priority: 3

github_link: https://github.com/CSEN196Lab-S2025/senior-design-project-42_ceak_bronconest
skills:
    - Flutter
    - Full-Stack Dev
    - Firebase
    - Figma
    - Flask
    - AI + RAG
images:
    - /assets/images/bronconest1.png
    - /assets/images/bronconest2.png
imageDesc:
    - Home Screen
    - Admin Dashboard
---

Doing Senior Design as a junior was no easy feat, but along with my other 2 members, we were able to create a full-stack app that helps students find housing. The app is called BroncoNest and is a web and mobile app that allows students to find dorms housing in the Santa Clara area. The app uses Firebase for authentication and data storage, and Flask for the backend API. The frontend is built using Flutter, which allows us to create a single codebase for both iOS and Android.

I worked on the Flask API, which connected to our RAG AI model to take a text prompt and return a list of dorms that matched the user's request, as well as the Flutter app, where I scaffolded most of the data transfer between pages and the API. I also hanlded the Firebase, where I set up the Firestore structure and took advantage of Google Authenication, complete with Role Based Access Control.
