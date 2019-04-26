export const people = [
  {
    name: 'Renato',
    sabores: {
      marguerita: 4,
      quatroQueijos: 5,
      escarola: 4,
      portuguesa: 5,
      frangoCatupiry: 4,
      napolitana: 3,
    },
  },
  {
    name: 'Marcelo',
    sabores: {
      marguerita: 2,
      quatroQueijos: 2,
      escarola: 1,
      portuguesa: 3,
      frangoCatupiry: 5,
      napolitana: 2,
    },
  },
  {
    name: 'Lenon',
    sabores: {
      marguerita: 4,
      quatroQueijos: 5,
      escarola: 2,
      portuguesa: 1,
      frangoCatupiry: 1,
      napolitana: 3,
    },
  },
  {
    name: 'Renata',
    sabores: {
      marguerita: 4,
      quatroQueijos: 5,
      escarola: 1,
      portuguesa: 1,
      frangoCatupiry: 3,
      napolitana: 4,
    },
  },
  {
    name: 'Washington',
    sabores: {
      marguerita: 1,
      quatroQueijos: 1,
      escarola: 2,
      portuguesa: 3,
      frangoCatupiry: 4,
      napolitana: 3,
    },
  },
  {
    name: 'Tino',
    sabores: {
      marguerita: 1,
      quatroQueijos: 5,
      escarola: 1,
      portuguesa: 4,
      frangoCatupiry: 3,
      napolitana: 2,
    },
  },
  {
    name: 'Luca',
    sabores: {
      marguerita: 5,
      quatroQueijos: 4,
      escarola: 3,
      portuguesa: 4,
      frangoCatupiry: 3,
      napolitana: 2,
    },
  },
]

export const checkFlavors = pessoa => {
  return true
}

export const getFlavors = pessoa => {
  return pessoa.sabores
}

export const getBestMatch = person => {
  const flavors = getFlavors(person)
}

export const getPeopleToShareTopping = (people, name, topping) => {
  const person = people.find(a => a.name === name)
  const toppingRate = person.sabores[topping] // > number
  const matches = []
  return matches.map(a => a.name)
}
