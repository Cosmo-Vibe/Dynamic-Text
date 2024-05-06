document.addEventListener("DOMContentLoaded", function () {
  // Define UI elements
  const fontSizeSlider = document.getElementById("font-size-slider");
  const letterSpacingSlider = document.getElementById("letter-spacing-slider");
  const wordSpacingSlider = document.getElementById("word-spacing-slider");
  const lineHeightSlider = document.getElementById("line-height-slider");
  const editableText = document.querySelector(".editable-text");
  const inputText = document.querySelector('input[type="text"]');
  const paletteButtons = document.querySelectorAll(".palette-button");

  // Update style properties based on slider inputs
  function updateStyleProperties() {
    document.documentElement.style.setProperty(
      "--font-size",
      `${fontSizeSlider.value}px`
    );
    document.documentElement.style.setProperty(
      "--letter-spacing",
      `${letterSpacingSlider.value}px`
    );
    document.documentElement.style.setProperty(
      "--word-spacing",
      `${wordSpacingSlider.value}px`
    );
    document.documentElement.style.setProperty(
      "--line-height",
      lineHeightSlider.value
    );
    editableText.style.fontSize = `${fontSizeSlider.value}px`;
    editableText.style.letterSpacing = `${letterSpacingSlider.value}px`;
    editableText.style.wordSpacing = `${wordSpacingSlider.value}px`;
    editableText.style.lineHeight = lineHeightSlider.value;
    inputText.style.fontSize = `${fontSizeSlider.value}px`;
    inputText.style.letterSpacing = `${letterSpacingSlider.value}px`;
    inputText.style.wordSpacing = `${wordSpacingSlider.value}px`;
    inputText.style.lineHeight = lineHeightSlider.value;
  }

  // Event listeners for sliders
  fontSizeSlider.addEventListener("input", updateStyleProperties);
  letterSpacingSlider.addEventListener("input", updateStyleProperties);
  wordSpacingSlider.addEventListener("input", updateStyleProperties);
  lineHeightSlider.addEventListener("input", updateStyleProperties);

  // Function to change color palette
  function changePalette(colors) {
    document.documentElement.style.setProperty("--bg-color", colors.bg);
    document.documentElement.style.setProperty("--text-color", colors.text);
    document.documentElement.style.setProperty(
      "--placeholder-color",
      colors.placeholder
    );
    document.documentElement.style.setProperty(
      "--slider-bar-color",
      colors.bar
    );
    document.documentElement.style.setProperty(
      "--slider-thumb-color",
      colors.thumb
    );
    document.body.style.backgroundColor = colors.bg;
    inputText.style.color = colors.text;
    inputText.style.backgroundColor = colors.placeholder;
    fontSizeSlider.style.background = colors.bar;
    fontSizeSlider.style.setProperty(
      "--webkit-slider-thumb-color",
      colors.thumb
    );
    letterSpacingSlider.style.background = colors.bar;
    letterSpacingSlider.style.setProperty(
      "--webkit-slider-thumb-color",
      colors.thumb
    );
    wordSpacingSlider.style.background = colors.bar;
    wordSpacingSlider.style.setProperty(
      "--webkit-slider-thumb-color",
      colors.thumb
    );
    lineHeightSlider.style.background = colors.bar;
    lineHeightSlider.style.setProperty(
      "--webkit-slider-thumb-color",
      colors.thumb
    );
  }

  // Assign click events to palette buttons
  paletteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const colors = {
        bg: this.getAttribute("data-bg"),
        text: this.getAttribute("data-text"),
        placeholder: this.getAttribute("data-placeholder"),
        bar: this.getAttribute("data-bar"),
        thumb: this.getAttribute("data-thumb"),
      };
      changePalette(colors);
    });
  });

  // Initialize with default palette (Palette 1)
  changePalette({
    bg: "#000000",
    text: "#FFFFFF",
    placeholder: "#3D0000",
    bar: "#950101",
    thumb: "#FF0000",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fontSizeSlider = document.getElementById("font-size-slider");
  const letterSpacingSlider = document.getElementById("letter-spacing-slider");
  const wordSpacingSlider = document.getElementById("word-spacing-slider");
  const lineHeightSlider = document.getElementById("line-height-slider");
  const fontSelector = document.getElementById("font-selector");
  const editableText = document.querySelector(".editable-text");
  const inputText = document.querySelector('input[type="text"]');
  const paletteButtons = document.querySelectorAll(".palette-button");

  function updateStyleProperties() {
    document.documentElement.style.setProperty(
      "--font-size",
      `${fontSizeSlider.value}px`
    );
    document.documentElement.style.setProperty(
      "--letter-spacing",
      `${letterSpacingSlider.value}px`
    );
    document.documentElement.style.setProperty(
      "--word-spacing",
      `${wordSpacingSlider.value}px`
    );
    document.documentElement.style.setProperty(
      "--line-height",
      lineHeightSlider.value
    );
    editableText.style.fontFamily = fontSelector.value;
    inputText.style.fontFamily = fontSelector.value;
  }

  fontSizeSlider.addEventListener("input", updateStyleProperties);
  letterSpacingSlider.addEventListener("input", updateStyleProperties);
  wordSpacingSlider.addEventListener("input", updateStyleProperties);
  lineHeightSlider.addEventListener("input", updateStyleProperties);
  fontSelector.addEventListener("change", updateStyleProperties);

  paletteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      document.documentElement.style.setProperty("--bg-color", this.dataset.bg);
      document.documentElement.style.setProperty(
        "--text-color",
        this.dataset.text
      );
      document.documentElement.style.setProperty(
        "--placeholder-color",
        this.dataset.placeholder
      );
      document.documentElement.style.setProperty(
        "--slider-bar-color",
        this.dataset.bar
      );
      document.documentElement.style.setProperty(
        "--slider-thumb-color",
        this.dataset.thumb
      );
      updateStyleProperties(); // Refresh styles to apply new palette
    });
  });

  // Initialize with default palette and default font
  updateStyleProperties();
});

