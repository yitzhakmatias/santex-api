describe('PlayerController', () => {
  it('should get players by league code', () => {
    // Make a request to the /players-by-league endpoint
    cy.request('GET', '/players', {
      leagueCode: 'PD',
      teamName: 'Real Madrid CF'
    }).then((response) => {
      // Check if the response status is 200
      expect(response.status).to.equal(200);

      // Check if the response body is an array
      expect(response.body).to.be.an('array');

      // Check properties of the first player in the array
      const firstPlayer = response.body[0];
      expect(firstPlayer).to.have.property('id');
      expect(firstPlayer).to.have.property('name');
      // Add more property checks for player properties as needed
    });
  });
});
