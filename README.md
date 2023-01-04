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
