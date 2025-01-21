import BaseClass from '../baseClass';

/**
 * The LinkItem class represents a clickable item that can link to another object or path.
 * It extends from BaseClass and is used to manage the linking behavior and appearance of the item.
 */
export default class LinkItem extends BaseClass {
  /**
   * Initializes the LinkItem with the provided props and sets up the initial properties.
   * It also configures the class and item type.
   * @param {Object} props - The properties passed to the component.
   */
  constructor(props) {
    super(props); // Calls the parent class constructor

    // Adds the setUpLinks method to the initial properties setup functions array
    this.initialPropsSetupFunctions = [...this.initialPropsSetupFunctions, this.setUpLinks];
    this.state.classKey = "MCLinkItem"; // Defines the class key for styling
    this.state.itemType = "div"; // Defines the item type as "div" by default
  }

  /**
   * Sets up the links for the LinkItem by defining the path and link-related properties.
   */
  setUpLinks() {
    this.cell.to = this.obj.path; // Assigns the path for the link
    this.useId = ""; // Resets the ID used for linking (if applicable)
    this.cell.hasLink = true; // Marks the item as having a link
  }

  /**
   * Retrieves the active class to be applied to the link when it's in an active state.
   * The active class is either taken from the object or the theme.
   * @returns {string} The active class name to be used.
   */
  getActiveClass() {
    this.activeClass = this.cell.activeClass || this.theme.MCActiveLink; // Determines the active class
    return this.activeClass;
  }

  /**
   * Sets the active class for the item if its name matches the object's active state.
   * This ensures that the link item appears visually active when appropriate.
   */
  setActiveClass() {
    if (this.obj?.active === this.obj?.name) { // Checks if the object is active
      let activeClass = this.getActiveClass(); // Retrieves the active class
      activeClass = activeClass || ""; // Defaults to an empty string if no class is found
      this.item.setClass(this.item.getClass() + " " + activeClass); // Adds the active class to the item
    }
  }

  /**
   * Performs additional setup tasks for the LinkItem.
   * This includes setting the active class if needed.
   */
  additionalSetup() {
    this.setActiveClass(); // Calls setActiveClass to apply the active class if appropriate
  }

  /**
   * Retrieves the option text for the link item, which is typically its name.
   * @returns {string} The name of the object (or the link text).
   */
  getOption() {
    return this.props.obj?.name; // Returns the name of the object as the link text
  }
}

/**
 * TODO: Expand functionality to handle more complex linking scenarios (e.g., external links, conditional rendering).
 */


