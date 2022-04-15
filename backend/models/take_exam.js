const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "take_exam", {
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
            timeFinished: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            timeStarted: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        }, {
            sequelize,
            tableName: "take_exam",
            timestamps: false,
            indexes: [{
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
                {
                    name: "user_take_exam_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "userId" }],
                },
                {
                    name: "exam_take_exam_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "examId" }],
                },
            ],
        }
    );
};