<h1>Coronatime App</h1>

<P style="font-size: 16px">Corona worldwide statistics</P>

#

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)

#

### Prerequisites

- _Node JS @16.X and up_
- _npm @6 and up_

#

### Tech Stack

- [React @18.00.0](https://reactjs.org) - front-end framework
- [React Router Dom @6](https://reactrouter.com) - fully-featured routing library
- [Tailwlind Css @3](https://tailwindui.com/documentation) - A utility-first CSS framework
- [React Hook Form @7 ](https://react-hook-form.com) - easy form validation
- [React dotenv](https://www.npmjs.com/package/react-dotenv) - environment variables
- [React i18next](https://react.i18next.com) - internationalization framework

#

## Getting Started

#

### Clone repository

#

1\. First of all you need to clone Covid repository from github:

```sh
git clone https://github.com/ibotchori/coronatime.git
```

2\. Next step requires install all the dependencies.

```sh
npm install
```

#

### How to setup environment variables

#

</hr>
<p style="margin: 10px 0">We use environment variables heavily in our projects. It allows us to have personalized configurations, but it also makes it easy to deploy our projects without having to store sensitive values in our codebase.</p>

#### A short introduction to the config file

<p>In the root of project you find example env file looks like this:</p>

```sh
REACT_APP_BASE_URL=https://your-url/api
```

<p>Create your .env file in the root of project and copy everything from .env.example to your .env, in your terminal type:</p>

```sh
cp .env.example .env
```

<P>After you copy everything in your env file, replace dummy urls with your own</p>

#

3\. After installing all dependencies and env setup you can start project

```
 npm start

```

#


### Project Structure

```bash
├─── public   # readme assets
    ├─── locales   # global languages
├─── src   # project source codes
    ├─── assets   # project images and fonts
    ├─── components   # reusable components
         -index.js   # export default component
    ├─── helpers
        ├─── schema   # form validations
    ├─── pages      # react navigation screens
         -index.js   # export default screen
    - App.tsx   # main file
    - i18nts    # global languages configuration
    - index.css
    - index.tx
- .env.example   # env example
- .gitignore
- .eslintrc.json   # eslint config file
- .prettierrc.js   # prettier config file
- package-lock.json   # dependency manager configurations
- package.json   # dependency manager configurations
- postcss.config.js   # tailwind css configuration
- README.md   # readme file
- tailwind.config.js   # tailwind css configuration
- tsconfig.json   # typescript configuration

```

### Deployment

npm run build creates a build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served index.html, and requests to static paths like /static/js/main.<hash>.js are served with the contents of the /static/js/main.<hash>.js file. For more information see the [production](https://create-react-app.dev/docs/production-build/) build section.