const Now = {
	type: 'datetimeNow',
	label: 'Datetime: Now',
	description: 'Returns the current date and time.',
	initialWidth: 160,
	outputs: ports => [
		ports.number({ name: 'datetime', label: 'Datetime' }),
		ports.number({ name: 'date', label: 'Date' }),
		ports.number({ name: 'time', label: 'Time' }),
		ports.number({ name: 'timestamp', label: 'Timestamp' }),
		ports.number({ name: 'year', label: 'Year' }),
		ports.number({ name: 'month', label: 'Month' }),
		ports.number({ name: 'day', label: 'Day' }),
		ports.number({ name: 'hour', label: 'Hour' }),
		ports.number({ name: 'minute', label: 'Minute' }),
		ports.number({ name: 'second', label: 'Second' }),
		ports.number({ name: 'milliseconds', label: 'Milliseconds' }),
		ports.string({ name: 'monthName', label: 'Month Name' }),
		ports.string({ name: 'dayName', label: 'Day Name' }),
	],
}

export default Now
