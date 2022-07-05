# Task 1 - Practical Implementation

Here are the mockups we created for mobile and desktop:

[Banner Component.pdf](./Banner_Component.pdf)

[x] The image and CTA box are also clickable, linking to a destination specified per each image/box.

[x] There are two component modes (`mode` prop):

- Square
  - [x] Images are displayed as square boxes on mobile and desktop.
  - [x] It is important that the images keep their 1:1 (square) aspect ratio when resized, and don't stretch out of shape
  - [ ] Carousel
    - [x] The banner component takes in an optional `carousel-on-mobile` prop.
    - [ ] When set to `true`, it should create a swipeable image carousel for mobile (in addition to the square images on desktop), with a main square image and the rest of the images displayed as small thumbnails underneath (feel free to use a carousel library for this)
  - [x] The CTA box is displayed as a square box on desktop, but a narrow rectangle box on mobile to save height
  - [x] There should be 3 square boxes (CTA or image) per row on desktop
  - [x] The order of boxes is flexible (for example, the CTA box is first, middle, or last) and should be based on the order of box items in the `items` prop received by the component
- Rectangle
  - [x] There are two images supplied to the component: a rectangular image (desktop) and a square image (for mobile)
  - [x] A single rectangular image is displayed on desktop, acting as the background image
  - [x] On mobile, a square image is displayed, with the narrow CTA box displayed below it, with a white background
  - [x] The CTA box is hovering on top of the image, aligned to the right, with a white but almost transparent background color, just enough for the text to be readable
