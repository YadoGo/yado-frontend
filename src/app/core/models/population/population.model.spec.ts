import { Population } from './population.model';

describe('Population', () => {
  it('should create', () => {
    const population: Population = {
      id: 1,
      name: 'Some Name',
    };
    expect(population).toBeTruthy();
  });

  it('should have id and name properties', () => {
    const population: Population = {
      id: 1,
      name: 'Some Name',
    };
    expect('id' in population).toBeTruthy();
    expect('name' in population).toBeTruthy();
  });

  it('should have valid types for id and name properties', () => {
    const population: Population = {
      id: 1,
      name: 'Some Name',
    };
    expect(typeof population.id).toBe('number');
    expect(typeof population.name).toBe('string');
  });
});
