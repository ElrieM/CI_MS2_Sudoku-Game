# 4. Testing

- The website was tested on Google Chrome, Firefox and Microsoft Edge.

- The website was viewed on a variety of devices, including:

| Name | Type | Browser | Version | Nature | 
| --- | --- | --- | --- | --- |
| iPhone Xs | Mobile | Safari | 14.1.2 | Physical |
| iPhone 11s | Mobile | Safari | 14.1.2 | Physical |
| iPhone 5/SE | Mobile | Chrome simulation | Chrome simulation | Emulator |
| Galaxy Note 3 | Mobile | Chrome simulation | | Emulator |
| iPad | Tablet | Chrome simulation | | Emulator |
| Surface Duo | Tablet | Chrome simulation | | Emulator | 
| Toshiba Satellite L850-F33V | Desktop | Chrome | | Physical |
| Dell Inspiron 15 5515 with 24" Dell monitor | Desktop | Chrome | | Physical |
| Dell Inspiron 15 5515 with 24" Dell monitor | Desktop | Firefox | 91.0.1 | Physical |
| Dell Inspiron 15 5515 with 24" Dell monitor | Desktop | Microsoft Edge | 92.0.902.78 | Physical |

- Friends and family were asked to review the site and documentation to point out bugs and /or user experience issues.

