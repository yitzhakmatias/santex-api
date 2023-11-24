describe('TeamController', () => {
  it('should get teams with players', () => {
    // Make a request to the /team endpoint
    cy.request('GET', '/team', {
      teamName: 'Athletic Club',
      includePlayers: 'true'
    }).then((response) => {
      // Check if the response status is 200
      expect(response.status).to.equal(200);

      // Check if the response body is an object
      expect(response.body).to.be.an('Object');

      // Check properties of the first team in the object
      const team = response.body;
      expect(team).to.have.property('id');
      expect(team).to.have.property('name', 'Athletic Club');
      // Check properties of players for the team
      const players = team.players;
      expect(players).to.be.an('array');
      expect(players).to.have.length.greaterThan(0);
      // Check properties of the first player
      const firstPlayer = players[0];
      expect(firstPlayer).to.have.property('id');
      expect(firstPlayer).to.have.property('name');
    });
  });
});
