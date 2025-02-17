import { Users, RefreshTokens, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO

	await db.insert(Users).values([
		{
			name: 'sebastian sarmiento',
			email: 'sebastian@test.com',
			acces_token: '1234567890'
		},
		{
			name: 'jose sarmiento',
			email: 'jose@test.com',
			acces_token: '1234567890'
		},

	])

	await db.insert(RefreshTokens).values([
		{
			refresh_token: '1234567890',
			user_id: 1
		},
	])

}
