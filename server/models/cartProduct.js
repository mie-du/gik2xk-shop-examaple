module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'cartProduct',
    { amount: DataTypes.INTEGER },
    { underscored: true }
  );
};
