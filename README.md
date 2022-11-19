This app is an example of my ReactJS code for the job interviews. It is loan pricing calculator, where when you change the values, you see different outputs.

## Technologies

I built this project in these technologies:
1. TypeScript
2. NextJS
3. Tailwind CSS
4. ReactQuery


Interesting information about this implementation:

1. First initial data are loaded with NextJS GetStaticProps
2. When user create some 2 slider combination which is the same, data are cached and there are no additional request. It works even, when you are offline.
3. Default error screen
4. Network component for handling loading, error and data state
5. I used useRef instead of useState for getting values from the input sliders
6. Custom reducers instead of useState
7. Universal useFetch function for getting the data
6. Optimalisation
