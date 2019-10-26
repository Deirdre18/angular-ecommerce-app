# Angular-ecommerce-app
An ecommerce app using angular. 

## Template Syntax
Initial set-up using angular syntax to create product lists and iteration, using *ngFor. Learning outcomes in this section include implementing five common features of Angular's template syntax to create a products list:

*ngFor
*ngIf
Interpolation {{ }}
Property binding [ ]
Event binding ( )

## Components
Components define areas of responsibility in the user interface, or UI, that let you reuse sets of UI functionality. The above products list created is one component.

A component consists of three things:

1) A component class that handles data and functionality. In the previous section, the product data and the share() method in the component class handle data and functionality, respectively.

2) A HTML template that determines the UI. In the previous section, the product list's HTML template displays the name, description, and a "Share" button for each product.

3) Component-specific styles that define the look and feel. Though product list does not define any styles, this is where component CSS resides.

An Angular application comprises a tree of components, in which each Angular component has a specific purpose and responsibility.

So far, the app has three components:

- app-root, which is the application shell. This is the first component to load and the parent of all other components (consider it the base page).

- app-top-bar, which is the store name and checkout button.

- app-product-list, which is the product list.





