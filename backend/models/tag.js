const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "tag", {
            title: {
                type: DataTypes.STRING(45),
                allowNull: false,
                primaryKey: true,
            },
        }, {
            sequelize,
            tableName: "tag",
            timestamps: false,
            indexes: [{
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [{ name: "title" }],
            }, ],
        }
    );
};