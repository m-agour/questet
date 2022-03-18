const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "user", {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            firstName: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            middleName: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            lastName: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            DOB: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            pass: {
                type: DataTypes.STRING(1024),
                allowNull: true,
            },
            gender: {
                type: DataTypes.CHAR(1),
                allowNull: true,
            },
            currentPosition: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            activated: {
                type: DataTypes.TINYINT,
                allowNull: true,
            },
            google: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            facebock: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            country: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            city: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            timeZone: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            isOnline: {
                type: DataTypes.TINYINT,
                allowNull: true,
            },
            lastOnline: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
        }, {
            sequelize,
            tableName: "user",
            timestamps: false,
            indexes: [{
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [{ name: "id" }],
            }, ],
        }
    );
};