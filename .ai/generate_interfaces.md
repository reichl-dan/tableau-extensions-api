Create type interfaces for the following:
  [LIST]

Create a new file in the globals directory. If the name of the interface is InterfaceName the name of the file should be interfaceName.ts

Import the new file in the _globals.ts file.

The link provided should give you access to the Interface.

When creating the Interfaces, preserve order of the properties.

Anything typed as 'any' should be changed to 'unknown'.

IMPORTANT: YOU MUST FOLLOW THIS INSTRUCTION: It is possible that I may ask you to create an interface that references another interface that has not been created yet. If this happens, operate as if the referenced interface already exists, as I will prompt you to create it later.

Using the content on the webpages, include jsdoc strings verbatim for the interface itself as well as each property within the interface. If an interface does not have a description, you can make one up. If a property does not have a description, you can add it without a description.

Pay attention to hierarchy. For example, the MarksSelectedEvent should extend from the TableauWorksheetEvent, which should extend from the TableauSheetEvent, which should extend from the TableauEvent. If a property is inherited from its parent, it should not be explicitly added to the interface you are creating.

Any references to an enum can utilize the imported Enums type via import type * as Enums from '../enums/_enums'. For example, type: Enums.TableauEventType.
