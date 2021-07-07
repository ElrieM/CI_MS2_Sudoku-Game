# 4. Testing

## 4.1 Validator tools

The following tools were used to validate every page of project to ensure there were no syntax errors in the project:

- HTML - W3C Markup Validator
  - Pages tested:
  
  | Page | Result |
  | --- | --- |
  | Home | No errors |
  | About | No errors |
  | Classes | No errors |
  | Schedule and Rates | No errors |
  | Contact | No errors |
  | Error (404) | No errors |
  
  - Report can be found [here](docs/readme/test-results/validator-tools/html-validation.pdf).
  
- CSS - W3C CSS Validator
  - All errors / warnings relate to Bootstrap and Font Awesome.
  - Summary of result:
    - No errors or warnings from CSS style file unrelated to Bootstrap;
    - Errors from Bootstrap 5.0 (unused / unrecognised errors); and
    - Errors from FontAwesome.
  - Report can be found [here](docs/readme/test-results/validator-tools/css-validation.png).
  
- Accessibility - WAVE Web Accessibility Evaluation Tool
  - Pages tested:
  
  | Page | Result - Errors | Result - Warnings |
  | --- | --- | --- |
  | Home | No errors | Alert for duplicate link |
  | About | No errors | Alert for duplicate link |
  | Classes | No errors | Alert for duplicate link |
  | Schedule and Rates | No errors | i) Alert for duplicate link ii) Timetable and PDF |
  | Contact | No errors | Alert for duplicate link |
  | Error (404) | No errors | Alert for duplicate link |

  - Summary of results:
    - Alert on all pages for duplicate link (logo and home both go to home page). Ignored, user expectation that clicking on the Logo will lead back to landing / home page;
    - Class Schedule, which uses a timetable and PDF download, flagged as potential problem. No changes made, schedule layout and sizing unlikely to cause reader errors from overlapping information and PDF is an optional download.
  - Report can be found [here](docs/readme/test-results/validator-tools/wave-validation.pdf).
  
- Performance - Chrome Lighthouse
  - Pages tested (mobile and desktop tested on each):
    - Home;
    - About;
    - Classes;
    - Schedule and Rates;
    - Contact; and
    - Error (404).
  - Summary of results:
    - Performance between 94 and 100;
    - Accessibility between 97 and 100;
    - Best Practices at 100;
    - SEO between 98 and 100 on all pages except landing page;
    - Landing page SEO score of 89 / 91 (desktop / mobile respectively) due to the signup block at the bottom of the screen not having a href target (links directly to modal block in banner).
  - Report can be found [here](docs/readme/test-results/validator-tools/lighthouse-validation.pdf).

## 4.2 Testing User Stories from User Experience (UX) Section

### First Time Visitor Goals

#### 1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the wellness centre. <!-- omit in toc -->

| Ref  |Feature | Test | Expected Result | Actual Result | Link to Results |
| ---- | --- | --- | --- | --- | --- |
| 1.1) | Background image on landing page shows a woman practicing yoga | Scroll landing page to see if the background image is clearly visible and recognisable | Image remains stationary and shows a woman / women practicing yoga on all 3 devices | Woman / Women in recognisable yoga positions remain in background on scrolling | [Results](docs/readme/test-results/user-stories/firsttime/firsttime-1_1.png) |
| 1.2) | Home page has welcome message, what to expect and benefits of yoga | Test visibility of introductory text | Text clearly visible, inside container and relevant | Text grades well on visibility scores, 3 blocks of text describe waht yoga is, what to expect when starting out, what the benefits are of attending | [Results](docs/readme/test-results/user-stories/firsttime/firsttime-1_2.png) |
| 1.3) | About page has an image gallery, showing facilities and class snapshots | View gallery, see if sufficient time allowed between image changes, check buttons to skip to prev or next image works | 3 images per slide on tablet and desktop devices, 5 seconds before slide change and buttons to skip to next or return to previous. Mobile device has single image per slide, 3 seconds between slides and buttons to skip to next or return to previous slide | Slide buttons worked on all devices, slide timings as expected. Images clearly visible (good resolution) and no overlap with other sections | [Results](docs/readme/test-results/user-stories/firsttime/firsttime-1_3.png) |
| 1.4) | Navigation bar with links to About page, Classes page, Schedule and Rates page and Contact page | Test links on navigation bar to various pages | Clicking on links opens selected page | All links clicked from each page, all went to selected page | [Results](docs/readme/test-results/user-stories/firsttime/firsttime-1_3.png) | Sufficient time to view 3 pictures or single pictures (device-size dependent), indicators allow going back to previous slide or on to next slide | Indicators allow for returning to previous slides or skipping to next slide, 5 seconds on slides with 3 images, 3 second on slides with single picture. All images visible. | [Results](docs/readme/test-results/user-stories/firsttime/firsttime-1_4.png) |

