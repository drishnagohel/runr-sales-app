(function() {
	// Utility function to initialize flatpickr on multiple elements
	const initializeFlatpickr = (selector, options) => {
		const elements = document.querySelectorAll(selector);
		elements.forEach(el => el.flatpickr(options));
	};

	// Flat Picker
	// --------------------------------------------------------------------

	// Date
	initializeFlatpickr('.flatpickr-date', {
		monthSelectorType: 'static',
		dateFormat: 'd-m-Y'
	});

	// Time
	initializeFlatpickr('.flatpickr-time', {
		enableTime: true,
		noCalendar: true
	});

	// Datetime
	initializeFlatpickr('.flatpickr-datetime', {
		enableTime: true,
		dateFormat: 'd-m-Y H:i'
		// dateFormat: 'Y-m-d H:i'
	});

	// Multi Date Select
	initializeFlatpickr('.flatpickr-multi', {
		weekNumbers: true,
		enableTime: true,
		mode: 'multiple',
		minDate: 'today'
	});

	// Range
	initializeFlatpickr('.flatpickr-range', {
		mode: 'range'
	});

	// Inline
	initializeFlatpickr('.flatpickr-inline', {
		inline: true,
		allowInput: false,
		monthSelectorType: 'static'
	});

	// Human Friendly
	initializeFlatpickr('.flatpickr-human-friendly', {
		altInput: true,
		altFormat: 'F j, Y',
		dateFormat: 'Y-m-d'
	});

	// Disabled Date Range
	const fromDate = new Date(Date.now() - 3600 * 1000 * 48);
	const toDate = new Date(Date.now() + 3600 * 1000 * 48);
	initializeFlatpickr('.flatpickr-disabled-range', {
		dateFormat: 'Y-m-d',
		disable: [{
			from: fromDate.toISOString().split('T')[0],
			to: toDate.toISOString().split('T')[0]
		}]
	});
})();
