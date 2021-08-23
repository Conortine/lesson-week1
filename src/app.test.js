import { attack } from './app';

describe('attack', () => {
  const a = { atk: 20 };
  const b = { def: 10 };
  const damage = 10;
  
    
  it('a의 공격력과 b의 방어력을 계산해 데미지를 리턴합니다.', () => {
    expect(attack(a, b)).toBe(damage);
  });
  
});
