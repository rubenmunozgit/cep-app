# cep-app

### 2019 Software Engineering Application Project

This projects has the following guidelines:
- It has an image carrousel with 3 different images from Madrid.
- Include 4 buttons with actions, each of them trigger a different action based in the information in the JavaScript object :
  1. *Name*: Shows my name with my image.
  2. *Job Title*: Shows Job title in a Card.
  3. *Home office*: Shows the address and the Google Maps iplocation
  4. *Tell me more*: A brief description in a Card.

#Challenge

I tried to accomplinsh a weather app depending on the locations where you access the web.

I  get access to 2 endpoints [ipgeolocationapi](https://www.ipgeolocationapi.com) and [metaweather](https://www.metaweather.com)
First to calculate the *lat* and *long* based in the IP address
Second get the waather based in the lat and long.
  - First gets the weather station closest to the lat and longitude
  - Second gets the weather data for that wather station
Finally updates the values and shows in the header of the page as *"Collapse"* item

This data is ready when the buttom *"Check your Weather"* has a background Green color
