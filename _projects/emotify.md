---
name: Emotify
blurb: A mobile app to get you in touch with your emotions
origin: Hack For Humanity 2023
link: /projects/emotify/
image: /assets/images/emotify.png
priority: 5

github_link: https://github.com/sipneat/Emotify
devpost_link: https://devpost.com/software/emotify-s3mg4t
skills: 
  - React Native
  - Full-Stack Dev
  - OpenAPI/ChatGPT
  - JavaScript
---

The frontend of our application was built using React Native and contains three main pages for the user to visit. On the first page, the user can type out how they are feeling or a situation that they may be experiencing at the moment that then leads to an alternate page with a Spotify playlist made to boost your mood! This would be done by sending a prompt to OpenAI via an API POST that would convert the text into keywords that would be sent to Spotify’s API to get songs related to those keywords. A button on this second page then leads to the third page, where the user can find comforting messages and useful information about the positive effects of music on mental health. A button can also be found on the final page to bring the user back to the start of our app, restarting the process whenever you want!