#### 2. As a First Time Visitor, I want to be able to easily navigate throughout the website to find more information about which classes are available, their suitability and what to expect. <!-- omit in toc -->

| Ref  |Feature | Test | Expected Result | Actual Result | Link to Results |
| ---- | --- | --- | --- | --- | --- |
| 2.1) | Users can visit the Classes page from the navigation bar on the top of the screen, but also from the footer   | Test whether links from navbar and footer follow through to Classes page | Navigation links open Classes page | Navigation links in footer and navigation bar lead to classes page, tested from all pages. Classes page remains on page when selected. | [Results](docs/readme/test-results/user-stories/firsttime/firsttime-2_1.png) |
| 2.2) | Users can find detailed descriptions of classes on Classes page and representative class pictures | Confirm that all classes have a description, descriptions are fully visible and easy to read and images load properly | Class descriptions with image appear on devices, all clearly visible. | With the exception of Meditation, which is a non-guided class and in line with findings on other websites doesn't usually have a description, all classes in the Class schedule were described and images alinged and not overlapping text | [Results](docs/readme/test-results/user-stories/firsttime/firsttime-2_2.png) |
| 2.3) | Classes page is split between Yoga classes and Other classes, with Yoga classes split into 3 different levels | Review whether class descriptions and classification agree to headings (beginner = Yoga Basics + Vinyasa Flow Yoga; slow-paced = Restorative Yoga + Yin Yoga; fast-paced = Ashtanga Yoga + Hatha Yoga; Other = Prenatal Yoga + TaiChi + Pilates) | Classes appear in same sections across different viewpoints in line with aforementioned classifications. | Yoga classes, divided into beginner classes, slow-paced and fast-paced classes and Other classes. Classes included in each section and remain in that section across different devices | [Results](docs/readme/test-results/user-stories/firsttime/firsttime-2_3.png) |
  
#### 3. As a First Time Visitor, I want to be able to easily navigate throughout the website to find out more about the instructors, ensuring that I am in the class I expected to attend. <!-- omit in toc -->

| Ref  |Feature | Test | Expected Result | Actual Result | Link to Results |
| ---- | --- | --- | --- | --- | --- |
| 3.1 | Users can visit the About page from the navigation bar on the top of the screen to view Instructor photos and descriptions | Test whether links from navbar and footer follow through to About page | Navigation link opens About page | Navigation link in navigation bar leads to About page, tested from all pages. About page remains on page when selected. | [Results](docs/readme/test-results/user-stories/firsttime/firsttime-3_1.png) |
| 3.2 | About page shows all instructors (12 at time of writing), with a photo, quote to live by and list of classes led. | Review page on all devices to confirm all 12 instructor descriptions appear, photo clearly visible and quote and class appears beneath photo | Instructor "cards" with name above, photo, quote and class list - 6 per row on desktop / laptop devices, 5 per row on tablets and 2 per row on mobile devices | Card details as expected, 6 per row on desktop and laptop devices, 5 per row on tablet and 2 per row on mobile devices | [Results](docs/readme/test-results/user-stories/firsttime/firsttime-3_2.png) |

#### 4. As a First Time Visitor, I want to be able to easily navigate throughout the website to find more information about the tariffs and package deals available. <!-- omit in toc -->

