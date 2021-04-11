'use strict';

const {Model, DataTypes} = require(`sequelize`);

module.exports = (sequelize) => {
    // модель позволяет описать структуру объекта, который должен храниться в базе данных
    class Reader extends Model{}
    Reader.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        firstname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        birthDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
    }, {
        sequelize,
        timestamps: true,
        paranoid: true,
    });

    return Reader;
};
