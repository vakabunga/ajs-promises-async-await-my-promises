import GameSavingLoader from '../gameSavingLoader';

describe('GameSavingLoader:', () => {
  test('should return Object', () => {
    const result = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    };
    GameSavingLoader.load().then((saving) => {
      expect(JSON.parse(saving)).toEqual(result);
    });
  });
});
