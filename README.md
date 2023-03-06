<div align="center">

<img src="![277F354E-8E76-4FB1-BFDE-E37DF869B88E](https://user-images.githubusercontent.com/82419988/223166267-ed8db831-587e-41d1-b3ec-9b646b882325.png)" width="375" height="375">



  
# Pokependium
  


</div>

  <p align="center">
    <a href="https://github.com/nordbyi/Pokependium"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/nordbyi/Pokependium/issues">Report Bug</a>
    ·
    <a href="https://github.com/nordbyi/Pokependium/issues">Request Feature</a>
  </p>

</div>

<div align="center">

## Table of Contents

[Abstract](#abstract) ~
[Installation Instructions](#installation-instructions) ~
[Deployed Link](#deployed-link) ~
[Preview of App](#preview-of-app) ~
[Technologies](#technologies) ~
[Contributors](#contributors) ~
[Sources](#sources)

</div>

<div align="center">

## Abstract:

[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)

Pokependium is an application that allows a user to explore their favorite Pokemon!  On load users can see a display of Pokemon that are fetched from the PokeAPI. They can filter pokemon by name and click in the naviation to see all Pokemon of the selected type.  When a user clicks on any pokemon's image they are routed using React Router to a details page about that Pokemon.  The url updates to display a path to that Pokemon that includes all of its types and its ID.  Additionally, the navigation applies an active style to all of that pokemon's types.  On the Pokemon details page, a user is greeted with a larger image of that Pokemon, along with its basic stats and its Pokedex entries from across all the mainline Pokemon games it has appeared in (which is fetched on mount). 

The app incorporates a responsive layout and will change its structure to fit both large and mobile displays. It was built using functional React Hooks, asynchronous JavaScript, controlled form pattern, React Router and propTypes. It uses End-To-End Testing using Cypress where fetch requests are stubbed with fixtures and sad paths are tested to ensure intended execution.  An animated loading spinner component and an error component are also conditionally rendered based on state. 

I built this over 3 days as part of Turing School of Software and Design's 3rd quarter's final solo project.

I hope you have fun exploring Pokependium!

 
  
</div>

---

## Installation Instructions:

[//]: <> (What steps does a person have to take to get your app cloned down and running?)

1. Fork the Repo from the [Repository](https://github.com/nordbyi/Pokependium)
2. Clone the repo
   ```sh
   git clone https://github.com/nordbyi/Pokependium.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run npm start
   ```sh
   npm start
   ```
5. Use the Link that is given in the Terminal & Open in Browser
   ```sh
   Example: http://localhost:3000/
   ```

---
  
## Deployed Link

[Click here to view deployed app on Vercel](https://pokependium-2.vercel.app/)

---

## Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)

 
 <!-- ![ezgif com-video-to-gif](https://user-images.githubusercontent.com/113261334/221386610-b01bd089-a587-49bf-bd4d-c2ef6916606f.gif) -->


  

---

## Technologies

<div>
  <img src="https://img.shields.io/badge/-react-333333?logo=react&style=for-the-badge" width="100" height="30"/>
  <img src="https://img.shields.io/badge/-react%20router-f44250?logo=react%20router&logoColor=white&style=for-the-badge" width="140" height="30"/>
  <img src="https://img.shields.io/badge/-cypress-007780?logo=cypress&logoColor=white&style=for-the-badge" width="100" height="30"/>
  <img src="https://img.shields.io/badge/-CSS3-315780?logo=css3&style=for-the-badge" width="100" height="30"/>
  <img src="https://img.shields.io/badge/-npm-c12127?logo=npm&logoColor=white&style=for-the-badge" width="80"  height="30"/>
</div>

---

## Contributors:

[//]: <> (Who worked on this application? Link to their GitHubs.)

<div>
  <img src="https://img.shields.io/badge/-Ian%20Nordby-B2AC88" height="30" width="100">
  <p><strong>Connect with:</strong></p>
  <a href="https://www.linkedin.com/in/iannordby/"> 
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <a href="https://github.com/nordbyi">
    <img src="https://img.shields.io/badge/-github-black?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge">
  </a>
  <a href="mailto: ian.c.nordby@gmail.com">
    <img src="https://img.shields.io/badge/-gmail-red?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail Badge">
  </a>

---
