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
		period: { from: new Date(2016, 7, 11), to: new Date(2020, 5, 20) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Data Structures & Algorithms', 'Software Engineering', 'Database Management', 'Operating Systems', 'Web Technologies', 'Python Programming']
	},
	{
		degree: 'Master of Science in Computer Science',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'Arizona State University',
		period: { from: new Date(2022, 8, 17), to: new Date(2024, 5, 4) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Cloud Computing', 'Data Mining', 'Machine Learning', 'Data Visualizatin', 'Software Verification & Testing']
	}
];

export const title = 'Education';
