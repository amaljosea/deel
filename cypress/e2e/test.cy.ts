describe('Basic test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('ion-header', 'Pay Slip');
  });

  it('Visits the payslip url', () => {
    cy.visit('/payslip/1');
    cy.contains('ion-button', 'Download Payslip');
  });
});
