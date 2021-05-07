# Project Overview

## Project Links

- [GitHub](https://github.com/zzzucco/apiproj)
- [Netlify](https://elated-galileo-2ab1e7.netlify.app/)

## Project Description

Catfaxt is a resource for (relatively) true information on cats.

I want this app to be a simple, straightforward and aesthetically pleasing display of data. It will be functional with the use of a randomizer button to display random cat facts.

## API

I am choosing to work with the Cat Facts API for my app. It contains cat data.


```
[
{
"status": {
"verified": true,
"sentCount": 1,
"feedback": ""
},
"type": "cat",
"deleted": false,
"_id": "5887e1d85c873e0011036889",
"user": "5a9ac18c7478810ea6c06381",
"text": "Cats make about 100 different sounds. Dogs make only about 10.",
"__v": 0,
"source": "user",
"updatedAt": "2020-09-03T16:39:39.578Z",
"createdAt": "2018-01-15T21:20:00.003Z",
"used": true
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

[Link to Google Sheets Time Frame Matrix](https://docs.google.com/spreadsheets/d/1VpmWz1Mlbrhy5QuPG1OTW3FLBZhMeWndJK6d2XJGdIY/edit?usp=sharing)

## Additional Libraries
For additional libraries, I implemented Bulma. It's a style library that I've been interested in working with for a while. I'm finding it more intuitive than Bootstrap. It's been really fun to mess around with!

## Code Snippet
My entire Fact.js component was my biggest hurdle. I initially thought creating a functional button would be simple, but it really tested my already shaky understanding of fundamental JavaScript and working with it in React. This week has definitely pushed me toward a slightly better understanding of React than I had coming in. I'm happy about that.

```
const [num, setNum] = useState(0);

  const handleClick = () => {
    let newNum = num++;
    setNum(newNum);
  };

  const loaded = () => {
    return (
      <div>
        <input
          className="button is-primary is-focused"
          onClick={() => setNum(num + 1)}
          type="submit"
          value="/ᐠ｡‸｡ᐟ\"
        />
        <div class="card">
          <div class="card-content">
            <div class="content">
              <p>{props.catFacts[num].text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const loading = () => {
    return (
      <>
        <img className="dancer" src="/dancer.gif" alt="Dance" />
        <h5>dancing...</h5>
      </>
    );
  };

  return props.catFacts[num] ? loaded() : loading();
};
```