- [4. Testing](#4-testing)
  - [4.1 Manual testing](#41-manual-testing)
    - [4.1.1 HTML - W3C Markup Validator](#411-html---w3c-markup-validator)
    - [4.1.2 CSS - W3C CSS Validator](#412-css---w3c-css-validator)
    - [4.1.3 Accessibility - WAVE Web Accessibility Evaluation Tool](#413-accessibility---wave-web-accessibility-evaluation-tool)
    - [4.1.4 Performance - Chrome Lighthouse](#414-performance---chrome-lighthouse)
    - [4.1.5 JSHint](#415-jshint)
    - [4.1.6 User Experience testing](#416-user-experience-testing)
      - [User Story 1. As a Site Visitor, I want to easily navigate the website's pages from the header and footer](#user-story-1-as-a-site-visitor-i-want-to-easily-navigate-the-websites-pages-from-the-header-and-footer)
      - [User Story 2. As a Site Visitor, I want to have access to and learn the rules](#user-story-2-as-a-site-visitor-i-want-to-have-access-to-and-learn-the-rules)
      - [User Story 3. As a Site Visitor, I want to view hints and tips on how best to approach the game](#user-story-3-as-a-site-visitor-i-want-to-view-hints-and-tips-on-how-best-to-approach-the-game)
      - [User Story 4. As a Site Visitor, I want to have access to new puzzles on demand](#user-story-4-as-a-site-visitor-i-want-to-have-access-to-new-puzzles-on-demand)
      - [User Story 5. As a Site Visitor, I want to practice different puzzles to improve my completion times](#user-story-5-as-a-site-visitor-i-want-to-practice-different-puzzles-to-improve-my-completion-times)
      - [User Story 6. As a Site Visitor, I want to complete games with a time limit to compare my times to the average](#user-story-6-as-a-site-visitor-i-want-to-complete-games-with-a-time-limit-to-compare-my-times-to-the-average)
      - [User Story 7. As a Site Visitor, I want to see the solved puzzle if I get stuck](#user-story-7-as-a-site-visitor-i-want-to-see-the-solved-puzzle-if-i-get-stuck)
      - [User Story 8. As a Site Visitor, I want to be able to change the background to my preference (dark / light / colourful)](#user-story-8-as-a-site-visitor-i-want-to-be-able-to-change-the-background-to-my-preference-dark--light--colourful)
      - [User Story 9. As the Site Owner, I want to make it easy and convenient for users to send suggestions for improvement or bug reports to a dedicated mailbox, thereby improving the chances of them returning](#user-story-9-as-the-site-owner-i-want-to-make-it-easy-and-convenient-for-users-to-send-suggestions-for-improvement-or-bug-reports-to-a-dedicated-mailbox-thereby-improving-the-chances-of-them-returning)
  - [4.2 Automated testing](#42-automated-testing)
  - [4.3 Testing Bugs - Resolved](#43-testing-bugs---resolved)
  - [4.4 Known Bugs](#44-known-bugs)

## 4.1 Manual testing

The following tools were used to validate every page of project to ensure there were no syntax errors in the project:

### 4.1.1 HTML - W3C Markup Validator
- Pages tested:
  
| Page | Outcome | Link |
| --- | --- | --- |
| Home | No errors | [results](docs/testing/test-results/validator-tools/w3c_html/w3c-html_index.png) |
| Practice | No errors | [results](docs/testing/test-results/validator-tools/w3c_html/w3c-html_practice.png) |
| Challenge | No errors | [results](docs/testing/test-results/validator-tools/w3c_html/w3c-html_challenge.png) |
| Rules | No errors | [results](docs/testing/test-results/validator-tools/w3c_html/w3c-html_rules.png) |
| Contact | No errors | [results]() |
| Error (404) | No errors | [results](docs/testing/test-results/validator-tools/w3c_html/w3c-html_404.png) |
  
### 4.1.2 CSS - W3C CSS Validator
  - All errors / warnings relate to Bootstrap and Font Awesome.
  - Summary of result:
    - No errors or warnings from CSS style file unrelated to Bootstrap;
    - Errors from Bootstrap 5.1 (unused / unrecognised errors); and
    - Errors from FontAwesome.
  - Report can be found [here](docs/testing/test-results/validator-tools/w3c_css/w3c-css.png).
  
### 4.1.3 Accessibility - WAVE Web Accessibility Evaluation Tool
- Pages tested:
  
| Page | Result - Errors | Result - Warnings | Link |
| --- | --- | --- | --- |
| Home | No errors | Alert for redundant link | [results](docs/testing/test-results/validator-tools/wave_accessibility/wave_index.png) |
| Practice | No errors | Alert for redundant link | [results](docs/testing/test-results/validator-tools/wave_accessibility/wave_practice.png) |
| Challenge | No errors | Alert for redundant link | [results](docs/testing/test-results/validator-tools/wave_accessibility/wave_challenge.png) |
| Rules | No errors | Alert for redundant link | [results](docs/testing/test-results/validator-tools/wave_accessibility/wave_rules.png) |
| Contact | No errors | Alert for redundant link | [results]() |
| Error (404) | No errors | Alert for redundant link | [results](docs/testing/test-results/validator-tools/wave_accessibility/wave_404.png) |
 
### 4.1.4 Performance - Chrome Lighthouse
  - Pages tested (mobile and desktop tested on each):
    
  | Page | Scores - Desktop | Scores - Mobile | Link |
  | --- | --- | --- | --- |
  | Home | Performance - 100, Accessibility - 100, Best Practices - 100, SEO - 100 | Performance - 98, Accessibility - 100, Best Practices - 100, SEO - 100 | [Desktop results](docs/testing/../../docs/testing/test-results/validator-tools/lighthouse/lighthouse_index.png), [Mobile results](docs/testing/../../docs/testing/test-results/validator-tools/lighthouse/lighthouse_index_mobile.png) |
  | Practice | Performance - 99, Accessibility - 98, Best Practices - 100, SEO - 100 | Performance - 89, Accessibility - 96, Best Practices - 100, SEO - 96 | [Desktop results](docs/testing/../../docs/testing/test-results/validator-tools/lighthouse/lighthouse_practice.png), [Mobile results](docs/testing/../../docs/testing/test-results/validator-tools/lighthouse/lighthouse_practice_mobile.png) |
  | Challenge |  Performance - 99, Accessibility - 100, Best Practices - 100, SEO - 100 | Performance - 87, Accessibility - 98, Best Practices - 100, SEO - 96 | [Desktop results](docs/testing/../../docs/testing/test-results/validator-tools/lighthouse/lighthouse_challenge.png), [Mobile results](docs/testing/../../docs/testing/test-results/validator-tools/lighthouse/lighthouse_challenge_mobile.png) |
  | Rules | Performance - 100, Accessibility - 100, Best Practices - 100, SEO - 100 | Performance - 95, Accessibility - 100, Best Practices - 100, SEO - 100 | [Desktop results](docs/testing/../../docs/testing/test-results/validator-tools/lighthouse/lighthouse_rules.png), [Mobile results](docs/testing/../../docs/testing/test-results/validator-tools/lighthouse/lighthouse_rules_mobile.png) |
  | Contact |  Performance - 100, Accessibility - 100, Best Practices - 100, SEO - 100 | Performance - 97, Accessibility - 100, Best Practices - 100, SEO - 100  | [Desktop results](docs/testing/../../docs/testing/test-results/validator-tools/lighthouse/lighthouse_contact.png), [Mobile results](docs/testing/../../docs/testing/test-results/validator-tools/lighthouse/lighthouse_contact_mobile.png) |
  | Error (404) | Performance - 99, Accessibility - 100, Best Practices - 100, SEO - 100 | Performance - 94, Accessibility - 100, Best Practices - 100, SEO - 100 | [Desktop results](docs/testing/../../docs/testing/test-results/validator-tools/lighthouse/lighthouse_404.png), [Mobile results](docs/testing/../../docs/testing/test-results/validator-tools/lighthouse/lighthouse_404_mobile.png) |

### 4.1.5 JSHint
  - Pages tested (mobile and desktop tested on each):
    
  | Page | Results | Link |
  | --- | --- | --- |
  | index.js | No issues | [results](docs/testing/test-results/validator-tools/jshint/jsHint_index.png) |
  | practice.js | Flagged $ for jQuery, no other issues | [results](docs/testing/test-results/validator-tools/jshint/jsHint_practice.png) |
  | challenge.js | Flagged $ for jQuery, no other issues | [results](docs/testing/test-results/validator-tools/jshint/jsHint_challenge.png) |
  | contact.js | No issues | [results](docs/testing/test-results/validator-tools/jshint/jsHint_contact.png) |
  | email.js | Undefined emailJS ignored. No issues | [results](docs/testing/test-results/validator-tools/jshint/jsHint_emailJS.png) |
  | themes.js | Functions declared in loops ignored, required for the purpose of the function | [results](docs/testing/test-results/validator-tools/jshint/jsHint_themes.png) |

### 4.1.6 User Experience testing  

#### User Story 1. As a Site Visitor, I want to easily navigate the website's pages from the header and footer <!-- omit from toc -->

1.1 Header with Navigation Bar

- Requirements considered
  - Simple header with Logo that returns to landing page and dropdown menu
  - Hamburger menu displays on all device sizes

- Tests
  | Step | Expected Result | Devices | Test Result |
  | --- | --- | --- | --- |
  | Click on Home in dropdown menu | Navigates to home page | Desktop, Tablet, Mobile| All passed |
  | Click on Practice in dropdown menu | Navigates to practice game page | Desktop, Tablet, Mobile| All passed |
  | Click on Challenge in dropdown menu | Navigates to challenge game page | Desktop, Tablet, Mobile| All passed |
  | Click on Rules in dropdown menu | Navigates to rules page | Desktop, Tablet, Mobile| All passed |
  | Click on Logo | Navigates to home page | Desktop, Tablet, Mobile| All passed |
  | Switch through different devices | Menu as a hamburger menu on all pages | Desktop, Tablet, Mobile| All passed |

1.2 Footer with navigation links

- Requirements considered
  - Footer with icons, navigates to Home (landing page), Settings popover (change theme), Contact page (report bugs / suggestions or contact)

- Tests
  | Step | Expected Result | Devices | Test Result |
  | --- | --- | --- | --- |
  | Click on Home icon | Navigates to home page | Desktop, Tablet, Mobile| All passed |
  | Click on Settings icon | Pops up settings tab with theme selector | Desktop, Tablet, Mobile| All passed |
  | Click on Contact icon | Navigates to contact page | Desktop, Tablet, Mobile| All passed |

1.3 Landing page

- Requirements considered
  - Large and clearly visible buttons to navigate to practice game / challenge game / rules

- Tests
  | Step | Expected Result | Devices | Test Result |
  | --- | --- | --- | --- |
  | Click on Practice button | Navigates to practice game | Desktop, Tablet, Mobile| All passed |
  | Click on Challenge button | Navigates to challenge game | Desktop, Tablet, Mobile| All passed |
  | Click on Rules button | Navigates to rules page | Desktop, Tablet, Mobile| All passed |

#### User Story 2. As a Site Visitor, I want to have access to and learn the rules <!-- omit from toc -->

#### User Story 3. As a Site Visitor, I want to view hints and tips on how best to approach the game <!-- omit from toc -->

#### User Story 4. As a Site Visitor, I want to have access to new puzzles on demand <!-- omit from toc -->

4.1 Practice game page

- Requirements considered
  - Randomly generated puzzle, covering majority of page
  - New button to generate new puzzle

- Tests
  | Step | Expected Result | Devices | Test Result |
  | --- | --- | --- | --- |
  | Navigate to Practice game page | Puzzle generated on opening | Desktop, Tablet, Mobile| All passed |
  | Press New button | New puzzle generated and timer restarts | Desktop, Tablet, Mobile| All passed |  
  | Switch through different devices | Puzzle fits on page without scrolling | Desktop, Tablet, Mobile| All passed |

4.2 Challenge game page

- Requirements considered
  - Randomly generated puzzle, covering majority of page
  - New button to generate new puzzle

- Tests
  | Step | Expected Result | Devices | Test Result |
  | --- | --- | --- | --- |
  | Navigate to Practice game page | Puzzle generated on opening | Desktop, Tablet, Mobile| All passed |
  | Press New button | New puzzle generated and timer restarts | Desktop, Tablet, Mobile| All passed |  
  | Switch through different devices | Puzzle fits on page without scrolling | Desktop, Tablet, Mobile| All passed |

#### User Story 5. As a Site Visitor, I want to practice different puzzles to improve my completion times <!-- omit from toc -->

5.1 Practice game page

- Requirements considered
  - Number input cells to select / type answers
  - Stopwatch timer to record time spent
  - Restart button to reset the board - timer continues, purpose is to remove inputs and try again
  - Level selector to change between easy, medium, or difficult (more or less cells missing)
  - Timer start button
  - Timer pause button - creates popup to hide puzzle while "stepping away"

- Tests
  | Step | Expected Result | Devices | Test Result |
  | --- | --- | --- | --- |
  | Click input (highlighted) and select numbers | Numbers can only be between 1 and 9 (inclusive) | Desktop, Tablet, Mobile | Able to input 2 digit numbers despite validation rules |
  | Click on restart button | Input cells reset to empty, timer continues counting | Desktop, Tablet, Mobile | All passed |
  | Click on start button | Timer starts counting if paused | Desktop, Tablet, Mobile | All passed |
  | Click on pause button | Modal pops up to cover up puzzle, closes when clicking on exit / outside of block | Desktop, Tablet, Mobile | All passed | Popup doesn't close when clicking outside of box |
  | Change game level selector | Number of empty input cells changes at each level | Desktop, Tablet, Mobile | All passed |

#### User Story 6. As a Site Visitor, I want to complete games with a time limit to compare my times to the average <!-- omit from toc -->

6.1 Challenge game page

- Requirements considered
  - Number input cells to select / type answers
  - Countdowm timer to attempt completing the puzzle in average time
  - New button to generate new puzzle
  - Restart button to reset the board - time countdown continues, purpose is to remove inputs and try again
  - Level selector to change between easy, medium, or difficult (more or less cells missing)

- Tests
  | Step | Expected Result | Devices | Test Result |
  | --- | --- | --- | --- |
  | Click input (highlighted) and select numbers | Numbers can only be between 1 and 9 (inclusive) | Desktop, Tablet, Mobile | Able to input 2 digit numbers despite validation rules |
  | Click on restart button | Input cells reset to empty, time countdown continues counting | Desktop, Tablet, Mobile | All passed |
  | Change game level selector | Number of empty input cells and countdown time changes at each level | Desktop, Tablet, Mobile | All passed |

#### User Story 7. As a Site Visitor, I want to see the solved puzzle if I get stuck <!-- omit from toc -->

7.1 Practice game page

- Requirements considered
  - Solve button to view solution, generate new puzzle or exit to landing page

- Tests
  | Step | Expected Result | Devices | Test Result |
  | --- | --- | --- | --- |
  | Click solve button | Modal pops up with solution, closes when clicking on exit / outside of block. New puzzle generates if continued or navigate to home page if exit clicked | Desktop, Tablet, Mobile | All passed | Timer doesn't stop, modal doesn't move, new puzzle doesn't generate on clicking outside window |

7.3 Challenge game page

- Requirements considered
  - Solve button to view solution, generate new puzzle or exit to landing page

- Tests
  | Step | Expected Result | Devices | Test Result |
  | --- | --- | --- | --- |
  | Click solve button | Modal pops up with solution, closes when clicking on exit / outside of block. New puzzle generates if continued or navigate to home page if exit clicked | Timer doesn't stop, modal doesn't move, new puzzle doesn't generate on clicking outside window |  

#### User Story 8. As a Site Visitor, I want to be able to change the background to my preference (dark / light / colourful)  <!-- omit from toc -->

- Requirements considered
  - Give users the option to customise website

- Tests
  | Step | Expected Result | Devices | Test Result |
  | --- | --- | --- | --- |
  | Click on light theme | Background colour and text colour changes | Desktop, Tablet, Mobile | Navigation buttons on landing page doesn't change when hovered on | 
  | Click on bright theme | Background colour and text colour changes | Desktop, Tablet, Mobile | Navigation buttons on landing page doesn't change when hovered on |
  | Click on dark theme | Background colour and text colour changes | Desktop, Tablet, Mobile | Navigation buttons on landing page doesn't change when hovered on, only icon background highlights |

#### User Story 9. As the Site Owner, I want to make it easy and convenient for users to send suggestions for improvement or bug reports to a dedicated mailbox, thereby improving the chances of them returning <!-- omit from toc -->

- Tests
  | Step | Expected Result | Devices | Test Result |
  | --- | --- | --- | --- |
  | Send test query from contact page | Sends email with emailJS to test inbox | Desktop, Tablet, Mobile | Error message on submission |

## 4.2 Automated testing

## 4.3 Testing Bugs - Resolved

| Bug Found | Solution |
| --- | ---- |
| Pause button on practice game page - popup doesn't close when clicking anywhere on page" | |
| Number of input cells outstanding less than expected | |
| Solve modal doens't generate new puzzle when clicked outside ||
| Solve modal doesn't move or resize ||
| Navigation buttons on landing page doesn't change when hovered on in Light theme | Removed navpage class from icons in Index page and changed colour in light.css file |
| Navigation buttons on landing page doesn't change when hovered on in Bright theme | Removed navpage class from icons in Index page and changed colour and removed space between nav-button and :hover in bright.css file |
| Navigation buttons on landing page doesn't change when hovered on in Dark theme | Removed navpage class from icons in Index page and removed space between nav-button and :hover in bright.css file |
| Error sending contact form | Replaced scripts in contact.html and updated names on emailJS service to form names |

## 4.4 Known Bugs

- The website is not optimised for Internet Explorer. No additional work was performed to optimise the site for IE as (extended) support has ended for customers since January 2020 and no further development of IE is expected.
- Dropdown lists: items highlighted in blue. Could not locate the correct item to change the formatting.
- Game input validation fails at only allowing single digit inputs.