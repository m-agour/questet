const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('answered', {
    userExamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_exam',
        key: 'id'
      }
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'question',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'answered',
    timestamps: false,
    indexes: [
      {
        name: "fk_user_has_question_question2_idx",
        using: "BTREE",
        fields: [
          { name: "questionId" },
        ]
      },
      {
        name: "fk_user_has_question_user2_idx",
        using: "BTREE",
        fields: [
          { name: "userExamId" },
        ]
      },
    ]
  });
};
