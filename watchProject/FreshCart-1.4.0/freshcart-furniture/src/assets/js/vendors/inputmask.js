// Inputmask js

(function () {
	// phone
	var phoneMaskElement = document.getElementById('phone-mask');
	if (phoneMaskElement) {
		var phoneMask = IMask(phoneMaskElement, {
			mask: '+{7}(000)000-00-00',
		});

		phoneMask.on('accept', function () {
			if (phoneMask.unmaskedValue.length >= 11) {
				document.getElementById('phone-complete').style.display = '';
				document.getElementById('phone-unmasked').innerHTML = phoneMask.unmaskedValue;
			}
		});
		phoneMask.on('complete', function () {
			document.getElementById('phone-complete').style.display = 'inline-block';
		});
	}

	// ssn

	var ssnMaskElement = document.getElementById('ssn-mask');
	if (ssnMaskElement) {
		var ssnMask = IMask(ssnMaskElement, {
			mask: 'XXX-XX-0000',
			definitions: {
				X: {
					mask: '0',
					displayChar: 'X',
					placeholderChar: '#',
				},
			},
			lazy: false,
			overwrite: 'shift',
		});

		ssnMask.on('accept', function () {
			if (ssnMask.value.length === 11) {
				document.getElementById('ssn-complete').style.display = '';
				document.getElementById('ssn-value').innerHTML = ssnMask.value;
			}
		});

		ssnMask.on('complete', function () {
			document.getElementById('ssn-complete').style.display = 'inline-block';
		});
	}

	// rigix

	var regExpMaskElement = document.getElementById('regexp-mask');
	if (regExpMaskElement) {
		var regExpMask = IMask(regExpMaskElement, {
			mask: /^[1-6]\d{0,5}$/,
		});
	}

	// number

	var numberMaskElement = document.getElementById('number-mask');
	if (numberMaskElement) {
		var numberMask = IMask(numberMaskElement, {
			mask: Number,
			min: -10000,
			max: 10000,
			thousandsSeparator: ' ',
		});

		numberMask.on('accept', function () {
			document.getElementById('number-value').innerHTML = numberMask.masked.number;
		});
	}

	// date mask

	var dateMaskElement = document.getElementById('date-mask');
	if (dateMaskElement) {
		var dateMask = IMask(dateMaskElement, {
			mask: Date,
			min: new Date(1990, 0, 1),
			max: new Date(2020, 0, 1),
			lazy: false,
		});

		dateMask.on('accept', function () {
			document.getElementById('date-value').innerHTML = dateMask.masked.date || '-';
		});
	}

	// date mask
	// Select the input element
	var dateMaskElement = document.getElementById('dy-mask');

	// Check if the element exists
	if (dateMaskElement) {
		// Initialize the IMask
		var dateMask = IMask(dateMaskElement, {
			mask: 'MM{/}DD{/}YY', // Mask pattern for MM/YY
			lazy: false, // Keeps the placeholder visible even when the input is empty
			blocks: {
				MM: {
					mask: IMask.MaskedRange, // Mask range for months
					from: 1,
					to: 12,
					maxLength: 2,
				},
				DD: {
					mask: IMask.MaskedRange, // Mask range for date
					from: 1,
					to: 31,
					maxLength: 2,
				},
				YY: {
					mask: IMask.MaskedRange, // Mask range for year (last two digits)
					from: 23, // Start from the current year (2023)
					to: 99, // Allow up to the year 2099
					maxLength: 2,
				},
			},
		});


		var dateMaskElement = document.getElementById('dy-mask2');
		if (dateMaskElement) {
			// IMask 초기화
			var dateMask = IMask(dateMaskElement, {
				mask: 'YYYY{/}MM{/}DD', // YYYY/MM/DD 형식으로 마스크 패턴 변경
				lazy: false, // 입력이 비어 있어도 자리 표시자가 계속 보이도록 설정
				blocks: {
					YYYY: {
						mask: IMask.MaskedRange, // 연도를 위한 마스크
						from: 2023, // 현재 연도부터 시작 (2023년)
						to: 2099, // 최대 2099년까지 허용
						maxLength: 4, // 연도는 4자리
					},
					MM: {
						mask: IMask.MaskedRange, // 월을 위한 마스크
						from: 1,
						to: 12,
						maxLength: 2, // 월은 2자리
					},
					DD: {
						mask: IMask.MaskedRange, // 일을 위한 마스크
						from: 1,
						to: 31,
						maxLength: 2, // 일은 2자리
					},
				},
			});
		}

		// Optional: Handle the mask on accept event
		dateMask.on('accept', function () {
			// You can display the masked value somewhere, if needed
			console.log('Entered value:', dateMask.value);
		});
	}

	// dynamic

	var dynamicMaskElement = document.getElementById('dynamic-mask');
	if (dynamicMaskElement) {
		var dynamicMask = IMask(dynamicMaskElement, {
			mask: [
				{
					mask: '+{7}(000)000-00-00',
				},
				{
					mask: /^\S*@?\S*$/,
				},
			],
		});

		dynamicMask.on('accept', function () {
			if (dynamicMask.masked.unmaskedValue.length > 0) {
				document.getElementById('dynamic-value').innerHTML = dynamicMask.masked.unmaskedValue || '-';
			}
		});
	}

	// currency

	var currencyMaskElement = document.getElementById('currency-mask');
	if (currencyMaskElement) {
		var currencyMask = IMask(currencyMaskElement, {
			mask: '$num',
			blocks: {
				num: {
					mask: Number,
					thousandsSeparator: ' ',
				},
			},
		});

		currencyMask.on('accept', function () {
			document.getElementById('currency-value').innerHTML = currencyMask.masked.unmaskedValue || '-';
		});
	}

	// phonePipe

	var pipeMaskElement = document.getElementById('pipe-mask');

	if (pipeMaskElement) {
		var phoneMask = IMask.createPipe(phoneMask.masked, IMask.PIPE_TYPE.UNMASKED, IMask.PIPE_TYPE.MASKED);

		pipeMaskElement.addEventListener('input', function (e) {
			var inputValue = e.target.value;
			var pipeValueElement = document.getElementById('pipe-value');
			pipeValueElement.innerHTML = phoneMask(inputValue) || '-';
		});
	}

	// credit card

	var cardMaskElem = document.getElementById('card-mask');

	if (cardMaskElem) {
		var creditCardMask = new IMask(cardMaskElem, {
			mask: '0000-0000-0000-0000',
		});
	}

	// digital mask
	var digitMaskElem = document.getElementById('digit-mask');
	if (digitMaskElem) {
		var digitPinMask = new IMask(digitMaskElem, {
			mask: '000',
		});
	}
	// Get the discount code input element
	var discountCodeInput = document.getElementById('discountCode');
	if (discountCodeInput) {
		// Initialize IMask on the input field
		var maskOptions = new IMask(discountCodeInput, {
			mask: 'FC-000000', // 'FC-' followed by exactly 6 digits
			lazy: false, // 'FC-' part is shown immediately as a placeholder
			placeholderChar: 'X', // Show Xs as placeholders for digits
		});
	}
})();