| Ref  |Feature | Test | Expected Result | Actual Result | Link to Results |
| ---- | --- | --- | --- | --- | --- |
| 4.1 | Users can visit the Schedule and Rates page from the navigation bar on the top of the screen, but also from the footer | Test whether links from navbar and footer follow through to Schedule and Rates page | Navigation links open Schedule and Rates page | Navigation links in footer and navigation bar lead to Schedule and Rates page, tested from all pages. Schedule and Rates page remains on page when selected.| [Results](docs/readme/test-results/user-stories/firsttime/firsttime-4_1.png) |
| 4.2 | Schedule and Rates page has a table containing a breakdown of prices per class and packages | Schedule and Rates page shows prices per class and packages. | Table containing prices per class and packages appear at the bottom of each device's Schedule and Rates page | Table appears beneath Schedule as expected. | [Results](docs/readme/test-results/user-stories/firsttime/firsttime-4_2.png)                                                                                 |

#### 5. As a First Time Visitor, I want to locate social media links to see the wellness centre's social presence and find out more about other students' experiences. <!-- omit in toc -->

| Ref  |Feature | Test | Expected Result | Actual Result | Link to Results |
| ---- | --- | --- | --- | --- | --- |
| 5.1 | Footer includes "Let's Connect" with links to Facebook, Twitter and Instagram | Test links on all pages to confirm they land on correct page and in a new window | All 3 links open new windows for Facebook landing page, Twitter landing page and Instagram landing page | Footers on all pages tested, clicking opened a new web browser to the relevant social media website's landing pages | [Results](docs/readme/test-results/user-stories/firsttime/firsttime-5_1.png) |
  
### Returning Visitor Goals
  
#### 6. As a Returning Visitor, I want to find the best way to get in contact for any queries I might have. <!-- omit in toc -->

| Ref  |Feature | Test | Expected Result | Actual Result | Link to Results |
| ---- | --- | --- | --- | --- | --- |
| 6.1) | Users can visit the Contact page from the navigation bar on the top of the screen, but also from the footer | Test whether links from navbar and footer follow through to Contact page | Navigation links open Contact page | Navigation links in footer and navigation bar lead to Contact page, tested from all pages. Contact page remains on page when selected. | [Results](docs/readme/test-results/user-stories/returning/returning-6_1.png)|
| 6.2) | Enquiry form on contact page with dropdown menu for different subjects to get queries to the appropriate person | Contact page contains an Enquiry form with dropdown options for subject  | Test whether Enquiry form submits with different subjects selected | Successfully submitted Enquiry form on different devices with different subjects selected | [Results](docs/readme/test-results/user-stories/returning/returning-6_2.png) |

### 7. As a Returning Visitor, I want to find information regarding registering for upcoming events. <!-- omit in toc -->

| Ref  |Feature | Test | Expected Result | Actual Result | Link to Results |
| ---- | --- | --- | --- | --- | --- |
| 7.1) | Home page contains Upcoming Events section with events for the next 4 months (3 on tablet) | View Upcoming Events section on Home page, check layout and details all showing with no overlap | Events appearing in blocks under Upcoming Events heading at the bottom of the Home page, showing instructor, date and price | 4 events (inline on dektop, stacked in mobile) and 3 events (inline on tablet) showing all details and instructor image as expected | [Results](docs/readme/test-results/user-stories/returning/returning-7_1.png) |
| 7.2) | Enquiry form has subject for booking events | Check dropdown menu in Enquiry form contains Register an Event option on all devices | Dropdown options include "Register for an Event" | Dropdown option "Register for an  Event" appears as expected. | [Results](docs/readme/test-results/user-stories/returning/returning-7_2.png) |
| 7.3) | Button in Header (desktops) and subscribe banner on Home page to subscribe for newsletter to receive updates in inbox | Test functioning of signup  modal | Signup modal submits to Code Institute Form Dump | Form appears from button on all pages (desktop only) and home page banner link on all devices | [Results](docs/readme/test-results/user-stories/returning/returning-7_3.png) |

#### 8. As a Returning Visitor, I want to find information about prices and buy additional class bundles. <!-- omit in toc -->

| Ref  |Feature | Test | Expected Result | Actual Result | Link to Results |
| ---- | --- | --- | --- | --- | --- |
| 8.1) | Users can visit the Schedule and Rates page from the navigation bar on the top of the screen, but also from the footer | Test whether links from navbar and footer follow through to Schedule and Rates page | Tested in 4.1 and 4.2 of Test 4. First Time User: <br>Navigation links open Schedule and Rates page | Navigation links in footer and navigation bar lead to Schedule and Rates page. Schedule and Rates page remains on page when selected. | [Results test 4.1](docs/readme/test-results/user-stories/firsttime/firsttime-4_1.png) <br><br> [Results test 4.2](docs/readme/test-results/user-stories/firsttime/firsttime-4_2.png) |

