import { healthIndicator } from './healthIndicator';

test('health > 50', () => {
  expect(healthIndicator({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('health = 50', () => {
  expect(healthIndicator({ name: 'Воин', health: 50 })).toBe('wounded');
});

test('health = 15', () => {
  expect(healthIndicator({ name: 'Лучник', health: 15 })).toBe('wounded');
});

test('health < 15', () => {
  expect(healthIndicator({ name: 'Разбойник', health: 10 })).toBe('critical');
});
