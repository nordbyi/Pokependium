describe("Main Display", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://pokeapi.co/api/v2/pokemon/?limit=251", {
      count: 1281,
      next: "https://pokeapi.co/api/v2/pokemon/?offset=4&limit=4",
      previous: null,
      results: [
        {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
        },
        {
          name: "ivysaur",
          url: "https://pokeapi.co/api/v2/pokemon/2/",
        },
        {
          name: "venusaur",
          url: "https://pokeapi.co/api/v2/pokemon/3/",
        },
        {
          name: "charmander",
          url: "https://pokeapi.co/api/v2/pokemon/4/",
        },
      ],
    });
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon/1/", {
      fixture: "bulbasaur",
    });
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon/2/", {
      fixture: "ivysaur",
    });
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon/3/", {
      fixture: "venusaur",
    });
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon/4/", {
      fixture: "charmander",
    });
    cy.visit("http://localhost:3000/");
    cy.viewport('iphone-x')
  });

  it("should display a nav bar", () => {
    cy.get(".nav").should("be.visible");
  });

  it("should display All, pokemon types and About Me", () => {
    cy.get('[href="/"]').should("be.visible");
    cy.get('[href="/grass"]').should("be.visible");
    cy.get('[href="/poison"]').should("be.visible");
    cy.get('[href="/fire"]').should("be.visible");
  });

  it("should have an active class on All section on load", () => {
    cy.get('[href="/"]').should("have.class", "active");
  });

  it("should display the filter input", () => {
    cy.get(".input").should("be.visible");
  });

  it("should display all pokemon", () => {
    cy.get("#1")
      .should("be.visible")
      .should("have.attr", "src")
      .should(
        "include",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      );
    cy.get("#2")
      .should("be.visible")
      .should("have.attr", "src")
      .should(
        "include",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
      );
    cy.get("#3")
      .should("be.visible")
      .should("have.attr", "src")
      .should(
        "include",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
      );
    cy.get("#4")
      .should("be.visible")
      .should("have.attr", "src")
      .should(
        "include",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
      );
  });

  it("should type into filter to and have pokemon shown change", () => {
    cy.get(".input").type("bulb").should("have.value", "bulb");
  });

  it("should only show pokemon with names that include the input value", () => {
    cy.get(".input").type("char");
    cy.get("#4").should("be.visible");
    cy.get(".container").children().should("have.length", 1);

    cy.get(".input").clear();
    cy.get(".container").children().should("have.length", 4);

    cy.get(".input").type("saur");
    cy.get(".container").children().should("have.length", 3);
  });

  it("should show pokemon by type when the corresponding NavLink is clicked", () => {
    cy.get('[href="/fire"]').click();
    cy.url().should('include', 'fire')
    cy.get(".container").children().should("have.length", 1);
    cy.get("#4")
      .should("be.visible")
      .should("have.attr", "src")
      .should(
        "include",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
      );
    cy.get('[href="/fire"]').should("have.class", "active");

    cy.get('[href="/poison"]').click();
    cy.url().should('include', 'poison')
    cy.get(".container").children().should("have.length", 3);
    cy.get('[href="/poison"]').should("have.class", "active");
  });

  it("should be able to filter when showning only pokemon of routed type", () => {
    cy.get('[href="/grass"]').click();
    cy.url().should('include', 'grass')
    cy.get('[href="/grass"]').should("have.class", "active");
    cy.get(".container").children().should("have.length", 3);
    cy.get(".input").type("bulb");
    cy.get(".container").children().should("have.length", 1);
    cy.get("#1")
      .should("be.visible")
      .should("have.attr", "src")
      .should(
        "include",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      );
  });
});

