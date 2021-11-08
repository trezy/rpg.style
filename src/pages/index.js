// Module imports
import { useEffect, useState } from 'react'





// Local imports
import { ChoicePanel } from 'components/ChoicePanel'
import { CheckboxGroup } from 'components/CheckboxGroup'
import { Input } from 'components/Input'
import { useCallback } from 'react'





// Constants
const BACKGROUND_OPTIONS = [
	'Can write scenarios',
	'Can illustrate',
	'Can write stories',
	'Good at organizing online sessions',
	'Strong IT background',
	'Good at acting/voice acting',
	'RNGesus (critical hitter!)',
	'Cursed dice (critical fumbler)',
]
const PLAYSTYLE_PREFERENCES_OPTIONS = [
	'Combat',
	'Investigation/Interrogation',
	'RP-heavy',
	'Comedy',
	'Stealth',
	'PvP',
	'Gloomy/depressive development is welcome',
	'Gloomy/depressive development NOT welcome',
]
const ROLE_PREFERENCES_OPTIONS = [
	'GM only',
	'If I had to pick...\nGM',
	'If I had to pick...\nPlayer',
	'Player',
]
const ROMANCE_PREFERENCES_OPTIONS = [
	'Prefer MF pairings',
	'Any pairing is OK',
	'Prefer FF or MM pairings',
	'No romance please',
]





export default function HomePage() {
	const [playerProfile, setPlayerProfile] = useState({
		avatarURL: '',
		name: '',
		id: '',

		background: [],
		playstylePreferences: [],
		rolePreferences: null,
		romancePreferences: null,
	})

	const updatePlayerProfile = useCallback((key, value) => {
		setPlayerProfile(previousState => {
			return {
				...previousState,
				[key]: value,
			}
		})
	}, [setPlayerProfile])

	const handleAvatarURLChange = useCallback(avatarURL => {
		updatePlayerProfile('avatarURL', avatarURL)
	}, [updatePlayerProfile])

	const handleBackgroundChange = useCallback(state => {
		updatePlayerProfile('background', state)
	}, [updatePlayerProfile])

	const handleIDChange = useCallback(event => {
		updatePlayerProfile('id', event.target.value)
	}, [updatePlayerProfile])

	const handleNameChange = useCallback(event => {
		updatePlayerProfile('name', event.target.value)
	}, [updatePlayerProfile])

	const handlePlaystylePreferencesChange = useCallback(state => {
		updatePlayerProfile('playstylePreferences', state)
	}, [updatePlayerProfile])

	const handleRolePreferencesChange = useCallback(state => {
		updatePlayerProfile('rolePreferences', state)
	}, [updatePlayerProfile])

	const handleRomancePreferencesChange = useCallback(state => {
		updatePlayerProfile('romancePreferences', state)
	}, [updatePlayerProfile])

	useEffect(() => {
		console.log(playerProfile)
	}, [playerProfile])

	return (
		<main>
			<div className="left-column">
				<div className="avatar-wrapper" />

				<Input
					id="player-name"
					label="Name"
					onChange={handleNameChange}
					value={playerProfile.name} />

				<Input
					id="player-id"
					label="ID"
					onChange={handleIDChange}
					value={playerProfile.id} />

				<section>
					<header>{'Systems & Supplements'}</header>
				</section>

				<section>
					<header>{'Session Style'}</header>

					<CheckboxGroup
						items={[
							{ label: 'Voice' },
							{ label: 'Chat' },
							{ label: 'Mix' },
							{ label: 'Offline' },
						]} />

					<header>{'Tools Used'}</header>
				</section>
			</div>

			<div className="right-column">
				<section>
					<header>Role Preference</header>

					<ChoicePanel
						id="role-preferences"
						onChange={handleRolePreferencesChange}
						options={ROLE_PREFERENCES_OPTIONS}
						value={playerProfile.rolePreferences} />
				</section>

				<section>
					<header>Romance Preference</header>

					<ChoicePanel
						id="romance-preference"
						onChange={handleRomancePreferencesChange}
						options={ROMANCE_PREFERENCES_OPTIONS}
						value={playerProfile.romancePreferences} />
				</section>

				<section>
					<header>Playstyle Preference</header>

					<ChoicePanel
						id="playstyle-preference"
						isMultiselect
						onChange={handlePlaystylePreferencesChange}
						options={PLAYSTYLE_PREFERENCES_OPTIONS}
						value={playerProfile.playstylePreferences} />
				</section>

				<section>
					<header>Background</header>

					<ChoicePanel
						id="background"
						isMultiselect
						onChange={handleBackgroundChange}
						options={BACKGROUND_OPTIONS}
						value={playerProfile.background} />
				</section>
			</div>
		</main>
	)
}
