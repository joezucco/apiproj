# Project Overview

## Project Links

- [GitHub](https://github.com/zzzucco/apiproj)
- [Netlify](https://elated-galileo-2ab1e7.netlify.app/)

## Project Description

Forget Me Not is a database of plants! Discover interesting plant species from around the world or search for information on specific plant types.

I want this app to be a simple, straightforward and aesthetically pleasing display of data. It will be functional with either the use of a randomizer button to display random plants or a search bar to take zip code or town name to find local plant species.

## API

I am choosing to work with the Trefle API for my app.


```
{
"data": [
{
"id": 14887,
"name": "Aa",
"slug": "aa",
"links": {
"self": "/api/v1/genus/aa",
"plants": "/api/v1/genus/aa/plants",
"species": "/api/v1/genus/aa/species",
"family": "/api/v1/families/orchidaceae"
},
"family": {
"id": 32,
"name": "Orchidaceae",
"common_name": null,
"slug": "orchidaceae",
"links": {
"self": "/api/v1/families/orchidaceae",
"division_order": "/api/v1/division_orders/orchidales",
"genus": "/api/v1/families/orchidaceae/genus"
}
}
},
```


## Wireframes


- [Desktop/Mobile Wireframes](https://res.cloudinary.com/dnfumu7j3/image/upload/v1619797786/fmn_wire_bkuupe.png)
- [React Architecture](https://res.cloudinary.com/dnfumu7j3/image/upload/v1619806112/IMG-7712_mpoqhw.jpg)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
- Find and use external api 
- Render data on page 
- Allow user to interact with the page
- Have functional search and/or button component
- Design cards for plant data

#### PostMVP 

- Implement Bootstrap or Bulma styling components
- Logo
- Implement second API for photos

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header and include the nav | 
| Footer | Basic footer containing copyright info. Maybe a contact link. |
| Nav | Basic nav componenent containing logo + about + name of app |
| About | Will be routed from Main and re-render.   |
| Card | This will render plant data | 


## Time Frames

[Link to Google Sheets Time Frame](https://docs.google.com/spreadsheets/d/1VpmWz1Mlbrhy5QuPG1OTW3FLBZhMeWndJK6d2XJGdIY/edit?usp=sharing)

## Additional Libraries
 I may implement React Media to allow media query capabilities for responsive design. Bulma or Reactstrap are potential Post-MVP options for my styling

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