### Frequent User Goals
  
#### 9. As a Frequent User, I want to sign up to the Newsletter to be informed of upcoming events and receive health and wellbeing advice. <!-- omit in toc -->

| Ref  |Feature | Test | Expected Result | Actual Result | Link to Results |
| ---- | --- | --- | --- | --- | --- |
| 9.1) |Button in Header (desktops) and subscribe banner on Home page to subscribe for newsletter to receive updates in inbox | Test functioning of signup modal | Signup modal submits to Code Institute Form  Dump | Tested in 7.3 of Test 7. Returning User: <br> Form appears from button on all pages (desktop only) and home page banner link on all  devices | [Results](docs/readme/test-results/user-stories/returning/returning-7_3.png) |

#### 10. As a Frequent User, I want to be able to view changes to the timetable and new classes becoming available. <!-- omit in toc -->

| Ref  |Feature | Test | Expected Result | Actual Result | Link to Results |
| ---- | --- | --- | --- | --- | --- |
| 10.1) | A class schedule is available on the Schedule and Rates page                 | View schedule on all devices, checking that information is visible and easy to read | Schedule appears in single page on Desktop and Tablet, horizontal scrolling on Mobile | Schedule appears as expected (all on one screen on Desktop and Tablet, scrolls on Mobile), colours agree to legend, message with link below legend directs user to register in Booking form | [Results](docs/readme/test-results/user-stories/frequent/frequent-10_1.png) |
| 10.2) | PDF version of class schedule can be downloaded from Schedule and Rates page | Test link on all devices| PDF download starts when link clicked, opens in new browser page | PDF document successfully downloaded and opened from each device | [Results](docs/readme/test-results/user-stories/frequent/frequent-10_2.png) |

#### 11. As a Frequent User, I want to register for classes or events, and / or buy additional class bundles. <!-- omit in toc -->

| Ref  |Feature | Test | Expected Result | Actual Result | Link to Results |
| ---- | --- | --- | --- | --- | --- |
| 11.1 |  Enquiry form on contact page with dropdown menu for different subjects to get queries to the appropriate person | Contact page contains an Enquiry form with dropdown options for subject  | Tested in 6.2 of Test 6. Frequent User:<br><br>Test whether Enquiry form submits with different subjects selected | Successfully submitted Enquiry form on different devices with different subjects selected | [Results](docs/readme/test-results/user-stories/returning/returning-6_2.png) |
| 11.2 | | 7.2) | Enquiry form has subject for booking events | Check dropdown menu in Enquiry form contains Register an Event option on all devices | Dropdown options include "Register for an Event" | Tested in 7.2 of Test 7. Returning Visitor: <br><br> Dropdown option "Register for an  Event" appears as expected. | [Results](docs/readme/test-results/user-stories/returning/returning-7_2.png) |

### Site Owner Goals

#### 12. As the Site Owner, I want to make information easily accessable to prospective and existing students, thereby reducing the number of queries sent and the time spent on administrative tasks. <!-- omit in toc -->

| Ref  |Feature | Test | Expected Result | Actual Result | Link to Results |
| ---- | --- | --- | --- | --- | --- |
| 12.1) | About page has an image gallery, showing facilities and class snapshots | View gallery, see if sufficient time allowed between image changes, check buttons to skip to prev or next image works | 3 images per slide on tablet and desktop devices, 5 seconds before slide change and buttons to skip to next or return to previous. Mobile device has single image per slide, 3 seconds between slides and buttons to skip to next or return to previous slide | Tested in 1.3 of Test 1. First Time User: <br><br> Slide buttons worked on all devices, slide timings as expected. Images clearly visible (good resolution) and no overlap with other secitons | [Results](docs/readme/test-results/user-stories/firsttime/firsttime-1_3.png) |
| 12.2) | Navigation bar with links to About page, Classes page, Schedule and Rates page and Contact page | Test links on navigation bar to various pages | Clicking on links opens selected page | Tested in 1.4 of Test 1. First Time User: <br><br> All links clicked from each page, all went to selected page | [Results](docs/readme/test-results/user-stories/firsttime/firsttime-1_3.png) | Sufficient time to view 3 pictures or single pictures (device-size dependent), indicators allow going back to previous slide or on to next slide | Indicators allow for returning to previous slides or skipping to next slide, 5 seconds on slides with 3 images, 3 second on slides with single picture. All images visible. | [Results](docs/readme/test-results/user-stories/firsttime/firsttime-1_4.png) |

