exports.getActions = function() {

	let actions = {}

	actions['zoom'] = {
		label: 'Zoom',
		options: [
			{
				label: 'Select value',
				type: 'dropdown',
				id: 'button',
				default: 'Stop',
				choices: [{ label: 'Stop', id: 'Stop'},{ label: 'Tele1', id: 'Tele1'},{ label: 'Tele2', id: 'Tele2'},{ label: 'Tele3', id: 'Tele3'},{ label: 'Wide1', id: 'Wide1'},{ label: 'Wide2', id: 'Wide2'},{ label: 'Wide3', id: 'Wide3'}]
			}
		]
	}

	actions['zoomSwitchOperation'] = {
		label: 'Zoom switch',
		options: [
			{
				label: 'Select value',
				type: 'dropdown',
				id: 'direction',
				default: 'Stop',
				choices: [{ label: 'Stop', id: 'Stop'},{ label: 'Tele', id: 'Tele'},{ label: 'Wide', id: 'Wide'}]
			},
			{
				label: 'Speed (0-8)',
				type: 'textinput',
				id: 'speed',
				default: '2',
				regex: '/^[0-8]$/'
			}
		]
	}

	actions['focus'] = {
		label: 'Focus',
		options: [
			{
				label: 'Select value',
				type: 'dropdown',
				id: 'button',
				default: 'Stop',
				choices: [{ label: 'Stop', id: 'Stop'},{ label: 'PushAuto', id: 'PushAuto'},{ label: 'Far1', id: 'Far1'},{ label: 'Far2', id: 'Far2'},{ label: 'Far3', id: 'Far3'},{ label: 'Near1', id: 'Near1'},{ label: 'Near2', id: 'Near2'},{ label: 'Near3', id: 'Near3'}]
			}
		]
	}

	actions['gain'] = {
		label: 'Gain control',
		options: [
			{
				label: 'Select value',
				type: 'dropdown',
				id: 'button',
				default: 'M',
				choices: [{ label: '+1', id: 'Up1'},{ label: '-1', id: 'Down1'}]
			}
		]
	}

	actions['whb'] = {
		label: 'White balance control',
		options: [
			{
				label: 'Select value',
				type: 'dropdown',
				id: 'button',
				default: 'Awb',
				choices: [{ label: 'Auto WB', id: 'Awb'},{ label: '3200K', id: '3200K'},{ label: '5600K', id: '5600K'},{ label: 'Manual', id: 'Manual'},{ label: 'Faw', id: 'Faw'}]
			}
		]
	}

	actions['iris'] = {
		label: 'iris control',
		options: [
			{
				label: 'Select value',
				type: 'dropdown',
				id: 'button',
				default: 'Open1',
				choices: [{ label: 'Open 1', id: 'Open1'},{ label: 'Close 1', id: 'Close1'}]
			}
		]
	}

	actions['exposure'] = {
		label: 'Exposure settings',
		options: [
			{
				label: 'Select value',
				type: 'dropdown',
				id: 'button',
				default: 'Manual',
				choices: [{ label: 'Manual', id: 'Manual'},{ label: 'Auto', id: 'Auto'},{ label: 'IrisPriority', id: 'IrisPriority'},{ label: 'ShutterPriority', id: 'ShutterPriority'}]
			}
		]
	}

	/***Extra options***/

	actions['setZoomCtrl'] = {
		label: 'Set zoom position',
		options: [{
			label: 'postion (0-499)',
			type: 'textinput',
			id: 'position',
			default: '350',
			regex: '/^([0-9]|[1-9][0-9]|[1-4][0-9][0-9])$/'
		}]
	}

	actions['setPresetZoomPosition'] = {
		label: 'Set preset zoom position in memory',
		options: [
		{
			label: 'postion (A B C D)',
			type: 'dropdown',
			id: 'positionStore',
			default: 'A',
			choices: [{label:'A', id:'A'},{label:'B', id:'B'},{label:'C', id:'C'},{label:'D', id:'D'}]
		},{
			label: 'postion (0-499)',
			type: 'textinput',
			id: 'position',
			default: '350',
			regex: '/^([0-9]|[1-9][0-9]|[1-4][0-9][0-9])$/'
		}]
	}

	return actions
}
