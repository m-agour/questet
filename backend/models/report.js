const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "report", {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "user",
                    key: "id",
                },
            },
            questionId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "question",
                    key: "id",
                },
            },
            content: {
                type: DataTypes.STRING(5000),
                allowNull: false,
            },
            feedBack: {
                type: DataTypes.STRING(5000),
                allowNull: false,
            },
            filedOn: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            },
            seen: {
                type: DataTypes.TINYINT,
                defaultValue: false,
            },
        }, {
            sequelize,
            tableName: "report",
            timestamps: false,
            indexes: [{
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
                {
                    name: "user_has_question_question1_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "questionId" }],
                },
                {
                    name: "user_has_question_user1_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "userId" }],
                },
            ],
        }
    );
};