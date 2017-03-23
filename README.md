# civicart-drupal

This module provides a list of tokens to include civicart item information and buttons.

### Requirements
This module only works on a site running CiviCRM with CiviCart enabled.

1. [CiviCRM](http://civicrm.org)
1. [CiviCart](https://github.com/TobiasLounsbury/civicart)
1. [Token](https://www.drupal.org/project/token)


## Installation

1. Make sure that all required extensions and modules are installed.
1. Unzip/Clone into your site's modules folder (eg: /sites/all/modules).
1. Enable the module.


## Documentation
Descriptions are pulled from the field's post help box unless there is another extension used to supply more/better information.
One such extension is the PriceSetInventory extension (see Related Projects)

#### Format
`[civicart:{Type}:{Id}:{Context}:{Name}]`
1. **Type:** This is the type of item you are interested in loading either `item` or `option`. `item` will render an entire priceField, whereas `option` is used to render a single option from a collectioin of check-boxes.
1. **Id:** The priceField Id or the PriceFieldValue id, depending on type
1. **Context:** The Type of widget you wish to render: 
  * `full`: Renders both the item description and the "Add to Cart" widget
  * `description`: Renders only the item description
  * `button`: Renders only the "Add to Cart" widget
1. **Name:**  


## Examples

#### Basic usage
`[civicart:item:3:full:civicon_waterbottle]`  
This will render a description (See Documentation) as well as an "Add to Cart" widget 

`[civicart:item:3:description:civicon_waterbottle]`  
This will render only the item description for the CiviCon Water bottle

`[civicart:item:3:button:civicon_waterbottle]`  
This will render only the "Add to Cart" widget for the water bottle.


## Related Projects

* [CiviCart](https://github.com/TobiasLounsbury/civicart)
* [CiviCart-Wordpress](https://github.com/TobiasLounsbury/civicart-wordpress)
* [CiviCRM-PriceSet-Inventory](https://github.com/TobiasLounsbury/civicrm-priceset-inventory)
