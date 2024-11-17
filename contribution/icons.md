# Icons guide
All interface icons are located in `/assets/icons` folder.

Most of the beautiful icons are sourced from Luca Burgio's project [Iconoir](https://iconoir.com/). Saluti all'Italia! 🇮🇹 As a result, the base style and sizes are derived from this project.

### Recommendations
- `viewBox="0 0 24 24"` the recommended size is 24x24 pixels, with an aspect ratio of 1:1
- `stroke-width="1"` the stroke width is set to 1 pixel
- **Fill/stroke color**: The fill/stroke color values are replaced with `currentColor`, allowing the color to change when pasted as inline SVG
- **Optimize SVG**: we recommend using the excellent project [SVGOMG](https://jakearchibald.github.io/svgomg/) for SVG optimization

#### Example code
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1" color="currentColor">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 11.5v5M12 7.51l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"/>
</svg>
```
([source file](../assets/icons/info-circle.svg))
