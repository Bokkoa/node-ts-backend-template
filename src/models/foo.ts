import { DataTypes } from "sequelize";

import database from "../start/dbConnection";

export const Foo = database.define('Foo', {
    bar: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    },
    { 
        timestamps: true,
        createdAt: "created_at", // alias createdAt as created_at
        updatedAt: "updated_at", // alias updatedAt as updated_at
    });
