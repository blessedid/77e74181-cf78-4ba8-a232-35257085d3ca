export default {
    state: {
        delivery: {
            type: null,
            addresses: [],
            details: null
        },
        step: 'selectType',
        geoObjectCount: 0,
    },
    mutations: {
        setStep(state, step) {
            state.step = step;
        },
        setDeliveryType(state, type) {
            state.delivery.type = type;
        },
        setAddress(state, address) {
            state.delivery.addresses = address;
        },
        setDetails(state, details){
            state.delivery.details = details;
        },
        clearParamsAndDelivery(state) {
            state.delivery.addresses = [];
            state.delivery.details = null;
        },
    },
    actions: {},
    getters: {
        getStep(state) {
            return state.step;
        },
        getDelivery(state) {
            return state.delivery;
        }
    },
}
