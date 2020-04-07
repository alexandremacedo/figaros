module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('services', 'service', 'name', {
      type: Sequelize.STRING
    });
  },
};
