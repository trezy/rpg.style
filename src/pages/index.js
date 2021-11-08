// Module imports
import {
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'





// Local imports
import { ChoicePanel } from 'components/ChoicePanel'
import { CheckboxGroup } from 'components/CheckboxGroup'
import { Input } from 'components/Input'
import { transformStringToID } from 'helpers/transformStringToID'





export default function HomePage() {
	const { t: translate } = useTranslation('common')
	const [playerProfile, setPlayerProfile] = useState({
		avatarURL: '',
		name: '',
		id: '',

		background: [],
		playstylePreferences: [],
		rolePreferences: null,
		romancePreferences: null,
	})

	const getOptionObject = useCallback(key => {
		return {
			id: transformStringToID(key),
			label: translate(key),
			original: key,
		}
	}, [
		transformStringToID,
		translate,
	])

	const translations = useMemo(() => ({
		backgroundHeader: translate('backgroundHeader'),
		idLabel: translate('idLabel'),
		nameLabel: translate('nameLabel'),
		playstylePreferenceHeader: translate('playstylePreferenceHeader'),
		rolePreferenceHeader: translate('rolePreferenceHeader'),
		romancePreferenceHeader: translate('romancePreferenceHeader'),
		sessionStyleHeader: translate('sessionStyleHeader'),
		systemsAndSupplementsHeader: translate('systemsAndSupplementsHeader'),
		toolsHeader: translate('toolsHeader'),

		backgroundOptions: [
			getOptionObject('backgroundOption1'),
			getOptionObject('backgroundOption2'),
			getOptionObject('backgroundOption3'),
			getOptionObject('backgroundOption4'),
			getOptionObject('backgroundOption5'),
			getOptionObject('backgroundOption6'),
			getOptionObject('backgroundOption7'),
			getOptionObject('backgroundOption8'),
		],
		playstylePreferencesOptions: [
			getOptionObject('playstylePreferenceOption1'),
			getOptionObject('playstylePreferenceOption2'),
			getOptionObject('playstylePreferenceOption3'),
			getOptionObject('playstylePreferenceOption4'),
			getOptionObject('playstylePreferenceOption5'),
			getOptionObject('playstylePreferenceOption6'),
			getOptionObject('playstylePreferenceOption7'),
			getOptionObject('playstylePreferenceOption8'),
		],
		rolePreferencesOptions: [
			getOptionObject('rolePreferenceOption1'),
			getOptionObject('rolePreferenceOption2'),
			getOptionObject('rolePreferenceOption3'),
			getOptionObject('rolePreferenceOption4'),
		],
		romancePreferencesOptions: [
			getOptionObject('romancePreferenceOption1'),
			getOptionObject('romancePreferenceOption2'),
			getOptionObject('romancePreferenceOption3'),
			getOptionObject('romancePreferenceOption4'),
		],
		sessionStyleOptions: [
			getOptionObject('sessionStyleOption1'),
			getOptionObject('sessionStyleOption2'),
			getOptionObject('sessionStyleOption3'),
			getOptionObject('sessionStyleOption4'),
		],
	}), [getOptionObject])

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
					label={translations.nameLabel}
					onChange={handleNameChange}
					value={playerProfile.name} />

				<Input
					id="player-id"
					label={translations.idLabel}
					onChange={handleIDChange}
					value={playerProfile.id} />

				<section>
					<header>{translations.systemsAndSupplementsHeader}</header>
				</section>

				<section>
					<header>{translations.sessionStyleHeader}</header>

					<CheckboxGroup items={translations.sessionStyleOptions} />

					<header>{translations.toolsHeader}</header>
				</section>
			</div>

			<div className="right-column">
				<section>
					<header>{translations.rolePreferenceHeader}</header>

					<ChoicePanel
						id="role-preferences"
						onChange={handleRolePreferencesChange}
						options={translations.rolePreferencesOptions}
						value={playerProfile.rolePreferences} />
				</section>

				<section>
					<header>{translations.romancePreferenceHeader}</header>

					<ChoicePanel
						id="romance-preference"
						onChange={handleRomancePreferencesChange}
						options={translations.romancePreferencesOptions}
						value={playerProfile.romancePreferences} />
				</section>

				<section>
					<header>{translations.playstylePreferenceHeader}</header>

					<ChoicePanel
						id="playstyle-preference"
						isMultiselect
						onChange={handlePlaystylePreferencesChange}
						options={translations.playstylePreferencesOptions}
						value={playerProfile.playstylePreferences} />
				</section>

				<section>
					<header>{translations.backgroundHeader}</header>

					<ChoicePanel
						id="background"
						isMultiselect
						onChange={handleBackgroundChange}
						options={translations.backgroundOptions}
						value={playerProfile.background} />
				</section>
			</div>
		</main>
	)
}


export async function getStaticProps({ locale }) {
	const translations = await serverSideTranslations(locale, ['common'])
	console.log({locale, translations: translations._nextI18Next.initialI18nStore})
  return { props: translations }
}
