# mv-main

 MvMain is a Meveo layout component (based on lit-element) that provides standard layout for a page.

## Features
* Provide slots for a `header`, `footer`, `sidebar`, and the main content

## Quick Start

To experiment with the MvMain component.   

1. Clone this repo.

2. Serve the project from the root directory with some http server (best served with meveo itself) 

3. Update the main demo component in demo.js file

## Sample usage
```html
<mv-main>
  <mv-header slot="header">
    <mv-header item>Header</mv-header>
  </mv-header>
  <mv-menu-panel menu showLabel slot="menu">
    <mv-menu-panel label>Sidebar Label</mv-menu-panel>
    <mv-menu-panel item>Sidebar Item</mv-menu-panel>
  </mv-menu-panel>
  
  <h1>Content goes here</h1>
  
  <mv-footer slot="footer">
    <mv-footer item>Footer</mv-footer>
  </mv-footer>
</mv-main>
```

You can also check this [demo](https://manaty.net/mv-main/)
