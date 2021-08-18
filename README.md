<h1 align="center">Sudoku Time</h1>

[View the live project here.](https://elriem.github.io/CI_MS2_Sudoku-Game/)

This website hosts Sudoku puzzles to complete within a fixed time, or to time how long it takes to complete the puzzle. 

## Contents <!-- omit in toc -->

- [1. User Experience (UX)](#1-user-experience-ux)
  - [1.1 Strategy Plane](#11-strategy-plane)
    - [1.1.1 Target audience](#111-target-audience)
    - [1.1.2 User Stories](#112-user-stories)
      - [First Time Visitor Goals](#first-time-visitor-goals)
      - [Returning / Frequent Visitor Goals](#returning--frequent-visitor-goals)
      - [Site Owner Goals](#site-owner-goals)
  - [1.2 Scope Plane](#12-scope-plane)
    - [1.2.1 Requirements and functional specifications](#121-requirements-and-functional-specifications)
    - [1.2.2 Features](#122-features)
      - [Existing Features](#existing-features)
      - [Features Left to Implement](#features-left-to-implement)
  - [1.3 Structure Plane](#13-structure-plane)
    - [Site Map](#site-map)
  - [1.4 Skeleton Plane](#14-skeleton-plane)
    - [1.4.1 Navigation](#141-navigation)
    - [1.4.2 Wireframes](#142-wireframes)
  - [1.5 Surface Plane](#15-surface-plane)
    - [Colour scheme](#colour-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
- [2 Technologies Used](#2-technologies-used)
  - [2.1 Language Used](#21-language-used)
  - [2.2 Frameworks, Libraries & Programs Used](#22-frameworks-libraries--programs-used)
- [3. Testing](#3-testing)
      - [Click here to go to testing](#click-here-to-go-to-testing)
- [4. Deployment](#4-deployment)
  - [4.1. GitHub Pages](#41-github-pages)
  - [4.2. Forking the GitHub Repository](#42-forking-the-github-repository)
  - [4.3. Making a Local Clone](#43-making-a-local-clone)
- [5. Credits](#5-credits)
  - [5.1. Code](#51-code)
  - [5.2. Content](#52-content)
  - [5.3. Media](#53-media)
  - [5.4. Acknowledgements](#54-acknowledgements)

# 1. User Experience (UX)

## 1.1 Strategy Plane

This website was created for Sudoku enthusiasts, offering an opportunity to improve puzzle completion times and the challenge of completing a puzzle within a fixed average completion time at easy, medium and difficult levels.

### 1.1.1 Target audience

- New Sudoku players interested looking for a new hobby.
- Returning palyers looking to improve their puzzle completion times and practice techniques.
- Players who want to challenge themselves to complete a puzzle within a limited period of time.

### 1.1.2 User Stories

#### First Time Visitor Goals

  1. As a First Time Visitor, As a Returning Visitor, I want to easily navigate from the landing page to the game (challenge / practice).
  2. As a First Time Visitor, I want to have access to and learn the rules.
  3. As a First Time Visitor, I want to view hints and tips on how best to approach the game.
  4. As a First Time Visitor,I want to practice different puzzles to improve my completion times.
  5. As a First Time Visitor,  I want to have access new puzzles on demand.
  6. As a First Time Visitor, I want to see the solved puzzle if I get stuck.
  
#### Returning / Frequent Visitor Goals
  
  7. As a Returning / Frequent Visitor, I want to easily navigate from the landing page to the game (challenge / practice).
  8. As a Returning / Frequent Visitor, I want to view hints and tips to improve my game completion times.
  9. As a Returning / Frequent Visitor, I want to have access new puzzles on demand.
  10. As a Returning / Frequent Visitor, I want to complete games with a time limit to compare my times to the average.
  11. As a Returning / Frequent Visitor, I want to be able to change the background to my preference (dark / light / colourful).

#### Site Owner Goals

  12. As the Site Owner, I want to attract and retain users and ultimately replace their paper games. 
  13. As the Site Owner, I want to make it easy and convenient for users to send suggestions for improvement or bug reports to a dedicated mailbox, thereby improving the chances of them returning.

## 1.2 Scope Plane

### 1.2.1 Requirements and functional specifications

- Header and Footer
  - Simple header with Logo that returns to landing page
  - Footer with icons, navigates
    -  Home (landing page) - best practice, 
    -  Settings popover - change theme
    -  Contact page - report bugs / suggestions or contact
- Landing page
  - Large and clearly visible buttons to navigate to practice game / challenge game / rules
- Practice game page
  - Randomly generated puzzle, covering majority of page
  - Number input cells to select / type answers
  - Stopwatch timer to record time spent
  - New button to generate new puzzle
  - Solve button to view solution, generate new puzzle or exit to landing page
  - Restart button to reset the board - timer continues, purpose is to remove inputs and try again
  - Level selector to change between easy, medium, or difficult (more or less cells missing)
  - Timer start button
  - Timer pause button - creates popup to hide puzzle while "stepping away"
- Challenge game page
  - Randomly generated puzzle, covering majority of page
  - Number input cells to select / type answers
  - Stopwatch timer to record time spent
  - New button to generate new puzzle
  - Solve button to view solution, generate new puzzle or exit to landing page
  - Restart button to reset the board - time countdown continues, purpose is to remove inputs and try again
  - Level selector to change between easy, medium, or difficult (more or less cells missing)

### 1.2.2 Features

#### Existing Features

- Responsive on all device sizes
- Interactive elements
- Game set at different levels - easy, medium, difficult
- Games randomly generated, with random cells left blank
- Practice with stopwatch timer - records how long it takes to complete puzzle
- Challenge with countdown timer - time limit to complete puzzle based on average time at that level
- Puzzle solution to (self) compare against inputs
- Rules with strategy for completion
- Contact form to report bugs / make suggestions

#### Features Left to Implement

- Puzzle for the day challenge, where site visitors can compete for better completion time
- Scoreboard to store best scored times and levels of all visitors
- Check inputs against solution
- Save last 5 completion times and levels in practice game to track improvement

## 1.3 Structure Plane

### Site Map

- Landing page to act as main menu
- Return to landing page, settings and contact form can be accessed from all pages
- Schematic website flow can be seen [here](assets/../docs/other/flow.png)

## 1.4 Skeleton Plane

### 1.4.1 Navigation

- Landing page navigates to Practice and Challenge pages, and Rules page.
- Practice, Challenge and Rules pages navigate to landing page, with settings and contact page accessible from header and footer.

### 1.4.2 Wireframes

- Home / Landing page - [view](docs\wireframes\home.png)
- Game (practice & challenge) page - [view](docs\wireframes\game.png)
- Rules page - [view](docs\wireframes\rules.png)
- Contact page - [view](docs\wireframes\contact.png)

## 1.5 Surface Plane

### Colour scheme

- For the colour scheme, I wanted to keep the colour schemes simple due to the nature of the game. 

- The main colours for the three themes were:
  - Bright, generated by uploading [a picture from Pexels](\docs\other\bright.jpg\) to coolors (https://coolors.co/291420-adbd89-eac7ae-63183c-dddca6)
    - #DDDCA6 Pale Spring Bud - Background colour
    - #ADBD89 Olivine - Header and footer background colour
    - #EAC7AE Desert Sand - Navigation buttons on landing page 
    - #291420 Dark Purple - Header text
    - #63183C Tyrian Purple - Content text
    - #FFF White - puzzle and timer background
    - Snapshot of palette images can be viewed [here](docs\other\color-palette_bright.png\)
    - Attribution: [Photo by Pixabay from Pexels](https://www.pexels.com/photo/butterfly-perched-on-flower-462118/)
    
  - Light, generated by uploading [a picture from Pexels](\docs\other\light.jpg\) to coolors (https://coolors.co/ffffff-f7f1ff-decdf5-656176-534d56)
    - #F7F1FF Magnolia - Background colour and Content text
    - #DECDF5 Thistle - Header and footer background colour
    - #656176 Old Lavendar - Navigation buttons on landing page 
    - #534D56 Dark Liver - Header text
    - #FFF White - puzzle and timer background
    - Snapshot of palette images can be viewed [here](docs\other\color-palette_light.png\)
    - Attribution: [Photo by Pixabay from Pexels]https://www.pexels.com/photo/pink-and-purple-flower-field-262713/)

  - Dark, generated by uploading [a picture from Pexels](\docs\other\dark.jpg\) to coolors (https://coolors.co/4f6073-eeeeee-a8c4c3-3d4b59-60848b)
    - #3D4B59 Charcoal - Background colour
    - #4F6073 Black Coral - Header and footer background colour
    - #EEE Cultured - Navigation buttons on landing page, puzzle and timer background
    - #534D56 Dark Liver - Header and Content text
    - #60848B Steel Teal - Puzzle input cells
    - Snapshot of palette images can be viewed [here](docs\other\color-palette_dark.png\)
    - Attribution: [Photo by Pixabay from Pexels](https://www.pexels.com/photo/close-up-of-leaf-326055/)

### Typography

- When selecting a font for the puzzle, I searched Google Fonts (filtering for Numerals) for a font with . I selected EB Garamond, which is a classical font with numbers that are equal in size and align with all other numbers in a single line. This was important to me to make sure the numbers in the puzzle appeared in a straight line across the grid, with no numbers dipping below or sticking out above others.

- For the website text, I used EB Garamond's suggested pairing "Raleway" for its elegant and classic format, which I feel alings with the nature of the game.

### Imagery

- I opted for a simple background on the because the puzzle grid is already quite busy and a busy background would add unnecessary distraction.

# 2 Technologies Used

## 2.1 Language Used

- [HTML 5](https://en.wikipedia.org/wiki/HTML5)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## 2.2 Frameworks, Libraries & Programs Used

### - [Bootstrap 5:](https://getbootstrap.com/docs/5.1/getting-started/introduction/) <!-- omit in toc -->

- Bootstrap was used to assist with the responsiveness and styling of the website:
  - Horizontal alignment navs & tabs used for navbar
  
### - [Google Fonts:](https://fonts.google.com/) <!-- omit in toc -->

- Imported "EB Garamond" and "Raleway" fonts from Google Fonts into the style.css file used on all pages throughout the website.
  
### - [Font Awesome:](https://fontawesome.com/) <!-- omit in toc -->

- Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.

### - [jQuery:](https://jquery.com/) <!-- omit in toc -->

- jQuery in conjunction with Bootstrap make the navbar and modal responsive.

### - [Git:](https://git-scm.com/) <!-- omit in toc -->

- Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

### - [GitHub:](https://github.com/) <!-- omit in toc -->

- GitHub is used to store the projects code after being pushed from Git.

### - [Visual Studio Code:](https://code.visualstudio.com/) <!-- omit in toc -->

- IDE used to write code for this project.

### - [Balsamiq:](https://balsamiq.com/) <!-- omit in toc -->

- Balsamiq was used to create the wireframes during the design process.

### - [Am I Responsive:](http://ami.responsivedesign.is/) <!-- omit in toc -->

- Used to create mockups for README file.

# 3. Testing

#### [Click here to go to testing](TESTING.md)

# 4. Deployment

## 4.1. GitHub Pages

The project was deployed to GitHub Pages as follows:

1. Log in to GitHub and locate the [GitHub Repository](#)
2. Locate the "Settings" button in the menu above the Repository.
   - Alternatively, click [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) from the "Creating your site" section for a description of the process. ![GitHub menu](docs/readme/other/github-bar.png)
3. Scroll down the Settings page until you locate the "Pages" section.![GitHub settings options](docs/readme/other/github-sidemenu.png)
4. In the "Source" section, select the dropdown "Branch:" dropdown and select "Main" and save. ![GitHub pages](docs/readme/other/github-pages.png)
5. The page refreshes automatically.
6. Scroll to "Your site is published at..." for the puslished site link in the "GitHub Pages" section.

## 4.2. Forking the GitHub Repository

A fork is a copy of the repository, allowing you to experiment with changes without affecting the original project.

1. Log in to GitHub and locate the [GitHub Repository](#)
2. In the banner above the Repository, click on the "Fork" button.
3. ![GitHub banner with Fork](docs/readme/other/github-forkmenu.png)
4. If you have succeeded, you now have a copy of the original repository in your GitHub account.

Alternatively, click [here](https://docs.github.com/en/github/getting-started-with-github/quickstart/fork-a-repo) for a guide to fork a repository.

## 4.3. Making a Local Clone

A clone allows you to create a local copy of a repository on your computer and sync between your computer and the GitHub repository.

1. Log in to GitHub and locate the [GitHub Repository](#)
2. Click on Code, click on the copy button next to HTTPS to copy the URL. ![GitHub banner with Fork](docs/readme/other/github-forkmenu.png)
3. Open Git Bash.
4. Change the current working directory to the location where the cloned directory should be stored.
5. Type "git clone', then paste the URL copied in step 2.
6. Press Enter to create a local clone.

Alternatively, click [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) for a guide to clone a repository.

# 5. Credits

## 5.1. Code

- Bootstrap 5: Bootstrap Library used to make the site responsive using the Bootstrap Grid System
- W3schools.com used for making changes to formatting and customising Bootstrap content used.
- FreeCodeCamp for guidance on using flexbox for page layout, [here](https://www.freecodecamp.org/news/learn-flexbox-build-5-layouts/)

## 5.2. Content
  - Created favicon from logo using https://www.favicon.cc/?
- Rules page:
  - Sudoku rules and solve approach from [here](https://masteringsudoku.com/sudoku-rules-beginners/)
- Contact page:


## 5.3. Media

- 

## 5.4. Acknowledgements

- 