const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "question",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      points: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      questionType: {
        type: DataTypes.CHAR(1),
        allowNull: true,
      },
      questionData: {
        type: DataTypes.STRING(5000),
        allowNull: true,
      },
      examId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: "exam",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "question",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "question_exam1_fk_idx",
          using: "BTREE",
          fields: [{ name: "examId" }],
        },
      ],
    }
  );
};
