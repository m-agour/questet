const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "exam_has_tag", {
            examId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "exam",
                    key: "id",
                },
            },
            tagTitle: {
                type: DataTypes.STRING(45),
                onDelete: "CASCADE",
                allowNull: false,
                references: {
                    model: "tag",
                    key: "title",
                },
            },
        }, {
            sequelize,
            tableName: "exam_has_tag",
            timestamps: false,
            indexes: [{
                    name: "exam_has_tag_tag1_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "tagTitle" }],
                },
                {
                    name: "exam_has_tag_exam1_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "examId" }],
                },
            ],
        }
    );
};