const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "exam",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      totalPoints: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0.0,
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      public: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      startAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "exam",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "exam_user_fk_idx",
          using: "BTREE",
          fields: [{ name: "userId" }],
        },
      ],
    }
  );
};
