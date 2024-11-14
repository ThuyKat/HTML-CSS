# Using Tailwind

- node.js installation -> npm - node.js installation -> check: node -v
- Install Tailwind using npm: 
    * npm init -y
    * npm installl tailwindcss
    -> check dependencies in package.json
- tailwind can use as a plugin to css or on its own

# Using tailwind independently
-  create 2 folders: src and public
- create input css file inside src folder named style.css
-  paste tailwind base, components,utilities annotations
- Write this in package.json: 
 "scripts": {
    "build-css": "tailwindcss build src/style.css -o public/style.css"
  }, 
  -> tailwind will process style.css file in src file and output a new file inside public folder
- run the script: npm run build-css
- create html file inside public
- (optional) npm install live-server -g ( can be used anywhere) -> live-server folder_name
# Styling text and color
# Responsive
- Make sure viewport meta tag is added to the head of doc
e.g
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- Prefix the utility with the breakpoint name(md, sm,lg,xl,2xl) followed by : character:
e.g
```html
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="...">
<!-- Don’t think of sm: as meaning “on small screens”, think of it as “at the small breakpoint“. -->
```
# Measurement: rem vs em
## Common applications:
- rem: Overall page layout, global typography
- em: Component-level styling, maintaining proportions within modules
## Calculation:
- 1rem = font size of root element
- 1em = font size of parent element
## rem
Common conversions (assuming 16px root font size):
* 0.5rem = 8px
* 1rem = 16px
* 1.5rem = 24px
* 2rem = 32px
* 3rem = 48px
## em
Formula: 1em = parent element's font size in px
If no font size is set on the parent, it inherits from its parent, up to the root
Common conversions (assuming 16px parent font size):
* 0.5em = 8px
* 1em = 16px
* 1.5em = 24px
* 2em = 32px
* 3em = 48px
## Tailwind's spacing scale:
Tailwind uses a spacing scale where each unit represents 0.25rem by default

In Tailwind CSS, you can use various units including px, vh, vw, %, em, and rem. However, they need to be warpped in a square bracket []
For example:
```html
<div class="w-[100px] h-[50px]">
<div class="h-[50vh] w-[75vw]">
<div class="w-1/2"> <!-- 50% width -->
<div class="w-[60%]"> <!-- 60% width -->
<div class="text-[1.5em]">
<div class="p-4"> <!-- 1rem padding -->
<div class="p-[2.5rem]"> <!-- 2.5rem padding -->   
<div class="w-[50vmin] h-[75vmax]">
```
NOTE:
- vmin: viewport minimum, equal to the smaller of vw or vh -> useful for responsive design that need to work in both portrait and landscape orientatation
- vmax: equal to the larger of vw or vh

## Grid in Tailwind, Bootstrap vs normal CSS Grid
- Bootstrap's grid system is built on a 12-column layout using flexbox. It automatically adjusts to a single column layout on smaller screens by default. 
On larger screens, columns sit side-by-side within a row.On smaller screens (typically below 576px wide), the columns stack vertically.
- Tailwind CSS provides utility classes for creating grid layouts. While it doesn't have a predefined 12-column system like Bootstrap, it offers flexible options for responsive designs. 

NOTE: On smaller screens (below the "md" breakpoint), the grid system in Bootstrap and similar frameworks like Tailwind CSS automatically defaults to a single column layout when the content overflows.When content overflows on smaller screens, the single-column layout ensures that:
  ---> Content remains readable by not being squeezed horizontally.
  --->Users can scroll vertically to access all content.
  --->The layout remains consistent and doesn't break due to overflow.
This automatic responsiveness is a key feature of modern CSS frameworks, making it easier to create mobile-friendly designs without writing extensive media queries for every layout scenario.

