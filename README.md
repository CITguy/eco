# Eco
Definition and Documentation of Eco Design

## Defines

### Styles
* Colors
  * [LESS variables](http://lesscss.org/features/#variables-feature)
* Fonts & Typography
  * [Roboto Font](https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,700,700italic) 
* Icons
  * [FontAwesome](http://fontawesome.io/) Icons
* Layout / Grid System
  * flexbox
    * [guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
    * [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
* Helper CSS
  * mixins (if applicable)
  * e.g. `.hidden`, `.clear`, `.subdued`, etc.

### Atoms
* Style
  * namespaced to prevent CSS bleed
  * YES: 
    * `atom-name` (**spinal-case** element selector)
    * `.atomName` (**lowerCamelCase** class selector)
  * NO: 
    * ~~`.atom-name`~~ (**spinal-case** class selector - may be confused with element selector)
* Structure
* Examples show full HTML markup for all possible states
  * 2 spaces per indent
  * for elements with 3 or more attributes
   * place attributes on their own line
   * indent one level from opening tag
* Atom States:
  * Normal
  * Valid
  * Invalid
  * Hover
  * Active
  * Disabled (trumps all other states)
* Do's & Don'ts
* Atoms:
  * Breadcrumbs
  * Button
  * Card
  * Checkbox
  * Date Select
  * File Select
  * Floating Table Header
  * Metadata
  * Modal
  * Multi-select Dropdown
  * Number Input
  * Pagination
  * Popover
  * Progressbar
  * Radio
  * Search Box
  * Single-select Dropdown
  * Sortable Column Header
  * Spinner
  * Tabs
  * Table
  * Text Area
  * Text Input
  * Time Select
  * Toggle Switch
  * Tooltip
  * Wells

### Molecules
How to combine Atoms into larger, reusable pieces.
* Forms
  * Do's and Don'ts
  * Atoms:
    * Button
    * Checkbox
    * Date Select
    * File Select
    * Multi-select Dropdown
    * Number Input
    * Radio
    * Search Box
    * Single-select Dropdown
    * Text Area
    * Text Input
    * Time Select
    * Toggle Switch
* Pickers
  * Do's and Don'ts
  * Atoms
    * Date Picker
    * Time Picker
  * DateTime Picker = Date Picker + Time Picker
* Tables
  * Do's and Don'ts
  * Atoms
    * Floating Header
    * Sortable Column Header
    * Pagination
* etc.

### Formulas
How to use atoms and molecules to achieve a desired UX.

* Date/Time Formatting
  * Absolute vs Relative
* Zero Data Formatting
  * "no data" tables
  * "N/A" instead of blank values
* Layouts (for CRUD actions)
  * List Page (**R**etrieve)
  * Details Page (**R**etrieve)
  * Form Page (**C**reate, **U**pdate)
  * Delete/Destructive Modal (**D**elete)
* Should I use a dropdown or radio group?
* When should I use a table versus metadata?
* Where should resource/action links be placed?
* How should I combine a data table with a form for filtering?
* etc.

# What should be included
* Static* site to document UX and design
* LESS variables
* Combined CSS / Minified CSS
* Raw HTML markup for each element
  * provides a template for each implementation to follow

# What should not be included
* Javascript
* Framework/Technology implementation details
