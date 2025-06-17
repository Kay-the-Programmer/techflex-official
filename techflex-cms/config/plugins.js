'use strict';

module.exports = {
  graphql: {
    enabled: true,
    config: {
      defaultLimit: 10,
      maxLimit: 100,
    },
  },
  upload: {
    config: {
      provider: 'local',
      providerOptions: {},
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
};