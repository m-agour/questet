const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "has_access", {
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
        }, {
            sequelize,
            tableName: "has_access",
            timestamps: false,
            indexes: [{
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
                {
                    name: "user_has_access_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "userId" }],
                },
                {
                    name: "exam_has_access_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "examId" }],
                },
            ],
        }
    );
};