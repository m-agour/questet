const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "message", {
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "user",
                    key: "id",
                },
            },
            userId1: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "user",
                    key: "id",
                },
            },
            content: {
                type: DataTypes.STRING(1025),
                allowNull: false,
            },
            sentDate: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            isSeen: {
                type: DataTypes.TINYINT,
                allowNull: true,
            },
        }, {
            sequelize,
            tableName: "message",
            timestamps: false,
            indexes: [{
                    name: "user_has_user_user2_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "userId1" }],
                },
                {
                    name: "user_has_user_user1_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "userId" }],
                },
            ],
        }
    );
};