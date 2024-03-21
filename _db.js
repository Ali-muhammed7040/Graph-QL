let games = [
    { id: '1', title: 'Zelda Tears', platform: ['Switch'] },
    { id: '2', title: 'final fatsy', platform: ['ps5'] },
    { id: '3', title: 'Elden Ring', platform: ['ps5', 'xbox', 'pc'] },
    { id: '4', title: 'Mario Kart', platform: ['Switch'] },
    {
        id: '5', title: 'Pokemon', platform: ['ps5', 'xbox', 'pc']
    }
]

let authors = [
    { id: '1', name: 'ac', verified: true },
    { id: '2', name: 'abc', verified: false },
    { id: '6', name: 'adc', verified: true },
];


let reviews = [
    { id: '1', rating: 9, content: 'please say thanks to your God, huh he donot need he is great', author_id: '1', game_id: '2' },
    { id: '2', rating: 10, content: 'i can fix all alone he give me all powers', author_id: '2', game_id: '1' },
    { id: '3', rating: 11, content: 'yes he send me to take all your problems', author_id: '3', game_id: '3' },
    { id: '4', rating: 12, content: 'Lee please request your god', author_id: '4', game_id: '4' },
    { id: '5', rating: 13, content: 'Now i am good', author_id: '5', game_id: '5' },
    { id: '6', rating: 14, content: 'Lee is back', author_id: '6', game_id: '6' },
]

export default { games, authors, reviews }