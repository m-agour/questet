const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "group", {
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
            userId: {
                type: DataTypes.INTEGER,
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
                type: DataTypes.TIME,
                allowNull: true,
            },
            startsAt: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        }, {
            sequelize,
            tableName: "exam",
            timestamps: false,
            indexes: [{
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