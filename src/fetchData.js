const fakeProductData = [
	{
		id: "123",
		title: "Monopoly",
		brand: "Hasbro",
		price: 3999,
		image:
			"https://i5.walmartimages.com/asr/c73c17f0-00a1-4930-84a0-c0b671962e0f.5c115b3592c85e25809c0298d273c240.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
		description:
			"Select a favorite Monopoly token, place it on Go and roll the dice to own it all! Includes 16 Community Chest cards voted on by fans. It's all about buying, selling, and trading properties to win. Chance or Community cards can be a game changer. Will they make a player richer -- or send someone to Jail?",
	},
	{
		id: "456",
		title: "Sorry",
		brand: "Hasbro",
		price: 989,
		image:
			"https://i5.walmartimages.com/asr/9e96bc01-e33c-433a-b79d-0eb197693595_1.5c9000e18ae25045bdc14b961a58e074.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
		description:
			"Slide, collide and score to win the Sorry Game. Kids draw cards to see how far they get to move one of the pawns on the board. If they land on a Slide they can zip to the end and bump their opponents pawns or their own Jump over pawns and hide in the Safety zone where opponents can't go. Kids keep on moving and bumping until they get all three of their pawns from Start to Home. But watch out, because if the pawn gets bumped, Sorry It's all the way back to Start!",
	},
	{
		id: "789",
		title: "Connect4",
		brand: "Hasbro",
		price: 1097,
		image:
			"https://i5.walmartimages.com/asr/360be9fd-419c-4bb5-8e68-ad32ae974cd3.9b10d84286a33e071c95400a0c70f5a4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
		description:
			"Do you go up to the side or diagonally start in the middle or at the edge. It's your choice in Connect 4 Game. Stack the 4 discs vertically line them up side to side or go on the diagonal. As long as you get 4-in-a-row you win. Stay one step ahead of your opponent and block their attempts to get to 4-in-a-row first. Play all 3 Connect 4 games and crush the competition! ",
	},
	{
		id: "111",
		title: "Guess Who?",
		brand: "Hasbro",
		price: 1097,
		image:
			"https://i5.walmartimages.com/asr/5295fd05-b791-4109-9d82-07e8f41a9634_1.eeddf5db2eeb5a98103151a5df399166.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
		description:
			"It's the Guess Who game - the original guessing game .This Guess Wh game goes back to the tabletop style boards, styled after the original, rather than handheld boards. Each player chooses a mystery character and then using yes or no questions, they try to figure out the other player's mystery character. When they think they know who their opponent's mystery character is, players make a guess. If the guess is wrong, that player loses the game Players can also challenge opponents to a series of games in the Championship Series, where the first player to win 5 games is the Guess Who champion. ",
	},
];

export const fetchProducts = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				resolve(fakeProductData);
			} catch (error) {
				reject(error);
			}
		}, 1000);
	});
