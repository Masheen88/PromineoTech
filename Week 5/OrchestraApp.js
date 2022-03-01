//Creates a class specific section for the instruments to reside in. - Begin
class Section {
  constructor(sectionName) {
    this.sectionName = sectionName;
    this.instruments = [];
  }

  //Adds an instrument element to the elements array.
  addInstrument(instrument) {
    if (instrument instanceof Instrument) {
      //Pushes an instrument into the Section instruments array.
      this.instruments.push(instrument);
    } else {
      throw new Error(
        "You must add a musical instrument. Argument is not an instrument!!!: ",
        instrument
      );
    }
  }

  //Describes what Section has.
  describe() {
    console.log("Test:", this.sectionName);
    return `${this.sectionName}has ${this.instruments.length} instruments.`;
  }
}

//Creates a class specific instrument and instrument type - Begin
class Instrument {
  constructor(instrumentName, instrumentType) {
    this.instrumentName = instrumentName;
    this.instrumentType = instrumentType;
  }

  describe() {
    return `${this.instrumentName}, is a, ${this.instrumentType}, instrument.`;
  }
}

//Orchestra Main Menu Selection - Begin
class mainMenu {
  constructor() {
    this.sections = [];
    this.selectedSection = null;
  }

  //Displays the mainMenu when requesting to start - Begin
  start() {
    //Displays the mainMenu until a selected has been made.
    let menuSelection = this.displayMainMenuOptions();
    while (menuSelection != 0) {
      console.log("You have chosen:", menuSelection);
      switch (menuSelection) {
        case "1":
          this.createSection();
          break;
        case "2":
          this.viewSection();
          break;
        case "3":
          this.deleteSection();
          break;
        case "4":
          this.displaySections();
          break;
        case "5":
          this.viewExampleSections();
          break;
        case "6":
          this.viewSubmenuExamples();
          break;
        default:
          menuSelection = 0;
      }
      //Keeps looping until 0 is selected.
      menuSelection = this.displayMainMenuOptions();
    }
    //If 0 is seledcted the program will exit.
    alert(
      `Thank you for enjoying our fine selectiong of musical instruments. Goodbye!`
    );
  }

  //Displays the main menu available options - Begin
  displayMainMenuOptions() {
    return prompt(`
 Welcome to the - Create Your Own Orchestra Menu!
 >----------------------------------------------------<

    0) Exit
    1) Create a new Section
    2) View a Section
    3) Delete a Section
    4) Display all Sections
    5) Displays example Sections only
    6) Display example Instruments, & Types
    `);
  }
  //Displays the create/delete instrument menu - Begin
  displaySectionMenuOptions(sectionInformation) {
    console.log(
      "sectionInformation from display of menu options:",
      sectionInformation
    );
    return prompt(`
    0) Previous
    1) Create an instrument
    2) Delete an instrument
    >----------------------<

    ${sectionInformation}
    `);
  }

  //Displays example Sections - Begin
  viewExampleSections() {
    console.log();
    return prompt(`
      0) Previous
      >--------<

      * Percussion
      * Basses
      * Violins
      * Oboe
      * Bassoon
      `);
  }

  //Displays some example instruments - Begin
  viewExampleInstrumentsTypes() {
    return prompt(`
    0) Previous
    1) Percussion
    2) Basses
    3) Violins
    4) Oboe
    5) Bassoon
    `);
  }

  //Function that views a submenu of example instruments and types.
  viewSubmenuExamples() {
    let submenuSelection = this.viewExampleInstrumentsTypes();
    switch (submenuSelection) {
      case "1":
        this.viewExamplePercussion();
        break;
      case "2":
        this.viewExampleBasses();
        break;
    }
    submenuSelection = this.viewExampleInstrumentsTypes();
  }

  //Displays example Percussion Instruments subMenu - Begin
  viewExamplePercussion() {
    return prompt(`
      0) Previous
      >-------------------<
      a. Timpani | Drums
      b. Crash | Cymbals
      c. Xylophone | Percussion
      `);
  }

  //Displays example Bass Instruments subMenu - Begin
  viewExampleBasses() {
    return prompt(`
      0) Previous
      >-------------------<
      a. Double Bass | Strings
      b. Tuba | Wind
      c. Bassoon | Woodwind
      `);
  }

  //Displays the all Sections you have created - Begin
  displaySections() {
    let sectionString = "";
    console.log("The section string =", sectionString);

    for (let i = 0; i < this.sections.length; i++) {
      sectionString += i + ") " + this.sections[i].sectionName + "\n";
    }

    alert(sectionString);
  }
  //Function that creates a Section - Begin
  createSection() {
    let sectionName = prompt("Enter a Section name;");
    console.log("Section name from prompt input:", sectionName);
    this.sections.push(new Section(sectionName));
    console.log(sectionName);
    console.log(this);
  }

  //Function that views a specific Section - Begin
  viewSection() {
    let sectionIndex = prompt(
      "Enter the index of the section you wish to view:"
    );
    //Outputs to console the index you have selected
    console.log("You selected Index:", sectionIndex);

    if (sectionIndex > -1 && sectionIndex < this.sections.length) {
      this.selectedSection = this.sections[sectionIndex];

      //MainMenu contains x number of arrays creates and the menu item you selected.
      console.log(this);
      //Outputs to console the selected Section and how many instruments are in the Array
      console.log(this.sections[sectionIndex]);

      let sectionDescription =
        "Section Name: " + this.selectedSection.sectionName + "\n";
      //Creates a list of all instruments in a section.

      for (let i = 0; i < this.selectedSection.instruments.length; i++) {
        sectionDescription +=
          i +
          ") " +
          this.selectedSection.instruments[i].instrumentName +
          " - " +
          this.selectedSection.instruments[i].instrumentType +
          "\n";
      }
      //Outputs to  console the number of instruments in the section.
      console.log(
        "# of instruments in the chosen section:",
        this.selectedSection.instruments.length
      );

      //Displays the Instrument sub-menu - Begin
      let menuSelection = this.displaySectionMenuOptions(sectionDescription);
      console.log("You chose sub-menu selection:", menuSelection);

      switch (menuSelection) {
        case "1":
          this.createInstrument();
          break;
        case "2":
          this.deleteInstrument();
          break;
      }
    }
  }

  //Function that deletes a Section - Begin
  deleteSection() {
    let sectionIndex = prompt(
      "Enter the index of the section you wish to delete:"
    );
    if (sectionIndex > -1 && sectionIndex < this.sections.length) {
      this.sections.splice(sectionIndex, 1);
    }
  }

  //Function that creates an instrument - Begin
  createInstrument() {
    let instrumentName = prompt(
      "Enter a name for the instrument you wish to create:"
    );
    let instrumentType = prompt("Enter the instruments' type:");
    this.selectedSection.instruments.push(
      new Instrument(instrumentName, instrumentType)
    );
  }

  //Fucntion that deletes an instrument - Begin
  deleteInstrument() {
    let instrumentIndex = prompt(
      "Enter the index of the instrument you wish to delete:"
    );
    if (
      instrumentIndex > -1 &&
      instrumentIndex < this.selectedSection.instruments.length
    ) {
      this.selectedSection.instruments.splice(instrumentIndex, 1);
    }
  }

  //Main Menu - End
}

//Initializes the myMenuApp program
let promptMenu = new mainMenu();
promptMenu.start();
