import {
  people,
  checkFlavors,
  getFlavors,
  getBestMatch,
  getPeopleToShareTopping,
} from './order-pizza'

describe('Should verify people information', () => {
  it('Should return an array of people', () => {
    expect(Array.isArray(people)).toBe(true)
  })

  it('Should contains pizza names and votes', () => {
    expect(checkFlavors(people[0])).toBe(true)
  })

  it('Should return the properties of sabores', () => {
    expect(getFlavors(people[0])).toEqual(people[0].sabores)
  })

  it('should get best match for Luca flavors', () => {
    expect(getBestMatch(people.find(person => person.name === 'Luca'))).toEqual(
      'Renato'
    )
  })

  // it('should return best match for Renato', () => {
  //   expect(
  //     getBestMatch(people.find(person => person.name === 'Renato'))
  //   ).toEqual('Luca')
  // })
})

// describe('getToppingRate', () => {
//   it('should bring rate', () => {
//     const rating = getToppingRate(people, 'Luca', 'marguerita')
//     expect(rating).toEqual(5)
//   })
// })

describe('it should sort by flavor', () => {})

describe('decide what people are going to share pizza', () => {
  // it('should return a list of people with similar taste', () => {
  //   const peopleMatches = getPeopleToSharePizza(people, 'Luca')
  //   expect(peopleMatches).toEqual([
  //     'Tino', ''
  //   ])
  // })

  it('should return the best match by topping', () => {
    const peopleMatches = getPeopleToShareTopping(people, 'Luca', 'marguerita')
    expect(peopleMatches).toEqual(['Renato', 'Lenon', 'Renata'])
  })

  it('should return the best match by topping', () => {
    const peopleMatches = getPeopleToShareTopping(
      people,
      'Renato',
      'portuguesa'
    )
    expect(peopleMatches).toEqual(['Tino', 'Luca'])
  })
})

describe('ranking', () => {
  it.only('should return ranking for luca', () => {
    expect(getRankingByPerson(people, 'Luca')).toBe({
      Renato: 1,
    })
  })
})
