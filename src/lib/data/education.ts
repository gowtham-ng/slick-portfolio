import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: "Bachelor's degree in Computer Science",
		description: '',
		location: 'India',
		logo: Assets.Unknown,
		name: '',
		organization: 'SASTRA University',
		period: { from: new Date(2016, 11, 7), to: new Date(2020, 20, 5) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	},
	{
		degree: 'Masters Degree in Computer Science',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'Arizona State University',
		period: { from: new Date(2022, 17, 8), to: new Date(2024, 4, 5) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	}
];

export const title = 'Education';
