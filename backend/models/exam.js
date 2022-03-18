const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "exam", {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            totalPoints: {
                type: DataTypes.FLOAT,
                allowNull: true,
            },
            userId1: {
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
            startDate: {
                type: DataTypes.DATEONLY,
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
                    name: "exam_user1_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "userId1" }],
                },
            ],
        }
    );
};