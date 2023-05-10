import checkHealth from '../app';

test.each([
  [{ name: 'Маг', health: 97 }, 'healthy'],
  [{ name: 'Маг', health: 49 }, 'wounded'],
  [{ name: 'Маг', health: 10 }, 'critical'],
])(
  'Health character',
  (obj, expected) => {
    const res = checkHealth(obj);

    expect(res).toBe(expected);
  },
);
