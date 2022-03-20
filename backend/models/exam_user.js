const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "user_exam", {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            examId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "exam",
                    key: "id",
                },
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "user",
                    key: "id",
                },
            },
            timeStarted: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            timeFinished: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        }, {
            sequelize,
            tableName: "user_exam",
            timestamps: false,
            indexes: [{
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
                {
                    name: "exam_has_user_user1_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "userId" }],
                },
                {
                    name: "exam_has_user_exam1_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "examId" }],
                },
            ],
        }
    );
};