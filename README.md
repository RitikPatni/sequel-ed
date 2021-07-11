# sequel-ed

## Libraries Used

- VueJS 3
- Vuex 4
- Papa Parser
- Vue 3 Ace Editor
- SCSS
- Vite

## How to try

Please visit [https://sequel-ed.ritikpatni.me/](https://sequel-ed.ritikpatni.me/) or clone the repository and run

- `npm install`
- `npm run dev`

## Performance Numbers

### Numbers from [Lighthouse](https://web.dev)

- First Contentful Paint - 1.1s
- Time to Interactive - 1.1s
- Speed Index - 1.6s
- Total Blocking Time - 10ms
- Largest Contentful Paint - 1.1s
- Cumulative Layout Shift - 0.002

Visit the [results page](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fsequel-ed.ritikpatni.me%2F) for detailed info.

### Numbers from [WebPageTest](https://webpagetest.org)

#### Environment Details

> URL: [https://sequel-ed.ritikpatni.me/](https://sequel-ed.ritikpatni.me/)  
  From: Virginia USA - EC2 - **Chrome** - **Emulated Motorola G (gen 4)** - **Cable**  
  **First View only**

#### Median Results after 3 runs

- First Byte - 0.292s
- Start Renderer - 0.800s
- First Contentful Paint - 0.797s
- Speed Index - 0.816s
- Web Vitals
  - Largest Contentful Paint - 0.796s
  - Cumulative Layout Shift - 0.002
  - Total Blocking Time - >= 0.000s
- Document Complete
  - Time -  2.213s
  - Requests - 5
  - Bytes In - 767KB
- Fully Loaded
  - Time -  2.213s
  - Requests - 5
  - Bytes In - 767KB

#### Performance considerations

- Loaded font files from local, so I reduced a request/connection to a third-party server
- Lazy loaded the SQL syntax highlighting library so that it doesn't block the initial render and will get called only when needed.
  - I also used Suspense API to show a loader when the component is loading.
- Wrote all the CSS without the help of any third-party library
  - Wrapped the whole project in just under 4KB of CSS

## SQL Queries

Added only 2 SQL queries, and those are pretty barebone, and I implemented no SQL logic. It's just javascript functions running if it gets a specific query.

**First Query**

```sql
SELECT * from table 
```

The query will return all the records in the CSV and show them in a table

**Second Query**

```sql
SELECT * from table LIMIT 100*
```

The query will return the first 100 records from the table.

***Both the queries are non-case-sensitive and have predefined functions. They will show an error toast if it doesn't match the above queries.***

## Accessibility

I always try to keep accessibility one of the essential things in whatever I built and have done the same.

- The website is fully keyboard accessible, and it would be great, honestly, if you could try it out all with your keyboard.
- I've also added a `prefers-reduced-motion` media query not to show any transitions/animations if they don't prefer them.
- All the website text colors are WCAG AAA compliant.

## Areas for Improvement

Things that I wanted to do but couldn't manage to fit in the provided time

- Move filtering tasks(functions) to web workers.
  - It performs on the main thread right now, but this can be moved to workers so that our website doesn't drop frame rates even when a large CSV file is loaded.
- Improve design
- Add a GUI SQL query generator, but the functionality to generate the actual query needed more time, so I had to drop it.
  - The initial idea was to provide a GUI interface that users could then use to generate the SQL query or apply the filters as is, but the desired query logic was growing too complex and wasn't possible in the time frame.
