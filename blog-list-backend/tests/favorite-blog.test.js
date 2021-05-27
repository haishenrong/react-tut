const listHelper = require('../utils/list_helper')

describe('most likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234e17f8',
      title: 'Bobby',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 32,
      __v: 1
    },
    {
      _id: '5a422aa71b54a676234f17f8',
      title: 'A comprehensive guide to my traversal algorithm',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 1000,
      __v: 2
    }
  ]

  test('most likes to Dijkstras Alg', () => {
    const result = listHelper.favoriteBlog(listWithOneBlog)
    expect(result).toEqual(
      {
        title: 'A comprehensive guide to my traversal algorithm',
        author: 'Edsger W. Dijkstra',
        likes: 1000
      }
    )
  })
})