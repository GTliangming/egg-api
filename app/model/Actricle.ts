/* eslint-disable jsdoc/check-param-names */
/* eslint-disable @typescript-eslint/indent */
// app/model/User.ts

import { Application } from 'egg';
import moment = require('moment');


module.exports = (app: Application) => {
    const { DATE, NOW, DataTypes } = app.Sequelize;
    const Actricle = app.model.define('actricle', {
        actricle_id: {
            type: DataTypes.INTEGER,
            field: 'actricle_id',
            primaryKey: true,
            autoIncrement: true,
        },
        actricle_text: {
            type: DataTypes.STRING(1000),
            field: 'actricle_text',
        },
        actricle_author: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        created_time: {
            type: DATE,
            allowNull: true,
            defaultValue: NOW,
            get() { return moment((this as any).getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss'); },
        },
        updated_time: {
            type: DATE,
            allowNull: true,
            defaultValue: NOW,
            get() { return moment((this as any).getDataValue('updated_at')).format('YYYY-MM-DD HH:mm:ss'); },
        },
    }, {
        paranoid: false,
        timestamps: true,
        createdAt: false, // 表示不启用created_at
        updatedAt: false, // 表示不启用updated_at
        freezeTableName: true, // 使用自定义表名
        // 使用自定义表名之后上面写的users就直接就是你的表名，如果不加的话，你就可以写user，但是自己的表名为users，程序会自动将s加上
        tableName: 'actricle', // 自定义的表名，也可以不写，直接用define后面的也可以
        // 只要你使用了freezeTableName，程序就不会自动给你加上s了
    });

    return Actricle;
};
