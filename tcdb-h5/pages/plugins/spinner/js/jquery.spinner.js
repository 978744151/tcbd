;(function ($) {
	$.fn.spinner = function (opts) {
		return this.each(function () {
			//var defaults = {value: 1, min: 1, max: 10000};
			console.log("begin");
			var defaults = {
				value: 1,
				min: 1,
				max: 10000,
				add: function (e) {
					console.log("www");
					add();
				},
				del: function (e) {
					del();
				},
				blur: function (e) {
					blur(e)
				}
			};
			var options = $.extend(defaults, opts);
			var keyCodes = {up: 38, down: 40};
			var container = $('<div></div>');
			container.addClass('spinner');
			var textField = $(this).addClass('value').attr('maxlength', '2').val(options.value)
				.bind('keyup paste change', function (e) {
					var field = $(this);
					if (e.keyCode == keyCodes.up) changeValue(1);
					else if (e.keyCode == keyCodes.down) changeValue(-1);
					else if (getValue(field) != container.data('lastValidValue')) validateAndTrigger(field)
				});
			textField.wrap(container);
			textField.bind("blur", function () {

			});

			var increaseButton = $('<button class="increase">+</button>').click(function () {
				changeValue(1)
			});
			var decreaseButton = $('<button class="decrease">-</button>').click(function () {
				changeValue(-1)
			});

			validate(textField);
			container.data('lastValidValue', options.value);
			textField.before(decreaseButton);
			textField.after(increaseButton);

			//值改变
			function changeValue(delta) {
				textField.val(getValue() + delta);

				//orderConfirm.CountChange(textField.val());//���÷���,�ı�����

				validateAndTrigger(textField)
			}

			function validateAndTrigger(field) {
				clearTimeout(container.data('timeout'));
				var value = validate(field);
				//alert(value)
				if (!isInvalid(value)) {
					textField.trigger('update', [field, value])
				}
			}

			//
			function validate(field) {
				var value = getValue();
				if (value <= options.min) decreaseButton.attr('disabled', 'disabled');
				else decreaseButton.removeAttr('disabled');
				if (value >= options.max) increaseButton.attr('disabled', 'disabled');
				else increaseButton.removeAttr('disabled');
				field.toggleClass('invalid', isInvalid(value)).toggleClass('passive', value === 0);

				if (isInvalid(value)) {
					var timeout = setTimeout(function () {
						textField.val(container.data('lastValidValue'));
						validate(field)
					}, 500);
					container.data('timeout', timeout)
				} else {
					container.data('lastValidValue', value)
				}
				return value
			}

			//是否无效
			function isInvalid(value) {
				return isNaN(+value) || value < options.min;
			}

			//取值
			function getValue(field) {
				field = field || textField;
				return parseInt(field.val() || 0, 10)
			}
		})
	};
	//$.fn.test = function (aa) {
	//    alert(123)
	//};

})(Zepto);