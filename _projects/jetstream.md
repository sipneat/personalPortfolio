---
title: JetStream
blurb: A web application that allows you to get anywhere
origin: INRIX Hack Seattle 2023
link: /projects/jetstream/
image: /assets/images/jetstream.png
priority: 1

github_link: https://github.com/jordanmosakowski/inrix-hack-23
devpost_link: https://devpost.com/software/jetstream-7pas4o
video: https://www.youtube.com/embed/Ho7OJNtVNpI?si=57UgV1-QHoAUtJAw
skills:
    - React.js
    - deck.gl
    - APIs
    - JavaScript
    - Mapping
images:
    - /assets/images/jetstream1.jpg
    - /assets/images/jetstream2.jpg
imageDesc:
    - Select Flight
    - Example Route
---

JetStream provides a seamless end-to-end experience to plan entire business trips. The only inputs required by the user are start and end address and date times for your flights. We then take you to our main display, which includes the trip itinerary and a side panel for selecting transport options, all overlaid on a beautiful, interactive map. After selecting each option, the map view and routes will be automatically updated based on the leg of the trip. Once everything is complete, the trip itinerary with total cost and time breakdowns is available.

I personally worked on the frontend, specifically with deck.gl, our map rendering library. I handled the camera changes, drawing the lines for routes and flight paths, and sending data from our components to the map.
