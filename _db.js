
let games = [
    { id: '1', title: 'Super Mario Bros', platform: ['NES'] },
    { id: '2', title: 'Mega Man', platform: ['NES'] },
    { id: '3', title: 'Super Mario World', platform: ['NES'] },
    { id: '4', title: 'Super Mario Bros 3', platform: ['NES'] },
    { id: '5', title: 'Super Mario Bros 2', platform: ['NES'] },
    { id: '6', title: 'Super Mario Advance', platform: ['GBA'] },
    { id: '7', title: 'Super Mario Advance 2', platform: ['GBA'] },
    { id: '8', title: 'Super Mario Advance 3', platform: ['GBA'] }]

let reviews = [
    { id: '1', rating: 5, content: 'Great game', author_id: '1', game_id: '2' },
    { id: '2', rating: 4, content: 'Pretty good', author_id: '2', game_id: '2' },
    { id: '3', rating: 3, content: 'Meh', author_id: '3', game_id: '2' },
    { id: '4', rating: 5, content: 'Great game', author_id: '1', game_id: '1' },
    { id: '5', rating: 4, content: 'Pretty good', author_id: '2', game_id: '1' },
    { id: '6', rating: 3, content: 'Meh', author_id: '3', game_id: '1' },
    { id: '7', rating: 5, content: 'Great game', author_id: '1', game_id: '3' },
    { id: '8', rating: 4, content: 'Pretty good', author_id: '2', game_id: '3' },
    { id: '9', rating: 3, content: 'Meh', author_id: '3', game_id: '3' },
    { id: '10', rating: 5, content: 'Great game', author_id: '1', game_id: '4' }
]

let authors = [
    { id: '1', name: 'Sam', varified: true },
    { id: '2', name: 'Tom', varified: true },
    { id: '3', name: 'Tim', varified: false }
]

export default { games, reviews, authors } 