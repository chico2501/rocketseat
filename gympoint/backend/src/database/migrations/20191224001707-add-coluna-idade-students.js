module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('students', 'idade', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('students', 'idade');
  },
};
