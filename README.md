# JOKES App

## To run the project
1. Run command  npm install to install node modules
2. Run command npm run dev to start the 
```bash
$ npm install
$ npm run dev
```
3. For the translation functionality to work DEEPL API key is required to be placed in the .env file

## Approach to the challenge

Before starting the coding process, I made sure to thoroughly understand the challenge and its requirements. I took time to read the documentation for both the Joke API and DeepL API, which provided me with a clearer understanding of what needed to be done.

Recognizing that the application's functionality was the primary criterion, I designed a landing page that allows the user to navigate to the jokes page. This gave me the opportunity to showcase my knowledge of Next.js's Link component and how Next.js's file structure naturally routes between pages.

Upon arriving on the jokes page, the user is presented with two cards, each displaying a joke. Each card includes a dropdown menu for selecting the desired language for translation.

To fetch the jokes, I implemented React Query a powerful data fetching & state management library, which allowed me to efficiently manage the fetching process by providing access to properties like isLoading, data, and isFetching, reducing the amount of code I needed to write.

Since DeepL's API doesn't support direct calls from browser-based applications due to security concerns, I leveraged my backend knowledge to create a server-side route. This route securely interacts with the DeepL API, preventing exposure of sensitive credentials.

I ensured that my code followed modular design principles and adhered to a clean, organized folder structure, maintaining good practices for readability and scalability.


