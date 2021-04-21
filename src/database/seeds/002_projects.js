
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          user_id: 1,
          title: "projeto Tiago 1"
        },
        {
          user_id: 1,
          title: "projeto Tiago 2"
        },
        {
          user_id: 2,
          title: "projeto qualquer 1"
        },
        {
          user_id: 2,
          title: "projeto qualquer 2"
        },
        {
          user_id: 2,
          title: "projeto qualquer 3"
        },
        {
          user_id: 4,
          title: "projeto disponivel 1"
        },
        {
          user_id: 4,
          title: "projeto disponivel 2"
        },
        {
          user_id: 4,
          title: "projeto disponivel 3"
        },
        {
          user_id: 4,
          title: "projeto disponivel 4"
        }
      ]);
    });
};
