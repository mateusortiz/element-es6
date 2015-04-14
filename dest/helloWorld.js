'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var Hello = (function (_HTMLElement) {
	function Hello() {
		_classCallCheck(this, Hello);

		if (_HTMLElement != null) {
			_HTMLElement.apply(this, arguments);
		}
	}

	_inherits(Hello, _HTMLElement);

	_createClass(Hello, [{
		key: 'createdCallback',
		value: function createdCallback() {
			this.textContent = 'Hello World, Today\'s date ' + new Date().toJSON().slice(0, 10);
		}
	}]);

	return Hello;
})(HTMLElement);

document.registerElement('hello-world', Hello);