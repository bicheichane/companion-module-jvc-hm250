exports.getActions = function() {

	let actions = {}

	//Web Button Events
	actions['Iris'] = {
		label: 'iris control',
		options: [
			{
				label: 'Select value',
				type: 'select2',
				id: 'button',
				default: 'Open1',
				choices: [
					{ label: 'Manual', id: 'Manual'},
					{ label: 'Auto', id: 'Auto'},
					{ label: 'Open 1', id: 'Open1'},
					{ label: 'Open 2', id: 'Open2'},
					{ label: 'Open 3', id: 'Open3'},
					{ label: 'Close 1', id: 'Close1'},
					{ label: 'Close 2', id: 'Close2'},
					{ label: 'Close 3', id: 'Close3'},
					{ label: 'Push Auto', id: 'PushAuto'},
				],
				minChoicesForSearch: 0
			}
		]
	}
	
	actions['Gain'] = {
		label: 'Gain control',
		options: [
			{
				label: 'Select value',
				type: 'select2',
				id: 'button',
				default: '+1',
				choices: [
					{ label: 'Lolux', id: 'Lolux'},
					{ label: 'L Preset', id: 'L'},
					{ label: 'M Preset', id: 'M'},
					{ label: 'H Preset', id: 'H'},
					{ label: '+1', id: 'Up1'},
					{ label: '-1', id: 'Down1'}
				],
				minChoicesForSearch: 0
			}
		]
	}
	
	actions['AeLevel'] = {
		label: 'Auto Exposure Level',
		options: [
			{
				label: 'Select value',
				type: 'select2',
				id: 'button',
				default: '+1',
				choices: [
					{ label: '+1', id: 'AeLevelUp'},
					{ label: '-1', id: 'AeLevelDown'},
					{ label: 'On', id: 'AdjustOn'},
					{ label: 'Off', id: 'AdjustOff'}
				],
				minChoicesForSearch: 0
			}
		]
	}
	
	actions['Shutter'] = {
		label: 'Shutter',
		options: [
			{
				label: 'Select value',
				type: 'select2',
				id: 'button',
				default: 'Faster',
				choices: [
					{ label: 'Mode: Step', id: 'Step'},
					{ label: 'Mode: Variable', id: 'Variable'},
					{ label: 'Eei', id: 'Eei'},
					{ label: 'Slower', id: 'Slower'},
					{ label: 'Faster', id: 'Faster'},
				],
				minChoicesForSearch: 0
			}
		]
	}

	actions['Whb'] = {
		label: 'White Balance',
		options: [
			{
				label: 'Select value',
				type: 'select2',
				id: 'button',
				default: 'A',
				choices: [
					{ label: 'Preset', id: 'Preset'},
					{ label: 'A', id: 'A'},
					{ label: 'B', id: 'B'},
					{ label: 'Adjust', id: 'Adjust'},
					{ label: 'WhPaintRP', id: 'WhPaintRP'},
					{ label: 'WhPaintRM', id: 'WhPaintRM'},
					{ label: 'WhPaintBP', id: 'WhPaintBP'},
					{ label: 'WhPaintBM', id: 'WhPaintBM'},
				],
				minChoicesForSearch: 0
			}
		]
	}

	actions['Zoom'] = {
		label: 'Zoom',
		options: [
			{
				label: 'Select value',
				type: 'select2',
				id: 'button',
				default: 'Tele 1',
				choices: [
					{ label: 'In 1', id: 'Tele1'},
					{ label: 'In 2', id: 'Tele2'},
					{ label: 'In 3', id: 'Tele3'},
					{ label: 'Out 1', id: 'Wide1'},
					{ label: 'Out 2', id: 'Wide2'},
					{ label: 'Out 3', id: 'Wide3'}
				],
				minChoicesForSearch: 0
			}
		]
	}

	actions['Focus'] = {
		label: 'Focus',
		options: [
			{
				label: 'Select value',
				type: 'select2',
				id: 'button',
				default: 'Far 1',
				choices: [
					{ label: 'Auto', id: 'Auto'},
					{ label: 'Manual', id: 'Manual'},
					{ label: 'PushAuto', id: 'PushAuto'},
					{ label: 'Far 1', id: 'Far1'},
					{ label: 'Far 2', id: 'Far2'},
					{ label: 'Far 3', id: 'Far3'},
					{ label: 'Near 1', id: 'Near1'},
					{ label: 'Near 2', id: 'Near2'},
					{ label: 'Near 3', id: 'Near3'}
				],
				minChoicesForSearch: 0
			}
		]
	}

	actions['MasterBlack'] = {
		label: 'Master Black',
		options: [
			{
				label: 'Select value',
				type: 'select2',
				id: 'button',
				default: 'Up 1',
				choices: [
					{ label: 'Up 1', id: 'Up1'},
					{ label: 'Up 2', id: 'Up2'},
					{ label: 'Up 3', id: 'Up3'},
					{ label: 'Down 1', id: 'Down1'},
					{ label: 'Down 2', id: 'Down2'},
					{ label: 'Down 3', id: 'Down3'}
				],
				minChoicesForSearch: 0
			}
		]
	}

	actions['User'] = {
		label: 'User Buttons',
		options: [
			{
				label: 'Select value',
				type: 'select2',
				id: 'button',
				default: 'Button 1',
				choices: [
					{ label: '0', id: 'Sw0'},
					{ label: '1', id: 'Sw1'},
					{ label: '2', id: 'Sw2'},
					{ label: '3', id: 'Sw3'},
					{ label: '4', id: 'Sw4'},
					{ label: '5', id: 'Sw5'},
					{ label: '6', id: 'Sw6'},
					{ label: '7', id: 'Sw7'},
					{ label: '8', id: 'Sw8'},
					{ label: '9', id: 'Sw9'},
				],
				minChoicesForSearch: 0
			}
		]
	}

	actions['Disptv'] = {
		label: 'Display Out',
		options: [
			{
				label: 'Select value',
				type: 'select2',
				id: 'button',
				default: 'On',
				choices: [
					{ label: 'Off', id: 'Off'},
					{ label: 'On', id: 'On'},
				],
				minChoicesForSearch: 0
			}
		]
	}

	actions['Menu'] = {
		label: 'Menu Navigation',
		options: [
			{
				label: 'Select value',
				tooltip: 'Up, Down, Left and Right events call assigned function when menu is closed',
				type: 'select2',
				id: 'button',
				default: 'On',
				choices: [
					{ label: 'Display', id: 'Display'},
					{ label: 'Status', id: 'Status'},
					{ label: 'Menu', id: 'Menu'},
					{ label: 'Cancel', id: 'Cancel'},
					{ label: 'Set', id: 'Set'},
					{ label: 'Up', id: 'Up'},
					{ label: 'Down', id: 'Down'},
					{ label: 'Left', id: 'Left'},
					{ label: 'Right', id: 'Right'},
				],
				minChoicesForSearch: 0
			}
		]
	}

	actions['Rec'] = {
		label: 'Recording',
		options: [
			{
				label: 'Select value',
				type: 'select2',
				id: 'button',
				default: 'On',
				choices: [
					{ label: 'Start', id: 'Start'},
					{ label: 'Stop', id: 'Stop'},
					{ label: 'Up', id: 'Up'},
					{ label: 'Down', id: 'Down'},
				],
				minChoicesForSearch: 0
			}
		]
	}
		]
	}

	return actions
}
