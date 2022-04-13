// const Sequelize = require("sequelize");
// module.exports = function(sequelize, DataTypes) {
//     return sequelize.define(
//         "correct", {
//             questionId: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false,
//                 references: {
//                     model: "question",
//                     key: "id",
//                 },
//             },
//             answerId: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false,
//                 references: {
//                     model: "answer",
//                     key: "id",
//                 },
//             },
//         }, {
//             sequelize,
//             tableName: "correct",
//             timestamps: false,
//             indexes: [{
//                     name: "question_has_aswer_aswer1_fk_idx",
//                     using: "BTREE",
//                     fields: [{ name: "answerId" }],
//                 },
//                 {
//                     name: "question_has_aswer_question1_fk_idx",
//                     using: "BTREE",
//                     fields: [{ name: "questionId" }],
//                 },
//             ],
//         }
//     );
// };