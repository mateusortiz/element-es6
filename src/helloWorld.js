'use strict';

class Hello extends HTMLElement {
	createdCallback() {
		this.textContent = "Hello World";
	}
}

document.registerElement('hello-world', Hello);