# Developer notes

- Couldn't figure out the exact font but Arial was close enough.
- Made a little :hover and :focus effect for the CTA button.
- The previously mentioned button effect (made with ::after) is bugged in Chromium based browsers because the 100% width is actually 100% - 2px still managed to find a workaround.
- Took the liberty to make the `mode` prop optional with the default value of `square`.
  - Just an afterthought, but I prefer using booleans or enums for props like this, instead of strings and I would've merged the carousel into this as well.
- For the carousel I assumed the images are always next to eachoder in the `items` prop.
- Just as a challenge for myself I decided not to use a carousel library.
  - Could've solved it a bit more optimally (eg. by removing non displayed items from the DOM), but it works quite well.