document.addEventListener("DOMContentLoaded", function () {
  // Define UI elements and global variables
  const fontSizeSlider = document.getElementById("font-size-slider");
  const letterSpacingSlider = document.getElementById("letter-spacing-slider");
  const wordSpacingSlider = document.getElementById("word-spacing-slider");
  const lineHeightSlider = document.getElementById("line-height-slider");
  const editableText = document.querySelector(".editable-text");
  const inputText = document.querySelector('input[type="text"]');
  const fontUrlInput = document.getElementById("font-url-input");
  const applyFontButton = document.getElementById("apply-font-button");
  let currentFontFamily = ""; // Store the current font family

  // Function to apply font
  function applyFont(url) {
    if (!url.startsWith("http")) {
      alert(
        "URL not valid. Please enter a valid URL that starts with http or https."
      );
      return;
    }

    // Create or update a style element for the font
    let fontStyleElement = document.getElementById("dynamic-font-style");
    if (!fontStyleElement) {
      fontStyleElement = document.createElement("style");
      fontStyleElement.id = "dynamic-font-style";
      document.head.appendChild(fontStyleElement);
    }
    fontStyleElement.textContent = `@import url('${url}');`;

    // Extract the font family name from the URL
    const fontFamilyMatch = url.match(/family=([^&:]+)/);
    if (fontFamilyMatch && fontFamilyMatch[1]) {
      currentFontFamily = fontFamilyMatch[1].replace(/\+/g, " ");
      updateFontFamily();
    }
  }

  // Function to update font family
  function updateFontFamily() {
    if (currentFontFamily) {
      editableText.style.fontFamily = currentFontFamily;
      inputText.style.fontFamily = currentFontFamily;
    }
  }

  // Event listeners for sliders to update styles and maintain font family
  function updateStyleProperties() {
    document.documentElement.style.setProperty(
      "--font-size",
      `${fontSizeSlider.value}px`
    );
    document.documentElement.style.setProperty(
      "--letter-spacing",
      `${letterSpacingSlider.value}px`
    );
    document.documentElement.style.setProperty(
      "--word-spacing",
      `${wordSpacingSlider.value}px`
    );
    document.documentElement.style.setProperty(
      "--line-height",
      lineHeightSlider.value
    );
    updateFontFamily(); // Reapply the font family after style changes
  }

  fontSizeSlider.addEventListener("input", updateStyleProperties);
  letterSpacingSlider.addEventListener("input", updateStyleProperties);
  wordSpacingSlider.addEventListener("input", updateStyleProperties);
  lineHeightSlider.addEventListener("input", updateStyleProperties);

  // Apply font when button is clicked
  applyFontButton.addEventListener("click", function () {
    const fontUrl = fontUrlInput.value.trim();
    if (fontUrl) {
      applyFont(fontUrl);
    } else {
      alert("Please enter a font URL.");
    }
  });
});
