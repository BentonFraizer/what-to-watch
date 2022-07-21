import { Review } from '../types';

const reviewsList: Review[] = [
  {
    'id': 1,
    'user': {
      'id': 14,
      'name': 'Corey'
    },
    'rating': 9.6,
    'comment': 'It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie.',
    'date': '2022-06-20T12:25:36.946Z'
  },
  {
    'id': 2,
    'user': {
      'id': 16,
      'name': 'Mollie'
    },
    'rating': 7.4,
    'comment': 'It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie.',
    'date': '2022-06-19T12:25:36.946Z'
  },
  {
    'id': 3,
    'user': {
      'id': 11,
      'name': 'Jack'
    },
    'rating': 5.8,
    'comment': 'It was well acted, directed, and the music was good. But the story is yawn. Not trying to rip anybody but I checked my watch a dozen times during this movie.',
    'date': '2022-06-13T12:25:36.946Z'
  }
];

export default reviewsList;
