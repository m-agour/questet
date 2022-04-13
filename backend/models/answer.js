const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "answer", {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            questionId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "question",
                    key: "id",
                },
            },
            correct: {
                type: DataTypes.TINYINT,
                allowNull: true,
            },
        }, {
            sequelize,
            tableName: "answer",
            timestamps: false,
            indexes: [{
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
                {
                    name: "aswer_question1_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "questionId" }],
                },
            ],
        }
    );
};