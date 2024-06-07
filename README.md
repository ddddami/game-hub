# GameHub

[Live Preview](https://github.com/ddddami/game-hub)

## Setup

You have to have a 'sane' version of node on your system.

You can install one @nodejs.org (this project uses nodev20)

#### Clone the project,

`git clone https://github.com/ddddami/game-hub.git`

#### Install all the dependencies

`npm install`

#### Get an API key

All the games and metadata are from RAWG API. Big shoutout to the guys at RAWG.
Get an API key from [rawg.io](https://rawg.io/apidocs), create a .env at the root of your project.

`VITE_RAWG_API=<YOUR-RAWG-API-KEY-HERE>`

#### Run the project

`npm run dev`

---

## Features of the app

### UI

Leveraged Chakra UI (by Segun Adebayo)'s beautiful and extensible components to create an accessible and responsive user interface for this app.

### State Management

- Utilized the Context API for efficient global state management
- Used Zustand, a lightweight and performant state management library (Yes, no redux nonsense)

### Routing

Implemented routing client-side routing using React Router v6.

### Tanstack Query..

This was useful for quite a number of useful features in the app

- Infinte queries
- Efficiently managing server state
- Caching (You probably didn't noticed)
- Automatic retries, refetch (yes, react query is nice😉)

---

<p>And that's it..</p>
I'm happy if you find this project interesting, you can create an issue if you'd like to suggest anything.

I'd also like to say a big thank you to [Mosh](https://x.com/moshhamedani) for his awesome course and helping me build my coding skills.
