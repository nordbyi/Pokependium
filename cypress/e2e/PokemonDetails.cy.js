describe("Pokemon Details Display", () => {
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
    cy.get("#1").click();
    cy.viewport(1500, 900)
  });

  it("should route to a pokemon's details on click", () => {
    cy.url().should("include", "grass+poison/1");
  });

  it("should apply active links to all NavLinks that are the pokemons types", () => {
    cy.get('[href="/grass"]').should("have.class", "active");
    cy.get('[href="/poison"]').should("have.class", "active");
  });

  it("should display the selected pokemon's image", () => {
    cy.get(".details-img").should("be.visible");
  });

  it("should display a pokemon's stats", () => {
    cy.get(".stats").scrollIntoView().should("be.visible");
    cy.contains("Height: 2.30 feet").should('be.visible');
    cy.contains("Weight: 15.21 pounds");
    cy.contains("hp: 45");
    cy.contains("attack: 49");
    cy.contains("defense: 49");
    cy.contains("special-attack: 65");
    cy.contains("special-defense: 65");
    cy.contains("speed: 45");
  });

  it('should display a pokemon\'s flavor text accross game appearances', () => {
    cy.get(".flavor").scrollIntoView().should("be.visible");
  })

  it("should display the nav bar", () => {
    cy.get(".types").should("be.visible");
  });
});
