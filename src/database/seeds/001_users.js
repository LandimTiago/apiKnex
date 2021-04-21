
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'Tiago' },
        { username: 'Diego' },
        { username: 'Allana' },
        { username: 'Antonio' },
        { username: 'Felipe' },
        { username: 'Ana' },
      ]);
    });
};
