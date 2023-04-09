## Getting Started

First, add environment variables to the root folder.

```env
#template located in .env.local.example
#save file as .env.local

GOOGLE_PLACE_SEARCH_BASEURL=https://maps.googleapis.com/maps/api/place/nearbysearch/json
GOOGLE_API_KEY=
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Planning

[Excalidraw link](https://excalidraw.com/#json=HQOjXDy0xtNf5tY2Wpwjv,yTbOPPjH0hpdvLZRvY7nAA)

## Live Link

https://location-search-frontend.vercel.app/

## How to read the files

- inspired by Atlassian React Talk and personal experience to keep UI and their components close to each other
- if this was a bigger project, based on the react talk, I would separate the state and use redux?

```
--- Page
    --- Component1
        --- api
        --- test
        --- util

    --- Component2

UI View
- <State>
- <Component 1 state={state}>
- <Component 2 state={state}>

```

## Focus of this assignment

- I disregard git commits and focus on speed in building

## Lesson Learned

- Time sink was biased toward what I have written the past week. What I should have done is reference a similar concept/code and execute a high-level plan with improvement
- Styling takes a bit more, and need to strengthen the design system and apply the design system to projects
- To improve speed, need to write a template code generator to create components, tests, and APIs.
  EG -> Type of Location Card => generates LocationCard.tsx with its props, Location.Card.test.tsx

## Things to do in next

- Add validation to react hook form
- Add cypress test or playright

## other thoughts

- Based on convo with EM, I wonder if it's possible to integrate RTL with accessibility testing, and localization.
- In addition. What is a scalable way to handle copywriting/localization of an application?

```
---
  -- Page
    - view.page.tsx
    - Component 1
      - _api
      - _location.ts
      - component1.test.tsx
      - component1.tsx
      - util
      - index.ts
``
```

## other thoughts part2

- while fixing and cleaning exports I think I am leaning toward this file structure

```
--- /Component1
      - _index.ts             //
      - _api.ts               //  _<name> represent the meta-physical layer of the application
      - _radioOptions.ts      // I really like this because it was easy to fix an error, and the most important meta-physical data
      - _d.ts                 //
      - component1.test.tsx   // physical nature of component
      - component1.tsx
      - /util                 // could consider moving api into this folder as it's consider utility but, API is pretty important
          - useHook.ts
          - filter.example.ts

```

- Next steps would be check if NextJs alias configuration
  -- at root level we import type from ../list. I would like something like @List. But I am unsure how to create a general rule to capture nested index.ts files.

- TODO: explore these article again <-- this person worked on JIRA probably on the same team as the person who gave the talk. File structure mention in blog is the ame
  -- https://www.developerway.com/posts/advanced-typescript-for-react-developers
  -- https://www.developerway.com/posts/react-project-structure

- About the api, we could probably decompose it something like this? need to look into this

```javascript

type T_SearchItem = {
  title: string,
}

type T_SearchResult = {
  data: T_SearchItem [] | []
  error?: boolean
}

type T_API_Config = {
  method: string,
  URL: string,
  query: string
}
//to do https://youtube.com/shorts/xRDhSWPt6nY?feature=share -> handling fetch errors
//https://www.youtube.com/watch?v=PB2nNc6nsTY -> fixing url query
const formAPI = {
  search: {
    method: 'GET',
    URL: "/api/search",
    queryParam: (location: string, keyword: string) => `?location=${location}&keyword=${keyword}`,
  }
}

async function API_Request<InputType extends T_API_Config, OutputType>(config: InputType): Promise<OutputType [] | []> {
  const { URL, query, method} = config
  try {
    const response = await fetch(URL + query, {
      method
    });
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}


const {queryParam, ...config} = formAPI.search
const query = queryParam('test', 'test2')

const data =  await API_Request<T_API_Config, T_SearchResult>({...config, query})
```
