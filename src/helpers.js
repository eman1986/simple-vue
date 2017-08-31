/**
 * Find an element of by its ID.
 * @param {string} id
 */
function getById(id) {
    return document.getElementById(id);
}

/**
 * See if an element has a class assigned to it.
 * @param {HTMLElement} el
 * @param {string} className
 */
function hasClass(el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    } else {
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
}

/**
 * Add a css class to an element
 * @param {HTMLElement} el
 * @param {string} className
 */
function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else if (!hasClass(el, className)) {
        el.className += " " + className;
    }
}

/**
 * Remove a css class from an element
 * @param {HTMLElement} el
 * @param {string} className
 */
function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else if (hasClass(el, className)) {
        let reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

/**
 * Attach Listener to Element
 * @param {HTMLElement} el
 * @param {string} event
 * @param {function} callback
 */
function on(el, event, callback) {
    el.addEventListener(event, callback(evt));
}

export { getById, hasClass, addClass, removeClass, on };