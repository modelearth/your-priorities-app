"use strict";

const request = require('request').defaults({ encoding: null });
const fs = require('fs');
const randomstring = require("randomstring");
const log = require('../utils/logger');
const toJson = require('../utils/to_json');

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define("Image", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    license: DataTypes.STRING,
    cc_url: DataTypes.STRING,
    original_url: DataTypes.STRING,
    photographer_name: DataTypes.STRING,
    formats: DataTypes.TEXT,
    original_filename: DataTypes.STRING,
    s3_bucket_name: DataTypes.STRING,
    ip_address: { type: DataTypes.STRING, allowNull: false },
    user_agent: { type: DataTypes.TEXT, allowNull: false },
    location: DataTypes.JSONB,
    deleted: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
  }, {

    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',

    timestamps: true,

    tableName: 'images',

    defaultScope: {
      where: {
        deleted: false
      },
      order: [
        ['created_at', 'asc' ]
      ]
    },

    indexes: [
      {
        fields: ['id', 'deleted']
      },
      {
        name: 'images_idx_deleted',
        fields: ['deleted']
      }
    ]
  });

  Image.associate = (models) => {
    Image.belongsTo(models.User, { foreignKey: 'user_id'});
    Image.belongsToMany(models.Video, { as: 'VideoImages', through: 'VideoImage' });
    Image.belongsToMany(models.Post, { as: 'PostImages', through: 'PostImage' });
    Image.belongsToMany(models.Post, { as: 'PostHeaderImages', through: 'PostHeaderImage' });
    Image.belongsToMany(models.Post, { as: 'PostUserImages', through: 'PostUserImage' });
    Image.belongsToMany(models.Group, { through: 'GroupImage' });
    Image.belongsToMany(models.Community, { as: 'CommunityLogoImages', through: 'CommunityLogoImage' });
    Image.belongsToMany(models.Community, { as: 'CommunityHeaderImages', through: 'CommunityHeaderImage' });
    Image.belongsToMany(models.User, { as: 'UserProfileImages', through: 'UserProfileImage' });
    Image.belongsToMany(models.User, { as: 'UserHeaderImages', through: 'UserHeaderImage' });
    Image.belongsToMany(models.Category, { as: 'CategoryIconImages', through: 'CategoryIconImage' });
    Image.belongsToMany(models.Category, { as: 'CategoryHeaderImages', through: 'CategoryHeaderImage' });
    Image.belongsToMany(models.Group, { as: 'GroupLogoImages', through: 'GroupLogoImage' });
    Image.belongsToMany(models.Group, { as: 'GroupHeaderImages', through: 'GroupHeaderImage' });
    Image.belongsToMany(models.Domain, { as: 'DomainLogoImages', through: 'DomainLogoImage' });
    Image.belongsToMany(models.Domain, { as: 'DomainHeaderImages', through: 'DomainHeaderImage' });
  };

  Image.defaultAttributesPublic = ["id","updated_at","formats"];

  Image.createFormatsFromSharpFile = (sharpFile) => {
    const formats = [];
    Object.keys(sharpFile).forEach((key) => {
      if (sharpFile[key].ACL && sharpFile[key].Location) {
        formats.push(sharpFile[key].Location)
      }
    })

    return formats.reverse();
  }

  Image.createFormatsFromVersions = (versions) => {
    const formats = [];
    versions.forEach((version) => {
      const n = version.url.lastIndexOf(process.env.S3_BUCKET);
      const path = version.url.substring(n+process.env.S3_BUCKET.length, version.url.length);
      let newUrl;

      if (process.env.MINIO_ROOT_USER && process.env.NODE_ENV === 'development') {
        newUrl = process.env.S3_ENDPOINT
          + "/" + process.env.S3_BUCKET
          + path;
      } else if (process.env.MINIO_ROOT_USER) {
        newUrl = "https://"
          + process.env.S3_ENDPOINT
          + "/" + process.env.S3_BUCKET
          + path;
      } else {
        newUrl = "https://"
          + process.env.S3_BUCKET + "." + (process.env.S3_ENDPOINT || "s3.amazonaws.com")
          + path;
      }
      formats.push(newUrl);
    });
    return formats;
  };

  Image.getSharpVersions = (itemType) => {
    let versions;
    if (itemType && itemType === 'user-profile') {
      versions = [
        {
          height: 200,
          width: 200,
          suffix: '-small',
          directory: 'up'
        },
        {
          height: 50,
          width: 50,
          suffix: '-tiny',
          directory: 'up'
        }
      ]
    } else if (itemType && itemType === 'domain-logo') {
      versions = [
        {
          width: 864,
          height: 486,
          suffix: '-retina',
          directory: 'dl'
        },
        {
          width: 432,
          height: 243,
          suffix: '-medium',
          directory: 'dl'
        }
      ]
    } else if (itemType && itemType === 'community-logo') {
      versions = [
        {
          width: 864,
          height: 486,
          suffix: '-retina',
          directory: 'cl'
        },
        {
          width: 432,
          height: 243,
          suffix: '-medium',
          directory: 'cl'
        }
      ]
    } else if (itemType && itemType === 'app-home-screen-icon') {
      versions = [
        {
          width: 512,
          height: 512,
          suffix: '-512',
          directory: 'ai'
        },
        {
          width: 384,
          height: 384,
          suffix: '-384',
          directory: 'ai'
        },
        {
          width: 256,
          height: 256,
          suffix: '-256',
          directory: 'ai'
        },
        {
          width: 192,
          height: 192,
          suffix: '-192',
          directory: 'ai'
        },
        {
          width: 180,
          height: 180,
          suffix: '-180',
          directory: 'ai'
        },
        {
          width: 152,
          height: 152,
          suffix: '-152',
          directory: 'ai'
        },
        {
          width: 144,
          height: 144,
          suffix: '-144',
          directory: 'ai'
        },
        {
          width: 96,
          height: 96,
          suffix: '-96',
          directory: 'ai'
        },
        {
          width: 48,
          height: 48,
          suffix: '-48',
          directory: 'ai'
        }
      ]
    } else if (itemType && itemType === 'organization-logo') {
      versions = [
        {
          width: 1000,
          height: 1000,
          suffix: '-large',
          directory: 'ol'
        },
        {
          width: 200,
          height: 200,
          suffix: '-medium',
          directory: 'ol'
        },
        {
          width: 50,
          height: 50,
          suffix: '-small',
          directory: 'ol'
        }
      ]
    } else if (itemType && itemType === 'group-logo') {
      versions = [
        {
          width: 864,
          height: 486,
          suffix: '-retina',
          directory: 'gl'
        },
        {
          width: 432,
          height: 243,
          suffix: '-medium',
          directory: 'gl'
        }
      ]
    } else if (itemType && itemType === 'post-header') {
      versions = [
        {
          width: 864,
          height: 486,
          suffix: '-retina',
          directory: 'ph'
        },
        {
          width: 432,
          height: 243,
          suffix: '-medium',
          directory: 'ph'
        }
      ]
    } else if (itemType && itemType === 'category-icon') {
      versions = [
        {
          width: 864,
          height: 486,
          suffix: '-retina',
          directory: 'ci'
        },
        {
          width: 432,
          height: 243,
          format: 'png',
          suffix: '-medium',
          directory: 'ci'
        }
      ]
    } else if (itemType && itemType.indexOf('-header') > -1) {
      versions = [
        {
          height: 300,
          suffix: '-large',
          directory: 'he'
        }
      ]
    } else if (itemType && itemType.indexOf('post-user-image') > -1) {
      versions = [
        {
          height: 2048,
          width: 1536,
          suffix: '-desktop-retina',
          directory: 'pu'
        },
        {
          height: 720,
          width: 540,
          format: 'png',
          suffix: '-mobile-retina',
          directory: 'pu'
        },
        {
          height: 120,
          width: 90,
          format: 'png',
          suffix: '-thumb',
          directory: 'pu'
        }
      ]
    } else {
      versions = [
        {
          width: 945,
          format: 'jpg',
          suffix: '-16_9',
          directory: 'df'
        },
        {
          height: 512,
          width: 512,
          suffix: '-box',
          directory: 'df'
        },
        {
          width: 945,
          suffix: '-header',
          directory: 'df'
        }
      ]
    }

    return versions;
  }

  return Image;
};
