'use strict';

module.exports = (plugin) => {
  // Set default permissions for public role
  plugin.bootstrap = async ({ strapi }) => {
    // Find the public role
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    // Find the authenticated role
    const authenticatedRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'authenticated' } });

    // Set permissions for public role
    const publicPermissions = {
      'api::service.service': ['find', 'findOne'],
      'api::insight.insight': ['find', 'findOne'],
      'api::case-study.case-study': ['find', 'findOne'],
      'api::author.author': ['find', 'findOne'],
    };

    // Set permissions for authenticated role (editors)
    const authenticatedPermissions = {
      'api::service.service': ['find', 'findOne', 'create', 'update', 'delete'],
      'api::insight.insight': ['find', 'findOne', 'create', 'update', 'delete'],
      'api::case-study.case-study': ['find', 'findOne', 'create', 'update', 'delete'],
      'api::author.author': ['find', 'findOne', 'create', 'update', 'delete'],
    };

    // Update permissions for public role
    await Promise.all(
      Object.entries(publicPermissions).map(([controller, actions]) => {
        return Promise.all(
          actions.map((action) => {
            return strapi
              .query('plugin::users-permissions.permission')
              .update({
                where: {
                  action: `${controller}.${action}`,
                  role: publicRole.id,
                },
                data: { enabled: true },
              });
          })
        );
      })
    );

    // Update permissions for authenticated role
    await Promise.all(
      Object.entries(authenticatedPermissions).map(([controller, actions]) => {
        return Promise.all(
          actions.map((action) => {
            return strapi
              .query('plugin::users-permissions.permission')
              .update({
                where: {
                  action: `${controller}.${action}`,
                  role: authenticatedRole.id,
                },
                data: { enabled: true },
              });
          })
        );
      })
    );
  };

  return plugin;
};