
"use strict";
const { hash } = require("../helper/passHelper");
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class User extends Model {}
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "username can not be empty"
          },
          notEmpty: {
            args: true,
            msg: "username can not be empty"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            args : true,
            msg : 'email is not valid'
          },
          notNull: {
            args: true,
            msg: "email can not be empty"
          },
          notEmpty: {
            args: true,
            msg: "email can not be empty"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "password can not be empty"
          },
          notNull: {
            args: true,
            msg: "email can not be empty"
          }
        }
      }
    },
    {
      hooks: {
        beforeCreate(user, options) {
         const hashPass = hash(user.password)
              user.password = hashPass 
        }
      },
      sequelize
    }
  );
  User.associate = function(models) {
  };
  return User;
};
