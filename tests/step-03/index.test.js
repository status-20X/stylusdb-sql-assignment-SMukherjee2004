// tests/step-03/index.test.js

const parseQuery = require('../../src/queryParser');

test('Parse SQL Query', () => {
    const query = 'SELECT id, name FROM student';
    const parsed = parseQuery(query);
    expect(parsed).toEqual({
        fields: ['id', 'name'],
        table: 'student',
        whereClauses: [] // Change whereClause to whereClauses with an empty array
    });
});
