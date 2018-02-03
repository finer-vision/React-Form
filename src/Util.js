import Event from "fv-event";

export default class Util {
    /**
     * Get a unique string.
     * @returns {string}
     */
    static guid() {
        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
    }

    /**
     * Remove all listeners in the Event package.
     * @param {Array} listeners
     */
    static removeListeners(listeners = []) {
        listeners.map(listener => Event.removeListener(listener));
    }
}
