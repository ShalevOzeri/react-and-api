# מדריך לימוד וקישורים

הקובץ הזה מרכז את הקישורים ואת הרעיונות שבהם אנו משתמשים בפרויקט.

בכל נושא מופיעים:

- מה הוא עושה
- היכן ממקמים אותו בקוד
- דוגמה קטנה
- קישור לתיעוד הרשמי

## המבנה הבסיסי של `App.jsx`

```jsx
// 1. ייבואים - בראש הקובץ
import { useEffect, useState } from 'react'
import MovieGrid from './components/MovieGrid'
import './App.css'

// 2. הגדרת הרכיב
function App() {
  // 3. state ופעולות - בתוך הרכיב, לפני return

  // 4. פעולות חיצוניות - בתוך useEffect

  // 5. JSX - מה שיוצג במסך
  return <div>תוכן</div>
}

// 6. ייצוא - מחוץ לרכיב, בסוף הקובץ
export default App
```

הסדר הזה אינו חובה מוחלטת בכל קובץ, אבל הוא מבנה ברור ונפוץ.

## `useState`

קישור לתיעוד:

[useState](https://react.dev/reference/react/useState)

`useState` שומר מידע שהרכיב צריך לזכור.

בפרויקט שלנו הוא שומר את רשימת הסדרות שהתקבלה מהשרת.

ממקמים אותו בתוך הרכיב, לפני `return`.

```jsx
const [shows, setShows] = useState([])
```

החלק הראשון:

```text
shows
```

הוא הערך הנוכחי.

החלק השני:

```text
setShows
```

הוא הפונקציה שמעדכנת את הערך.

הערך:

```text
[]
```

הוא הערך ההתחלתי, כלומר מערך ריק.

כאשר הנתונים מגיעים:

```jsx
setShows(data)
```

React מעדכן את ה־state ומרנדר את הרכיב מחדש.

## `useEffect`

קישור לתיעוד:

[useEffect](https://react.dev/reference/react/useEffect)

`useEffect` מריץ פעולה שאינה רק חישוב של תצוגה.

דוגמאות לפעולות כאלה:

- קריאת API
- טיימר
- האזנה לאירוע

ממקמים אותו בתוך הרכיב, אחרי ה־state ולפני `return`.

```jsx
useEffect(() => {
  // פעולה שתתבצע לאחר טעינת הרכיב
}, [])
```

המערך הריק:

```jsx
[]
```

אומר להפעיל את הפעולה פעם אחת לאחר הטעינה הראשונית.

## `fetch`

קישור לתיעוד:

[Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

`fetch` שולח בקשה לכתובת באינטרנט.

הוא מובנה בדפדפן, ולכן לא צריך להתקין ספרייה עבורו.

```jsx
fetch('https://api.tvmaze.com/shows')
```

חשוב: כתובת האינטרנט חייבת להיות בתוך גרשיים.

`fetch` מחזיר תשובה מהשרת, אך התשובה עדיין אינה המערך עצמו.

לכן ממירים אותה ל־JSON:

```jsx
fetch('https://api.tvmaze.com/shows')
  .then((response) => response.json())
  .then((data) => {
    setShows(data)
  })
```

השלבים הם:

1. שליחת בקשה.
2. קבלת `response`.
3. המרת התשובה באמצעות `response.json()`.
4. קבלת הנתונים בתוך `data`.
5. שמירת הנתונים באמצעות `setShows(data)`.

## חיבור `fetch` אל `useEffect`

זהו המבנה שבו אנו משתמשים ב־`App.jsx`:

```jsx
const [shows, setShows] = useState([])

useEffect(() => {
  fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((data) => {
      setShows(data)
    })
}, [])
```

ה־`fetch` נמצא בתוך `useEffect` כדי שקריאת השרת לא תתבצע בכל רינדור.

## העברת מידע באמצעות `props`

קישור לתיעוד:

[Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)

`props` הם מידע שרכיב אב מעביר לרכיב בן.

ב־`App`:

```jsx
<MovieGrid movies={shows} />
```

כאן:

```text
shows
```

הוא המערך שנשמר ב־state.

```text
movies
```

הוא שם ה־prop ש־`MovieGrid` מקבל.

ב־`MovieGrid`:

```jsx
function MovieGrid({ movies }) {
  return (
    <section>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  )
}
```

## `map`

קישור לתיעוד:

[Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

`map` עובר על כל איבר במערך ומחזיר תוצאה חדשה עבור כל איבר.

```jsx
movies.map((movie) => (
  <MovieCard key={movie.id} movie={movie} />
))
```

במקרה שלנו:

- `movies` הוא מערך הסדרות.
- `movie` היא סדרה אחת בכל סיבוב.
- עבור כל סדרה נוצר כרטיס.

## `key` ברשימה

כאשר מציגים רשימה ב־React, לכל פריט צריך להיות `key` ייחודי.

```jsx
<MovieCard key={movie.id} movie={movie} />
```

ה־`key` עוזר ל־React לזהות איזה פריט השתנה.

בדרך כלל משתמשים ב־`id` שמגיע מהשרת.

## `join`

קישור לתיעוד:

[Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

ב־TVMaze, השדה `genres` הוא מערך:

```js
['Drama', 'Comedy']
```

כדי להציג אותו כטקסט, משתמשים ב־`join`:

```jsx
{movie.genres.join(', ')}
```

התוצאה:

```text
Drama, Comedy
```

## מבנה הנתונים של TVMaze

תיעוד ה־API:

[TVMaze API](https://www.tvmaze.com/api)

כתובת רשימת הסדרות:

[TVMaze shows endpoint](https://api.tvmaze.com/shows)

דוגמה לחלק מאובייקט שמגיע מהשרת:

```js
{
  id: 1,
  name: 'Under the Dome',
  genres: ['Drama', 'Science-Fiction'],
  premiered: '2013-06-24',
  rating: {
    average: 6.5
  },
  image: {
    medium: 'https://...'
  }
}
```

לכן בכרטיס שלנו משתמשים ב:

```jsx
<h2>{movie.name}</h2>
<p>{movie.premiered}</p>
<p>{movie.genres.join(', ')}</p>
```

## `optional chaining`

קישור לתיעוד:

[Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

לפעמים מידע מהשרת חסר.

הסימן:

```text
?.
```

מאפשר גישה בטוחה יותר:

```jsx
{movie.image?.medium}
```

אם `image` חסר, הביטוי לא יגרום מיד לשגיאה.

## `filter`

קישור לתיעוד:

[Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

`filter` יוצר מערך חדש שמכיל רק איברים שעומדים בתנאי.

```js
const comedyShows = shows.filter((show) =>
  show.genres.includes('Comedy')
)
```

נשתמש בו בהמשך לחיפוש ולסינון בצד הלקוח.

## בדיקת הצלחה בסיסית

לאחר שמירת הקבצים:

1. ודא ששרת הפיתוח פועל.
2. פתח את הכתובת שה־Vite הציג.
3. בדוק שמופיעים כרטיסים.
4. פתח את כלי המפתחים בדפדפן אם יש שגיאה.
5. בדוק את לשונית `Console`.

פקודות שימושיות:

```powershell
cd C:\Users\shale\Desktop\projects\inmanage-react
npm run dev
```

## סדר הלימוד שלנו

1. הצגת נתונים מ־TVMaze.
2. הוספת תמונה ודירוג לכרטיס.
3. מצב טעינה.
4. מצב שגיאה.
5. חיפוש טקסטואלי.
6. סינון לפי ז׳אנר.
7. עיצוב עם Grid ו־Flexbox.
