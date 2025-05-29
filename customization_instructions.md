# Concealed Carry Quiz - Customization Instructions

## Overview
The quiz has been updated to include the image and purchase link you provided. This document explains how to add more images and purchase links as you gather them.

## Current Implementation
- The Ultra-Compact Pistols category now uses the image you provided: 
  `https://gearfireimages.s3.amazonaws.com/imagedb/image4671408-1abe9240af14c74d0897bd8ea6daa8d6.jpg`
- The SIG P365 now has a purchase link: 
  `https://shop.optimalzerofirearms.com/handguns/semi-automatic-handguns/p365-9mm-nitron-101-sfty-masssi3659bxr3pmsma`
- All other categories use placeholder images and links

## How to Add More Images and Links

### Step 1: Open the script.js file
Locate the `firearmCategories` object in the script.js file (around line 200).

### Step 2: Add Images
For each category you want to update, replace the placeholder image URL with your actual image URL:

```javascript
ultraLightRevolver: {
    title: "Ultra-Lightweight Revolver",
    description: "These revolvers offer simplicity of operation with minimal weight, perfect for those who value reliability and ease of use.",
    examples: ["Ruger LCR", "Smith & Wesson 43C"],
    image: "https://your-actual-image-url-here.jpg", // Replace this line
    purchaseLinks: {
        "Ruger LCR": "#",
        "Smith & Wesson 43C": "#"
    },
    explanation: "Ultra-lightweight revolvers combine simplicity with deep concealment capabilities. Their straightforward operation makes them excellent choices for beginners or those who prefer mechanical simplicity."
},
```

### Step 3: Add Purchase Links
For each firearm model you want to link, replace the "#" placeholder with your actual purchase link:

```javascript
purchaseLinks: {
    "Ruger LCR": "https://your-actual-purchase-link-here", // Replace this line
    "Smith & Wesson 43C": "https://your-actual-purchase-link-here" // Replace this line
},
```

### Step 4: Test Your Changes
After making changes, open the index.html file in a web browser to test that your images and links work correctly.

## Example
Here's how the Ultra-Compact Pistol category is currently implemented:

```javascript
ultraCompactPistol: {
    title: "Ultra-Compact Pistol",
    description: "These pistols prioritize deep concealment and ease of carry, making them ideal for situations where discretion is paramount.",
    examples: ["KelTec P15", "SIG P365"],
    image: "https://gearfireimages.s3.amazonaws.com/imagedb/image4671408-1abe9240af14c74d0897bd8ea6daa8d6.jpg",
    purchaseLinks: {
        "SIG P365": "https://shop.optimalzerofirearms.com/handguns/semi-automatic-handguns/p365-9mm-nitron-101-sfty-masssi3659bxr3pmsma"
    },
    explanation: "Ultra-compact pistols offer maximum concealability while still providing adequate defensive capability. They're ideal for those who prioritize ease of carry and deep concealment."
}
```

## Notes
- Make sure your image URLs point to publicly accessible images
- Ensure purchase links are complete and include the full URL (starting with http:// or https://)
- The quiz will automatically use your images and make the firearm names clickable with your provided links