#### 13. As the Site Owner, I want to provide students with the centre's processes and procedures to allow them to prepare for their visit. <!-- omit in toc -->

| Ref  |Feature | Test | Expected Result | Actual Result | Link to Results |
| ---- | --- | --- | --- | --- | --- |
| 13.1) | About page has a Facilities & FAQs section where users can find out what is provided at the wellness centre, "rules of conduct" in the studios and other frequently asked questions | Testing was performed on the functioning of the accordion in 12.1 of Test 12. Site Owner | Facilities, Before the Lesson, During the Lesson and After the Lesson sections appear on all devices, no information cut off when accordion is open | Contents displayed as expected on all devices | [Results](docs/readme/test-results/user-stories/siteowner/siteowner-13.1.png) |

#### 14. As the Site Owner, I want to inform students (existing and prospective) of upcoming events

| Ref  |Feature | Test | Expected Result | Actual Result | Link to Results |
| ---- | --- | --- | --- | --- | --- |
|14.1) | Home page contains Upcoming Events section with events for the next 4 months (3 on tablet) | View Upcoming Events section on Home page, check layout and details all showing with no overlap | Events appearing in blocks under Upcoming Events heading at the bottom of the Home page, showing instructor, date and price | Tested in 7.1 of Test 7. Returning Visitor: <br><br> 4 events (inline on dektop, stacked in mobile) and 3 events (inline on tablet) showing all details and instructor image as expected | [Results](docs/readme/test-results/user-stories/returning/returning-7_1.png) |
|14.2) | Button in Header (desktops) and subscribe banner on Home page to subscribe for newsletter to receive updates in inbox | Test functioning of signup  modal | Signup modal submits to Code Institute Form Dump | Tested in 7.3 of Test 7. Returning Visitor: <br><br> Form appears from button on all pages (desktop only) and home page banner link on all devices | [Results](docs/readme/test-results/user-stories/returning/returning-7_3.png) |

## 4.3. Further Testing

- The website was tested on Google Chrome, Internet Explorer and Microsoft Edge.
- The website was viewed on a variety of devices, including:
  - iPhone Xs,
  - iPhone 11s,
  - Lenovo ThinkPad P53,
  - Toshiba Satellite L850-F33V,
  - Dell Inspiron 15 5515 with 24" Dell monitor.
- Significant testing was performed to ensure all pages linked correctly.
- Friends and family were asked to review the site and documentation to point out bugs and /or user experience issues.

## 4.4 Testing Bugs - Resolved

| Bug Found | Solution |
| --- | ---- |
| Footer on pages with insufficient content to fill the whole page (contact page and 404 page) would not stay fixed at the bottom. | After reading various blogs, I combined a solution from [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/) and [Medium](https://medium.com/@zerox/keep-that-damn-footer-at-the-bottom-c7a921cb9551): viewheight set as a minimum height, and using Google Developer Tools, I calculated how much to remove (in pixels) to push the footer to the bottom of the page. |
| Table (Classes schedule) would not scroll left and right. | Reapplied table formatting from [Bootstrap 5.0](https://getbootstrap.com/docs/5.0/content/tables/) line by line. |
| Bootstrap elements (Gallery, Accordion, Modal) would not work as expected. | Copied Bootstrap 5.0 scripts to the bottom of all pages. |
| Instructor cards breaking unevenly on Laptop viewpoint | Changed margin and padding and applied flex auto margin to fill spaces evenly. |

## 4.5 Known Bugs

- The website is not optimised for Internet Explorer. No additional work was performed to optimise the site for IE as (extended) support has ended for customers since January 2020 and no further development of IE is expected.
- Dropdown list in Contact page Enquiry form: items highlighted in blue. Could not locate the correct item to change the formatting.
- Gallery on iPhones flickers and blurs on actual phone, not in Chrome Dev Tools.