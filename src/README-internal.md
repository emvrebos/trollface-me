# Trollface Me Chrome Extension (Manifest V3)

## Dev Notes and Docs

Extension made for self-develpment / tesing the hobby.

## What it does

Prank your no colleagues and friends, drive them crazy by displaying a troll from time to time during their web browsing.

## Project configuration

Setup comes from the following boilerplate:
https://github.com/llagerlof/fresh-chrome-extension

## Docs

1.  chrome.permissions: https://developer.chrome.com/docs/extensions/reference/permissions/

2.  chrome.scripting API: https://developer.chrome.com/docs/extensions/reference/scripting/
    Necessay to modify the DOM so I kept the 'scripting' permission in the manifest

3. chrome.tabs API: https://developer.chrome.com/docs/extensions/reference/tabs/
   Not yet necessary in the version 1.0.0 so I removed it from the manifest


# Next Version

### Ideas of improvement

1.  **Efficiency:** Use the chrome.tabs API in order to run only on the active tab

2.  **Fun:** Add random variations to the Trollface ( e.g.: sunglasses, bonnet,etc. )

3.  **Options for the pranker** Add a configuration page in the popup containing custom delay etc









