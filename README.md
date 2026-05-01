# jQuery ScrollEasy

A lightweight, customizable jQuery plugin for smooth scrolling to anchor targets with adjustable speed, offsets, and callback support.

---

## Description
**ScrollEasy** is a simple yet powerful jQuery plugin designed to enhance user experience by replacing jumpy "anchor links" with fluid, animated transitions. It allows developers to easily control the timing and positioning of the scroll, making it perfect for one-page websites and modern web interfaces.

### Key Features
*   **Smooth animation:** adjustable scroll duration (speed).
*   **Smart offset:** perfect for layouts with fixed headers.
*   **Callback support:** execute custom code once the scroll animation is finished.
*   **Universal compatibility:** works with any internal ID-based link.

---

## License & Usage
This project is licensed under the **GNU General Public License v3 (GPLv3)**.

> **Note on commercial use:**
> *   **Allowed:** you are free to use this plugin for personal or commercial websites.
> *   **Restricted:** you **cannot** sell this plugin as a standalone product or include it in proprietary (closed-source) software. Any derivative work must also be released under the GPLv3 license.

---

## Quick Start

### 1. Installation
Include jQuery and `jquery.scrollEasy.js` in your project:
```html
<script src="[https://code.jquery.com/jquery-3.6.0.min.js](https://code.jquery.com/jquery-3.6.0.min.js)"></script>
<script src="js/jquery.scrollEasy.js"></script>
```

### 2. HTML structure
Just use standard anchor tags pointing to an ID:
```html
<a href="#about" class="scroll-link">About Us</a>

<div id="about">
    <h2>Welcome to our section</h2>
</div>
```

### 3. Initialization
Initialize the plugin with your custom settings:

```javascript
$(document).ready(function() {
    $('.scroll-link').scrollEasy({
        speed: 1000,    // Duration in milliseconds
        offset: 70,      // Offset from top (px)
        easing: 'swing'  // Animation easing
    });
});
```

---

## 🛠 Options

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `speed` | Integer | `800` | Duration of the scroll animation in ms. |
| `offset` | Integer | `0` | Extra space above the target element. |
| `easing` | String | `'swing'` | Easing function (`swing` or `linear`). |
| `complete` | Function | `null` | Callback function triggered after scroll. |

---

## Author
**Pasquale Viglianesi** - [GitHub Profile](https://github.com/pasqualeviglianesi)
