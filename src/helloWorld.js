'use strict';

class Hello extends HTMLElement {
	createdCallback() {
		this.textContent = "Hello World, Today's date " + new Date().toJSON().slice(0, 10);
	}
}

document.registerElement('hello-world', Hello);